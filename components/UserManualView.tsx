
import React from 'react';
import { ArrowLeft, BookOpen, Star, Brain, Cpu, Layout, Gamepad2, FileText, BarChart3, Settings, Rocket, CheckCircle2 } from 'lucide-react';

interface UserManualViewProps {
  onBack: () => void;
}

export const UserManualView: React.FC<UserManualViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-white pb-24 animate-fade-in relative z-20">
       {/* Header */}
       <div className="bg-white/90 backdrop-blur-md px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-30 flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
             <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">使用说明</h1>
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
                   <p className="text-sm text-gray-600 leading-relaxed">每天新学3个字，复习1天前的字，复习3天前的字。科学对抗遗忘。</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                      <BarChart3 size={24} />
                   </div>
                   <h4 className="font-bold text-gray-800 mb-2">艾宾浩斯曲线</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">智能追踪每个字的记忆状态，在遗忘临界点（1天、3天、7天...）自动安排复习。</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                      <Cpu size={24} />
                   </div>
                   <h4 className="font-bold text-gray-800 mb-2">AI 驱动教学</h4>
                   <p className="text-sm text-gray-600 leading-relaxed">AI 老师实时讲解字形结构、记忆口诀，并生成专属的趣味短文。</p>
                </div>
             </div>
          </section>

          {/* 3. Features */}
          <section>
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
                <Layout className="text-indigo-500" /> 主要功能模块
             </h3>
             <div className="space-y-4">
                 <FeatureItem 
                    icon={<BookOpen className="text-blue-500"/>} 
                    title="识字 (Home)" 
                    desc="内置人教版等主流教材，支持自定义单元。提供笔顺动画、田字格、拼音及AI辅助讲解。" 
                    bg="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<Gamepad2 className="text-purple-500"/>} 
                    title="游戏化学习" 
                    desc="包含智趣翻卡屋、星箭追击（听音辨字）、超能靶场（看拼音识字）、汉字消消乐（词语配对）等多种模式。" 
                    bg="bg-purple-50"
                 />
                 <FeatureItem 
                    icon={<FileText className="text-amber-500"/>} 
                    title="阅读 (Story)" 
                    desc="AI 根据孩子“我的字库”中已掌握的汉字生成分级阅读故事，支持点击发音和生字摘录。" 
                    bg="bg-amber-50"
                 />
                 <FeatureItem 
                    icon={<BarChart3 className="text-pink-500"/>} 
                    title="统计 (Stats)" 
                    desc="可视化展示学习热力图、记忆曲线分布，帮助家长直观掌握孩子的学习进度。" 
                    bg="bg-pink-50"
                 />
                 <FeatureItem 
                    icon={<Settings className="text-gray-500"/>} 
                    title="个人中心 (Profile)" 
                    desc="支持配置AI模型参数、每日学习量，以及学习数据的导入导出备份。" 
                    bg="bg-gray-50"
                 />
             </div>
          </section>

          {/* 4. Guide */}
          <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-yellow-500 pl-3">
                <Rocket className="text-yellow-500" /> 使用指南
             </h3>
             <ol className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                <StepItem step="1" title="初始化设置" content="首次进入，建议在“我的”页面配置教材版本和年级，并设置 AI API Key（支持 Google Gemini 或 OpenAI 兼容接口）。" />
                <StepItem step="2" title="开始学习" content="在首页选择一个单元，点击“开始学习”进入卡片学习模式。遇到不认识的字，点击“不认识”，AI 老师会进行详细讲解。" />
                <StepItem step="3" title="每日挑战 (核心)" content="每天点击首页左侧的“每日挑战”！系统会自动筛选需要复习的旧字和新单元的生字，生成今日任务。" />
                <StepItem step="4" title="游戏巩固" content="学习疲惫时，进入游戏模式（如星箭追击、汉字消消乐），在玩乐中巩固汉字记忆。" />
                <StepItem step="5" title="阅读拓展" content="积累一定识字量后，进入“阅读”页面，生成专属故事进行阅读训练，实现从“认字”到“用字”的跨越。" />
             </ol>
          </section>

          {/* Footer */}
          <div className="pt-10 pb-4 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium">汉字小英雄 · 让每一个汉字都成为孩子的好朋友</p>
          </div>
       </div>
    </div>
  )
}

const FeatureItem = ({icon, title, desc, bg}: any) => (
    <div className={`flex gap-4 p-4 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-sm transition-all ${bg}`}>
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-gray-800 text-lg mb-1">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
)

const StepItem = ({step, title, content}: any) => (
    <li className="ml-8 relative">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full -left-[46px] ring-4 ring-white text-white font-bold shadow-sm">
            {step}
        </span>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h4 className="font-bold text-gray-800 text-lg mb-1 flex items-center gap-2">{title}</h4>
            <p className="text-gray-600 text-sm">{content}</p>
        </div>
    </li>
)
