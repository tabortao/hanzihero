
import React from 'react';
import { ArrowLeft, Brain, Cpu, BarChart3 } from 'lucide-react';

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
          {/* 1. Intro */}
          <section className="space-y-6">
             <div className="flex flex-col items-center text-center space-y-4 py-8 bg-gradient-to-b from-indigo-50 to-white rounded-3xl border border-indigo-50">
                 <div className="text-6xl animate-bounce-slow">🐼</div>
                 <div>
                    <h2 className="text-3xl font-fun text-gray-900 mb-2">汉字小英雄</h2>
                    <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Hanzi Hero</p>
                 </div>
                 <p className="text-gray-600 max-w-lg px-4 leading-relaxed">
                    专为小学生设计的游戏化识字应用。<br/>
                    结合 <span className="font-bold text-indigo-600">AI 技术</span> 与 <span className="font-bold text-indigo-600">科学记忆法</span>，让汉字学习变得生动有趣、高效且个性化。
                 </p>
             </div>
          </section>

          {/* 2. Philosophy */}
          <section>
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                <Brain className="text-purple-500" /> 核心设计理念
             </h3>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 font-bold text-xl">3</div>
                   <h4 className="font-bold text-gray-800 mb-2">3-1-3 识字法</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                       科学的记忆复习策略：<br/>
                       <span className="font-bold">3</span>：每日新学 3-5 个汉字；<br/>
                       <span className="font-bold">1</span>：复习 1 天前学过的字；<br/>
                       <span className="font-bold">3</span>：复习 3 天前学过的字。<br/>
                       循环巩固，对抗遗忘。
                   </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                      <BarChart3 size={24} />
                   </div>
                   <h4 className="font-bold text-gray-800 mb-2">艾宾浩斯曲线</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                       系统智能追踪每个字的记忆状态，在遗忘临界点（如 1天、3天、7天、15天）自动安排复习，帮助孩子将短期记忆转化为长期记忆。
                   </p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                      <Cpu size={24} />
                   </div>
                   <h4 className="font-bold text-gray-800 mb-2">AI 驱动教学</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">
                       AI 老师实时讲解字形结构、记忆口诀，并根据孩子的识字量生成专属的趣味短文，实现从“识字”到“阅读”的无缝衔接。
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
