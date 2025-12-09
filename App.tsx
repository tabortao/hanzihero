
import React, { useState, useEffect, Suspense } from 'react';
import { ViewState, GameConfig, Character, Unit } from './types';
import { SelectionView } from './components/SelectionView';
import { BottomNav } from './components/SharedComponents';
import { getStars } from './services/storage';

// Lazy Load Heavy Components to speed up initial rendering
const GameView = React.lazy(() => import('./components/GameView').then(module => ({ default: module.GameView })));
const ReviewView = React.lazy(() => import('./components/ReviewView').then(module => ({ default: module.ReviewView })));
const CharacterBankView = React.lazy(() => import('./components/CharacterBankView').then(module => ({ default: module.CharacterBankView })));
const StatsView = React.lazy(() => import('./components/StatsView').then(module => ({ default: module.StatsView })));
const StoryView = React.lazy(() => import('./components/StoryView').then(module => ({ default: module.StoryView })));
const ProfileView = React.lazy(() => import('./components/ProfileView').then(module => ({ default: module.ProfileView })));
const DailyChallengeMenu = React.lazy(() => import('./components/DailyChallengeMenu').then(module => ({ default: module.DailyChallengeMenu })));
const ListenIdentifyGame = React.lazy(() => import('./components/ListenIdentifyGame').then(module => ({ default: module.ListenIdentifyGame })));
const LookIdentifyGame = React.lazy(() => import('./components/LookIdentifyGame').then(module => ({ default: module.LookIdentifyGame })));

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
  
  // New: State for Daily Challenge Characters
  const [dailyChars, setDailyChars] = useState<Character[]>([]);
  // Track if current game session was started from Daily Menu
  const [isDailySession, setIsDailySession] = useState(false);

  useEffect(() => {
    // Load initial stars
    setStars(getStars());
  }, []);

  const handleStartGame = (config: GameConfig) => {
    setGameConfig(config);
    setIsDailySession(false); // Reset unless specified otherwise
    setView('GAME');
  };

  const handleExitGame = (newTotalStars: number) => {
    setStars(newTotalStars);
    setGameConfig(null);
    if (isDailySession) {
        setView('DAILY_MENU');
    } else {
        setView('TAB_HOME');
    }
  };

  const handleBackFromDailyGame = () => {
      setStars(getStars()); // Refresh stars just in case
      setView('DAILY_MENU');
  }

  const handleStudySingleChar = (char: Character) => {
    setGameConfig({
        mode: 'CHALLENGE',
        title: `学习生字：${char.char}`,
        characters: [char]
    });
    setIsDailySession(false);
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

  // Open Daily Challenge Menu
  const handleOpenDailyMenu = (chars: Character[]) => {
      setDailyChars(chars);
      setView('DAILY_MENU');
  };

  // Select Mode from Menu
  const handleSelectDailyMode = (mode: 'CARD' | 'LISTEN' | 'LOOK' | 'CRUSH') => {
      setIsDailySession(true); // Mark as daily session so back button returns to menu
      
      if (mode === 'CARD') {
          // Classic Flashcard Game
          setGameConfig({
            mode: 'CHALLENGE',
            title: '📅 每日挑战 (识字卡片)',
            curriculumId: 'daily',
            gradeId: 'daily',
            unitId: 'daily',
            characters: dailyChars
          });
          setView('GAME');
      } else if (mode === 'LISTEN') {
          setView('GAME_LISTEN');
      } else if (mode === 'LOOK') {
          setView('GAME_LOOK');
      }
      // Future modes here
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
            onOpenDailyMenu={handleOpenDailyMenu}
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
          
          {/* New Daily Challenge Views */}
          {view === 'DAILY_MENU' && (
             <DailyChallengeMenu 
                onBack={handleBackToHome}
                onSelectMode={handleSelectDailyMode}
                characterCount={dailyChars.length}
             />
          )}
          {view === 'GAME_LISTEN' && (
              <ListenIdentifyGame 
                 characters={dailyChars}
                 onExit={handleBackFromDailyGame}
              />
          )}
          {view === 'GAME_LOOK' && (
              <LookIdentifyGame
                 characters={dailyChars}
                 onExit={handleBackFromDailyGame}
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
