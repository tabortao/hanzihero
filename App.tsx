import React, { useState, useEffect } from 'react';
import { ViewState, GameConfig } from './types';
import { SelectionView } from './components/SelectionView';
import { GameView } from './components/GameView';
import { ReviewView } from './components/ReviewView';
import { CharacterBankView } from './components/CharacterBankView';
import { getStars } from './services/storage';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('SELECTION');
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [stars, setStars] = useState(0);

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
    setView('SELECTION');
    setGameConfig(null);
  };

  const handleReview = () => {
    setView('REVIEW');
  };

  const handleOpenBank = () => {
    setView('BANK');
  };

  const handleBackToMenu = () => {
    // Refresh stars just in case they were updated in review (future proofing)
    setStars(getStars());
    setView('SELECTION');
  };

  return (
    <div className="min-h-screen bg-[#ecfdf5] text-gray-800 font-sans selection:bg-yellow-200">
      <main className="w-full">
        {view === 'SELECTION' && (
          <SelectionView 
            onStartGame={handleStartGame} 
            onReview={handleReview}
            onOpenBank={handleOpenBank} 
            stars={stars}
          />
        )}
        {view === 'GAME' && gameConfig && (
          <GameView 
            config={gameConfig} 
            onExit={handleExitGame} 
          />
        )}
        {view === 'REVIEW' && (
          <ReviewView 
            onBack={handleBackToMenu} 
          />
        )}
        {view === 'BANK' && (
          <CharacterBankView 
            onBack={handleBackToMenu} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
