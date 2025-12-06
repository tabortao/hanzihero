import { AIExplanation } from "../../types";

export const DICT_CHUNK_1: Record<string, AIExplanation> = {
  // --- Grade 1 Textbook Characters (Detailed) ---
  "天": {
    structure: "独体字",
    composition: "一 + 大",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "大", pinyin: "dà" }],
    memoryTip: "一个人张开双臂，头顶就是天。",
    words: [{ word: "蓝天", pinyin: "lán tiān" }, { word: "天空", pinyin: "tiān kōng" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "真", pinyin: "zhēn" }, { char: "好", pinyin: "hǎo" }]
  },
  "地": {
    structure: "左右结构",
    composition: "土 + 也",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "也", pinyin: "yě" }],
    memoryTip: "土旁边有一个也字，就是土地的地。",
    words: [{ word: "大地", pinyin: "dà dì" }, { word: "种地", pinyin: "zhòng dì" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bo" }, { char: "在", pinyin: "zài" }, { char: "种", pinyin: "zhòng" }, { char: "地", pinyin: "dì" }]
  },
  "人": {
    structure: "独体字",
    composition: "撇 + 捺",
    compositionParts: [{ char: "丿", pinyin: "piě" }, { char: "乀", pinyin: "nà" }],
    memoryTip: "一撇一捺就是人，互相支撑站得稳。",
    words: [{ word: "大人", pinyin: "dà rén" }, { word: "人们", pinyin: "rén men" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "人", pinyin: "rén" }]
  },
  "你": {
    structure: "左右结构",
    composition: "亻 + 尔",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "尔", pinyin: "ěr" }],
    memoryTip: "单人旁加个尔，就是你我他的你。",
    words: [{ word: "你好", pinyin: "nǐ hǎo" }, { word: "你们", pinyin: "nǐ men" }],
    sentenceData: [{ char: "祝", pinyin: "zhù" }, { char: "你", pinyin: "nǐ" }, { char: "生", pinyin: "shēng" }, { char: "日", pinyin: "rì" }, { char: "快", pinyin: "kuài" }, { char: "乐", pinyin: "lè" }]
  },
  "我": {
    structure: "独体字",
    composition: "手 + 戈",
    compositionParts: [{ char: "手", pinyin: "shǒu" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "手里拿着戈，保卫大自我。",
    words: [{ word: "我们", pinyin: "wǒ men" }, { word: "自我", pinyin: "zì wǒ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "他": {
    structure: "左右结构",
    composition: "亻 + 也",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "也", pinyin: "yě" }],
    memoryTip: "单人旁加个也，就是男生的他。",
    words: [{ word: "他人", pinyin: "tā rén" }, { word: "他们", pinyin: "tā men" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }]
  },
  "一": {
    structure: "独体字",
    composition: "一",
    compositionParts: [{ char: "一", pinyin: "yī" }],
    memoryTip: "平平稳稳一横线。",
    words: [{ word: "一天", pinyin: "yī tiān" }, { word: "第一", pinyin: "dì yī" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }]
  },
  "二": {
    structure: "独体字",
    composition: "一 + 一",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "一", pinyin: "yī" }],
    memoryTip: "两横一短又一长。",
    words: [{ word: "二月", pinyin: "èr yuè" }, { word: "第二", pinyin: "dì èr" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "星", pinyin: "xīng" }, { char: "期", pinyin: "qī" }, { char: "二", pinyin: "èr" }]
  },
  "三": {
    structure: "独体字",
    composition: "一 + 一 + 一",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "一", pinyin: "yī" }, { char: "一", pinyin: "yī" }],
    memoryTip: "三横长短不一样，中间最短底最长。",
    words: [{ word: "三天", pinyin: "sān tiān" }, { word: "三角形", pinyin: "sān jiǎo xíng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "第", pinyin: "dì" }, { char: "三", pinyin: "sān" }, { char: "课", pinyin: "kè" }]
  },
  "四": {
    structure: "全包围结构",
    composition: "囗 + 儿",
    compositionParts: [{ char: "囗", pinyin: "wéi" }, { char: "儿", pinyin: "ér" }],
    memoryTip: "四四方方一座城，里面住个小儿郎。",
    words: [{ word: "四个", pinyin: "sì gè" }, { word: "四季", pinyin: "sì jì" }],
    sentenceData: [{ char: "一", pinyin: "yī" }, { char: "年", pinyin: "nián" }, { char: "有", pinyin: "yǒu" }, { char: "四", pinyin: "sì" }, { char: "个", pinyin: "gè" }, { char: "季", pinyin: "jì" }, { char: "节", pinyin: "jié" }]
  },
  "五": {
    structure: "独体字",
    composition: "一 + 丨 + 𠃍 + 一",
    compositionParts: [],
    memoryTip: "五字像个架子，中间有根柱子。",
    words: [{ word: "五个", pinyin: "wǔ gè" }, { word: "五月", pinyin: "wǔ yuè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "五", pinyin: "wǔ" }, { char: "只", pinyin: "zhī" }, { char: "笔", pinyin: "bǐ" }]
  },
  "上": {
    structure: "独体字",
    composition: "丨 + 一",
    compositionParts: [{ char: "丨", pinyin: "shù" }, { char: "一", pinyin: "yī" }],
    memoryTip: "一竖长长指上方。",
    words: [{ word: "上下", pinyin: "shàng xià" }, { word: "上学", pinyin: "shàng xué" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "天", pinyin: "tiān" }, { char: "向", pinyin: "xiàng" }, { char: "上", pinyin: "shàng" }]
  },
  "下": {
    structure: "独体字",
    composition: "一 + 丨 + 丶",
    compositionParts: [],
    memoryTip: "一竖一点在横下，就是下面的下。",
    words: [{ word: "下雨", pinyin: "xià yǔ" }, { word: "下去", pinyin: "xià qù" }],
    sentenceData: [{ char: "快", pinyin: "kuài" }, { char: "点", pinyin: "diǎn" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }]
  },
  "口": {
    structure: "独体字",
    composition: "口",
    compositionParts: [{ char: "口", pinyin: "kǒu" }],
    memoryTip: "四四方方一张嘴。",
    words: [{ word: "门口", pinyin: "mén kǒu" }, { word: "口水", pinyin: "kǒu shuǐ" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "张", pinyin: "zhāng" }, { char: "大", pinyin: "dà" }, { char: "嘴", pinyin: "zuǐ" }, { char: "巴", pinyin: "ba" }]
  },
  "耳": {
    structure: "独体字",
    composition: "耳",
    compositionParts: [{ char: "耳", pinyin: "ěr" }],
    memoryTip: "耳朵听声音，长横要出头。",
    words: [{ word: "耳朵", pinyin: "ěr duo" }, { word: "木耳", pinyin: "mù ěr" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "兔", pinyin: "tù" }, { char: "子", pinyin: "zi" }, { char: "有", pinyin: "yǒu" }, { char: "长", pinyin: "cháng" }, { char: "耳", pinyin: "ěr" }, { char: "朵", pinyin: "duo" }]
  },
  "目": {
    structure: "独体字",
    composition: "目",
    compositionParts: [{ char: "目", pinyin: "mù" }],
    memoryTip: "眼目目，里面有两横。",
    words: [{ word: "目光", pinyin: "mù guāng" }, { word: "题目", pinyin: "tí mù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "目", pinyin: "mù" }, { char: "光", pinyin: "guāng" }, { char: "很", pinyin: "hěn" }, { char: "坚", pinyin: "jiān" }, { char: "定", pinyin: "dìng" }]
  },
  "手": {
    structure: "独体字",
    composition: "手",
    compositionParts: [{ char: "手", pinyin: "shǒu" }],
    memoryTip: "撇横横竖弯钩，小小手儿最灵巧。",
    words: [{ word: "双手", pinyin: "shuāng shǒu" }, { word: "手机", pinyin: "shǒu jī" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "拍", pinyin: "pāi" }, { char: "拍", pinyin: "pāi" }, { char: "手", pinyin: "shǒu" }]
  },
  "足": {
    structure: "上下结构",
    composition: "口 + 止",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "止", pinyin: "zhǐ" }],
    memoryTip: "上面是个口，下面是止，走路靠双足。",
    words: [{ word: "足球", pinyin: "zú qiú" }, { word: "手足", pinyin: "shǒu zú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "踢", pinyin: "tī" }, { char: "足", pinyin: "zú" }, { char: "球", pinyin: "qiú" }]
  },
  "站": {
    structure: "左右结构",
    composition: "立 + 占",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "占", pinyin: "zhàn" }],
    memoryTip: "立字旁加个占，站立不倒像松树。",
    words: [{ word: "站立", pinyin: "zhàn lì" }, { word: "车站", pinyin: "chē zhàn" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "站", pinyin: "zhàn" }, { char: "在", pinyin: "zài" }, { char: "路", pinyin: "lù" }, { char: "中", pinyin: "zhōng" }, { char: "间", pinyin: "jiān" }]
  },
  "坐": {
    structure: "独体字",
    composition: "从 + 土",
    compositionParts: [{ char: "从", pinyin: "cóng" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "两个小人坐在土堆上。",
    words: [{ word: "坐下", pinyin: "zuò xià" }, { word: "请坐", pinyin: "qǐng zuò" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "请", pinyin: "qǐng" }, { char: "坐", pinyin: "zuò" }, { char: "下", pinyin: "xià" }]
  },
  "日": {
    structure: "独体字",
    composition: "日",
    compositionParts: [{ char: "日", pinyin: "rì" }],
    memoryTip: "太阳圆圆变方方，里面只有一短横。",
    words: [{ word: "日子", pinyin: "rì zi" }, { word: "节日", pinyin: "jié rì" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "就", pinyin: "jiù" }, { char: "是", pinyin: "shì" }, { char: "红", pinyin: "hóng" }, { char: "日", pinyin: "rì" }]
  },
  "月": {
    structure: "独体字",
    composition: "月",
    compositionParts: [{ char: "月", pinyin: "yuè" }],
    memoryTip: "弯弯月儿挂天空，里面两横不封口。",
    words: [{ word: "月亮", pinyin: "yuè liang" }, { word: "月光", pinyin: "yuè guāng" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "晚", pinyin: "wǎn" }, { char: "的", pinyin: "de" }, { char: "月", pinyin: "yuè" }, { char: "亮", pinyin: "liang" }, { char: "真", pinyin: "zhēn" }, { char: "圆", pinyin: "yuán" }]
  },
  "水": {
    structure: "独体字",
    composition: "水",
    compositionParts: [{ char: "水", pinyin: "shuǐ" }],
    memoryTip: "中间竖钩两边撇捺，流水哗啦啦。",
    words: [{ word: "喝水", pinyin: "hē shuǐ" }, { word: "河水", pinyin: "hé shuǐ" }],
    sentenceData: [{ char: "多", pinyin: "duō" }, { char: "喝", pinyin: "hē" }, { char: "水", pinyin: "shuǐ" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "好", pinyin: "hǎo" }]
  },
  "火": {
    structure: "独体字",
    composition: "火",
    compositionParts: [{ char: "火", pinyin: "huǒ" }],
    memoryTip: "一点一撇大字在下，熊熊火焰高。",
    words: [{ word: "大火", pinyin: "dà huǒ" }, { word: "火山", pinyin: "huǒ shān" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "烤", pinyin: "kǎo" }, { char: "火", pinyin: "huǒ" }, { char: "很", pinyin: "hěn" }, { char: "暖", pinyin: "nuǎn" }, { char: "和", pinyin: "huo" }]
  },
  "山": {
    structure: "独体字",
    composition: "山",
    compositionParts: [{ char: "山", pinyin: "shān" }],
    memoryTip: "中间高高两边低，就像一座大高山。",
    words: [{ word: "大山", pinyin: "dà shān" }, { word: "爬山", pinyin: "pá shān" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "爬", pinyin: "pá" }, { char: "山", pinyin: "shān" }]
  },
  "田": {
    structure: "独体字",
    composition: "田",
    compositionParts: [{ char: "田", pinyin: "tián" }],
    memoryTip: "四四方方分成四块，种满庄稼是田地。",
    words: [{ word: "田地", pinyin: "tián dì" }, { word: "种田", pinyin: "zhòng tián" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "田", pinyin: "tián" }, { char: "里", pinyin: "lǐ" }, { char: "长", pinyin: "zhǎng" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "禾", pinyin: "hé" }, { char: "苗", pinyin: "miáo" }]
  },
  "对": {
    structure: "左右结构",
    composition: "又 + 寸",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "又来一寸，就是对。",
    words: [{ word: "对错", pinyin: "duì cuò" }, { word: "不对", pinyin: "bù duì" }],
    sentenceData: [{ char: "你", pinyin: "nǐ" }, { char: "做", pinyin: "zuò" }, { char: "对", pinyin: "duì" }, { char: "了", pinyin: "le" }, { char: "吗", pinyin: "ma" }]
  },
  "云": {
    structure: "上下结构",
    composition: "二 + 厶",
    compositionParts: [],
    memoryTip: "二字底下加个私，白云飘飘在天上。",
    words: [{ word: "白云", pinyin: "bái yún" }, { word: "云朵", pinyin: "yún duǒ" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "朵", pinyin: "duǒ" }, { char: "白", pinyin: "bái" }, { char: "云", pinyin: "yún" }]
  },
  "雨": {
    structure: "独体字",
    composition: "雨",
    compositionParts: [{ char: "雨", pinyin: "yǔ" }],
    memoryTip: "天上下雨哗啦啦，四点像是小雨滴。",
    words: [{ word: "下雨", pinyin: "xià yǔ" }, { word: "雨衣", pinyin: "yǔ yī" }],
    sentenceData: [{ char: "外", pinyin: "wài" }, { char: "面", pinyin: "miàn" }, { char: "下", pinyin: "xià" }, { char: "雨", pinyin: "yǔ" }, { char: "了", pinyin: "le" }]
  },
  "风": {
    structure: "半包围结构",
    composition: "几 + 乂",
    compositionParts: [{ char: "几", pinyin: "jǐ" }, { char: "乂", pinyin: "yì" }],
    memoryTip: "几字里面一个叉，大风呼呼吹。",
    words: [{ word: "大风", pinyin: "dà fēng" }, { word: "风雨", pinyin: "fēng yǔ" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "风", pinyin: "fēng" }, { char: "吹", pinyin: "chuī" }, { char: "绿", pinyin: "lǜ" }, { char: "了", pinyin: "le" }, { char: "小", pinyin: "xiǎo" }, { char: "草", pinyin: "cǎo" }]
  },
  "花": {
    structure: "上下结构",
    composition: "艹 + 化",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "化", pinyin: "huà" }],
    memoryTip: "草字头下一变化，开出美丽小红花。",
    words: [{ word: "花朵", pinyin: "huā duǒ" }, { word: "红花", pinyin: "hóng huā" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "开", pinyin: "kāi" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "花", pinyin: "huā" }]
  },
  "鸟": {
    structure: "独体字",
    composition: "鸟",
    compositionParts: [{ char: "鸟", pinyin: "niǎo" }],
    memoryTip: "小鸟有头也有脚，还有一点是眼睛。",
    words: [{ word: "小鸟", pinyin: "xiǎo niǎo" }, { word: "飞鸟", pinyin: "fēi niǎo" }],
    sentenceData: [{ char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }]
  },
  "虫": {
    structure: "独体字",
    composition: "中 + 一 + 丶",
    compositionParts: [],
    memoryTip: "中字下面加一提一点，就是小虫子。",
    words: [{ word: "虫子", pinyin: "chóng zi" }, { word: "小虫", pinyin: "xiǎo chóng" }],
    sentenceData: [{ char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "条", pinyin: "tiáo" }, { char: "虫", pinyin: "chóng" }]
  },
  "六": {
    structure: "上下结构",
    composition: "亠 + 八",
    compositionParts: [{ char: "亠", pinyin: "tóu" }, { char: "八", pinyin: "bā" }],
    memoryTip: "一点一横下加八，就是数字六。",
    words: [{ word: "六个", pinyin: "liù gè" }, { word: "六月", pinyin: "liù yuè" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "星", pinyin: "xīng" }, { char: "期", pinyin: "qī" }, { char: "六", pinyin: "liù" }]
  },
  "七": {
    structure: "独体字",
    composition: "一 + 乚",
    compositionParts: [],
    memoryTip: "横竖弯钩像把镰刀。",
    words: [{ word: "七天", pinyin: "qī tiān" }, { word: "七个", pinyin: "qī gè" }],
    sentenceData: [{ char: "一", pinyin: "yī" }, { char: "周", pinyin: "zhōu" }, { char: "有", pinyin: "yǒu" }, { char: "七", pinyin: "qī" }, { char: "天", pinyin: "tiān" }]
  },
  "八": {
    structure: "独体字",
    composition: "撇 + 捺",
    compositionParts: [{ char: "丿", pinyin: "piě" }, { char: "乀", pinyin: "nà" }],
    memoryTip: "一撇一捺分开站，就是八。",
    words: [{ word: "八个", pinyin: "bā gè" }, { word: "八月", pinyin: "bā yuè" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "八", pinyin: "bā" }, { char: "个", pinyin: "gè" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }]
  },
  "九": {
    structure: "独体字",
    composition: "丿 + 乙",
    compositionParts: [{ char: "丿", pinyin: "piě" }, { char: "乙", pinyin: "yǐ" }],
    memoryTip: "撇加横折弯钩，就是九。",
    words: [{ word: "九个", pinyin: "jiǔ gè" }, { word: "九月", pinyin: "jiǔ yuè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "今", pinyin: "jīn" }, { char: "年", pinyin: "nián" }, { char: "九", pinyin: "jiǔ" }, { char: "岁", pinyin: "suì" }, { char: "了", pinyin: "le" }]
  },
  "十": {
    structure: "独体字",
    composition: "一 + 丨",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "丨", pinyin: "shù" }],
    memoryTip: "一横一竖像个十字架。",
    words: [{ word: "十个", pinyin: "shí gè" }, { word: "十月", pinyin: "shí yuè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "十", pinyin: "shí" }, { char: "个", pinyin: "gè" }, { char: "手", pinyin: "shǒu" }, { char: "指", pinyin: "zhǐ" }, { char: "头", pinyin: "tou" }]
  },
  "爸": {
    structure: "上下结构",
    composition: "父 + 巴",
    compositionParts: [{ char: "父", pinyin: "fù" }, { char: "巴", pinyin: "bā" }],
    memoryTip: "父亲的父加上巴，爸爸最爱我。",
    words: [{ word: "爸爸", pinyin: "bà ba" }, { word: "老爸", pinyin: "lǎo bà" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }]
  },
  "妈": {
    structure: "左右结构",
    composition: "女 + 马",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "马", pinyin: "mǎ" }],
    memoryTip: "女字旁加个马，妈妈最辛苦。",
    words: [{ word: "妈妈", pinyin: "mā ma" }, { word: "姨妈", pinyin: "yí mā" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }, { char: "去", pinyin: "qù" }, { char: "上", pinyin: "shàng" }, { char: "班", pinyin: "bān" }, { char: "了", pinyin: "le" }]
  },
  "马": {
    structure: "独体字",
    composition: "马",
    compositionParts: [{ char: "马", pinyin: "mǎ" }],
    memoryTip: "大马大马跑得快，背上还有长鬃毛。",
    words: [{ word: "马车", pinyin: "mǎ chē" }, { word: "小马", pinyin: "xiǎo mǎ" }],
    sentenceData: [{ char: "草", pinyin: "cǎo" }, { char: "原", pinyin: "yuán" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "匹", pinyin: "pǐ" }, { char: "马", pinyin: "mǎ" }]
  },
  "土": {
    structure: "独体字",
    composition: "十 + 一",
    compositionParts: [{ char: "十", pinyin: "shí" }, { char: "一", pinyin: "yī" }],
    memoryTip: "十字下面加一横，泥土能种花。",
    words: [{ word: "土地", pinyin: "tǔ dì" }, { word: "泥土", pinyin: "ní tǔ" }],
    sentenceData: [{ char: "土", pinyin: "tǔ" }, { char: "里", pinyin: "lǐ" }, { char: "长", pinyin: "zhǎng" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "小", pinyin: "xiǎo" }, { char: "苗", pinyin: "miáo" }]
  },
  "不": {
    structure: "独体字",
    composition: "一 + 撇 + 竖 + 点",
    compositionParts: [],
    memoryTip: "一横一撇一竖点，不字像个歪树根。",
    words: [{ word: "不要", pinyin: "bú yào" }, { word: "不对", pinyin: "bú duì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "不", pinyin: "bù" }, { char: "知", pinyin: "zhī" }, { char: "道", pinyin: "dào" }]
  },
  "画": {
    structure: "半包围结构",
    composition: "一 + 田 + 凵",
    compositionParts: [],
    memoryTip: "一块田地在框里，画出一幅美景。",
    words: [{ word: "画画", pinyin: "huà huà" }, { word: "图画", pinyin: "tú huà" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }]
  },
  "打": {
    structure: "左右结构",
    composition: "扌 + 丁",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "丁", pinyin: "dīng" }],
    memoryTip: "提手旁加个丁，打球打鼓都要手。",
    words: [{ word: "打球", pinyin: "dǎ qiú" }, { word: "打开", pinyin: "dǎ kāi" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "打", pinyin: "dǎ" }, { char: "篮", pinyin: "lán" }, { char: "球", pinyin: "qiú" }]
  },
  // --- Appendix 4: Basic Characters (Supplement) ---
  "又": {
    structure: "独体字",
    composition: "横撇 + 捺",
    compositionParts: [],
    memoryTip: "横撇加捺，又来一遍。",
    words: [{ word: "又来", pinyin: "yòu lái" }, { word: "又是", pinyin: "yòu shì" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "又", pinyin: "yòu" }, { char: "下", pinyin: "xià" }, { char: "雨", pinyin: "yǔ" }, { char: "了", pinyin: "le" }]
  },
  "千": {
    structure: "独体字",
    composition: "撇 + 十",
    compositionParts: [],
    memoryTip: "十字头上一撇，就是千。",
    words: [{ word: "千万", pinyin: "qiān wàn" }, { word: "秋千", pinyin: "qiū qiān" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "秋", pinyin: "qiū" }, { char: "千", pinyin: "qiān" }]
  },
  "工": {
    structure: "独体字",
    composition: "一 + 丨 + 一",
    compositionParts: [],
    memoryTip: "两横一竖，工人做工。",
    words: [{ word: "工人", pinyin: "gōng rén" }, { word: "工作", pinyin: "gōng zuò" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "去", pinyin: "qù" }, { char: "上", pinyin: "shàng" }, { char: "工", pinyin: "gōng" }]
  },
  "才": {
    structure: "独体字",
    composition: "一 + 亅 + 丿",
    compositionParts: [],
    memoryTip: "横竖钩加一撇，就是才。",
    words: [{ word: "刚才", pinyin: "gāng cái" }, { word: "人才", pinyin: "rén cái" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "刚", pinyin: "gāng" }, { char: "才", pinyin: "cái" }, { char: "吃", pinyin: "chī" }, { char: "完", pinyin: "wán" }, { char: "饭", pinyin: "fàn" }]
  },
  "大": {
    structure: "独体字",
    composition: "一 + 人",
    compositionParts: [],
    memoryTip: "一个人张开手，就是大。",
    words: [{ word: "大人", pinyin: "dà rén" }, { word: "大家", pinyin: "dà jiā" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "真", pinyin: "zhēn" }, { char: "大", pinyin: "dà" }]
  },
  "小": {
    structure: "独体字",
    composition: "亅 + 八",
    compositionParts: [],
    memoryTip: "竖钩两边点，就是小。",
    words: [{ word: "大小", pinyin: "dà xiǎo" }, { word: "小鸟", pinyin: "xiǎo niǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }]
  },
  "巾": {
    structure: "独体字",
    composition: "冂 + 丨",
    compositionParts: [],
    memoryTip: "一竖穿过框，就是毛巾。",
    words: [{ word: "毛巾", pinyin: "máo jīn" }, { word: "纸巾", pinyin: "zhǐ jīn" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "纸", pinyin: "zhǐ" }, { char: "巾", pinyin: "jīn" }]
  },
  "干": {
    structure: "独体字",
    composition: "一 + 十",
    compositionParts: [],
    memoryTip: "二字中间加一竖，就是干活。",
    words: [{ word: "干净", pinyin: "gān jìng" }, { word: "干活", pinyin: "gàn huó" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "把", pinyin: "bǎ" }, { char: "房", pinyin: "fáng" }, { char: "间", pinyin: "jiān" }, { char: "打", pinyin: "dǎ" }, { char: "扫", pinyin: "sǎo" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }]
  },
  "个": {
    structure: "上下结构",
    composition: "人 + 丨",
    compositionParts: [],
    memoryTip: "人字下面加一竖，就是一个。",
    words: [{ word: "一个", pinyin: "yí gè" }, { word: "个人", pinyin: "gè rén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "吃", pinyin: "chī" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yí" }, { char: "个", pinyin: "gè" }, { char: "梨", pinyin: "lí" }]
  },
  "广": {
    structure: "独体字",
    composition: "丶 + 一 + 丿",
    compositionParts: [],
    memoryTip: "一点一横长一撇，广场真宽广。",
    words: [{ word: "广大", pinyin: "guǎng dà" }, { word: "广场", pinyin: "guǎng chǎng" }],
    sentenceData: [{ char: "广", pinyin: "guǎng" }, { char: "场", pinyin: "chǎng" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "人", pinyin: "rén" }]
  },
  "门": {
    structure: "独体字",
    composition: "点 + 竖 + 横折钩",
    compositionParts: [],
    memoryTip: "一点加个框，就是大门。",
    words: [{ word: "开门", pinyin: "kāi mén" }, { word: "门口", pinyin: "mén kǒu" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "门", pinyin: "mén" }, { char: "关", pinyin: "guān" }, { char: "上", pinyin: "shàng" }]
  },
  "己": {
    structure: "独体字",
    composition: "横折 + 横 + 竖弯钩",
    compositionParts: [],
    memoryTip: "横折横竖弯钩，自己事情自己做。",
    words: [{ word: "自己", pinyin: "zì jǐ" }, { word: "知己", pinyin: "zhī jǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "穿", pinyin: "chuān" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "子": {
    structure: "独体字",
    composition: "了 + 一",
    compositionParts: [],
    memoryTip: "了字加一横，就是小孩子。",
    words: [{ word: "孩子", pinyin: "hái zi" }, { word: "儿子", pinyin: "ér zi" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "好", pinyin: "hǎo" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }]
  },
  "也": {
    structure: "独体字",
    composition: "横折钩 + 竖 + 竖弯钩",
    compositionParts: [],
    memoryTip: "横折钩里两竖弯，也许的也。",
    words: [{ word: "也是", pinyin: "yě shì" }, { word: "也许", pinyin: "yě xǔ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "也", pinyin: "yě" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }]
  },
  "女": {
    structure: "独体字",
    composition: "撇点 + 撇 + 横",
    compositionParts: [],
    memoryTip: "撇点撇横，女生爱漂亮。",
    words: [{ word: "女儿", pinyin: "nǚ ér" }, { word: "女生", pinyin: "nǚ shēng" }],
    sentenceData: [{ char: "她", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "小", pinyin: "xiǎo" }, { char: "女", pinyin: "nǚ" }, { char: "孩", pinyin: "hái" }]
  },
  "飞": {
    structure: "独体字",
    composition: "横折斜钩 + 撇 + 点",
    compositionParts: [],
    memoryTip: "横折斜钩像翅膀，小鸟飞高高。",
    words: [{ word: "飞机", pinyin: "fēi jī" }, { word: "飞快", pinyin: "fēi kuài" }],
    sentenceData: [{ char: "鸟", pinyin: "niǎo" }, { char: "儿", pinyin: "ér" }, { char: "在", pinyin: "zài" }, { char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "飞", pinyin: "fēi" }]
  },
  "习": {
    structure: "独体字",
    composition: "横折钩 + 提",
    compositionParts: [],
    memoryTip: "横折钩加一提，好好学习。",
    words: [{ word: "学习", pinyin: "xué xí" }, { word: "习字", pinyin: "xí zì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "王": {
    structure: "独体字",
    composition: "三 + 丨",
    compositionParts: [],
    memoryTip: "三横一竖，就是大王。",
    words: [{ word: "国王", pinyin: "guó wáng" }, { word: "大王", pinyin: "dà wáng" }],
    sentenceData: [{ char: "狮", pinyin: "shī" }, { char: "子", pinyin: "zi" }, { char: "是", pinyin: "shì" }, { char: "森", pinyin: "sēn" }, { char: "林", pinyin: "lín" }, { char: "之", pinyin: "zhī" }, { char: "王", pinyin: "wáng" }]
  },
  "开": {
    structure: "独体字",
    composition: "二 + 丿 + 丨",
    compositionParts: [],
    memoryTip: "两横一撇一竖，把门打开。",
    words: [{ word: "开门", pinyin: "kāi mén" }, { word: "开心", pinyin: "kāi xīn" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "开", pinyin: "kāi" }, { char: "心", pinyin: "xīn" }]
  },
  "元": {
    structure: "上下结构",
    composition: "二 + 儿",
    compositionParts: [],
    memoryTip: "二字底下是个儿，一元两元钱。",
    words: [{ word: "一元", pinyin: "yī yuán" }, { word: "公元", pinyin: "gōng yuán" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "支", pinyin: "zhī" }, { char: "笔", pinyin: "bǐ" }, { char: "一", pinyin: "yī" }, { char: "元", pinyin: "yuán" }, { char: "钱", pinyin: "qián" }]
  }
};
