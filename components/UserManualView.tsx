
import React from 'react';
import { ArrowLeft, Brain, Sparkles, BookOpen, Activity, Zap, RefreshCw } from 'lucide-react';

interface UserManualViewProps {
  onBack: () => void;
}

export const UserManualView: React.FC<UserManualViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-white pb-24 animate-fade-in relative z-20">
       {/* Header */}
       <div className="bg-white/90 backdrop-blur-md px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-30 flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
             <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">设计理念</h1>
       </div>

       <div className="p-6 md:p-10 space-y-12">
          
          {/* Section 1: 3-1-3 Method */}
          <section className="space-y-6">
             <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
                <Activity className="text-blue-500" /> 
                3-1-3 科学识字法
             </h3>
             <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                <p className="text-gray-600 mb-6 leading-relaxed">
                   本应用核心基于“艾宾浩斯遗忘曲线”设计了智能复习算法。
                   当您使用 <span className="font-bold text-blue-600">“每日挑战”</span> 功能时，系统会自动筛选以下三类汉字，帮助孩子对抗遗忘：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
                        <div className="text-4xl font-fun text-blue-500 mb-2">3</div>
                        <h4 className="font-bold text-gray-800 mb-1">关键回顾</h4>
                        <p className="text-xs text-gray-500">复习 3 天前学过的字，这是记忆流失的关键节点。</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
                        <div className="text-4xl font-fun text-indigo-500 mb-2">1</div>
                        <h4 className="font-bold text-gray-800 mb-1">短期巩固</h4>
                        <p className="text-xs text-gray-500">复习昨天（1天前）刚学的字，趁热打铁。</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center text-center">
                        <div className="text-4xl font-fun text-cyan-500 mb-2">3</div>
                        <h4 className="font-bold text-gray-800 mb-1">新知摄入</h4>
                        <p className="text-xs text-gray-500">学习新单元中的 3 个（可设置）生字，保持学习进度。</p>
                    </div>
                </div>
             </div>
          </section>

          {/* Section 2: AI Stories */}
          <section className="space-y-6">
             <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 border-l-4 border-amber-500 pl-4">
                <BookOpen className="text-amber-500" /> 
                AI 短文故事
             </h3>
             <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                        单纯的识字容易枯燥且难以致用。通过“短文”功能，AI 会利用孩子 <span className="font-bold text-amber-700">“我的字库”</span> 中已经掌握的字，编写出独一无二的趣味小故事。
                    </p>
                    <div className="bg-white/80 p-4 rounded-xl border border-amber-100 text-sm text-gray-600 italic">
                        “这不仅能提高阅读兴趣，还能在真实的语境中彻底掌握汉字的用法。您可以设置生成短文的字数限制，循序渐进。”
                    </div>
                </div>
                <div className="shrink-0 w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 shadow-inner">
                    <Sparkles size={40} />
                </div>
             </div>
          </section>

          {/* Section 3: Learning Loop */}
          <section className="space-y-6">
             <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 border-l-4 border-green-500 pl-4">
                <Zap className="text-green-500" /> 
                全方位学习闭环
             </h3>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                         <Brain size={20} />
                     </div>
                     <h4 className="font-bold text-gray-800 text-lg mb-2">识字</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">
                         结合笔画、田字格、组词、造句和结构拆解，全维度认知。
                     </p>
                 </div>

                 <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                         <RefreshCw size={20} />
                     </div>
                     <h4 className="font-bold text-gray-800 text-lg mb-2">巩固</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">
                         生字本自动收集难点，每日挑战智能安排复习。
                     </p>
                 </div>

                 <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                         <BookOpen size={20} />
                     </div>
                     <h4 className="font-bold text-gray-800 text-lg mb-2">应用</h4>
                     <p className="text-sm text-gray-600 leading-relaxed">
                         阅读生成的短文，实现从“认字”到“阅读”的跨越。
                     </p>
                 </div>
             </div>
          </section>

          {/* Footer */}
          <div className="pt-10 pb-4 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium">汉字小英雄 · 让每一个汉字都成为孩子的好朋友</p>
          </div>
       </div>
    </div>
  )
}
