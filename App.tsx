
import React, { useState, useEffect, Suspense } from 'react';
import { ViewState, GameConfig, Character, Unit } from './types';
import { SelectionView } from './components/SelectionView';
import { BottomNav } from './components/SharedComponents';
import { getStars, getKnownCharacters, getUnknownCharacters, getSettings } from './services/storage';
import { findCharacterPinyin, getAllDictionaryChars } from './data/dictionary';
import { getOrderedCurriculumChars } from './appData';

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
const CrushGame = React.lazy(() => import('./components/CrushGame').then(module => ({ default: module.CrushGame })));
const FlashCardGame = React.lazy(() => import('./components/FlashCardGame').then(module => ({ default: module.FlashCardGame })));

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
  
  // State for "Active Game Characters" (Used for Daily Challenge OR Unit Games)
  const [activeGameChars, setActiveGameChars] = useState<Character[]>([]);
  const [menuTitle, setMenuTitle] = useState("每日挑战");

  // Track if current game session was started from Daily Menu or Unit
  const [gameSource, setGameSource] = useState<'DAILY' | 'UNIT'>('DAILY');
  
  // New: State for Card Game Mode
  const [isCardLevelMode, setIsCardLevelMode] = useState(false);
  
  // New: Test Mode State
  const [isTestMode, setIsTestMode] = useState(false);

  useEffect(() => {
    // Load initial stars
    setStars(getStars());
  }, []);

  const handleStartGame = (config: GameConfig) => {
    setGameConfig(config);
    // 修正：根据模式动态设置来源，如果是单元学习则设为 UNIT，确保返回首页
    setGameSource(config.mode === 'UNIT' ? 'UNIT' : 'DAILY');
    setIsCardLevelMode(false);
    setIsTestMode(false);
    setView('GAME');
  };

  const handleExitGame = (newTotalStars: number) => {
    setStars(newTotalStars);
    setGameConfig(null);
    if (gameSource === 'DAILY' && view === 'DAILY_MENU') {
        // Already at menu
    } else if (gameSource === 'DAILY') {
        setView('DAILY_MENU');
    } else {
        setView('TAB_HOME');
    }
  };

  const handleBackFromGame = () => {
      setStars(getStars()); // Refresh stars just in case
      if (gameSource === 'DAILY') {
          setView('DAILY_MENU');
      } else {
          setView('TAB_HOME');
      }
  }

  const handleStudySingleChar = (char: Character) => {
    setGameConfig({
        mode: 'CHALLENGE',
        title: `学习生字：${char.char}`,
        characters: [char]
    });
    setGameSource('UNIT'); // Treat as unit/single so it returns to home/bank
    setIsCardLevelMode(false);
    setIsTestMode(false);
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

  // Start various activities from a Unit
  const handleStartUnitActivity = (mode: 'LEARN' | 'LISTEN' | 'LOOK' | 'CRUSH' | 'STORY', unit: Unit) => {
      if (mode === 'LEARN') {
          handleStartGame({
            mode: 'UNIT',
            title: unit.name,
            characters: unit.characters
          });
          setGameSource('UNIT');
      } else if (mode === 'STORY') {
          handleGenerateUnitStory(unit);
      } else {
          // Games
          setActiveGameChars(unit.characters);
          setGameSource('UNIT');
          if (mode === 'LISTEN') setView('GAME_LISTEN');
          if (mode === 'LOOK') setView('GAME_LOOK');
          if (mode === 'CRUSH') setView('GAME_CRUSH');
      }
  };

  // When inside a tab, switch sub-views
  const handleReview = () => setView('REVIEW');
  const handleOpenBank = () => setView('BANK');
  const handleBackToHome = () => {
    setStars(getStars());
    setView('TAB_HOME');
  };

  // Open Daily Challenge Menu
  const handleOpenDailyMenu = (chars: Character[], title: string = "每日挑战") => {
      setActiveGameChars(chars);
      setMenuTitle(title);
      setView('DAILY_MENU');
  };

  // Select Mode from Daily Menu
  const handleSelectDailyMode = (mode: 'CARD' | 'LISTEN' | 'LOOK' | 'CRUSH' | 'TEST') => {
      setGameSource('DAILY');
      setIsTestMode(false);
      
      if (mode === 'CARD') {
          // New Level-based Flashcard Game
          setIsCardLevelMode(true);
          setView('GAME'); // Reuses GAME view key but renders FlashCardGame conditionally
      } else if (mode === 'LISTEN') {
          setView('GAME_LISTEN');
      } else if (mode === 'LOOK') {
          setView('GAME_LOOK');
      } else if (mode === 'CRUSH') {
          setView('GAME_CRUSH');
      } else if (mode === 'TEST') {
          const settings = getSettings();
          const currId = settings.selectedCurriculumId || 'renjiaoban';
          
          const orderedChars = getOrderedCurriculumChars(currId);
          const knownSet = new Set(getKnownCharacters().map(c => c.char));
          
          const unknownOrdered = orderedChars.filter(c => !knownSet.has(c.char));
          
          let testSet: Character[] = [];
          if (unknownOrdered.length < 5) {
              const allDict = getAllDictionaryChars();
              const remaining = allDict.filter(c => !knownSet.has(c));
              testSet = remaining.slice(0, 20).map(c => ({ char: c, pinyin: findCharacterPinyin(c) }));
          } else {
              testSet = unknownOrdered.slice(0, 20);
          }
          
          if (testSet.length === 0) {
              alert("太棒了！字库里的汉字你都学过啦！");
              return;
          }

          setActiveGameChars(testSet);
          setIsCardLevelMode(true);
          setIsTestMode(true);
          setView('GAME');
      }
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
            onStartUnitActivity={handleStartUnitActivity}
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
          {view === 'GAME' && (
             isCardLevelMode ? (
                 <FlashCardGame 
                    characters={activeGameChars}
                    onExit={handleBackFromGame}
                    isTestMode={isTestMode}
                 />
             ) : (
                gameConfig && (
                    <GameView 
                      config={gameConfig} 
                      onExit={handleExitGame} 
                      onBack={handleBackFromGame}
                    />
                )
             )
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
                characterCount={activeGameChars.length}
                characters={activeGameChars}
                title={menuTitle}
             />
          )}
          {view === 'GAME_LISTEN' && (
              <ListenIdentifyGame 
                 characters={activeGameChars}
                 onExit={handleBackFromGame}
              />
          )}
          {view === 'GAME_LOOK' && (
              <LookIdentifyGame
                 characters={activeGameChars}
                 onExit={handleBackFromGame}
              />
          )}
          {view === 'GAME_CRUSH' && (
              <CrushGame 
                 characters={activeGameChars}
                 onExit={handleBackFromGame}
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
