import React, { useMemo, useState } from 'react';
import { Flame, Activity, PieChart, ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';
import { getDailyActivity, getKnownCharacters, getUnknownCharacters, getStories } from '../services/storage';

type HeatmapMode = 'YEAR' | 'MONTH' | 'WEEK';

export const StatsView: React.FC = () => {
  const activity = getDailyActivity();
  const known = getKnownCharacters();
  const unknown = getUnknownCharacters();
  const stories = getStories();

  const [heatmapMode, setHeatmapMode] = useState<HeatmapMode>('WEEK');
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- Ebbinghaus Data Calculation ---
  // Re-defined buckets for clearer mapping
  // 刚学 (New): < 24 hours
  // 1天 (1 Day): 1 - 3 days
  // 3天 (3 Days): 3 - 7 days
  // 7天 (7 Days): 7 - 15 days
  // 15天+ (Long term): > 15 days
  const ebbinghausData = useMemo(() => {
    const now = Date.now();
    const buckets = {
        new: 0,    // < 1 day
        day1: 0,   // 1-3 days
        day3: 0,   // 3-7 days
        day7: 0,   // 7-15 days
        day15: 0   // > 15 days
    };

    known.forEach(char => {
        // Safety check: ensure learnedAt is a valid number
        if (!char.learnedAt || typeof char.learnedAt !== 'number') {
            buckets.day15++; 
            return;
        }
        // Difference in days (float)
        const diffDays = (now - char.learnedAt) / (1000 * 60 * 60 * 24);
        
        if (diffDays < 1.0) buckets.new++;
        else if (diffDays < 3.0) buckets.day1++;
        else if (diffDays < 7.0) buckets.day3++;
        else if (diffDays < 15.0) buckets.day7++;
        else buckets.day15++;
    });

    return buckets;
  }, [known]);


  // --- Aggregates ---
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

  // --- Heatmap Data Generation ---
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
               dateNum: dateCursor.getDate(), // Display this in the box
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
          const d = new Date(currentDate);
          const day = d.getDay();
          const distToMon = day === 0 ? 6 : day - 1;
          d.setDate(d.getDate() - distToMon);
          return `${d.getFullYear()}年${d.getMonth()+1}月 第${Math.ceil(d.getDate()/7)}周`;
      }
      if (heatmapMode === 'MONTH') return `${currentDate.getFullYear()}年 ${currentDate.getMonth()+1}月`;
      return `${currentDate.getFullYear()}年`;
  };

  // --- CHART CONFIGURATION ---
  // Canvas Size: 600 x 250
  // X-Axis Distribution: New(0-1d), 1d(1-3d), 3d(3-7d), 7d(7-15d), 15d+
  const POINTS = {
      p0:  { cx: 60,  cy: 40,  color: '#10b981', label: '刚学', count: ebbinghausData.new },   // 100% - Green
      p1:  { cx: 180, cy: 140, color: '#3b82f6', label: '1天',  count: ebbinghausData.day1 },  // ~45% - Blue
      p2:  { cx: 300, cy: 180, color: '#f59e0b', label: '3天',  count: ebbinghausData.day3 },  // ~35% - Orange
      p3:  { cx: 420, cy: 200, color: '#ef4444', label: '7天',  count: ebbinghausData.day7 },  // ~25% - Red
      p4:  { cx: 540, cy: 220, color: '#8b5cf6', label: '15天+', count: ebbinghausData.day15 } // ~20% - Purple
  };

  // Smooth Curve: Steep drop initially, then flattening out
  const curvePath = `
    M ${POINTS.p0.cx},${POINTS.p0.cy}
    C ${POINTS.p0.cx + 40},${POINTS.p0.cy + 10} ${POINTS.p1.cx - 40},${POINTS.p1.cy - 20} ${POINTS.p1.cx},${POINTS.p1.cy}
    S ${POINTS.p2.cx - 40},${POINTS.p2.cy} ${POINTS.p2.cx},${POINTS.p2.cy}
    S ${POINTS.p3.cx - 40},${POINTS.p3.cy} ${POINTS.p3.cx},${POINTS.p3.cy}
    S ${POINTS.p4.cx - 40},${POINTS.p4.cy} ${POINTS.p4.cx},${POINTS.p4.cy}
  `;

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
           {/* Ebbinghaus Curve with Real User Data */}
           <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
               <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                        <Clock className="text-pink-500" size={20}/> 记忆遗忘状态
                    </h3>
                    <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full font-bold">
                        已掌握: {known.length} 字
                    </span>
               </div>
               
               {/* SVG Visualization */}
               <div className="relative h-64 w-full border-b border-gray-200">
                   <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet" viewBox="0 0 600 280">
                       
                       {/* The Curve */}
                       <path 
                         d={curvePath}
                         fill="none" 
                         stroke="#ec4899" 
                         strokeWidth="3"
                         strokeOpacity="0.3"
                         strokeLinecap="round"
                         vectorEffect="non-scaling-stroke"
                       />

                       {/* DATA BUBBLES */}
                       {Object.values(POINTS).map((pt, idx) => (
                           <g key={idx}>
                               {pt.count > 0 && (
                                   <>
                                     <circle 
                                        cx={pt.cx} cy={pt.cy} 
                                        r={Math.min(30, 14 + pt.count * 0.5)} 
                                        fill={pt.color} 
                                        opacity="0.9" 
                                        className="animate-bounce-in"
                                     />
                                     <text 
                                        x={pt.cx} y={pt.cy + 4} 
                                        textAnchor="middle" 
                                        fill="white" 
                                        fontSize="12" 
                                        fontWeight="bold"
                                        pointerEvents="none"
                                     >
                                         {pt.count}
                                     </text>
                                   </>
                               )}
                               
                               {/* Always show X-axis Ticks for context */}
                               <line x1={pt.cx} y1="250" x2={pt.cx} y2="260" stroke="#e5e7eb" strokeWidth="2" />
                           </g>
                       ))}

                   </svg>
                   
                   {/* X Axis Labels - Now Colored to match bubbles */}
                   <div className="absolute bottom-0 w-full h-6 text-[10px] font-bold">
                       {Object.values(POINTS).map((pt, idx) => (
                           <div 
                              key={idx}
                              className="absolute -translate-x-1/2 text-center transition-colors" 
                              style={{ 
                                  left: `${(pt.cx / 600) * 100}%`,
                                  color: pt.color 
                              }}
                           >
                               {pt.label}
                           </div>
                       ))}
                   </div>
               </div>
               
               {/* Legend / Info */}
               <p className="text-xs text-gray-400 mt-4 text-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                   气泡中的数字代表处于该遗忘阶段的汉字数量。<br/>
                   <span className="text-pink-500 font-bold">系统会自动安排复习</span>，防止遗忘。
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
                                <span className={`text-sm sm:text-lg font-bold ${d.count > 0 ? 'text-green-700' : 'text-gray-300'}`}>
                                    {heatmapMode === 'WEEK' ? d.dateNum : d.dayLabel}
                                </span>

                                {d.count > 0 && <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></div>}
                                {d.isToday && <div className="text-[8px] text-indigo-500 font-bold absolute top-1 right-1">今</div>}
                                
                                <div className="absolute bottom-full mb-1 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 left-1/2 -translate-x-1/2">
                                    {d.date}: {d.count} 字
                                </div>
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