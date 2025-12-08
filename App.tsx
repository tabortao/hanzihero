
import React, { useState, useEffect, Suspense } from 'react';
import { ViewState, GameConfig, Character, Unit } from './types';
import { SelectionView } from './components/SelectionView';
import { BottomNav } from './components/SharedComponents';
import { getStars } from './services/storage';

// Lazy Load Heavy Components to speed up initial rendering
// The Dictionary data is huge, so views depending on it should be loaded lazily
const GameView = React.lazy(() => import('./components/GameView').then(module => ({ default: module.GameView })));
const ReviewView = React.lazy(() => import('./components/ReviewView').then(module => ({ default: module.ReviewView })));
const CharacterBankView = React.lazy(() => import('./components/CharacterBankView').then(module => ({ default: module.CharacterBankView })));
const StatsView = React.lazy(() => import('./components/StatsView').then(module => ({ default: module.StatsView })));
const StoryView = React.lazy(() => import('./components/StoryView').then(module => ({ default: module.StoryView })));
const ProfileView = React.lazy(() => import('./components/ProfileView').then(module => ({ default: module.ProfileView })));

// Simple Loading Spinner for Suspense Fallback
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#ecfdf5]">
    <div className="loader"></div>
    <span className="ml-3 text-indigo-600 font-bold">正在加载...</span>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('TAB_HOME');
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [stars, setStars] = useState(0);
  
  // New: State to pass specific unit data to StoryView
  const [storyGenContext, setStoryGenContext] = useState<{chars: Character[], topic: string} | null>(null);

  useEffect(() => {
    // Load initial stars
    setStars(getStars());
  }, []);

  const handleStartGame = (config: GameConfig) => {
    setGameConfig(config);
    setView('GAME');
  };

  const handleExitGame = (newTotalStars: number) => {
    setStars(newTotalStars);
    setView('TAB_HOME');
    setGameConfig(null);
  };

  const handleStudySingleChar = (char: Character) => {
    setGameConfig({
        mode: 'CHALLENGE',
        title: `学习生字：${char.char}`,
        characters: [char]
    });
    setView('GAME');
  };

  // Generate a story based on a specific unit
  const handleGenerateUnitStory = (unit: Unit) => {
      setStoryGenContext({
          chars: unit.characters,
          topic: `${unit.name}的故事`
      });
      setView('TAB_STORY');
  };

  // When inside a tab, switch sub-views
  const handleReview = () => setView('REVIEW');
  const handleOpenBank = () => setView('BANK');
  const handleBackToHome = () => {
    setStars(getStars());
    setView('TAB_HOME');
  };

  // Determine if we should show bottom nav
  const showNav = ['TAB_HOME', 'TAB_STORY', 'TAB_STATS', 'TAB_PROFILE'].includes(view);

  return (
    <div className="min-h-screen bg-[#ecfdf5] text-gray-800 font-sans selection:bg-yellow-200">
      <main className="w-full">
        {view === 'TAB_HOME' && (
          <SelectionView 
            onStartGame={handleStartGame} 
            onReview={handleReview}
            onOpenBank={handleOpenBank}
            onGenerateUnitStory={handleGenerateUnitStory}
            stars={stars}
          />
        )}
        
        {/* Lazy Loaded Views */}
        <Suspense fallback={<LoadingScreen />}>
          {view === 'TAB_STORY' && (
            <StoryView 
               initialContext={storyGenContext} 
               onClearContext={() => setStoryGenContext(null)}
            />
          )}
          {view === 'TAB_STATS' && <StatsView />}
          {view === 'TAB_PROFILE' && (
              <ProfileView onSave={() => setView('TAB_HOME')} />
          )}

          {/* Sub Views */}
          {view === 'GAME' && gameConfig && (
            <GameView 
              config={gameConfig} 
              onExit={handleExitGame} 
            />
          )}
          {view === 'REVIEW' && (
            <ReviewView 
              onBack={handleBackToHome} 
            />
          )}
          {view === 'BANK' && (
            <CharacterBankView 
              onBack={handleBackToHome} 
              onStudy={handleStudySingleChar}
            />
          )}
        </Suspense>
      </main>

      {showNav && (
          <BottomNav currentTab={view} onChange={setView} />
      )}
    </div>
  );
};

export default App;
