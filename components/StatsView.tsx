
import React, { useMemo, useState } from 'react';
import { Flame, Activity, PieChart, ChevronLeft, ChevronRight, BookOpen, Clock, Award } from 'lucide-react';
import { getDailyActivity, getKnownCharacters, getUnknownCharacters, getStories } from '../services/storage';

type HeatmapMode = 'YEAR' | 'MONTH' | 'WEEK';

// Helper: Get the start of the week (Monday) for a given date
const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
};

export const StatsView: React.FC = () => {
  const activity = getDailyActivity();
  const known = getKnownCharacters();
  const unknown = getUnknownCharacters();
  const stories = getStories();

  const [heatmapMode, setHeatmapMode] = useState<HeatmapMode>('WEEK');
  const [currentDate, setCurrentDate] = useState(new Date());

  // --- Ebbinghaus Data Calculation ---
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
        if (!char.learnedAt || typeof char.learnedAt !== 'number') {
            buckets.day15++; 
            return;
        }
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
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Start of current week (Monday)
    const startOfWeek = getStartOfWeek(now);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);

    let week = 0;
    let month = 0;
    let year = 0;

    Object.entries(activity).forEach(([dateStr, val]) => {
      const count = val as number;
      const date = new Date(dateStr);
      // Reset time for accurate comparison
      date.setHours(0,0,0,0);
      
      // Weekly: strictly within current Mon-Sun
      if (date >= startOfWeek && date < endOfWeek) {
          week += count;
      }
      
      // Monthly: same month and year
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        month += count;
      }

      // Yearly
      if (date.getFullYear() === currentYear) {
        year += count;
      }
    });

    return { week, month, year };
  }, [activity]);

  // --- Chart/Grid Data Generation ---
  const chartData = useMemo(() => {
    const data = [];
    const dateCursor = new Date(currentDate);
    const todayStr = new Date().toISOString().split('T')[0];
    
    let maxVal = 10; // Default min height

    if (heatmapMode === 'WEEK') {
       const start = getStartOfWeek(dateCursor);
       dateCursor.setTime(start.getTime());
       
       for (let i = 0; i < 7; i++) {
           const dStr = dateCursor.toISOString().split('T')[0];
           const count = (activity[dStr] as number) || 0;
           if (count > maxVal) maxVal = count;
           data.push({ 
               date: dStr, 
               count, 
               dayLabel: ['一','二','三','四','五','六','日'][i],
               dateNum: dateCursor.getDate(), 
               isToday: dStr === todayStr
           });
           dateCursor.setDate(dateCursor.getDate() + 1);
       }
    } else if (heatmapMode === 'MONTH') {
       dateCursor.setDate(1); 
       const month = dateCursor.getMonth();
       const startDay = dateCursor.getDay(); 
       const offset = startDay === 0 ? 6 : startDay - 1;

       dateCursor.setDate(dateCursor.getDate() - offset); 
       
       for (let i=0; i<42; i++) {
           const dStr = dateCursor.toISOString().split('T')[0];
           const isCurrentMonth = dateCursor.getMonth() === month;
           const count = (activity[dStr] as number) || 0;
           if (count > maxVal) maxVal = count;
           data.push({ 
               date: dStr, 
               count, 
               dayLabel: dateCursor.getDate().toString(), 
               isCurrentMonth,
               isToday: dStr === todayStr 
           });
           dateCursor.setDate(dateCursor.getDate() + 1);
       }
    } else {
       // YEAR
       const year = dateCursor.getFullYear();
       for (let m=0; m<12; m++) {
           let count = 0;
           // Aggregate month
           for(let d=1; d<=31; d++) {
               const testDate = new Date(year, m, d);
               if (testDate.getMonth() !== m) break; 
               const dStr = testDate.toISOString().split('T')[0];
               count += ((activity[dStr] as number) || 0);
           }
           if (count > maxVal) maxVal = count;
           data.push({ date: `${year}-${m+1}`, count, dayLabel: `${m+1}月` });
       }
    }
    return { data, maxVal };
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
          const d = getStartOfWeek(currentDate);
          return `${d.getFullYear()}年${d.getMonth()+1}月 第${Math.ceil(d.getDate()/7)}周`;
      }
      if (heatmapMode === 'MONTH') return `${currentDate.getFullYear()}年 ${currentDate.getMonth()+1}月`;
      return `${currentDate.getFullYear()}年`;
  };

  const POINTS = {
      p0:  { cx: 60,  cy: 40,  color: '#10b981', label: '刚学', count: ebbinghausData.new },   
      p1:  { cx: 180, cy: 140, color: '#3b82f6', label: '1天',  count: ebbinghausData.day1 },  
      p2:  { cx: 300, cy: 180, color: '#f59e0b', label: '3天',  count: ebbinghausData.day3 },  
      p3:  { cx: 420, cy: 200, color: '#ef4444', label: '7天',  count: ebbinghausData.day7 },  
      p4:  { cx: 540, cy: 220, color: '#8b5cf6', label: '15天+', count: ebbinghausData.day15 } 
  };

  const curvePath = `
    M ${POINTS.p0.cx},${POINTS.p0.cy}
    C ${POINTS.p0.cx + 40},${POINTS.p0.cy + 10} ${POINTS.p1.cx - 40},${POINTS.p1.cy - 20} ${POINTS.p1.cx},${POINTS.p1.cy}
    S ${POINTS.p2.cx - 40},${POINTS.p2.cy} ${POINTS.p2.cx},${POINTS.p2.cy}
    S ${POINTS.p3.cx - 40},${POINTS.p3.cy} ${POINTS.p3.cx},${POINTS.p3.cy}
    S ${POINTS.p4.cx - 40},${POINTS.p4.cy} ${POINTS.p4.cx},${POINTS.p4.cy}
  `;

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pb-24">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-b-[2rem] text-white shadow-lg">
           <div className="flex justify-between items-start mb-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <Activity /> 学习统计
                </h1>
                <div className="bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2">
                    <Award size={20} className="text-yellow-300" />
                    <span className="text-xs opacity-90">全部识字</span>
                    <span className="text-xl font-bold">{known.length}</span>
                </div>
           </div>
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

        <div className="p-4 md:p-6 -mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Ebbinghaus Curve */}
           <div className="lg:col-span-8 bg-white rounded-3xl p-6 shadow-md border border-gray-100">
               <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                        <Clock className="text-pink-500" size={20}/> 记忆遗忘状态
                    </h3>
                    <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full font-bold">
                        3-1-3 复习法
                    </span>
               </div>
               
               <div className="relative h-64 w-full border-b border-gray-200">
                   <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet" viewBox="0 0 600 280">
                       <path 
                         d={curvePath}
                         fill="none" 
                         stroke="#ec4899" 
                         strokeWidth="3"
                         strokeOpacity="0.3"
                         strokeLinecap="round"
                         vectorEffect="non-scaling-stroke"
                       />
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
                               <line x1={pt.cx} y1="250" x2={pt.cx} y2="260" stroke="#e5e7eb" strokeWidth="2" />
                           </g>
                       ))}
                   </svg>
                   
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
               
               <p className="text-xs text-gray-400 mt-4 text-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                   气泡中的数字代表处于该遗忘阶段的汉字数量。<br/>
                   <span className="text-pink-500 font-bold">每日挑战</span>会自动安排复习这些汉字。
               </p>
           </div>

           {/* Progress */}
           <div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
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
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, known.length / 10)}%` }}></div>
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

             <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <BookOpen className="text-amber-500" size={20} /> 短文阅读
                </h3>
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                    <div className="text-4xl font-fun text-amber-600 mb-1">{stories.length}</div>
                    <div className="text-xs text-amber-800/60 font-bold">篇 AI 故事</div>
                </div>
             </div>
           </div>

            {/* Interactive Heatmap / Bar Chart */}
           <div className="lg:col-span-12 bg-white rounded-3xl p-6 shadow-md border border-gray-100">
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
                {heatmapMode === 'MONTH' ? (
                     // Grid / Calendar View for Month
                    <div className="grid grid-cols-7 gap-2">
                        {['一','二','三','四','五','六','日'].map(day => (
                            <div key={day} className="text-center text-[10px] text-gray-400 font-bold mb-1">{day}</div>
                        ))}
                        {chartData.data.map((d, i) => (
                            <div 
                                key={i} 
                                className={`
                                    aspect-square rounded-lg flex flex-col items-center justify-center relative group border transition-all
                                    ${(d as any).isCurrentMonth === false ? 'opacity-30' : ''}
                                    ${d.count > 0 ? 'bg-green-100 border-green-200' : 'bg-gray-50 border-gray-100'}
                                    ${(d as any).isToday ? 'ring-2 ring-indigo-400 ring-offset-1' : ''}
                                `}
                            >
                                <span className={`text-sm sm:text-lg font-bold ${d.count > 0 ? 'text-green-700' : 'text-gray-300'}`}>
                                    {d.dayLabel}
                                </span>

                                {d.count > 0 && <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1"></div>}
                                {(d as any).isToday && <div className="text-[8px] text-indigo-500 font-bold absolute top-1 right-1">今</div>}
                                
                                <div className="absolute bottom-full mb-1 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 left-1/2 -translate-x-1/2">
                                    {d.date}: {d.count} 字
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Bar Chart View for Week and Year
                    <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
                        {chartData.data.map((d, i) => {
                             const heightPercent = Math.max(5, (d.count / chartData.maxVal) * 100);
                             return (
                                <div key={i} className="flex flex-col items-center flex-1 h-full justify-end group cursor-default">
                                    <div className="w-full max-w-[40px] relative flex flex-col justify-end h-full">
                                         {/* Tooltip */}
                                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                                            {d.date} : {d.count} 字
                                         </div>
                                         {/* Count Label on Top of Bar if ample space, else hidden or simplified */}
                                         {d.count > 0 && <div className="text-[10px] text-gray-500 text-center mb-1 font-bold">{d.count}</div>}
                                         
                                         {/* Bar */}
                                         <div 
                                            className={`w-full rounded-t-lg transition-all duration-500 ${d.count > 0 ? 'bg-green-400 group-hover:bg-green-500' : 'bg-gray-100'}`}
                                            style={{ height: `${d.count > 0 ? heightPercent : 5}%` }}
                                         ></div>
                                    </div>
                                    <div className="mt-2 text-[10px] sm:text-xs font-bold text-gray-500 truncate w-full text-center">
                                        {d.dayLabel}
                                    </div>
                                </div>
                             )
                        })}
                    </div>
                )}
            </div>

          </div>

        </div>
    </div>
  );
};
