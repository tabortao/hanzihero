import React, { useMemo, useState } from 'react';
import { Flame, Activity, PieChart, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { getDailyActivity, getKnownCharacters, getUnknownCharacters, getStories } from '../services/storage';

type HeatmapMode = 'YEAR' | 'MONTH' | 'WEEK';

export const StatsView: React.FC = () => {
  const activity = getDailyActivity();
  const known = getKnownCharacters();
  const unknown = getUnknownCharacters();
  const stories = getStories();

  const [heatmapMode, setHeatmapMode] = useState<HeatmapMode>('WEEK');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calculate Aggregates
  const stats = useMemo(() => {
    const today = new Date();
    let week = 0;
    let month = 0;
    let year = 0;

    Object.entries(activity).forEach(([dateStr, count]) => {
      const date = new Date(dateStr);
      const diffTime = Math.abs(today.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 7) week += count;
      if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) month += count;
      if (date.getFullYear() === today.getFullYear()) year += count;
    });

    return { week, month, year };
  }, [activity]);

  // Generate Heatmap Data based on Mode
  const gridData = useMemo(() => {
    const data = [];
    const dateCursor = new Date(currentDate);
    const todayStr = new Date().toISOString().split('T')[0];
    
    if (heatmapMode === 'WEEK') {
       // Show selected week (Mon-Sun)
       const day = dateCursor.getDay(); // Sun=0, Mon=1...
       // If day is 0 (Sun), we want to go back 6 days to prev Monday
       // If day is 1 (Mon), we stay
       const distToMon = day === 0 ? 6 : day - 1;
       dateCursor.setDate(dateCursor.getDate() - distToMon); // Go to Monday
       
       for (let i = 0; i < 7; i++) {
           const dStr = dateCursor.toISOString().split('T')[0];
           data.push({ 
               date: dStr, 
               count: activity[dStr] || 0, 
               dayLabel: ['一','二','三','四','五','六','日'][i],
               dateNum: dateCursor.getDate(),
               isToday: dStr === todayStr
           });
           dateCursor.setDate(dateCursor.getDate() + 1);
       }
    } else if (heatmapMode === 'MONTH') {
       // Show selected month grid
       dateCursor.setDate(1); // 1st of month
       const month = dateCursor.getMonth();
       
       // Calculate start day (Mon start)
       const startDay = dateCursor.getDay(); // 0-6
       // If 1st is Mon(1), offset 0. If Sun(0), offset 6.
       const offset = startDay === 0 ? 6 : startDay - 1;

       dateCursor.setDate(dateCursor.getDate() - offset); // Back to previous monday
       
       for (let i=0; i<42; i++) {
           const dStr = dateCursor.toISOString().split('T')[0];
           const isCurrentMonth = dateCursor.getMonth() === month;
           data.push({ 
               date: dStr, 
               count: activity[dStr] || 0, 
               dayLabel: dateCursor.getDate().toString(), 
               isCurrentMonth,
               isToday: dStr === todayStr 
           });
           dateCursor.setDate(dateCursor.getDate() + 1);
       }
    } else {
       // YEAR: Show 12 months
       const year = dateCursor.getFullYear();
       for (let m=0; m<12; m++) {
           let count = 0;
           for(let d=1; d<=31; d++) {
               const testDate = new Date(year, m, d);
               if (testDate.getMonth() !== m) break; 
               const dStr = testDate.toISOString().split('T')[0];
               count += (activity[dStr] || 0);
           }
           data.push({ date: `${year}-${m+1}`, count, dayLabel: `${m+1}月` });
       }
    }
    return data;
  }, [activity, heatmapMode, currentDate]);

  const handlePrev = () => {
      const d = new Date(currentDate);
      if (heatmapMode === 'WEEK') d.setDate(d.getDate() - 7);
      if (heatmapMode === 'MONTH') d.setMonth(d.getMonth() - 1);
      if (heatmapMode === 'YEAR') d.setFullYear(d.getFullYear() - 1);
      setCurrentDate(d);
  };
  
  const handleNext = () => {
      const d = new Date(currentDate);
      if (heatmapMode === 'WEEK') d.setDate(d.getDate() + 7);
      if (heatmapMode === 'MONTH') d.setMonth(d.getMonth() + 1);
      if (heatmapMode === 'YEAR') d.setFullYear(d.getFullYear() + 1);
      setCurrentDate(d);
  };

  const getTitle = () => {
      if (heatmapMode === 'WEEK') {
          // Find Monday of current date cursor
          const d = new Date(currentDate);
          const day = d.getDay();
          const distToMon = day === 0 ? 6 : day - 1;
          d.setDate(d.getDate() - distToMon);
          return `${d.getFullYear()}年${d.getMonth()+1}月 第${Math.ceil(d.getDate()/7)}周`;
      }
      if (heatmapMode === 'MONTH') return `${currentDate.getFullYear()}年 ${currentDate.getMonth()+1}月`;
      return `${currentDate.getFullYear()}年`;
  };

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-b-[2rem] text-white shadow-lg">
           <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <Activity /> 学习统计
           </h1>
           <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">本周学习</div>
              <div className="text-3xl font-bold font-mono">{stats.week}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">本月学习</div>
              <div className="text-3xl font-bold font-mono">{stats.month}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">今年累计</div>
              <div className="text-3xl font-bold font-mono">{stats.year}</div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6 -mt-4">
           {/* Ebbinghaus Curve */}
           <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
               <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                   <Activity className="text-pink-500" size={20}/> 记忆遗忘曲线
               </h3>
               {/* Fixed SVG ViewBox and Coordinates */}
               <div className="relative h-48 w-full border-l border-b border-gray-200">
                   <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 300">
                       {/* Background Grid Lines */}
                       <line x1="0" y1="75" x2="600" y2="75" stroke="#f3f4f6" strokeDasharray="4"/>
                       <line x1="0" y1="150" x2="600" y2="150" stroke="#f3f4f6" strokeDasharray="4"/>
                       <line x1="0" y1="225" x2="600" y2="225" stroke="#f3f4f6" strokeDasharray="4"/>
                       
                       {/* The Curve */}
                       <path 
                         d="M0,20 Q 50,250 600,280" 
                         fill="none" 
                         stroke="#ec4899" 
                         strokeWidth="3"
                         vectorEffect="non-scaling-stroke"
                       />
                       {/* Area under curve */}
                       <path 
                         d="M0,20 Q 50,250 600,280 L 600,300 L 0,300 Z" 
                         fill="url(#gradientPink)" 
                         opacity="0.1"
                         vectorEffect="non-scaling-stroke"
                       />
                        <defs>
                            <linearGradient id="gradientPink" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="white" />
                            </linearGradient>
                        </defs>
                   </svg>
                   
                   {/* Labels */}
                   <div className="absolute bottom-[-20px] left-0 text-[10px] text-gray-400">刚学完</div>
                   <div className="absolute bottom-[-20px] left-[15%] text-[10px] text-gray-400">1天</div>
                   <div className="absolute bottom-[-20px] left-[30%] text-[10px] text-gray-400">3天</div>
                   <div className="absolute bottom-[-20px] right-0 text-[10px] text-gray-400">30天</div>
               </div>
               <p className="text-xs text-gray-400 mt-6 text-center bg-gray-50 p-2 rounded-lg">
                   根据遗忘曲线，系统会在第1、3、7天安排复习，高效对抗遗忘。
               </p>
           </div>

           {/* Progress */}
           <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 grid md:grid-cols-2 gap-6">
             {/* Character Progress */}
             <div>
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <PieChart className="text-blue-500" size={20} /> 识字进度
                </h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">已认识</span>
                            <span className="font-bold text-green-600">{known.length} 字</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, known.length / 5)}%` }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500">生字本</span>
                            <span className="font-bold text-orange-500">{unknown.length} 字</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, unknown.length / 5)}%` }}></div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Story Progress */}
             <div>
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <BookOpen className="text-amber-500" size={20} /> 短文阅读
                </h3>
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                    <div className="text-4xl font-fun text-amber-600 mb-1">{stories.length}</div>
                    <div className="text-xs text-amber-800/60 font-bold">篇 AI 故事</div>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">
                    阅读短文有助于在语境中巩固汉字。
                </p>
             </div>
           </div>

            {/* Interactive Heatmap */}
           <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h3 className="font-bold text-gray-700 flex items-center gap-2">
                   <Flame className="text-orange-500" size={20} /> 学习分布
                </h3>
                
                <div className="flex bg-gray-100 p-1 rounded-lg self-start sm:self-auto">
                    {(['WEEK', 'MONTH', 'YEAR'] as HeatmapMode[]).map(m => (
                        <button
                          key={m}
                          onClick={() => setHeatmapMode(m)}
                          className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${heatmapMode === m ? 'bg-white shadow text-gray-800' : 'text-gray-400'}`}
                        >
                            {m === 'WEEK' ? '周' : m === 'MONTH' ? '月' : '年'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between mb-4 bg-gray-50 p-2 rounded-xl">
                <button onClick={handlePrev} className="p-1 hover:bg-gray-200 rounded-full"><ChevronLeft size={20} /></button>
                <span className="font-bold text-sm text-gray-700">{getTitle()}</span>
                <button onClick={handleNext} className="p-1 hover:bg-gray-200 rounded-full"><ChevronRight size={20} /></button>
            </div>

            <div className="w-full">
                {heatmapMode === 'YEAR' ? (
                     <div className="grid grid-cols-6 gap-2">
                        {gridData.map((d, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-full bg-gray-100 rounded-t-md relative group h-24 flex items-end">
                                    <div 
                                      className="w-full bg-green-500 rounded-t-md transition-all duration-500" 
                                      style={{ height: `${Math.min(100, d.count * 2)}%`, opacity: d.count > 0 ? 1 : 0.3 }}
                                    ></div>
                                    <div className="absolute bottom-full mb-1 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                                        {d.count} 字
                                    </div>
                                </div>
                                <span className="text-[10px] text-gray-400">{d.dayLabel}</span>
                            </div>
                        ))}
                     </div>
                ) : (
                    <div className={`grid ${heatmapMode === 'WEEK' ? 'grid-cols-7' : 'grid-cols-7'} gap-2`}>
                        {['一','二','三','四','五','六','日'].map(day => (
                            <div key={day} className="text-center text-[10px] text-gray-400 font-bold mb-1">{day}</div>
                        ))}
                        {gridData.map((d, i) => (
                            <div 
                                key={i} 
                                className={`
                                    aspect-square rounded-lg flex flex-col items-center justify-center relative group border transition-all
                                    ${d.isCurrentMonth === false ? 'opacity-30' : ''}
                                    ${d.count > 0 ? 'bg-green-100 border-green-200' : 'bg-gray-50 border-gray-100'}
                                    ${d.isToday ? 'ring-2 ring-indigo-400 ring-offset-1' : ''}
                                `}
                            >
                                <span className={`text-xs font-bold ${d.count > 0 ? 'text-green-700' : 'text-gray-300'}`}>{d.dayLabel}</span>
                                {d.count > 0 && <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></div>}
                                {d.isToday && <div className="text-[8px] text-indigo-500 font-bold absolute top-1">今</div>}
                                
                                <div className="absolute bottom-full mb-1 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 left-1/2 -translate-x-1/2">
                                    {d.date}: {d.count} 字
                                </div>
                                
                                {heatmapMode === 'WEEK' && (
                                    <div className="absolute -bottom-5 text-[9px] text-gray-300 font-mono">
                                        {d.dateNum}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

          </div>

        </div>
    </div>
  );
};