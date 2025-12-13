
import React from 'react';
import { ArrowLeft, BookOpen, Layout, Gamepad2, FileText, BarChart3, Settings, Rocket, Zap, Target, Book } from 'lucide-react';

interface GuideViewProps {
  onBack: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-white pb-24 animate-fade-in relative z-20">
       {/* Header */}
       <div className="bg-white/90 backdrop-blur-md px-6 py-4 shadow-sm border-b border-gray-100 sticky top-0 z-30 flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
             <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">使用帮助</h1>
       </div>

       <div className="p-6 md:p-10 space-y-12">
          {/* 1. Project Intro */}
          <section>
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
                <BookOpen className="text-indigo-500" /> 项目简介
             </h3>
             <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-gray-700 leading-relaxed">
                 <p>
                     <strong>汉字小英雄</strong> 是一款专为小学生设计的智能化、游戏化识字应用。
                     它摒弃了枯燥的死记硬背，通过 AI 赋予每个汉字生命，让孩子在故事、游戏和互动中自然习得汉字。
                     应用不仅关注“认字”，更重视“用字”，通过智能生成的阅读材料，帮助孩子快速实现独立阅读。
                 </p>
             </div>
          </section>

          {/* 2. Features */}
          <section>
             <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                <Layout className="text-purple-500" /> 主要功能模块
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FeatureItem 
                    icon={<Target className="text-blue-500"/>} 
                    title="识字 (Home)" 
                    desc="同步人教版等主流教材。提供笔顺动画、田字格、拼音及AI辅助讲解（字源、顺口溜、造句）。支持拍照批量导入生字。" 
                    bg="bg-blue-50"
                 />
                 <FeatureItem 
                    icon={<Gamepad2 className="text-purple-500"/>} 
                    title="游戏化学习" 
                    desc="多种趣味模式：智趣翻卡屋（记忆）、星箭追击（听音辨字）、超能靶场（看拼音识字）、汉字消消乐（词语配对）。" 
                    bg="bg-purple-50"
                 />
                 <FeatureItem 
                    icon={<FileText className="text-amber-500"/>} 
                    title="阅读 (Story)" 
                    desc="独创 AI 分级阅读。系统根据孩子已掌握的汉字库，自动生成适合其阅读水平的趣味短文，生字率可控，增强阅读信心。" 
                    bg="bg-amber-50"
                 />
                 <FeatureItem 
                    icon={<BarChart3 className="text-pink-500"/>} 
                    title="统计 (Stats)" 
                    desc="基于艾宾浩斯曲线的记忆管理。直观展示学习热力图、遗忘曲线分布，科学安排每日复习计划。" 
                    bg="bg-pink-50"
                 />
                 <FeatureItem 
                    icon={<Settings className="text-gray-500"/>} 
                    title="个人中心 (Profile)" 
                    desc="支持配置 AI 模型（Google/DeepSeek等）、调整每日学习量、语速设置，以及学习数据的备份与恢复。" 
                    bg="bg-gray-50"
                 />
             </div>
          </section>

          {/* 3. Usage Guide */}
          <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-green-500 pl-3">
                <Rocket className="text-green-500" /> 快速上手指南
             </h3>
             <div className="space-y-6">
                <StepItem step="1" title="初始化设置" content="首次进入，建议在“我的”页面配置教材版本和年级，并设置 AI API Key（支持 Google Gemini 或 OpenAI 兼容接口）。" />
                <StepItem step="2" title="开始学习" content="在首页选择一个单元，点击“开始学习”进入卡片学习模式。遇到不认识的字，点击“不认识”，AI 老师会进行详细讲解。也可以点击右下角“+”号拍照导入生字。" />
                <StepItem step="3" title="每日挑战 (核心)" content="每天点击首页左侧的“每日挑战”！系统会自动筛选需要复习的旧字（基于记忆曲线）和新单元的生字，生成今日专属任务。" />
                <StepItem step="4" title="游戏巩固" content="学习疲惫时，进入“游戏”模式（如星箭追击、汉字消消乐），在玩乐中巩固汉字记忆，寓教于乐。" />
                <StepItem step="5" title="阅读拓展" content="积累一定识字量后，进入“阅读”页面，点击“新故事”，输入感兴趣的主题，AI 将为你生成专属故事。阅读中遇到生字可随时点击学习。" />
             </div>
          </section>

          {/* Footer */}
          <div className="pt-10 pb-4 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium">汉字小英雄 · 快乐识字每一天</p>
          </div>
       </div>
    </div>
  )
}

const FeatureItem = ({icon, title, desc, bg}: any) => (
    <div className={`flex gap-4 p-5 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-sm transition-all ${bg}`}>
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
    <div className="flex gap-4">
        <div className="flex flex-col items-center">
            <span className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full text-white font-bold shadow-sm z-10">
                {step}
            </span>
            <div className="w-0.5 h-full bg-gray-200 my-1"></div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex-1 mb-2 hover:border-green-200 transition-colors">
            <h4 className="font-bold text-gray-800 text-lg mb-2 flex items-center gap-2">{title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
        </div>
    </div>
)
