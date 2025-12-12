
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Book, CheckCircle, Star, Plus, Trophy, BarChart } from 'lucide-react';
import { Character } from '../types';
import { getLevelData, saveLevelData, getUnknownCharacters, getKnownCharacters, getGameStats, saveGameStats } from '../services/storage';
import { GameView } from './GameView';

const CARDS_PER_LEVEL = 5;

interface FlashCardGameProps {
  characters: Character[];
  onExit: () => void;
  isTestMode?: boolean;
}

const FlashCardGame: React.FC<FlashCardGameProps> = ({ characters, onExit, isTestMode = false }) => {
    const [view, setView] = useState<'MENU' | 'PLAYING' | 'COMPLETE' | 'COMPLETE_DAILY'>('MENU');
    const [currentLevel, setCurrentLevel] = useState(1);
    const [maxLevel, setMaxLevel] = useState(1);
    const [totalScore, setTotalScore] = useState(0);
    const [levelChars, setLevelChars] = useState<Character[]>([]);
    const [levelScore, setLevelScore] = useState(0);

    useEffect(() => {
        const stats = getGameStats('card');
        setMaxLevel(stats.maxLevel);
        setTotalScore(stats.totalScore);
        
        // If Test Mode, jump straight to playing with all characters
        if (isTestMode) {
             setLevelChars(characters);
             setView('PLAYING');
        }
    }, [isTestMode, characters]);

    const generateLevel = (levelNum: number): Character[] => {
        const stored = getLevelData('card', levelNum);
        if (stored && Array.isArray(stored.chars) && stored.chars.length === CARDS_PER_LEVEL) {
            return stored.chars;
        }

        const startIndex = (levelNum - 1) * CARDS_PER_LEVEL;
        let pool: Character[] = [];

        if (startIndex < characters.length) {
            pool = characters.slice(startIndex, startIndex + CARDS_PER_LEVEL);
        }
        
        if (pool.length === 0) {
            return [];
        }

        if (pool.length < CARDS_PER_LEVEL) {
            const padding = [...getUnknownCharacters(), ...getKnownCharacters()].sort(() => 0.5 - Math.random()).slice(0, CARDS_PER_LEVEL - pool.length);
            pool = [...pool, ...padding];
        }

        // Deduplicate and sanitize
        pool = Array.from(new Map(pool.map(c => [c.char, c])).values());
        
        if (pool.length === 0) return [];

        saveLevelData('card', levelNum, { chars: pool });
        return pool;
    };

    const startLevel = (levelNum: number) => {
        const maxDailyLevels = Math.ceil(characters.length / CARDS_PER_LEVEL);
        
        if (characters.length > 0 && levelNum > maxDailyLevels) {
            setTotalScore(totalScore); 
            setLevelScore(0);
            setView('COMPLETE_DAILY');
            return;
        }

        setCurrentLevel(levelNum);
        const chars = generateLevel(levelNum);
        
        if (chars.length === 0) {
             setView('COMPLETE_DAILY');
             return;
        }

        setLevelChars(chars);
        setLevelScore(0);
        setView('PLAYING');
    };

    const handleLevelComplete = (starsEarned: number) => {
        if (isTestMode) {
            // In Test Mode, just show completion, don't save level stats
            // We do not add test score to total game score
            setLevelScore(starsEarned);
            setView('COMPLETE');
            return;
        }

        const newTotal = totalScore + starsEarned;
        const newMax = Math.max(maxLevel, currentLevel + 1);
        
        setTotalScore(newTotal);
        setLevelScore(starsEarned);
        setMaxLevel(newMax);
        
        saveGameStats('card', { maxLevel: newMax, totalScore: newTotal });
        setView('COMPLETE');
    };

    // New: Handle Abort (Clicking back without finishing)
    const handleAbort = () => {
        if (isTestMode) {
            onExit(); // Direct exit for test mode
        } else {
            setView('MENU'); // Return to menu for normal mode
        }
    };

    if (view === 'MENU') {
        return (
            <div className="min-h-screen bg-[#fdfbf7] flex flex-col relative overflow-hidden font-sans max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-md p-4 shadow-sm border-b border-gray-100 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                        <button onClick={onExit} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 transition-colors">
                            <ArrowLeft size={20}/>
                        </button>
                        <div className="flex items-center gap-2 font-bold text-indigo-900 text-lg">
                            <Book className="text-indigo-600"/> 智趣翻卡屋
                        </div>
                    </div>
                    
                    <div className="bg-white/50 px-3 py-1 rounded-full text-indigo-800 font-bold text-sm flex items-center gap-1 border border-indigo-100">
                        <Star size={16} className="text-yellow-500 fill-yellow-500"/> {totalScore}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                        <button 
                            onClick={() => startLevel(maxLevel)}
                            className="aspect-square rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white/60 shadow-sm group"
                        >
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                <Plus size={24} />
                            </div>
                            <span className="text-xs font-bold">挑战新关卡</span>
                        </button>

                        {/* Only show COMPLETED or previously unlocked levels (excluding current new level) */}
                        {Array.from({ length: maxLevel - 1 }).map((_, i) => {
                            const lvl = (maxLevel - 1) - i;
                            return (
                                <button 
                                    key={lvl}
                                    onClick={() => startLevel(lvl)}
                                    className="aspect-square rounded-2xl flex flex-col items-center justify-center shadow-sm border-2 transition-all relative overflow-hidden bg-gray-100 border-gray-200 text-gray-400 hover:bg-white hover:border-gray-300 hover:text-gray-600"
                                >
                                    <span className="text-sm font-bold mb-1">关卡</span>
                                    <span className="text-3xl font-fun">{lvl}</span>
                                    <div className="absolute bottom-1 right-1 text-green-500"><CheckCircle size={16}/></div>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
    
    if (view === 'COMPLETE_DAILY') {
         return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-4 max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-indigo-100">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-indigo-900 mb-2">今日挑战已完成!</h2>
                    <p className="text-gray-500 mb-6 text-sm">今天要学习和复习的汉字已经全部完成啦。<br/>好好休息，明天再来挑战吧！</p>
                    
                    <button 
                        onClick={() => setView('MENU')}
                        className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
                    >
                        返回菜单
                    </button>
                </div>
            </div>
        );
    }

    if (view === 'COMPLETE') {
         return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-4 max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center max-w-sm w-full animate-bounce-in border-4 border-indigo-100">
                    <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-indigo-900 mb-2">
                        {isTestMode ? "测试完成!" : "Excellent!"}
                    </h2>
                    
                    {isTestMode ? (
                        <div className="mb-6 space-y-2">
                            <p className="text-gray-500">共测试 <span className="font-bold text-indigo-600">{levelChars.length}</span> 个汉字</p>
                            <p className="text-gray-500">已认识 <span className="font-bold text-green-600">{levelScore}</span> 个</p>
                        </div>
                    ) : (
                        <>
                           <p className="text-gray-500 mb-4">关卡 {currentLevel} 完成</p>
                           <p className="text-xl font-bold text-indigo-600 mb-6">本关获得: {levelScore} 星</p>
                        </>
                    )}
                    
                    <div className="space-y-3">
                        {!isTestMode && (
                            <button 
                                onClick={() => startLevel(currentLevel + 1)}
                                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
                            >
                                挑战下一关
                            </button>
                        )}
                        <button 
                            onClick={onExit}
                            className="w-full py-3 border-2 border-indigo-100 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50"
                        >
                            返回
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <GameView 
            config={{
                mode: 'CHALLENGE',
                title: isTestMode ? "识字量测试" : `第 ${currentLevel} 关`,
                characters: levelChars
            }}
            onExit={(newStars, sessionScore) => {
                // If isTestMode is true, GameView returns existing stars (no update),
                // but we need the session score for display.
                // If sessionScore is provided by GameView (it should be), use it.
                // Otherwise fallback to delta calculation (only works if stars updated).
                
                let points = 0;
                if (sessionScore !== undefined) {
                    points = sessionScore;
                } else {
                    points = Math.max(0, newStars - totalScore);
                }
                
                handleLevelComplete(points);
            }} 
            onBack={handleAbort}
            ignoreUnknown={isTestMode}
            showScore={!isTestMode}
            skipLearning={isTestMode}
            disableRewards={isTestMode}
        />
    );
};

export default FlashCardGame;
