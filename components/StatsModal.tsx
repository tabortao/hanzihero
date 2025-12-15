
import React, { useMemo } from 'react';
import { X, Flame, PieChart, Activity } from 'lucide-react';
import { getDailyActivity, getKnownCharacters, getUnknownCharacters } from '../services/storage';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const activity = getDailyActivity();
  const known = getKnownCharacters();
  const unknown = getUnknownCharacters();

  // Calculate Aggregates
  const stats = useMemo(() => {
    const today = new Date();
    let week = 0;
    let month = 0;
    let year = 0;

    Object.entries(activity).forEach(([dateStr, val]) => {
      const count = val as number;
      const date = new Date(dateStr);
      const diffTime = Math.abs(today.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Week (approx 7 days)
      if (diffDays <= 7) week += count;
      
      // Month (same month and year)
      if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        month += count;
      }

      // Year
      if (date.getFullYear() === today.getFullYear()) {
        year += count;
      }
    });

    return { week, month, year };
  }, [activity]);

  // Heatmap Data Generation (Last 365 days)
  const heatmapData = useMemo(() => {
    const days = 365;
    const today = new Date();
    const data = [];
    for (let i = 0; i < days; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - (days - 1 - i));
      const dateStr = d.toISOString().split('T')[0];
      data.push({
        date: dateStr,
        count: (activity[dateStr] as number) || 0,
        dayOfWeek: d.getDay()
      });
    }
    return data;
  }, [activity]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Activity /> 学习统计
            </h2>
            <button onClick={onClose} className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">本周学习</div>
              <div className="text-2xl font-bold font-mono">{stats.week}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">本月学习</div>
              <div className="text-2xl font-bold font-mono">{stats.month}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="text-xs opacity-80 mb-1">今年累计</div>
              <div className="text-2xl font-bold font-mono">{stats.year}</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          
          {/* Mastery Progress */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
             <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
               <PieChart className="text-blue-500" size={18} /> 掌握进度
             </h3>
             <div className="flex items-center gap-4 mb-2">
                <div className="flex-1">
                   <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">已认识</span>
                      <span className="font-bold text-green-600">{known.length} 字</span>
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, known.length / 5)}%` }}></div>
                   </div>
                </div>
                <div className="flex-1">
                   <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">待消灭 (生字)</span>
                      <span className="font-bold text-orange-500">{unknown.length} 字</span>
                   </div>
                   <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, unknown.length / 5)}%` }}></div>
                   </div>
                </div>
             </div>
             <p className="text-xs text-gray-400 text-center mt-2">持续积累，聚沙成塔！</p>
          </div>

          {/* Yearly Heatmap */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm overflow-hidden">
            <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
               <Flame className="text-orange-500" size={18} /> 全年热力图
            </h3>
            <div className="overflow-x-auto pb-2 no-scrollbar">
              <div className="flex gap-[2px] min-w-max h-32 items-end">
                 {/* Simplified rendering: Columns of weeks */}
                 {Array.from({ length: 53 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[2px]">
                       {Array.from({ length: 7 }).map((_, dayIndex) => {
                          const dataIndex = weekIndex * 7 + dayIndex;
                          const dayData = heatmapData[dataIndex];
                          if (!dayData) return <div key={dayIndex} className="w-2.5 h-2.5" />;
                          
                          let bg = 'bg-gray-100';
                          if (dayData.count > 0) bg = 'bg-green-200';
                          if (dayData.count > 5) bg = 'bg-green-400';
                          if (dayData.count > 15) bg = 'bg-green-600';

                          return (
                            <div 
                              key={dayIndex} 
                              className={`w-2.5 h-2.5 rounded-[1px] ${bg}`} 
                              title={`${dayData.date}: ${dayData.count}`}
                            />
                          );
                       })}
                    </div>
                 ))}
              </div>
            </div>
            <div className="flex justify-end items-center gap-2 mt-2 text-xs text-gray-400">
               <span>Less</span>
               <div className="w-2 h-2 bg-gray-100 rounded-[1px]"></div>
               <div className="w-2 h-2 bg-green-200 rounded-[1px]"></div>
               <div className="w-2 h-2 bg-green-400 rounded-[1px]"></div>
               <div className="w-2 h-2 bg-green-600 rounded-[1px]"></div>
               <span>More</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
