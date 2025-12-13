import { AIExplanation } from "../../types";

export const DICT_CHUNK_01: Record<string, AIExplanation> = {
  "阿": {
    pinyin: "ā",
    structure: "左右结构",
    composition: "阝 + 可",
    compositionParts: [{ char: "阝", pinyin: "fù" }, { char: "可", pinyin: "kě" }],
    memoryTip: "耳朵旁加个可，阿婆笑呵呵。",
    words: [{ word: "阿姨", pinyin: "ā yí" }, { word: "阿婆", pinyin: "ā pó" }],
    sentenceData: [{ char: "阿", pinyin: "ā" }, { char: "姨", pinyin: "yí" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "糖", pinyin: "táng" }, { char: "果", pinyin: "guǒ" }]
  },
  "啊": {
    pinyin: "a",
    structure: "左右结构",
    composition: "口 + 阿",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "阿", pinyin: "ā" }],
    memoryTip: "口旁加个阿，表示惊讶啊。",
    words: [{ word: "啊呀", pinyin: "ā yā" }, { word: "好啊", pinyin: "hǎo a" }],
    sentenceData: [{ char: "啊", pinyin: "a" }, { char: "这", pinyin: "zhè" }, { char: "花", pinyin: "huā" }, { char: "真", pinyin: "zhēn" }, { char: "美", pinyin: "měi" }, { char: "啊", pinyin: "a" }]
  },
  "哎": {
    pinyin: "āi",
    structure: "左右结构",
    composition: "口 + 艾",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "艾", pinyin: "ài" }],
    memoryTip: "口字旁加艾，哎哟一声叫。",
    words: [{ word: "哎呀", pinyin: "āi yā" }, { word: "哎哟", pinyin: "āi yō" }],
    sentenceData: [{ char: "哎", pinyin: "āi" }, { char: "哟", pinyin: "yō" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "脚", pinyin: "jiǎo" }, { char: "好", pinyin: "hǎo" }, { char: "疼", pinyin: "téng" }]
  },
  "哀": {
    pinyin: "āi",
    structure: "上下结构",
    composition: "衣 + 口",
    compositionParts: [{ char: "衣", pinyin: "yī" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "衣字加个口，悲伤哀愁。",
    words: [{ word: "哀伤", pinyin: "āi shāng" }, { word: "哀悼", pinyin: "āi dào" }],
    sentenceData: [{ char: "听", pinyin: "tīng" }, { char: "到", pinyin: "dào" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "消", pinyin: "xiāo" }, { char: "息", pinyin: "xī" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "都", pinyin: "dōu" }, { char: "很", pinyin: "hěn" }, { char: "哀", pinyin: "āi" }, { char: "伤", pinyin: "shāng" }]
  },
  "唉": {
    pinyin: "āi",
    structure: "左右结构",
    composition: "口 + 矣",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "矣", pinyin: "yǐ" }],
    memoryTip: "口字加个矣，叹气声唉。",
    words: [{ word: "唉声", pinyin: "āi shēng" }, { word: "唉呀", pinyin: "āi yā" }],
    sentenceData: [{ char: "唉", pinyin: "āi" }, { char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "题", pinyin: "tí" }, { char: "真", pinyin: "zhēn" }, { char: "难", pinyin: "nán" }]
  },
  "埃": {
    pinyin: "āi",
    structure: "左右结构",
    composition: "土 + 矣",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "矣", pinyin: "yǐ" }],
    memoryTip: "土字加个矣，灰尘埃尘。",
    words: [{ word: "尘埃", pinyin: "chén āi" }, { word: "埃及", pinyin: "āi jí" }],
    sentenceData: [{ char: "桌", pinyin: "zhuō" }, { char: "子", pinyin: "zi" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "尘", pinyin: "chén" }, { char: "埃", pinyin: "āi" }]
  },
  "挨": {
    pinyin: "āi",
    structure: "左右结构",
    composition: "扌 + 矣",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "矣", pinyin: "yǐ" }],
    memoryTip: "手旁加个矣，挨着排队。",
    words: [{ word: "挨着", pinyin: "āi zhe" }, { word: "挨打", pinyin: "ái dǎ" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "们", pinyin: "men" }, { char: "挨", pinyin: "āi" }, { char: "个", pinyin: "gè" }, { char: "坐", pinyin: "zuò" }, { char: "好", pinyin: "hǎo" }]
  },
  "癌": {
    pinyin: "ái",
    structure: "半包围结构",
    composition: "疒 + 品",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "品", pinyin: "pǐn" }],
    memoryTip: "病字头加品，癌症要预防。",
    words: [{ word: "癌症", pinyin: "ái zhèng" }, { word: "抗癌", pinyin: "kàng ái" }],
    sentenceData: [{ char: "定", pinyin: "dìng" }, { char: "期", pinyin: "qī" }, { char: "体", pinyin: "tǐ" }, { char: "检", pinyin: "jiǎn" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "预", pinyin: "yù" }, { char: "防", pinyin: "fáng" }, { char: "癌", pinyin: "ái" }, { char: "症", pinyin: "zhèng" }]
  },
  "矮": {
    pinyin: "ǎi",
    structure: "左右结构",
    composition: "矢 + 委",
    compositionParts: [{ char: "矢", pinyin: "shǐ" }, { char: "委", pinyin: "wěi" }],
    memoryTip: "矢字加个委，个子矮矮。",
    words: [{ word: "矮小", pinyin: "ǎi xiǎo" }, { word: "高矮", pinyin: "gāo ǎi" }],
    sentenceData: [{ char: "弟", pinyin: "dì" }, { char: "弟", pinyin: "di" }, { char: "比", pinyin: "bǐ" }, { char: "哥", pinyin: "gē" }, { char: "哥", pinyin: "ge" }, { char: "矮", pinyin: "ǎi" }, { char: "一", pinyin: "yī" }, { char: "点", pinyin: "diǎn" }]
  },
  "艾": {
    pinyin: "ài",
    structure: "上下结构",
    composition: "艹 + 乂",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "乂", pinyin: "yì" }],
    memoryTip: "草字头加乂，艾草香香。",
    words: [{ word: "艾草", pinyin: "ài cǎo" }, { word: "艾灸", pinyin: "ài jiǔ" }],
    sentenceData: [{ char: "端", pinyin: "duān" }, { char: "午", pinyin: "wǔ" }, { char: "节", pinyin: "jié" }, { char: "要", pinyin: "yào" }, { char: "挂", pinyin: "guà" }, { char: "艾", pinyin: "ài" }, { char: "草", pinyin: "cǎo" }]
  },
  "爱": {
    pinyin: "ài",
    structure: "上下结构",
    composition: "爫 + 冖 + 友",
    compositionParts: [{ char: "爫", pinyin: "zhǎo" }, { char: "冖", pinyin: "mì" }, { char: "友", pinyin: "yǒu" }],
    memoryTip: "爪字头加冖友，爱心温暖。",
    words: [{ word: "爱心", pinyin: "ài xīn" }, { word: "爱护", pinyin: "ài hù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }]
  },
  "碍": {
    pinyin: "ài",
    structure: "左右结构",
    composition: "石 + 得",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "得", pinyin: "dé" }],
    memoryTip: "石字加个得，障碍阻碍。",
    words: [{ word: "障碍", pinyin: "zhàng ài" }, { word: "妨碍", pinyin: "fáng ài" }],
    sentenceData: [{ char: "前", pinyin: "qián" }, { char: "面", pinyin: "miàn" }, { char: "有", pinyin: "yǒu" }, { char: "障", pinyin: "zhàng" }, { char: "碍", pinyin: "ài" }, { char: "物", pinyin: "wù" }, { char: "请", pinyin: "qǐng" }, { char: "绕", pinyin: "rào" }, { char: "行", pinyin: "xíng" }]
  },
  "安": {
    pinyin: "ān",
    structure: "上下结构",
    composition: "宀 + 女",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "女", pinyin: "nǚ" }],
    memoryTip: "宝盖头加女，平安安全。",
    words: [{ word: "安全", pinyin: "ān quán" }, { word: "平安", pinyin: "píng ān" }],
    sentenceData: [{ char: "祝", pinyin: "zhù" }, { char: "你", pinyin: "nǐ" }, { char: "一", pinyin: "yī" }, { char: "路", pinyin: "lù" }, { char: "平", pinyin: "píng" }, { char: "安", pinyin: "ān" }]
  },
  "氨": {
    pinyin: "ān",
    structure: "半包围结构",
    composition: "气 + 安",
    compositionParts: [{ char: "气", pinyin: "qì" }, { char: "安", pinyin: "ān" }],
    memoryTip: "气字头加安，氨气化学。",
    words: [{ word: "氨气", pinyin: "ān qì" }, { word: "氨基酸", pinyin: "ān jī suān" }],
    sentenceData: [{ char: "化", pinyin: "huà" }, { char: "学", pinyin: "xué" }, { char: "实", pinyin: "shí" }, { char: "验", pinyin: "yàn" }, { char: "室", pinyin: "shì" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "氨", pinyin: "ān" }, { char: "气", pinyin: "qì" }]
  },
  "俺": {
    pinyin: "ǎn",
    structure: "左右结构",
    composition: "亻 + 奄",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "奄", pinyin: "yǎn" }],
    memoryTip: "单人旁加奄，俺是方言。",
    words: [{ word: "俺们", pinyin: "ǎn men" }, { word: "俺家", pinyin: "ǎn jiā" }],
    sentenceData: [{ char: "俺", pinyin: "ǎn" }, { char: "是", pinyin: "shì" }, { char: "山", pinyin: "shān" }, { char: "东", pinyin: "dōng" }, { char: "人", pinyin: "rén" }]
  },
  "岸": {
    pinyin: "àn",
    structure: "上下结构",
    composition: "山 + 干",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "干", pinyin: "gān" }],
    memoryTip: "山字加个干，岸边河岸。",
    words: [{ word: "岸边", pinyin: "àn biān" }, { word: "海岸", pinyin: "hǎi àn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "河", pinyin: "hé" }, { char: "岸", pinyin: "àn" }, { char: "边", pinyin: "biān" }, { char: "散", pinyin: "sàn" }, { char: "步", pinyin: "bù" }]
  },
  "按": {
    pinyin: "àn",
    structure: "左右结构",
    composition: "扌 + 安",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "安", pinyin: "ān" }],
    memoryTip: "手旁加个安，按按钮。",
    words: [{ word: "按钮", pinyin: "àn niǔ" }, { word: "按照", pinyin: "àn zhào" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "按", pinyin: "àn" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "按", pinyin: "àn" }, { char: "钮", pinyin: "niǔ" }]
  },
  "案": {
    pinyin: "àn",
    structure: "上下结构",
    composition: "安 + 木",
    compositionParts: [{ char: "安", pinyin: "ān" }, { char: "木", pinyin: "mù" }],
    memoryTip: "安字加个木，案件案板。",
    words: [{ word: "案件", pinyin: "àn jiàn" }, { word: "方案", pinyin: "fāng àn" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "在", pinyin: "zài" }, { char: "调", pinyin: "diào" }, { char: "查", pinyin: "chá" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "案", pinyin: "àn" }, { char: "子", pinyin: "zi" }]
  },
  "暗": {
    pinyin: "àn",
    structure: "左右结构",
    composition: "日 + 音",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "音", pinyin: "yīn" }],
    memoryTip: "日字加个音，黑暗暗处。",
    words: [{ word: "黑暗", pinyin: "hēi àn" }, { word: "暗示", pinyin: "àn shì" }],
    sentenceData: [{ char: "房", pinyin: "fáng" }, { char: "间", pinyin: "jiān" }, { char: "里", pinyin: "lǐ" }, { char: "很", pinyin: "hěn" }, { char: "暗", pinyin: "àn" }, { char: "请", pinyin: "qǐng" }, { char: "开", pinyin: "kāi" }, { char: "灯", pinyin: "dēng" }]
  },
  "目": {
    pinyin: "mù",
    structure: "独体字",
    composition: "目",
    compositionParts: [{ char: "目", pinyin: "mù" }],
    memoryTip: "眼睛形状目，目光注视。",
    words: [{ word: "目光", pinyin: "mù guāng" }, { word: "目标", pinyin: "mù biāo" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "的", pinyin: "de" }, { char: "目", pinyin: "mù" }, { char: "光", pinyin: "guāng" }, { char: "很", pinyin: "hěn" }, { char: "温", pinyin: "wēn" }, { char: "和", pinyin: "hé" }]
  },
  "凹": {
    pinyin: "āo",
    structure: "独体字",
    composition: "凹",
    compositionParts: [{ char: "凹", pinyin: "āo" }],
    memoryTip: "中间凹陷凹，凸凹相对。",
    words: [{ word: "凹陷", pinyin: "āo xiàn" }, { word: "凹凸", pinyin: "āo tū" }],
    sentenceData: [{ char: "地", pinyin: "dì" }, { char: "面", pinyin: "miàn" }, { char: "有", pinyin: "yǒu" }, { char: "个", pinyin: "gè" }, { char: "凹", pinyin: "āo" }, { char: "陷", pinyin: "xiàn" }, { char: "的", pinyin: "de" }, { char: "地", pinyin: "dì" }, { char: "方", pinyin: "fāng" }]
  },
  "熬": {
    pinyin: "áo",
    structure: "上下结构",
    composition: "敖 + 灬",
    compositionParts: [{ char: "敖", pinyin: "áo" }, { char: "灬", pinyin: "huǒ" }],
    memoryTip: "敖字加四点，熬汤熬药。",
    words: [{ word: "熬夜", pinyin: "áo yè" }, { word: "熬汤", pinyin: "áo tāng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }, { char: "在", pinyin: "zài" }, { char: "厨", pinyin: "chú" }, { char: "房", pinyin: "fáng" }, { char: "熬", pinyin: "áo" }, { char: "汤", pinyin: "tāng" }]
  },
  "做": {
    pinyin: "zuò",
    structure: "左右结构",
    composition: "亻 + 故",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "故", pinyin: "gù" }],
    memoryTip: "单人旁加故，做事做人。",
    words: [{ word: "做事", pinyin: "zuò shì" }, { word: "做作业", pinyin: "zuò zuò yè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "要", pinyin: "yào" }, { char: "认", pinyin: "rèn" }, { char: "真", pinyin: "zhēn" }, { char: "做", pinyin: "zuò" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }]
  },
  "奥": {
    pinyin: "ào",
    structure: "上下结构",
    composition: "大 + 米",
    compositionParts: [{ char: "大", pinyin: "dà" }, { char: "米", pinyin: "mǐ" }],
    memoryTip: "大字加个米，奥运会。",
    words: [{ word: "奥运", pinyin: "ào yùn" }, { word: "奥秘", pinyin: "ào mì" }],
    sentenceData: [{ char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }, { char: "举", pinyin: "jǔ" }, { char: "办", pinyin: "bàn" }, { char: "过", pinyin: "guò" }, { char: "奥", pinyin: "ào" }, { char: "运", pinyin: "yùn" }, { char: "会", pinyin: "huì" }]
  },
  "澳": {
    pinyin: "ào",
    structure: "左右结构",
    composition: "氵 + 奥",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "奥", pinyin: "ào" }],
    memoryTip: "三点水加奥，澳门澳洲。",
    words: [{ word: "澳门", pinyin: "ào mén" }, { word: "澳洲", pinyin: "ào zhōu" }],
    sentenceData: [{ char: "澳", pinyin: "ào" }, { char: "门", pinyin: "mén" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "特", pinyin: "tè" }, { char: "别", pinyin: "bié" }, { char: "行", pinyin: "xíng" }, { char: "政", pinyin: "zhèng" }, { char: "区", pinyin: "qū" }]
  },
  "八": {
    pinyin: "bā",
    structure: "独体字",
    composition: "八",
    compositionParts: [{ char: "八", pinyin: "bā" }],
    memoryTip: "一撇一捺八，数字八。",
    words: [{ word: "八个", pinyin: "bā gè" }, { word: "八月", pinyin: "bā yuè" }],
    sentenceData: [{ char: "一", pinyin: "yī" }, { char: "年", pinyin: "nián" }, { char: "有", pinyin: "yǒu" }, { char: "十", pinyin: "shí" }, { char: "二", pinyin: "èr" }, { char: "个", pinyin: "gè" }, { char: "月", pinyin: "yuè" }, { char: "八", pinyin: "bā" }, { char: "月", pinyin: "yuè" }, { char: "最", pinyin: "zuì" }, { char: "热", pinyin: "rè" }]
  },
  "巴": {
    pinyin: "bā",
    structure: "独体字",
    composition: "巴",
    compositionParts: [{ char: "巴", pinyin: "bā" }],
    memoryTip: "尾巴形状巴，巴望巴西。",
    words: [{ word: "巴西", pinyin: "bā xī" }, { word: "尾巴", pinyin: "wěi ba" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "狗", pinyin: "gǒu" }, { char: "摇", pinyin: "yáo" }, { char: "着", pinyin: "zhe" }, { char: "尾", pinyin: "wěi" }, { char: "巴", pinyin: "ba" }]
  },
  "叭": {
    pinyin: "bā",
    structure: "左右结构",
    composition: "口 + 八",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "八", pinyin: "bā" }],
    memoryTip: "口字加个八，喇叭叭叭。",
    words: [{ word: "喇叭", pinyin: "lǎ ba" }, { word: "叭叭", pinyin: "bā bā" }],
    sentenceData: [{ char: "汽", pinyin: "qì" }, { char: "车", pinyin: "chē" }, { char: "喇", pinyin: "lǎ" }, { char: "叭", pinyin: "ba" }, { char: "叭", pinyin: "bā" }, { char: "叭", pinyin: "bā" }, { char: "响", pinyin: "xiǎng" }]
  },
  "吧": {
    pinyin: "ba",
    structure: "左右结构",
    composition: "口 + 巴",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "巴", pinyin: "bā" }],
    memoryTip: "口字加个巴，语气词吧。",
    words: [{ word: "好吧", pinyin: "hǎo ba" }, { word: "网吧", pinyin: "wǎng bā" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "去", pinyin: "qù" }, { char: "玩", pinyin: "wán" }, { char: "吧", pinyin: "ba" }]
  },
  "拔": {
    pinyin: "bá",
    structure: "左右结构",
    composition: "扌 + 发",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "发", pinyin: "fā" }],
    memoryTip: "手旁加个发，拔河拔草。",
    words: [{ word: "拔河", pinyin: "bá hé" }, { word: "拔草", pinyin: "bá cǎo" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "操", pinyin: "cǎo" }, { char: "场", pinyin: "chǎng" }, { char: "上", pinyin: "shàng" }, { char: "拔", pinyin: "bá" }, { char: "河", pinyin: "hé" }]
  },
  "把": {
    pinyin: "bǎ",
    structure: "左右结构",
    composition: "扌 + 巴",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "巴", pinyin: "bā" }],
    memoryTip: "手旁加个巴，把握把手。",
    words: [{ word: "把握", pinyin: "bǎ wò" }, { word: "把手", pinyin: "bǎ shǒu" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "书", pinyin: "shū" }, { char: "递", pinyin: "dì" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }]
  },
  "坝": {
    pinyin: "bà",
    structure: "左右结构",
    composition: "土 + 贝",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "土字加个贝，水坝大坝。",
    words: [{ word: "水坝", pinyin: "shuǐ bà" }, { word: "大坝", pinyin: "dà bà" }],
    sentenceData: [{ char: "长", pinyin: "cháng" }, { char: "江", pinyin: "jiāng" }, { char: "三", pinyin: "sān" }, { char: "峡", pinyin: "xiá" }, { char: "大", pinyin: "dà" }, { char: "坝", pinyin: "bà" }, { char: "很", pinyin: "hěn" }, { char: "雄", pinyin: "xióng" }, { char: "伟", pinyin: "wěi" }]
  },
  "爸": {
    pinyin: "bà",
    structure: "上下结构",
    composition: "父 + 巴",
    compositionParts: [{ char: "父", pinyin: "fù" }, { char: "巴", pinyin: "bā" }],
    memoryTip: "父字加个巴，爸爸父亲。",
    words: [{ word: "爸爸", pinyin: "bà ba" }, { word: "老爸", pinyin: "lǎo bà" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "是", pinyin: "shì" }, { char: "工", pinyin: "gōng" }, { char: "程", pinyin: "chéng" }, { char: "师", pinyin: "shī" }]
  },
  "罢": {
    pinyin: "bà",
    structure: "上下结构",
    composition: "罒 + 去",
    compositionParts: [{ char: "罒", pinyin: "wǎng" }, { char: "去", pinyin: "qù" }],
    memoryTip: "网字头加去，罢工罢了。",
    words: [{ word: "罢工", pinyin: "bà gōng" }, { word: "罢了", pinyin: "bà le" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "为", pinyin: "wèi" }, { char: "了", pinyin: "le" }, { char: "争", pinyin: "zhēng" }, { char: "取", pinyin: "qǔ" }, { char: "权", pinyin: "quán" }, { char: "益", pinyin: "yì" }, { char: "而", pinyin: "ér" }, { char: "罢", pinyin: "bà" }, { char: "工", pinyin: "gōng" }]
  },
  "霸": {
    pinyin: "bà",
    structure: "上下结构",
    composition: "雨 + 革 + 月",
    compositionParts: [{ char: "雨", pinyin: "yǔ" }, { char: "革", pinyin: "gé" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "雨字头加革月，霸王霸道。",
    words: [{ word: "霸王", pinyin: "bà wáng" }, { word: "霸道", pinyin: "bà dào" }],
    sentenceData: [{ char: "项", pinyin: "xiàng" }, { char: "羽", pinyin: "yǔ" }, { char: "是", pinyin: "shì" }, { char: "西", pinyin: "xī" }, { char: "楚", pinyin: "chǔ" }, { char: "霸", pinyin: "bà" }, { char: "王", pinyin: "wáng" }]
  },
  "白": {
    pinyin: "bái",
    structure: "独体字",
    composition: "白",
    compositionParts: [{ char: "白", pinyin: "bái" }],
    memoryTip: "太阳光芒白，白色白云。",
    words: [{ word: "白色", pinyin: "bái sè" }, { word: "白云", pinyin: "bái yún" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "飘", pinyin: "piāo" }, { char: "着", pinyin: "zhe" }, { char: "白", pinyin: "bái" }, { char: "云", pinyin: "yún" }]
  },
  "百": {
    pinyin: "bǎi",
    structure: "独体字",
    composition: "百",
    compositionParts: [{ char: "百", pinyin: "bǎi" }],
    memoryTip: "一横加白，数字一百。",
    words: [{ word: "一百", pinyin: "yī bǎi" }, { word: "百分", pinyin: "bǎi fēn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "考", pinyin: "kǎo" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "百", pinyin: "bǎi" }, { char: "分", pinyin: "fēn" }]
  },
  "柏": {
    pinyin: "bǎi",
    structure: "左右结构",
    composition: "木 + 白",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "白", pinyin: "bái" }],
    memoryTip: "木字加个白，柏树柏油。",
    words: [{ word: "柏树", pinyin: "bǎi shù" }, { word: "柏油", pinyin: "bǎi yóu" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "柏", pinyin: "bǎi" }, { char: "树", pinyin: "shù" }]
  },
  "摆": {
    pinyin: "bǎi",
    structure: "左右结构",
    composition: "扌 + 罢",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "罢", pinyin: "bà" }],
    memoryTip: "手旁加个罢，摆动摇摆。",
    words: [{ word: "摆动", pinyin: "bǎi dòng" }, { word: "摆放", pinyin: "bǎi fàng" }],
    sentenceData: [{ char: "风", pinyin: "fēng" }, { char: "吹", pinyin: "chuī" }, { char: "树", pinyin: "shù" }, { char: "枝", pinyin: "zhī" }, { char: "来", pinyin: "lái" }, { char: "回", pinyin: "huí" }, { char: "摆", pinyin: "bǎi" }, { char: "动", pinyin: "dòng" }]
  },
  "败": {
    pinyin: "bài",
    structure: "左右结构",
    composition: "贝 + 攵",
    compositionParts: [{ char: "贝", pinyin: "bèi" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "贝字加攵，失败败仗。",
    words: [{ word: "失败", pinyin: "shī bài" }, { word: "败仗", pinyin: "bài zhàng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "次", pinyin: "cì" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }, { char: "虽", pinyin: "suī" }, { char: "然", pinyin: "rán" }, { char: "失", pinyin: "shī" }, { char: "败", pinyin: "bài" }, { char: "了", pinyin: "le" }, { char: "但", pinyin: "dàn" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "学", pinyin: "xué" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }]
  },
  "拜": {
    pinyin: "bài",
    structure: "左右结构",
    composition: "手 + 手",
    compositionParts: [{ char: "手", pinyin: "shǒu" }, { char: "手", pinyin: "shǒu" }],
    memoryTip: "双手合十拜，拜年拜访。",
    words: [{ word: "拜年", pinyin: "bài nián" }, { word: "拜访", pinyin: "bài fǎng" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "节", pinyin: "jié" }, { char: "时", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "给", pinyin: "gěi" }, { char: "长", pinyin: "zhǎng" }, { char: "辈", pinyin: "bèi" }, { char: "拜", pinyin: "bài" }, { char: "年", pinyin: "nián" }]
  },
  "班": {
    pinyin: "bān",
    structure: "左右结构",
    composition: "王 + 王",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "王", pinyin: "wáng" }],
    memoryTip: "两个王字班，班级上班。",
    words: [{ word: "班级", pinyin: "bān jí" }, { word: "上班", pinyin: "shàng bān" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "在", pinyin: "zài" }, { char: "三", pinyin: "sān" }, { char: "年", pinyin: "nián" }, { char: "级", pinyin: "jí" }, { char: "一", pinyin: "yī" }, { char: "班", pinyin: "bān" }]
  },
  "般": {
    pinyin: "bān",
    structure: "左右结构",
    composition: "舟 + 殳",
    compositionParts: [{ char: "舟", pinyin: "zhōu" }, { char: "殳", pinyin: "shū" }],
    memoryTip: "舟字加殳，一般般配。",
    words: [{ word: "一般", pinyin: "yī bān" }, { word: "般配", pinyin: "bān pèi" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "题", pinyin: "tí" }, { char: "一", pinyin: "yī" }, { char: "般", pinyin: "bān" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "都", pinyin: "dōu" }, { char: "会", pinyin: "huì" }, { char: "做", pinyin: "zuò" }]
  },
  "颁": {
    pinyin: "bān",
    structure: "左右结构",
    composition: "分 + 页",
    compositionParts: [{ char: "分", pinyin: "fēn" }, { char: "页", pinyin: "yè" }],
    memoryTip: "分字加个页，颁发颁奖。",
    words: [{ word: "颁发", pinyin: "bān fā" }, { word: "颁奖", pinyin: "bān jiǎng" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "将", pinyin: "jiāng" }, { char: "为", pinyin: "wèi" }, { char: "优", pinyin: "yōu" }, { char: "秀", pinyin: "xiù" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "颁", pinyin: "bān" }, { char: "发", pinyin: "fā" }, { char: "奖", pinyin: "jiǎng" }, { char: "状", pinyin: "zhuàng" }]
  },
  "斑": {
    pinyin: "bān",
    structure: "左右结构",
    composition: "王 + 文",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "文", pinyin: "wén" }],
    memoryTip: "王字加个文，斑点斑马。",
    words: [{ word: "斑点", pinyin: "bān diǎn" }, { word: "斑马", pinyin: "bān mǎ" }],
    sentenceData: [{ char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "斑", pinyin: "bān" }, { char: "马", pinyin: "mǎ" }]
  },
  "搬": {
    pinyin: "bān",
    structure: "左右结构",
    composition: "扌 + 般",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "般", pinyin: "bān" }],
    memoryTip: "手旁加个般，搬家搬运。",
    words: [{ word: "搬家", pinyin: "bān jiā" }, { word: "搬运", pinyin: "bān yùn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "家", pinyin: "jiā" }, { char: "下", pinyin: "xià" }, { char: "周", pinyin: "zhōu" }, { char: "要", pinyin: "yào" }, { char: "搬", pinyin: "bān" }, { char: "家", pinyin: "jiā" }]
  },
  "板": {
    pinyin: "bǎn",
    structure: "左右结构",
    composition: "木 + 反",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "反", pinyin: "fǎn" }],
    memoryTip: "木字加个反，木板黑板。",
    words: [{ word: "木板", pinyin: "mù bǎn" }, { word: "黑板", pinyin: "hēi bǎn" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "在", pinyin: "zài" }, { char: "黑", pinyin: "hēi" }, { char: "板", pinyin: "bǎn" }, { char: "上", pinyin: "shàng" }, { char: "写", pinyin: "xiě" }, { char: "字", pinyin: "zì" }]
  },
  "版": {
    pinyin: "bǎn",
    structure: "左右结构",
    composition: "片 + 反",
    compositionParts: [{ char: "片", pinyin: "piàn" }, { char: "反", pinyin: "fǎn" }],
    memoryTip: "片字加个反，版本出版。",
    words: [{ word: "版本", pinyin: "bǎn běn" }, { word: "出版", pinyin: "chū bǎn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }, { char: "是", pinyin: "shì" }, { char: "最", pinyin: "zuì" }, { char: "新", pinyin: "xīn" }, { char: "版", pinyin: "bǎn" }, { char: "本", pinyin: "běn" }]
  },
  "办": {
    pinyin: "bàn",
    structure: "独体字",
    composition: "力 + 八",
    compositionParts: [{ char: "力", pinyin: "lì" }, { char: "八", pinyin: "bā" }],
    memoryTip: "力字加个八，办法办公。",
    words: [{ word: "办法", pinyin: "bàn fǎ" }, { word: "办公", pinyin: "bàn gōng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "想", pinyin: "xiǎng" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "好", pinyin: "hǎo" }, { char: "办", pinyin: "bàn" }, { char: "法", pinyin: "fǎ" }]
  },
  "半": {
    pinyin: "bàn",
    structure: "独体字",
    composition: "八 + 十",
    compositionParts: [{ char: "八", pinyin: "bā" }, { char: "十", pinyin: "shí" }],
    memoryTip: "八字加个十，一半半路。",
    words: [{ word: "一半", pinyin: "yī bàn" }, { word: "半路", pinyin: "bàn lù" }],
    sentenceData: [{ char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "我", pinyin: "wǒ" }, { char: "吃", pinyin: "chī" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "半", pinyin: "bàn" }]
  },
  "伴": {
    pinyin: "bàn",
    structure: "左右结构",
    composition: "亻 + 半",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "半", pinyin: "bàn" }],
    memoryTip: "单人旁加半，伙伴陪伴。",
    words: [{ word: "伙伴", pinyin: "huǒ bàn" }, { word: "陪伴", pinyin: "péi bàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "和", pinyin: "hé" }, { char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "是", pinyin: "shì" }, { char: "好", pinyin: "hǎo" }, { char: "伙", pinyin: "huǒ" }, { char: "伴", pinyin: "bàn" }]
  },
  "扮": {
    pinyin: "bàn",
    structure: "左右结构",
    composition: "扌 + 分",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "分", pinyin: "fēn" }],
    memoryTip: "手旁加个分，扮演打扮。",
    words: [{ word: "扮演", pinyin: "bàn yǎn" }, { word: "打扮", pinyin: "dǎ bàn" }],
    sentenceData: [{ char: "儿", pinyin: "ér" }, { char: "童", pinyin: "tóng" }, { char: "节", pinyin: "jié" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "我", pinyin: "wǒ" }, { char: "扮", pinyin: "bàn" }, { char: "演", pinyin: "yǎn" }, { char: "小", pinyin: "xiǎo" }, { char: "白", pinyin: "bái" }, { char: "兔", pinyin: "tù" }]
  },
  "瓣": {
    pinyin: "bàn",
    structure: "左中右结构",
    composition: "辛 + 瓜 + 辛",
    compositionParts: [{ char: "辛", pinyin: "xīn" }, { char: "瓜", pinyin: "guā" }, { char: "辛", pinyin: "xīn" }],
    memoryTip: "两个辛加瓜，花瓣瓣膜。",
    words: [{ word: "花瓣", pinyin: "huā bàn" }, { word: "瓣膜", pinyin: "bàn mó" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "朵", pinyin: "duǒ" }, { char: "花", pinyin: "huā" }, { char: "有", pinyin: "yǒu" }, { char: "五", pinyin: "wǔ" }, { char: "个", pinyin: "gè" }, { char: "花", pinyin: "huā" }, { char: "瓣", pinyin: "bàn" }]
  },
  "邦": {
    pinyin: "bāng",
    structure: "左右结构",
    composition: "丰 + 阝",
    compositionParts: [{ char: "丰", pinyin: "fēng" }, { char: "阝", pinyin: "fù" }],
    memoryTip: "丰字加阝旁，邦交友邦。",
    words: [{ word: "邦交", pinyin: "bāng jiāo" }, { word: "友邦", pinyin: "yǒu bāng" }],
    sentenceData: [{ char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "与", pinyin: "yǔ" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "国", pinyin: "guó" }, { char: "家", pinyin: "jiā" }, { char: "建", pinyin: "jiàn" }, { char: "立", pinyin: "lì" }, { char: "了", pinyin: "le" }, { char: "邦", pinyin: "bāng" }, { char: "交", pinyin: "jiāo" }, { char: "关", pinyin: "guān" }, { char: "系", pinyin: "xì" }]
  },
  "帮": {
    pinyin: "bāng",
    structure: "上下结构",
    composition: "邦 + 巾",
    compositionParts: [{ char: "邦", pinyin: "bāng" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "邦字加个巾，帮助帮忙。",
    words: [{ word: "帮助", pinyin: "bāng zhù" }, { word: "帮忙", pinyin: "bāng máng" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "之", pinyin: "zhī" }, { char: "间", pinyin: "jiān" }, { char: "要", pinyin: "yào" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "膀": {
    pinyin: "bǎng",
    structure: "左右结构",
    composition: "月 + 旁",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "旁", pinyin: "páng" }],
    memoryTip: "月字加个旁，肩膀翅膀。",
    words: [{ word: "肩膀", pinyin: "jiān bǎng" }, { word: "翅膀", pinyin: "chì bǎng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }, { char: "张", pinyin: "zhāng" }, { char: "开", pinyin: "kāi" }, { char: "翅", pinyin: "chì" }, { char: "膀", pinyin: "bǎng" }, { char: "飞", pinyin: "fēi" }, { char: "向", pinyin: "xiàng" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }]
  },
  "傍": {
    pinyin: "bàng",
    structure: "左右结构",
    composition: "亻 + 旁",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "旁", pinyin: "páng" }],
    memoryTip: "单人旁加旁，傍晚傍依。",
    words: [{ word: "傍晚", pinyin: "bàng wǎn" }, { word: "傍依", pinyin: "bàng yī" }],
    sentenceData: [{ char: "傍", pinyin: "bàng" }, { char: "晚", pinyin: "wǎn" }, { char: "的", pinyin: "de" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }]
  },
  "棒": {
    pinyin: "bàng",
    structure: "左右结构",
    composition: "木 + 奉",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "奉", pinyin: "fèng" }],
    memoryTip: "木字加个奉，棒球棒棒糖。",
    words: [{ word: "棒球", pinyin: "bàng qiú" }, { word: "棒棒糖", pinyin: "bàng bàng táng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "棒", pinyin: "bàng" }, { char: "棒", pinyin: "bàng" }, { char: "糖", pinyin: "táng" }]
  },
  "包": {
    pinyin: "bāo",
    structure: "半包围结构",
    composition: "勹 + 巳",
    compositionParts: [{ char: "勹", pinyin: "bāo" }, { char: "巳", pinyin: "sì" }],
    memoryTip: "勹字加个巳，包子书包。",
    words: [{ word: "包子", pinyin: "bāo zi" }, { word: "书包", pinyin: "shū bāo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "书", pinyin: "shū" }, { char: "包", pinyin: "bāo" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "书", pinyin: "shū" }]
  },
  "胞": {
    pinyin: "bāo",
    structure: "左右结构",
    composition: "月 + 包",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "包", pinyin: "bāo" }],
    memoryTip: "月字加个包，细胞同胞。",
    words: [{ word: "细胞", pinyin: "xì bāo" }, { word: "同胞", pinyin: "tóng bāo" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "体", pinyin: "tǐ" }, { char: "由", pinyin: "yóu" }, { char: "无", pinyin: "wú" }, { char: "数", pinyin: "shù" }, { char: "细", pinyin: "xì" }, { char: "胞", pinyin: "bāo" }, { char: "组", pinyin: "zǔ" }, { char: "成", pinyin: "chéng" }]
  },
  "宝": {
    pinyin: "bǎo",
    structure: "上下结构",
    composition: "宀 + 玉",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "玉", pinyin: "yù" }],
    memoryTip: "宝盖头加玉，宝贝宝贵。",
    words: [{ word: "宝贝", pinyin: "bǎo bèi" }, { word: "宝贵", pinyin: "bǎo guì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "宝", pinyin: "bǎo" }, { char: "贝", pinyin: "bèi" }]
  },
  "饱": {
    pinyin: "bǎo",
    structure: "左右结构",
    composition: "饣 + 包",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "包", pinyin: "bāo" }],
    memoryTip: "食字旁加包，吃饱饱足。",
    words: [{ word: "吃饱", pinyin: "chī bǎo" }, { word: "饱足", pinyin: "bǎo zú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "吃", pinyin: "chī" }, { char: "饱", pinyin: "bǎo" }, { char: "了", pinyin: "le" }, { char: "现", pinyin: "xiàn" }, { char: "在", pinyin: "zài" }, { char: "很", pinyin: "hěn" }, { char: "舒", pinyin: "shū" }, { char: "服", pinyin: "fú" }]
  },
  "保": {
    pinyin: "bǎo",
    structure: "左右结构",
    composition: "亻 + 呆",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "呆", pinyin: "dāi" }],
    memoryTip: "单人旁加呆，保护保持。",
    words: [{ word: "保护", pinyin: "bǎo hù" }, { word: "保持", pinyin: "bǎo chí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }]
  },
  "堡": {
    pinyin: "bǎo",
    structure: "上下结构",
    composition: "保 + 土",
    compositionParts: [{ char: "保", pinyin: "bǎo" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "保字加个土，城堡堡垒。",
    words: [{ word: "城堡", pinyin: "chéng bǎo" }, { word: "堡垒", pinyin: "bǎo lěi" }],
    sentenceData: [{ char: "童", pinyin: "tóng" }, { char: "话", pinyin: "huà" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "城", pinyin: "chéng" }, { char: "堡", pinyin: "bǎo" }]
  },
  "报": {
    pinyin: "bào",
    structure: "左右结构",
    composition: "扌 + 服",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "服", pinyin: "fú" }],
    memoryTip: "手旁加个服，报纸报告。",
    words: [{ word: "报纸", pinyin: "bào zhǐ" }, { word: "报告", pinyin: "bào gào" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "早", pinyin: "zǎo" }, { char: "上", pinyin: "shàng" }, { char: "看", pinyin: "kàn" }, { char: "报", pinyin: "bào" }, { char: "纸", pinyin: "zhǐ" }]
  },
  "抱": {
    pinyin: "bào",
    structure: "左右结构",
    composition: "扌 + 包",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "包", pinyin: "bāo" }],
    memoryTip: "手旁加个包，拥抱抱抱。",
    words: [{ word: "拥抱", pinyin: "yōng bào" }, { word: "抱抱", pinyin: "bào bào" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }, { char: "给", pinyin: "gěi" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "温", pinyin: "wēn" }, { char: "暖", pinyin: "nuǎn" }, { char: "的", pinyin: "de" }, { char: "拥", pinyin: "yōng" }, { char: "抱", pinyin: "bào" }]
  },
  "豹": {
    pinyin: "bào",
    structure: "左右结构",
    composition: "豸 + 勺",
    compositionParts: [{ char: "豸", pinyin: "zhì" }, { char: "勺", pinyin: "sháo" }],
    memoryTip: "豸字加个勺，豹子猎豹。",
    words: [{ word: "豹子", pinyin: "bào zi" }, { word: "猎豹", pinyin: "liè bào" }],
    sentenceData: [{ char: "猎", pinyin: "liè" }, { char: "豹", pinyin: "bào" }, { char: "是", pinyin: "shì" }, { char: "世", pinyin: "shì" }, { char: "界", pinyin: "jiè" }, { char: "上", pinyin: "shàng" }, { char: "跑", pinyin: "pǎo" }, { char: "得", pinyin: "de" }, { char: "最", pinyin: "zuì" }, { char: "快", pinyin: "kuài" }, { char: "的", pinyin: "de" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }]
  },
  "暴": {
    pinyin: "bào",
    structure: "上下结构",
    composition: "日 + 共 + 水",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "共", pinyin: "gòng" }, { char: "水", pinyin: "shuǐ" }],
    memoryTip: "日字加共水，暴力暴雨。",
    words: [{ word: "暴力", pinyin: "bào lì" }, { word: "暴雨", pinyin: "bào yǔ" }],
    sentenceData: [{ char: "昨", pinyin: "zuó" }, { char: "天", pinyin: "tiān" }, { char: "下", pinyin: "xià" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "场", pinyin: "chǎng" }, { char: "暴", pinyin: "bào" }, { char: "雨", pinyin: "yǔ" }]
  },
  "爆": {
    pinyin: "bào",
    structure: "左右结构",
    composition: "火 + 暴",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "暴", pinyin: "bào" }],
    memoryTip: "火字加个暴，爆炸爆米花。",
    words: [{ word: "爆炸", pinyin: "bào zhà" }, { word: "爆米花", pinyin: "bào mǐ huā" }],
    sentenceData: [{ char: "电", pinyin: "diàn" }, { char: "影", pinyin: "yǐng" }, { char: "院", pinyin: "yuàn" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "好", pinyin: "hǎo" }, { char: "吃", pinyin: "chī" }, { char: "的", pinyin: "de" }, { char: "爆", pinyin: "bào" }, { char: "米", pinyin: "mǐ" }, { char: "花", pinyin: "huā" }]
  },
  "卑": {
    pinyin: "bēi",
    structure: "上下结构",
    composition: "白 + 十",
    compositionParts: [{ char: "白", pinyin: "bái" }, { char: "十", pinyin: "shí" }],
    memoryTip: "白字加个十，卑鄙卑微。",
    words: [{ word: "卑鄙", pinyin: "bēi bǐ" }, { word: "卑微", pinyin: "bēi wēi" }],
    sentenceData: [{ char: "欺", pinyin: "qī" }, { char: "负", pinyin: "fù" }, { char: "弱", pinyin: "ruò" }, { char: "小", pinyin: "xiǎo" }, { char: "是", pinyin: "shì" }, { char: "卑", pinyin: "bēi" }, { char: "鄙", pinyin: "bǐ" }, { char: "的", pinyin: "de" }, { char: "行", pinyin: "xíng" }, { char: "为", pinyin: "wéi" }]
  },
  "杯": {
    pinyin: "bēi",
    structure: "左右结构",
    composition: "木 + 不",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "不", pinyin: "bù" }],
    memoryTip: "木字加个不，杯子水杯。",
    words: [{ word: "杯子", pinyin: "bēi zi" }, { word: "水杯", pinyin: "shuǐ bēi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "杯", pinyin: "bēi" }, { char: "子", pinyin: "zi" }, { char: "喝", pinyin: "hē" }, { char: "水", pinyin: "shuǐ" }]
  },
  "悲": {
    pinyin: "bēi",
    structure: "上下结构",
    composition: "非 + 心",
    compositionParts: [{ char: "非", pinyin: "fēi" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "非字加个心，悲伤悲哀。",
    words: [{ word: "悲伤", pinyin: "bēi shāng" }, { word: "悲哀", pinyin: "bēi āi" }],
    sentenceData: [{ char: "听", pinyin: "tīng" }, { char: "到", pinyin: "dào" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "消", pinyin: "xiāo" }, { char: "息", pinyin: "xī" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "悲", pinyin: "bēi" }, { char: "伤", pinyin: "shāng" }]
  },
  "碑": {
    pinyin: "bēi",
    structure: "左右结构",
    composition: "石 + 卑",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "卑", pinyin: "bēi" }],
    memoryTip: "石字加个卑，石碑墓碑。",
    words: [{ word: "石碑", pinyin: "shí bēi" }, { word: "墓碑", pinyin: "mù bēi" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "块", pinyin: "kuài" }, { char: "古", pinyin: "gǔ" }, { char: "老", pinyin: "lǎo" }, { char: "的", pinyin: "de" }, { char: "石", pinyin: "shí" }, { char: "碑", pinyin: "bēi" }]
  },
  "北": {
    pinyin: "běi",
    structure: "左右结构",
    composition: "匕 + 匕",
    compositionParts: [{ char: "匕", pinyin: "bǐ" }, { char: "匕", pinyin: "bǐ" }],
    memoryTip: "两个匕字北，北方北京。",
    words: [{ word: "北方", pinyin: "běi fāng" }, { word: "北京", pinyin: "běi jīng" }],
    sentenceData: [{ char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "首", pinyin: "shǒu" }, { char: "都", pinyin: "dū" }]
  },
  "贝": {
    pinyin: "bèi",
    structure: "独体字",
    composition: "贝",
    compositionParts: [{ char: "贝", pinyin: "bèi" }],
    memoryTip: "贝壳形状贝，宝贝贝壳。",
    words: [{ word: "宝贝", pinyin: "bǎo bèi" }, { word: "贝壳", pinyin: "bèi ké" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "边", pinyin: "biān" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "漂", pinyin: "piào" }, { char: "亮", pinyin: "liàng" }, { char: "的", pinyin: "de" }, { char: "贝", pinyin: "bèi" }, { char: "壳", pinyin: "ké" }]
  },
  "备": {
    pinyin: "bèi",
    structure: "上下结构",
    composition: "夂 + 田",
    compositionParts: [{ char: "夂", pinyin: "zhǐ" }, { char: "田", pinyin: "tián" }],
    memoryTip: "夂字加个田，准备备用。",
    words: [{ word: "准备", pinyin: "zhǔn bèi" }, { word: "备用", pinyin: "bèi yòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "准", pinyin: "zhǔn" }, { char: "备", pinyin: "bèi" }, { char: "好", pinyin: "hǎo" }, { char: "了", pinyin: "le" }, { char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }]
  },
  "背": {
    pinyin: "bèi",
    structure: "上下结构",
    composition: "北 + 月",
    compositionParts: [{ char: "北", pinyin: "běi" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "北字加个月，后背背诵。",
    words: [{ word: "后背", pinyin: "hòu bèi" }, { word: "背诵", pinyin: "bèi sòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "要", pinyin: "yào" }, { char: "背", pinyin: "bèi" }, { char: "诵", pinyin: "sòng" }, { char: "这", pinyin: "zhè" }, { char: "首", pinyin: "shǒu" }, { char: "古", pinyin: "gǔ" }, { char: "诗", pinyin: "shī" }]
  },
  "倍": {
    pinyin: "bèi",
    structure: "左右结构",
    composition: "亻 + 音",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "音", pinyin: "yīn" }],
    memoryTip: "单人旁加音，倍数加倍。",
    words: [{ word: "倍数", pinyin: "bèi shù" }, { word: "加倍", pinyin: "jiā bèi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "成", pinyin: "chéng" }, { char: "绩", pinyin: "jì" }, { char: "比", pinyin: "bǐ" }, { char: "上", pinyin: "shàng" }, { char: "次", pinyin: "cì" }, { char: "提", pinyin: "tí" }, { char: "高", pinyin: "gāo" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "倍", pinyin: "bèi" }]
  },
  "被": {
    pinyin: "bèi",
    structure: "左右结构",
    composition: "衤 + 皮",
    compositionParts: [{ char: "衤", pinyin: "yī" }, { char: "皮", pinyin: "pí" }],
    memoryTip: "衣字旁加皮，被子被动。",
    words: [{ word: "被子", pinyin: "bèi zi" }, { word: "被动", pinyin: "bèi dòng" }],
    sentenceData: [{ char: "晚", pinyin: "wǎn" }, { char: "上", pinyin: "shàng" }, { char: "我", pinyin: "wǒ" }, { char: "盖", pinyin: "gài" }, { char: "着", pinyin: "zhe" }, { char: "暖", pinyin: "nuǎn" }, { char: "和", pinyin: "hé" }, { char: "的", pinyin: "de" }, { char: "被", pinyin: "bèi" }, { char: "子", pinyin: "zi" }]
  },
  "辈": {
    pinyin: "bèi",
    structure: "上下结构",
    composition: "非 + 车",
    compositionParts: [{ char: "非", pinyin: "fēi" }, { char: "车", pinyin: "chē" }],
    memoryTip: "非字加个车，辈分前辈。",
    words: [{ word: "辈分", pinyin: "bèi fèn" }, { word: "前辈", pinyin: "qián bèi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "尊", pinyin: "zūn" }, { char: "敬", pinyin: "jìng" }, { char: "长", pinyin: "zhǎng" }, { char: "辈", pinyin: "bèi" }]
  },
  "奔": {
    pinyin: "bēn",
    structure: "上下结构",
    composition: "大 + 卉",
    compositionParts: [{ char: "大", pinyin: "dà" }, { char: "卉", pinyin: "huì" }],
    memoryTip: "大字加个卉，奔跑奔波。",
    words: [{ word: "奔跑", pinyin: "bēn pǎo" }, { word: "奔波", pinyin: "bēn bō" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "草", pinyin: "cǎo" }, { char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "奔", pinyin: "bēn" }, { char: "跑", pinyin: "pǎo" }]
  },
  "本": {
    pinyin: "běn",
    structure: "独体字",
    composition: "木 + 一",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "一", pinyin: "yī" }],
    memoryTip: "木字加一横，根本基本。",
    words: [{ word: "根本", pinyin: "gēn běn" }, { word: "基本", pinyin: "jī běn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "本", pinyin: "běn" }, { char: "有", pinyin: "yǒu" }, { char: "趣", pinyin: "qù" }, { char: "的", pinyin: "de" }, { char: "书", pinyin: "shū" }]
  },
  "崩": {
    pinyin: "bēng",
    structure: "上下结构",
    composition: "山 + 朋",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "朋", pinyin: "péng" }],
    memoryTip: "山字加朋，崩塌崩溃。",
    words: [{ word: "崩塌", pinyin: "bēng tā" }, { word: "崩溃", pinyin: "bēng kuì" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "雨", pinyin: "yǔ" }, { char: "过", pinyin: "guò" }, { char: "后", pinyin: "hòu" }, { char: "山", pinyin: "shān" }, { char: "体", pinyin: "tǐ" }, { char: "崩", pinyin: "bēng" }, { char: "塌", pinyin: "tā" }]
  },
  "逼": {
    pinyin: "bī",
    structure: "半包围结构",
    composition: "辶 + 畐",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "走之底加畐，逼近逼迫。",
    words: [{ word: "逼近", pinyin: "bī jìn" }, { word: "逼迫", pinyin: "bī pò" }],
    sentenceData: [{ char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "逼", pinyin: "bī" }, { char: "近", pinyin: "jìn" }, { char: "了", pinyin: "le" }]
  },
  "鼻": {
    pinyin: "bí",
    structure: "上下结构",
    composition: "自 + 田 + 丌",
    compositionParts: [{ char: "自", pinyin: "zì" }, { char: "田", pinyin: "tián" }, { char: "丌", pinyin: "jī" }],
    memoryTip: "自字加田加丌，鼻子鼻梁。",
    words: [{ word: "鼻子", pinyin: "bí zi" }, { word: "鼻梁", pinyin: "bí liáng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "狗", pinyin: "gǒu" }, { char: "的", pinyin: "de" }, { char: "鼻", pinyin: "bí" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "灵", pinyin: "líng" }, { char: "敏", pinyin: "mǐn" }]
  },
  "比": {
    pinyin: "bǐ",
    structure: "左右结构",
    composition: "匕 + 匕",
    compositionParts: [{ char: "匕", pinyin: "bǐ" }, { char: "匕", pinyin: "bǐ" }],
    memoryTip: "两个匕字，比较比赛。",
    words: [{ word: "比较", pinyin: "bǐ jiào" }, { word: "比赛", pinyin: "bǐ sài" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "和", pinyin: "hé" }, { char: "你", pinyin: "nǐ" }, { char: "比", pinyin: "bǐ" }, { char: "一", pinyin: "yī" }, { char: "比", pinyin: "bǐ" }, { char: "谁", pinyin: "shuí" }, { char: "跑", pinyin: "pǎo" }, { char: "得", pinyin: "de" }, { char: "快", pinyin: "kuài" }]
  },
  "彼": {
    pinyin: "bǐ",
    structure: "左右结构",
    composition: "彳 + 皮",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "皮", pinyin: "pí" }],
    memoryTip: "双人旁加皮，彼此彼岸。",
    words: [{ word: "彼此", pinyin: "bǐ cǐ" }, { word: "彼岸", pinyin: "bǐ àn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "彼", pinyin: "bǐ" }, { char: "此", pinyin: "cǐ" }, { char: "之", pinyin: "zhī" }, { char: "间", pinyin: "jiān" }, { char: "要", pinyin: "yào" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "笔": {
    pinyin: "bǐ",
    structure: "上下结构",
    composition: "竹 + 毛",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "毛", pinyin: "máo" }],
    memoryTip: "竹字头加毛，铅笔毛笔。",
    words: [{ word: "铅笔", pinyin: "qiān bǐ" }, { word: "毛笔", pinyin: "máo bǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "铅", pinyin: "qiān" }, { char: "笔", pinyin: "bǐ" }, { char: "写", pinyin: "xiě" }, { char: "字", pinyin: "zì" }]
  },
  "币": {
    pinyin: "bì",
    structure: "上下结构",
    composition: "丿 + 巾",
    compositionParts: [{ char: "丿", pinyin: "piě" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "撇加巾字，货币钱币。",
    words: [{ word: "货币", pinyin: "huò bì" }, { word: "钱币", pinyin: "qián bì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "钱", pinyin: "qián" }, { char: "币", pinyin: "bì" }]
  },
  "必": {
    pinyin: "bì",
    structure: "独体字",
    composition: "心 + 丿",
    compositionParts: [{ char: "心", pinyin: "xīn" }, { char: "丿", pinyin: "piě" }],
    memoryTip: "心字加撇，必须必要。",
    words: [{ word: "必须", pinyin: "bì xū" }, { word: "必要", pinyin: "bì yào" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "必", pinyin: "bì" }, { char: "须", pinyin: "xū" }, { char: "按", pinyin: "àn" }, { char: "时", pinyin: "shí" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }]
  },
  "毕": {
    pinyin: "bì",
    structure: "上下结构",
    composition: "比 + 十",
    compositionParts: [{ char: "比", pinyin: "bǐ" }, { char: "十", pinyin: "shí" }],
    memoryTip: "比字加十，毕业完毕。",
    words: [{ word: "毕业", pinyin: "bì yè" }, { word: "完毕", pinyin: "wán bì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "哥", pinyin: "gē" }, { char: "哥", pinyin: "gē" }, { char: "今", pinyin: "jīn" }, { char: "年", pinyin: "nián" }, { char: "大", pinyin: "dà" }, { char: "学", pinyin: "xué" }, { char: "毕", pinyin: "bì" }, { char: "业", pinyin: "yè" }]
  },
  "闭": {
    pinyin: "bì",
    structure: "半包围结构",
    composition: "门 + 才",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "才", pinyin: "cái" }],
    memoryTip: "门字加才，关闭闭门。",
    words: [{ word: "关闭", pinyin: "guān bì" }, { word: "闭门", pinyin: "bì mén" }],
    sentenceData: [{ char: "晚", pinyin: "wǎn" }, { char: "上", pinyin: "shàng" }, { char: "要", pinyin: "yào" }, { char: "记", pinyin: "jì" }, { char: "得", pinyin: "de" }, { char: "关", pinyin: "guān" }, { char: "闭", pinyin: "bì" }, { char: "门", pinyin: "mén" }, { char: "窗", pinyin: "chuāng" }]
  },
  "辟": {
    pinyin: "pì",
    structure: "左右结构",
    composition: "尸 + 辛",
    compositionParts: [{ char: "尸", pinyin: "shī" }, { char: "辛", pinyin: "xīn" }],
    memoryTip: "尸字加辛，开辟辟谣。",
    words: [{ word: "开辟", pinyin: "kāi pì" }, { word: "辟谣", pinyin: "pì yáo" }],
    sentenceData: [{ char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }, { char: "开", pinyin: "kāi" }, { char: "辟", pinyin: "pì" }, { char: "了", pinyin: "le" }, { char: "新", pinyin: "xīn" }, { char: "的", pinyin: "de" }, { char: "领", pinyin: "lǐng" }, { char: "域", pinyin: "yù" }]
  },
  "碧": {
    pinyin: "bì",
    structure: "上下结构",
    composition: "王 + 白 + 石",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "白", pinyin: "bái" }, { char: "石", pinyin: "shí" }],
    memoryTip: "王白加石，碧绿碧玉。",
    words: [{ word: "碧绿", pinyin: "bì lǜ" }, { word: "碧玉", pinyin: "bì yù" }],
    sentenceData: [{ char: "湖", pinyin: "hú" }, { char: "水", pinyin: "shuǐ" }, { char: "碧", pinyin: "bì" }, { char: "绿", pinyin: "lǜ" }, { char: "碧", pinyin: "bì" }, { char: "绿", pinyin: "lǜ" }, { char: "的", pinyin: "de" }, { char: "像", pinyin: "xiàng" }, { char: "宝", pinyin: "bǎo" }, { char: "石", pinyin: "shí" }]
  },
  "敝": {
    pinyin: "bì",
    structure: "左右结构",
    composition: "巾 + 攵",
    compositionParts: [{ char: "巾", pinyin: "jīn" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "巾字加攵，敝帚自珍。",
    words: [{ word: "敝帚", pinyin: "bì zhǒu" }, { word: "敝处", pinyin: "bì chù" }],
    sentenceData: [{ char: "虽", pinyin: "suī" }, { char: "然", pinyin: "rán" }, { char: "是", pinyin: "shì" }, { char: "敝", pinyin: "bì" }, { char: "帚", pinyin: "zhǒu" }, { char: "也", pinyin: "yě" }, { char: "要", pinyin: "yào" }, { char: "珍", pinyin: "zhēn" }, { char: "惜", pinyin: "xī" }]
  },
  "壁": {
    pinyin: "bì",
    structure: "上下结构",
    composition: "辟 + 土",
    compositionParts: [{ char: "辟", pinyin: "pì" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "辟字加土，墙壁壁画。",
    words: [{ word: "墙壁", pinyin: "qiáng bì" }, { word: "壁画", pinyin: "bì huà" }],
    sentenceData: [{ char: "教", pinyin: "jiào" }, { char: "室", pinyin: "shì" }, { char: "的", pinyin: "de" }, { char: "墙", pinyin: "qiáng" }, { char: "壁", pinyin: "bì" }, { char: "上", pinyin: "shàng" }, { char: "贴", pinyin: "tiē" }, { char: "着", pinyin: "zhe" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "画", pinyin: "huà" }]
  },
  "避": {
    pinyin: "bì",
    structure: "半包围结构",
    composition: "辶 + 辟",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "辟", pinyin: "pì" }],
    memoryTip: "走之底加辟，避免躲避。",
    words: [{ word: "避免", pinyin: "bì miǎn" }, { word: "躲避", pinyin: "duǒ bì" }],
    sentenceData: [{ char: "下", pinyin: "xià" }, { char: "雨", pinyin: "yǔ" }, { char: "时", pinyin: "shí" }, { char: "要", pinyin: "yào" }, { char: "避", pinyin: "bì" }, { char: "免", pinyin: "miǎn" }, { char: "被", pinyin: "bèi" }, { char: "淋", pinyin: "lín" }, { char: "湿", pinyin: "shī" }]
  },
  "臂": {
    pinyin: "bì",
    structure: "上下结构",
    composition: "辟 + 月",
    compositionParts: [{ char: "辟", pinyin: "pì" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "辟字加月，手臂臂膀。",
    words: [{ word: "手臂", pinyin: "shǒu bì" }, { word: "臂膀", pinyin: "bì bǎng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "手", pinyin: "shǒu" }, { char: "臂", pinyin: "bì" }, { char: "受", pinyin: "shòu" }, { char: "伤", pinyin: "shāng" }, { char: "了", pinyin: "le" }]
  },
  "边": {
    pinyin: "biān",
    structure: "半包围结构",
    composition: "辶 + 力",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "力", pinyin: "lì" }],
    memoryTip: "走之底加力，旁边边远。",
    words: [{ word: "旁边", pinyin: "páng biān" }, { word: "边远", pinyin: "biān yuǎn" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "坐", pinyin: "zuò" }, { char: "在", pinyin: "zài" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "旁", pinyin: "páng" }, { char: "边", pinyin: "biān" }]
  },
  "编": {
    pinyin: "biān",
    structure: "左右结构",
    composition: "纟 + 扁",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "扁", pinyin: "biǎn" }],
    memoryTip: "绞丝旁加扁，编写编辑。",
    words: [{ word: "编写", pinyin: "biān xiě" }, { word: "编辑", pinyin: "biān jí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "编", pinyin: "biān" }, { char: "写", pinyin: "xiě" }, { char: "一", pinyin: "yī" }, { char: "篇", pinyin: "piān" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shì" }]
  },
  "骗": {
    pinyin: "piàn",
    structure: "左右结构",
    composition: "马 + 扁",
    compositionParts: [{ char: "马", pinyin: "mǎ" }, { char: "扁", pinyin: "biǎn" }],
    memoryTip: "马旁加个扁，骗子要小心。",
    words: [{ word: "骗子", pinyin: "piàn zi" }, { word: "欺骗", pinyin: "qī piàn" }],
    sentenceData: [{ char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "轻", pinyin: "qīng" }, { char: "易", pinyin: "yì" }, { char: "相", pinyin: "xiāng" }, { char: "信", pinyin: "xìn" }, { char: "骗", pinyin: "piàn" }, { char: "子", pinyin: "zi" }]
  },
  "鞭": {
    pinyin: "biān",
    structure: "左右结构",
    composition: "革 + 便",
    compositionParts: [{ char: "革", pinyin: "gé" }, { char: "便", pinyin: "biàn" }],
    memoryTip: "革字旁加便，鞭子抽打。",
    words: [{ word: "鞭子", pinyin: "biān zi" }, { word: "鞭炮", pinyin: "biān pào" }],
    sentenceData: [{ char: "过", pinyin: "guò" }, { char: "年", pinyin: "nián" }, { char: "时", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "放", pinyin: "fàng" }, { char: "鞭", pinyin: "biān" }, { char: "炮", pinyin: "pào" }]
  },
  "扁": {
    pinyin: "biǎn",
    structure: "半包围结构",
    composition: "户 + 册",
    compositionParts: [{ char: "户", pinyin: "hù" }, { char: "册", pinyin: "cè" }],
    memoryTip: "户字加个册，扁扁的形状。",
    words: [{ word: "扁担", pinyin: "biǎn dàn" }, { word: "扁豆", pinyin: "biǎn dòu" }],
    sentenceData: [{ char: "爷", pinyin: "yé" }, { char: "爷", pinyin: "yé" }, { char: "用", pinyin: "yòng" }, { char: "扁", pinyin: "biǎn" }, { char: "担", pinyin: "dàn" }, { char: "挑", pinyin: "tiāo" }, { char: "水", pinyin: "shuǐ" }]
  },
  "便": {
    pinyin: "biàn",
    structure: "左右结构",
    composition: "亻 + 更",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "更", pinyin: "gèng" }],
    memoryTip: "单人旁加更，方便快捷。",
    words: [{ word: "方便", pinyin: "fāng biàn" }, { word: "便宜", pinyin: "pián yi" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "个", pinyin: "gè" }, { char: "便", pinyin: "biàn" }, { char: "利", pinyin: "lì" }, { char: "店", pinyin: "diàn" }]
  },
  "变": {
    pinyin: "biàn",
    structure: "上下结构",
    composition: "亦 + 又",
    compositionParts: [{ char: "亦", pinyin: "yì" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "亦字加个又，变化多端。",
    words: [{ word: "变化", pinyin: "biàn huà" }, { word: "变成", pinyin: "biàn chéng" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "变", pinyin: "biàn" }, { char: "暖", pinyin: "nuǎn" }]
  },
  "遍": {
    pinyin: "biàn",
    structure: "半包围结构",
    composition: "辶 + 扁",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "扁", pinyin: "biǎn" }],
    memoryTip: "走之底加扁，遍及各处。",
    words: [{ word: "遍地", pinyin: "biàn dì" }, { word: "普遍", pinyin: "pǔ biàn" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }, { char: "鲜", pinyin: "xiān" }, { char: "花", pinyin: "huā" }, { char: "遍", pinyin: "biàn" }, { char: "地", pinyin: "dì" }, { char: "开", pinyin: "kāi" }]
  },
  "辨": {
    pinyin: "biàn",
    structure: "左中右结构",
    composition: "辛 + 刂 + 辛",
    compositionParts: [{ char: "辛", pinyin: "xīn" }, { char: "刂", pinyin: "dāo" }, { char: "辛", pinyin: "xīn" }],
    memoryTip: "两个辛加刀，辨别真伪。",
    words: [{ word: "辨别", pinyin: "biàn bié" }, { word: "分辨", pinyin: "fēn biàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "学", pinyin: "xué" }, { char: "会", pinyin: "huì" }, { char: "辨", pinyin: "biàn" }, { char: "别", pinyin: "bié" }, { char: "真", pinyin: "zhēn" }, { char: "假", pinyin: "jiǎ" }]
  },
  "辩": {
    pinyin: "biàn",
    structure: "左中右结构",
    composition: "辛 + 讠 + 辛",
    compositionParts: [{ char: "辛", pinyin: "xīn" }, { char: "讠", pinyin: "yán" }, { char: "辛", pinyin: "xīn" }],
    memoryTip: "两个辛加言，辩论争辩。",
    words: [{ word: "辩论", pinyin: "biàn lùn" }, { word: "争辩", pinyin: "zhēng biàn" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "进", pinyin: "jìn" }, { char: "行", pinyin: "xíng" }, { char: "激", pinyin: "jī" }, { char: "烈", pinyin: "liè" }, { char: "的", pinyin: "de" }, { char: "辩", pinyin: "biàn" }, { char: "论", pinyin: "lùn" }]
  },
  "标": {
    pinyin: "biāo",
    structure: "左右结构",
    composition: "木 + 示",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "示", pinyin: "shì" }],
    memoryTip: "木字旁加示，标志目标。",
    words: [{ word: "标志", pinyin: "biāo zhì" }, { word: "标准", pinyin: "biāo zhǔn" }],
    sentenceData: [{ char: "路", pinyin: "lù" }, { char: "边", pinyin: "biān" }, { char: "有", pinyin: "yǒu" }, { char: "个", pinyin: "gè" }, { char: "明", pinyin: "míng" }, { char: "显", pinyin: "xiǎn" }, { char: "的", pinyin: "de" }, { char: "标", pinyin: "biāo" }, { char: "志", pinyin: "zhì" }]
  },
  "表": {
    pinyin: "biǎo",
    structure: "上下结构",
    composition: "衣 + 毛",
    compositionParts: [{ char: "衣", pinyin: "yī" }, { char: "毛", pinyin: "máo" }],
    memoryTip: "衣字加个毛，表示表达。",
    words: [{ word: "表示", pinyin: "biǎo shì" }, { word: "手表", pinyin: "shǒu biǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "手", pinyin: "shǒu" }, { char: "表", pinyin: "biǎo" }, { char: "看", pinyin: "kàn" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }]
  },
  "别": {
    pinyin: "bié",
    structure: "左右结构",
    composition: "另 + 刂",
    compositionParts: [{ char: "另", pinyin: "lìng" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "另字加个刀，分别离别。",
    words: [{ word: "分别", pinyin: "fēn bié" }, { word: "别人", pinyin: "bié rén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "分", pinyin: "fēn" }, { char: "别", pinyin: "bié" }, { char: "了", pinyin: "le" }, { char: "请", pinyin: "qǐng" }, { char: "多", pinyin: "duō" }, { char: "保", pinyin: "bǎo" }, { char: "重", pinyin: "zhòng" }]
  },
  "宾": {
    pinyin: "bīn",
    structure: "上下结构",
    composition: "宀 + 兵",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "兵", pinyin: "bīng" }],
    memoryTip: "宝盖头加兵，宾客欢迎。",
    words: [{ word: "宾客", pinyin: "bīn kè" }, { word: "宾馆", pinyin: "bīn guǎn" }],
    sentenceData: [{ char: "宾", pinyin: "bīn" }, { char: "馆", pinyin: "guǎn" }, { char: "里", pinyin: "lǐ" }, { char: "住", pinyin: "zhù" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "远", pinyin: "yuǎn" }, { char: "方", pinyin: "fāng" }, { char: "来", pinyin: "lái" }, { char: "的", pinyin: "de" }, { char: "宾", pinyin: "bīn" }, { char: "客", pinyin: "kè" }]
  },
  "滨": {
    pinyin: "bīn",
    structure: "左右结构",
    composition: "氵 + 宾",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "宾", pinyin: "bīn" }],
    memoryTip: "三点水加宾，海滨水边。",
    words: [{ word: "海滨", pinyin: "hǎi bīn" }, { word: "湖滨", pinyin: "hú bīn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "海", pinyin: "hǎi" }, { char: "滨", pinyin: "bīn" }, { char: "散", pinyin: "sàn" }, { char: "步", pinyin: "bù" }, { char: "看", pinyin: "kàn" }, { char: "日", pinyin: "rì" }, { char: "落", pinyin: "luò" }]
  },
  "冰": {
    pinyin: "bīng",
    structure: "左右结构",
    composition: "冫 + 水",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "水", pinyin: "shuǐ" }],
    memoryTip: "两点水加水，冰块冰棍。",
    words: [{ word: "冰块", pinyin: "bīng kuài" }, { word: "冰箱", pinyin: "bīng xiāng" }],
    sentenceData: [{ char: "夏", pinyin: "xià" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "冰", pinyin: "bīng" }, { char: "棍", pinyin: "gùn" }]
  },
  "兵": {
    pinyin: "bīng",
    structure: "上下结构",
    composition: "丘 + 八",
    compositionParts: [{ char: "丘", pinyin: "qiū" }, { char: "八", pinyin: "bā" }],
    memoryTip: "丘字加个八，士兵打仗。",
    words: [{ word: "士兵", pinyin: "shì bīng" }, { word: "兵器", pinyin: "bīng qì" }],
    sentenceData: [{ char: "解", pinyin: "jiě" }, { char: "放", pinyin: "fàng" }, { char: "军", pinyin: "jūn" }, { char: "的", pinyin: "de" }, { char: "士", pinyin: "shì" }, { char: "兵", pinyin: "bīng" }, { char: "们", pinyin: "men" }, { char: "很", pinyin: "hěn" }, { char: "勇", pinyin: "yǒng" }, { char: "敢", pinyin: "gǎn" }]
  },
  "丙": {
    pinyin: "bǐng",
    structure: "独体字",
    composition: "丙",
    compositionParts: [{ char: "丙", pinyin: "bǐng" }],
    memoryTip: "甲乙丙丁，丙是第三。",
    words: [{ word: "丙等", pinyin: "bǐng děng" }, { word: "丙级", pinyin: "bǐng jí" }],
    sentenceData: [{ char: "在", pinyin: "zài" }, { char: "甲", pinyin: "jiǎ" }, { char: "乙", pinyin: "yǐ" }, { char: "丙", pinyin: "bǐng" }, { char: "丁", pinyin: "dīng" }, { char: "中", pinyin: "zhōng" }, { char: "丙", pinyin: "bǐng" }, { char: "是", pinyin: "shì" }, { char: "第", pinyin: "dì" }, { char: "三", pinyin: "sān" }, { char: "个", pinyin: "gè" }]
  },
  "柄": {
    pinyin: "bǐng",
    structure: "左右结构",
    composition: "木 + 丙",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "丙", pinyin: "bǐng" }],
    memoryTip: "木字旁加丙，手柄把手。",
    words: [{ word: "手柄", pinyin: "shǒu bǐng" }, { word: "刀柄", pinyin: "dāo bǐng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "握", pinyin: "wò" }, { char: "着", pinyin: "zhe" }, { char: "刀", pinyin: "dāo" }, { char: "柄", pinyin: "bǐng" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "地", pinyin: "de" }, { char: "切", pinyin: "qiē" }, { char: "菜", pinyin: "cài" }]
  },
  "饼": {
    pinyin: "bǐng",
    structure: "左右结构",
    composition: "饣 + 并",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "并", pinyin: "bìng" }],
    memoryTip: "食字旁加并，饼干月饼。",
    words: [{ word: "饼干", pinyin: "bǐng gān" }, { word: "月饼", pinyin: "yuè bǐng" }],
    sentenceData: [{ char: "中", pinyin: "zhōng" }, { char: "秋", pinyin: "qiū" }, { char: "节", pinyin: "jié" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "吃", pinyin: "chī" }, { char: "月", pinyin: "yuè" }, { char: "饼", pinyin: "bǐng" }, { char: "赏", pinyin: "shǎng" }, { char: "月", pinyin: "yuè" }, { char: "亮", pinyin: "liàng" }]
  },
  "并": {
    pinyin: "bìng",
    structure: "上下结构",
    composition: "丷 + 开",
    compositionParts: [{ char: "丷", pinyin: "bā" }, { char: "开", pinyin: "kāi" }],
    memoryTip: "两点加个开，合并一起。",
    words: [{ word: "合并", pinyin: "hé bìng" }, { word: "并且", pinyin: "bìng qiě" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "把", pinyin: "bǎ" }, { char: "两", pinyin: "liǎng" }, { char: "个", pinyin: "gè" }, { char: "班", pinyin: "bān" }, { char: "级", pinyin: "jí" }, { char: "合", pinyin: "hé" }, { char: "并", pinyin: "bìng" }, { char: "在", pinyin: "zài" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }]
  },
  "病": {
    pinyin: "bìng",
    structure: "半包围结构",
    composition: "疒 + 丙",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "丙", pinyin: "bǐng" }],
    memoryTip: "病字头加丙，生病看病。",
    words: [{ word: "生病", pinyin: "shēng bìng" }, { word: "病人", pinyin: "bìng rén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "昨", pinyin: "zuó" }, { char: "天", pinyin: "tiān" }, { char: "生", pinyin: "shēng" }, { char: "病", pinyin: "bìng" }, { char: "了", pinyin: "le" }, { char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "要", pinyin: "yào" }, { char: "去", pinyin: "qù" }, { char: "医", pinyin: "yī" }, { char: "院", pinyin: "yuàn" }]
  },
  "拨": {
    pinyin: "bō",
    structure: "左右结构",
    composition: "扌 + 发",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "发", pinyin: "fā" }],
    memoryTip: "提手旁加发，拨动拨号。",
    words: [{ word: "拨号", pinyin: "bō hào" }, { word: "拨动", pinyin: "bō dòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "手", pinyin: "shǒu" }, { char: "拨", pinyin: "bō" }, { char: "动", pinyin: "dòng" }, { char: "时", pinyin: "shí" }, { char: "钟", pinyin: "zhōng" }, { char: "的", pinyin: "de" }, { char: "指", pinyin: "zhǐ" }, { char: "针", pinyin: "zhēn" }]
  },
  "波": {
    pinyin: "bō",
    structure: "左右结构",
    composition: "氵 + 皮",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "皮", pinyin: "pí" }],
    memoryTip: "三点水加皮，波浪波纹。",
    words: [{ word: "波浪", pinyin: "bō làng" }, { word: "波纹", pinyin: "bō wén" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "面", pinyin: "miàn" }, { char: "上", pinyin: "shàng" }, { char: "波", pinyin: "bō" }, { char: "浪", pinyin: "làng" }, { char: "起", pinyin: "qǐ" }, { char: "伏", pinyin: "fú" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "壮", pinyin: "zhuàng" }, { char: "观", pinyin: "guān" }]
  },
  "玻": {
    pinyin: "bō",
    structure: "左右结构",
    composition: "王 + 皮",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "皮", pinyin: "pí" }],
    memoryTip: "王字旁加皮，玻璃透明。",
    words: [{ word: "玻璃", pinyin: "bō li" }, { word: "玻片", pinyin: "bō piàn" }],
    sentenceData: [{ char: "窗", pinyin: "chuāng" }, { char: "户", pinyin: "hù" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "玻", pinyin: "bō" }, { char: "璃", pinyin: "lí" }, { char: "很", pinyin: "hěn" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }, { char: "透", pinyin: "tòu" }, { char: "明", pinyin: "míng" }]
  },
  "剥": {
    pinyin: "bō",
    structure: "左右结构",
    composition: "录 + 刂",
    compositionParts: [{ char: "录", pinyin: "lù" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "录字加个刀，剥皮剥壳。",
    words: [{ word: "剥皮", pinyin: "bō pí" }, { word: "剥削", pinyin: "bō xuē" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "帮", pinyin: "bāng" }, { char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "剥", pinyin: "bō" }, { char: "橘", pinyin: "jú" }, { char: "子", pinyin: "zi" }, { char: "皮", pinyin: "pí" }, { char: "准", pinyin: "zhǔn" }, { char: "备", pinyin: "bèi" }, { char: "吃", pinyin: "chī" }, { char: "水", pinyin: "shuǐ" }, { char: "果", pinyin: "guǒ" }]
  },
  "播": {
    pinyin: "bō",
    structure: "左右结构",
    composition: "扌 + 番",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "番", pinyin: "fān" }],
    memoryTip: "提手旁加番，播种播放。",
    words: [{ word: "播种", pinyin: "bō zhǒng" }, { word: "播放", pinyin: "bō fàng" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bó" }, { char: "在", pinyin: "zài" }, { char: "田", pinyin: "tián" }, { char: "里", pinyin: "lǐ" }, { char: "播", pinyin: "bō" }, { char: "种", pinyin: "zhǒng" }, { char: "玉", pinyin: "yù" }, { char: "米", pinyin: "mǐ" }]
  },
  "脖": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "月 + 孛",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "孛", pinyin: "bèi" }],
    memoryTip: "月字旁加孛，脖子脖颈。",
    words: [{ word: "脖子", pinyin: "bó zi" }, { word: "脖颈", pinyin: "bó gěng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "脖", pinyin: "bó" }, { char: "子", pinyin: "zi" }, { char: "有", pinyin: "yǒu" }, { char: "点", pinyin: "diǎn" }, { char: "酸", pinyin: "suān" }, { char: "可", pinyin: "kě" }, { char: "能", pinyin: "néng" }, { char: "是", pinyin: "shì" }, { char: "睡", pinyin: "shuì" }, { char: "觉", pinyin: "jiào" }, { char: "姿", pinyin: "zī" }, { char: "势", pinyin: "shì" }, { char: "不", pinyin: "bù" }, { char: "好", pinyin: "hǎo" }]
  },
  "伯": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "亻 + 白",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "白", pinyin: "bái" }],
    memoryTip: "单人旁加白，伯伯伯父。",
    words: [{ word: "伯伯", pinyin: "bó bo" }, { word: "伯父", pinyin: "bó fù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bó" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "他", pinyin: "tā" }, { char: "种", pinyin: "zhòng" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "水", pinyin: "shuǐ" }, { char: "果", pinyin: "guǒ" }]
  },
  "驳": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "马 + 爻",
    compositionParts: [{ char: "马", pinyin: "mǎ" }, { char: "爻", pinyin: "yáo" }],
    memoryTip: "马字旁加爻，反驳驳斥。",
    words: [{ word: "反驳", pinyin: "fǎn bó" }, { word: "驳斥", pinyin: "bó chì" }],
    sentenceData: [{ char: "在", pinyin: "zài" }, { char: "辩", pinyin: "biàn" }, { char: "论", pinyin: "lùn" }, { char: "赛", pinyin: "sài" }, { char: "上", pinyin: "shàng" }, { char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "力", pinyin: "lì" }, { char: "地", pinyin: "de" }, { char: "反", pinyin: "fǎn" }, { char: "驳", pinyin: "bó" }, { char: "了", pinyin: "le" }, { char: "对", pinyin: "duì" }, { char: "方", pinyin: "fāng" }, { char: "的", pinyin: "de" }, { char: "观", pinyin: "guān" }, { char: "点", pinyin: "diǎn" }]
  },
  "泊": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "氵 + 白",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "白", pinyin: "bái" }],
    memoryTip: "三点水加白，停泊泊车。",
    words: [{ word: "停泊", pinyin: "tíng bó" }, { word: "泊车", pinyin: "bó chē" }],
    sentenceData: [{ char: "船", pinyin: "chuán" }, { char: "只", pinyin: "zhī" }, { char: "在", pinyin: "zài" }, { char: "港", pinyin: "gǎng" }, { char: "口", pinyin: "kǒu" }, { char: "停", pinyin: "tíng" }, { char: "泊", pinyin: "bó" }, { char: "等", pinyin: "děng" }, { char: "待", pinyin: "dài" }, { char: "装", pinyin: "zhuāng" }, { char: "卸", pinyin: "xiè" }, { char: "货", pinyin: "huò" }, { char: "物", pinyin: "wù" }]
  },
  "勃": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "力 + 孛",
    compositionParts: [{ char: "力", pinyin: "lì" }, { char: "孛", pinyin: "bèi" }],
    memoryTip: "力字加孛，勃勃生机。",
    words: [{ word: "勃勃", pinyin: "bó bó" }, { word: "勃发", pinyin: "bó fā" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "万", pinyin: "wàn" }, { char: "物", pinyin: "wù" }, { char: "勃", pinyin: "bó" }, { char: "勃", pinyin: "bó" }, { char: "生", pinyin: "shēng" }, { char: "机", pinyin: "jī" }, { char: "到", pinyin: "dào" }, { char: "处", pinyin: "chù" }, { char: "都", pinyin: "dōu" }, { char: "是", pinyin: "shì" }, { char: "绿", pinyin: "lǜ" }, { char: "色", pinyin: "sè" }]
  },
  "博": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "十 + 尃",
    compositionParts: [{ char: "十", pinyin: "shí" }, { char: "尃", pinyin: "fū" }],
    memoryTip: "十字加尃，博学博士。",
    words: [{ word: "博士", pinyin: "bó shì" }, { word: "博学", pinyin: "bó xué" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "理", pinyin: "lǐ" }, { char: "想", pinyin: "xiǎng" }, { char: "是", pinyin: "shì" }, { char: "长", pinyin: "zhǎng" }, { char: "大", pinyin: "dà" }, { char: "后", pinyin: "hòu" }, { char: "成", pinyin: "chéng" }, { char: "为", pinyin: "wéi" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }, { char: "博", pinyin: "bó" }, { char: "士", pinyin: "shì" }]
  },
  "搏": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "扌 + 尃",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "尃", pinyin: "fū" }],
    memoryTip: "提手旁加尃，搏斗拼搏。",
    words: [{ word: "搏斗", pinyin: "bó dòu" }, { word: "拼搏", pinyin: "pīn bó" }],
    sentenceData: [{ char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "员", pinyin: "yuán" }, { char: "在", pinyin: "zài" }, { char: "赛", pinyin: "sài" }, { char: "场", pinyin: "chǎng" }, { char: "上", pinyin: "shàng" }, { char: "拼", pinyin: "pīn" }, { char: "搏", pinyin: "bó" }, { char: "力", pinyin: "lì" }, { char: "争", pinyin: "zhēng" }, { char: "取", pinyin: "qǔ" }, { char: "胜", pinyin: "shèng" }, { char: "利", pinyin: "lì" }]
  },
  "膊": {
    pinyin: "bó",
    structure: "左右结构",
    composition: "月 + 尃",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "尃", pinyin: "fū" }],
    memoryTip: "月字旁加尃，胳膊臂膊。",
    words: [{ word: "胳膊", pinyin: "gē bo" }, { word: "臂膊", pinyin: "bì bó" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "胳", pinyin: "gē" }, { char: "膊", pinyin: "bo" }, { char: "有", pinyin: "yǒu" }, { char: "点", pinyin: "diǎn" }, { char: "疼", pinyin: "téng" }, { char: "可", pinyin: "kě" }, { char: "能", pinyin: "néng" }, { char: "是", pinyin: "shì" }, { char: "昨", pinyin: "zuó" }, { char: "天", pinyin: "tiān" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "太", pinyin: "tài" }, { char: "多", pinyin: "duō" }]
  },
  "薄": {
    pinyin: "bó",
    structure: "上下结构",
    composition: "艹 + 溥",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "溥", pinyin: "pǔ" }],
    memoryTip: "草字头加溥，薄片薄饼。",
    words: [{ word: "薄片", pinyin: "bó piàn" }, { word: "薄饼", pinyin: "bó bǐng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "做", pinyin: "zuò" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "薄", pinyin: "bó" }, { char: "饼", pinyin: "bǐng" }, { char: "味", pinyin: "wèi" }, { char: "道", pinyin: "dào" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "香", pinyin: "xiāng" }]
  },
  "卜": {
    pinyin: "bǔ",
    structure: "独体字",
    composition: "卜",
    compositionParts: [{ char: "卜", pinyin: "bǔ" }],
    memoryTip: "占卜问卦，卜卦预测。",
    words: [{ word: "占卜", pinyin: "zhān bǔ" }, { word: "卜卦", pinyin: "bǔ guà" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "人", pinyin: "rén" }, { char: "用", pinyin: "yòng" }, { char: "龟", pinyin: "guī" }, { char: "甲", pinyin: "jiǎ" }, { char: "进", pinyin: "jìn" }, { char: "行", pinyin: "xíng" }, { char: "占", pinyin: "zhān" }, { char: "卜", pinyin: "bǔ" }, { char: "预", pinyin: "yù" }, { char: "测", pinyin: "cè" }, { char: "未", pinyin: "wèi" }, { char: "来", pinyin: "lái" }]
  },
  "补": {
    pinyin: "bǔ",
    structure: "左右结构",
    composition: "衤 + 卜",
    compositionParts: [{ char: "衤", pinyin: "yī" }, { char: "卜", pinyin: "bǔ" }],
    memoryTip: "衣字旁加卜，补丁补充。",
    words: [{ word: "补充", pinyin: "bǔ chōng" }, { word: "补丁", pinyin: "bǔ dīng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }, { char: "破", pinyin: "pò" }, { char: "了", pinyin: "le" }, { char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "缝", pinyin: "fèng" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "补", pinyin: "bǔ" }, { char: "丁", pinyin: "dīng" }]
  },
  "捕": {
    pinyin: "bǔ",
    structure: "左右结构",
    composition: "扌 + 甫",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "甫", pinyin: "fǔ" }],
    memoryTip: "提手旁加甫，捕捉捕鱼。",
    words: [{ word: "捕捉", pinyin: "bǔ zhuō" }, { word: "捕鱼", pinyin: "bǔ yú" }],
    sentenceData: [{ char: "渔", pinyin: "yú" }, { char: "民", pinyin: "mín" }, { char: "在", pinyin: "zài" }, { char: "海", pinyin: "hǎi" }, { char: "上", pinyin: "shàng" }, { char: "捕", pinyin: "bǔ" }, { char: "鱼", pinyin: "yú" }, { char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }, { char: "很", pinyin: "hěn" }, { char: "辛", pinyin: "xīn" }, { char: "苦", pinyin: "kǔ" }]
  },
  "不": {
    pinyin: "bù",
    structure: "独体字",
    composition: "不",
    compositionParts: [{ char: "不", pinyin: "bù" }],
    memoryTip: "否定词不，表示否定。",
    words: [{ word: "不要", pinyin: "bù yào" }, { word: "不好", pinyin: "bù hǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "不", pinyin: "bù" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "辣", pinyin: "là" }, { char: "椒", pinyin: "jiāo" }, { char: "因", pinyin: "yīn" }, { char: "为", pinyin: "wèi" }, { char: "太", pinyin: "tài" }, { char: "辣", pinyin: "là" }, { char: "了", pinyin: "le" }]
  },
  "布": {
    pinyin: "bù",
    structure: "半包围结构",
    composition: "巾 + 丿",
    compositionParts: [{ char: "巾", pinyin: "jīn" }, { char: "丿", pinyin: "piě" }],
    memoryTip: "巾字加一撇，布匹布料。",
    words: [{ word: "布匹", pinyin: "bù pǐ" }, { word: "布料", pinyin: "bù liào" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "块", pinyin: "kuài" }, { char: "漂", pinyin: "piào" }, { char: "亮", pinyin: "liàng" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }, { char: "布", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "做", pinyin: "zuò" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "步": {
    pinyin: "bù",
    structure: "上下结构",
    composition: "止 + 少",
    compositionParts: [{ char: "止", pinyin: "zhǐ" }, { char: "少", pinyin: "shǎo" }],
    memoryTip: "止字加个少，步伐脚步。",
    words: [{ word: "步伐", pinyin: "bù fá" }, { word: "脚步", pinyin: "jiǎo bù" }],
    sentenceData: [{ char: "解", pinyin: "jiě" }, { char: "放", pinyin: "fàng" }, { char: "军", pinyin: "jūn" }, { char: "战", pinyin: "zhàn" }, { char: "士", pinyin: "shì" }, { char: "迈", pinyin: "mài" }, { char: "着", pinyin: "zhe" }, { char: "整", pinyin: "zhěng" }, { char: "齐", pinyin: "qí" }, { char: "的", pinyin: "de" }, { char: "步", pinyin: "bù" }, { char: "伐", pinyin: "fá" }, { char: "接", pinyin: "jiē" }, { char: "受", pinyin: "shòu" }, { char: "检", pinyin: "jiǎn" }, { char: "阅", pinyin: "yuè" }]
  },
  "部": {
    pinyin: "bù",
    structure: "左右结构",
    composition: "咅 + 阝",
    compositionParts: [{ char: "咅", pinyin: "pǒu" }, { char: "阝", pinyin: "fù" }],
    memoryTip: "咅字加耳朵，部分部门。",
    words: [{ word: "部分", pinyin: "bù fen" }, { word: "部门", pinyin: "bù mén" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "部", pinyin: "bù" }, { char: "门", pinyin: "mén" }, { char: "比", pinyin: "bǐ" }, { char: "如", pinyin: "rú" }, { char: "教", pinyin: "jiào" }, { char: "务", pinyin: "wù" }, { char: "处", pinyin: "chù" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "会", pinyin: "huì" }]
  },
  "擦": {
    pinyin: "cā",
    structure: "左右结构",
    composition: "扌 + 察",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "察", pinyin: "chá" }],
    memoryTip: "提手旁加察，擦洗擦拭。",
    words: [{ word: "擦洗", pinyin: "cā xǐ" }, { word: "擦拭", pinyin: "cā shì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "帮", pinyin: "bāng" }, { char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "擦", pinyin: "cā" }, { char: "桌", pinyin: "zhuō" }, { char: "子", pinyin: "zi" }, { char: "把", pinyin: "bǎ" }, { char: "桌", pinyin: "zhuō" }, { char: "面", pinyin: "miàn" }, { char: "擦", pinyin: "cā" }, { char: "得", pinyin: "de" }, { char: "干", pinyin: "gān" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }, { char: "净", pinyin: "jìng" }]
  },
  "猜": {
    pinyin: "cāi",
    structure: "左右结构",
    composition: "犭 + 青",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "青", pinyin: "qīng" }],
    memoryTip: "反犬旁加青，猜测猜谜。",
    words: [{ word: "猜测", pinyin: "cāi cè" }, { word: "猜谜", pinyin: "cāi mí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "玩", pinyin: "wán" }, { char: "猜", pinyin: "cāi" }, { char: "谜", pinyin: "mí" }, { char: "游", pinyin: "yóu" }, { char: "戏", pinyin: "xì" }, { char: "看", pinyin: "kàn" }, { char: "谁", pinyin: "shuí" }, { char: "能", pinyin: "néng" }, { char: "先", pinyin: "xiān" }, { char: "猜", pinyin: "cāi" }, { char: "出", pinyin: "chū" }, { char: "答", pinyin: "dá" }, { char: "案", pinyin: "àn" }]
  },
  "才": {
    pinyin: "cái",
    structure: "独体字",
    composition: "才",
    compositionParts: [{ char: "才", pinyin: "cái" }],
    memoryTip: "才能才干，表示能力。",
    words: [{ word: "才能", pinyin: "cái néng" }, { word: "才干", pinyin: "cái gàn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "很", pinyin: "hěn" }, { char: "有", pinyin: "yǒu" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "会", pinyin: "huì" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }, { char: "还", pinyin: "hái" }, { char: "会", pinyin: "huì" }, { char: "弹", pinyin: "tán" }, { char: "钢", pinyin: "gāng" }, { char: "琴", pinyin: "qín" }]
  },
  "材": {
    pinyin: "cái",
    structure: "左右结构",
    composition: "木 + 才",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "才", pinyin: "cái" }],
    memoryTip: "木字旁加才，材料木材。",
    words: [{ word: "材料", pinyin: "cái liào" }, { word: "木材", pinyin: "mù cái" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "叔", pinyin: "shū" }, { char: "叔", pinyin: "shū" }, { char: "用", pinyin: "yòng" }, { char: "木", pinyin: "mù" }, { char: "材", pinyin: "cái" }, { char: "建", pinyin: "jiàn" }, { char: "造", pinyin: "zào" }, { char: "房", pinyin: "fáng" }, { char: "屋", pinyin: "wū" }, { char: "木", pinyin: "mù" }, { char: "材", pinyin: "cái" }, { char: "是", pinyin: "shì" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }, { char: "的", pinyin: "de" }, { char: "建", pinyin: "jiàn" }, { char: "筑", pinyin: "zhù" }, { char: "材", pinyin: "cái" }, { char: "料", pinyin: "liào" }]
  },
  "财": {
    pinyin: "cái",
    structure: "左右结构",
    composition: "贝 + 才",
    compositionParts: [{ char: "贝", pinyin: "bèi" }, { char: "才", pinyin: "cái" }],
    memoryTip: "贝字旁加才，财产财富。",
    words: [{ word: "财产", pinyin: "cái chǎn" }, { word: "财富", pinyin: "cái fù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "珍", pinyin: "zhēn" }, { char: "惜", pinyin: "xī" }, { char: "公", pinyin: "gōng" }, { char: "共", pinyin: "gòng" }, { char: "财", pinyin: "cái" }, { char: "产", pinyin: "chǎn" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "随", pinyin: "suí" }, { char: "便", pinyin: "biàn" }, { char: "破", pinyin: "pò" }, { char: "坏", pinyin: "huài" }]
  },
  "裁": {
    pinyin: "cái",
    structure: "半包围结构",
    composition: "衣 + 戈",
    compositionParts: [{ char: "衣", pinyin: "yī" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "衣字加个戈，裁剪裁缝。",
    words: [{ word: "裁剪", pinyin: "cái jiǎn" }, { word: "裁缝", pinyin: "cái feng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "裁", pinyin: "cái" }, { char: "缝", pinyin: "feng" }, { char: "她", pinyin: "tā" }, { char: "会", pinyin: "huì" }, { char: "用", pinyin: "yòng" }, { char: "布", pinyin: "bù" }, { char: "料", pinyin: "liào" }, { char: "裁", pinyin: "cái" }, { char: "剪", pinyin: "jiǎn" }, { char: "漂", pinyin: "piào" }, { char: "亮", pinyin: "liàng" }, { char: "的", pinyin: "de" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "采": {
    pinyin: "cǎi",
    structure: "上下结构",
    composition: "爫 + 木",
    compositionParts: [{ char: "爫", pinyin: "zhǎo" }, { char: "木", pinyin: "mù" }],
    memoryTip: "爪字头加木，采摘采集。",
    words: [{ word: "采摘", pinyin: "cǎi zhāi" }, { word: "采集", pinyin: "cǎi jí" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "山", pinyin: "shān" }, { char: "上", pinyin: "shàng" }, { char: "采", pinyin: "cǎi" }, { char: "野", pinyin: "yě" }, { char: "花", pinyin: "huā" }, { char: "山", pinyin: "shān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "野", pinyin: "yě" }, { char: "花", pinyin: "huā" }, { char: "很", pinyin: "hěn" }, { char: "漂", pinyin: "piào" }, { char: "亮", pinyin: "liàng" }]
  },
  "彩": {
    pinyin: "cǎi",
    structure: "左右结构",
    composition: "采 + 彡",
    compositionParts: [{ char: "采", pinyin: "cǎi" }, { char: "彡", pinyin: "shān" }],
    memoryTip: "采字加三撇，彩色彩虹。",
    words: [{ word: "彩色", pinyin: "cǎi sè" }, { word: "彩虹", pinyin: "cǎi hóng" }],
    sentenceData: [{ char: "雨", pinyin: "yǔ" }, { char: "后", pinyin: "hòu" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "出", pinyin: "chū" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "彩", pinyin: "cǎi" }, { char: "虹", pinyin: "hóng" }, { char: "彩", pinyin: "cǎi" }, { char: "虹", pinyin: "hóng" }, { char: "有", pinyin: "yǒu" }, { char: "七", pinyin: "qī" }, { char: "种", pinyin: "zhǒng" }, { char: "颜", pinyin: "yán" }, { char: "色", pinyin: "sè" }]
  },
  "踩": {
    pinyin: "cǎi",
    structure: "左右结构",
    composition: "足 + 采",
    compositionParts: [{ char: "足", pinyin: "zú" }, { char: "采", pinyin: "cǎi" }],
    memoryTip: "足字旁加采，踩踏踩水。",
    words: [{ word: "踩踏", pinyin: "cǎi tà" }, { word: "踩水", pinyin: "cǎi shuǐ" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "在", pinyin: "zài" }, { char: "草", pinyin: "cǎo" }, { char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "踩", pinyin: "cǎi" }, { char: "水", pinyin: "shuǐ" }, { char: "坑", pinyin: "kēng" }, { char: "玩", pinyin: "wán" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "开", pinyin: "kāi" }, { char: "心", pinyin: "xīn" }, { char: "但", pinyin: "dàn" }, { char: "要", pinyin: "yào" }, { char: "注", pinyin: "zhù" }, { char: "意", pinyin: "yì" }, { char: "安", pinyin: "ān" }, { char: "全", pinyin: "quán" }]
  },
  "菜": {
    pinyin: "cài",
    structure: "上下结构",
    composition: "艹 + 采",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "采", pinyin: "cǎi" }],
    memoryTip: "草字头加采，蔬菜青菜。",
    words: [{ word: "蔬菜", pinyin: "shū cài" }, { word: "青菜", pinyin: "qīng cài" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "新", pinyin: "xīn" }, { char: "鲜", pinyin: "xiān" }, { char: "的", pinyin: "de" }, { char: "蔬", pinyin: "shū" }, { char: "菜", pinyin: "cài" }, { char: "要", pinyin: "yào" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "做", pinyin: "zuò" }, { char: "晚", pinyin: "wǎn" }, { char: "饭", pinyin: "fàn" }]
  },
  "蔡": {
    pinyin: "cài",
    structure: "上下结构",
    composition: "艹 + 祭",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "祭", pinyin: "jì" }],
    memoryTip: "草字头加祭，姓氏蔡。",
    words: [{ word: "蔡姓", pinyin: "cài xìng" }, { word: "蔡伦", pinyin: "cài lún" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "姓", pinyin: "xìng" }, { char: "蔡", pinyin: "cài" }, { char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "很", pinyin: "hěn" }, { char: "友", pinyin: "yǒu" }, { char: "善", pinyin: "shàn" }, { char: "的", pinyin: "de" }, { char: "人", pinyin: "rén" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "经", pinyin: "jīng" }, { char: "常", pinyin: "cháng" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "玩", pinyin: "wán" }]
  },
  "参": {
    pinyin: "cān",
    structure: "上下结构",
    composition: "厶 + 大 + 彡",
    compositionParts: [{ char: "厶", pinyin: "sī" }, { char: "大", pinyin: "dà" }, { char: "彡", pinyin: "shān" }],
    memoryTip: "私加大加三撇，参加参考。",
    words: [{ word: "参加", pinyin: "cān jiā" }, { word: "参考", pinyin: "cān kǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "要", pinyin: "yào" }, { char: "参", pinyin: "cān" }, { char: "加", pinyin: "jiā" }, { char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "的", pinyin: "de" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "会", pinyin: "huì" }, { char: "我", pinyin: "wǒ" }, { char: "报", pinyin: "bào" }, { char: "名", pinyin: "míng" }, { char: "了", pinyin: "le" }, { char: "跑", pinyin: "pǎo" }, { char: "步", pinyin: "bù" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }]
  },
  "餐": {
    pinyin: "cān",
    structure: "上下结构",
    composition: "歺 + 又 + 食",
    compositionParts: [{ char: "歺", pinyin: "è" }, { char: "又", pinyin: "yòu" }, { char: "食", pinyin: "shí" }],
    memoryTip: "歺加又加食，餐厅用餐。",
    words: [{ word: "餐厅", pinyin: "cān tīng" }, { word: "用餐", pinyin: "yòng cān" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "全", pinyin: "quán" }, { char: "家", pinyin: "jiā" }, { char: "去", pinyin: "qù" }, { char: "餐", pinyin: "cān" }, { char: "厅", pinyin: "tīng" }, { char: "吃", pinyin: "chī" }, { char: "晚", pinyin: "wǎn" }, { char: "饭", pinyin: "fàn" }, { char: "餐", pinyin: "cān" }, { char: "厅", pinyin: "tīng" }, { char: "的", pinyin: "de" }, { char: "菜", pinyin: "cài" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "吃", pinyin: "chī" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }]
  },
  "蚕": {
    pinyin: "cán",
    structure: "上下结构",
    composition: "天 + 虫",
    compositionParts: [{ char: "天", pinyin: "tiān" }, { char: "虫", pinyin: "chóng" }],
    memoryTip: "天字加个虫，蚕宝宝吐丝。",
    words: [{ word: "蚕宝宝", pinyin: "cán bǎo bao" }, { word: "蚕丝", pinyin: "cán sī" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "蚕", pinyin: "cán" }, { char: "宝", pinyin: "bǎo" }, { char: "宝", pinyin: "bǎo" }, { char: "开", pinyin: "kāi" }, { char: "始", pinyin: "shǐ" }, { char: "吐", pinyin: "tǔ" }, { char: "丝", pinyin: "sī" }, { char: "蚕", pinyin: "cán" }, { char: "丝", pinyin: "sī" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "用", pinyin: "yòng" }, { char: "来", pinyin: "lái" }, { char: "做", pinyin: "zuò" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "残": {
    pinyin: "cán",
    structure: "左右结构",
    composition: "歹 + 戋",
    compositionParts: [{ char: "歹", pinyin: "dǎi" }, { char: "戋", pinyin: "jiān" }],
    memoryTip: "歹字加戋，残疾残缺。",
    words: [{ word: "残疾", pinyin: "cán jí" }, { word: "残缺", pinyin: "cán quē" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "关", pinyin: "guān" }, { char: "心", pinyin: "xīn" }, { char: "残", pinyin: "cán" }, { char: "疾", pinyin: "jí" }, { char: "人", pinyin: "rén" }, { char: "士", pinyin: "shì" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }, { char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "克", pinyin: "kè" }, { char: "服", pinyin: "fú" }, { char: "困", pinyin: "kùn" }, { char: "难", pinyin: "nán" }]
  },
  "惨": {
    pinyin: "cǎn",
    structure: "左右结构",
    composition: "忄 + 参",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "参", pinyin: "cān" }],
    memoryTip: "竖心旁加参，悲惨惨痛。",
    words: [{ word: "悲惨", pinyin: "bēi cǎn" }, { word: "惨痛", pinyin: "cǎn tòng" }],
    sentenceData: [{ char: "地", pinyin: "dì" }, { char: "震", pinyin: "zhèn" }, { char: "给", pinyin: "gěi" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "带", pinyin: "dài" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }, { char: "惨", pinyin: "cǎn" }, { char: "痛", pinyin: "tòng" }, { char: "的", pinyin: "de" }, { char: "经", pinyin: "jīng" }, { char: "历", pinyin: "lì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "灿": {
    pinyin: "càn",
    structure: "左右结构",
    composition: "火 + 山",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "山", pinyin: "shān" }],
    memoryTip: "火字旁加山，灿烂辉煌。",
    words: [{ word: "灿烂", pinyin: "càn làn" }, { word: "辉煌", pinyin: "huī huáng" }],
    sentenceData: [{ char: "国", pinyin: "guó" }, { char: "庆", pinyin: "qìng" }, { char: "节", pinyin: "jié" }, { char: "的", pinyin: "de" }, { char: "烟", pinyin: "yān" }, { char: "花", pinyin: "huā" }, { char: "在", pinyin: "zài" }, { char: "夜", pinyin: "yè" }, { char: "空", pinyin: "kōng" }, { char: "中", pinyin: "zhōng" }, { char: "绽", pinyin: "zhàn" }, { char: "放", pinyin: "fàng" }, { char: "灿", pinyin: "càn" }, { char: "烂", pinyin: "làn" }, { char: "夺", pinyin: "duó" }, { char: "目", pinyin: "mù" }]
  },
  "仓": {
    pinyin: "cāng",
    structure: "上下结构",
    composition: "人 + 巳",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "巳", pinyin: "sì" }],
    memoryTip: "人字加巳，仓库仓促。",
    words: [{ word: "仓库", pinyin: "cāng kù" }, { word: "仓促", pinyin: "cāng cù" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "厂", pinyin: "chǎng" }, { char: "的", pinyin: "de" }, { char: "仓", pinyin: "cāng" }, { char: "库", pinyin: "kù" }, { char: "里", pinyin: "lǐ" }, { char: "存", pinyin: "cún" }, { char: "放", pinyin: "fàng" }, { char: "着", pinyin: "zhe" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "货", pinyin: "huò" }, { char: "物", pinyin: "wù" }, { char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "叔", pinyin: "shū" }, { char: "叔", pinyin: "shū" }, { char: "在", pinyin: "zài" }, { char: "搬", pinyin: "bān" }, { char: "运", pinyin: "yùn" }]
  },
  "苍": {
    pinyin: "cāng",
    structure: "上下结构",
    composition: "艹 + 仓",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "仓", pinyin: "cāng" }],
    memoryTip: "草字头加仓，苍天苍白。",
    words: [{ word: "苍天", pinyin: "cāng tiān" }, { word: "苍白", pinyin: "cāng bái" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "生", pinyin: "shēng" }, { char: "病", pinyin: "bìng" }, { char: "后", pinyin: "hòu" }, { char: "脸", pinyin: "liǎn" }, { char: "色", pinyin: "sè" }, { char: "苍", pinyin: "cāng" }, { char: "白", pinyin: "bái" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "好", pinyin: "hǎo" }, { char: "好", pinyin: "hǎo" }, { char: "休", pinyin: "xiū" }, { char: "息", pinyin: "xī" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "多", pinyin: "duō" }, { char: "关", pinyin: "guān" }, { char: "心", pinyin: "xīn" }, { char: "他", pinyin: "tā" }]
  },
  "舱": {
    pinyin: "cāng",
    structure: "左右结构",
    composition: "舟 + 仓",
    compositionParts: [{ char: "舟", pinyin: "zhōu" }, { char: "仓", pinyin: "cāng" }],
    memoryTip: "舟字旁加仓，船舱机舱。",
    words: [{ word: "船舱", pinyin: "chuán cāng" }, { word: "机舱", pinyin: "jī cāng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "坐", pinyin: "zuò" }, { char: "飞", pinyin: "fēi" }, { char: "机", pinyin: "jī" }, { char: "旅", pinyin: "lǚ" }, { char: "行", pinyin: "xíng" }, { char: "机", pinyin: "jī" }, { char: "舱", pinyin: "cāng" }, { char: "里", pinyin: "lǐ" }, { char: "很", pinyin: "hěn" }, { char: "舒", pinyin: "shū" }, { char: "服", pinyin: "fú" }, { char: "空", pinyin: "kōng" }, { char: "姐", pinyin: "jiě" }, { char: "很", pinyin: "hěn" }, { char: "热", pinyin: "rè" }, { char: "情", pinyin: "qíng" }]
  },
  "藏": {
    pinyin: "cáng",
    structure: "上下结构",
    composition: "艹 + 臧",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "臧", pinyin: "zāng" }],
    memoryTip: "草字头加臧，藏起来收藏。",
    words: [{ word: "藏起来", pinyin: "cáng qǐ lái" }, { word: "收藏", pinyin: "shōu cáng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "把", pinyin: "bǎ" }, { char: "宝", pinyin: "bǎo" }, { char: "贝", pinyin: "bèi" }, { char: "藏", pinyin: "cáng" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }, { char: "和", pinyin: "hé" }, { char: "小", pinyin: "xiǎo" }, { char: "伙", pinyin: "huǒ" }, { char: "伴", pinyin: "bàn" }, { char: "玩", pinyin: "wán" }, { char: "捉", pinyin: "zhuō" }, { char: "迷", pinyin: "mí" }, { char: "藏", pinyin: "cáng" }]
  },
  "操": {
    pinyin: "cāo",
    structure: "左右结构",
    composition: "扌 + 喿",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "喿", pinyin: "zào" }],
    memoryTip: "提手旁加喿，操练做操。",
    words: [{ word: "操练", pinyin: "cāo liàn" }, { word: "做操", pinyin: "zuò cāo" }],
    sentenceData: [{ char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "早", pinyin: "zǎo" }, { char: "上", pinyin: "shàng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "都", pinyin: "dōu" }, { char: "要", pinyin: "yào" }, { char: "做", pinyin: "zuò" }, { char: "早", pinyin: "zǎo" }, { char: "操", pinyin: "cāo" }, { char: "锻", pinyin: "duàn" }, { char: "炼", pinyin: "liàn" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "做", pinyin: "zuò" }, { char: "操", pinyin: "cāo" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "更", pinyin: "gèng" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }]
  },
  "曹": {
    pinyin: "cáo",
    structure: "上下结构",
    composition: "一 + 口 + 曰",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "口", pinyin: "kǒu" }, { char: "曰", pinyin: "yuē" }],
    memoryTip: "一加口加曰，姓氏曹操。",
    words: [{ word: "曹操", pinyin: "cáo cāo" }, { word: "曹姓", pinyin: "cáo xìng" }],
    sentenceData: [{ char: "曹", pinyin: "cáo" }, { char: "操", pinyin: "cāo" }, { char: "是", pinyin: "shì" }, { char: "三", pinyin: "sān" }, { char: "国", pinyin: "guó" }, { char: "时", pinyin: "shí" }, { char: "期", pinyin: "qī" }, { char: "著", pinyin: "zhù" }, { char: "名", pinyin: "míng" }, { char: "的", pinyin: "de" }, { char: "军", pinyin: "jūn" }, { char: "事", pinyin: "shì" }, { char: "家", pinyin: "jiā" }, { char: "和", pinyin: "hé" }, { char: "政", pinyin: "zhèng" }, { char: "治", pinyin: "zhì" }, { char: "家", pinyin: "jiā" }, { char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shì" }, { char: "流", pinyin: "liú" }, { char: "传", pinyin: "chuán" }, { char: "至", pinyin: "zhì" }, { char: "今", pinyin: "jīn" }]
  },
  "槽": {
    pinyin: "cáo",
    structure: "左右结构",
    composition: "木 + 曹",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "曹", pinyin: "cáo" }],
    memoryTip: "木字旁加曹，水槽食槽。",
    words: [{ word: "水槽", pinyin: "shuǐ cáo" }, { word: "食槽", pinyin: "shí cáo" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bó" }, { char: "用", pinyin: "yòng" }, { char: "木", pinyin: "mù" }, { char: "头", pinyin: "tou" }, { char: "做", pinyin: "zuò" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "大", pinyin: "dà" }, { char: "水", pinyin: "shuǐ" }, { char: "槽", pinyin: "cáo" }, { char: "给", pinyin: "gěi" }, { char: "牲", pinyin: "shēng" }, { char: "口", pinyin: "kǒu" }, { char: "喝", pinyin: "hē" }, { char: "水", pinyin: "shuǐ" }]
  },
  "草": {
    pinyin: "cǎo",
    structure: "上下结构",
    composition: "艹 + 早",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "早", pinyin: "zǎo" }],
    memoryTip: "草字头加早，小草草地。",
    words: [{ word: "小草", pinyin: "xiǎo cǎo" }, { word: "草地", pinyin: "cǎo dì" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "草", pinyin: "cǎo" }, { char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "长", pinyin: "zhǎng" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "绿", pinyin: "lǜ" }, { char: "油", pinyin: "yóu" }, { char: "油", pinyin: "yóu" }, { char: "的", pinyin: "de" }, { char: "小", pinyin: "xiǎo" }, { char: "草", pinyin: "cǎo" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "在", pinyin: "zài" }, { char: "草", pinyin: "cǎo" }, { char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "玩", pinyin: "wán" }, { char: "耍", pinyin: "shuǎ" }]
  },
  "册": {
    pinyin: "cè",
    structure: "独体字",
    composition: "册",
    compositionParts: [{ char: "册", pinyin: "cè" }],
    memoryTip: "册字像竹简，册子画册。",
    words: [{ word: "册子", pinyin: "cè zi" }, { word: "画册", pinyin: "huà cè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "本", pinyin: "běn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "画", pinyin: "huà" }, { char: "册", pinyin: "cè" }, { char: "里", pinyin: "lǐ" }, { char: "面", pinyin: "miàn" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "可", pinyin: "kě" }, { char: "爱", pinyin: "ài" }, { char: "的", pinyin: "de" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }, { char: "图", pinyin: "tú" }, { char: "片", pinyin: "piàn" }]
  },
  "侧": {
    pinyin: "cè",
    structure: "左右结构",
    composition: "亻 + 则",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "则", pinyin: "zé" }],
    memoryTip: "单人旁加则，侧面侧身。",
    words: [{ word: "侧面", pinyin: "cè miàn" }, { word: "侧身", pinyin: "cè shēn" }],
    sentenceData: [{ char: "从", pinyin: "cóng" }, { char: "侧", pinyin: "cè" }, { char: "面", pinyin: "miàn" }, { char: "看", pinyin: "kàn" }, { char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "更", pinyin: "gèng" }, { char: "加", pinyin: "jiā" }, { char: "雄", pinyin: "xióng" }, { char: "伟", pinyin: "wěi" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "从", pinyin: "cóng" }, { char: "不", pinyin: "bù" }, { char: "同", pinyin: "tóng" }, { char: "角", pinyin: "jiǎo" }, { char: "度", pinyin: "dù" }, { char: "观", pinyin: "guān" }, { char: "察", pinyin: "chá" }, { char: "事", pinyin: "shì" }, { char: "物", pinyin: "wù" }]
  },
  "测": {
    pinyin: "cè",
    structure: "左右结构",
    composition: "氵 + 则",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "则", pinyin: "zé" }],
    memoryTip: "三点水加则，测量测试。",
    words: [{ word: "测量", pinyin: "cè liáng" }, { word: "测试", pinyin: "cè shì" }],
    sentenceData: [{ char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "课", pinyin: "kè" }, { char: "上", pinyin: "shàng" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "教", pinyin: "jiào" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "用", pinyin: "yòng" }, { char: "尺", pinyin: "chǐ" }, { char: "子", pinyin: "zi" }, { char: "测", pinyin: "cè" }, { char: "量", pinyin: "liáng" }, { char: "物", pinyin: "wù" }, { char: "体", pinyin: "tǐ" }, { char: "的", pinyin: "de" }, { char: "长", pinyin: "cháng" }, { char: "度", pinyin: "dù" }, { char: "和", pinyin: "hé" }, { char: "宽", pinyin: "kuān" }, { char: "度", pinyin: "dù" }]
  },
  "策": {
    pinyin: "cè",
    structure: "上下结构",
    composition: "竹 + 朿",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "朿", pinyin: "cì" }],
    memoryTip: "竹字头加朿，策略策划。",
    words: [{ word: "策略", pinyin: "cè lüè" }, { word: "策划", pinyin: "cè huà" }],
    sentenceData: [{ char: "在", pinyin: "zài" }, { char: "下", pinyin: "xià" }, { char: "棋", pinyin: "qí" }, { char: "时", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "制", pinyin: "zhì" }, { char: "定", pinyin: "dìng" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "策", pinyin: "cè" }, { char: "略", pinyin: "lüè" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "赢", pinyin: "yíng" }, { char: "得", pinyin: "de" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }]
  },
  "层": {
    pinyin: "céng",
    structure: "半包围结构",
    composition: "尸 + 云",
    compositionParts: [{ char: "尸", pinyin: "shī" }, { char: "云", pinyin: "yún" }],
    memoryTip: "尸字头加云，层次楼层。",
    words: [{ word: "层次", pinyin: "céng cì" }, { word: "楼层", pinyin: "lóu céng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "家", pinyin: "jiā" }, { char: "住", pinyin: "zhù" }, { char: "在", pinyin: "zài" }, { char: "一", pinyin: "yī" }, { char: "栋", pinyin: "dòng" }, { char: "高", pinyin: "gāo" }, { char: "楼", pinyin: "lóu" }, { char: "的", pinyin: "de" }, { char: "第", pinyin: "dì" }, { char: "五", pinyin: "wǔ" }, { char: "层", pinyin: "céng" }, { char: "从", pinyin: "cóng" }, { char: "窗", pinyin: "chuāng" }, { char: "户", pinyin: "hù" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "看", pinyin: "kàn" }, { char: "到", pinyin: "dào" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "风", pinyin: "fēng" }, { char: "景", pinyin: "jǐng" }]
  },
  "叉": {
    pinyin: "chā",
    structure: "独体字",
    composition: "叉",
    compositionParts: [{ char: "叉", pinyin: "chā" }],
    memoryTip: "叉字像叉子，叉子交叉。",
    words: [{ word: "叉子", pinyin: "chā zi" }, { word: "交叉", pinyin: "jiāo chā" }],
    sentenceData: [{ char: "吃", pinyin: "chī" }, { char: "西", pinyin: "xī" }, { char: "餐", pinyin: "cān" }, { char: "时", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "用", pinyin: "yòng" }, { char: "叉", pinyin: "chā" }, { char: "子", pinyin: "zi" }, { char: "和", pinyin: "hé" }, { char: "刀", pinyin: "dāo" }, { char: "子", pinyin: "zi" }, { char: "两", pinyin: "liǎng" }, { char: "种", pinyin: "zhǒng" }, { char: "餐", pinyin: "cān" }, { char: "具", pinyin: "jù" }, { char: "都", pinyin: "dōu" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "插": {
    pinyin: "chā",
    structure: "左右结构",
    composition: "扌 + 臿",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "臿", pinyin: "chā" }],
    memoryTip: "提手旁加臿，插入插花。",
    words: [{ word: "插入", pinyin: "chā rù" }, { word: "插花", pinyin: "chā huā" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "插", pinyin: "chā" }, { char: "花", pinyin: "huā" }, { char: "把", pinyin: "bǎ" }, { char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "装", pinyin: "zhuāng" }, { char: "扮", pinyin: "bàn" }, { char: "得", pinyin: "de" }, { char: "更", pinyin: "gèng" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "查": {
    pinyin: "chá",
    structure: "上下结构",
    composition: "木 + 旦",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "旦", pinyin: "dàn" }],
    memoryTip: "木字加个旦，检查查找。",
    words: [{ word: "检查", pinyin: "jiǎn chá" }, { word: "查找", pinyin: "chá zhǎo" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "检", pinyin: "jiǎn" }, { char: "查", pinyin: "chá" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }, { char: "看", pinyin: "kàn" }, { char: "有", pinyin: "yǒu" }, { char: "没", pinyin: "méi" }, { char: "有", pinyin: "yǒu" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }, { char: "认", pinyin: "rèn" }, { char: "真", pinyin: "zhēn" }, { char: "检", pinyin: "jiǎn" }, { char: "查", pinyin: "chá" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "得", pinyin: "de" }, { char: "高", pinyin: "gāo" }, { char: "分", pinyin: "fēn" }]
  },
  "茶": {
    pinyin: "chá",
    structure: "上下结构",
    composition: "艹 + 人 + 木",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "人", pinyin: "rén" }, { char: "木", pinyin: "mù" }],
    memoryTip: "草字头加人木，茶叶喝茶。",
    words: [{ word: "茶叶", pinyin: "chá yè" }, { word: "喝茶", pinyin: "hē chá" }],
    sentenceData: [{ char: "爷", pinyin: "yé" }, { char: "爷", pinyin: "yé" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "喝", pinyin: "hē" }, { char: "茶", pinyin: "chá" }, { char: "他", pinyin: "tā" }, { char: "说", pinyin: "shuō" }, { char: "茶", pinyin: "chá" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "提", pinyin: "tí" }, { char: "神", pinyin: "shén" }, { char: "还", pinyin: "hái" }, { char: "有", pinyin: "yǒu" }, { char: "益", pinyin: "yì" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }, { char: "我", pinyin: "wǒ" }, { char: "也", pinyin: "yě" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "喝", pinyin: "hē" }, { char: "果", pinyin: "guǒ" }, { char: "茶", pinyin: "chá" }]
  },
  "察": {
    pinyin: "chá",
    structure: "上下结构",
    composition: "宀 + 祭",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "祭", pinyin: "jì" }],
    memoryTip: "宝盖头加祭，观察警察。",
    words: [{ word: "观察", pinyin: "guān chá" }, { word: "警察", pinyin: "jǐng chá" }],
    sentenceData: [{ char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "课", pinyin: "kè" }, { char: "上", pinyin: "shàng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "仔", pinyin: "zǐ" }, { char: "细", pinyin: "xì" }, { char: "观", pinyin: "guān" }, { char: "察", pinyin: "chá" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }, { char: "和", pinyin: "hé" }, { char: "植", pinyin: "zhí" }, { char: "物", pinyin: "wù" }, { char: "的", pinyin: "de" }, { char: "特", pinyin: "tè" }, { char: "点", pinyin: "diǎn" }, { char: "并", pinyin: "bìng" }, { char: "记", pinyin: "jì" }, { char: "录", pinyin: "lù" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }]
  },
  "差": {
    pinyin: "chà",
    structure: "半包围结构",
    composition: "羊 + 工",
    compositionParts: [{ char: "羊", pinyin: "yáng" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "羊字加工，差不多差别。",
    words: [{ word: "差不多", pinyin: "chà bu duō" }, { word: "差别", pinyin: "chā bié" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "两", pinyin: "liǎng" }, { char: "个", pinyin: "gè" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "的", pinyin: "de" }, { char: "大", pinyin: "dà" }, { char: "小", pinyin: "xiǎo" }, { char: "差", pinyin: "chà" }, { char: "不", pinyin: "bù" }, { char: "多", pinyin: "duō" }, { char: "但", pinyin: "dàn" }, { char: "颜", pinyin: "yán" }, { char: "色", pinyin: "sè" }, { char: "有", pinyin: "yǒu" }, { char: "些", pinyin: "xiē" }, { char: "差", pinyin: "chā" }, { char: "别", pinyin: "bié" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "更", pinyin: "gèng" }, { char: "红", pinyin: "hóng" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "更", pinyin: "gèng" }, { char: "绿", pinyin: "lǜ" }]
  },
  "拆": {
    pinyin: "chāi",
    structure: "左右结构",
    composition: "扌 + 斥",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "斥", pinyin: "chì" }],
    memoryTip: "提手旁加斥，拆开拆除。",
    words: [{ word: "拆开", pinyin: "chāi kāi" }, { word: "拆除", pinyin: "chāi chú" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "帮", pinyin: "bāng" }, { char: "我", pinyin: "wǒ" }, { char: "拆", pinyin: "chāi" }, { char: "开", pinyin: "kāi" }, { char: "玩", pinyin: "wán" }, { char: "具", pinyin: "jù" }, { char: "包", pinyin: "bāo" }, { char: "装", pinyin: "zhuāng" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "开", pinyin: "kāi" }, { char: "心", pinyin: "xīn" }, { char: "地", pinyin: "de" }, { char: "玩", pinyin: "wán" }, { char: "起", pinyin: "qǐ" }, { char: "了", pinyin: "le" }, { char: "新", pinyin: "xīn" }, { char: "玩", pinyin: "wán" }, { char: "具", pinyin: "jù" }]
  },
  "柴": {
    pinyin: "chái",
    structure: "上下结构",
    composition: "此 + 木",
    compositionParts: [{ char: "此", pinyin: "cǐ" }, { char: "木", pinyin: "mù" }],
    memoryTip: "此字加个木，柴火木柴。",
    words: [{ word: "柴火", pinyin: "chái huǒ" }, { word: "木柴", pinyin: "mù chái" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "村", pinyin: "cūn" }, { char: "的", pinyin: "de" }, { char: "爷", pinyin: "yé" }, { char: "爷", pinyin: "yé" }, { char: "用", pinyin: "yòng" }, { char: "木", pinyin: "mù" }, { char: "柴", pinyin: "chái" }, { char: "生", pinyin: "shēng" }, { char: "火", pinyin: "huǒ" }, { char: "做", pinyin: "zuò" }, { char: "饭", pinyin: "fàn" }, { char: "柴", pinyin: "chái" }, { char: "火", pinyin: "huǒ" }, { char: "饭", pinyin: "fàn" }, { char: "特", pinyin: "tè" }, { char: "别", pinyin: "bié" }, { char: "香", pinyin: "xiāng" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }]
  },
  "缠": {
    pinyin: "chán",
    structure: "左右结构",
    composition: "纟 + 廛",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "廛", pinyin: "chán" }],
    memoryTip: "绞丝旁加廛，缠绕纠缠。",
    words: [{ word: "缠绕", pinyin: "chán rào" }, { word: "纠缠", pinyin: "jiū chán" }],
    sentenceData: [{ char: "藤", pinyin: "téng" }, { char: "蔓", pinyin: "màn" }, { char: "缠", pinyin: "chán" }, { char: "绕", pinyin: "rào" }, { char: "在", pinyin: "zài" }, { char: "大", pinyin: "dà" }, { char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "形", pinyin: "xíng" }, { char: "成", pinyin: "chéng" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "自", pinyin: "zì" }, { char: "然", pinyin: "rán" }, { char: "景", pinyin: "jǐng" }, { char: "观", pinyin: "guān" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "爱", pinyin: "ài" }, { char: "护", pinyin: "hù" }, { char: "大", pinyin: "dà" }, { char: "自", pinyin: "zì" }, { char: "然", pinyin: "rán" }]
  },
  "产": {
    pinyin: "chǎn",
    structure: "独体字",
    composition: "立 + 厂",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "厂", pinyin: "chǎng" }],
    memoryTip: "立字加厂，生产产品。",
    words: [{ word: "生产", pinyin: "shēng chǎn" }, { word: "产品", pinyin: "chǎn pǐn" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "厂", pinyin: "chǎng" }, { char: "里", pinyin: "lǐ" }, { char: "生", pinyin: "shēng" }, { char: "产", pinyin: "chǎn" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "优", pinyin: "yōu" }, { char: "质", pinyin: "zhì" }, { char: "的", pinyin: "de" }, { char: "产", pinyin: "chǎn" }, { char: "品", pinyin: "pǐn" }, { char: "这", pinyin: "zhè" }, { char: "些", pinyin: "xiē" }, { char: "产", pinyin: "chǎn" }, { char: "品", pinyin: "pǐn" }, { char: "销", pinyin: "xiāo" }, { char: "往", pinyin: "wǎng" }, { char: "全", pinyin: "quán" }, { char: "国", pinyin: "guó" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "好", pinyin: "hǎo" }, { char: "处", pinyin: "chù" }]
  },
  "闻": {
    pinyin: "wén",
    structure: "半包围结构",
    composition: "门 + 耳",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "耳", pinyin: "ěr" }],
    memoryTip: "门字加耳，新闻听闻。",
    words: [{ word: "新闻", pinyin: "xīn wén" }, { word: "听闻", pinyin: "tīng wén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "早", pinyin: "zǎo" }, { char: "上", pinyin: "shàng" }, { char: "都", pinyin: "dōu" }, { char: "要", pinyin: "yào" }, { char: "听", pinyin: "tīng" }, { char: "新", pinyin: "xīn" }, { char: "闻", pinyin: "wén" }, { char: "了", pinyin: "le" }, { char: "解", pinyin: "jiě" }, { char: "国", pinyin: "guó" }, { char: "内", pinyin: "nèi" }, { char: "外", pinyin: "wài" }, { char: "发", pinyin: "fā" }, { char: "生", pinyin: "shēng" }, { char: "的", pinyin: "de" }, { char: "大", pinyin: "dà" }, { char: "事", pinyin: "shì" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "习", pinyin: "xí" }, { char: "惯", pinyin: "guàn" }]
  },
  "颤": {
    pinyin: "chàn",
    structure: "左右结构",
    composition: "页 + 亶",
    compositionParts: [{ char: "页", pinyin: "yè" }, { char: "亶", pinyin: "dǎn" }],
    memoryTip: "页字加亶，颤抖颤动。",
    words: [{ word: "颤抖", pinyin: "chàn dǒu" }, { word: "颤动", pinyin: "chàn dòng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "第", pinyin: "dì" }, { char: "一", pinyin: "yī" }, { char: "次", pinyin: "cì" }, { char: "上", pinyin: "shàng" }, { char: "台", pinyin: "tái" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "有", pinyin: "yǒu" }, { char: "些", pinyin: "xiē" }, { char: "紧", pinyin: "jǐn" }, { char: "张", pinyin: "zhāng" }, { char: "声", pinyin: "shēng" }, { char: "音", pinyin: "yīn" }, { char: "有", pinyin: "yǒu" }, { char: "些", pinyin: "xiē" }, { char: "颤", pinyin: "chàn" }, { char: "抖", pinyin: "dǒu" }, { char: "但", pinyin: "dàn" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "昌": {
    pinyin: "chāng",
    structure: "上下结构",
    composition: "日 + 日",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "日", pinyin: "rì" }],
    memoryTip: "两个日字，昌盛繁荣。",
    words: [{ word: "昌盛", pinyin: "chāng shèng" }, { word: "繁荣", pinyin: "fán róng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "祖", pinyin: "zǔ" }, { char: "国", pinyin: "guó" }, { char: "日", pinyin: "rì" }, { char: "益", pinyin: "yì" }, { char: "昌", pinyin: "chāng" }, { char: "盛", pinyin: "shèng" }, { char: "人", pinyin: "rén" }, { char: "民", pinyin: "mín" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }, { char: "水", pinyin: "shuǐ" }, { char: "平", pinyin: "píng" }, { char: "不", pinyin: "bù" }, { char: "断", pinyin: "duàn" }, { char: "提", pinyin: "tí" }, { char: "高", pinyin: "gāo" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "骄", pinyin: "jiāo" }, { char: "傲", pinyin: "ào" }]
  },
  "长": {
    pinyin: "cháng",
    structure: "独体字",
    composition: "长",
    compositionParts: [{ char: "长", pinyin: "cháng" }],
    memoryTip: "长长的形状，长短长度。",
    words: [{ word: "长短", pinyin: "cháng duǎn" }, { word: "长度", pinyin: "cháng dù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "条", pinyin: "tiáo" }, { char: "绳", pinyin: "shéng" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "长", pinyin: "cháng" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "用", pinyin: "yòng" }, { char: "来", pinyin: "lái" }, { char: "跳", pinyin: "tiào" }, { char: "绳", pinyin: "shéng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "测", pinyin: "cè" }, { char: "量", pinyin: "liáng" }, { char: "一", pinyin: "yī" }, { char: "下", pinyin: "xià" }, { char: "它", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "长", pinyin: "cháng" }, { char: "度", pinyin: "dù" }, { char: "看", pinyin: "kàn" }, { char: "有", pinyin: "yǒu" }, { char: "多", pinyin: "duō" }, { char: "长", pinyin: "cháng" }]
  },
  "肠": {
    pinyin: "cháng",
    structure: "左右结构",
    composition: "月 + 昜",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "昜", pinyin: "yáng" }],
    memoryTip: "月字旁加昜，肠胃肠道。",
    words: [{ word: "肠胃", pinyin: "cháng wèi" }, { word: "肠道", pinyin: "cháng dào" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "注", pinyin: "zhù" }, { char: "意", pinyin: "yì" }, { char: "饮", pinyin: "yǐn" }, { char: "食", pinyin: "shí" }, { char: "卫", pinyin: "wèi" }, { char: "生", pinyin: "shēng" }, { char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "好", pinyin: "hǎo" }, { char: "肠", pinyin: "cháng" }, { char: "胃", pinyin: "wèi" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "有", pinyin: "yǒu" }, { char: "好", pinyin: "hǎo" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "更", pinyin: "gèng" }, { char: "好", pinyin: "hǎo" }]
  },
  "尝": {
    pinyin: "cháng",
    structure: "上下结构",
    composition: "小 + 云",
    compositionParts: [{ char: "小", pinyin: "xiǎo" }, { char: "云", pinyin: "yún" }],
    memoryTip: "小字加云，尝试品尝。",
    words: [{ word: "尝试", pinyin: "cháng shì" }, { word: "品尝", pinyin: "pǐn cháng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "做", pinyin: "zuò" }, { char: "了", pinyin: "le" }, { char: "新", pinyin: "xīn" }, { char: "菜", pinyin: "cài" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "尝", pinyin: "cháng" }, { char: "一", pinyin: "yī" }, { char: "尝", pinyin: "cháng" }, { char: "味", pinyin: "wèi" }, { char: "道", pinyin: "dào" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "勇", pinyin: "yǒng" }, { char: "于", pinyin: "yú" }, { char: "尝", pinyin: "cháng" }, { char: "试", pinyin: "shì" }, { char: "新", pinyin: "xīn" }, { char: "事", pinyin: "shì" }, { char: "物", pinyin: "wù" }]
  },
  "偿": {
    pinyin: "cháng",
    structure: "左右结构",
    composition: "亻 + 尝",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "尝", pinyin: "cháng" }],
    memoryTip: "单人旁加尝，偿还补偿。",
    words: [{ word: "偿还", pinyin: "cháng huán" }, { word: "补偿", pinyin: "bǔ cháng" }],
    sentenceData: [{ char: "借", pinyin: "jiè" }, { char: "了", pinyin: "le" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }, { char: "的", pinyin: "de" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xī" }, { char: "要", pinyin: "yào" }, { char: "及", pinyin: "jí" }, { char: "时", pinyin: "shí" }, { char: "偿", pinyin: "cháng" }, { char: "还", pinyin: "huán" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "诚", pinyin: "chéng" }, { char: "信", pinyin: "xìn" }, { char: "的", pinyin: "de" }, { char: "表", pinyin: "biǎo" }, { char: "现", pinyin: "xiàn" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "做", pinyin: "zuò" }, { char: "诚", pinyin: "chéng" }, { char: "实", pinyin: "shí" }, { char: "的", pinyin: "de" }, { char: "好", pinyin: "hǎo" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }]
  },
  "常": {
    pinyin: "cháng",
    structure: "上下结构",
    composition: "尚 + 巾",
    compositionParts: [{ char: "尚", pinyin: "shàng" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "尚字加巾，常常经常。",
    words: [{ word: "常常", pinyin: "cháng cháng" }, { word: "经常", pinyin: "jīng cháng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "常", pinyin: "cháng" }, { char: "常", pinyin: "cháng" }, { char: "去", pinyin: "qù" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }, { char: "看", pinyin: "kàn" }, { char: "书", pinyin: "shū" }, { char: "那", pinyin: "nà" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "有", pinyin: "yǒu" }, { char: "趣", pinyin: "qù" }, { char: "的", pinyin: "de" }, { char: "书", pinyin: "shū" }, { char: "籍", pinyin: "jí" }, { char: "经", pinyin: "jīng" }, { char: "常", pinyin: "cháng" }, { char: "读", pinyin: "dú" }, { char: "书", pinyin: "shū" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "增", pinyin: "zēng" }, { char: "长", pinyin: "zhǎng" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shí" }]
  },
  "厂": {
    pinyin: "chǎng",
    structure: "独体字",
    composition: "厂",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }],
    memoryTip: "工厂厂房，生产制造。",
    words: [{ word: "工厂", pinyin: "gōng chǎng" }, { word: "厂房", pinyin: "chǎng fáng" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "在", pinyin: "zài" }, { char: "工", pinyin: "gōng" }, { char: "厂", pinyin: "chǎng" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }, { char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "厂", pinyin: "chǎng" }, { char: "里", pinyin: "lǐ" }, { char: "生", pinyin: "shēng" }, { char: "产", pinyin: "chǎn" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "有", pinyin: "yǒu" }, { char: "用", pinyin: "yòng" }, { char: "的", pinyin: "de" }, { char: "产", pinyin: "chǎn" }, { char: "品", pinyin: "pǐn" }, { char: "工", pinyin: "gōng" }, { char: "厂", pinyin: "chǎng" }, { char: "对", pinyin: "duì" }, { char: "国", pinyin: "guó" }, { char: "家", pinyin: "jiā" }, { char: "发", pinyin: "fā" }, { char: "展", pinyin: "zhǎn" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "场": {
    pinyin: "chǎng",
    structure: "左右结构",
    composition: "土 + 昜",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "昜", pinyin: "yáng" }],
    memoryTip: "土字加昜，场地场所。",
    words: [{ word: "场地", pinyin: "chǎng dì" }, { word: "场所", pinyin: "chǎng suǒ" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "的", pinyin: "de" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "很", pinyin: "hěn" }, { char: "大", pinyin: "dà" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "经", pinyin: "jīng" }, { char: "常", pinyin: "cháng" }, { char: "在", pinyin: "zài" }, { char: "那", pinyin: "nà" }, { char: "里", pinyin: "lǐ" }, { char: "上", pinyin: "shàng" }, { char: "体", pinyin: "tǐ" }, { char: "育", pinyin: "yù" }, { char: "课", pinyin: "kè" }, { char: "和", pinyin: "hé" }, { char: "做", pinyin: "zuò" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "锻", pinyin: "duàn" }, { char: "炼", pinyin: "liàn" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "的", pinyin: "de" }, { char: "好", pinyin: "hǎo" }, { char: "地", pinyin: "dì" }, { char: "方", pinyin: "fāng" }]
  },
  "畅": {
    pinyin: "chàng",
    structure: "左右结构",
    composition: "申 + 昜",
    compositionParts: [{ char: "申", pinyin: "shēn" }, { char: "昜", pinyin: "yáng" }],
    memoryTip: "申字加昜，畅通舒畅。",
    words: [{ word: "畅通", pinyin: "chàng tōng" }, { word: "舒畅", pinyin: "shū chàng" }],
    sentenceData: [{ char: "道", pinyin: "dào" }, { char: "路", pinyin: "lù" }, { char: "畅", pinyin: "chàng" }, { char: "通", pinyin: "tōng" }, { char: "车", pinyin: "chē" }, { char: "辆", pinyin: "liàng" }, { char: "行", pinyin: "xíng" }, { char: "驶", pinyin: "shǐ" }, { char: "顺", pinyin: "shùn" }, { char: "利", pinyin: "lì" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "出", pinyin: "chū" }, { char: "行", pinyin: "xíng" }, { char: "更", pinyin: "gèng" }, { char: "加", pinyin: "jiā" }, { char: "方", pinyin: "fāng" }, { char: "便", pinyin: "biàn" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "交", pinyin: "jiāo" }, { char: "通", pinyin: "tōng" }, { char: "畅", pinyin: "chàng" }, { char: "通", pinyin: "tōng" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "减", pinyin: "jiǎn" }, { char: "少", pinyin: "shǎo" }, { char: "堵", pinyin: "dǔ" }, { char: "车", pinyin: "chē" }]
  },
  "倡": {
    pinyin: "chàng",
    structure: "左右结构",
    composition: "亻 + 昌",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "昌", pinyin: "chāng" }],
    memoryTip: "单人旁加昌，倡导提倡。",
    words: [{ word: "倡导", pinyin: "chàng dǎo" }, { word: "提倡", pinyin: "tí chàng" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "倡", pinyin: "chàng" }, { char: "导", pinyin: "dǎo" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "节", pinyin: "jié" }, { char: "约", pinyin: "yuē" }, { char: "用", pinyin: "yòng" }, { char: "水", pinyin: "shuǐ" }, { char: "节", pinyin: "jié" }, { char: "约", pinyin: "yuē" }, { char: "用", pinyin: "yòng" }, { char: "电", pinyin: "diàn" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "倡", pinyin: "chàng" }, { char: "议", pinyin: "yì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "积", pinyin: "jī" }, { char: "极", pinyin: "jí" }, { char: "响", pinyin: "xiǎng" }, { char: "应", pinyin: "yìng" }, { char: "从", pinyin: "cóng" }, { char: "小", pinyin: "xiǎo" }, { char: "事", pinyin: "shì" }, { char: "做", pinyin: "zuò" }, { char: "起", pinyin: "qǐ" }]
  },
  "唱": {
    pinyin: "chàng",
    structure: "左右结构",
    composition: "口 + 昌",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "昌", pinyin: "chāng" }],
    memoryTip: "口字加昌，唱歌演唱。",
    words: [{ word: "唱歌", pinyin: "chàng gē" }, { word: "演唱", pinyin: "yǎn chàng" }],
    sentenceData: [{ char: "音", pinyin: "yīn" }, { char: "乐", pinyin: "yuè" }, { char: "课", pinyin: "kè" }, { char: "上", pinyin: "shàng" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "教", pinyin: "jiào" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "唱", pinyin: "chàng" }, { char: "歌", pinyin: "gē" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "唱", pinyin: "chàng" }, { char: "歌", pinyin: "gē" }, { char: "因", pinyin: "yīn" }, { char: "为", pinyin: "wèi" }, { char: "唱", pinyin: "chàng" }, { char: "歌", pinyin: "gē" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "心", pinyin: "xīn" }, { char: "情", pinyin: "qíng" }, { char: "愉", pinyin: "yú" }, { char: "快", pinyin: "kuài" }, { char: "放", pinyin: "fàng" }, { char: "松", pinyin: "sōng" }, { char: "心", pinyin: "xīn" }, { char: "情", pinyin: "qíng" }]
  },
  "抄": {
    pinyin: "chāo",
    structure: "左右结构",
    composition: "扌 + 少",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "少", pinyin: "shǎo" }],
    memoryTip: "提手旁加少，抄写抄录。",
    words: [{ word: "抄写", pinyin: "chāo xiě" }, { word: "抄录", pinyin: "chāo lù" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "抄", pinyin: "chāo" }, { char: "写", pinyin: "xiě" }, { char: "课", pinyin: "kè" }, { char: "文", pinyin: "wén" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "加", pinyin: "jiā" }, { char: "深", pinyin: "shēn" }, { char: "对", pinyin: "duì" }, { char: "课", pinyin: "kè" }, { char: "文", pinyin: "wén" }, { char: "的", pinyin: "de" }, { char: "理", pinyin: "lǐ" }, { char: "解", pinyin: "jiě" }, { char: "和", pinyin: "hé" }, { char: "记", pinyin: "jì" }, { char: "忆", pinyin: "yì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "认", pinyin: "rèn" }, { char: "真", pinyin: "zhēn" }, { char: "抄", pinyin: "chāo" }, { char: "写", pinyin: "xiě" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "抄", pinyin: "chāo" }, { char: "错", pinyin: "cuò" }]
  },
  "超": {
    pinyin: "chāo",
    structure: "半包围结构",
    composition: "走 + 召",
    compositionParts: [{ char: "走", pinyin: "zǒu" }, { char: "召", pinyin: "zhào" }],
    memoryTip: "走字加召，超过超越。",
    words: [{ word: "超过", pinyin: "chāo guò" }, { word: "超越", pinyin: "chāo yuè" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "的", pinyin: "de" }, { char: "成", pinyin: "chéng" }, { char: "绩", pinyin: "jì" }, { char: "超", pinyin: "chāo" }, { char: "过", pinyin: "guò" }, { char: "了", pinyin: "le" }, { char: "班", pinyin: "bān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "其", pinyin: "qí" }, { char: "他", pinyin: "tā" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "他", pinyin: "tā" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "都", pinyin: "dōu" }, { char: "认", pinyin: "rèn" }, { char: "真", pinyin: "zhēn" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "向", pinyin: "xiàng" }, { char: "他", pinyin: "tā" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "不", pinyin: "bù" }, { char: "断", pinyin: "duàn" }, { char: "超", pinyin: "chāo" }, { char: "越", pinyin: "yuè" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }]
  },
  "巢": {
    pinyin: "cháo",
    structure: "上下结构",
    composition: "巛 + 果",
    compositionParts: [{ char: "巛", pinyin: "chuān" }, { char: "果", pinyin: "guǒ" }],
    memoryTip: "巛字加果，鸟巢巢穴。",
    words: [{ word: "鸟巢", pinyin: "niǎo cháo" }, { word: "巢穴", pinyin: "cháo xué" }],
    sentenceData: [{ char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "鸟", pinyin: "niǎo" }, { char: "巢", pinyin: "cháo" }, { char: "里", pinyin: "lǐ" }, { char: "面", pinyin: "miàn" }, { char: "住", pinyin: "zhù" }, { char: "着", pinyin: "zhe" }, { char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }, { char: "和", pinyin: "hé" }, { char: "鸟", pinyin: "niǎo" }, { char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "爱", pinyin: "ài" }, { char: "护", pinyin: "hù" }, { char: "小", pinyin: "xiǎo" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "破", pinyin: "pò" }, { char: "坏", pinyin: "huài" }, { char: "它", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "家", pinyin: "jiā" }, { char: "鸟", pinyin: "niǎo" }, { char: "巢", pinyin: "cháo" }, { char: "是", pinyin: "shì" }, { char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }, { char: "温", pinyin: "wēn" }, { char: "暖", pinyin: "nuǎn" }, { char: "的", pinyin: "de" }, { char: "家", pinyin: "jiā" }]
  },
  "朝": {
    pinyin: "cháo",
    structure: "左右结构",
    composition: "月 + 卓",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "卓", pinyin: "zhuó" }],
    memoryTip: "月字加卓，朝向朝代。",
    words: [{ word: "朝向", pinyin: "cháo xiàng" }, { word: "朝代", pinyin: "cháo dài" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "从", pinyin: "cóng" }, { char: "东", pinyin: "dōng" }, { char: "方", pinyin: "fāng" }, { char: "升", pinyin: "shēng" }, { char: "起", pinyin: "qǐ" }, { char: "朝", pinyin: "cháo" }, { char: "向", pinyin: "xiàng" }, { char: "西", pinyin: "xī" }, { char: "方", pinyin: "fāng" }, { char: "落", pinyin: "luò" }, { char: "下", pinyin: "xià" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "自", pinyin: "zì" }, { char: "然", pinyin: "rán" }, { char: "规", pinyin: "guī" }, { char: "律", pinyin: "lǜ" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "历", pinyin: "lì" }, { char: "史", pinyin: "shǐ" }, { char: "了", pinyin: "le" }, { char: "解", pinyin: "jiě" }, { char: "不", pinyin: "bù" }, { char: "同", pinyin: "tóng" }, { char: "的", pinyin: "de" }, { char: "朝", pinyin: "cháo" }, { char: "代", pinyin: "dài" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "更", pinyin: "gèng" }, { char: "好", pinyin: "hǎo" }, { char: "地", pinyin: "de" }, { char: "理", pinyin: "lǐ" }, { char: "解", pinyin: "jiě" }, { char: "现", pinyin: "xiàn" }, { char: "在", pinyin: "zài" }]
  },
  "潮": {
    pinyin: "cháo",
    structure: "左右结构",
    composition: "氵 + 朝",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "朝", pinyin: "cháo" }],
    memoryTip: "三点水加朝，潮水潮流。",
    words: [{ word: "潮水", pinyin: "cháo shuǐ" }, { word: "潮流", pinyin: "cháo liú" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "边", pinyin: "biān" }, { char: "的", pinyin: "de" }, { char: "潮", pinyin: "cháo" }, { char: "水", pinyin: "shuǐ" }, { char: "一", pinyin: "yī" }, { char: "会", pinyin: "huì" }, { char: "儿", pinyin: "ér" }, { char: "涨", pinyin: "zhǎng" }, { char: "一", pinyin: "yī" }, { char: "会", pinyin: "huì" }, { char: "儿", pinyin: "ér" }, { char: "落", pinyin: "luò" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "大", pinyin: "dà" }, { char: "自", pinyin: "zì" }, { char: "然", pinyin: "rán" }, { char: "的", pinyin: "de" }, { char: "奇", pinyin: "qí" }, { char: "妙", pinyin: "miào" }, { char: "现", pinyin: "xiàn" }, { char: "象", pinyin: "xiàng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "新", pinyin: "xīn" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shí" }, { char: "跟", pinyin: "gēn" }, { char: "上", pinyin: "shàng" }, { char: "时", pinyin: "shí" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "潮", pinyin: "cháo" }, { char: "流", pinyin: "liú" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "不", pinyin: "bù" }, { char: "断", pinyin: "duàn" }, { char: "进", pinyin: "jìn" }, { char: "步",pinyin:"bù" }]
  },
  "吵": {
    pinyin: "chǎo",
    structure: "左右结构",
    composition: "口 + 少",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "少", pinyin: "shǎo" }],
    memoryTip: "口字加少，吵闹吵架。",
    words: [{ word: "吵闹", pinyin: "chǎo nào" }, { word: "吵架", pinyin: "chǎo jià" }],
    sentenceData: [{ char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }, { char: "里", pinyin: "lǐ" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "大", pinyin: "dà" }, { char: "声", pinyin: "shēng" }, { char: "吵", pinyin: "chǎo" }, { char: "闹", pinyin: "nào" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "安", pinyin: "ān" }, { char: "静", pinyin: "jìng" }, { char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "基", pinyin: "jī" }, { char: "本", pinyin: "běn" }, { char: "的", pinyin: "de" }, { char: "礼", pinyin: "lǐ" }, { char: "貌", pinyin: "mào" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "学", pinyin: "xué" }, { char: "会", pinyin: "huì" }, { char: "控", pinyin: "kòng" }, { char: "制", pinyin: "zhì" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "情", pinyin: "qíng" }, { char: "绪", pinyin: "xù" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "随", pinyin: "suí" }, { char: "便", pinyin: "biàn" }, { char: "和", pinyin: "hé" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }, { char: "吵", pinyin: "chǎo" }, { char: "架", pinyin: "jià" }]
  },
  "炒": {
    pinyin: "chǎo",
    structure: "左右结构",
    composition: "火 + 少",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "少", pinyin: "shǎo" }],
    memoryTip: "火字加少，炒菜炒饭。",
    words: [{ word: "炒菜", pinyin: "chǎo cài" }, { word: "炒饭", pinyin: "chǎo fàn" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "在", pinyin: "zài" }, { char: "厨", pinyin: "chú" }, { char: "房", pinyin: "fáng" }, { char: "炒", pinyin: "chǎo" }, { char: "菜", pinyin: "cài" }]
  },
  "车": {
    pinyin: "chē",
    structure: "独体字",
    composition: "车",
    compositionParts: [{ char: "车", pinyin: "chē" }],
    memoryTip: "像个小车，车轮滚滚。",
    words: [{ word: "汽车", pinyin: "qì chē" }, { word: "火车", pinyin: "huǒ chē" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "开", pinyin: "kāi" }, { char: "车", pinyin: "chē" }, { char: "送", pinyin: "sòng" }, { char: "我", pinyin: "wǒ" }, { char: "上", pinyin: "shàng" }, { char: "学", pinyin: "xué" }]
  },
  "扯": {
    pinyin: "chě",
    structure: "左右结构",
    composition: "扌 + 止",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "止", pinyin: "zhǐ" }],
    memoryTip: "提手旁加止，扯拉扯皮。",
    words: [{ word: "扯皮", pinyin: "chě pí" }, { word: "拉扯", pinyin: "lā chě" }],
    sentenceData: [{ char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "和", pinyin: "hé" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "乱", pinyin: "luàn" }, { char: "扯", pinyin: "chě" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xī" }]
  },
  "彻": {
    pinyin: "chè",
    structure: "左右结构",
    composition: "彳 + 切",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "切", pinyin: "qiē" }],
    memoryTip: "双人旁加切，彻底透彻。",
    words: [{ word: "彻底", pinyin: "chè dǐ" }, { word: "透彻", pinyin: "tòu chè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "彻", pinyin: "chè" }, { char: "底", pinyin: "dǐ" }, { char: "清", pinyin: "qīng" }, { char: "扫", pinyin: "sǎo" }, { char: "了", pinyin: "le" }, { char: "教", pinyin: "jiào" }, { char: "室", pinyin: "shì" }]
  },
  "撤": {
    pinyin: "chè",
    structure: "左右结构",
    composition: "扌 + 彻",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "彻", pinyin: "chè" }],
    memoryTip: "提手旁加彻，撤退撤销。",
    words: [{ word: "撤退", pinyin: "chè tuì" }, { word: "撤销", pinyin: "chè xiāo" }],
    sentenceData: [{ char: "军", pinyin: "jūn" }, { char: "队", pinyin: "duì" }, { char: "接", pinyin: "jiē" }, { char: "到", pinyin: "dào" }, { char: "命", pinyin: "mìng" }, { char: "令", pinyin: "lìng" }, { char: "撤", pinyin: "chè" }, { char: "退", pinyin: "tuì" }]
  },
  "尘": {
    pinyin: "chén",
    structure: "上下结构",
    composition: "小 + 土",
    compositionParts: [{ char: "小", pinyin: "xiǎo" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "小字加土，灰尘尘土。",
    words: [{ word: "灰尘", pinyin: "huī chén" }, { word: "尘土", pinyin: "chén tǔ" }],
    sentenceData: [{ char: "桌", pinyin: "zhuō" }, { char: "子", pinyin: "zi" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "层", pinyin: "céng" }, { char: "灰", pinyin: "huī" }, { char: "尘", pinyin: "chén" }]
  },
  "臣": {
    pinyin: "chén",
    structure: "独体字",
    composition: "臣",
    compositionParts: [{ char: "臣", pinyin: "chén" }],
    memoryTip: "像个人跪着，大臣君臣。",
    words: [{ word: "大臣", pinyin: "dà chén" }, { word: "君臣", pinyin: "jūn chén" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "大", pinyin: "dà" }, { char: "臣", pinyin: "chén" }, { char: "都", pinyin: "dōu" }, { char: "很", pinyin: "hěn" }, { char: "忠", pinyin: "zhōng" }, { char: "诚", pinyin: "chéng" }]
  },
  "沉": {
    pinyin: "chén",
    structure: "左右结构",
    composition: "氵 + 尤",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "尤", pinyin: "yóu" }],
    memoryTip: "三点水加尤，沉没下沉。",
    words: [{ word: "沉没", pinyin: "chén mò" }, { word: "下沉", pinyin: "xià chén" }],
    sentenceData: [{ char: "石", pinyin: "shí" }, { char: "头", pinyin: "tou" }, { char: "掉", pinyin: "diào" }, { char: "进", pinyin: "jìn" }, { char: "水", pinyin: "shuǐ" }, { char: "里", pinyin: "lǐ" }, { char: "很", pinyin: "hěn" }, { char: "快", pinyin: "kuài" }, { char: "就", pinyin: "jiù" }, { char: "沉", pinyin: "chén" }, { char: "下", pinyin: "xià" }, { char: "去", pinyin: "qù" }, { char: "了", pinyin: "le" }]
  },
  "陈": {
    pinyin: "chén",
    structure: "左右结构",
    composition: "阝 + 东",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "东", pinyin: "dōng" }],
    memoryTip: "耳刀旁加东，陈列陈旧。",
    words: [{ word: "陈列", pinyin: "chén liè" }, { word: "陈旧", pinyin: "chén jiù" }],
    sentenceData: [{ char: "博", pinyin: "bó" }, { char: "物", pinyin: "wù" }, { char: "馆", pinyin: "guǎn" }, { char: "里", pinyin: "lǐ" }, { char: "陈", pinyin: "chén" }, { char: "列", pinyin: "liè" }, { char: "着", pinyin: "zhe" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "文", pinyin: "wén" }, { char: "物", pinyin: "wù" }]
  },
  "晨": {
    pinyin: "chén",
    structure: "上下结构",
    composition: "日 + 辰",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "辰", pinyin: "chén" }],
    memoryTip: "日字加辰，早晨清晨。",
    words: [{ word: "早晨", pinyin: "zǎo chén" }, { word: "清晨", pinyin: "qīng chén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "早", pinyin: "zǎo" }, { char: "晨", pinyin: "chén" }, { char: "都", pinyin: "dōu" }, { char: "起", pinyin: "qǐ" }, { char: "床", pinyin: "chuáng" }, { char: "读", pinyin: "dú" }, { char: "书", pinyin: "shū" }]
  },
  "趁": {
    pinyin: "chèn",
    structure: "半包围结构",
    composition: "走 + 㐱",
    compositionParts: [{ char: "走", pinyin: "zǒu" }, { char: "㐱", pinyin: "zhěn" }],
    memoryTip: "走之加㐱，趁机趁热。",
    words: [{ word: "趁机", pinyin: "chèn jī" }, { word: "趁热", pinyin: "chèn rè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "趁", pinyin: "chèn" }, { char: "着", pinyin: "zhe" }, { char: "周", pinyin: "zhōu" }, { char: "末", pinyin: "mò" }, { char: "的", pinyin: "de" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "去", pinyin: "qù" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }]
  },
  "撑": {
    pinyin: "chēng",
    structure: "左右结构",
    composition: "扌 + 掌",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "掌", pinyin: "zhǎng" }],
    memoryTip: "提手旁加掌，支撑撑伞。",
    words: [{ word: "支撑", pinyin: "zhī chēng" }, { word: "撑伞", pinyin: "chēng sǎn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "根", pinyin: "gēn" }, { char: "柱", pinyin: "zhù" }, { char: "子", pinyin: "zi" }, { char: "撑", pinyin: "chēng" }, { char: "起", pinyin: "qǐ" }, { char: "了", pinyin: "le" }, { char: "整", pinyin: "zhěng" }, { char: "个", pinyin: "gè" }, { char: "房", pinyin: "fáng" }, { char: "子", pinyin: "zi" }]
  },
  "称": {
    pinyin: "chēng",
    structure: "左右结构",
    composition: "禾 + 尔",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "尔", pinyin: "ěr" }],
    memoryTip: "禾字旁加尔，称呼称重。",
    words: [{ word: "称呼", pinyin: "chēng hu" }, { word: "称重", pinyin: "chēng zhòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "称", pinyin: "chēng" }, { char: "呼", pinyin: "hu" }, { char: "他", pinyin: "tā" }, { char: "为", pinyin: "wéi" }, { char: "王", pinyin: "wáng" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }]
  },
  "城": {
    pinyin: "chéng",
    structure: "左右结构",
    composition: "土 + 成",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "成", pinyin: "chéng" }],
    memoryTip: "土字旁加成，城市城墙。",
    words: [{ word: "城市", pinyin: "chéng shì" }, { word: "城墙", pinyin: "chéng qiáng" }],
    sentenceData: [{ char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "首", pinyin: "shǒu" }, { char: "都", pinyin: "dū" }, { char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }]
  },
  "成": {
    pinyin: "chéng",
    structure: "独体字",
    composition: "成",
    compositionParts: [{ char: "成", pinyin: "chéng" }],
    memoryTip: "像把戈，成功完成。",
    words: [{ word: "成功", pinyin: "chéng gōng" }, { word: "完成", pinyin: "wán chéng" }],
    sentenceData: [{ char: "只", pinyin: "zhǐ" }, { char: "要", pinyin: "yào" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "就", pinyin: "jiù" }, { char: "能", pinyin: "néng" }, { char: "成", pinyin: "chéng" }, { char: "功", pinyin: "gōng" }]
  },
  "呈": {
    pinyin: "chéng",
    structure: "上下结构",
    composition: "口 + 王",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "王", pinyin: "wáng" }],
    memoryTip: "口字加王，呈现呈现。",
    words: [{ word: "呈现", pinyin: "chéng xiàn" }, { word: "呈上", pinyin: "chéng shàng" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "中", pinyin: "zhōng" }, { char: "呈", pinyin: "chéng" }, { char: "现", pinyin: "xiàn" }, { char: "出", pinyin: "chū" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "彩", pinyin: "cǎi" }, { char: "虹", pinyin: "hóng" }]
  },
  "承": {
    pinyin: "chéng",
    structure: "独体字",
    composition: "承",
    compositionParts: [{ char: "承", pinyin: "chéng" }],
    memoryTip: "像双手托物，承担承认。",
    words: [{ word: "承担", pinyin: "chéng dān" }, { word: "承认", pinyin: "chéng rèn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "承", pinyin: "chéng" }, { char: "担", pinyin: "dān" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "责", pinyin: "zé" }, { char: "任", pinyin: "rèn" }]
  },
  "乘": {
    pinyin: "chéng",
    structure: "独体字",
    composition: "乘",
    compositionParts: [{ char: "乘", pinyin: "chéng" }],
    memoryTip: "像人坐车上，乘坐乘法。",
    words: [{ word: "乘坐", pinyin: "chéng zuò" }, { word: "乘法", pinyin: "chéng fǎ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "乘", pinyin: "chéng" }, { char: "坐", pinyin: "zuò" }, { char: "公", pinyin: "gōng" }, { char: "交", pinyin: "jiāo" }, { char: "车", pinyin: "chē" }, { char: "去", pinyin: "qù" }, { char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }]
  },
  "程": {
    pinyin: "chéng",
    structure: "左右结构",
    composition: "禾 + 口 + 王",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "口", pinyin: "kǒu" }, { char: "王", pinyin: "wáng" }],
    memoryTip: "禾口王组合，路程过程。",
    words: [{ word: "路程", pinyin: "lù chéng" }, { word: "过程", pinyin: "guò chéng" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "长", pinyin: "cháng" }, { char: "期", pinyin: "qī" }, { char: "的", pinyin: "de" }, { char: "过", pinyin: "guò" }, { char: "程", pinyin: "chéng" }]
  },
  "惩": {
    pinyin: "chéng",
    structure: "左右结构",
    composition: "心 + 征",
    compositionParts: [{ char: "心", pinyin: "xīn" }, { char: "征", pinyin: "zhēng" }],
    memoryTip: "心字旁加征，惩罚惩处。",
    words: [{ word: "惩罚", pinyin: "chéng fá" }, { word: "惩处", pinyin: "chéng chǔ" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "对", pinyin: "duì" }, { char: "犯", pinyin: "fàn" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }, { char: "的", pinyin: "de" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "进", pinyin: "jìn" }, { char: "行", pinyin: "xíng" }, { char: "了", pinyin: "le" }, { char: "惩", pinyin: "chéng" }, { char: "罚", pinyin: "fá" }]
  },
  "澄": {
    pinyin: "chéng",
    structure: "左右结构",
    composition: "氵 + 登",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "登", pinyin: "dēng" }],
    memoryTip: "三点水加登，澄清澄澈。",
    words: [{ word: "澄清", pinyin: "chéng qīng" }, { word: "澄澈", pinyin: "chéng chè" }],
    sentenceData: [{ char: "雨", pinyin: "yǔ" }, { char: "后", pinyin: "hòu" }, { char: "的", pinyin: "de" }, { char: "湖", pinyin: "hú" }, { char: "水", pinyin: "shuǐ" }, { char: "变", pinyin: "biàn" }, { char: "得", pinyin: "de" }, { char: "澄", pinyin: "chéng" }, { char: "澈", pinyin: "chè" }, { char: "见", pinyin: "jiàn" }, { char: "底", pinyin: "dǐ" }]
  },
  "池": {
    pinyin: "chí",
    structure: "左右结构",
    composition: "氵 + 也",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "也", pinyin: "yě" }],
    memoryTip: "三点水加也，池塘水池。",
    words: [{ word: "池塘", pinyin: "chí táng" }, { word: "水池", pinyin: "shuǐ chí" }],
    sentenceData: [{ char: "夏", pinyin: "xià" }, { char: "天", pinyin: "tiān" }, { char: "池", pinyin: "chí" }, { char: "塘", pinyin: "táng" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "荷", pinyin: "hé" }, { char: "花", pinyin: "huā" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }]
  },
  "迟": {
    pinyin: "chí",
    structure: "半包围结构",
    composition: "辶 + 尺",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "尺", pinyin: "chǐ" }],
    memoryTip: "走之底加尺，迟到迟早。",
    words: [{ word: "迟到", pinyin: "chí dào" }, { word: "迟早", pinyin: "chí zǎo" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "起", pinyin: "qǐ" }, { char: "床", pinyin: "chuáng" }, { char: "迟", pinyin: "chí" }, { char: "了", pinyin: "le" }, { char: "差", pinyin: "chà" }, { char: "点", pinyin: "diǎn" }, { char: "迟", pinyin: "chí" }, { char: "到", pinyin: "dào" }]
  },
  "驰": {
    pinyin: "chí",
    structure: "左右结构",
    composition: "马 + 也",
    compositionParts: [{ char: "马", pinyin: "mǎ" }, { char: "也", pinyin: "yě" }],
    memoryTip: "马字旁加也，奔驰驰名。",
    words: [{ word: "奔驰", pinyin: "bēn chí" }, { word: "驰名", pinyin: "chí míng" }],
    sentenceData: [{ char: "赛", pinyin: "sài" }, { char: "车", pinyin: "chē" }, { char: "在", pinyin: "zài" }, { char: "赛", pinyin: "sài" }, { char: "道", pinyin: "dào" }, { char: "上", pinyin: "shàng" }, { char: "飞", pinyin: "fēi" }, { char: "驰", pinyin: "chí" }]
  },
  "齿": {
    pinyin: "chǐ",
    structure: "上下结构",
    composition: "止 + 凶",
    compositionParts: [{ char: "止", pinyin: "zhǐ" }, { char: "凶", pinyin: "xiōng" }],
    memoryTip: "止字加凶，牙齿齿轮。",
    words: [{ word: "牙齿", pinyin: "yá chǐ" }, { word: "齿轮", pinyin: "chǐ lún" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "都", pinyin: "dōu" }, { char: "刷", pinyin: "shuā" }, { char: "牙", pinyin: "yá" }, { char: "齿", pinyin: "chǐ" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "口", pinyin: "kǒu" }, { char: "腔", pinyin: "qiāng" }, { char: "卫", pinyin: "wèi" }, { char: "生", pinyin: "shēng" }]
  },
  "耻": {
    pinyin: "chǐ",
    structure: "左右结构",
    composition: "耳 + 止",
    compositionParts: [{ char: "耳", pinyin: "ěr" }, { char: "止", pinyin: "zhǐ" }],
    memoryTip: "耳字旁加止，耻辱可耻。",
    words: [{ word: "耻辱", pinyin: "chǐ rǔ" }, { word: "可耻", pinyin: "kě chǐ" }],
    sentenceData: [{ char: "撒", pinyin: "sā" }, { char: "谎", pinyin: "huǎng" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "种", pinyin: "zhǒng" }, { char: "可", pinyin: "kě" }, { char: "耻", pinyin: "chǐ" }, { char: "的", pinyin: "de" }, { char: "行", pinyin: "xíng" }, { char: "为", pinyin: "wéi" }]
  },
  "斥": {
    pinyin: "chì",
    structure: "独体字",
    composition: "斥",
    compositionParts: [{ char: "斥", pinyin: "chì" }],
    memoryTip: "像人推东西，斥责怒斥。",
    words: [{ word: "斥责", pinyin: "chì zé" }, { word: "怒斥", pinyin: "nù chì" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "严", pinyin: "yán" }, { char: "厉", pinyin: "lì" }, { char: "地", pinyin: "de" }, { char: "斥", pinyin: "chì" }, { char: "责", pinyin: "zé" }, { char: "了", pinyin: "le" }, { char: "捣", pinyin: "dǎo" }, { char: "乱", pinyin: "luàn" }, { char: "的", pinyin: "de" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }]
  },
  "赤": {
    pinyin: "chì",
    structure: "独体字",
    composition: "赤",
    compositionParts: [{ char: "赤", pinyin: "chì" }],
    memoryTip: "像大火燃烧，赤色赤红。",
    words: [{ word: "赤色", pinyin: "chì sè" }, { word: "赤红", pinyin: "chì hóng" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "枫", pinyin: "fēng" }, { char: "叶", pinyin: "yè" }, { char: "变", pinyin: "biàn" }, { char: "成", pinyin: "chéng" }, { char: "赤", pinyin: "chì" }, { char: "色", pinyin: "sè" }]
  },
  "冲": {
    pinyin: "chōng",
    structure: "左右结构",
    composition: "冫 + 中",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "中", pinyin: "zhōng" }],
    memoryTip: "两点水加中，冲洗冲走。",
    words: [{ word: "冲洗", pinyin: "chōng xǐ" }, { word: "冲走", pinyin: "chōng zǒu" }],
    sentenceData: [{ char: "下", pinyin: "xià" }, { char: "雨", pinyin: "yǔ" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "赶", pinyin: "gǎn" }, { char: "紧", pinyin: "jǐn" }, { char: "冲", pinyin: "chōng" }, { char: "回", pinyin: "huí" }, { char: "家", pinyin: "jiā" }]
  },
  "充": {
    pinyin: "chōng",
    structure: "上下结构",
    composition: "亠 + 允",
    compositionParts: [{ char: "亠", pinyin: "tóu" }, { char: "允", pinyin: "yǔn" }],
    memoryTip: "点加允，充满充足。",
    words: [{ word: "充满", pinyin: "chōng mǎn" }, { word: "充足", pinyin: "chōng zú" }],
    sentenceData: [{ char: "教", pinyin: "jiào" }, { char: "室", pinyin: "shì" }, { char: "里", pinyin: "lǐ" }, { char: "充", pinyin: "chōng" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "欢", pinyin: "huān" }, { char: "声", pinyin: "shēng" }, { char: "笑", pinyin: "xiào" }, { char: "语", pinyin: "yǔ" }]
  },
  "虫": {
    pinyin: "chóng",
    structure: "独体字",
    composition: "虫",
    compositionParts: [{ char: "虫", pinyin: "chóng" }],
    memoryTip: "像条小虫，昆虫害虫。",
    words: [{ word: "昆虫", pinyin: "kūn chóng" }, { word: "害虫", pinyin: "hài chóng" }],
    sentenceData: [{ char: "菜", pinyin: "cài" }, { char: "叶", pinyin: "yè" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "小", pinyin: "xiǎo" }, { char: "虫", pinyin: "chóng" }]
  },
  "崇": {
    pinyin: "chóng",
    structure: "上下结构",
    composition: "山 + 宗",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "宗", pinyin: "zōng" }],
    memoryTip: "山字加宗，崇高崇拜。",
    words: [{ word: "崇高", pinyin: "chóng gāo" }, { word: "崇拜", pinyin: "chóng bài" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "崇", pinyin: "chóng" }, { char: "拜", pinyin: "bài" }, { char: "英", pinyin: "yīng" }, { char: "雄", pinyin: "xióng" }]
  },
  "抽": {
    pinyin: "chōu",
    structure: "左右结构",
    composition: "扌 + 由",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "由", pinyin: "yóu" }],
    memoryTip: "提手旁加由，抽签抽出。",
    words: [{ word: "抽签", pinyin: "chōu qiān" }, { word: "抽出", pinyin: "chōu chū" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "从", pinyin: "cóng" }, { char: "盒", pinyin: "hé" }, { char: "子", pinyin: "zi" }, { char: "里", pinyin: "lǐ" }, { char: "抽", pinyin: "chōu" }, { char: "出", pinyin: "chū" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "纸", pinyin: "zhǐ" }]
  },
  "愁": {
    pinyin: "chóu",
    structure: "上下结构",
    composition: "秋 + 心",
    compositionParts: [{ char: "秋", pinyin: "qiū" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "秋字加心，发愁忧愁。",
    words: [{ word: "发愁", pinyin: "fā chóu" }, { word: "忧愁", pinyin: "yōu chóu" }],
    sentenceData: [{ char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "前", pinyin: "qián" }, { char: "我", pinyin: "wǒ" }, { char: "总", pinyin: "zǒng" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "发", pinyin: "fā" }, { char: "愁", pinyin: "chóu" }]
  },
  "筹": {
    pinyin: "chóu",
    structure: "左右结构",
    composition: "竹 + 寿",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "寿", pinyin: "shòu" }],
    memoryTip: "竹字头加寿，筹划筹款。",
    words: [{ word: "筹划", pinyin: "chóu huà" }, { word: "筹款", pinyin: "chóu kuǎn" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "筹", pinyin: "chóu" }, { char: "划", pinyin: "huà" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "会", pinyin: "huì" }]
  },
  "绸": {
    pinyin: "chóu",
    structure: "左右结构",
    composition: "纟 + 周",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "周", pinyin: "zhōu" }],
    memoryTip: "绞丝旁加周，丝绸绸缎。",
    words: [{ word: "丝绸", pinyin: "sī chóu" }, { word: "绸缎", pinyin: "chóu duàn" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "件", pinyin: "jiàn" }, { char: "丝", pinyin: "sī" }, { char: "绸", pinyin: "chóu" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "丑": {
    pinyin: "chǒu",
    structure: "独体字",
    composition: "丑",
    compositionParts: [{ char: "丑", pinyin: "chǒu" }],
    memoryTip: "像手指弯曲，丑陋小丑。",
    words: [{ word: "丑陋", pinyin: "chǒu lòu" }, { word: "小丑", pinyin: "xiǎo chǒu" }],
    sentenceData: [{ char: "马", pinyin: "mǎ" }, { char: "戏", pinyin: "xì" }, { char: "团", pinyin: "tuán" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "小", pinyin: "xiǎo" }, { char: "丑", pinyin: "chǒu" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "得", pinyin: "de" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "有", pinyin: "yǒu" }, { char: "趣", pinyin: "qù" }]
  },
  "瞅": {
    pinyin: "chǒu",
    structure: "左右结构",
    composition: "目 + 秋",
    compositionParts: [{ char: "目", pinyin: "mù" }, { char: "秋", pinyin: "qiū" }],
    memoryTip: "目字旁加秋，瞅瞅瞅见。",
    words: [{ word: "瞅瞅", pinyin: "chǒu chǒu" }, { word: "瞅见", pinyin: "chǒu jiàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "瞅", pinyin: "chǒu" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "眼", pinyin: "yǎn" }, { char: "桌", pinyin: "zhuō" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "书", pinyin: "shū" }]
  },
  "臭": {
    pinyin: "chòu",
    structure: "上下结构",
    composition: "自 + 犬",
    compositionParts: [{ char: "自", pinyin: "zì" }, { char: "犬", pinyin: "quǎn" }],
    memoryTip: "自字加犬，臭味臭气。",
    words: [{ word: "臭味", pinyin: "chòu wèi" }, { word: "臭气", pinyin: "chòu qì" }],
    sentenceData: [{ char: "垃", pinyin: "lā" }, { char: "圾", pinyin: "jī" }, { char: "桶", pinyin: "tǒng" }, { char: "里", pinyin: "lǐ" }, { char: "发", pinyin: "fā" }, { char: "出", pinyin: "chū" }, { char: "难", pinyin: "nán" }, { char: "闻", pinyin: "wén" }, { char: "的", pinyin: "de" }, { char: "臭", pinyin: "chòu" }, { char: "味", pinyin: "wèi" }]
  },
  "出": {
    pinyin: "chū",
    structure: "独体字",
    composition: "出",
    compositionParts: [{ char: "出", pinyin: "chū" }],
    memoryTip: "像山叠山，出去出现。",
    words: [{ word: "出去", pinyin: "chū qù" }, { word: "出现", pinyin: "chū xiàn" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "从", pinyin: "cóng" }, { char: "东", pinyin: "dōng" }, { char: "方", pinyin: "fāng" }, { char: "升", pinyin: "shēng" }, { char: "起", pinyin: "qǐ" }, { char: "了", pinyin: "le" }]
  },
  "初": {
    pinyin: "chū",
    structure: "左右结构",
    composition: "衤 + 刀",
    compositionParts: [{ char: "衤", pinyin: "yī" }, { char: "刀", pinyin: "dāo" }],
    memoryTip: "衣字旁加刀，初步初学。",
    words: [{ word: "初步", pinyin: "chū bù" }, { word: "初学", pinyin: "chū xué" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "刚", pinyin: "gāng" }, { char: "开", pinyin: "kāi" }, { char: "始", pinyin: "shǐ" }, { char: "初", pinyin: "chū" }, { char: "学", pinyin: "xué" }, { char: "英", pinyin: "yīng" }, { char: "语", pinyin: "yǔ" }, { char: "还", pinyin: "hái" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "单", pinyin: "dān" }, { char: "词", pinyin: "cí" }, { char: "不", pinyin: "bù" }, { char: "会", pinyin: "huì" }, { char: "说", pinyin: "shuō" }]
  },
  "除": {
    pinyin: "chú",
    structure: "左右结构",
    composition: "阝 + 余",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "余", pinyin: "yú" }],
    memoryTip: "耳刀旁加余，除了消除。",
    words: [{ word: "除了", pinyin: "chú le" }, { word: "消除", pinyin: "xiāo chú" }],
    sentenceData: [{ char: "除", pinyin: "chú" }, { char: "了", pinyin: "le" }, { char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "外", pinyin: "wài" }, { char: "全", pinyin: "quán" }, { char: "班", pinyin: "bān" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "都", pinyin: "dōu" }, { char: "去", pinyin: "qù" }, { char: "春", pinyin: "chūn" }, { char: "游", pinyin: "yóu" }]
  },
  "厨": {
    pinyin: "chú",
    structure: "半包围结构",
    composition: "厂 + 厨",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "厨", pinyin: "chú" }],
    memoryTip: "厂字加厨，厨房厨师。",
    words: [{ word: "厨房", pinyin: "chú fáng" }, { word: "厨师", pinyin: "chú shī" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "在", pinyin: "zài" }, { char: "厨", pinyin: "chú" }, { char: "房", pinyin: "fáng" }, { char: "里", pinyin: "lǐ" }, { char: "做", pinyin: "zuò" }, { char: "饭", pinyin: "fàn" }]
  },
  "础": {
    pinyin: "chǔ",
    structure: "左右结构",
    composition: "石 + 出",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "出", pinyin: "chū" }],
    memoryTip: "石字旁加出，基础础石。",
    words: [{ word: "基础", pinyin: "jī chǔ" }, { word: "础石", pinyin: "chǔ shí" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "切", pinyin: "qiè" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shí" }, { char: "的", pinyin: "de" }, { char: "基", pinyin: "jī" }, { char: "础", pinyin: "chǔ" }]
  },
  "储": {
    pinyin: "chǔ",
    structure: "左右结构",
    composition: "亻 + 诸",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "诸", pinyin: "zhū" }],
    memoryTip: "单人旁加诸，储存储蓄。",
    words: [{ word: "储存", pinyin: "chǔ cún" }, { word: "储蓄", pinyin: "chǔ xù" }],
    sentenceData: [{ char: "松", pinyin: "sōng" }, { char: "鼠", pinyin: "shǔ" }, { char: "储", pinyin: "chǔ" }, { char: "存", pinyin: "cún" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "松", pinyin: "sōng" }, { char: "果", pinyin: "guǒ" }, { char: "准", pinyin: "zhǔn" }, { char: "备", pinyin: "bèi" }, { char: "过", pinyin: "guò" }, { char: "冬", pinyin: "dōng" }]
  },
  "楚": {
    pinyin: "chǔ",
    structure: "上下结构",
    composition: "林 + 疋",
    compositionParts: [{ char: "林", pinyin: "lín" }, { char: "疋", pinyin: "pǐ" }],
    memoryTip: "林字加疋，清楚楚楚。",
    words: [{ word: "清楚", pinyin: "qīng chǔ" }, { word: "楚楚", pinyin: "chǔ chǔ" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "数", pinyin: "shù" }, { char: "学", pinyin: "xué" }, { char: "题", pinyin: "tí" }, { char: "我", pinyin: "wǒ" }, { char: "算", pinyin: "suàn" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "清", pinyin: "qīng" }, { char: "楚", pinyin: "chǔ" }]
  },
  "处": {
    pinyin: "chǔ",
    structure: "半包围结构",
    composition: "夂 + 卜",
    compositionParts: [{ char: "夂", pinyin: "zhǐ" }, { char: "卜", pinyin: "bǔ" }],
    memoryTip: "夂字加卜，处理到处。",
    words: [{ word: "处理", pinyin: "chǔ lǐ" }, { word: "到处", pinyin: "dào chù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "到", pinyin: "dào" }, { char: "处", pinyin: "chù" }, { char: "游", pinyin: "yóu" }, { char: "玩", pinyin: "wán" }, { char: "看", pinyin: "kàn" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "风", pinyin: "fēng" }, { char: "景", pinyin: "jǐng" }]
  },
  "触": {
    pinyin: "chù",
    structure: "左右结构",
    composition: "角 + 虫",
    compositionParts: [{ char: "角", pinyin: "jiǎo" }, { char: "虫", pinyin: "chóng" }],
    memoryTip: "角字旁加虫，接触触摸。",
    words: [{ word: "接触", pinyin: "jiē chù" }, { word: "触摸", pinyin: "chù mō" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "地", pinyin: "de" }, { char: "触", pinyin: "chù" }, { char: "摸", pinyin: "mō" }, { char: "了", pinyin: "le" }, { char: "那", pinyin: "nà" }, { char: "朵", pinyin: "duǒ" }, { char: "花", pinyin: "huā" }]
  },
  "川": {
    pinyin: "chuān",
    structure: "独体字",
    composition: "川",
    compositionParts: [{ char: "川", pinyin: "chuān" }],
    memoryTip: "像三条流水，山川河流。",
    words: [{ word: "山川", pinyin: "shān chuān" }, { word: "河流", pinyin: "hé liú" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "山", pinyin: "shān" }, { char: "川", pinyin: "chuān" }, { char: "风", pinyin: "fēng" }, { char: "景", pinyin: "jǐng" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "美", pinyin: "měi" }]
  },
  "穿": {
    pinyin: "chuān",
    structure: "上下结构",
    composition: "穴 + 牙",
    compositionParts: [{ char: "穴", pinyin: "xué" }, { char: "牙", pinyin: "yá" }],
    memoryTip: "穴字头加牙，穿衣穿戴。",
    words: [{ word: "穿衣", pinyin: "chuān yī" }, { word: "穿戴", pinyin: "chuān dài" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "冷", pinyin: "lěng" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "穿", pinyin: "chuān" }, { char: "上", pinyin: "shàng" }, { char: "了", pinyin: "le" }, { char: "厚", pinyin: "hòu" }, { char: "外", pinyin: "wài" }, { char: "套", pinyin: "tào" }]
  },
  "传": {
    pinyin: "chuán",
    structure: "左右结构",
    composition: "亻 + 专",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "专", pinyin: "zhuān" }],
    memoryTip: "单人旁加专，传说传递。",
    words: [{ word: "传说", pinyin: "chuán shuō" }, { word: "传递", pinyin: "chuán dì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shi" }, { char: "是", pinyin: "shì" }, { char: "从", pinyin: "cóng" }, { char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "传", pinyin: "chuán" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }, { char: "的", pinyin: "de" }]
  },
  "船": {
    pinyin: "chuán",
    structure: "左右结构",
    composition: "舟 + 㕣",
    compositionParts: [{ char: "舟", pinyin: "zhōu" }, { char: "㕣", pinyin: "chuǎn" }],
    memoryTip: "舟字旁加㕣，小船轮船。",
    words: [{ word: "小船", pinyin: "xiǎo chuán" }, { word: "轮船", pinyin: "lún chuán" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "坐", pinyin: "zuò" }, { char: "船", pinyin: "chuán" }, { char: "去", pinyin: "qù" }, { char: "对", pinyin: "duì" }, { char: "岸", pinyin: "àn" }, { char: "的", pinyin: "de" }, { char: "小", pinyin: "xiǎo" }, { char: "岛", pinyin: "dǎo" }]
  },
  "喘": {
    pinyin: "chuǎn",
    structure: "左右结构",
    composition: "口 + 专",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "专", pinyin: "zhuān" }],
    memoryTip: "口字旁加专，喘气喘息。",
    words: [{ word: "喘气", pinyin: "chuǎn qì" }, { word: "喘息", pinyin: "chuǎn xī" }],
    sentenceData: [{ char: "跑", pinyin: "pǎo" }, { char: "完", pinyin: "wán" }, { char: "步", pinyin: "bù" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "大", pinyin: "dà" }, { char: "口", pinyin: "kǒu" }, { char: "喘", pinyin: "chuǎn" }, { char: "气", pinyin: "qì" }]
  },
  "串": {
    pinyin: "chuàn",
    structure: "独体字",
    composition: "串",
    compositionParts: [{ char: "串", pinyin: "chuàn" }],
    memoryTip: "两个口连着，串成一串。",
    words: [{ word: "一串", pinyin: "yī chuàn" }, { word: "串联", pinyin: "chuán lián" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "串", pinyin: "chuàn" }, { char: "糖", pinyin: "táng" }, { char: "葫", pinyin: "hú" }, { char: "芦", pinyin: "lu" }]
  },
  "窗": {
    pinyin: "chuāng",
    structure: "左右结构",
    composition: "穴 + 囱",
    compositionParts: [{ char: "穴", pinyin: "xué" }, { char: "囱", pinyin: "cōng" }],
    memoryTip: "穴字头加囱，窗户门窗。",
    words: [{ word: "窗户", pinyin: "chuāng hu" }, { word: "门窗", pinyin: "mén chuāng" }],
    sentenceData: [{ char: "阳", pinyin: "yáng" }, { char: "光", pinyin: "guāng" }, { char: "透", pinyin: "tòu" }, { char: "过", pinyin: "guò" }, { char: "窗", pinyin: "chuāng" }, { char: "户", pinyin: "hu" }, { char: "照", pinyin: "zhào" }, { char: "进", pinyin: "jìn" }, { char: "了", pinyin: "le" }, { char: "房", pinyin: "fáng" }, { char: "间", pinyin: "jiān" }]
  },
  "床": {
    pinyin: "chuáng",
    structure: "半包围结构",
    composition: "广 + 木",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "木", pinyin: "mù" }],
    memoryTip: "广字头加木，起床病床。",
    words: [{ word: "起床", pinyin: "qǐ chuáng" }, { word: "病床", pinyin: "bìng chuáng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "早", pinyin: "zǎo" }, { char: "上", pinyin: "shàng" }, { char: "六", pinyin: "liù" }, { char: "点", pinyin: "diǎn" }, { char: "起", pinyin: "qǐ" }, { char: "床", pinyin: "chuáng" }]
  },
  "闯": {
    pinyin: "chuǎng",
    structure: "半包围结构",
    composition: "门 + 马",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "马", pinyin: "mǎ" }],
    memoryTip: "门字加马，闯祸闯荡。",
    words: [{ word: "闯祸", pinyin: "chuǎng huò" }, { word: "闯荡", pinyin: "chuǎng dàng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "不", pinyin: "bù" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "闯", pinyin: "chuǎng" }, { char: "了", pinyin: "le" }, { char: "祸", pinyin: "huò" }, { char: "把", pinyin: "bǎ" }, { char: "花", pinyin: "huā" }, { char: "瓶", pinyin: "píng" }, { char: "打", pinyin: "dǎ" }, { char: "碎", pinyin: "suì" }, { char: "了", pinyin: "le" }]
  },
  "创": {
    pinyin: "chuàng",
    structure: "左右结构",
    composition: "仓 + 刂",
    compositionParts: [{ char: "仓", pinyin: "cāng" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "仓字加刀，创造创作。",
    words: [{ word: "创造", pinyin: "chuàng zào" }, { word: "创作", pinyin: "chuàng zuò" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "勤", pinyin: "qín" }, { char: "于", pinyin: "yú" }, { char: "思", pinyin: "sī" }, { char: "考", pinyin: "kǎo" }, { char: "勇", pinyin: "yǒng" }, { char: "于", pinyin: "yú" }, { char: "创", pinyin: "chuàng" }, { char: "新", pinyin: "xīn" }]
  },
  "吹": {
    pinyin: "chuī",
    structure: "左右结构",
    composition: "口 + 欠",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "口字旁加欠，吹风吹牛。",
    words: [{ word: "吹风", pinyin: "chuī fēng" }, { word: "吹牛", pinyin: "chuī niú" }],
    sentenceData: [{ char: "风", pinyin: "fēng" }, { char: "在", pinyin: "zài" }, { char: "吹", pinyin: "chuī" }, { char: "着", pinyin: "zhe" }, { char: "树", pinyin: "shù" }, { char: "叶", pinyin: "yè" }, { char: "发", pinyin: "fā" }, { char: "出", pinyin: "chū" }, { char: "沙", pinyin: "shā" }, { char: "沙", pinyin: "shā" }, { char: "声", pinyin: "shēng" }]
  },
  "垂": {
    pinyin: "chuí",
    structure: "上下结构",
    composition: "千 + 土 + 亅",
    compositionParts: [{ char: "千", pinyin: "qiān" }, { char: "土", pinyin: "tǔ" }, { char: "亅", pinyin: "jué" }],
    memoryTip: "千字加土加钩，垂直下垂。",
    words: [{ word: "垂直", pinyin: "chuí zhí" }, { word: "下垂", pinyin: "xià chuí" }],
    sentenceData: [{ char: "柳", pinyin: "liǔ" }, { char: "树", pinyin: "shù" }, { char: "的", pinyin: "de" }, { char: "枝", pinyin: "zhī" }, { char: "条", pinyin: "tiáo" }, { char: "垂", pinyin: "chuí" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }]
  },
  "锤": {
    pinyin: "chuí",
    structure: "左右结构",
    composition: "钅 + 垂",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "垂", pinyin: "chuí" }],
    memoryTip: "金字旁加垂，锤子铁锤。",
    words: [{ word: "锤子", pinyin: "chuí zi" }, { word: "铁锤", pinyin: "tiě chuí" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "用", pinyin: "yòng" }, { char: "锤", pinyin: "chuí" }, { char: "子", pinyin: "zi" }, { char: "敲", pinyin: "qiāo" }, { char: "钉", pinyin: "dīng" }, { char: "子", pinyin: "zi" }]
  },
  "春": {
    pinyin: "chūn",
    structure: "上下结构",
    composition: "三 + 人 + 日",
    compositionParts: [{ char: "三", pinyin: "sān" }, { char: "人", pinyin: "rén" }, { char: "日", pinyin: "rì" }],
    memoryTip: "三人加日，春天春节。",
    words: [{ word: "春天", pinyin: "chūn tiān" }, { word: "春节", pinyin: "chūn jié" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "花", pinyin: "huā" }, { char: "儿", pinyin: "er" }, { char: "都", pinyin: "dōu" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }]
  },
  "纯": {
    pinyin: "chún",
    structure: "左右结构",
    composition: "纟 + 屯",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "屯", pinyin: "tún" }],
    memoryTip: "绞丝旁加屯，纯洁纯真。",
    words: [{ word: "纯洁", pinyin: "chún jié" }, { word: "纯真", pinyin: "chún zhēn" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "孩", pinyin: "hái" }, { char: "的", pinyin: "de" }, { char: "眼", pinyin: "yǎn" }, { char: "神", pinyin: "shén" }, { char: "那", pinyin: "nà" }, { char: "么", pinyin: "me" }, { char: "纯", pinyin: "chún" }, { char: "真", pinyin: "zhēn" }]
  },
  "唇": {
    pinyin: "chún",
    structure: "上下结构",
    composition: "辰 + 口",
    compositionParts: [{ char: "辰", pinyin: "chén" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "辰字加口，嘴唇唇膏。",
    words: [{ word: "嘴唇", pinyin: "zuǐ chún" }, { word: "唇膏", pinyin: "chún gāo" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "风", pinyin: "fēng" }, { char: "大", pinyin: "dà" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "嘴", pinyin: "zuǐ" }, { char: "唇", pinyin: "chún" }, { char: "都", pinyin: "dōu" }, { char: "干", pinyin: "gān" }, { char: "裂", pinyin: "liè" }, { char: "了", pinyin: "le" }]
  },
  "醇": {
    pinyin: "chún",
    structure: "左右结构",
    composition: "酉 + 享",
    compositionParts: [{ char: "酉", pinyin: "yǒu" }, { char: "享", pinyin: "xiǎng" }],
    memoryTip: "酉字旁加享，醇厚香醇。",
    words: [{ word: "醇厚", pinyin: "chún hòu" }, { word: "香醇", pinyin: "xiāng chún" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "杯", pinyin: "bēi" }, { char: "牛", pinyin: "niú" }, { char: "奶", pinyin: "nǎi" }, { char: "味", pinyin: "wèi" }, { char: "道", pinyin: "dào" }, { char: "香", pinyin: "xiāng" }, { char: "醇", pinyin: "chún" }]
  },
  "词": {
    pinyin: "cí",
    structure: "左右结构",
    composition: "讠 + 司",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "司", pinyin: "sī" }],
    memoryTip: "言字旁加司，词语词典。",
    words: [{ word: "词语", pinyin: "cí yǔ" }, { word: "词典", pinyin: "cí diǎn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "更", pinyin: "gèng" }, { char: "多", pinyin: "duō" }, { char: "的", pinyin: "de" }, { char: "词", pinyin: "cí" }, { char: "语", pinyin: "yǔ" }]
  },
  "瓷": {
    pinyin: "cí",
    structure: "上下结构",
    composition: "次 + 瓦",
    compositionParts: [{ char: "次", pinyin: "cì" }, { char: "瓦", pinyin: "wǎ" }],
    memoryTip: "次字加瓦，瓷器瓷砖。",
    words: [{ word: "瓷器", pinyin: "cí qì" }, { word: "瓷砖", pinyin: "cí zhuān" }],
    sentenceData: [{ char: "博", pinyin: "bó" }, { char: "物", pinyin: "wù" }, { char: "馆", pinyin: "guǎn" }, { char: "里", pinyin: "lǐ" }, { char: "展", pinyin: "zhǎn" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "精", pinyin: "jīng" }, { char: "美", pinyin: "měi" }, { char: "的", pinyin: "de" }, { char: "瓷", pinyin: "cí" }, { char: "器", pinyin: "qì" }]
  },
  "慈": {
    pinyin: "cí",
    structure: "上下结构",
    composition: "兹 + 心",
    compositionParts: [{ char: "兹", pinyin: "zī" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "兹字加心，慈祥慈爱。",
    words: [{ word: "慈祥", pinyin: "cí xiáng" }, { word: "慈爱", pinyin: "cí ài" }],
    sentenceData: [{ char: "奶", pinyin: "nǎi" }, { char: "奶", pinyin: "nǎi" }, { char: "的", pinyin: "de" }, { char: "眼", pinyin: "yǎn" }, { char: "神", pinyin: "shén" }, { char: "那", pinyin: "nà" }, { char: "么", pinyin: "me" }, { char: "慈", pinyin: "cí" }, { char: "祥", pinyin: "xiáng" }]
  },
  "辞": {
    pinyin: "cí",
    structure: "左右结构",
    composition: "舌 + 辛",
    compositionParts: [{ char: "舌", pinyin: "shé" }, { char: "辛", pinyin: "xīn" }],
    memoryTip: "舌字旁加辛，辞去告辞。",
    words: [{ word: "辞去", pinyin: "cí qù" }, { word: "告辞", pinyin: "gào cí" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "向", pinyin: "xiàng" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "告", pinyin: "gào" }, { char: "辞", pinyin: "cí" }, { char: "后", pinyin: "hòu" }, { char: "离", pinyin: "lí" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }]
  },
  "磁": {
    pinyin: "cí",
    structure: "左右结构",
    composition: "石 + 兹",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "兹", pinyin: "zī" }],
    memoryTip: "石字旁加兹，磁铁磁场。",
    words: [{ word: "磁铁", pinyin: "cí tiě" }, { word: "磁场", pinyin: "cí chǎng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "块", pinyin: "kuài" }, { char: "磁", pinyin: "cí" }, { char: "铁", pinyin: "tiě" }, { char: "能", pinyin: "néng" }, { char: "吸", pinyin: "xī" }, { char: "住", pinyin: "zhù" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "小", pinyin: "xiǎo" }, { char: "铁", pinyin: "tiě" }, { char: "钉", pinyin: "dīng" }]
  },
  "雕": {
    pinyin: "diāo",
    structure: "左右结构",
    composition: "周 + 隹",
    compositionParts: [{ char: "周", pinyin: "zhōu" }, { char: "隹", pinyin: "zhuī" }],
    memoryTip: "周字加隹，雕刻老雕。",
    words: [{ word: "雕刻", pinyin: "diāo kè" }, { word: "老雕", pinyin: "lǎo diāo" }],
    sentenceData: [{ char: "艺", pinyin: "yì" }, { char: "术", pinyin: "shù" }, { char: "家", pinyin: "jiā" }, { char: "精", pinyin: "jīng" }, { char: "心", pinyin: "xīn" }, { char: "雕", pinyin: "diāo" }, { char: "刻", pinyin: "kè" }, { char: "了", pinyin: "le" }, { char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "雕", pinyin: "diāo" }, { char: "像", pinyin: "xiàng" }]
  },
  "此": {
    pinyin: "cǐ",
    structure: "左右结构",
    composition: "止 + 匕",
    compositionParts: [{ char: "止", pinyin: "zhǐ" }, { char: "匕", pinyin: "bǐ" }],
    memoryTip: "止字加匕，此时此地。",
    words: [{ word: "此时", pinyin: "cǐ shí" }, { word: "此地", pinyin: "cǐ dì" }],
    sentenceData: [{ char: "此", pinyin: "cǐ" }, { char: "时", pinyin: "shí" }, { char: "此", pinyin: "cǐ" }, { char: "刻", pinyin: "kè" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "珍", pinyin: "zhēn" }, { char: "惜", pinyin: "xī" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }]
  },
  "次": {
    pinyin: "cì",
    structure: "左右结构",
    composition: "二 + 欠",
    compositionParts: [{ char: "二", pinyin: "èr" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "二字加欠，次数下次。",
    words: [{ word: "次数", pinyin: "cì shù" }, { word: "下次", pinyin: "xià cì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "第", pinyin: "dì" }, { char: "一", pinyin: "yī" }, { char: "次", pinyin: "cì" }, { char: "来", pinyin: "lái" }, { char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }]
  },
  "刺": {
    pinyin: "cì",
    structure: "左右结构",
    composition: "木 + 刂",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "木字旁加刀，刺刀刺激。",
    words: [{ word: "刺刀", pinyin: "cì dāo" }, { word: "刺激", pinyin: "cì jī" }],
    sentenceData: [{ char: "玫", pinyin: "méi" }, { char: "瑰", pinyin: "gui" }, { char: "花", pinyin: "huā" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "尖", pinyin: "jiān" }, { char: "刺", pinyin: "cì" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "随", pinyin: "suí" }, { char: "便", pinyin: "biàn" }, { char: "摸", pinyin: "mō" }]
  },
  "匆": {
    pinyin: "cōng",
    structure: "上下结构",
    composition: "勿 + 心",
    compositionParts: [{ char: "勿", pinyin: "wù" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "勿字加心，匆忙匆匆。",
    words: [{ word: "匆忙", pinyin: "cōng máng" }, { word: "匆匆", pinyin: "cōng cōng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "匆", pinyin: "cōng" }, { char: "匆", pinyin: "cōng" }, { char: "吃", pinyin: "chī" }, { char: "完", pinyin: "wán" }, { char: "早", pinyin: "zǎo" }, { char: "餐", pinyin: "cān" }, { char: "就", pinyin: "jiù" }, { char: "去", pinyin: "qù" }, { char: "上", pinyin: "shàng" }, { char: "学", pinyin: "xué" }, { char: "了", pinyin: "le" }]
  },
  "葱": {
    pinyin: "cōng",
    structure: "上下结构",
    composition: "艹 + 匆",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "匆", pinyin: "cōng" }],
    memoryTip: "草字头加匆，大葱洋葱。",
    words: [{ word: "大葱", pinyin: "dà cōng" }, { word: "洋葱", pinyin: "yáng cōng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "切", pinyin: "qiē" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "些", pinyin: "xiē" }, { char: "葱", pinyin: "cōng" }, { char: "花", pinyin: "huā" }, { char: "放", pinyin: "fàng" }, { char: "在", pinyin: "zài" }, { char: "面", pinyin: "miàn" }, { char: "条", pinyin: "tiáo" }, { char: "上", pinyin: "shàng" }]
  },
  "聪": {
    pinyin: "cōng",
    structure: "左右结构",
    composition: "耳 + 总",
    compositionParts: [{ char: "耳", pinyin: "ěr" }, { char: "总", pinyin: "zǒng" }],
    memoryTip: "耳字旁加总，聪明听力。",
    words: [{ word: "聪明", pinyin: "cōng míng" }, { word: "听力", pinyin: "tīng lì" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "红", pinyin: "hóng" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "gè" }, { char: "聪", pinyin: "cōng" }, { char: "明", pinyin: "míng" }, { char: "的", pinyin: "de" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "成", pinyin: "chéng" }, { char: "绩", pinyin: "jì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "从": {
    pinyin: "cóng",
    structure: "左右结构",
    composition: "人 + 人",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "人", pinyin: "rén" }],
    memoryTip: "两个人一起，从来跟从。",
    words: [{ word: "从来", pinyin: "cóng lái" }, { word: "跟从", pinyin: "gēn cóng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "从", pinyin: "cóng" }, { char: "小", pinyin: "xiǎo" }, { char: "就", pinyin: "jiù" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "读", pinyin: "dú" }, { char: "书", pinyin: "shū" }]
  },
  "丛": {
    pinyin: "cóng",
    structure: "上下结构",
    composition: "人 + 一 + 人",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "一", pinyin: "yī" }, { char: "人", pinyin: "rén" }],
    memoryTip: "一人加一人，草丛花丛。",
    words: [{ word: "草丛", pinyin: "cǎo cóng" }, { word: "花丛", pinyin: "huā cóng" }],
    sentenceData: [{ char: "蝴", pinyin: "hú" }, { char: "蝶", pinyin: "dié" }, { char: "在", pinyin: "zài" }, { char: "花", pinyin: "huā" }, { char: "丛", pinyin: "cóng" }, { char: "中", pinyin: "zhōng" }, { char: "飞", pinyin: "fēi" }, { char: "舞", pinyin: "wǔ" }]
  },
  "凑": {
    pinyin: "còu",
    structure: "左右结构",
    composition: "冫 + 奏",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "奏", pinyin: "zòu" }],
    memoryTip: "两点水加奏，凑巧凑合。",
    words: [{ word: "凑巧", pinyin: "còu qiǎo" }, { word: "凑合", pinyin: "còu he" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "凑", pinyin: "còu" }, { char: "钱", pinyin: "qián" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "新", pinyin: "xīn" }, { char: "篮", pinyin: "lán" }, { char: "球", pinyin: "qiú" }]
  },
  "粗": {
    pinyin: "cū",
    structure: "左右结构",
    composition: "米 + 且",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "且", pinyin: "qiě" }],
    memoryTip: "米字旁加且，粗心粗细。",
    words: [{ word: "粗心", pinyin: "cū xīn" }, { word: "粗细", pinyin: "cū xì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "根", pinyin: "gēn" }, { char: "树", pinyin: "shù" }, { char: "很", pinyin: "hěn" }, { char: "粗", pinyin: "cū" }, { char: "我", pinyin: "wǒ" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "人", pinyin: "rén" }, { char: "抱", pinyin: "bào" }, { char: "不", pinyin: "bù" }, { char: "住", pinyin: "zhù" }]
  },
  "促": {
    pinyin: "cù",
    structure: "左右结构",
    composition: "亻 + 足",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "足", pinyin: "zú" }],
    memoryTip: "单人旁加足，促进督促。",
    words: [{ word: "促进", pinyin: "cù jìn" }, { word: "督促", pinyin: "dū cù" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "促", pinyin: "cù" }, { char: "进", pinyin: "jìn" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "多", pinyin: "duō" }, { char: "读", pinyin: "dú" }, { char: "书", pinyin: "shū" }]
  },
  "催": {
    pinyin: "cuī",
    structure: "左右结构",
    composition: "亻 + 崔",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "崔", pinyin: "cuī" }],
    memoryTip: "单人旁加崔，催促催眠。",
    words: [{ word: "催促", pinyin: "cuī cù" }, { word: "催眠", pinyin: "cuī mián" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "催", pinyin: "cuī" }, { char: "我", pinyin: "wǒ" }, { char: "赶", pinyin: "gǎn" }, { char: "紧", pinyin: "jǐn" }, { char: "写", pinyin: "xiě" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }]
  },
  "脆": {
    pinyin: "cuì",
    structure: "左右结构",
    composition: "月 + 危",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "危", pinyin: "wēi" }],
    memoryTip: "月字旁加危，脆弱清脆。",
    words: [{ word: "脆弱", pinyin: "cuì ruò" }, { word: "清脆", pinyin: "qīng cuì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "很", pinyin: "hěn" }, { char: "脆", pinyin: "cuì" }, { char: "咬", pinyin: "yǎo" }, { char: "一", pinyin: "yī" }, { char: "口", pinyin: "kǒu" }, { char: "就", pinyin: "jiù" }, { char: "碎", pinyin: "suì" }, { char: "了", pinyin: "le" }]
  },
  "翠": {
    pinyin: "cuì",
    structure: "上下结构",
    composition: "羽 + 卒",
    compositionParts: [{ char: "羽", pinyin: "yǔ" }, { char: "卒", pinyin: "zú" }],
    memoryTip: "羽字加卒，翠绿翡翠。",
    words: [{ word: "翠绿", pinyin: "cuì lǜ" }, { word: "翡翠", pinyin: "fěi cuì" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "竹", pinyin: "zhú" }, { char: "子", pinyin: "zi" }, { char: "长", pinyin: "zhǎng" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "翠", pinyin: "cuì" }, { char: "绿", pinyin: "lǜ" }, { char: "的", pinyin: "de" }, { char: "新", pinyin: "xīn" }, { char: "芽", pinyin: "yá" }]
  },
  "村": {
    pinyin: "cūn",
    structure: "左右结构",
    composition: "木 + 寸",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "木字旁加寸，村庄农村。",
    words: [{ word: "村庄", pinyin: "cūn zhuāng" }, { word: "农村", pinyin: "nóng cūn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "农", pinyin: "nóng" }, { char: "村", pinyin: "cūn" }, { char: "体", pinyin: "tǐ" }, { char: "验", pinyin: "yàn" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }]
  },
  "存": {
    pinyin: "cún",
    structure: "半包围结构",
    composition: "才 + 子",
    compositionParts: [{ char: "才", pinyin: "cái" }, { char: "子", pinyin: "zi" }],
    memoryTip: "才字加子，存在保存。",
    words: [{ word: "存在", pinyin: "cún zài" }, { word: "保存", pinyin: "bǎo cún" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "把", pinyin: "bǎ" }, { char: "零", pinyin: "líng" }, { char: "食", pinyin: "shí" }, { char: "钱", pinyin: "qián" }, { char: "存", pinyin: "cún" }, { char: "在", pinyin: "zài" }, { char: "银", pinyin: "yín" }, { char: "行", pinyin: "háng" }, { char: "里", pinyin: "lǐ" }]
  },
  "寸": {
    pinyin: "cùn",
    structure: "独体字",
    composition: "寸",
    compositionParts: [{ char: "寸", pinyin: "cùn" }],
    memoryTip: "像带点的尺，尺寸分寸。",
    words: [{ word: "尺寸", pinyin: "chǐ cùn" }, { word: "分寸", pinyin: "fēn cùn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }, { char: "的", pinyin: "de" }, { char: "尺", pinyin: "chǐ" }, { char: "寸", pinyin: "cùn" }, { char: "正", pinyin: "zhèng" }, { char: "合", pinyin: "hé" }, { char: "适", pinyin: "shì" }]
  },
  "措": {
    pinyin: "cuò",
    structure: "左右结构",
    composition: "扌 + 昔",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "提手旁加昔，措施举措。",
    words: [{ word: "措施", pinyin: "cuò shī" }, { word: "举措", pinyin: "jǔ cuò" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "采", pinyin: "cǎi" }, { char: "取", pinyin: "qǔ" }, { char: "了", pinyin: "le" }, { char: "新", pinyin: "xīn" }, { char: "的", pinyin: "de" }, { char: "安", pinyin: "ān" }, { char: "全", pinyin: "quán" }, { char: "措", pinyin: "cuò" }, { char: "施", pinyin: "shī" }]
  },
  "错": {
    pinyin: "cuò",
    structure: "左右结构",
    composition: "钅 + 昔",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "金字旁加昔，错误交错。",
    words: [{ word: "错误", pinyin: "cuò wù" }, { word: "交错", pinyin: "jiāo cuò" }],
    sentenceData: [{ char: "做", pinyin: "zuò" }, { char: "错", pinyin: "cuò" }, { char: "了", pinyin: "le" }, { char: "题", pinyin: "tí" }, { char: "目", pinyin: "mù" }, { char: "要", pinyin: "yào" }, { char: "及", pinyin: "jí" }, { char: "时", pinyin: "shí" }, { char: "改", pinyin: "gǎi" }, { char: "正", pinyin: "zhèng" }]
  },
  "搭": {
    pinyin: "dā",
    structure: "左右结构",
    composition: "扌 + 合",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "合", pinyin: "hé" }],
    memoryTip: "提手旁加合，搭配搭桥。",
    words: [{ word: "搭配", pinyin: "dā pèi" }, { word: "搭桥", pinyin: "dā qiáo" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "河", pinyin: "hé" }, { char: "上", pinyin: "shàng" }, { char: "搭", pinyin: "dā" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "座", pinyin: "zuò" }, { char: "桥", pinyin: "qiáo" }]
  },
  "达": {
    pinyin: "dá",
    structure: "半包围结构",
    composition: "辶 + 大",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "大", pinyin: "dà" }],
    memoryTip: "走之底加大，到达达到。",
    words: [{ word: "到达", pinyin: "dào dá" }, { word: "达到", pinyin: "dá dào" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "终", pinyin: "zhōng" }, { char: "于", pinyin: "yú" }, { char: "到", pinyin: "dào" }, { char: "达", pinyin: "dá" }, { char: "了", pinyin: "le" }, { char: "目", pinyin: "mù" }, { char: "的", pinyin: "地" }]
  },
  "答": {
    pinyin: "dá",
    structure: "上下结构",
    composition: "竹 + 合",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "合", pinyin: "hé" }],
    memoryTip: "竹字头加合，回答问答。",
    words: [{ word: "回答", pinyin: "huí dá" }, { word: "问答", pinyin: "wèn dá" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "提", pinyin: "tí" }, { char: "问", pinyin: "wèn" }, { char: "的", pinyin: "de" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }, { char: "我", pinyin: "wǒ" }, { char: "能", pinyin: "néng" }, { char: "回", pinyin: "huí" }, { char: "答", pinyin: "dá" }]
  },
  "打": {
    pinyin: "dǎ",
    structure: "左右结构",
    composition: "扌 + 丁",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "丁", pinyin: "dīng" }],
    memoryTip: "提手旁加丁，打人打球。",
    words: [{ word: "打球", pinyin: "dǎ qiú" }, { word: "打人", pinyin: "dǎ rén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "在", pinyin: "zài" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "上", pinyin: "shàng" }, { char: "打", pinyin: "dǎ" }, { char: "球", pinyin: "qiú" }]
  },
  "大": {
    pinyin: "dà",
    structure: "独体字",
    composition: "大",
    compositionParts: [{ char: "大", pinyin: "dà" }],
    memoryTip: "一人张开双臂，表示大。",
    words: [{ word: "大家", pinyin: "dà jiā" }, { word: "大小", pinyin: "dà xiǎo" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "西", pinyin: "xī" }, { char: "瓜", pinyin: "guā" }, { char: "真", pinyin: "zhēn" }, { char: "大", pinyin: "dà" }, { char: "啊", pinyin: "a" }]
  },
  "呆": {
    pinyin: "dāi",
    structure: "上下结构",
    composition: "口 + 木",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "木", pinyin: "mù" }],
    memoryTip: "口字加木，呆呆发呆。",
    words: [{ word: "发呆", pinyin: "fā dāi" }, { word: "呆子", pinyin: "dāi zi" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "坐", pinyin: "zuò" }, { char: "在", pinyin: "zài" }, { char: "窗", pinyin: "chuāng" }, { char: "前", pinyin: "qián" }, { char: "发", pinyin: "fā" }, { char: "呆", pinyin: "dāi" }]
  },
  "带": {
    pinyin: "dài",
    structure: "上下结构",
    composition: "一 + 巾",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "一字加巾，带子带领。",
    words: [{ word: "带领", pinyin: "dài lǐng" }, { word: "带子", pinyin: "dài zi" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "带", pinyin: "dài" }, { char: "领", pinyin: "lǐng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "参", pinyin: "cān" }, { char: "观", pinyin: "guān" }, { char: "博", pinyin: "bó" }, { char: "物", pinyin: "wù" }, { char: "馆", pinyin: "guǎn" }]
  },
  "待": {
    pinyin: "dāi",
    structure: "左右结构",
    composition: "彳 + 寺",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "寺", pinyin: "sì" }],
    memoryTip: "双人旁加寺，等待招待。",
    words: [{ word: "等待", pinyin: "děng dài" }, { word: "招待", pinyin: "zhāo dài" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "在", pinyin: "zài" }, { char: "车", pinyin: "chē" }, { char: "站", pinyin: "zhàn" }, { char: "等", pinyin: "děng" }, { char: "待", pinyin: "dài" }, { char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "回", pinyin: "huí" }, { char: "家", pinyin: "jiā" }]
  },
  "袋": {
    pinyin: "dài",
    structure: "上下结构",
    composition: "代 + 衣",
    compositionParts: [{ char: "代", pinyin: "dài" }, { char: "衣", pinyin: "yī" }],
    memoryTip: "代字加衣，口袋袋子。",
    words: [{ word: "口袋", pinyin: "kǒu dài" }, { word: "袋子", pinyin: "dài zi" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "大", pinyin: "dà" }, { char: "袋", pinyin: "dài" }, { char: "水", pinyin: "shuǐ" }, { char: "果", pinyin: "guǒ" }]
  },
  "担": {
    pinyin: "dān",
    structure: "左右结构",
    composition: "扌 + 旦",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "旦", pinyin: "dàn" }],
    memoryTip: "提手旁加旦，担心担当。",
    words: [{ word: "担心", pinyin: "dān xīn" }, { word: "担当", pinyin: "dān dāng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "总", pinyin: "zǒng" }, { char: "是", pinyin: "shì" }, { char: "担", pinyin: "dān" }, { char: "心", pinyin: "xīn" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "单": {
    pinyin: "dān",
    structure: "上下结构",
    composition: "丷 + 甲",
    compositionParts: [{ char: "丷", pinyin: "bā" }, { char: "甲", pinyin: "jiǎ" }],
    memoryTip: "八字头加甲，简单名单。",
    words: [{ word: "简单", pinyin: "jiǎn dān" }, { word: "名单", pinyin: "míng dān" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "数", pinyin: "shù" }, { char: "学", pinyin: "xué" }, { char: "题", pinyin: "tí" }, { char: "很", pinyin: "hěn" }, { char: "简", pinyin: "jiǎn" }, { char: "单", pinyin: "dān" }]
  },
  "胆": {
    pinyin: "dǎn",
    structure: "左右结构",
    composition: "月 + 旦",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "旦", pinyin: "dàn" }],
    memoryTip: "月字旁加旦，胆子大胆。",
    words: [{ word: "胆子", pinyin: "dǎn zi" }, { word: "大胆", pinyin: "dà dǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "胆", pinyin: "dǎn" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "大", pinyin: "dà" }, { char: "敢", pinyin: "gǎn" }, { char: "于", pinyin: "yú" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }]
  },
  "但": {
    pinyin: "dàn",
    structure: "左右结构",
    composition: "亻 + 旦",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "旦", pinyin: "dàn" }],
    memoryTip: "单人旁加旦，但是但是。",
    words: [{ word: "但是", pinyin: "dàn shì" }, { word: "不但", pinyin: "bù dàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "想", pinyin: "xiǎng" }, { char: "去", pinyin: "qù" }, { char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "玩", pinyin: "wán" }, { char: "但", pinyin: "dàn" }, { char: "是", pinyin: "shì" }, { char: "要", pinyin: "yào" }, { char: "先", pinyin: "xiān" }, { char: "写", pinyin: "xiě" }, { char: "完", pinyin: "wán" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }]
  },
  "弹": {
    pinyin: "tán",
    structure: "左右结构",
    composition: "弓 + 单",
    compositionParts: [{ char: "弓", pinyin: "gōng" }, { char: "单", pinyin: "dān" }],
    memoryTip: "弓字旁加单，弹琴弹力。",
    words: [{ word: "弹琴", pinyin: "tán qín" }, { word: "弹力", pinyin: "tán lì" }],
    sentenceData: [{ char: "姐", pinyin: "jiě" }, { char: "姐", pinyin: "jiě" }, { char: "会", pinyin: "huì" }, { char: "弹", pinyin: "tán" }, { char: "钢", pinyin: "gāng" }, { char: "琴", pinyin: "qín" }]
  },
  "蛋": {
    pinyin: "dàn",
    structure: "上下结构",
    composition: "疋 + 虫",
    compositionParts: [{ char: "疋", pinyin: "pǐ" }, { char: "虫", pinyin: "chóng" }],
    memoryTip: "疋字加虫，鸡蛋蛋糕。",
    words: [{ word: "鸡蛋", pinyin: "jī dàn" }, { word: "蛋糕", pinyin: "dàn gāo" }],
    sentenceData: [{ char: "早", pinyin: "zǎo" }, { char: "餐", pinyin: "cān" }, { char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "鸡", pinyin: "jī" }, { char: "蛋", pinyin: "dàn" }]
  },
  "当": {
    pinyin: "dāng",
    structure: "上下结构",
    composition: "尚 + 田",
    compositionParts: [{ char: "尚", pinyin: "shàng" }, { char: "田", pinyin: "tián" }],
    memoryTip: "尚字加田，当时当然。",
    words: [{ word: "当时", pinyin: "dāng shí" }, { word: "当然", pinyin: "dāng rán" }],
    sentenceData: [{ char: "当", pinyin: "dāng" }, { char: "时", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }, { char: "还", pinyin: "hái" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "小", pinyin: "xiǎo" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }]
  },
  "挡": {
    pinyin: "dǎng",
    structure: "左右结构",
    composition: "扌 + 当",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "当", pinyin: "dāng" }],
    memoryTip: "提手旁加当，抵挡阻挡。",
    words: [{ word: "抵挡", pinyin: "dǐ dǎng" }, { word: "阻挡", pinyin: "zǔ dǎng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "树", pinyin: "shù" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "挡", pinyin: "dǎng" }, { char: "住", pinyin: "zhù" }, { char: "风", pinyin: "fēng" }]
  },
  "刀": {
    pinyin: "dāo",
    structure: "独体字",
    composition: "刀",
    compositionParts: [{ char: "刀", pinyin: "dāo" }],
    memoryTip: "一把刀的形状，刀子刀剑。",
    words: [{ word: "刀子", pinyin: "dāo zi" }, { word: "刀剑", pinyin: "dāo jiàn" }],
    sentenceData: [{ char: "厨", pinyin: "chú" }, { char: "房", pinyin: "fáng" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "把", pinyin: "bǎ" }, { char: "菜", pinyin: "cài" }, { char: "刀", pinyin: "dāo" }]
  },
  "导": {
    pinyin: "dǎo",
    structure: "上下结构",
    composition: "巳 + 寸",
    compositionParts: [{ char: "巳", pinyin: "sì" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "巳字加寸，导游领导。",
    words: [{ word: "导游", pinyin: "dǎo yóu" }, { word: "领导", pinyin: "lǐng dǎo" }],
    sentenceData: [{ char: "导", pinyin: "dǎo" }, { char: "游", pinyin: "yóu" }, { char: "带", pinyin: "dài" }, { char: "领", pinyin: "lǐng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "参", pinyin: "cān" }, { char: "观", pinyin: "guān" }, { char: "了", pinyin: "le" }, { char: "博", pinyin: "bó" }, { char: "物", pinyin: "wù" }, { char: "馆", pinyin: "guǎn" }]
  },
  "倒": {
    pinyin: "dǎo",
    structure: "左右结构",
    composition: "亻 + 到",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "到", pinyin: "dào" }],
    memoryTip: "单人旁加到，倒下摔倒。",
    words: [{ word: "倒下", pinyin: "dǎo xià" }, { word: "摔倒", pinyin: "shuāi dǎo" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "不", pinyin: "bù" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "摔", pinyin: "shuāi" }, { char: "倒", pinyin: "dǎo" }, { char: "了", pinyin: "le" }]
  },
  "岛": {
    pinyin: "dǎo",
    structure: "上下结构",
    composition: "山 + 鸟",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "鸟", pinyin: "niǎo" }],
    memoryTip: "山字加鸟，海岛岛屿。",
    words: [{ word: "海岛", pinyin: "hǎi dǎo" }, { word: "岛屿", pinyin: "dǎo yǔ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "乘", pinyin: "chéng" }, { char: "船", pinyin: "chuán" }, { char: "去", pinyin: "qù" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "海", pinyin: "hǎi" }, { char: "岛", pinyin: "dǎo" }]
  },
  "到": {
    pinyin: "dào",
    structure: "左右结构",
    composition: "至 + 刂",
    compositionParts: [{ char: "至", pinyin: "zhì" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "至字加刀，到达到处。",
    words: [{ word: "到达", pinyin: "dào dá" }, { word: "到处", pinyin: "dào chù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "终", pinyin: "zhōng" }, { char: "于", pinyin: "yú" }, { char: "到", pinyin: "dào" }, { char: "达", pinyin: "dá" }, { char: "了", pinyin: "le" }, { char: "目", pinyin: "mù" }, { char: "的", pinyin: "de" }, { char: "地", pinyin: "dì" }]
  },
  "盗": {
    pinyin: "dào",
    structure: "上下结构",
    composition: "次 + 皿",
    compositionParts: [{ char: "次", pinyin: "cì" }, { char: "皿", pinyin: "mǐn" }],
    memoryTip: "次字加皿，强盗偷盗。",
    words: [{ word: "强盗", pinyin: "qiáng dào" }, { word: "偷盗", pinyin: "tōu dào" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "抓", pinyin: "zhuā" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "偷", pinyin: "tōu" }, { char: "盗", pinyin: "dào" }]
  },
  "的": {
    pinyin: "de",
    structure: "左右结构",
    composition: "白 + 勺",
    compositionParts: [{ char: "白", pinyin: "bái" }, { char: "勺", pinyin: "sháo" }],
    memoryTip: "白字加勺，我的好的。",
    words: [{ word: "我的", pinyin: "wǒ de" }, { word: "好的", pinyin: "hǎo de" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "书", pinyin: "shū" }, { char: "包", pinyin: "bāo" }]
  },
  "得": {
    pinyin: "dé",
    structure: "左右结构",
    composition: "彳 + 㝵",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "㝵", pinyin: "dé" }],
    memoryTip: "双人旁加㝵，得到得意。",
    words: [{ word: "得到", pinyin: "dé dào" }, { word: "得意", pinyin: "dé yì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "得", pinyin: "dé" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "份", pinyin: "fèn" }, { char: "礼", pinyin: "lǐ" }, { char: "物", pinyin: "wù" }]
  },
  "灯": {
    pinyin: "dēng",
    structure: "左右结构",
    composition: "火 + 丁",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "丁", pinyin: "dīng" }],
    memoryTip: "火字旁加丁，灯光电灯。",
    words: [{ word: "灯光", pinyin: "dēng guāng" }, { word: "电灯", pinyin: "diàn dēng" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "黑", pinyin: "hēi" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "打", pinyin: "dǎ" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "电", pinyin: "diàn" }, { char: "灯", pinyin: "dēng" }]
  },
  "登": {
    pinyin: "dēng",
    structure: "上下结构",
    composition: "癶 + 豆",
    compositionParts: [{ char: "癶", pinyin: "bō" }, { char: "豆", pinyin: "dòu" }],
    memoryTip: "癶字加豆，登山登记。",
    words: [{ word: "登山", pinyin: "dēng shān" }, { word: "登记", pinyin: "dēng jì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "登", pinyin: "dēng" }, { char: "山", pinyin: "shān" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }]
  },
  "等": {
    pinyin: "děng",
    structure: "上下结构",
    composition: "竹 + 寺",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "寺", pinyin: "sì" }],
    memoryTip: "竹字头加寺，等待等等。",
    words: [{ word: "等待", pinyin: "děng dài" }, { word: "等等", pinyin: "děng děng" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "等", pinyin: "děng" }, { char: "一", pinyin: "yī" }, { char: "下", pinyin: "xià" }, { char: "我", pinyin: "wǒ" }, { char: "马", pinyin: "mǎ" }, { char: "上", pinyin: "shàng" }, { char: "就", pinyin: "jiù" }, { char: "来", pinyin: "lái" }]
  },
  "低": {
    pinyin: "dī",
    structure: "左右结构",
    composition: "亻 + 氐",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "氐", pinyin: "dī" }],
    memoryTip: "单人旁加氐，高低低头。",
    words: [{ word: "高低", pinyin: "gāo dī" }, { word: "低头", pinyin: "dī tóu" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "低", pinyin: "dī" }, { char: "着", pinyin: "zhe" }, { char: "头", pinyin: "tóu" }, { char: "在", pinyin: "zài" }, { char: "写", pinyin: "xiě" }, { char: "字", pinyin: "zì" }]
  },
  "地": {
    pinyin: "dì",
    structure: "左右结构",
    composition: "土 + 也",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "也", pinyin: "yě" }],
    memoryTip: "土字旁加也，土地地方。",
    words: [{ word: "土地", pinyin: "tǔ dì" }, { word: "地方", pinyin: "dì fang" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "片", pinyin: "piàn" }, { char: "土", pinyin: "tǔ" }, { char: "地", pinyin: "dì" }, { char: "很", pinyin: "hěn" }, { char: "肥", pinyin: "féi" }, { char: "沃", pinyin: "wò" }]
  },
  "弟": {
    pinyin: "dì",
    structure: "独体字",
    composition: "弟",
    compositionParts: [{ char: "弟", pinyin: "dì" }],
    memoryTip: "弓字加竖，弟弟兄弟。",
    words: [{ word: "弟弟", pinyin: "dì di" }, { word: "兄弟", pinyin: "xiōng dì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "弟", pinyin: "dì" }, { char: "弟", pinyin: "dì" }]
  },
  "帝": {
    pinyin: "dì",
    structure: "上下结构",
    composition: "立 + 巾",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "立字加巾，皇帝帝国。",
    words: [{ word: "皇帝", pinyin: "huáng dì" }, { word: "帝国", pinyin: "dì guó" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "皇", pinyin: "huáng" }, { char: "帝", pinyin: "dì" }, { char: "住", pinyin: "zhù" }, { char: "在", pinyin: "zài" }, { char: "宫", pinyin: "gōng" }, { char: "殿", pinyin: "diàn" }, { char: "里", pinyin: "lǐ" }]
  },
  "递": {
    pinyin: "dì",
    structure: "左右结构",
    composition: "辶 + 弟",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "弟", pinyin: "dì" }],
    memoryTip: "走之底加弟，传递递送。",
    words: [{ word: "传递", pinyin: "chuán dì" }, { word: "递送", pinyin: "dì sòng" }],
    sentenceData: [{ char: "邮", pinyin: "yóu" }, { char: "递", pinyin: "dì" }, { char: "员", pinyin: "yuán" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "递", pinyin: "dì" }, { char: "送", pinyin: "sòng" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "信", pinyin: "xìn" }, { char: "件", pinyin: "jiàn" }]
  },
  "第": {
    pinyin: "dì",
    structure: "上下结构",
    composition: "竹 + 弟",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "弟", pinyin: "dì" }],
    memoryTip: "竹字头加弟，第一第二。",
    words: [{ word: "第一", pinyin: "dì yī" }, { word: "第二", pinyin: "dì èr" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "在", pinyin: "zài" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }, { char: "中", pinyin: "zhōng" }, { char: "获", pinyin: "huò" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "第", pinyin: "dì" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }]
  },
  "点": {
    pinyin: "diǎn",
    structure: "上下结构",
    composition: "占 + 火",
    compositionParts: [{ char: "占", pinyin: "zhàn" }, { char: "火", pinyin: "huǒ" }],
    memoryTip: "占字加火，点点点头。",
    words: [{ word: "点点", pinyin: "diǎn diǎn" }, { word: "点头", pinyin: "diǎn tóu" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "点", pinyin: "diǎn" }, { char: "了", pinyin: "le" }, { char: "点", pinyin: "diǎn" }, { char: "头", pinyin: "tóu" }, { char: "表", pinyin: "biǎo" }, { char: "示", pinyin: "shì" }, { char: "同", pinyin: "tóng" }, { char: "意", pinyin: "yì" }]
  },
  "典": {
    pinyin: "diǎn",
    structure: "上下结构",
    composition: "曲 + 八",
    compositionParts: [{ char: "曲", pinyin: "qū" }, { char: "八", pinyin: "bā" }],
    memoryTip: "曲字加八，字典典礼。",
    words: [{ word: "字典", pinyin: "zì diǎn" }, { word: "典礼", pinyin: "diǎn lǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "字", pinyin: "zì" }, { char: "典", pinyin: "diǎn" }, { char: "查", pinyin: "chá" }, { char: "生", pinyin: "shēng" }, { char: "字", pinyin: "zì" }]
  },
  "电": {
    pinyin: "diàn",
    structure: "独体字",
    composition: "电",
    compositionParts: [{ char: "电", pinyin: "diàn" }],
    memoryTip: "闪电的形状，电话电视。",
    words: [{ word: "电话", pinyin: "diàn huà" }, { word: "电视", pinyin: "diàn shì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "电", pinyin: "diàn" }, { char: "话", pinyin: "huà" }, { char: "给", pinyin: "gěi" }, { char: "奶", pinyin: "nǎi" }, { char: "奶", pinyin: "nǎi" }, { char: "打", pinyin: "dǎ" }, { char: "电", pinyin: "diàn" }, { char: "话", pinyin: "huà" }]
  },
  "店": {
    pinyin: "diàn",
    structure: "半包围结构",
    composition: "广 + 占",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "占", pinyin: "zhàn" }],
    memoryTip: "广字头加占，商店书店。",
    words: [{ word: "商店", pinyin: "shāng diàn" }, { word: "书店", pinyin: "shū diàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "商", pinyin: "shāng" }, { char: "店", pinyin: "diàn" }, { char: "买", pinyin: "mǎi" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xi" }]
  },
  "垫": {
    pinyin: "diàn",
    structure: "上下结构",
    composition: "执 + 土",
    compositionParts: [{ char: "执", pinyin: "zhí" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "执字加土，垫子鞋垫。",
    words: [{ word: "垫子", pinyin: "diàn zi" }, { word: "鞋垫", pinyin: "xié diàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "给", pinyin: "gěi" }, { char: "椅", pinyin: "yǐ" }, { char: "子", pinyin: "zi" }, { char: "买", pinyin: "mǎi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "软", pinyin: "ruǎn" }, { char: "垫", pinyin: "diàn" }]
  },
  "钓": {
    pinyin: "diào",
    structure: "左右结构",
    composition: "钅 + 勺",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "勺", pinyin: "sháo" }],
    memoryTip: "金字旁加勺，钓鱼钓竿。",
    words: [{ word: "钓鱼", pinyin: "diào yú" }, { word: "钓竿", pinyin: "diào gān" }],
    sentenceData: [{ char: "爷", pinyin: "yé" }, { char: "爷", pinyin: "yé" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "在", pinyin: "zài" }, { char: "河", pinyin: "hé" }, { char: "边", pinyin: "biān" }, { char: "钓", pinyin: "diào" }, { char: "鱼", pinyin: "yú" }]
  },
  "掉": {
    pinyin: "diào",
    structure: "左右结构",
    composition: "扌 + 卓",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "卓", pinyin: "zhuó" }],
    memoryTip: "提手旁加卓，掉队掉落。",
    words: [{ word: "掉队", pinyin: "diào duì" }, { word: "掉落", pinyin: "diào luò" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }, { char: "从", pinyin: "cóng" }, { char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "掉", pinyin: "diào" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }]
  },
  "爹": {
    pinyin: "diē",
    structure: "上下结构",
    composition: "父 + 多",
    compositionParts: [{ char: "父", pinyin: "fù" }, { char: "多", pinyin: "duō" }],
    memoryTip: "父字加多，爹娘爹妈。",
    words: [{ word: "爹娘", pinyin: "diē niáng" }, { word: "爹妈", pinyin: "diē mā" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "爹", pinyin: "diē" }, { char: "妈", pinyin: "mā" }, { char: "都", pinyin: "dōu" }, { char: "很", pinyin: "hěn" }, { char: "爱", pinyin: "ài" }, { char: "我", pinyin: "wǒ" }]
  },
  "叠": {
    pinyin: "dié",
    structure: "上下结构",
    composition: "又 + 又 + 又",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "又", pinyin: "yòu" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "三个又字叠在一起，叠加叠纸。",
    words: [{ word: "叠加", pinyin: "dié jiā" }, { word: "叠纸", pinyin: "dié zhǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "美", pinyin: "měi" }, { char: "术", pinyin: "shù" }, { char: "课", pinyin: "kè" }, { char: "上", pinyin: "shàng" }, { char: "学", pinyin: "xué" }, { char: "叠", pinyin: "dié" }, { char: "纸", pinyin: "zhǐ" }]
  },
  "蝶": {
    pinyin: "dié",
    structure: "左右结构",
    composition: "虫 + 蝶",
    compositionParts: [{ char: "虫", pinyin: "chóng" }, { char: "葉", pinyin: "yè" }],
    memoryTip: "虫字旁加葉，蝴蝶蝴蝶。",
    words: [{ word: "蝴蝶", pinyin: "hú dié" }, { word: "蝶舞", pinyin: "dié wǔ" }],
    sentenceData: [{ char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "蝴", pinyin: "hú" }, { char: "蝶", pinyin: "dié" }]
  },
  "丁": {
    pinyin: "dīng",
    structure: "独体字",
    composition: "丁",
    compositionParts: [{ char: "丁", pinyin: "dīng" }],
    memoryTip: "钉子的形状，丁字园丁。",
    words: [{ word: "丁字", pinyin: "dīng zì" }, { word: "园丁", pinyin: "yuán dīng" }],
    sentenceData: [{ char: "园", pinyin: "yuán" }, { char: "丁", pinyin: "dīng" }, { char: "在", pinyin: "zài" }, { char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "辛", pinyin: "xīn" }, { char: "勤", pinyin: "qín" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }]
  },
  "盯": {
    pinyin: "dīng",
    structure: "左右结构",
    composition: "目 + 丁",
    compositionParts: [{ char: "目", pinyin: "mù" }, { char: "丁", pinyin: "dīng" }],
    memoryTip: "目字旁加丁，盯人盯着。",
    words: [{ word: "盯人", pinyin: "dīng rén" }, { word: "盯着", pinyin: "dīng zhe" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "紧", pinyin: "jǐn" }, { char: "紧", pinyin: "jǐn" }, { char: "地", pinyin: "de" }, { char: "盯", pinyin: "dīng" }, { char: "着", pinyin: "zhe" }, { char: "黑", pinyin: "hēi" }, { char: "板", pinyin: "bǎn" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "字", pinyin: "zì" }]
  },
  "顶": {
    pinyin: "dǐng",
    structure: "左右结构",
    composition: "丁 + 页",
    compositionParts: [{ char: "丁", pinyin: "dīng" }, { char: "页", pinyin: "yè" }],
    memoryTip: "丁字加页，山顶头顶。",
    words: [{ word: "山顶", pinyin: "shān dǐng" }, { word: "头顶", pinyin: "tóu dǐng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "爬", pinyin: "pá" }, { char: "上", pinyin: "shàng" }, { char: "了", pinyin: "le" }, { char: "山", pinyin: "shān" }, { char: "顶", pinyin: "dǐng" }]
  },
  "定": {
    pinyin: "dìng",
    structure: "上下结构",
    composition: "宀 + 正",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "正", pinyin: "zhèng" }],
    memoryTip: "宝盖头加正，决定决定。",
    words: [{ word: "决定", pinyin: "jué dìng" }, { word: "决定", pinyin: "jué dìng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "决", pinyin: "jué" }, { char: "定", pinyin: "dìng" }, { char: "去", pinyin: "qù" }, { char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "玩", pinyin: "wán" }]
  },
  "订": {
    pinyin: "dìng",
    structure: "左右结构",
    composition: "讠 + 丁",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "丁", pinyin: "dīng" }],
    memoryTip: "言字旁加丁，订书订阅。",
    words: [{ word: "订书", pinyin: "dìng shū" }, { word: "订阅", pinyin: "dìng yuè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "用", pinyin: "yòng" }, { char: "订", pinyin: "dìng" }, { char: "书", pinyin: "shū" }, { char: "机", pinyin: "jī" }, { char: "订", pinyin: "dìng" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }]
  },
  "丢": {
    pinyin: "diū",
    structure: "独体字",
    composition: "丢",
    compositionParts: [{ char: "丢", pinyin: "diū" }],
    memoryTip: "去字加一点，丢掉丢失。",
    words: [{ word: "丢掉", pinyin: "diū diào" }, { word: "丢失", pinyin: "diū shī" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "不", pinyin: "bù" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "丢", pinyin: "diū" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "铅", pinyin: "qiān" }, { char: "笔", pinyin: "bǐ" }]
  },
  "东": {
    pinyin: "dōng",
    structure: "独体字",
    composition: "东",
    compositionParts: [{ char: "东", pinyin: "dōng" }],
    memoryTip: "太阳从东方升起，东西东方。",
    words: [{ word: "东西", pinyin: "dōng xi" }, { word: "东方", pinyin: "dōng fāng" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "从", pinyin: "cóng" }, { char: "东", pinyin: "dōng" }, { char: "方", pinyin: "fāng" }, { char: "升", pinyin: "shēng" }, { char: "起", pinyin: "qǐ" }]
  },
  "冬": {
    pinyin: "dōng",
    structure: "上下结构",
    composition: "夂 + 冫",
    compositionParts: [{ char: "夂", pinyin: "zhǐ" }, { char: "冫", pinyin: "bīng" }],
    memoryTip: "夂字加两点，冬天冬季。",
    words: [{ word: "冬天", pinyin: "dōng tiān" }, { word: "冬季", pinyin: "dōng jì" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "很", pinyin: "hěn" }, { char: "冷", pinyin: "lěng" }, { char: "要", pinyin: "yào" }, { char: "多", pinyin: "duō" }, { char: "穿", pinyin: "chuān" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fú" }]
  },
  "懂": {
    pinyin: "dǒng",
    structure: "左右结构",
    composition: "忄 + 董",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "董", pinyin: "dǒng" }],
    memoryTip: "竖心旁加董，懂得懂了。",
    words: [{ word: "懂得", pinyin: "dǒng de" }, { word: "懂了", pinyin: "dǒng le" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "终", pinyin: "zhōng" }, { char: "于", pinyin: "yú" }, { char: "懂", pinyin: "dǒng" }, { char: "了", pinyin: "le" }, { char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "数", pinyin: "shù" }, { char: "学", pinyin: "xué" }, { char: "题", pinyin: "tí" }]
  },
  "动": {
    pinyin: "dòng",
    structure: "左右结构",
    composition: "云 + 力",
    compositionParts: [{ char: "云", pinyin: "yún" }, { char: "力", pinyin: "lì" }],
    memoryTip: "云字加力，运动动作。",
    words: [{ word: "运动", pinyin: "yùn dòng" }, { word: "动作", pinyin: "dòng zuò" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }]
  },
  "冻": {
    pinyin: "dòng",
    structure: "左右结构",
    composition: "冫 + 东",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "东", pinyin: "dōng" }],
    memoryTip: "两点水加东，冷冻结冻。",
    words: [{ word: "冷冻", pinyin: "lěng dòng" }, { word: "结冻", pinyin: "jié dòng" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "河", pinyin: "hé" }, { char: "面", pinyin: "miàn" }, { char: "结", pinyin: "jié" }, { char: "冻", pinyin: "dòng" }, { char: "了", pinyin: "le" }]
  },
  "洞": {
    pinyin: "dòng",
    structure: "左右结构",
    composition: "氵 + 同",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "同", pinyin: "tóng" }],
    memoryTip: "三点水加同，山洞洞口。",
    words: [{ word: "山洞", pinyin: "shān dòng" }, { word: "洞口", pinyin: "dòng kǒu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "山", pinyin: "shān" }, { char: "里", pinyin: "lǐ" }, { char: "发", pinyin: "fā" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "山", pinyin: "shān" }, { char: "洞", pinyin: "dòng" }]
  },
  "都": {
    pinyin: "dōu",
    structure: "左右结构",
    composition: "者 + 阝",
    compositionParts: [{ char: "者", pinyin: "zhě" }, { char: "阝", pinyin: "yì" }],
    memoryTip: "者字加耳刀，都是都好。",
    words: [{ word: "都是", pinyin: "dōu shì" }, { word: "都好", pinyin: "dōu hǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "班", pinyin: "bān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "都", pinyin: "dōu" }, { char: "很", pinyin: "hěn" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }]
  },
  "斗": {
    pinyin: "dòu",
    structure: "独体字",
    composition: "斗",
    compositionParts: [{ char: "斗", pinyin: "dòu" }],
    memoryTip: "两个点加一横，战斗奋斗。",
    words: [{ word: "战斗", pinyin: "zhàn dòu" }, { word: "奋斗", pinyin: "fèn dòu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "奋", pinyin: "fèn" }, { char: "斗", pinyin: "dòu" }]
  },
  "抖": {
    pinyin: "dǒu",
    structure: "左右结构",
    composition: "扌 + 斗",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "斗", pinyin: "dòu" }],
    memoryTip: "提手旁加斗，发抖抖动。",
    words: [{ word: "发抖", pinyin: "fā dǒu" }, { word: "抖动", pinyin: "dǒu dòng" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "冷", pinyin: "lěng" }, { char: "得", pinyin: "de" }, { char: "我", pinyin: "wǒ" }, { char: "直", pinyin: "zhí" }, { char: "发", pinyin: "fā" }, { char: "抖", pinyin: "dǒu" }]
  },
  "陡": {
    pinyin: "dǒu",
    structure: "左右结构",
    composition: "阝 + 走",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "走", pinyin: "zǒu" }],
    memoryTip: "耳刀旁加走，陡峭陡坡。",
    words: [{ word: "陡峭", pinyin: "dǒu qiào" }, { word: "陡坡", pinyin: "dǒu pō" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "很", pinyin: "hěn" }, { char: "陡", pinyin: "dǒu" }, { char: "峭", pinyin: "qiào" }]
  },
  "豆": {
    pinyin: "dòu",
    structure: "独体字",
    composition: "豆",
    compositionParts: [{ char: "豆", pinyin: "dòu" }],
    memoryTip: "豆子的形状，豆子豆腐。",
    words: [{ word: "豆子", pinyin: "dòu zi" }, { word: "豆腐", pinyin: "dòu fu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "豆", pinyin: "dòu" }, { char: "腐", pinyin: "fu" }]
  },
  "督": {
    pinyin: "dū",
    structure: "上下结构",
    composition: "叔 + 目",
    compositionParts: [{ char: "叔", pinyin: "shū" }, { char: "目", pinyin: "mù" }],
    memoryTip: "叔字加目，督促监督。",
    words: [{ word: "督促", pinyin: "dū cù" }, { word: "监督", pinyin: "jiān dū" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "督", pinyin: "dū" }, { char: "促", pinyin: "cù" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "好", pinyin: "hǎo" }, { char: "好", pinyin: "hǎo" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "毒": {
    pinyin: "dú",
    structure: "上下结构",
    composition: "主 + 毋",
    compositionParts: [{ char: "主", pinyin: "zhǔ" }, { char: "毋", pinyin: "wú" }],
    memoryTip: "主字加毋，毒药中毒。",
    words: [{ word: "毒药", pinyin: "dú yào" }, { word: "中毒", pinyin: "zhòng dú" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "种", pinyin: "zhǒng" }, { char: "毒", pinyin: "dú" }, { char: "药", pinyin: "yào" }, { char: "很", pinyin: "hěn" }, { char: "危", pinyin: "wēi" }, { char: "险", pinyin: "xiǎn" }]
  },
  "读": {
    pinyin: "dú",
    structure: "左右结构",
    composition: "讠 + 卖",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "卖", pinyin: "mài" }],
    memoryTip: "言字旁加卖，读书朗读。",
    words: [{ word: "读书", pinyin: "dú shū" }, { word: "朗读", pinyin: "lǎng dú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "读", pinyin: "dú" }, { char: "书", pinyin: "shū" }]
  },
  "独": {
    pinyin: "dú",
    structure: "左右结构",
    composition: "犭 + 虫",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "虫", pinyin: "chóng" }],
    memoryTip: "反犬旁加虫，独立单独。",
    words: [{ word: "独立", pinyin: "dú lì" }, { word: "单独", pinyin: "dān dú" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "独", pinyin: "dú" }, { char: "立", pinyin: "lì" }, { char: "思", pinyin: "sī" }, { char: "考", pinyin: "kǎo" }]
  },
  "堵": {
    pinyin: "dǔ",
    structure: "左右结构",
    composition: "土 + 者",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "者", pinyin: "zhě" }],
    memoryTip: "土字旁加者，堵住堵塞。",
    words: [{ word: "堵住", pinyin: "dǔ zhù" }, { word: "堵塞", pinyin: "dǔ sè" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "用", pinyin: "yòng" }, { char: "沙", pinyin: "shā" }, { char: "袋", pinyin: "dài" }, { char: "堵", pinyin: "dǔ" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "洪", pinyin: "hóng" }, { char: "水", pinyin: "shuǐ" }]
  },
  "赌": {
    pinyin: "dǔ",
    structure: "左右结构",
    composition: "贝 + 者",
    compositionParts: [{ char: "贝", pinyin: "bèi" }, { char: "者", pinyin: "zhě" }],
    memoryTip: "贝字旁加者，赌博赌气。",
    words: [{ word: "赌博", pinyin: "dǔ bó" }, { word: "赌气", pinyin: "dǔ qì" }],
    sentenceData: [{ char: "赌", pinyin: "dǔ" }, { char: "博", pinyin: "bó" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "种", pinyin: "zhǒng" }, { char: "不", pinyin: "bù" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "行", pinyin: "háng" }, { char: "为", pinyin: "wéi" }]
  },
  "杜": {
    pinyin: "dù",
    structure: "左右结构",
    composition: "木 + 土",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "木字旁加土，杜鹃杜绝。",
    words: [{ word: "杜鹃", pinyin: "dù juān" }, { word: "杜绝", pinyin: "dù jué" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "杜", pinyin: "dù" }, { char: "绝", pinyin: "jué" }, { char: "浪", pinyin: "làng" }, { char: "费", pinyin: "fèi" }]
  },
  "肚": {
    pinyin: "dù",
    structure: "左右结构",
    composition: "月 + 土",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "月字旁加土，肚皮肚子。",
    words: [{ word: "肚皮", pinyin: "dù pí" }, { word: "肚子", pinyin: "dù zi" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }, { char: "的", pinyin: "de" }, { char: "肚", pinyin: "dù" }, { char: "子", pinyin: "zi" }, { char: "圆", pinyin: "yuán" }, { char: "圆", pinyin: "yuán" }, { char: "的", pinyin: "de" }]
  },
  "度": {
    pinyin: "dù",
    structure: "半包围结构",
    composition: "广 + 又",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "广字头加又，温度程度。",
    words: [{ word: "温度", pinyin: "wēn dù" }, { word: "程度", pinyin: "chéng dù" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "温", pinyin: "wēn" }, { char: "度", pinyin: "dù" }, { char: "很", pinyin: "hěn" }, { char: "适", pinyin: "shì" }, { char: "宜", pinyin: "yí" }]
  },
  "渡": {
    pinyin: "dù",
    structure: "左右结构",
    composition: "氵 + 度",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "度", pinyin: "dù" }],
    memoryTip: "三点水加度，渡河渡船。",
    words: [{ word: "渡河", pinyin: "dù hé" }, { word: "渡船", pinyin: "dù chuán" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "坐", pinyin: "zuò" }, { char: "渡", pinyin: "dù" }, { char: "船", pinyin: "chuán" }, { char: "过", pinyin: "guò" }, { char: "江", pinyin: "jiāng" }, { char: "去", pinyin: "qù" }]
  },
  "端": {
    pinyin: "duān",
    structure: "左右结构",
    composition: "立 + 耑",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "耑", pinyin: "zhuān" }],
    memoryTip: "立字旁加耑，端正端碗。",
    words: [{ word: "端正", pinyin: "duān zhèng" }, { word: "端碗", pinyin: "duān wǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "坐", pinyin: "zuò" }, { char: "姿", pinyin: "zī" }, { char: "很", pinyin: "hěn" }, { char: "端", pinyin: "duān" }, { char: "正", pinyin: "zhèng" }]
  },
  "短": {
    pinyin: "duǎn",
    structure: "左右结构",
    composition: "矢 + 豆",
    compositionParts: [{ char: "矢", pinyin: "shǐ" }, { char: "豆", pinyin: "dòu" }],
    memoryTip: "矢字旁加豆，长短短跑。",
    words: [{ word: "长短", pinyin: "cháng duǎn" }, { word: "短跑", pinyin: "duǎn pǎo" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "支", pinyin: "zhī" }, { char: "铅", pinyin: "qiān" }, { char: "笔", pinyin: "bǐ" }, { char: "太", pinyin: "tài" }, { char: "短", pinyin: "duǎn" }, { char: "了", pinyin: "le" }]
  },
  "段": {
    pinyin: "duàn",
    structure: "左右结构",
    composition: "殳 + 丨",
    compositionParts: [{ char: "殳", pinyin: "shū" }, { char: "丨", pinyin: "gǔn" }],
    memoryTip: "殳字旁加竖，段落路段。",
    words: [{ word: "段落", pinyin: "duàn luò" }, { word: "路段", pinyin: "lù duàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "段", pinyin: "duàn" }, { char: "路", pinyin: "lù" }, { char: "很", pinyin: "hěn" }, { char: "难", pinyin: "nán" }, { char: "走", pinyin: "zǒu" }]
  },
  "断": {
    pinyin: "duàn",
    structure: "左右结构",
    composition: "米 + 斤",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "斤", pinyin: "jīn" }],
    memoryTip: "米字旁加斤，判断断开。",
    words: [{ word: "判断", pinyin: "pàn duàn" }, { word: "断开", pinyin: "duàn kāi" }],
    sentenceData: [{ char: "绳", pinyin: "shéng" }, { char: "子", pinyin: "zi" }, { char: "断", pinyin: "duàn" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "很", pinyin: "hěn" }, { char: "着", pinyin: "zháo" }, { char: "急", pinyin: "jí" }]
  },
  "锻": {
    pinyin: "duàn",
    structure: "左右结构",
    composition: "钅 + 段",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "段", pinyin: "duàn" }],
    memoryTip: "金字旁加段，锻炼锻造。",
    words: [{ word: "锻炼", pinyin: "duàn liàn" }, { word: "锻造", pinyin: "duàn zào" }],
    sentenceData: [{ char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "锻", pinyin: "duàn" }, { char: "炼", pinyin: "liàn" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "堆": {
    pinyin: "duī",
    structure: "左右结构",
    composition: "土 + 隹",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "隹", pinyin: "zhuī" }],
    memoryTip: "土字旁加隹，土堆堆积。",
    words: [{ word: "土堆", pinyin: "tǔ duī" }, { word: "堆积", pinyin: "duī jī" }],
    sentenceData: [{ char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "沙", pinyin: "shā" }, { char: "堆", pinyin: "duī" }, { char: "上", pinyin: "shàng" }, { char: "玩", pinyin: "wán" }]
  },
  "队": {
    pinyin: "duì",
    structure: "左右结构",
    composition: "阝 + 人",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "人", pinyin: "rén" }],
    memoryTip: "左耳旁加人，队伍排队。",
    words: [{ word: "队伍", pinyin: "duì wǔ" }, { word: "排队", pinyin: "pái duì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "排", pinyin: "pái" }, { char: "队", pinyin: "duì" }, { char: "去", pinyin: "qù" }, { char: "参", pinyin: "cān" }, { char: "观", pinyin: "guān" }, { char: "博", pinyin: "bó" }, { char: "物", pinyin: "wù" }, { char: "馆", pinyin: "guǎn" }]
  },
  "对": {
    pinyin: "duì",
    structure: "左右结构",
    composition: "又 + 寸",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "又字加寸，对面正确。",
    words: [{ word: "对面", pinyin: "duì miàn" }, { word: "正确", pinyin: "zhèng què" }],
    sentenceData: [{ char: "你", pinyin: "nǐ" }, { char: "的", pinyin: "de" }, { char: "答", pinyin: "dá" }, { char: "案", pinyin: "àn" }, { char: "很", pinyin: "hěn" }, { char: "正", pinyin: "zhèng" }, { char: "确", pinyin: "què" }]
  },
  "吨": {
    pinyin: "dūn",
    structure: "左右结构",
    composition: "口 + 屯",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "屯", pinyin: "tún" }],
    memoryTip: "口字旁加屯，吨位一吨。",
    words: [{ word: "吨位", pinyin: "dūn wèi" }, { word: "一吨", pinyin: "yī dūn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "辆", pinyin: "liàng" }, { char: "卡", pinyin: "kǎ" }, { char: "车", pinyin: "chē" }, { char: "能", pinyin: "néng" }, { char: "装", pinyin: "zhuāng" }, { char: "五", pinyin: "wǔ" }, { char: "吨", pinyin: "dūn" }, { char: "货", pinyin: "huò" }]
  },
  "敦": {
    pinyin: "dūn",
    structure: "左右结构",
    composition: "享 + 攵",
    compositionParts: [{ char: "享", pinyin: "xiǎng" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "享字旁加攵，敦厚伦敦。",
    words: [{ word: "敦厚", pinyin: "dūn hòu" }, { word: "伦敦", pinyin: "lún dūn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "为", pinyin: "wéi" }, { char: "人", pinyin: "rén" }, { char: "敦", pinyin: "dūn" }, { char: "厚", pinyin: "hòu" }, { char: "老", pinyin: "lǎo" }, { char: "实", pinyin: "shi" }]
  },
  "蹲": {
    pinyin: "dūn",
    structure: "左右结构",
    composition: "足 + 尊",
    compositionParts: [{ char: "足", pinyin: "zú" }, { char: "尊", pinyin: "zūn" }],
    memoryTip: "足字旁加尊，蹲下蹲点。",
    words: [{ word: "蹲下", pinyin: "dūn xià" }, { word: "蹲点", pinyin: "dūn diǎn" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }, { char: "蹲", pinyin: "dūn" }, { char: "在", pinyin: "zài" }, { char: "墙", pinyin: "qiáng" }, { char: "角", pinyin: "jiǎo" }, { char: "等", pinyin: "děng" }, { char: "老", pinyin: "lǎo" }, { char: "鼠", pinyin: "shǔ" }]
  },
  "盾": {
    pinyin: "dùn",
    structure: "半包围结构",
    composition: "厂 + 十 + 目",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "十", pinyin: "shí" }, { char: "目", pinyin: "mù" }],
    memoryTip: "厂字头加十目，盾牌矛盾。",
    words: [{ word: "盾牌", pinyin: "dùn pái" }, { word: "矛盾", pinyin: "máo dùn" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "战", pinyin: "zhàn" }, { char: "士", pinyin: "shì" }, { char: "手", pinyin: "shǒu" }, { char: "拿", pinyin: "ná" }, { char: "着", pinyin: "zhe" }, { char: "盾", pinyin: "dùn" }, { char: "牌", pinyin: "pái" }]
  },
  "顿": {
    pinyin: "dùn",
    structure: "左右结构",
    composition: "屯 + 页",
    compositionParts: [{ char: "屯", pinyin: "tún" }, { char: "页", pinyin: "yè" }],
    memoryTip: "屯字旁加页，顿时停顿。",
    words: [{ word: "顿时", pinyin: "dùn shí" }, { word: "停顿", pinyin: "tíng dùn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "说", pinyin: "shuō" }, { char: "话", pinyin: "huà" }, { char: "时", pinyin: "shí" }, { char: "常", pinyin: "cháng" }, { char: "有", pinyin: "yǒu" }, { char: "停", pinyin: "tíng" }, { char: "顿", pinyin: "dùn" }]
  },
  "多": {
    pinyin: "duō",
    structure: "上下结构",
    composition: "夕 + 夕",
    compositionParts: [{ char: "夕", pinyin: "xī" }, { char: "夕", pinyin: "xī" }],
    memoryTip: "两个夕字，多少多好。",
    words: [{ word: "多少", pinyin: "duō shǎo" }, { word: "多好", pinyin: "duō hǎo" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "星", pinyin: "xīng" }, { char: "星", pinyin: "xīng" }, { char: "真", pinyin: "zhēn" }, { char: "多", pinyin: "duō" }]
  },
  "夺": {
    pinyin: "duó",
    structure: "上下结构",
    composition: "大 + 寸",
    compositionParts: [{ char: "大", pinyin: "dà" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "大字加寸，夺取抢夺。",
    words: [{ word: "夺取", pinyin: "duó qǔ" }, { word: "抢夺", pinyin: "qiǎng duó" }],
    sentenceData: [{ char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "员", pinyin: "yuán" }, { char: "夺", pinyin: "duó" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "冠", pinyin: "guān" }, { char: "军", pinyin: "jūn" }]
  },
  "朵": {
    pinyin: "duǒ",
    structure: "上下结构",
    composition: "几 + 木",
    compositionParts: [{ char: "几", pinyin: "jī" }, { char: "木", pinyin: "mù" }],
    memoryTip: "几字加木，花朵一朵。",
    words: [{ word: "花朵", pinyin: "huā duǒ" }, { word: "一朵", pinyin: "yī duǒ" }],
    sentenceData: [{ char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "朵", pinyin: "duǒ" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }]
  },
  "躲": {
    pinyin: "duǒ",
    structure: "左右结构",
    composition: "身 + 朵",
    compositionParts: [{ char: "身", pinyin: "shēn" }, { char: "朵", pinyin: "duǒ" }],
    memoryTip: "身字旁加朵，躲藏躲开。",
    words: [{ word: "躲藏", pinyin: "duǒ cáng" }, { word: "躲开", pinyin: "duǒ kāi" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "兔", pinyin: "tù" }, { char: "躲", pinyin: "duǒ" }, { char: "在", pinyin: "zài" }, { char: "草", pinyin: "cǎo" }, { char: "丛", pinyin: "cóng" }, { char: "里", pinyin: "lǐ" }]
  },
  "俄": {
    pinyin: "é",
    structure: "左右结构",
    composition: "亻 + 我",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "我", pinyin: "wǒ" }],
    memoryTip: "单人旁加我，俄国俄语。",
    words: [{ word: "俄国", pinyin: "é guó" }, { word: "俄语", pinyin: "é yǔ" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "俄", pinyin: "é" }, { char: "国", pinyin: "guó" }, { char: "人", pinyin: "rén" }, { char: "会", pinyin: "huì" }, { char: "说", pinyin: "shuō" }, { char: "俄", pinyin: "é" }, { char: "语", pinyin: "yǔ" }]
  },
  "鹅": {
    pinyin: "é",
    structure: "左右结构",
    composition: "我 + 鸟",
    compositionParts: [{ char: "我", pinyin: "wǒ" }, { char: "鸟", pinyin: "niǎo" }],
    memoryTip: "我字加鸟，天鹅白鹅。",
    words: [{ word: "天鹅", pinyin: "tiān é" }, { word: "白鹅", pinyin: "bái é" }],
    sentenceData: [{ char: "池", pinyin: "chí" }, { char: "塘", pinyin: "táng" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "群", pinyin: "qún" }, { char: "白", pinyin: "bái" }, { char: "鹅", pinyin: "é" }]
  },
  "额": {
    pinyin: "é",
    structure: "左右结构",
    composition: "客 + 页",
    compositionParts: [{ char: "客", pinyin: "kè" }, { char: "页", pinyin: "yè" }],
    memoryTip: "客字旁加页，额头名额。",
    words: [{ word: "额头", pinyin: "é tóu" }, { word: "名额", pinyin: "míng é" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "额", pinyin: "é" }, { char: "头", pinyin: "tóu" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "汗", pinyin: "hàn" }, { char: "珠", pinyin: "zhū" }]
  },
  "恶": {
    pinyin: "è",
    structure: "上下结构",
    composition: "亚 + 心",
    compositionParts: [{ char: "亚", pinyin: "yà" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "亚字加心，恶劣善恶。",
    words: [{ word: "恶劣", pinyin: "è liè" }, { word: "善恶", pinyin: "shàn è" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "分", pinyin: "fēn" }, { char: "清", pinyin: "qīng" }, { char: "善", pinyin: "shàn" }, { char: "恶", pinyin: "è" }]
  },
  "饿": {
    pinyin: "è",
    structure: "左右结构",
    composition: "饣 + 我",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "我", pinyin: "wǒ" }],
    memoryTip: "食字旁加我，饥饿饿了。",
    words: [{ word: "饥饿", pinyin: "jī è" }, { word: "饿了", pinyin: "è le" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "饿", pinyin: "è" }, { char: "了", pinyin: "le" }, { char: "想", pinyin: "xiǎng" }, { char: "吃", pinyin: "chī" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xī" }]
  },
  "鳄": {
    pinyin: "è",
    structure: "左右结构",
    composition: "鱼 + 颚",
    compositionParts: [{ char: "鱼", pinyin: "yú" }, { char: "颚", pinyin: "è" }],
    memoryTip: "鱼字旁加颚，鳄鱼鳄鱼。",
    words: [{ word: "鳄鱼", pinyin: "è yú" }, { word: "鳄鱼", pinyin: "è yú" }],
    sentenceData: [{ char: "鳄", pinyin: "è" }, { char: "鱼", pinyin: "yú" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "种", pinyin: "zhǒng" }, { char: "危", pinyin: "wēi" }, { char: "险", pinyin: "xiǎn" }, { char: "的", pinyin: "de" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }]
  },
  "恩": {
    pinyin: "ēn",
    structure: "上下结构",
    composition: "因 + 心",
    compositionParts: [{ char: "因", pinyin: "yīn" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "因字加心，恩情感恩。",
    words: [{ word: "恩情", pinyin: "ēn qíng" }, { word: "感恩", pinyin: "gǎn ēn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "感", pinyin: "gǎn" }, { char: "恩", pinyin: "ēn" }, { char: "父", pinyin: "fù" }, { char: "母", pinyin: "mǔ" }]
  },
  "儿": {
    pinyin: "ér",
    structure: "独体字",
    composition: "儿",
    compositionParts: [{ char: "儿", pinyin: "ér" }],
    memoryTip: "像小儿形，儿子儿童。",
    words: [{ word: "儿子", pinyin: "ér zi" }, { word: "儿童", pinyin: "ér tóng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "乖", pinyin: "guāi" }, { char: "巧", pinyin: "qiǎo" }, { char: "的", pinyin: "de" }, { char: "儿", pinyin: "ér" }, { char: "子", pinyin: "zi" }]
  },
  "而": {
    pinyin: "ér",
    structure: "独体字",
    composition: "而",
    compositionParts: [{ char: "而", pinyin: "ér" }],
    memoryTip: "像胡须形，而且然而。",
    words: [{ word: "而且", pinyin: "ér qiě" }, { word: "然而", pinyin: "rán ér" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "不", pinyin: "bù" }, { char: "仅", pinyin: "jǐn" }, { char: "聪", pinyin: "cōng" }, { char: "明", pinyin: "míng" }, { char: "而", pinyin: "ér" }, { char: "且", pinyin: "qiě" }, { char: "勤", pinyin: "qín" }, { char: "奋", pinyin: "fèn" }]
  },
  "尔": {
    pinyin: "ěr",
    structure: "独体字",
    composition: "尔",
    compositionParts: [{ char: "尔", pinyin: "ěr" }],
    memoryTip: "像你的简化，偶尔尔等。",
    words: [{ word: "偶尔", pinyin: "ǒu ěr" }, { word: "尔等", pinyin: "ěr děng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "偶", pinyin: "ǒu" }, { char: "尔", pinyin: "ěr" }, { char: "会", pinyin: "huì" }, { char: "来", pinyin: "lái" }, { char: "看", pinyin: "kàn" }, { char: "我", pinyin: "wǒ" }]
  },
  "耳": {
    pinyin: "ěr",
    structure: "独体字",
    composition: "耳",
    compositionParts: [{ char: "耳", pinyin: "ěr" }],
    memoryTip: "像耳朵形，耳朵木耳。",
    words: [{ word: "耳朵", pinyin: "ěr duo" }, { word: "木耳", pinyin: "mù ěr" }],
    sentenceData: [{ char: "兔", pinyin: "tù" }, { char: "子", pinyin: "zi" }, { char: "的", pinyin: "de" }, { char: "耳", pinyin: "ěr" }, { char: "朵", pinyin: "duǒ" }, { char: "很", pinyin: "hěn" }, { char: "长", pinyin: "cháng" }]
  },
  "二": {
    pinyin: "èr",
    structure: "独体字",
    composition: "二",
    compositionParts: [{ char: "二", pinyin: "èr" }],
    memoryTip: "两横表示二，第二十二。",
    words: [{ word: "第二", pinyin: "dì èr" }, { word: "十二", pinyin: "shí èr" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "是", pinyin: "shì" }, { char: "星", pinyin: "xīng" }, { char: "期", pinyin: "qī" }, { char: "二", pinyin: "èr" }]
  },
  "发": {
    pinyin: "fā",
    structure: "上下结构",
    composition: "癶 + 又",
    compositionParts: [{ char: "癶", pinyin: "bō" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "癶字头加又，发现头发。",
    words: [{ word: "发现", pinyin: "fā xiàn" }, { word: "头发", pinyin: "tóu fa" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "发", pinyin: "fā" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }]
  },
  "乏": {
    pinyin: "fá",
    structure: "独体字",
    composition: "乏",
    compositionParts: [{ char: "乏", pinyin: "fá" }],
    memoryTip: "像缺少的样子，缺乏疲乏。",
    words: [{ word: "缺乏", pinyin: "quē fá" }, { word: "疲乏", pinyin: "pí fá" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }, { char: "一", pinyin: "yī" }, { char: "天", pinyin: "tiān" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "疲", pinyin: "pí" }, { char: "乏", pinyin: "fá" }]
  },
  "伐": {
    pinyin: "fá",
    structure: "左右结构",
    composition: "亻 + 戈",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "单人旁加戈，伐木砍伐。",
    words: [{ word: "伐木", pinyin: "fá mù" }, { word: "砍伐", pinyin: "kǎn fá" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "森", pinyin: "sēn" }, { char: "林", pinyin: "lín" }, { char: "里", pinyin: "lǐ" }, { char: "伐", pinyin: "fá" }, { char: "木", pinyin: "mù" }]
  },
  "罚": {
    pinyin: "fá",
    structure: "上下结构",
    composition: "罒 + 言 + 刂",
    compositionParts: [{ char: "罒", pinyin: "wǎng" }, { char: "言", pinyin: "yán" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "网字头加言刀，惩罚罚款。",
    words: [{ word: "惩罚", pinyin: "chéng fá" }, { word: "罚款", pinyin: "fá kuǎn" }],
    sentenceData: [{ char: "因", pinyin: "yīn" }, { char: "为", pinyin: "wéi" }, { char: "违", pinyin: "wéi" }, { char: "反", pinyin: "fǎn" }, { char: "规", pinyin: "guī" }, { char: "定", pinyin: "dìng" }, { char: "他", pinyin: "tā" }, { char: "被", pinyin: "bèi" }, { char: "罚", pinyin: "fá" }, { char: "款", pinyin: "kuǎn" }]
  },
  "阀": {
    pinyin: "fá",
    structure: "左右结构",
    composition: "门 + 戈",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "门字框加戈，阀门军阀。",
    words: [{ word: "阀门", pinyin: "fá mén" }, { word: "军阀", pinyin: "jūn fá" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "阀", pinyin: "fá" }, { char: "门", pinyin: "mén" }, { char: "坏", pinyin: "huài" }, { char: "了", pinyin: "le" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "修", pinyin: "xiū" }, { char: "理", pinyin: "lǐ" }]
  },
  "法": {
    pinyin: "fǎ",
    structure: "左右结构",
    composition: "氵 + 去",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "去", pinyin: "qù" }],
    memoryTip: "三点水加去，方法法律。",
    words: [{ word: "方法", pinyin: "fāng fǎ" }, { word: "法律", pinyin: "fǎ lǜ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "遵", pinyin: "zūn" }, { char: "守", pinyin: "shǒu" }, { char: "法", pinyin: "fǎ" }, { char: "律", pinyin: "lǜ" }]
  },
  "帆": {
    pinyin: "fān",
    structure: "左右结构",
    composition: "巾 + 凡",
    compositionParts: [{ char: "巾", pinyin: "jīn" }, { char: "凡", pinyin: "fán" }],
    memoryTip: "巾字旁加凡，帆船帆布。",
    words: [{ word: "帆船", pinyin: "fān chuán" }, { word: "帆布", pinyin: "fān bù" }],
    sentenceData: [{ char: "蓝", pinyin: "lán" }, { char: "色", pinyin: "sè" }, { char: "的", pinyin: "de" }, { char: "帆", pinyin: "fān" }, { char: "船", pinyin: "chuán" }, { char: "在", pinyin: "zài" }, { char: "海", pinyin: "hǎi" }, { char: "上", pinyin: "shàng" }, { char: "航", pinyin: "háng" }, { char: "行", pinyin: "xíng" }]
  },
  "番": {
    pinyin: "fān",
    structure: "上下结构",
    composition: "采 + 田",
    compositionParts: [{ char: "采", pinyin: "cǎi" }, { char: "田", pinyin: "tián" }],
    memoryTip: "采字加田，番茄番薯。",
    words: [{ word: "番茄", pinyin: "fān qié" }, { word: "番薯", pinyin: "fān shǔ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "番", pinyin: "fān" }, { char: "茄", pinyin: "qié" }]
  },
  "翻": {
    pinyin: "fān",
    structure: "左右结构",
    composition: "羽 + 番",
    compositionParts: [{ char: "羽", pinyin: "yǔ" }, { char: "番", pinyin: "fān" }],
    memoryTip: "羽字旁加番，翻书翻滚。",
    words: [{ word: "翻书", pinyin: "fān shū" }, { word: "翻滚", pinyin: "fān gǔn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "在", pinyin: "zài" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }, { char: "翻", pinyin: "fān" }, { char: "书", pinyin: "shū" }, { char: "看", pinyin: "kàn" }]
  },
  "凡": {
    pinyin: "fán",
    structure: "独体字",
    composition: "凡",
    compositionParts: [{ char: "凡", pinyin: "fán" }],
    memoryTip: "像几字加一点，平凡非凡。",
    words: [{ word: "平凡", pinyin: "píng fán" }, { word: "非凡", pinyin: "fēi fán" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "平", pinyin: "píng" }, { char: "凡", pinyin: "fán" }, { char: "的", pinyin: "de" }, { char: "人", pinyin: "rén" }]
  },
  "烦": {
    pinyin: "fán",
    structure: "左右结构",
    composition: "火 + 页",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "页", pinyin: "yè" }],
    memoryTip: "火字旁加页，烦躁烦恼。",
    words: [{ word: "烦躁", pinyin: "fán zào" }, { word: "烦恼", pinyin: "fán nǎo" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "因", pinyin: "yīn" }, { char: "为", pinyin: "wéi" }, { char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "不", pinyin: "bù" }, { char: "理", pinyin: "lǐ" }, { char: "想", pinyin: "xiǎng" }, { char: "而", pinyin: "ér" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "烦", pinyin: "fán" }, { char: "恼", pinyin: "nǎo" }]
  },
  "繁": {
    pinyin: "fán",
    structure: "上下结构",
    composition: "每 + 糸",
    compositionParts: [{ char: "每", pinyin: "měi" }, { char: "糸", pinyin: "mì" }],
    memoryTip: "每字加糸，繁荣繁华。",
    words: [{ word: "繁荣", pinyin: "fán róng" }, { word: "繁华", pinyin: "fán huá" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "繁", pinyin: "fán" }, { char: "华", pinyin: "huá" }]
  },
  "反": {
    pinyin: "fǎn",
    structure: "半包围结构",
    composition: "厂 + 又",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "厂字头加又，反对反面。",
    words: [{ word: "反对", pinyin: "fǎn duì" }, { word: "反面", pinyin: "fǎn miàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "反", pinyin: "fǎn" }, { char: "对", pinyin: "duì" }, { char: "浪", pinyin: "làng" }, { char: "费", pinyin: "fèi" }, { char: "食", pinyin: "shí" }, { char: "品", pinyin: "pǐn" }]
  },
  "返": {
    pinyin: "fǎn",
    structure: "半包围结构",
    composition: "辶 + 反",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "反", pinyin: "fǎn" }],
    memoryTip: "走之底加反，返回往返。",
    words: [{ word: "返回", pinyin: "fǎn huí" }, { word: "往返", pinyin: "wǎng fǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "决", pinyin: "jué" }, { char: "定", pinyin: "dìng" }, { char: "返", pinyin: "fǎn" }, { char: "回", pinyin: "huí" }, { char: "家", pinyin: "jiā" }, { char: "乡", pinyin: "xiāng" }]
  },
  "犯": {
    pinyin: "fàn",
    structure: "左右结构",
    composition: "犭 + 犯",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "犯", pinyin: "fàn" }],
    memoryTip: "反犬旁加犯，犯罪犯人。",
    words: [{ word: "犯罪", pinyin: "fàn zuì" }, { word: "犯人", pinyin: "fàn rén" }],
    sentenceData: [{ char: "犯", pinyin: "fàn" }, { char: "罪", pinyin: "zuì" }, { char: "是", pinyin: "shì" }, { char: "违", pinyin: "wéi" }, { char: "法", pinyin: "fǎ" }, { char: "的", pinyin: "de" }, { char: "行", pinyin: "xíng" }, { char: "为", pinyin: "wéi" }]
  },
  "泛": {
    pinyin: "fàn",
    structure: "左右结构",
    composition: "氵 + 乏",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "乏", pinyin: "fá" }],
    memoryTip: "三点水加乏，广泛泛舟。",
    words: [{ word: "广泛", pinyin: "guǎng fàn" }, { word: "泛舟", pinyin: "fàn zhōu" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "消", pinyin: "xiāo" }, { char: "息", pinyin: "xī" }, { char: "得", pinyin: "dé" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "广", pinyin: "guǎng" }, { char: "泛", pinyin: "fàn" }, { char: "传", pinyin: "chuán" }, { char: "播", pinyin: "bō" }]
  },
  "饭": {
    pinyin: "fàn",
    structure: "左右结构",
    composition: "饣 + 反",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "反", pinyin: "fǎn" }],
    memoryTip: "食字旁加反，吃饭米饭。",
    words: [{ word: "吃饭", pinyin: "chī fàn" }, { word: "米饭", pinyin: "mǐ fàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "吃", pinyin: "chī" }, { char: "饭", pinyin: "fàn" }]
  },
  "范": {
    pinyin: "fàn",
    structure: "上下结构",
    composition: "艹 + 氾",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "氾", pinyin: "fàn" }],
    memoryTip: "草字头加氾，模范示范。",
    words: [{ word: "模范", pinyin: "mó fàn" }, { word: "示范", pinyin: "shì fàn" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "为", pinyin: "wéi" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "做", pinyin: "zuò" }, { char: "示", pinyin: "shì" }, { char: "范", pinyin: "fàn" }]
  },
  "贩": {
    pinyin: "fàn",
    structure: "左右结构",
    composition: "贝 + 反",
    compositionParts: [{ char: "贝", pinyin: "bèi" }, { char: "反", pinyin: "fǎn" }],
    memoryTip: "贝字旁加反，贩卖小贩。",
    words: [{ word: "贩卖", pinyin: "fàn mài" }, { word: "小贩", pinyin: "xiǎo fàn" }],
    sentenceData: [{ char: "街", pinyin: "jiē" }, { char: "边", pinyin: "biān" }, { char: "有", pinyin: "yǒu" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "小", pinyin: "xiǎo" }, { char: "贩", pinyin: "fàn" }, { char: "在", pinyin: "zài" }, { char: "卖", pinyin: "mài" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xī" }]
  },
  "方": {
    pinyin: "fāng",
    structure: "独体字",
    composition: "方",
    compositionParts: [{ char: "方", pinyin: "fāng" }],
    memoryTip: "像方形，方向方法。",
    words: [{ word: "方向", pinyin: "fāng xiàng" }, { word: "方法", pinyin: "fāng fǎ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "找", pinyin: "zhǎo" }, { char: "对", pinyin: "duì" }, { char: "方", pinyin: "fāng" }, { char: "向", pinyin: "xiàng" }]
  },
  "坊": {
    pinyin: "fāng",
    structure: "左右结构",
    composition: "土 + 方",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "土字旁加方，作坊牌坊。",
    words: [{ word: "作坊", pinyin: "zuō fang" }, { word: "牌坊", pinyin: "pái fang" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "镇", pinyin: "zhèn" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "座", pinyin: "zuò" }, { char: "古", pinyin: "gǔ" }, { char: "老", pinyin: "lǎo" }, { char: "的", pinyin: "de" }, { char: "牌", pinyin: "pái" }, { char: "坊", pinyin: "fāng" }]
  },
  "芳": {
    pinyin: "fāng",
    structure: "上下结构",
    composition: "艹 + 方",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "草字头加方，芳香芬芳。",
    words: [{ word: "芳香", pinyin: "fāng xiāng" }, { word: "芬芳", pinyin: "fēn fāng" }],
    sentenceData: [{ char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }, { char: "儿", pinyin: "ér" }, { char: "芬", pinyin: "fēn" }, { char: "芳", pinyin: "fāng" }, { char: "扑", pinyin: "pū" }, { char: "鼻", pinyin: "bí" }]
  },
  "防": {
    pinyin: "fáng",
    structure: "左右结构",
    composition: "阝 + 方",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "左耳旁加方，防止防守。",
    words: [{ word: "防止", pinyin: "fáng zhǐ" }, { word: "防守", pinyin: "fáng shǒu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "防", pinyin: "fáng" }, { char: "止", pinyin: "zhǐ" }, { char: "疾", pinyin: "jí" }, { char: "病", pinyin: "bìng" }, { char: "的", pinyin: "de" }, { char: "发", pinyin: "fā" }, { char: "生", pinyin: "shēng" }]
  },
  "妨": {
    pinyin: "fáng",
    structure: "左右结构",
    composition: "女 + 方",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "女字旁加方，妨碍不妨。",
    words: [{ word: "妨碍", pinyin: "fáng ài" }, { word: "不妨", pinyin: "bù fáng" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "声", pinyin: "shēng" }, { char: "说", pinyin: "shuō" }, { char: "话", pinyin: "huà" }, { char: "会", pinyin: "huì" }, { char: "妨", pinyin: "fáng" }, { char: "碍", pinyin: "ài" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }, { char: "休", pinyin: "xiū" }, { char: "息", pinyin: "xī" }]
  },
  "房": {
    pinyin: "fáng",
    structure: "半包围结构",
    composition: "户 + 方",
    compositionParts: [{ char: "户", pinyin: "hù" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "户字头加方，房间楼房。",
    words: [{ word: "房间", pinyin: "fáng jiān" }, { word: "楼房", pinyin: "lóu fáng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "房", pinyin: "fáng" }, { char: "间", pinyin: "jiān" }, { char: "很", pinyin: "hěn" }, { char: "整", pinyin: "zhěng" }, { char: "洁", pinyin: "jié" }]
  },
  "肋": {
    pinyin: "lē",
    structure: "左右结构",
    composition: "月 + 力",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "力", pinyin: "lì" }],
    memoryTip: "月字旁加力，肋骨两肋。",
    words: [{ word: "肋骨", pinyin: "lèi gǔ" }, { word: "两肋", pinyin: "liǎng lē" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "摔", pinyin: "shuāi" }, { char: "倒", pinyin: "dǎo" }, { char: "了", pinyin: "le" }, { char: "可", pinyin: "kě" }, { char: "能", pinyin: "néng" }, { char: "伤", pinyin: "shāng" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "肋", pinyin: "lē" }, { char: "骨", pinyin: "gǔ" }]
  },
  "仿": {
    pinyin: "fǎng",
    structure: "左右结构",
    composition: "亻 + 方",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "单人旁加方，模仿仿照。",
    words: [{ word: "模仿", pinyin: "mó fǎng" }, { word: "仿照", pinyin: "fǎng zhào" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }, { char: "模", pinyin: "mó" }, { char: "仿", pinyin: "fǎng" }, { char: "老", pinyin: "lǎo" }, { char: "虎", pinyin: "hǔ" }, { char: "走", pinyin: "zǒu" }, { char: "路", pinyin: "lù" }, { char: "的", pinyin: "de" }, { char: "样", pinyin: "yàng" }, { char: "子", pinyin: "zi" }]
  },
  "访": {
    pinyin: "fǎng",
    structure: "左右结构",
    composition: "讠 + 方",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "言字旁加方，访问采访。",
    words: [{ word: "访问", pinyin: "fǎng wèn" }, { word: "采访", pinyin: "cǎi fǎng" }],
    sentenceData: [{ char: "记", pinyin: "jì" }, { char: "者", pinyin: "zhě" }, { char: "来", pinyin: "lái" }, { char: "访", pinyin: "fǎng" }, { char: "问", pinyin: "wèn" }, { char: "了", pinyin: "le" }, { char: "那", pinyin: "nà" }, { char: "位", pinyin: "wèi" }, { char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }]
  },
  "纺": {
    pinyin: "fǎng",
    structure: "左右结构",
    composition: "纟 + 方",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "方", pinyin: "fāng" }],
    memoryTip: "绞丝旁加方，纺织纺纱。",
    words: [{ word: "纺织", pinyin: "fǎng zhī" }, { word: "纺纱", pinyin: "fǎng shā" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "在", pinyin: "zài" }, { char: "纺", pinyin: "fǎng" }, { char: "织", pinyin: "zhī" }, { char: "厂", pinyin: "chǎng" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }]
  },
  "放": {
    pinyin: "fàng",
    structure: "左右结构",
    composition: "方 + 攵",
    compositionParts: [{ char: "方", pinyin: "fāng" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "方字旁加攵，放学放风筝。",
    words: [{ word: "放学", pinyin: "fàng xué" }, { word: "放风筝", pinyin: "fàng fēng zheng" }],
    sentenceData: [{ char: "放", pinyin: "fàng" }, { char: "学", pinyin: "xué" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "去", pinyin: "qù" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "玩", pinyin: "wán" }]
  },
  "飞": {
    pinyin: "fēi",
    structure: "独体字",
    composition: "飞",
    compositionParts: [{ char: "飞", pinyin: "fēi" }],
    memoryTip: "像鸟飞翔，飞机飞鸟。",
    words: [{ word: "飞机", pinyin: "fēi jī" }, { word: "飞鸟", pinyin: "fēi niǎo" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "架", pinyin: "jià" }, { char: "飞", pinyin: "fēi" }, { char: "机", pinyin: "jī" }, { char: "飞", pinyin: "fēi" }, { char: "过", pinyin: "guò" }]
  },
  "非": {
    pinyin: "fēi",
    structure: "独体字",
    composition: "非",
    compositionParts: [{ char: "非", pinyin: "fēi" }],
    memoryTip: "像相反相对，非常是非。",
    words: [{ word: "非常", pinyin: "fēi cháng" }, { word: "是非", pinyin: "shì fēi" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "电", pinyin: "diàn" }, { char: "影", pinyin: "yǐng" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "好", pinyin: "hǎo" }, { char: "看", pinyin: "kàn" }]
  },
  "啡": {
    pinyin: "fēi",
    structure: "左右结构",
    composition: "口 + 非",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "非", pinyin: "fēi" }],
    memoryTip: "口字旁加非，咖啡咖啡。",
    words: [{ word: "咖啡", pinyin: "kā fēi" }, { word: "咖啡", pinyin: "kā fēi" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "bà" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "喝", pinyin: "hē" }, { char: "咖", pinyin: "kā" }, { char: "啡", pinyin: "fēi" }]
  },
  "菲": {
    pinyin: "fēi",
    structure: "上下结构",
    composition: "艹 + 非",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "非", pinyin: "fēi" }],
    memoryTip: "草字头加非，芳菲菲薄。",
    words: [{ word: "芳菲", pinyin: "fāng fēi" }, { word: "菲薄", pinyin: "fěi bó" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "芳", pinyin: "fāng" }, { char: "菲", pinyin: "fēi" }, { char: "扑", pinyin: "pū" }, { char: "鼻", pinyin: "bí" }]
  },
  "肥": {
    pinyin: "féi",
    structure: "左右结构",
    composition: "月 + 巴",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "巴", pinyin: "bā" }],
    memoryTip: "月字旁加巴，肥胖肥料。",
    words: [{ word: "肥胖", pinyin: "féi pàng" }, { word: "肥料", pinyin: "féi liào" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "猪", pinyin: "zhū" }, { char: "很", pinyin: "hěn" }, { char: "肥", pinyin: "féi" }, { char: "胖", pinyin: "pàng" }]
  },
  "废": {
    pinyin: "fèi",
    structure: "半包围结构",
    composition: "广 + 发",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "发", pinyin: "fā" }],
    memoryTip: "广字头加发，废物废弃。",
    words: [{ word: "废物", pinyin: "fèi wù" }, { word: "废弃", pinyin: "fèi qì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char:"些", pinyin: "xiē" }, { char: "废", pinyin: "fèi" }, { char: "纸", pinyin: "zhǐ" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "回", pinyin: "huí" }, { char: "收", pinyin: "shōu" }, { char: "利", pinyin: "lì" }, { char: "用", pinyin: "yòng" }]
  },
  "沸": {
    pinyin: "fèi",
    structure: "左右结构",
    composition: "氵 + 弗",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "弗", pinyin: "fú" }],
    memoryTip: "三点水加弗，沸腾沸点。",
    words: [{ word: "沸腾", pinyin: "fèi téng" }, { word: "沸点", pinyin: "fèi diǎn" }],
    sentenceData: [{ char: "水", pinyin: "shuǐ" }, { char: "烧", pinyin: "shāo" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "开", pinyin: "kāi" }, { char: "始", pinyin: "shǐ" }, { char: "沸", pinyin: "fèi" }, { char: "腾", pinyin: "téng" }]
  },
  "肺": {
    pinyin: "fèi",
    structure: "左右结构",
    composition: "月 + 市",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "市", pinyin: "shì" }],
    memoryTip: "月字旁加市，肺炎肺部。",
    words: [{ word: "肺炎", pinyin: "fèi yán" }, { word: "肺部", pinyin: "fèi bù" }],
    sentenceData: [{ char: "吸", pinyin: "xī" }, { char: "烟", pinyin: "yān" }, { char: "对", pinyin: "duì" }, { char: "肺", pinyin: "fèi" }, { char: "部", pinyin: "bù" }, { char: "有", pinyin: "yǒu" }, { char: "害", pinyin: "hài" }]
  },
  "费": {
    pinyin: "fèi",
    structure: "上下结构",
    composition: "弗 + 贝",
    compositionParts: [{ char: "弗", pinyin: "fú" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "弗字加贝，费用浪费。",
    words: [{ word: "费用", pinyin: "fèi yong" }, { word: "浪费", pinyin: "làng fèi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "不", pinyin: "bù" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "浪", pinyin: "làng" }, { char: "费", pinyin: "fèi" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }]
  },
  "分": {
    pinyin: "fēn",
    structure: "上下结构",
    composition: "八 + 刀",
    compositionParts: [{ char: "八", pinyin: "bā" }, { char: "刀", pinyin: "dāo" }],
    memoryTip: "八字加刀，分开分数。",
    words: [{ word: "分开", pinyin: "fēn kāi" }, { word: "分数", pinyin: "fēn shù" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "这", pinyin: "zhè" }, { char: "些", pinyin: "xiē" }, { char: "水", pinyin: "shuǐ" }, { char: "果", pinyin: "guǒ" }, { char: "分", pinyin: "fēn" }, { char: "给", pinyin: "gěi" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }]
  },
  "纷": {
    pinyin: "fēn",
    structure: "左右结构",
    composition: "纟 + 分",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "分", pinyin: "fēn" }],
    memoryTip: "绞丝旁加分，纷纷纷飞。",
    words: [{ word: "纷纷", pinyin: "fēn fēn" }, { word: "纷飞", pinyin: "fēn fēi" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "落", pinyin: "luò" }, { char: "叶", pinyin: "yè" }, { char: "纷", pinyin: "fēn" }, { char: "纷", pinyin: "fēn" }, { char: "飘", pinyin: "piāo" }, { char: "落", pinyin: "luò" }]
  },
  "芬": {
    pinyin: "fēn",
    structure: "上下结构",
    composition: "艹 + 分",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "分", pinyin: "fēn" }],
    memoryTip: "草字头加分，芬芳清芬。",
    words: [{ word: "芬芳", pinyin: "fēn fāng" }, { word: "清芬", pinyin: "qīng fēn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "朵", pinyin: "duǒ" }, { char: "花", pinyin: "huā" }, { char: "的", pinyin: "de" }, { char: "香", pinyin: "xiāng" }, { char: "气", pinyin: "qì" }, { char: "芬", pinyin: "fēn" }, { char: "芳", pinyin: "fāng" }, { char: "扑", pinyin: "pū" }, { char: "鼻", pinyin: "bí" }]
  },
  "坟": {
    pinyin: "fén",
    structure: "左右结构",
    composition: "土 + 文",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "文", pinyin: "wén" }],
    memoryTip: "土字旁加文，坟墓坟地。",
    words: [{ word: "坟墓", pinyin: "fén mù" }, { word: "坟地", pinyin: "fén dì" }],
    sentenceData: [{ char: "清", pinyin: "qīng" }, { char: "明", pinyin: "míng" }, { char: "节", pinyin: "jié" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "扫", pinyin: "sǎo" }, { char: "墓", pinyin: "mù" }, { char: "坟", pinyin: "fén" }]
  },
  "粉": {
    pinyin: "fěn",
    structure: "左右结构",
    composition: "米 + 分",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "分", pinyin: "fēn" }],
    memoryTip: "米字旁加分，面粉粉色。",
    words: [{ word: "面粉", pinyin: "miàn fěn" }, { word: "粉色", pinyin: "fěn sè" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "用", pinyin: "yòng" }, { char: "面", pinyin: "miàn" }, { char: "粉", pinyin: "fěn" }, { char: "做", pinyin: "zuò" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "顿", pinyin: "dùn" }, { char: "美", pinyin: "měi" }, { char: "味", pinyin: "wèi" }, { char: "的", pinyin: "de" }, { char: "饺", pinyin: "jiǎo" }, { char: "子", pinyin: "zi" }]
  },
  "份": {
    pinyin: "fèn",
    structure: "左右结构",
    composition: "亻 + 分",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "分", pinyin: "fēn" }],
    memoryTip: "单人旁加分，份额身份。",
    words: [{ word: "份额", pinyin: "fèn é" }, { word: "身份", pinyin: "shēn fèn" }],
    sentenceData: [{ char: "每", pinyin: "měi" }, { char: "个", pinyin: "gè" }, { char: "人", pinyin: "rén" }, { char: "都", pinyin: "dōu" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "份", pinyin: "fèn" }, { char: "礼", pinyin: "lǐ" }, { char: "物", pinyin: "wù" }]
  },
  "奋": {
    pinyin: "fèn",
    structure: "上下结构",
    composition: "大 + 田",
    compositionParts: [{ char: "大", pinyin: "dà" }, { char: "田", pinyin: "tián" }],
    memoryTip: "大字加田，奋斗兴奋。",
    words: [{ word: "奋斗", pinyin: "fèn dòu" }, { word: "兴奋", pinyin: "xīng fèn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "奋", pinyin: "fèn" }, { char: "斗", pinyin: "dòu" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "愤": {
    pinyin: "fèn",
    structure: "左右结构",
    composition: "忄 + 责",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "责", pinyin: "zé" }],
    memoryTip: "竖心旁加责，气愤愤怒。",
    words: [{ word: "气愤", pinyin: "qì fèn" }, { word: "愤怒", pinyin: "fèn nù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "对", pinyin: "duì" }, { char: "不", pinyin: "bù" }, { char: "公", pinyin: "gōng" }, { char: "平", pinyin: "píng" }, { char: "的", pinyin: "de" }, { char: "事", pinyin: "shì" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "愤", pinyin: "fèn" }, { char: "怒", pinyin: "nù" }]
  },
  "粪": {
    pinyin: "fèn",
    structure: "上下结构",
    composition: "米 + 共",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "共", pinyin: "gòng" }],
    memoryTip: "米字加共，粪土粪便。",
    words: [{ word: "粪土", pinyin: "fèn tǔ" }, { word: "粪便", pinyin: "fèn biàn" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "用", pinyin: "yòng" }, { char: "粪", pinyin: "fèn" }, { char: "便", pinyin: "biàn" }, { char: "作", pinyin: "zuò" }, { char: "为", pinyin: "wéi" }, { char: "农", pinyin: "nóng" }, { char: "作", pinyin: "zuò" }, { char: "物", pinyin: "wù" }, { char: "的", pinyin: "de" }, { char: "肥", pinyin: "féi" }, { char: "料", pinyin: "liào" }]
  },
  "丰": {
    pinyin: "fēng",
    structure: "独体字",
    composition: "丰",
    compositionParts: [{ char: "丰", pinyin: "fēng" }],
    memoryTip: "像丰盛的样子，丰收丰富。",
    words: [{ word: "丰收", pinyin: "fēng shōu" }, { word: "丰富", pinyin: "fēng fù" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "年", pinyin: "nián" }, { char: "农", pinyin: "nóng" }, { char: "业", pinyin: "yè" }, { char: "获", pinyin: "huò" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "大", pinyin: "dà" }, { char: "丰", pinyin: "fēng" }, { char: "收", pinyin: "shōu" }]
  },
  "风": {
    pinyin: "fēng",
    structure: "半包围结构",
    composition: "几 + 虫",
    compositionParts: [{ char: "几", pinyin: "jī" }, { char: "虫", pinyin: "chóng" }],
    memoryTip: "几字框加虫，大风风景。",
    words: [{ word: "大风", pinyin: "dà fēng" }, { word: "风景", pinyin: "fēng jǐng" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "风", pinyin: "fēng" }, { char: "很", pinyin: "hěn" }, { char: "大", pinyin: "dà" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "出", pinyin: "chū" }, { char: "去", pinyin: "qù" }, { char: "玩", pinyin: "wán" }]
  },
  "枫": {
    pinyin: "fēng",
    structure: "左右结构",
    composition: "木 + 风",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "风", pinyin: "fēng" }],
    memoryTip: "木字旁加风，枫叶枫树。",
    words: [{ word: "枫叶", pinyin: "fēng yè" }, { word: "枫树", pinyin: "fēng shù" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "枫", pinyin: "fēng" }, { char: "叶", pinyin: "yè" }, { char: "变", pinyin: "biàn" }, { char: "红", pinyin: "hóng" }, { char: "了", pinyin: "le" }]
  },
  "封": {
    pinyin: "fēng",
    structure: "左右结构",
    composition: "圭 + 寸",
    compositionParts: [{ char: "圭", pinyin: "guī" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "圭字旁加寸，封闭封信。",
    words: [{ word: "封闭", pinyin: "fēng bì" }, { word: "封信", pinyin: "fēng xìn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "给", pinyin: "gěi" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }, { char: "写", pinyin: "xiě" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "封", pinyin: "fēng" }, { char: "信", pinyin: "xìn" }]
  },
  "疯": {
    pinyin: "fēng",
    structure: "半包围结构",
    composition: "疒 + 风",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "风", pinyin: "fēng" }],
    memoryTip: "病字头加风，疯狂疯子。",
    words: [{ word: "疯狂", pinyin: "fēng kuáng" }, { word: "疯子", pinyin: "fēng zi" }],
    sentenceData: [{ char: "那", pinyin: "nà" }, { char: "个", pinyin: "gè" }, { char: "人", pinyin: "rén" }, { char: "疯", pinyin: "fēng" }, { char: "疯", pinyin: "fēng" }, { char: "癫", pinyin: "diān" }, { char: "癫", pinyin: "diān" }, { char: "的", pinyin: "de" }, { char: "样", pinyin: "yàng" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "可", pinyin: "kě" }, { char: "怕", pinyin: "pà" }]
  },
  "峰": {
    pinyin: "fēng",
    structure: "左右结构",
    composition: "山 + 丰",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "丰", pinyin: "fēng" }],
    memoryTip: "山字旁加丰，山峰高峰。",
    words: [{ word: "山峰", pinyin: "shān fēng" }, { word: "高峰", pinyin: "gāo fēng" }],
    sentenceData: [{ char: "那", pinyin: "nà" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "的", pinyin: "de" }, { char: "主", pinyin: "zhǔ" }, { char: "峰", pinyin: "fēng" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "高", pinyin: "gāo" }]
  },
  "锋": {
    pinyin: "fēng",
    structure: "左右结构",
    composition: "钅 + 丰",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "丰", pinyin: "fēng" }],
    memoryTip: "金字旁加丰，锋利锋芒。",
    words: [{ word: "锋利", pinyin: "fēng lì" }, { word: "锋芒", pinyin: "fēng máng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "把", pinyin: "bǎ" }, { char: "刀", pinyin: "dāo" }, { char: "很", pinyin: "hěn" }, { char: "锋", pinyin: "fēng" }, { char: "利", pinyin: "lì" }, { char: "要", pinyin: "yào" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }, { char: "使", pinyin: "shǐ" }, { char: "用", pinyin: "yòng" }]
  },
  "蜂": {
    pinyin: "fēng",
    structure: "左右结构",
    composition: "虫 + 丰",
    compositionParts: [{ char: "虫", pinyin: "chóng" }, { char: "丰", pinyin: "fēng" }],
    memoryTip: "虫字旁加丰，蜜蜂蜂王。",
    words: [{ word: "蜜蜂", pinyin: "mì fēng" }, { word: "蜂王", pinyin: "fēng wáng" }],
    sentenceData: [{ char: "蜜", pinyin: "mì" }, { char: "蜂", pinyin: "fēng" }, { char: "在", pinyin: "zài" }, { char: "花", pinyin: "huā" }, { char: "丛", pinyin: "cóng" }, { char: "中", pinyin: "zhōng" }, { char: "采", pinyin: "cǎi" }, { char: "蜜", pinyin: "mì" }]
  },
  "冯": {
    pinyin: "féng",
    structure: "左右结构",
    composition: "冫 + 马",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "马", pinyin: "mǎ" }],
    memoryTip: "两点水加马，冯姓冯巩。",
    words: [{ word: "冯姓", pinyin: "féng xìng" }, { word: "冯巩", pinyin: "féng gǒng" }],
    sentenceData: [{ char: "冯", pinyin: "féng" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "好", pinyin: "hǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }]
  },
  "逢": {
    pinyin: "féng",
    structure: "半包围结构",
    composition: "辶 + 丰",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "丰", pinyin: "fēng" }],
    memoryTip: "走之底加丰，相逢每逢。",
    words: [{ word: "相逢", pinyin: "xiāng féng" }, { word: "每逢", pinyin: "měi féng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "相", pinyin: "xiāng" }, { char: "逢", pinyin: "féng" }, { char: "在", pinyin: "zài" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }]
  },
  "缝": {
    pinyin: "féng",
    structure: "左右结构",
    composition: "纟 + 逢",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "逢", pinyin: "féng" }],
    memoryTip: "绞丝旁加逢，缝补裂缝。",
    words: [{ word: "缝补", pinyin: "féng bǔ" }, { word: "裂缝", pinyin: "liè féng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "在", pinyin: "zài" }, { char: "帮", pinyin: "bāng" }, { char: "我", pinyin: "wǒ" }, { char: "缝", pinyin: "féng" }, { char: "补", pinyin: "bǔ" }, { char: "破", pinyin: "pò" }, { char: "了", pinyin: "le" }, { char: "的", pinyin: "de" }, { char: "裤", pinyin: "kù" }, { char: "子", pinyin: "zi" }]
  },
  "凤": {
    pinyin: "fèng",
    structure: "半包围结构",
    composition: "几 + 鸟",
    compositionParts: [{ char: "几", pinyin: "jī" }, { char: "鸟", pinyin: "niǎo" }],
    memoryTip: "几字框加鸟，凤凰龙凤。",
    words: [{ word: "凤凰", pinyin: "fèng huáng" }, { word: "龙凤", pinyin: "lóng fèng" }],
    sentenceData: [{ char: "凤", pinyin: "fèng" }, { char: "凰", pinyin: "huáng" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "神", pinyin: "shén" }, { char: "话", pinyin: "huà" }, { char: "中", pinyin: "zhōng" }, { char: "的", pinyin: "de" }, { char: "神", pinyin: "shén" }, { char: "鸟", pinyin: "niǎo" }]
  },
  "奉": {
    pinyin: "fèng",
    structure: "上下结构",
    composition: "丰 + 手",
    compositionParts: [{ char: "丰", pinyin: "fēng" }, { char: "手", pinyin: "shǒu" }],
    memoryTip: "丰字加手，奉献奉养。",
    words: [{ word: "奉献", pinyin: "fèng xiàn" }, { word: "奉养", pinyin: "fèng yǎng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "奉", pinyin: "fèng" }, { char: "献", pinyin: "xiàn" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "力", pinyin: "lì" }, { char: "量", pinyin: "liàng" }, { char: "给", pinyin: "gěi" }, { char: "社", pinyin: "shè" }, { char: "会", pinyin: "huì" }]
  },
  "佛": {
    pinyin: "fó",
    structure: "左右结构",
    composition: "亻 + 弗",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "弗", pinyin: "fú" }],
    memoryTip: "单人旁加弗，佛祖佛像。",
    words: [{ word: "佛祖", pinyin: "fó zǔ" }, { word: "佛像", pinyin: "fó xiàng" }],
    sentenceData: [{ char: "寺", pinyin: "sì" }, { char: "庙", pinyin: "miào" }, { char: "里", pinyin: "lǐ" }, { char: "供", pinyin: "gòng" }, { char: "着", pinyin: "zhe" }, { char: "一", pinyin: "yī" }, { char: "尊", pinyin: "zūn" }, { char: "佛", pinyin: "fó" }, { char: "像", pinyin: "xiàng" }]
  },
  "否": {
    pinyin: "fǒu",
    structure: "上下结构",
    composition: "不 + 口",
    compositionParts: [{ char: "不", pinyin: "bù" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "不字加口，否定是否。",
    words: [{ word: "否定", pinyin: "fǒu dìng" }, { word: "是否", pinyin: "shì fǒu" }],
    sentenceData: [{ char: "你", pinyin: "nǐ" }, { char: "是", pinyin: "shì" }, { char: "否", pinyin: "fǒu" }, { char: "同", pinyin: "tóng" }, { char: "意", pinyin: "yì" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "决", pinyin: "jué" }, { char: "定", pinyin: "dìng" }]
  },
  "夫": {
    pinyin: "fū",
    structure: "独体字",
    composition: "夫",
    compositionParts: [{ char: "夫", pinyin: "fū" }],
    memoryTip: "像大字加一横，夫妻农夫。",
    words: [{ word: "夫妻", pinyin: "fū qī" }, { word: "农夫", pinyin: "nóng fū" }],
    sentenceData: [{ char: "那", pinyin: "nà" }, { char: "对", pinyin: "duì" }, { char: "夫", pinyin: "fū" }, { char: "妻", pinyin: "qī" }, { char: "相", pinyin: "xiāng" }, { char: "亲", pinyin: "qīn" }, { char: "相", pinyin: "xiāng" }, { char: "爱", pinyin: "ài" }]
  },
  "肤": {
    pinyin: "fū",
    structure: "左右结构",
    composition: "月 + 夫",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "夫", pinyin: "fū" }],
    memoryTip: "月字旁加夫，皮肤肤色。",
    words: [{ word: "皮肤", pinyin: "pí fū" }, { word: "肤色", pinyin: "fū sè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "皮", pinyin: "pí" }, { char: "肤", pinyin: "fū" }, { char: "很", pinyin: "hěn" }, { char: "白", pinyin: "bái" }, { char: "皙", pinyin: "xī" }]
  },
  "解": {
    pinyin: "jiě",
    structure: "左右结构",
    composition: "角 + 刀 + 牛",
    compositionParts: [{ char: "角", pinyin: "jiǎo" }, { char: "刀", pinyin: "dāo" }, { char: "牛", pinyin: "niú" }],
    memoryTip: "角刀牛组合，解决了解。",
    words: [{ word: "解决", pinyin: "jiě jué" }, { word: "了解", pinyin: "liǎo jiě" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "解", pinyin: "jiě" }, { char: "决", pinyin: "jué" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }]
  },
  "弗": {
    pinyin: "fú",
    structure: "独体字",
    composition: "弗",
    compositionParts: [{ char: "弗", pinyin: "fú" }],
    memoryTip: "像不字的变形，弗能自弗。",
    words: [{ word: "弗能", pinyin: "fú néng" }, { word: "自弗", pinyin: "zì fú" }],
    sentenceData: [{ char: "弗", pinyin: "fú" }, { char: "能", pinyin: "néng" }, { char: "参", pinyin: "cān" }, { char: "加", pinyin: "jiā" }, { char: "这", pinyin: "zhè" }, { char: "次", pinyin: "cì" }, { char: "活", pinyin: "huó" }, { char: "动", pinyin: "dòng" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "遗", pinyin: "yí" }, { char: "憾", pinyin: "hàn" }]
  },
  "伏": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "亻 + 犬",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "犬", pinyin: "quǎn" }],
    memoryTip: "单人旁加犬，埋伏伏击。",
    words: [{ word: "埋伏", pinyin: "mái fú" }, { word: "伏击", pinyin: "fú jī" }],
    sentenceData: [{ char: "士", pinyin: "shì" }, { char: "兵", pinyin: "bīng" }, { char: "埋", pinyin: "mái" }, { char: "伏", pinyin: "fú" }, { char: "在", pinyin: "zài" }, { char: "草", pinyin: "cǎo" }, { char: "丛", pinyin: "cóng" }, { char: "中", pinyin: "zhōng" }, { char: "等", pinyin: "děng" }, { char: "待", pinyin: "dài" }, { char: "敌", pinyin: "dí" }, { char: "人", pinyin: "rén" }]
  },
  "扶": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "扌 + 夫",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "夫", pinyin: "fū" }],
    memoryTip: "提手旁加夫，扶助扶持。",
    words: [{ word: "扶助", pinyin: "fú zhù" }, { word: "扶持", pinyin: "fú chí" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "扶", pinyin: "fú" }, { char: "着", pinyin: "zhe" }, { char: "老", pinyin: "lǎo" }, { char: "人", pinyin: "rén" }, { char: "过", pinyin: "guò" }, { char: "马", pinyin: "mǎ" }, { char: "路", pinyin: "lù" }]
  },
  "服": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "月 + ⺙",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "⺙", pinyin: "fú" }],
    memoryTip: "月字旁加反文旁，衣服服装。",
    words: [{ word: "衣服", pinyin: "yī fu" }, { word: "服装", pinyin: "fú zhuāng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "很", pinyin: "hěn" }, { char: "漂", pinyin: "piāo" }, { char: "亮", pinyin: "liàng" }]
  },
  "浮": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "氵 + 孚",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "孚", pinyin: "fú" }],
    memoryTip: "三点水加孚，漂浮浮动。",
    words: [{ word: "漂浮", pinyin: "piāo fú" }, { word: "浮动", pinyin: "fú dòng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "船", pinyin: "chuán" }, { char: "在", pinyin: "zài" }, { char: "水", pinyin: "shuǐ" }, { char: "面", pinyin: "miàn" }, { char: "上", pinyin: "shàng" }, { char: "浮", pinyin: "fú" }, { char: "动", pinyin: "dòng" }]
  },
  "符": {
    pinyin: "fú",
    structure: "上下结构",
    composition: "竹 + 付",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "付", pinyin: "fù" }],
    memoryTip: "竹字头加付，符号符合。",
    words: [{ word: "符号", pinyin: "fú hào" }, { word: "符合", pinyin: "fú hé" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "符", pinyin: "fú" }, { char: "号", pinyin: "hào" }, { char: "代", pinyin: "dài" }, { char: "表", pinyin: "biǎo" }, { char: "什", pinyin: "shén" }, { char: "么", pinyin: "me" }]
  },
  "幅": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "巾 + 畐",
    compositionParts: [{ char: "巾", pinyin: "jīn" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "巾字旁加畐，幅度一幅画。",
    words: [{ word: "幅度", pinyin: "fú dù" }, { word: "一幅画", pinyin: "yì fú huà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "幅", pinyin: "fú" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }, { char: "得", pinyin: "de" }, { char: "真", pinyin: "zhēn" }, { char: "好", pinyin: "hǎo" }]
  },
  "福": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "礻 + 畐",
    compositionParts: [{ char: "礻", pinyin: "shì" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "示字旁加畐，幸福祝福。",
    words: [{ word: "幸福", pinyin: "xìng fú" }, { word: "祝福", pinyin: "zhù fú" }],
    sentenceData: [{ char: "新", pinyin: "xīn" }, { char: "年", pinyin: "nián" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "祝", pinyin: "zhù" }, { char: "你", pinyin: "nǐ" }, { char: "幸", pinyin: "xìng" }, { char: "福", pinyin: "fú" }]
  },
  "辐": {
    pinyin: "fú",
    structure: "左右结构",
    composition: "车 + 畐",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "车字旁加畐，辐射辐条。",
    words: [{ word: "辐射", pinyin: "fú shè" }, { word: "辐条", pinyin: "fú tiáo" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "的", pinyin: "de" }, { char: "辐", pinyin: "fú" }, { char: "射", pinyin: "shè" }, { char: "很", pinyin: "hěn" }, { char: "强", pinyin: "qiáng" }]
  },
  "抚": {
    pinyin: "fǔ",
    structure: "左右结构",
    composition: "扌 + 无",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "无", pinyin: "wú" }],
    memoryTip: "提手旁加无，抚摸抚养。",
    words: [{ word: "抚摸", pinyin: "fǔ mō" }, { word: "抚养", pinyin: "fǔ yǎng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "轻", pinyin: "qīng" }, { char: "轻", pinyin: "qīng" }, { char: "抚", pinyin: "fǔ" }, { char: "摸", pinyin: "mō" }, { char: "着", pinyin: "zhe" }, { char: "我", pinyin: "wǒ" }]
  },
  "府": {
    pinyin: "fǔ",
    structure: "半包围结构",
    composition: "广 + 付",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "付", pinyin: "fù" }],
    memoryTip: "广字头加付，政府府邸。",
    words: [{ word: "政府", pinyin: "zhèng fǔ" }, { word: "府邸", pinyin: "fǔ dǐ" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "市", pinyin: "shì" }, { char: "政", pinyin: "zhèng" }, { char: "府", pinyin: "fǔ" }, { char: "大", pinyin: "dà" }, { char: "楼", pinyin: "lóu" }]
  },
  "辅": {
    pinyin: "fǔ",
    structure: "左右结构",
    composition: "车 + 甫",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "甫", pinyin: "fǔ" }],
    memoryTip: "车字旁加甫，辅导辅助。",
    words: [{ word: "辅导", pinyin: "fǔ dǎo" }, { word: "辅助", pinyin: "fǔ zhù" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "辅", pinyin: "fǔ" }, { char: "导", pinyin: "dǎo" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "腐": {
    pinyin: "fǔ",
    structure: "半包围结构",
    composition: "广 + 付 + 肉",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "付", pinyin: "fù" }, { char: "肉", pinyin: "ròu" }],
    memoryTip: "广字头加付加肉，腐烂腐败。",
    words: [{ word: "腐烂", pinyin: "fǔ làn" }, { word: "腐败", pinyin: "fǔ bài" }],
    sentenceData: [{ char: "水", pinyin: "shuǐ" }, { char: "果", pinyin: "guǒ" }, { char: "放", pinyin: "fàng" }, { char: "久", pinyin: "jiǔ" }, { char: "了", pinyin: "le" }, { char: "会", pinyin: "huì" }, { char: "腐", pinyin: "fǔ" }, { char: "烂", pinyin: "làn" }]
  },
  "父": {
    pinyin: "fù",
    structure: "独体字",
    composition: "父",
    compositionParts: [{ char: "父", pinyin: "fù" }],
    memoryTip: "交叉两笔是父亲，父母父子。",
    words: [{ word: "父母", pinyin: "fù mǔ" }, { word: "父子", pinyin: "fù zǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "父", pinyin: "fù" }, { char: "亲", pinyin: "qīn" }, { char: "很", pinyin: "hěn" }, { char: "辛", pinyin: "xīn" }, { char: "苦", pinyin: "kǔ" }]
  },
  "付": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "亻 + 寸",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "单人旁加寸，支付付款。",
    words: [{ word: "支付", pinyin: "zhī fù" }, { word: "付款", pinyin: "fù kuǎn" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "在", pinyin: "zài" }, { char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "付", pinyin: "fù" }, { char: "款", pinyin: "kuǎn" }]
  },
  "妇": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "女 + 帚",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "帚", pinyin: "zhǒu" }],
    memoryTip: "女字旁加帚，妇女妇女。",
    words: [{ word: "妇女", pinyin: "fù nǚ" }, { word: "妇科", pinyin: "fù kē" }],
    sentenceData: [{ char: "妇", pinyin: "fù" }, { char: "女", pinyin: "nǚ" }, { char: "节", pinyin: "jié" }, { char: "快", pinyin: "kuài" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }]
  },
  "负": {
    pinyin: "fù",
    structure: "上下结构",
    composition: "⺤ + 贝",
    compositionParts: [{ char: "⺤", pinyin: "fù" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "刀字头加贝，负担负责。",
    words: [{ word: "负担", pinyin: "fù dān" }, { word: "负责", pinyin: "fù zé" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "负", pinyin: "fù" }, { char: "责", pinyin: "zé" }, { char: "这", pinyin: "zhè" }, { char: "项", pinyin: "xiàng" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }]
  },
  "附": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "阝 + 付",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "付", pinyin: "fù" }],
    memoryTip: "耳刀旁加付，附近附加。",
    words: [{ word: "附近", pinyin: "fù jìn" }, { word: "附加", pinyin: "fù jiā" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "附", pinyin: "fù" }, { char: "近", pinyin: "jìn" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "家", pinyin: "jiā" }, { char: "书", pinyin: "shū" }, { char: "店", pinyin: "diàn" }]
  },
  "复": {
    pinyin: "fù",
    structure: "上下结构",
    composition: "⺤ + 日 + 夂",
    compositionParts: [{ char: "⺤", pinyin: "fù" }, { char: "日", pinyin: "rì" }, { char: "夂", pinyin: "zhǐ" }],
    memoryTip: "刀字头加日加折文，复习重复。",
    words: [{ word: "复习", pinyin: "fù xí" }, { word: "重复", pinyin: "chóng fù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "复", pinyin: "fù" }, { char: "习", pinyin: "xí" }, { char: "这", pinyin: "zhè" }, { char: "些", pinyin: "xiē" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shi" }]
  },
  "赴": {
    pinyin: "fù",
    structure: "半包围结构",
    composition: "走 + 卜 + 口",
    compositionParts: [{ char: "走", pinyin: "zǒu" }, { char: "卜", pinyin: "bǔ" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "走之底加卜加口，赴宴赴约。",
    words: [{ word: "赴宴", pinyin: "fù yàn" }, { word: "赴约", pinyin: "fù yuē" }],
    sentenceData: [{ char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "要", pinyin: "yào" }, { char: "赴", pinyin: "fù" }, { char: "约", pinyin: "yuē" }, { char: "见", pinyin: "jiàn" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "yǒu" }]
  },
  "副": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "刂 + 畐",
    compositionParts: [{ char: "刂", pinyin: "dāo" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "立刀旁加畐，副手副食。",
    words: [{ word: "副手", pinyin: "fù shǒu" }, { word: "副食", pinyin: "fù shí" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "总", pinyin: "zǒng" }, { char: "经", pinyin: "jīng" }, { char: "理", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "副", pinyin: "fù" }, { char: "手", pinyin: "shǒu" }]
  },
  "傅": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "亻 + 尃",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "尃", pinyin: "fù" }],
    memoryTip: "单人旁加尃，师傅师傅。",
    words: [{ word: "师傅", pinyin: "shī fu" }, { word: "太傅", pinyin: "tài fù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "位", pinyin: "wèi" }, { char: "师", pinyin: "shī" }, { char: "傅", pinyin: "fu" }, { char: "教", pinyin: "jiāo" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "富": {
    pinyin: "fù",
    structure: "上下结构",
    composition: "宀 + 畐",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "畐", pinyin: "fú" }],
    memoryTip: "宝盖头加畐，富有财富。",
    words: [{ word: "富有", pinyin: "fù yǒu" }, { word: "财富", pinyin: "cái fù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "很", pinyin: "hěn" }, { char: "富", pinyin: "fù" }, { char: "有", pinyin: "yǒu" }, { char: "但", pinyin: "dàn" }, { char: "很", pinyin: "hěn" }, { char: "节", pinyin: "jié" }, { char: "俭", pinyin: "jiǎn" }]
  },
  "赋": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "贝 + 武",
    compositionParts: [{ char: "贝", pinyin: "bèi" }, { char: "武", pinyin: "wǔ" }],
    memoryTip: "贝字旁加武，天赋赋诗。",
    words: [{ word: "天赋", pinyin: "tiān fù" }, { word: "赋诗", pinyin: "fù shī" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }, { char: "的", pinyin: "de" }, { char: "天", pinyin: "tiān" }, { char: "赋", pinyin: "fù" }]
  },
  "腹": {
    pinyin: "fù",
    structure: "左右结构",
    composition: "月 + 复",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "复", pinyin: "fù" }],
    memoryTip: "月字旁加复，腹部腹泻。",
    words: [{ word: "腹部", pinyin: "fù bù" }, { word: "腹泻", pinyin: "fù xiè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "感", pinyin: "gǎn" }, { char: "觉", pinyin: "jué" }, { char: "腹", pinyin: "fù" }, { char: "部", pinyin: "bù" }, { char: "有", pinyin: "yǒu" }, { char: "些", pinyin: "xiē" }, { char: "不", pinyin: "bù" }, { char: "舒", pinyin: "shū" }, { char: "服", pinyin: "fu" }]
  },
  "覆": {
    pinyin: "fù",
    structure: "上下结构",
    composition: "覀 + 复",
    compositionParts: [{ char: "覀", pinyin: "xī" }, { char: "复", pinyin: "fù" }],
    memoryTip: "西字头加复，覆盖颠覆。",
    words: [{ word: "覆盖", pinyin: "fù gài" }, { word: "颠覆", pinyin: "diān fù" }],
    sentenceData: [{ char: "雪", pinyin: "xuě" }, { char: "覆", pinyin: "fù" }, { char: "盖", pinyin: "gài" }, { char: "了", pinyin: "le" }, { char: "整", pinyin: "zhěng" }, { char: "个", pinyin: "ge" }, { char: "村", pinyin: "cūn" }, { char: "庄", pinyin: "zhuāng" }]
  },
  "该": {
    pinyin: "gāi",
    structure: "左右结构",
    composition: "讠 + 亥",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "亥", pinyin: "hài" }],
    memoryTip: "言字旁加亥，应该该当。",
    words: [{ word: "应该", pinyin: "yīng gāi" }, { word: "该当", pinyin: "gāi dāng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "好", pinyin: "hǎo" }, { char: "好", pinyin: "hǎo" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "改": {
    pinyin: "gǎi",
    structure: "左右结构",
    composition: "己 + 攵",
    compositionParts: [{ char: "己", pinyin: "jǐ" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "己字加反文旁，改变改正。",
    words: [{ word: "改变", pinyin: "gǎi biàn" }, { word: "改正", pinyin: "gǎi zhèng" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "改", pinyin: "gǎi" }, { char: "正", pinyin: "zhèng" }, { char: "你", pinyin: "nǐ" }, { char: "的", pinyin: "de" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }]
  },
  "钙": {
    pinyin: "gài",
    structure: "左右结构",
    composition: "钅 + 丐",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "丐", pinyin: "gài" }],
    memoryTip: "金字旁加丐，钙质钙片。",
    words: [{ word: "钙质", pinyin: "gài zhì" }, { word: "钙片", pinyin: "gài piàn" }],
    sentenceData: [{ char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "补", pinyin: "bǔ" }, { char: "充", pinyin: "chōng" }, { char: "钙", pinyin: "gài" }, { char: "质", pinyin: "zhì" }]
  },
  "盖": {
    pinyin: "gài",
    structure: "上下结构",
    composition: "艹 + 盍",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "盍", pinyin: "hé" }],
    memoryTip: "草字头加盍，盖子覆盖。",
    words: [{ word: "盖子", pinyin: "gài zi" }, { word: "覆盖", pinyin: "fù gài" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "锅", pinyin: "guō" }, { char: "盖", pinyin: "gài" }, { char: "好", pinyin: "hǎo" }]
  },
  "溉": {
    pinyin: "gài",
    structure: "左右结构",
    composition: "氵 + 旡",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "旡", pinyin: "jì" }],
    memoryTip: "三点水加旡，灌溉浇溉。",
    words: [{ word: "灌溉", pinyin: "guàn gài" }, { word: "浇溉", pinyin: "jiāo gài" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "用", pinyin: "yòng" }, { char: "河", pinyin: "hé" }, { char: "水", pinyin: "shuǐ" }, { char: "灌", pinyin: "guàn" }, { char: "溉", pinyin: "gài" }, { char: "农", pinyin: "nóng" }, { char: "田", pinyin: "tián" }]
  },
  "概": {
    pinyin: "gài",
    structure: "左右结构",
    composition: "木 + 既",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "既", pinyin: "jì" }],
    memoryTip: "木字旁加既，大概概括。",
    words: [{ word: "大概", pinyin: "dà gài" }, { word: "概括", pinyin: "gài kuò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }, { char: "大", pinyin: "dà" }, { char: "概", pinyin: "gài" }, { char: "是", pinyin: "shì" }, { char: "这", pinyin: "zhè" }, { char: "样", pinyin: "yàng" }]
  },
  "干": {
    pinyin: "gān",
    structure: "独体字",
    composition: "干",
    compositionParts: [{ char: "干", pinyin: "gān" }],
    memoryTip: "一横一竖一横，干净饼干。",
    words: [{ word: "干净", pinyin: "gān jìng" }, { word: "饼干", pinyin: "bǐng gān" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }]
  },
  "甘": {
    pinyin: "gān",
    structure: "独体字",
    composition: "甘",
    compositionParts: [{ char: "甘", pinyin: "gān" }],
    memoryTip: "一横口字加一横，甘甜甘心。",
    words: [{ word: "甘甜", pinyin: "gān tián" }, { word: "甘心", pinyin: "gān xīn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "很", pinyin: "hěn" }, { char: "甘", pinyin: "gān" }, { char: "甜", pinyin: "tián" }]
  },
  "杆": {
    pinyin: "gān",
    structure: "左右结构",
    composition: "木 + 干",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "干", pinyin: "gān" }],
    memoryTip: "木字旁加干，旗杆栏杆。",
    words: [{ word: "旗杆", pinyin: "qí gān" }, { word: "栏杆", pinyin: "lán gān" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "的", pinyin: "de" }, { char: "旗", pinyin: "qí" }, { char: "杆", pinyin: "gān" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }]
  },
  "肝": {
    pinyin: "gān",
    structure: "左右结构",
    composition: "月 + 干",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "干", pinyin: "gān" }],
    memoryTip: "月字旁加干，肝脏心肝。",
    words: [{ word: "肝脏", pinyin: "gān zàng" }, { word: "心肝", pinyin: "xīn gān" }],
    sentenceData: [{ char: "猪", pinyin: "zhū" }, { char: "肝", pinyin: "gān" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "食", pinyin: "shí" }, { char: "材", pinyin: "cái" }]
  },
  "赶": {
    pinyin: "gǎn",
    structure: "半包围结构",
    composition: "走 + 干",
    compositionParts: [{ char: "走", pinyin: "zǒu" }, { char: "干", pinyin: "gān" }],
    memoryTip: "走之底加干，赶路赶紧。",
    words: [{ word: "赶路", pinyin: "gǎn lù" }, { word: "赶紧", pinyin: "gǎn jǐn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "赶", pinyin: "gǎn" }, { char: "紧", pinyin: "jǐn" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }]
  },
  "敢": {
    pinyin: "gǎn",
    structure: "左右结构",
    composition: "敢",
    compositionParts: [{ char: "敢", pinyin: "gǎn" }],
    memoryTip: "古字加耳加又，勇敢敢于。",
    words: [{ word: "勇敢", pinyin: "yǒng gǎn" }, { word: "敢于", pinyin: "gǎn yú" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "勇", pinyin: "yǒng" }, { char: "敢", pinyin: "gǎn" }, { char: "的", pinyin: "de" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }]
  },
  "感": {
    pinyin: "gǎn",
    structure: "上下结构",
    composition: "咸 + 心",
    compositionParts: [{ char: "咸", pinyin: "xián" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "咸字加心，感情感觉。",
    words: [{ word: "感情", pinyin: "gǎn qíng" }, { word: "感觉", pinyin: "gǎn jué" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "感", pinyin: "gǎn" }, { char: "觉", pinyin: "jué" }, { char: "有", pinyin: "yǒu" }, { char: "些", pinyin: "xiē" }, { char: "疲", pinyin: "pí" }, { char: "劳", pinyin: "láo" }]
  },
  "刚": {
    pinyin: "gāng",
    structure: "左右结构",
    composition: "冈 + 刂",
    compositionParts: [{ char: "冈", pinyin: "gāng" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "冈字加立刀旁，刚刚刚才。",
    words: [{ word: "刚刚", pinyin: "gāng gāng" }, { word: "刚才", pinyin: "gāng cái" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "刚", pinyin: "gāng" }, { char: "刚", pinyin: "gāng" }, { char: "离", pinyin: "lí" }, { char: "开", pinyin: "kāi" }, { char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }]
  },
  "纲": {
    pinyin: "gāng",
    structure: "左右结构",
    composition: "纟 + 冈",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "冈", pinyin: "gāng" }],
    memoryTip: "绞丝旁加冈，纲领纲要。",
    words: [{ word: "纲领", pinyin: "gāng lǐng" }, { word: "纲要", pinyin: "gāng yào" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "的", pinyin: "de" }, { char: "纲", pinyin: "gāng" }, { char: "要", pinyin: "yào" }]
  },
  "缸": {
    pinyin: "gāng",
    structure: "左右结构",
    composition: "缶 + 工",
    compositionParts: [{ char: "缶", pinyin: "fǒu" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "缶字旁加工，水缸鱼缸。",
    words: [{ word: "水缸", pinyin: "shuǐ gāng" }, { word: "鱼缸", pinyin: "yú gāng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "家", pinyin: "jiā" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "大", pinyin: "dà" }, { char: "水", pinyin: "shuǐ" }, { char: "缸", pinyin: "gāng" }]
  },
  "钢": {
    pinyin: "gāng",
    structure: "左右结构",
    composition: "钅 + 冈",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "冈", pinyin: "gāng" }],
    memoryTip: "金字旁加冈，钢铁钢笔。",
    words: [{ word: "钢铁", pinyin: "gāng tiě" }, { word: "钢笔", pinyin: "gāng bǐ" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "支", pinyin: "zhī" }, { char: "钢", pinyin: "gāng" }, { char: "笔", pinyin: "bǐ" }, { char: "写", pinyin: "xiě" }, { char: "字", pinyin: "zì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "用", pinyin: "yòng" }]
  },
  "岗": {
    pinyin: "gǎng",
    structure: "上下结构",
    composition: "山 + 冈",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "冈", pinyin: "gāng" }],
    memoryTip: "山字头加冈，岗位站岗。",
    words: [{ word: "岗位", pinyin: "gǎng wèi" }, { word: "站岗", pinyin: "zhàn gǎng" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "门", pinyin: "mén" }, { char: "口", pinyin: "kǒu" }, { char: "站", pinyin: "zhàn" }, { char: "岗", pinyin: "gǎng" }]
  },
  "港": {
    pinyin: "gǎng",
    structure: "左右结构",
    composition: "氵 + 巷",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "巷", pinyin: "xiàng" }],
    memoryTip: "三点水加巷，港口港口。",
    words: [{ word: "港口", pinyin: "gǎng kǒu" }, { word: "海港", pinyin: "hǎi gǎng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "港", pinyin: "gǎng" }, { char: "口", pinyin: "kǒu" }, { char: "很", pinyin: "hěn" }, { char: "繁", pinyin: "fán" }, { char: "忙", pinyin: "máng" }]
  },
  "高": {
    pinyin: "gāo",
    structure: "上下结构",
    composition: "高",
    compositionParts: [{ char: "高", pinyin: "gāo" }],
    memoryTip: "一点一横口字头，高大高兴。",
    words: [{ word: "高大", pinyin: "gāo dà" }, { word: "高兴", pinyin: "gāo xìng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }]
  },
  "搞": {
    pinyin: "gǎo",
    structure: "左右结构",
    composition: "扌 + 高",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "高", pinyin: "gāo" }],
    memoryTip: "提手旁加高，搞好搞卫生。",
    words: [{ word: "搞好", pinyin: "gǎo hǎo" }, { word: "搞卫生", pinyin: "gǎo wèi shēng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "搞", pinyin: "gǎo" }, { char: "好", pinyin: "hǎo" }, { char: "班", pinyin: "bān" }, { char: "级", pinyin: "jí" }, { char: "卫", pinyin: "wèi" }, { char: "生", pinyin: "shēng" }]
  },
  "稿": {
    pinyin: "gǎo",
    structure: "左右结构",
    composition: "禾 + 高",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "高", pinyin: "gāo" }],
    memoryTip: "禾字旁加高，稿件草稿。",
    words: [{ word: "稿件", pinyin: "gǎo jiàn" }, { word: "草稿", pinyin: "cǎo gǎo" }],
    sentenceData: [{ char: "作", pinyin: "zuò" }, { char: "者", pinyin: "zhě" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "写", pinyin: "xiě" }, { char: "稿", pinyin: "gǎo" }, { char: "子", pinyin: "zi" }]
  },
  "故": {
    pinyin: "gù",
    structure: "左右结构",
    composition: "古 + 攵",
    compositionParts: [{ char: "古", pinyin: "gǔ" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "古字加反文旁，故事故乡。",
    words: [{ word: "故事", pinyin: "gù shi" }, { word: "故乡", pinyin: "gù xiāng" }],
    sentenceData: [{ char: "奶", pinyin: "nǎi" }, { char: "奶", pinyin: "nǎi" }, { char: "讲", pinyin: "jiǎng" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shi" }]
  },
  "顾": {
    pinyin: "gù",
    structure: "左右结构",
    composition: "户 + 页",
    compositionParts: [{ char: "户", pinyin: "hù" }, { char: "页", pinyin: "yè" }],
    memoryTip: "户字头加页，照顾顾客。",
    words: [{ word: "照顾", pinyin: "zhào gù" }, { word: "顾客", pinyin: "gù kè" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "照", pinyin: "zhào" }, { char: "顾", pinyin: "gù" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }]
  },
  "瓜": {
    pinyin: "guā",
    structure: "独体字",
    composition: "瓜",
    compositionParts: [{ char: "瓜", pinyin: "guā" }],
    memoryTip: "一点一撇加个钩，西瓜冬瓜。",
    words: [{ word: "西瓜", pinyin: "xī guā" }, { word: "冬瓜", pinyin: "dōng guā" }],
    sentenceData: [{ char: "夏", pinyin: "xià" }, { char: "天", pinyin: "tiān" }, { char: "吃", pinyin: "chī" }, { char: "西", pinyin: "xī" }, { char: "瓜", pinyin: "guā" }, { char: "很", pinyin: "hěn" }, { char: "解", pinyin: "jiě" }, { char: "渴", pinyin: "kě" }]
  },
  "刮": {
    pinyin: "guā",
    structure: "左右结构",
    composition: "舌 + 刂",
    compositionParts: [{ char: "舌", pinyin: "shé" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "舌字旁加刀，刮风刮脸。",
    words: [{ word: "刮风", pinyin: "guā fēng" }, { word: "刮脸", pinyin: "guā liǎn" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "刮", pinyin: "guā" }, { char: "大", pinyin: "dà" }, { char: "风", pinyin: "fēng" }]
  },
  "挂": {
    pinyin: "guà",
    structure: "左右结构",
    composition: "扌 + 圭",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "圭", pinyin: "guī" }],
    memoryTip: "提手旁加圭，挂衣服挂电话。",
    words: [{ word: "挂衣服", pinyin: "guà yī fu" }, { word: "挂电话", pinyin: "guà diàn huà" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "外", pinyin: "wài" }, { char: "套", pinyin: "tào" }, { char: "挂", pinyin: "guà" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }]
  },
  "拐": {
    pinyin: "guǎi",
    structure: "左右结构",
    composition: "扌 + 另",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "另", pinyin: "lìng" }],
    memoryTip: "提手旁加另，拐弯拐杖。",
    words: [{ word: "拐弯", pinyin: "guǎi wān" }, { word: "拐杖", pinyin: "guǎi zhàng" }],
    sentenceData: [{ char: "爷", pinyin: "yé" }, { char: "爷", pinyin: "yé" }, { char: "拄", pinyin: "zhǔ" }, { char: "着", pinyin: "zhe" }, { char: "拐", pinyin: "guǎi" }, { char: "杖", pinyin: "zhàng" }, { char: "走", pinyin: "zǒu" }, { char: "路", pinyin: "lù" }]
  },
  "怪": {
    pinyin: "guài",
    structure: "左右结构",
    composition: "忄 + 圣",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "圣", pinyin: "shèng" }],
    memoryTip: "竖心旁加圣，奇怪怪物。",
    words: [{ word: "奇怪", pinyin: "qí guài" }, { word: "怪物", pinyin: "guài wu" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "事", pinyin: "shì" }, { char: "真", pinyin: "zhēn" }, { char: "奇", pinyin: "qí" }, { char: "怪", pinyin: "guài" }]
  },
  "关": {
    pinyin: "guān",
    structure: "上下结构",
    composition: "关",
    compositionParts: [{ char: "关", pinyin: "guān" }],
    memoryTip: "两点一横加个天，关心关门。",
    words: [{ word: "关心", pinyin: "guān xīn" }, { word: "关门", pinyin: "guān mén" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "很", pinyin: "hěn" }, { char: "关", pinyin: "guān" }, { char: "心", pinyin: "xīn" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "观": {
    pinyin: "guān",
    structure: "左右结构",
    composition: "又 + 见",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "又字加见，观看观察。",
    words: [{ word: "观看", pinyin: "guān kàn" }, { word: "观察", pinyin: "guān chá" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "观", pinyin: "guān" }, { char: "看", pinyin: "kàn" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }]
  },
  "官": {
    pinyin: "guān",
    structure: "上下结构",
    composition: "宀 + 去掉两点的去掉",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "去掉两点的去掉", pinyin: "guān" }],
    memoryTip: "宝盖头加官，官员军官。",
    words: [{ word: "官员", pinyin: "guān yuán" }, { word: "军官", pinyin: "jūn guān" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "父", pinyin: "fù" }, { char: "亲", pinyin: "qīn" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }, { char: "军", pinyin: "jūn" }, { char: "官", pinyin: "guān" }]
  },
  "冠": {
    pinyin: "guān",
    structure: "上下结构",
    composition: "冖 + 元 + 寸",
    compositionParts: [{ char: "冖", pinyin: "mì" }, { char: "元", pinyin: "yuán" }, { char: "寸", pinyin: "cùn" }],
    memoryTip: "秃宝盖加元加寸，冠军衣冠。",
    words: [{ word: "冠军", pinyin: "guàn jūn" }, { word: "衣冠", pinyin: "yī guān" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "获", pinyin: "huò" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }, { char: "冠", pinyin: "guàn" }, { char: "军", pinyin: "jūn" }]
  },
  "馆": {
    pinyin: "guǎn",
    structure: "左右结构",
    composition: "饣 + 官",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "官", pinyin: "guān" }],
    memoryTip: "食字旁加官，饭馆旅馆。",
    words: [{ word: "饭馆", pinyin: "fàn guǎn" }, { word: "旅馆", pinyin: "lǚ guǎn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "饭", pinyin: "fàn" }, { char: "馆", pinyin: "guǎn" }, { char: "吃", pinyin: "chī" }, { char: "饭", pinyin: "fàn" }]
  },
  "管": {
    pinyin: "guǎn",
    structure: "上下结构",
    composition: "竹 + 官",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "官", pinyin: "guān" }],
    memoryTip: "竹字头加官，管理水管。",
    words: [{ word: "管理", pinyin: "guǎn lǐ" }, { word: "水管", pinyin: "shuǐ guǎn" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "管", pinyin: "guǎn" }, { char: "理", pinyin: "lǐ" }, { char: "班", pinyin: "bān" }, { char: "级", pinyin: "jí" }, { char: "很", pinyin: "hěn" }, { char: "严", pinyin: "yán" }, { char: "格", pinyin: "gé" }]
  },
  "贯": {
    pinyin: "guàn",
    structure: "上下结构",
    composition: "毌 + 贝",
    compositionParts: [{ char: "毌", pinyin: "guàn" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "毌字加贝，贯穿一贯。",
    words: [{ word: "贯穿", pinyin: "guàn chuān" }, { word: "一贯", pinyin: "yī guàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "条", pinyin: "tiáo" }, { char: "路", pinyin: "lù" }, { char: "贯", pinyin: "guàn" }, { char: "穿", pinyin: "chuān" }, { char: "整", pinyin: "zhěng" }, { char: "个", pinyin: "ge" }, { char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }]
  },
  "惯": {
    pinyin: "guàn",
    structure: "左右结构",
    composition: "忄 + 贯",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "贯", pinyin: "guàn" }],
    memoryTip: "竖心旁加贯，习惯习惯。",
    words: [{ word: "习惯", pinyin: "xí guàn" }, { word: "习惯", pinyin: "xí guàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "习", pinyin: "xí" }, { char: "惯", pinyin: "guàn" }, { char: "了", pinyin: "le" }, { char: "早", pinyin: "zǎo" }, { char: "起", pinyin: "qǐ" }]
  },
  "灌": {
    pinyin: "guàn",
    structure: "左右结构",
    composition: "氵 + 贯",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "贯", pinyin: "guàn" }],
    memoryTip: "三点水加贯，灌溉灌水。",
    words: [{ word: "灌溉", pinyin: "guàn gài" }, { word: "灌水", pinyin: "guàn shuǐ" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "用", pinyin: "yòng" }, { char: "河", pinyin: "hé" }, { char: "水", pinyin: "shuǐ" }, { char: "灌", pinyin: "guàn" }, { char: "溉", pinyin: "gài" }, { char: "农", pinyin: "nóng" }, { char: "田", pinyin: "tián" }]
  },
  "光": {
    pinyin: "guāng",
    structure: "上下结构",
    composition: "光",
    compositionParts: [{ char: "光", pinyin: "guāng" }],
    memoryTip: "上面像小儿，下面像儿，阳光光明。",
    words: [{ word: "阳光", pinyin: "yáng guāng" }, { word: "光明", pinyin: "guāng míng" }],
    sentenceData: [{ char: "阳", pinyin: "yáng" }, { char: "光", pinyin: "guāng" }, { char: "照", pinyin: "zhào" }, { char: "在", pinyin: "zài" }, { char: "窗", pinyin: "chuāng" }, { char: "户", pinyin: "hù" }, { char: "上", pinyin: "shàng" }]
  },
  "广": {
    pinyin: "guǎng",
    structure: "独体字",
    composition: "广",
    compositionParts: [{ char: "广", pinyin: "guǎng" }],
    memoryTip: "一点一横加个撇，广阔广告。",
    words: [{ word: "广阔", pinyin: "guǎng kuò" }, { word: "广告", pinyin: "guǎng gào" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "片", pinyin: "piàn" }, { char: "草", pinyin: "cǎo" }, { char: "原", pinyin: "yuán" }, { char: "很", pinyin: "hěn" }, { char: "广", pinyin: "guǎng" }, { char: "阔", pinyin: "kuò" }]
  },
  "归": {
    pinyin: "guī",
    structure: "左右结构",
    composition: "刂 + 巾",
    compositionParts: [{ char: "刂", pinyin: "dāo" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "立刀旁加巾，回归归还。",
    words: [{ word: "回归", pinyin: "huí guī" }, { word: "归还", pinyin: "guī huán" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "按", pinyin: "àn" }, { char: "时", pinyin: "shí" }, { char: "归", pinyin: "guī" }, { char: "还", pinyin: "huán" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }]
  },
  "龟": {
    pinyin: "guī",
    structure: "上下结构",
    composition: "龟",
    compositionParts: [{ char: "龟", pinyin: "guī" }],
    memoryTip: "像乌龟的形状，乌龟龟壳。",
    words: [{ word: "乌龟", pinyin: "wū guī" }, { word: "龟壳", pinyin: "guī ké" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "乌", pinyin: "wū" }, { char: "龟", pinyin: "guī" }, { char: "在", pinyin: "zài" }, { char: "池", pinyin: "chí" }, { char: "塘", pinyin: "táng" }, { char: "里", pinyin: "lǐ" }, { char: "游", pinyin: "yóu" }, { char: "泳", pinyin: "yǒng" }]
  },
  "规": {
    pinyin: "guī",
    structure: "左右结构",
    composition: "夫 + 见",
    compositionParts: [{ char: "夫", pinyin: "fū" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "夫字加见，规定规则。",
    words: [{ word: "规定", pinyin: "guī dìng" }, { word: "规则", pinyin: "guī zé" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "有", pinyin: "yǒu" }, { char: "明", pinyin: "míng" }, { char: "确", pinyin: "què" }, { char: "的", pinyin: "de" }, { char: "规", pinyin: "guī" }, { char: "定", pinyin: "dìng" }]
  },
  "硅": {
    pinyin: "guī",
    structure: "左右结构",
    composition: "石 + 圭",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "圭", pinyin: "guī" }],
    memoryTip: "石字旁加圭，硅谷硅胶。",
    words: [{ word: "硅谷", pinyin: "guī gǔ" }, { word: "硅胶", pinyin: "guī jiāo" }],
    sentenceData: [{ char: "硅", pinyin: "guī" }, { char: "谷", pinyin: "gǔ" }, { char: "是", pinyin: "shì" }, { char: "世", pinyin: "shì" }, { char: "界", pinyin: "jiè" }, { char: "上", pinyin: "shàng" }, { char: "最", pinyin: "zuì" }, { char: "大", pinyin: "dà" }, { char: "的", pinyin: "de" }, { char: "科", pinyin: "kē" }, { char: "技", pinyin: "jì" }, { char: "中", pinyin: "zhōng" }, { char: "心", pinyin: "xīn" }]
  },
  "轨": {
    pinyin: "guǐ",
    structure: "左右结构",
    composition: "车 + 九",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "九", pinyin: "jiǔ" }],
    memoryTip: "车字旁加九，轨道出轨。",
    words: [{ word: "轨道", pinyin: "guǐ dào" }, { word: "出轨", pinyin: "chū guǐ" }],
    sentenceData: [{ char: "火", pinyin: "huǒ" }, { char: "车", pinyin: "chē" }, { char: "在", pinyin: "zài" }, { char: "轨", pinyin: "guǐ" }, { char: "道", pinyin: "dào" }, { char: "上", pinyin: "shàng" }, { char: "行", pinyin: "xíng" }, { char: "驶", pinyin: "shǐ" }]
  },
  "鬼": {
    pinyin: "guǐ",
    structure: "独体字",
    composition: "鬼",
    compositionParts: [{ char: "鬼", pinyin: "guǐ" }],
    memoryTip: "像鬼的形状，鬼怪魔鬼。",
    words: [{ word: "鬼怪", pinyin: "guǐ guài" }, { word: "魔鬼", pinyin: "mó guǐ" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "孩", pinyin: "hái" }, { char: "害", pinyin: "hài" }, { char: "怕", pinyin: "pà" }, { char: "听", pinyin: "tīng" }, { char: "鬼", pinyin: "guǐ" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shi" }]
  },
  "柜": {
    pinyin: "guì",
    structure: "左右结构",
    composition: "木 + 巨",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "巨", pinyin: "jù" }],
    memoryTip: "木字旁加巨，柜子柜台。",
    words: [{ word: "柜子", pinyin: "guì zi" }, { word: "柜台", pinyin: "guì tái" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "柜", pinyin: "guì" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "大", pinyin: "dà" }]
  },
  "贵": {
    pinyin: "guì",
    structure: "上下结构",
    composition: "中 + 一 + 贝",
    compositionParts: [{ char: "中", pinyin: "zhōng" }, { char: "一", pinyin: "yī" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "中字加一加贝，高贵宝贵。",
    words: [{ word: "高贵", pinyin: "gāo guì" }, { word: "宝贵", pinyin: "bǎo guì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "很", pinyin: "hěn" }, { char: "贵", pinyin: "guì" }]
  },
  "桂": {
    pinyin: "guì",
    structure: "左右结构",
    composition: "木 + 圭",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "圭", pinyin: "guī" }],
    memoryTip: "木字旁加圭，桂花肉桂。",
    words: [{ word: "桂花", pinyin: "guì huā" }, { word: "肉桂", pinyin: "ròu guì" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "桂", pinyin: "guì" }, { char: "花", pinyin: "huā" }, { char: "香", pinyin: "xiāng" }]
  },
  "跪": {
    pinyin: "guì",
    structure: "左右结构",
    composition: "足 + 危",
    compositionParts: [{ char: "足", pinyin: "zú" }, { char: "危", pinyin: "wēi" }],
    memoryTip: "足字旁加危，下跪跪拜。",
    words: [{ word: "下跪", pinyin: "xià guì" }, { word: "跪拜", pinyin: "guì bài" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "双", pinyin: "shuāng" }, { char: "膝", pinyin: "xī" }, { char: "跪", pinyin: "guì" }, { char: "地", pinyin: "dì" }, { char: "请", pinyin: "qǐng" }, { char: "罪", pinyin: "zuì" }]
  },
  "滚": {
    pinyin: "gǔn",
    structure: "左右结构",
    composition: "氵 + 衮",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "衮", pinyin: "gǔn" }],
    memoryTip: "三点水加衮，滚动滚蛋。",
    words: [{ word: "滚动", pinyin: "gǔn dòng" }, { word: "滚蛋", pinyin: "gǔn dàn" }],
    sentenceData: [{ char: "球", pinyin: "qiú" }, { char: "从", pinyin: "cóng" }, { char: "山", pinyin: "shān" }, { char: "坡", pinyin: "pō" }, { char: "上", pinyin: "shàng" }, { char: "滚", pinyin: "gǔn" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }]
  },
  "棍": {
    pinyin: "gùn",
    structure: "左右结构",
    composition: "木 + 昆",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "昆", pinyin: "kūn" }],
    memoryTip: "木字旁加昆，棍子恶棍。",
    words: [{ word: "棍子", pinyin: "gùn zi" }, { word: "恶棍", pinyin: "è gùn" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "用", pinyin: "yòng" }, { char: "警", pinyin: "jǐng" }, { char: "棍", pinyin: "gùn" }, { char: "抓", pinyin: "zhuā" }, { char: "坏", pinyin: "huài" }, { char: "人", pinyin: "rén" }]
  },
  "锅": {
    pinyin: "guō",
    structure: "左右结构",
    composition: "钅 + 呙",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "呙", pinyin: "guō" }],
    memoryTip: "金字旁加呙，锅子火锅。",
    words: [{ word: "锅子", pinyin: "guō zi" }, { word: "火锅", pinyin: "huǒ guō" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "用", pinyin: "yòng" }, { char: "新", pinyin: "xīn" }, { char: "锅", pinyin: "guō" }, { char: "做", pinyin: "zuò" }, { char: "饭", pinyin: "fàn" }]
  },
  "国": {
    pinyin: "guó",
    structure: "全包围结构",
    composition: "囗 + 玉",
    compositionParts: [{ char: "囗", pinyin: "wéi" }, { char: "玉", pinyin: "yù" }],
    memoryTip: "大口框加玉，国家中国。",
    words: [{ word: "国家", pinyin: "guó jiā" }, { word: "中国", pinyin: "zhōng guó" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "祖", pinyin: "zǔ" }, { char: "国", pinyin: "guó" }]
  },
  "果": {
    pinyin: "guǒ",
    structure: "上下结构",
    composition: "果",
    compositionParts: [{ char: "果", pinyin: "guǒ" }],
    memoryTip: "田字加木，水果结果。",
    words: [{ word: "水果", pinyin: "shuǐ guǒ" }, { word: "结果", pinyin: "jié guǒ" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "很", pinyin: "hěn" }, { char: "甜", pinyin: "tián" }]
  },
  "过": {
    pinyin: "guò",
    structure: "半包围结构",
    composition: "寸 + 辶",
    compositionParts: [{ char: "寸", pinyin: "cùn" }, { char: "辶", pinyin: "chuò" }],
    memoryTip: "寸字加走之底，过去经过。",
    words: [{ word: "过去", pinyin: "guò qù" }, { word: "经过", pinyin: "jīng guò" }],
    sentenceData: [{ char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "过", pinyin: "guò" }, { char: "得", pinyin: "dé" }, { char: "真", pinyin: "zhēn" }, { char: "快", pinyin: "kuài" }]
  },
  "哈": {
    pinyin: "hā",
    structure: "左右结构",
    composition: "口 + 合",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "合", pinyin: "hé" }],
    memoryTip: "口字旁加合，哈哈笑哈气。",
    words: [{ word: "哈哈笑", pinyin: "hā hā xiào" }, { word: "哈气", pinyin: "hā qì" }],
    sentenceData: [{ char: "听", pinyin: "tīng" }, { char: "到", pinyin: "dào" }, { char: "好", pinyin: "hǎo" }, { char: "笑", pinyin: "xiào" }, { char: "话", pinyin: "huà" }, { char: "他", pinyin: "tā" }, { char: "哈", pinyin: "hā" }, { char: "哈", pinyin: "hā" }, { char: "大", pinyin: "dà" }, { char: "笑", pinyin: "xiào" }]
  },
  "孩": {
    pinyin: "hái",
    structure: "左右结构",
    composition: "子 + 亥",
    compositionParts: [{ char: "子", pinyin: "zǐ" }, { char: "亥", pinyin: "hài" }],
    memoryTip: "子字旁加亥，孩子小孩。",
    words: [{ word: "孩子", pinyin: "hái zi" }, { word: "小孩", pinyin: "xiǎo hái" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "聪", pinyin: "cōng" }, { char: "明", pinyin: "míng" }]
  },
  "海": {
    pinyin: "hǎi",
    structure: "左右结构",
    composition: "氵 + 每",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "每", pinyin: "měi" }],
    memoryTip: "三点水加每，大海海洋。",
    words: [{ word: "大海", pinyin: "dà hǎi" }, { word: "海洋", pinyin: "hǎi yáng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "海", pinyin: "hǎi" }, { char: "边", pinyin: "biān" }, { char: "玩", pinyin: "wán" }]
  },
  "亥": {
    pinyin: "hài",
    structure: "独体字",
    composition: "亥",
    compositionParts: [{ char: "亥", pinyin: "hài" }],
    memoryTip: "像人的形象，亥时亥猪。",
    words: [{ word: "亥时", pinyin: "hài shí" }, { word: "亥猪", pinyin: "hài zhū" }],
    sentenceData: [{ char: "亥", pinyin: "hài" }, { char: "时", pinyin: "shí" }, { char: "是", pinyin: "shì" }, { char: "晚", pinyin: "wǎn" }, { char: "上", pinyin: "shàng" }, { char: "九", pinyin: "jiǔ" }, { char: "点", pinyin: "diǎn" }, { char: "到", pinyin: "dào" }, { char: "十", pinyin: "shí" }, { char: "一", pinyin: "yī" }, { char: "点", pinyin: "diǎn" }]
  },
  "害": {
    pinyin: "hài",
    structure: "上下结构",
    composition: "宀 + 丰 + 口",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "丰", pinyin: "fēng" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "宝盖头加丰加口，害怕害虫。",
    words: [{ word: "害怕", pinyin: "hài pà" }, { word: "害虫", pinyin: "hài chóng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "害", pinyin: "hài" }, { char: "怕", pinyin: "pà" }, { char: "黑", pinyin: "hēi" }, { char: "暗", pinyin: "àn" }]
  },
  "含": {
    pinyin: "hán",
    structure: "上下结构",
    composition: "今 + 口",
    compositionParts: [{ char: "今", pinyin: "jīn" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "今字加口，包含含蓄。",
    words: [{ word: "包含", pinyin: "bāo hán" }, { word: "含蓄", pinyin: "hán xù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }, { char: "包", pinyin: "bāo" }, { char: "含", pinyin: "hán" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shi" }]
  },
  "函": {
    pinyin: "hán",
    structure: "独体字",
    composition: "函",
    compositionParts: [{ char: "函", pinyin: "hán" }],
    memoryTip: "像信封的形状，函数信函。",
    words: [{ word: "函数", pinyin: "hán shù" }, { word: "信函", pinyin: "xìn hán" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "收", pinyin: "shōu" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "封", pinyin: "fēng" }, { char: "信", pinyin: "xìn" }, { char: "函", pinyin: "hán" }]
  },
  "寒": {
    pinyin: "hán",
    structure: "上下结构",
    composition: "宀 + 仌 + 冫",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "仌", pinyin: "bīng" }, { char: "冫", pinyin: "bīng" }],
    memoryTip: "宝盖头加两点加人加两点，寒冷寒风。",
    words: [{ word: "寒冷", pinyin: "hán lěng" }, { word: "寒风", pinyin: "hán fēng" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "很", pinyin: "hěn" }, { char: "寒", pinyin: "hán" }, { char: "冷", pinyin: "lěng" }]
  },
  "喊": {
    pinyin: "hǎn",
    structure: "左右结构",
    composition: "口 + 咸",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "咸", pinyin: "xián" }],
    memoryTip: "口字旁加咸，喊叫呼喊。",
    words: [{ word: "喊叫", pinyin: "hǎn jiào" }, { word: "呼喊", pinyin: "hū hǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "大", pinyin: "dà" }, { char: "声", pinyin: "shēng" }, { char: "喊", pinyin: "hǎn" }, { char: "着", pinyin: "zhe" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "名", pinyin: "míng" }, { char: "字", pinyin: "zì" }]
  },
  "汉": {
    pinyin: "hàn",
    structure: "左右结构",
    composition: "氵 + 又",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "三点水加又，汉族汉字。",
    words: [{ word: "汉族", pinyin: "hàn zú" }, { word: "汉字", pinyin: "hàn zì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "是", pinyin: "shì" }, { char: "汉", pinyin: "hàn" }, { char: "族", pinyin: "zú" }]
  },
  "汗": {
    pinyin: "hàn",
    structure: "左右结构",
    composition: "氵 + 干",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "干", pinyin: "gān" }],
    memoryTip: "三点水加干，汗水出汗。",
    words: [{ word: "汗水", pinyin: "hàn shuǐ" }, { word: "出汗", pinyin: "chū hàn" }],
    sentenceData: [{ char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "汗", pinyin: "hàn" }, { char: "水", pinyin: "shuǐ" }]
  },
  "旱": {
    pinyin: "hàn",
    structure: "上下结构",
    composition: "日 + 干",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "干", pinyin: "gān" }],
    memoryTip: "日字加干，干旱旱灾。",
    words: [{ word: "干旱", pinyin: "gān hàn" }, { word: "旱灾", pinyin: "hàn zāi" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "年", pinyin: "nián" }, { char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "干", pinyin: "gān" }, { char: "旱", pinyin: "hàn" }]
  },
  "捍": {
    pinyin: "hàn",
    structure: "左右结构",
    composition: "扌 + 旱",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "旱", pinyin: "hàn" }],
    memoryTip: "提手旁加旱，捍卫捍御。",
    words: [{ word: "捍卫", pinyin: "hàn wèi" }, { word: "捍御", pinyin: "hàn yù" }],
    sentenceData: [{ char: "军", pinyin: "jūn" }, { char: "人", pinyin: "rén" }, { char: "捍", pinyin: "hàn" }, { char: "卫", pinyin: "wèi" }, { char: "祖", pinyin: "zǔ" }, { char: "国", pinyin: "guó" }]
  },
  "焊": {
    pinyin: "hàn",
    structure: "左右结构",
    composition: "火 + 旱",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "旱", pinyin: "hàn" }],
    memoryTip: "火字旁加旱，焊接电焊。",
    words: [{ word: "焊接", pinyin: "hàn jiē" }, { word: "电焊", pinyin: "diàn hàn" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "在", pinyin: "zài" }, { char: "焊", pinyin: "hàn" }, { char: "接", pinyin: "jiē" }, { char: "钢", pinyin: "gāng" }, { char: "铁", pinyin: "tiě" }]
  },
  "行": {
    pinyin: "háng",
    structure: "左右结构",
    composition: "彳 + 亍",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "亍", pinyin: "chù" }],
    memoryTip: "双人旁加亍，银行行业。",
    words: [{ word: "银行", pinyin: "yín háng" }, { word: "行业", pinyin: "háng yè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "在", pinyin: "zài" }, { char: "银", pinyin: "yín" }, { char: "行", pinyin: "háng" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }]
  },
  "航": {
    pinyin: "háng",
    structure: "左右结构",
    composition: "舟 + 亢",
    compositionParts: [{ char: "舟", pinyin: "zhōu" }, { char: "亢", pinyin: "kàng" }],
    memoryTip: "舟字旁加亢，航行航空。",
    words: [{ word: "航行", pinyin: "háng xíng" }, { word: "航空", pinyin: "háng kōng" }],
    sentenceData: [{ char: "轮", pinyin: "lún" }, { char: "船", pinyin: "chuán" }, { char: "在", pinyin: "zài" }, { char: "大", pinyin: "dà" }, { char: "海", pinyin: "hǎi" }, { char: "上", pinyin: "shàng" }, { char: "航", pinyin: "háng" }, { char: "行", pinyin: "xíng" }]
  },
  "毫": {
    pinyin: "háo",
    structure: "上下结构",
    composition: "高 + 毛",
    compositionParts: [{ char: "高", pinyin: "gāo" }, { char: "毛", pinyin: "máo" }],
    memoryTip: "高字加毛，毫米毫毛。",
    words: [{ word: "毫米", pinyin: "háo mǐ" }, { word: "毫毛", pinyin: "háo máo" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "根", pinyin: "gēn" }, { char: "头", pinyin: "tóu" }, { char: "发", pinyin: "fà" }, { char: "细", pinyin: "xì" }, { char: "得", pinyin: "de" }, { char: "像", pinyin: "xiàng" }, { char: "毫", pinyin: "háo" }, { char: "毛", pinyin: "máo" }]
  },
  "豪": {
    pinyin: "háo",
    structure: "上下结构",
    composition: "高 + 豕",
    compositionParts: [{ char: "高", pinyin: "gāo" }, { char: "豕", pinyin: "shǐ" }],
    memoryTip: "高字加豕，豪杰豪放。",
    words: [{ word: "豪杰", pinyin: "háo jié" }, { word: "豪放", pinyin: "háo fàng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "位", pinyin: "wèi" }, { char: "英", pinyin: "yīng" }, { char: "雄", pinyin: "xióng" }, { char: "豪", pinyin: "háo" }, { char: "杰", pinyin: "jié" }]
  },
  "好": {
    pinyin: "hǎo",
    structure: "左右结构",
    composition: "女 + 子",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "子", pinyin: "zǐ" }],
    memoryTip: "女字旁加子，好人好事。",
    words: [{ word: "好人", pinyin: "hǎo rén" }, { word: "好事", pinyin: "hǎo shì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "好", pinyin: "hǎo" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }]
  },
  "号": {
    pinyin: "hào",
    structure: "上下结构",
    composition: "号",
    compositionParts: [{ char: "号", pinyin: "hào" }],
    memoryTip: "口字加横折，号码口号。",
    words: [{ word: "号码", pinyin: "hào mǎ" }, { word: "口号", pinyin: "kǒu hào" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "记", pinyin: "jì" }, { char: "住", pinyin: "zhù" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "电", pinyin: "diàn" }, { char: "话", pinyin: "huà" }, { char: "号", pinyin: "hào" }, { char: "码", pinyin: "mǎ" }]
  },
  "浩": {
    pinyin: "hào",
    structure: "左右结构",
    composition: "氵 + 告",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "告", pinyin: "gào" }],
    memoryTip: "三点水加告，浩大浩瀚。",
    words: [{ word: "浩大", pinyin: "hào dà" }, { word: "浩瀚", pinyin: "hào hàn" }],
    sentenceData: [{ char: "浩", pinyin: "hào" }, { char: "瀚", pinyin: "hàn" }, { char: "的", pinyin: "de" }, { char: "星", pinyin: "xīng" }, { char: "空", pinyin: "kōng" }, { char: "无", pinyin: "wú" }, { char: "边", pinyin: "biān" }, { char: "无", pinyin: "wú" }, { char: "际", pinyin: "jì" }]
  },
  "呵": {
    pinyin: "hē",
    structure: "左右结构",
    composition: "口 + 可",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "可", pinyin: "kě" }],
    memoryTip: "口字旁加可，呵呵呵护。",
    words: [{ word: "呵呵", pinyin: "hē hē" }, { word: "呵护", pinyin: "hē hù" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "呵", pinyin: "hē" }, { char: "护", pinyin: "hù" }, { char: "着", pinyin: "zhe" }, { char: "我", pinyin: "wǒ" }, { char: "成", pinyin: "chéng" }, { char: "长", pinyin: "zhǎng" }]
  },
  "喝": {
    pinyin: "hē",
    structure: "左右结构",
    composition: "口 + 曷",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "曷", pinyin: "hé" }],
    memoryTip: "口字旁加曷，喝水喝酒。",
    words: [{ word: "喝水", pinyin: "hē shuǐ" }, { word: "喝酒", pinyin: "hē jiǔ" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "热", pinyin: "rè" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "想", pinyin: "xiǎng" }, { char: "喝", pinyin: "hē" }, { char: "水", pinyin: "shuǐ" }]
  },
  "荷": {
    pinyin: "hé",
    structure: "上下结构",
    composition: "艹 + 何",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "何", pinyin: "hé" }],
    memoryTip: "草字头加何，荷花荷塘。",
    words: [{ word: "荷花", pinyin: "hé huā" }, { word: "荷塘", pinyin: "hé táng" }],
    sentenceData: [{ char: "夏", pinyin: "xià" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "荷", pinyin: "hé" }, { char: "花", pinyin: "huā" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "核": {
    pinyin: "hé",
    structure: "左右结构",
    composition: "木 + 亥",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "亥", pinyin: "hài" }],
    memoryTip: "木字旁加亥，核心核对。",
    words: [{ word: "核心", pinyin: "hé xīn" }, { word: "核对", pinyin: "hé duì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }, { char: "的", pinyin: "de" }, { char: "核", pinyin: "hé" }, { char: "心", pinyin: "xīn" }, { char: "是", pinyin: "shì" }, { char: "什", pinyin: "shén" }, { char: "么", pinyin: "me" }]
  },
  "盒": {
    pinyin: "hé",
    structure: "上下结构",
    composition: "合 + 血",
    compositionParts: [{ char: "合", pinyin: "hé" }, { char: "血", pinyin: "xuè" }],
    memoryTip: "合字加皿，盒子饭盒。",
    words: [{ word: "盒子", pinyin: "hé zi" }, { word: "饭盒", pinyin: "fàn hé" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "盒", pinyin: "hé" }, { char: "子", pinyin: "zi" }, { char: "里", pinyin: "lǐ" }, { char: "装", pinyin: "zhuāng" }, { char: "着", pinyin: "zhe" }, { char: "礼", pinyin: "lǐ" }, { char: "物", pinyin: "wù" }]
  },
  "和": {
    pinyin: "hé",
    structure: "左右结构",
    composition: "禾 + 口",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "禾字旁加口，和平和谐。",
    words: [{ word: "和平", pinyin: "hé píng" }, { word: "和谐", pinyin: "hé xié" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "和", pinyin: "hé" }, { char: "睦", pinyin: "mù" }, { char: "相", pinyin: "xiāng" }, { char: "处", pinyin: "chǔ" }]
  },
  "何": {
    pinyin: "hé",
    structure: "左右结构",
    composition: "亻 + 可",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "可", pinyin: "kě" }],
    memoryTip: "单人旁加可，任何为何。",
    words: [{ word: "任何", pinyin: "rèn hé" }, { word: "为何", pinyin: "wèi hé" }],
    sentenceData: [{ char: "你", pinyin: "nǐ" }, { char: "为", pinyin: "wèi" }, { char: "何", pinyin: "hé" }, { char: "迟", pinyin: "chí" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }]
  },
  "河": {
    pinyin: "hé",
    structure: "左右结构",
    composition: "氵 + 可",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "可", pinyin: "kě" }],
    memoryTip: "三点水加可，河水江河。",
    words: [{ word: "河水", pinyin: "hé shuǐ" }, { word: "江河", pinyin: "jiāng hé" }],
    sentenceData: [{ char: "河", pinyin: "hé" }, { char: "水", pinyin: "shuǐ" }, { char: "很", pinyin: "hěn" }, { char: "清", pinyin: "qīng" }, { char: "澈", pinyin: "chè" }]
  },
  "赫": {
    pinyin: "hè",
    structure: "左右结构",
    composition: "赤 + 赤",
    compositionParts: [{ char: "赤", pinyin: "chì" }, { char: "赤", pinyin: "chì" }],
    memoryTip: "两个赤字，显赫赫然。",
    words: [{ word: "显赫", pinyin: "xiǎn hè" }, { word: "赫然", pinyin: "hè rán" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "位", pinyin: "wèi" }, { char: "功", pinyin: "gōng" }, { char: "绩", pinyin: "jī" }, { char: "显", pinyin: "xiǎn" }, { char: "赫", pinyin: "hè" }, { char: "的", pinyin: "de" }, { char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }]
  },
  "褐": {
    pinyin: "hè",
    structure: "左右结构",
    composition: "衤 + 曷",
    compositionParts: [{ char: "衤", pinyin: "yī" }, { char: "曷", pinyin: "hé" }],
    memoryTip: "衣字旁加曷，褐色褐色。",
    words: [{ word: "褐色", pinyin: "hè sè" }, { word: "褐色", pinyin: "hè sè" }],
    sentenceData: [{ char: "她", pinyin: "tā" }, { char: "穿", pinyin: "chuān" }, { char: "着", pinyin: "zhe" }, { char: "一", pinyin: "yī" }, { char: "件", pinyin: "jiàn" }, { char: "褐", pinyin: "hè" }, { char: "色", pinyin: "sè" }, { char: "的", pinyin: "de" }, { char: "外", pinyin: "wài" }, { char: "套", pinyin: "tào" }]
  },
  "鹤": {
    pinyin: "hè",
    structure: "左右结构",
    composition: "鸟 + 隺",
    compositionParts: [{ char: "鸟", pinyin: "niǎo" }, { char: "隺", pinyin: "hè" }],
    memoryTip: "鸟字旁加隺，仙鹤白鹤。",
    words: [{ word: "仙鹤", pinyin: "xiān hè" }, { word: "白鹤", pinyin: "bái hè" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "群", pinyin: "qún" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "白", pinyin: "bái" }, { char: "鹤", pinyin: "hè" }]
  },
  "黑": {
    pinyin: "hēi",
    structure: "上下结构",
    composition: "黑",
    compositionParts: [{ char: "黑", pinyin: "hēi" }],
    memoryTip: "上面像火，下面像土，黑色黑板。",
    words: [{ word: "黑色", pinyin: "hēi sè" }, { word: "黑板", pinyin: "hēi bǎn" }],
    sentenceData: [{ char: "黑", pinyin: "hēi" }, { char: "板", pinyin: "bǎn" }, { char: "上", pinyin: "shàng" }, { char: "写", pinyin: "xiě" }, { char: "着", pinyin: "zhe" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "的", pinyin: "de" }, { char: "字", pinyin: "zì" }]
  },
  "痕": {
    pinyin: "hén",
    structure: "左右结构",
    composition: "疒 + 痕",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "痕", pinyin: "hén" }],
    memoryTip: "病字旁加痕，痕迹伤痕。",
    words: [{ word: "痕迹", pinyin: "hén jì" }, { word: "伤痕", pinyin: "shāng hén" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "留", pinyin: "liú" }, { char: "下", pinyin: "xià" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "道", pinyin: "dào" }, { char: "痕", pinyin: "hén" }, { char: "迹", pinyin: "jì" }]
  },
  "很": {
    pinyin: "hěn",
    structure: "左右结构",
    composition: "彳 + 艮",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "艮", pinyin: "gèn" }],
    memoryTip: "双人旁加艮，很多很好。",
    words: [{ word: "很多", pinyin: "hěn duō" }, { word: "很好", pinyin: "hěn hǎo" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "苹", pinyin: "píng" }, { char: "果", pinyin: "guǒ" }, { char: "很", pinyin: "hěn" }, { char: "甜", pinyin: "tián" }]
  },
  "恨": {
    pinyin: "hèn",
    structure: "左右结构",
    composition: "忄 + 艮",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "艮", pinyin: "gèn" }],
    memoryTip: "竖心旁加艮，仇恨悔恨。",
    words: [{ word: "仇恨", pinyin: "chóu hèn" }, { word: "悔恨", pinyin: "huǐ hèn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "对", pinyin: "duì" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "悔", pinyin: "huǐ" }, { char: "恨", pinyin: "hèn" }]
  },
  "亨": {
    pinyin: "hēng",
    structure: "上下结构",
    composition: "亨",
    compositionParts: [{ char: "亨", pinyin: "hēng" }],
    memoryTip: "像高字的简化，亨通大亨。",
    words: [{ word: "亨通", pinyin: "hēng tōng" }, { word: "大亨", pinyin: "dà hēng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "生", pinyin: "shēng" }, { char: "意", pinyin: "yì" }, { char: "很", pinyin: "hěn" }, { char: "亨", pinyin: "hēng" }, { char: "通", pinyin: "tōng" }]
  },
  "横": {
    pinyin: "héng",
    structure: "左右结构",
    composition: "木 + 黄",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "黄", pinyin: "huáng" }],
    memoryTip: "木字旁加黄，横线横跨。",
    words: [{ word: "横线", pinyin: "héng xiàn" }, { word: "横跨", pinyin: "héng kuà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "桥", pinyin: "qiáo" }, { char: "横", pinyin: "héng" }, { char: "跨", pinyin: "kuà" }, { char: "在", pinyin: "zài" }, { char: "江", pinyin: "jiāng" }, { char: "面", pinyin: "miàn" }]
  },
  "衡": {
    pinyin: "héng",
    structure: "左右结构",
    composition: "行 + 角 + 大",
    compositionParts: [{ char: "行", pinyin: "xíng" }, { char: "角", pinyin: "jiǎo" }, { char: "大", pinyin: "dà" }],
    memoryTip: "行字加角加大，平衡衡量。",
    words: [{ word: "平衡", pinyin: "píng héng" }, { word: "衡量", pinyin: "héng liáng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "生", pinyin: "shēng" }, { char: "态", pinyin: "tài" }, { char: "平", pinyin: "píng" }, { char: "衡", pinyin: "héng" }]
  },
  "轰": {
    pinyin: "hōng",
    structure: "品字结构",
    composition: "车 + 车 + 车",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "车", pinyin: "chē" }, { char: "车", pinyin: "chē" }],
    memoryTip: "三个车字，轰动轰炸。",
    words: [{ word: "轰动", pinyin: "hōng dòng" }, { word: "轰炸", pinyin: "hōng zhà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "部", pinyin: "bù" }, { char: "电", pinyin: "diàn" }, { char: "影", pinyin: "yǐng" }, { char: "轰", pinyin: "hōng" }, { char: "动", pinyin: "dòng" }, { char: "全", pinyin: "quán" }, { char: "国", pinyin: "guó" }]
  },
  "哄": {
    pinyin: "hōng",
    structure: "左右结构",
    composition: "口 + 共",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "共", pinyin: "gòng" }],
    memoryTip: "口字旁加共，哄笑哄骗。",
    words: [{ word: "哄笑", pinyin: "hōng xiào" }, { word: "哄骗", pinyin: "hōng piàn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "滑", pinyin: "huá" }, { char: "稽", pinyin: "jī" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "引", pinyin: "yǐn" }, { char: "得", pinyin: "dé" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "哄", pinyin: "hōng" }, { char: "堂", pinyin: "táng" }, { char: "大", pinyin: "dà" }, { char: "笑", pinyin: "xiào" }]
  },
  "红": {
    pinyin: "hóng",
    structure: "左右结构",
    composition: "纟 + 工",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "绞丝旁加工，红色红花。",
    words: [{ word: "红色", pinyin: "hóng sè" }, { word: "红花", pinyin: "hóng huā" }],
    sentenceData: [{ char: "红", pinyin: "hóng" }, { char: "花", pinyin: "huā" }, { char: "开", pinyin: "kāi" }, { char: "得", pinyin: "dé" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "宏": {
    pinyin: "hóng",
    structure: "上下结构",
    composition: "宀 + 厶",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "厶", pinyin: "sī" }],
    memoryTip: "宝盖头加厶，宏伟宏大。",
    words: [{ word: "宏伟", pinyin: "hóng wěi" }, { word: "宏大", pinyin: "hóng dà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "建", pinyin: "jiàn" }, { char: "筑", pinyin: "zhù" }, { char: "很", pinyin: "hěn" }, { char: "宏", pinyin: "hóng" }, { char: "伟", pinyin: "wěi" }]
  },
  "洪": {
    pinyin: "hóng",
    structure: "左右结构",
    composition: "氵 + 共",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "共", pinyin: "gòng" }],
    memoryTip: "三点水加共，洪水洪亮。",
    words: [{ word: "洪水", pinyin: "hóng shuǐ" }, { word: "洪亮", pinyin: "hóng liàng" }],
    sentenceData: [{ char: "洪", pinyin: "hóng" }, { char: "水", pinyin: "shuǐ" }, { char: "过", pinyin: "guò" }, { char: "后", pinyin: "hòu" }, { char: "村", pinyin: "cūn" }, { char: "庄", pinyin: "zhuāng" }, { char: "被", pinyin: "bèi" }, { char: "淹", pinyin: "yān" }, { char: "没", pinyin: "mò" }]
  },
  "虹": {
    pinyin: "hóng",
    structure: "左右结构",
    composition: "虫 + 工",
    compositionParts: [{ char: "虫", pinyin: "chóng" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "虫字旁加工，彩虹虹光。",
    words: [{ word: "彩虹", pinyin: "cǎi hóng" }, { word: "虹光", pinyin: "hóng guāng" }],
    sentenceData: [{ char: "雨", pinyin: "yǔ" }, { char: "后", pinyin: "hòu" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "出", pinyin: "chū" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "彩", pinyin: "cǎi" }, { char: "虹", pinyin: "hóng" }]
  },
  "鸿": {
    pinyin: "hóng",
    structure: "左右结构",
    composition: "氵 + 鸟",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "鸟", pinyin: "niǎo" }],
    memoryTip: "三点水加鸟，鸿雁鸿图。",
    words: [{ word: "鸿雁", pinyin: "hóng yàn" }, { word: "鸿图", pinyin: "hóng tú" }],
    sentenceData: [{ char: "鸿", pinyin: "hóng" }, { char: "雁", pinyin: "yàn" }, { char: "南", pinyin: "nán" }, { char: "飞", pinyin: "fēi" }, { char: "北", pinyin: "běi" }, { char: "雁", pinyin: "yàn" }, { char: "北", pinyin: "běi" }, { char: "归", pinyin: "guī" }]
  },
  "侯": {
    pinyin: "hóu",
    structure: "左右结构",
    composition: "亻 + 侯",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "侯", pinyin: "hóu" }],
    memoryTip: "单人旁加侯，王侯侯爵。",
    words: [{ word: "王侯", pinyin: "wáng hóu" }, { word: "侯爵", pinyin: "hóu jué" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "王", pinyin: "wáng" }, { char: "侯", pinyin: "hóu" }, { char: "将", pinyin: "jiāng" }, { char: "相", pinyin: "xiàng" }, { char: "都", pinyin: "dōu" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }, { char: "的", pinyin: "de" }, { char: "地", pinyin: "dì" }, { char: "位", pinyin: "wèi" }]
  },
  "喉": {
    pinyin: "hóu",
    structure: "左右结构",
    composition: "口 + 侯",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "侯", pinyin: "hóu" }],
    memoryTip: "口字旁加侯，喉咙喉舌。",
    words: [{ word: "喉咙", pinyin: "hóu lóng" }, { word: "喉舌", pinyin: "hóu shé" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "大", pinyin: "dà" }, { char: "声", pinyin: "shēng" }, { char: "喊", pinyin: "hǎn" }, { char: "叫", pinyin: "jiào" }, { char: "把", pinyin: "bǎ" }, { char: "喉", pinyin: "hóu" }, { char: "咙", pinyin: "lóng" }, { char: "喊", pinyin: "hǎn" }, { char: "哑", pinyin: "yǎ" }, { char: "了", pinyin: "le" }]
  },
  "猴": {
    pinyin: "hóu",
    structure: "左右结构",
    composition: "犭 + 侯",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "侯", pinyin: "hóu" }],
    memoryTip: "反犬旁加侯，猴子猴王。",
    words: [{ word: "猴子", pinyin: "hóu zi" }, { word: "猴王", pinyin: "hóu wáng" }],
    sentenceData: [{ char: "猴", pinyin: "hóu" }, { char: "子", pinyin: "zi" }, { char: "在", pinyin: "zài" }, { char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "跳", pinyin: "tiào" }, { char: "来", pinyin: "lái" }, { char: "跳", pinyin: "tiào" }, { char: "去", pinyin: "qù" }]
  },
  "吼": {
    pinyin: "hǒu",
    structure: "左右结构",
    composition: "口 + 孔",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "孔", pinyin: "kǒng" }],
    memoryTip: "口字旁加孔，吼叫怒吼。",
    words: [{ word: "吼叫", pinyin: "hǒu jiào" }, { word: "怒吼", pinyin: "nù hǒu" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "虎", pinyin: "hǔ" }, { char: "发", pinyin: "fā" }, { char: "出", pinyin: "chū" }, { char: "震", pinyin: "zhèn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "怒", pinyin: "nù" }, { char: "吼", pinyin: "hǒu" }]
  },
  "后": {
    pinyin: "hòu",
    structure: "半包围结构",
    composition: "后",
    compositionParts: [{ char: "后", pinyin: "hòu" }],
    memoryTip: "一撇加口，以后后面。",
    words: [{ word: "以后", pinyin: "yǐ hòu" }, { word: "后面", pinyin: "hòu miàn" }],
    sentenceData: [{ char: "以", pinyin: "yǐ" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "会", pinyin: "huì" }, { char: "更", pinyin: "gèng" }, { char: "加", pinyin: "jiā" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }]
  },
  "厚": {
    pinyin: "hòu",
    structure: "半包围结构",
    composition: "厂 + 子",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "子", pinyin: "zǐ" }],
    memoryTip: "厂字加子，厚道深厚。",
    words: [{ word: "厚道", pinyin: "hòu dào" }, { word: "深厚", pinyin: "shēn hòu" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }, { char: "很", pinyin: "hěn" }, { char: "厚", pinyin: "hòu" }]
  },
  "候": {
    pinyin: "hòu",
    structure: "左右结构",
    composition: "亻 + 侯",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "侯", pinyin: "hóu" }],
    memoryTip: "单人旁加侯，时候等候。",
    words: [{ word: "时候", pinyin: "shí hòu" }, { word: "等候", pinyin: "děng hòu" }],
    sentenceData: [{ char: "等", pinyin: "děng" }, { char: "候", pinyin: "hòu" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "久", pinyin: "jiǔ" }, { char: "他", pinyin: "tā" }, { char: "终", pinyin: "zhōng" }, { char: "于", pinyin: "yú" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }]
  },
  "乎": {
    pinyin: "hū",
    structure: "独体字",
    composition: "乎",
    compositionParts: [{ char: "乎", pinyin: "hū" }],
    memoryTip: "像手的变形，几乎在乎。",
    words: [{ word: "几乎", pinyin: "jī hū" }, { word: "在乎", pinyin: "zài hū" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "几", pinyin: "jī" }, { char: "乎", pinyin: "hū" }, { char: "每", pinyin: "měi" }, { char: "天", pinyin: "tiān" }, { char: "都", pinyin: "dōu" }, { char: "在", pinyin: "zài" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "呼": {
    pinyin: "hū",
    structure: "左右结构",
    composition: "口 + 乎",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "乎", pinyin: "hū" }],
    memoryTip: "口字旁加乎，呼唤欢呼。",
    words: [{ word: "呼唤", pinyin: "hū huàn" }, { word: "欢呼", pinyin: "huān hū" }],
    sentenceData: [{ char: "观", pinyin: "guān" }, { char: "众", pinyin: "zhòng" }, { char: "欢", pinyin: "huān" }, { char: "呼", pinyin: "hū" }, { char: "雀", pinyin: "què" }, { char: "跃", pinyin: "yuè" }]
  },
  "忽": {
    pinyin: "hū",
    structure: "上下结构",
    composition: "勿 + 心",
    compositionParts: [{ char: "勿", pinyin: "wù" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "勿字加心，忽然忽略。",
    words: [{ word: "忽然", pinyin: "hū rán" }, { word: "忽略", pinyin: "hū lüè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "忽", pinyin: "hū" }, { char: "然", pinyin: "rán" }, { char: "想", pinyin: "xiǎng" }, { char: "起", pinyin: "qǐ" }, { char: "了", pinyin: "le" }, { char: "什", pinyin: "shén" }, { char: "么", pinyin: "me" }]
  },
  "狐": {
    pinyin: "hú",
    structure: "左右结构",
    composition: "犭 + 瓜",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "瓜", pinyin: "guā" }],
    memoryTip: "反犬旁加瓜，狐狸狐疑。",
    words: [{ word: "狐狸", pinyin: "hú li" }, { word: "狐疑", pinyin: "hú yí" }],
    sentenceData: [{ char: "狐", pinyin: "hú" }, { char: "狸", pinyin: "li" }, { char: "很", pinyin: "hěn" }, { char: "聪", pinyin: "cōng" }, { char: "明", pinyin: "míng" }]
  },
  "胡": {
    pinyin: "hú",
    structure: "左右结构",
    composition: "古 + 月",
    compositionParts: [{ char: "古", pinyin: "gǔ" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "古字加月，胡须胡说。",
    words: [{ word: "胡须", pinyin: "hú xū" }, { word: "胡说", pinyin: "hú shuō" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "老", pinyin: "lǎo" }, { char: "人", pinyin: "rén" }, { char: "留", pinyin: "liú" }, { char: "着", pinyin: "zhe" }, { char: "长", pinyin: "cháng" }, { char: "长", pinyin: "cháng" }, { char: "的", pinyin: "de" }, { char: "胡", pinyin: "hú" }, { char: "须", pinyin: "xū" }]
  },
  "壶": {
    pinyin: "hú",
    structure: "上下结构",
    composition: "士 + 壶",
    compositionParts: [{ char: "士", pinyin: "shì" }, { char: "壶", pinyin: "hú" }],
    memoryTip: "士字加壶，茶壶水壶。",
    words: [{ word: "茶壶", pinyin: "chá hú" }, { word: "水壶", pinyin: "shuǐ hú" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "用", pinyin: "yòng" }, { char: "水", pinyin: "shuǐ" }, { char: "壶", pinyin: "hú" }, { char: "烧", pinyin: "shāo" }, { char: "水", pinyin: "shuǐ" }]
  },
  "湖": {
    pinyin: "hú",
    structure: "左右结构",
    composition: "氵 + 胡",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "胡", pinyin: "hú" }],
    memoryTip: "三点水加胡，湖水江湖。",
    words: [{ word: "湖水", pinyin: "hú shuǐ" }, { word: "江湖", pinyin: "jiāng hú" }],
    sentenceData: [{ char: "湖", pinyin: "hú" }, { char: "水", pinyin: "shuǐ" }, { char: "很", pinyin: "hěn" }, { char: "清", pinyin: "qīng" }, { char: "澈", pinyin: "chè" }]
  },
  "葫": {
    pinyin: "hú",
    structure: "上下结构",
    composition: "艹 + 胡",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "胡", pinyin: "hú" }],
    memoryTip: "草字头加胡，葫芦葫芦。",
    words: [{ word: "葫芦", pinyin: "hú lu" }, { word: "葫芦", pinyin: "hú lu" }],
    sentenceData: [{ char: "葫", pinyin: "hú" }, { char: "芦", pinyin: "lu" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "做", pinyin: "zuò" }, { char: "成", pinyin: "chéng" }, { char: "各", pinyin: "gè" }, { char: "种", pinyin: "zhǒng" }, { char: "用", pinyin: "yòng" }, { char: "品", pinyin: "pǐn" }]
  },
  "糊": {
    pinyin: "hú",
    structure: "左右结构",
    composition: "米 + 胡",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "胡", pinyin: "hú" }],
    memoryTip: "米字旁加胡，糊涂面糊。",
    words: [{ word: "糊涂", pinyin: "hú tu" }, { word: "面糊", pinyin: "miàn hú" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "有", pinyin: "yǒu" }, { char: "点", pinyin: "diǎn" }, { char: "糊", pinyin: "hú" }, { char: "涂", pinyin: "tu" }]
  },
  "蝴": {
    pinyin: "hú",
    structure: "左右结构",
    composition: "虫 + 胡",
    compositionParts: [{ char: "虫", pinyin: "chóng" }, { char: "胡", pinyin: "hú" }],
    memoryTip: "虫字旁加胡，蝴蝶蝴蝶。",
    words: [{ word: "蝴蝶", pinyin: "hú dié" }, { word: "蝴蝶", pinyin: "hú dié" }],
    sentenceData: [{ char: "蝴", pinyin: "hú" }, { char: "蝶", pinyin: "dié" }, { char: "在", pinyin: "zài" }, { char: "花", pinyin: "huā" }, { char: "丛", pinyin: "cóng" }, { char: "中", pinyin: "zhōng" }, { char: "飞", pinyin: "fēi" }, { char: "舞", pinyin: "wǔ" }]
  },
  "虎": {
    pinyin: "hǔ",
    structure: "半包围结构",
    composition: "虎",
    compositionParts: [{ char: "虎", pinyin: "hǔ" }],
    memoryTip: "像老虎的形状，老虎虎口。",
    words: [{ word: "老虎", pinyin: "lǎo hǔ" }, { word: "虎口", pinyin: "hǔ kǒu" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "虎", pinyin: "hǔ" }, { char: "是", pinyin: "shì" }, { char: "森", pinyin: "sēn" }, { char: "林", pinyin: "lín" }, { char: "之", pinyin: "zhī" }, { char: "王", pinyin: "wáng" }]
  },
  "互": {
    pinyin: "hù",
    structure: "独体字",
    composition: "互",
    compositionParts: [{ char: "互", pinyin: "hù" }],
    memoryTip: "像两条横线互相连接，互相互助。",
    words: [{ word: "互相", pinyin: "hù xiāng" }, { word: "互助", pinyin: "hù zhù" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "户": {
    pinyin: "hù",
    structure: "独体字",
    composition: "户",
    compositionParts: [{ char: "户", pinyin: "hù" }],
    memoryTip: "一点一横加一撇，户口门户。",
    words: [{ word: "户口", pinyin: "hù kǒu" }, { word: "门户", pinyin: "mén hù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "百", pinyin: "bǎi" }, { char: "万", pinyin: "wàn" }, { char: "户", pinyin: "hù" }, { char: "人", pinyin: "rén" }, { char: "口", pinyin: "kǒu" }]
  },
  "护": {
    pinyin: "hù",
    structure: "左右结构",
    composition: "扌 + 户",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "户", pinyin: "hù" }],
    memoryTip: "提手旁加户，保护爱护。",
    words: [{ word: "保护", pinyin: "bǎo hù" }, { word: "爱护", pinyin: "ài hù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }]
  },
  "花": {
    pinyin: "huā",
    structure: "上下结构",
    composition: "艹 + 化",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "化", pinyin: "huà" }],
    memoryTip: "草字头加化，花朵花园。",
    words: [{ word: "花朵", pinyin: "huā duǒ" }, { word: "花园", pinyin: "huā yuán" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }, { char: "园", pinyin: "yuán" }, { char: "里", pinyin: "lǐ" }, { char: "百", pinyin: "bǎi" }, { char: "花", pinyin: "huā" }, { char: "齐", pinyin: "qí" }, { char: "放", pinyin: "fàng" }]
  },
  "华": {
    pinyin: "huá",
    structure: "上下结构",
    composition: "化 + 十",
    compositionParts: [{ char: "化", pinyin: "huà" }, { char: "十", pinyin: "shí" }],
    memoryTip: "化字加十字，中华华丽。",
    words: [{ word: "中华", pinyin: "zhōng huá" }, { word: "华丽", pinyin: "huá lì" }],
    sentenceData: [{ char: "中", pinyin: "zhōng" }, { char: "华", pinyin: "huá" }, { char: "人", pinyin: "rén" }, { char: "民", pinyin: "mín" }, { char: "共", pinyin: "gòng" }, { char: "和", pinyin: "hé" }, { char: "国", pinyin: "guó" }]
  },
  "哗": {
    pinyin: "huā",
    structure: "左右结构",
    composition: "口 + 华",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "华", pinyin: "huá" }],
    memoryTip: "口字旁加华，哗啦喧哗。",
    words: [{ word: "哗啦", pinyin: "huā lā" }, { word: "喧哗", pinyin: "xuān huā" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "在", pinyin: "zài" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }, { char: "喧", pinyin: "xuān" }, { char: "哗", pinyin: "huā" }]
  },
  "滑": {
    pinyin: "huá",
    structure: "左右结构",
    composition: "氵 + 骨",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "骨", pinyin: "gǔ" }],
    memoryTip: "三点水加骨，滑冰光滑。",
    words: [{ word: "滑冰", pinyin: "huá bīng" }, { word: "光滑", pinyin: "guāng huá" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "滑", pinyin: "huá" }, { char: "冰", pinyin: "bīng" }]
  },
  "化": {
    pinyin: "huà",
    structure: "左右结构",
    composition: "亻 + 匕",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "匕", pinyin: "bǐ" }],
    memoryTip: "单人旁加匕，变化文化。",
    words: [{ word: "变化", pinyin: "biàn huà" }, { word: "文化", pinyin: "wén huà" }],
    sentenceData: [{ char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "传", pinyin: "chuán" }, { char: "统", pinyin: "tǒng" }, { char: "文", pinyin: "wén" }, { char: "化", pinyin: "huà" }, { char: "很", pinyin: "hěn" }, { char: "有", pinyin: "yǒu" }, { char: "魅", pinyin: "mèi" }, { char: "力", pinyin: "lì" }]
  },
  "划": {
    pinyin: "huà",
    structure: "左右结构",
    composition: "戈 + 刂",
    compositionParts: [{ char: "戈", pinyin: "gē" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "戈字加立刀，划船计划。",
    words: [{ word: "划船", pinyin: "huá chuán" }, { word: "计划", pinyin: "jì huà" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "制", pinyin: "zhì" }, { char: "定", pinyin: "dìng" }, { char: "了", pinyin: "le" }, { char: "新", pinyin: "xīn" }, { char: "的", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "计", pinyin: "jì" }, { char: "划", pinyin: "huà" }]
  },
  "画": {
    pinyin: "huà",
    structure: "半包围结构",
    composition: "一 + 田 + 丨",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "田", pinyin: "tián" }, { char: "丨", pinyin: "gǔn" }],
    memoryTip: "一横加田加竖，画画图画。",
    words: [{ word: "画画", pinyin: "huà huà" }, { word: "图画", pinyin: "tú huà" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }]
  },
  "话": {
    pinyin: "huà",
    structure: "左右结构",
    composition: "讠 + 舌",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "舌", pinyin: "shé" }],
    memoryTip: "言字旁加舌，说话电话。",
    words: [{ word: "说话", pinyin: "shuō huà" }, { word: "电话", pinyin: "diàn huà" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "在", pinyin: "zài" }, { char: "电", pinyin: "diàn" }, { char: "话", pinyin: "huà" }, { char: "里", pinyin: "lǐ" }, { char: "和", pinyin: "hé" }, { char: "奶", pinyin: "nǎi" }, { char: "奶", pinyin: "nǎi" }, { char: "说", pinyin: "shuō" }, { char: "话", pinyin: "huà" }]
  },
  "桦": {
    pinyin: "huà",
    structure: "左右结构",
    composition: "木 + 华",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "华", pinyin: "huá" }],
    memoryTip: "木字旁加华，桦树白桦。",
    words: [{ word: "桦树", pinyin: "huà shù" }, { word: "白桦", pinyin: "bái huà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "片", pinyin: "piàn" }, { char: "桦", pinyin: "huà" }, { char: "树", pinyin: "shù" }, { char: "林", pinyin: "lín" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "怀": {
    pinyin: "huái",
    structure: "左右结构",
    composition: "忄 + 不",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "不", pinyin: "bù" }],
    memoryTip: "竖心旁加不，怀念胸怀。",
    words: [{ word: "怀念", pinyin: "huái niàn" }, { word: "胸怀", pinyin: "xiōng huái" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "怀", pinyin: "huái" }, { char: "念", pinyin: "niàn" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "童", pinyin: "tóng" }, { char: "年", pinyin: "nián" }]
  },
  "淮": {
    pinyin: "huái",
    structure: "左右结构",
    composition: "氵 + 隹",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "隹", pinyin: "zhuī" }],
    memoryTip: "三点水加隹，淮河淮南。",
    words: [{ word: "淮河", pinyin: "huái hé" }, { word: "淮南", pinyin: "huái nán" }],
    sentenceData: [{ char: "淮", pinyin: "huái" }, { char: "河", pinyin: "hé" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }, { char: "河", pinyin: "hé" }, { char: "流", pinyin: "liú" }, { char: "之", pinyin: "zhī" }, { char: "一", pinyin: "yī" }]
  },
  "坏": {
    pinyin: "huài",
    structure: "左右结构",
    composition: "土 + 不",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "不", pinyin: "bù" }],
    memoryTip: "土字旁加不，坏人坏事。",
    words: [{ word: "坏人", pinyin: "huài rén" }, { word: "坏事", pinyin: "huài shì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "做", pinyin: "zuò" }, { char: "坏", pinyin: "huài" }, { char: "事", pinyin: "shì" }]
  },
  "欢": {
    pinyin: "huān",
    structure: "左右结构",
    composition: "又 + 欠",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "又字加欠字，喜欢欢乐。",
    words: [{ word: "喜欢", pinyin: "xǐ huān" }, { word: "欢乐", pinyin: "huān lè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }]
  },
  "还": {
    pinyin: "hái",
    structure: "半包围结构",
    composition: "辶 + 不",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "不", pinyin: "bù" }],
    memoryTip: "走之底加不，还是还有。",
    words: [{ word: "还是", pinyin: "hái shì" }, { word: "还有", pinyin: "hái yǒu" }],
    sentenceData: [{ char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "你", pinyin: "nǐ" }, { char: "还", pinyin: "hái" }, { char: "来", pinyin: "lái" }, { char: "吗", pinyin: "ma" }]
  },
  "环": {
    pinyin: "huán",
    structure: "左右结构",
    composition: "王 + 不",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "不", pinyin: "bù" }],
    memoryTip: "王字旁加不，环境环保。",
    words: [{ word: "环境", pinyin: "huán jìng" }, { word: "环保", pinyin: "huán bǎo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }]
  },
  "缓": {
    pinyin: "huǎn",
    structure: "左右结构",
    composition: "纟 + 爰",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "爰", pinyin: "yuán" }],
    memoryTip: "绞丝旁加爰，缓慢缓和。",
    words: [{ word: "缓慢", pinyin: "huǎn màn" }, { word: "缓和", pinyin: "huǎn hé" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "放", pinyin: "fàng" }, { char: "缓", pinyin: "huǎn" }, { char: "一", pinyin: "yī" }, { char: "些", pinyin: "xiē" }, { char: "速", pinyin: "sù" }, { char: "度", pinyin: "dù" }]
  },
  "幻": {
    pinyin: "huàn",
    structure: "左右结构",
    composition: "幺 + 幺",
    compositionParts: [{ char: "幺", pinyin: "yāo" }, { char: "幺", pinyin: "yāo" }],
    memoryTip: "两个幺字并排，幻想梦幻。",
    words: [{ word: "幻想", pinyin: "huàn xiǎng" }, { word: "梦幻", pinyin: "mèng huàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "魔", pinyin: "mó" }, { char: "术", pinyin: "shù" }, { char: "表", pinyin: "biǎo" }, { char: "演", pinyin: "yǎn" }, { char: "像", pinyin: "xiàng" }, { char: "幻", pinyin: "huàn" }, { char: "想", pinyin: "xiǎng" }, { char: "一", pinyin: "yī" }, { char: "样", pinyin: "yàng" }]
  },
  "唤": {
    pinyin: "huàn",
    structure: "左右结构",
    composition: "口 + 奂",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "奂", pinyin: "huàn" }],
    memoryTip: "口字旁加奂，呼唤唤醒。",
    words: [{ word: "呼唤", pinyin: "hū huàn" }, { word: "唤醒", pinyin: "huàn xǐng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "mā" }, { char: "呼", pinyin: "hū" }, { char: "唤", pinyin: "huàn" }, { char: "我", pinyin: "wǒ" }, { char: "起", pinyin: "qǐ" }, { char: "床", pinyin: "chuáng" }]
  },
  "换": {
    pinyin: "huàn",
    structure: "左右结构",
    composition: "扌 + 奂",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "奂", pinyin: "huàn" }],
    memoryTip: "提手旁加奂，交换更换。",
    words: [{ word: "交换", pinyin: "jiāo huàn" }, { word: "更换", pinyin: "gēng huàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "想", pinyin: "xiǎng" }, { char: "和", pinyin: "hé" }, { char: "你", pinyin: "nǐ" }, { char: "交", pinyin: "jiāo" }, { char: "换", pinyin: "huàn" }, { char: "一", pinyin: "yī" }, { char: "下", pinyin: "xià" }, { char: "座", pinyin: "zuò" }, { char: "位", pinyin: "wèi" }]
  },
  "患": {
    pinyin: "huàn",
    structure: "上下结构",
    composition: "串 + 心",
    compositionParts: [{ char: "串", pinyin: "chuàn" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "串字加心字，患者忧患。",
    words: [{ word: "患者", pinyin: "huàn zhě" }, { word: "忧患", pinyin: "yōu huàn" }],
    sentenceData: [{ char: "医", pinyin: "yī" }, { char: "生", pinyin: "shēng" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "治", pinyin: "zhì" }, { char: "疗", pinyin: "liáo" }, { char: "患", pinyin: "huàn" }, { char: "者", pinyin: "zhě" }]
  },
  "荒": {
    pinyin: "huāng",
    structure: "上下结构",
    composition: "艹 + 亡 + 川",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "亡", pinyin: "wáng" }, { char: "川", pinyin: "chuān" }],
    memoryTip: "草字头加亡加川，荒地荒凉。",
    words: [{ word: "荒地", pinyin: "huāng dì" }, { word: "荒凉", pinyin: "huāng liáng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "片", pinyin: "piàn" }, { char: "荒", pinyin: "huāng" }, { char: "地", pinyin: "dì" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "被", pinyin: "bèi" }, { char: "开", pinyin: "kāi" }, { char: "发", pinyin: "fā" }, { char: "了", pinyin: "le" }]
  },
  "慌": {
    pinyin: "huāng",
    structure: "左右结构",
    composition: "忄 + 荒",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "荒", pinyin: "huāng" }],
    memoryTip: "竖心旁加荒，慌张慌忙。",
    words: [{ word: "慌张", pinyin: "huāng zhāng" }, { word: "慌忙", pinyin: "huāng máng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "看", pinyin: "kàn" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }, { char: "很", pinyin: "hěn" }, { char: "慌", pinyin: "huāng" }, { char: "张", pinyin: "zhāng" }]
  },
  "皇": {
    pinyin: "huáng",
    structure: "上下结构",
    composition: "白 + 王",
    compositionParts: [{ char: "白", pinyin: "bái" }, { char: "王", pinyin: "wáng" }],
    memoryTip: "白字加王字，皇帝皇宫。",
    words: [{ word: "皇帝", pinyin: "huáng dì" }, { word: "皇宫", pinyin: "huáng gōng" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "皇", pinyin: "huáng" }, { char: "帝", pinyin: "dì" }, { char: "住", pinyin: "zhù" }, { char: "在", pinyin: "zài" }, { char: "皇", pinyin: "huáng" }, { char: "宫", pinyin: "gōng" }, { char: "里", pinyin: "lǐ" }]
  },
  "黄": {
    pinyin: "huáng",
    structure: "上下结构",
    composition: "艹 + 田 + 八",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "田", pinyin: "tián" }, { char: "八", pinyin: "bā" }],
    memoryTip: "草字头加田加八，黄色黄河。",
    words: [{ word: "黄色", pinyin: "huáng sè" }, { word: "黄河", pinyin: "huáng hé" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "树", pinyin: "shù" }, { char: "叶", pinyin: "yè" }, { char: "变", pinyin: "biàn" }, { char: "黄", pinyin: "huáng" }, { char: "了", pinyin: "le" }]
  },
  "煌": {
    pinyin: "huáng",
    structure: "左右结构",
    composition: "火 + 皇",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "皇", pinyin: "huáng" }],
    memoryTip: "火字旁加皇，辉煌煌煌。",
    words: [{ word: "辉煌", pinyin: "huī huáng" }, { word: "煌煌", pinyin: "huáng huáng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "建", pinyin: "jiàn" }, { char: "筑", pinyin: "zhù" }, { char: "金", pinyin: "jīn" }, { char: "碧", pinyin: "bì" }, { char: "辉", pinyin: "huī" }, { char: "煌", pinyin: "huáng" }]
  },
  "晃": {
    pinyin: "huàng",
    structure: "上下结构",
    composition: "日 + 光",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "光", pinyin: "guāng" }],
    memoryTip: "日字加光字，晃眼晃动。",
    words: [{ word: "晃眼", pinyin: "huàng yǎn" }, { word: "晃动", pinyin: "huàng dòng" }],
    sentenceData: [{ char: "灯", pinyin: "dēng" }, { char: "光", pinyin: "guāng" }, { char: "在", pinyin: "zài" }, { char: "风", pinyin: "fēng" }, { char: "中", pinyin: "zhōng" }, { char: "晃", pinyin: "huàng" }, { char: "动", pinyin: "dòng" }]
  },
  "灰": {
    pinyin: "huī",
    structure: "上下结构",
    composition: "厂 + 火",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "火", pinyin: "huǒ" }],
    memoryTip: "厂字加火字，灰尘灰色。",
    words: [{ word: "灰尘", pinyin: "huī chén" }, { word: "灰色", pinyin: "huī sè" }],
    sentenceData: [{ char: "桌", pinyin: "zhuō" }, { char: "子", pinyin: "zi" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "层", pinyin: "céng" }, { char: "灰", pinyin: "huī" }, { char: "尘", pinyin: "chén" }]
  },
  "恢": {
    pinyin: "huī",
    structure: "左右结构",
    composition: "忄 + 灰",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "灰", pinyin: "huī" }],
    memoryTip: "竖心旁加灰，恢复恢弘。",
    words: [{ word: "恢复", pinyin: "huī fù" }, { word: "恢弘", pinyin: "huī hóng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "恢", pinyin: "huī" }, { char: "复", pinyin: "fù" }]
  },
  "挥": {
    pinyin: "huī",
    structure: "左右结构",
    composition: "扌 + 军",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "军", pinyin: "jūn" }],
    memoryTip: "提手旁加军，指挥挥手。",
    words: [{ word: "指挥", pinyin: "zhǐ huī" }, { word: "挥手", pinyin: "huī shǒu" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "指", pinyin: "zhǐ" }, { char: "挥", pinyin: "huī" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "做", pinyin: "zuò" }, { char: "操", pinyin: "cāo" }]
  },
  "辉": {
    pinyin: "huī",
    structure: "左右结构",
    composition: "光 + 军",
    compositionParts: [{ char: "光", pinyin: "guāng" }, { char: "军", pinyin: "jūn" }],
    memoryTip: "光字加军字，光辉辉煌。",
    words: [{ word: "光辉", pinyin: "guāng huī" }, { word: "辉煌", pinyin: "huī huáng" }],
    sentenceData: [{ char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "的", pinyin: "de" }, { char: "光", pinyin: "guāng" }, { char: "辉", pinyin: "huī" }, { char: "照", pinyin: "zhào" }, { char: "耀", pinyin: "yào" }, { char: "大", pinyin: "dà" }, { char: "地", pinyin: "dì" }]
  },
  "徽": {
    pinyin: "huī",
    structure: "左右结构",
    composition: "彳 + 山 + 系 + 攵",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "山", pinyin: "shān" }, { char: "系", pinyin: "xì" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "双人旁加山加系加反文，国徽校徽。",
    words: [{ word: "国徽", pinyin: "guó huī" }, { word: "校徽", pinyin: "xiào huī" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "们", pinyin: "men" }, { char: "戴", pinyin: "dài" }, { char: "着", pinyin: "zhe" }, { char: "校", pinyin: "xiào" }, { char: "徽", pinyin: "huī" }]
  },
  "回": {
    pinyin: "huí",
    structure: "全包围结构",
    composition: "口 + 口",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "大口套小口，回家回来。",
    words: [{ word: "回家", pinyin: "huí jiā" }, { word: "回来", pinyin: "huí lái" }],
    sentenceData: [{ char: "放", pinyin: "fàng" }, { char: "学", pinyin: "xué" }, { char: "后", pinyin: "hòu" }, { char: "我", pinyin: "wǒ" }, { char: "回", pinyin: "huí" }, { char: "家", pinyin: "jiā" }]
  },
  "毁": {
    pinyin: "huǐ",
    structure: "左右结构",
    composition: "土 + 殳",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "殳", pinyin: "shū" }],
    memoryTip: "土字旁加殳，毁坏摧毁。",
    words: [{ word: "毁坏", pinyin: "huǐ huài" }, { word: "摧毁", pinyin: "cuī huǐ" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "火", pinyin: "huǒ" }, { char: "毁", pinyin: "huǐ" }, { char: "坏", pinyin: "huài" }, { char: "了", pinyin: "le" }, { char: "整", pinyin: "zhěng" }, { char: "个", pinyin: "ge" }, { char: "村", pinyin: "cūn" }, { char: "庄", pinyin: "zhuāng" }]
  },
  "悔": {
    pinyin: "huǐ",
    structure: "左右结构",
    composition: "忄 + 每",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "每", pinyin: "měi" }],
    memoryTip: "竖心旁加每，后悔悔恨。",
    words: [{ word: "后悔", pinyin: "hòu huǐ" }, { word: "悔恨", pinyin: "huǐ hèn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "为", pinyin: "wèi" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "后", pinyin: "hòu" }, { char: "悔", pinyin: "huǐ" }]
  },
  "汇": {
    pinyin: "huì",
    structure: "左右结构",
    composition: "氵 + 匚",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "匚", pinyin: "fāng" }],
    memoryTip: "三点水加匚，汇报汇合。",
    words: [{ word: "汇报", pinyin: "huì bào" }, { word: "汇合", pinyin: "huì hé" }],
    sentenceData: [{ char: "各", pinyin: "gè" }, { char: "地", pinyin: "dì" }, { char: "的", pinyin: "de" }, { char: "河", pinyin: "hé" }, { char: "流", pinyin: "liú" }, { char: "汇", pinyin: "huì" }, { char: "合", pinyin: "hé" }, { char: "成", pinyin: "chéng" }, { char: "大", pinyin: "dà" }, { char: "江", pinyin: "jiāng" }]
  },
  "会": {
    pinyin: "huì",
    structure: "上下结构",
    composition: "人 + 云",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "云", pinyin: "yún" }],
    memoryTip: "人字加云字，开会会议。",
    words: [{ word: "开会", pinyin: "kāi huì" }, { word: "会议", pinyin: "huì yì" }],
    sentenceData: [{ char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "开", pinyin: "kāi" }, { char: "会", pinyin: "huì" }]
  },
  "绘": {
    pinyin: "huì",
    structure: "左右结构",
    composition: "纟 + 会",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "会", pinyin: "huì" }],
    memoryTip: "绞丝旁加会，绘画描绘。",
    words: [{ word: "绘画", pinyin: "huì huà" }, { word: "描绘", pinyin: "miáo huì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "幅", pinyin: "fú" }, { char: "画", pinyin: "huà" }, { char: "绘", pinyin: "huì" }, { char: "画", pinyin: "huà" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "精", pinyin: "jīng" }, { char: "美", pinyin: "měi" }]
  },
  "惠": {
    pinyin: "huì",
    structure: "上下结构",
    composition: "专 + 心",
    compositionParts: [{ char: "专", pinyin: "zhuān" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "专字加心字，优惠实惠。",
    words: [{ word: "优惠", pinyin: "yōu huì" }, { word: "实惠", pinyin: "shí huì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "家", pinyin: "jiā" }, { char: "商", pinyin: "shāng" }, { char: "店", pinyin: "diàn" }, { char: "正", pinyin: "zhèng" }, { char: "在", pinyin: "zài" }, { char: "搞", pinyin: "gǎo" }, { char: "优", pinyin: "yōu" }, { char: "惠", pinyin: "huì" }, { char: "活", pinyin: "huó" }, { char: "动", pinyin: "dòng" }]
  },
  "慧": {
    pinyin: "huì",
    structure: "上下结构",
    composition: "彗 + 心",
    compositionParts: [{ char: "彗", pinyin: "huì" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "彗字加心字，智慧聪慧。",
    words: [{ word: "智慧", pinyin: "zhì huì" }, { word: "聪慧", pinyin: "cōng huì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "聪", pinyin: "cōng" }, { char: "慧", pinyin: "huì" }]
  },
  "昏": {
    pinyin: "hūn",
    structure: "上下结构",
    composition: "氏 + 日",
    compositionParts: [{ char: "氏", pinyin: "shì" }, { char: "日", pinyin: "rì" }],
    memoryTip: "氏字加日字，黄昏昏迷。",
    words: [{ word: "黄昏", pinyin: "huáng hūn" }, { word: "昏迷", pinyin: "hūn mí" }],
    sentenceData: [{ char: "黄", pinyin: "huáng" }, { char: "昏", pinyin: "hūn" }, { char: "时", pinyin: "shí" }, { char: "分", pinyin: "fēn" }, { char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }, { char: "刚", pinyin: "gāng" }, { char: "刚", pinyin: "gāng" }, { char: "落", pinyin: "luò" }, { char: "山", pinyin: "shān" }]
  },
  "婚": {
    pinyin: "hūn",
    structure: "左右结构",
    composition: "女 + 昏",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "昏", pinyin: "hūn" }],
    memoryTip: "女字旁加昏，结婚婚礼。",
    words: [{ word: "结婚", pinyin: "jié hūn" }, { word: "婚礼", pinyin: "hūn lǐ" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "明", pinyin: "míng" }, { char: "年", pinyin: "nián" }, { char: "要", pinyin: "yào" }, { char: "结", pinyin: "jié" }, { char: "婚", pinyin: "hūn" }, { char: "了", pinyin: "le" }]
  },
  "浑": {
    pinyin: "hún",
    structure: "左右结构",
    composition: "氵 + 军",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "军", pinyin: "jūn" }],
    memoryTip: "三点水加军，浑浊浑身。",
    words: [{ word: "浑浊", pinyin: "hún zhuó" }, { word: "浑身", pinyin: "hún shēn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "条", pinyin: "tiáo" }, { char: "河", pinyin: "hé" }, { char: "水", pinyin: "shuǐ" }, { char: "很", pinyin: "hěn" }, { char: "浑", pinyin: "hún" }, { char: "浊", pinyin: "zhuó" }]
  },
  "魂": {
    pinyin: "hún",
    structure: "左右结构",
    composition: "云 + 鬼",
    compositionParts: [{ char: "云", pinyin: "yún" }, { char: "鬼", pinyin: "guǐ" }],
    memoryTip: "云字加鬼字，灵魂魂魄。",
    words: [{ word: "灵魂", pinyin: "líng hún" }, { word: "魂魄", pinyin: "hún pò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "故", pinyin: "gù" }, { char: "事", pinyin: "shi" }, { char: "震", pinyin: "zhèn" }, { char: "撼", pinyin: "hàn" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "灵", pinyin: "líng" }, { char: "魂", pinyin: "hún" }]
  },
  "混": {
    pinyin: "hùn",
    structure: "左右结构",
    composition: "氵 + 昆",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "昆", pinyin: "kūn" }],
    memoryTip: "三点水加昆，混乱混合。",
    words: [{ word: "混乱", pinyin: "hùn luàn" }, { word: "混合", pinyin: "hùn hé" }],
    sentenceData: [{ char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "把", pinyin: "bǎ" }, { char: "不", pinyin: "bù" }, { char: "同", pinyin: "tóng" }, { char: "的", pinyin: "de" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xi" }, { char: "混", pinyin: "hùn" }, { char: "在", pinyin: "zài" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }]
  },
  "活": {
    pinyin: "huó",
    structure: "左右结构",
    composition: "氵 + 舌",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "舌", pinyin: "shé" }],
    memoryTip: "三点水加舌，生活活动。",
    words: [{ word: "生活", pinyin: "shēng huó" }, { word: "活动", pinyin: "huó dòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }, { char: "越", pinyin: "yuè" }, { char: "来", pinyin: "lái" }, { char: "越", pinyin: "yuè" }, { char: "好", pinyin: "hǎo" }]
  },
  "火": {
    pinyin: "huǒ",
    structure: "独体字",
    composition: "火",
    compositionParts: [{ char: "火", pinyin: "huǒ" }],
    memoryTip: "一点加人加两点，火车火光。",
    words: [{ word: "火车", pinyin: "huǒ chē" }, { word: "火光", pinyin: "huǒ guāng" }],
    sentenceData: [{ char: "消", pinyin: "xiāo" }, { char: "防", pinyin: "fáng" }, { char: "员", pinyin: "yuán" }, { char: "扑", pinyin: "pū" }, { char: "灭", pinyin: "miè" }, { char: "了", pinyin: "le" }, { char: "大", pinyin: "dà" }, { char: "火", pinyin: "huǒ" }]
  },
  "伙": {
    pinyin: "huǒ",
    structure: "左右结构",
    composition: "亻 + 火",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "火", pinyin: "huǒ" }],
    memoryTip: "单人旁加火，伙伴伙食。",
    words: [{ word: "伙伴", pinyin: "huǒ bàn" }, { word: "伙食", pinyin: "huǒ shí" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "最", pinyin: "zuì" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "伙", pinyin: "huǒ" }, { char: "伴", pinyin: "bàn" }]
  },
  "或": {
    pinyin: "huò",
    structure: "半包围结构",
    composition: "戈 + 口 + 一",
    compositionParts: [{ char: "戈", pinyin: "gē" }, { char: "口", pinyin: "kǒu" }, { char: "一", pinyin: "yī" }],
    memoryTip: "戈字加口加一，或者或许。",
    words: [{ word: "或者", pinyin: "huò zhě" }, { word: "或许", pinyin: "huò xǔ" }],
    sentenceData: [{ char: "你", pinyin: "nǐ" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "选", pinyin: "xuǎn" }, { char: "择", pinyin: "zé" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "或", pinyin: "huò" }, { char: "者", pinyin: "zhě" }, { char: "那", pinyin: "nà" }, { char: "个", pinyin: "ge" }]
  },
  "货": {
    pinyin: "huò",
    structure: "上下结构",
    composition: "化 + 贝",
    compositionParts: [{ char: "化", pinyin: "huà" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "化字加贝字，货物订货。",
    words: [{ word: "货物", pinyin: "huò wù" }, { word: "订货", pinyin: "dìng huò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "批", pinyin: "pī" }, { char: "货", pinyin: "huò" }, { char: "物", pinyin: "wù" }, { char: "质", pinyin: "zhì" }, { char: "量", pinyin: "liàng" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "获": {
    pinyin: "huò",
    structure: "左右结构",
    composition: "艹 + 犬",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "犬", pinyin: "quǎn" }],
    memoryTip: "草字头加犬，获得收获。",
    words: [{ word: "获得", pinyin: "huò dé" }, { word: "收获", pinyin: "shōu huò" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "获", pinyin: "huò" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "回", pinyin: "huí" }, { char: "报", pinyin: "bào" }]
  },
  "祸": {
    pinyin: "huò",
    structure: "左右结构",
    composition: "礻 + 呙",
    compositionParts: [{ char: "礻", pinyin: "shì" }, { char: "呙", pinyin: "wō" }],
    memoryTip: "示字旁加呙，祸害灾祸。",
    words: [{ word: "祸害", pinyin: "huò hài" }, { word: "灾祸", pinyin: "zāi huò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "场", pinyin: "chǎng" }, { char: "火", pinyin: "huǒ" }, { char: "灾", pinyin: "zāi" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "场", pinyin: "chǎng" }, { char: "大", pinyin: "dà" }, { char: "祸", pinyin: "huò" }]
  },
  "惑": {
    pinyin: "huò",
    structure: "左右结构",
    composition: "或 + 心",
    compositionParts: [{ char: "或", pinyin: "huò" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "或字加心字，迷惑疑惑。",
    words: [{ word: "迷惑", pinyin: "mí huò" }, { word: "疑惑", pinyin: "yí huò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "困", pinyin: "kùn" }, { char: "惑", pinyin: "huò" }]
  },
  "霍": {
    pinyin: "huò",
    structure: "上下结构",
    composition: "雨 + 隹",
    compositionParts: [{ char: "雨", pinyin: "yǔ" }, { char: "隹", pinyin: "zhuī" }],
    memoryTip: "雨字头加隹，霍霍霍乱。",
    words: [{ word: "霍霍", pinyin: "huò huò" }, { word: "霍乱", pinyin: "huò luàn" }],
    sentenceData: [{ char: "磨", pinyin: "mó" }, { char: "刀", pinyin: "dāo" }, { char: "霍", pinyin: "huò" }, { char: "霍", pinyin: "huò" }, { char: "响", pinyin: "xiǎng" }]
  },
  "击": {
    pinyin: "jī",
    structure: "独体字",
    composition: "击",
    compositionParts: [{ char: "击", pinyin: "jī" }],
    memoryTip: "一横加山加一横，攻击打击。",
    words: [{ word: "攻击", pinyin: "gōng jī" }, { word: "打击", pinyin: "dǎ jī" }],
    sentenceData: [{ char: "军", pinyin: "jūn" }, { char: "队", pinyin: "duì" }, { char: "向", pinyin: "xiàng" }, { char: "敌", pinyin: "dí" }, { char: "人", pinyin: "rén" }, { char: "发", pinyin: "fā" }, { char: "起", pinyin: "qǐ" }, { char: "了", pinyin: "le" }, { char: "攻", pinyin: "gōng" }, { char: "击", pinyin: "jī" }]
  },
  "饥": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "饣 + 几",
    compositionParts: [{ char: "饣", pinyin: "shí" }, { char: "几", pinyin: "jī" }],
    memoryTip: "食字旁加几，饥饿饥荒。",
    words: [{ word: "饥饿", pinyin: "jī è" }, { word: "饥荒", pinyin: "jī huāng" }],
    sentenceData: [{ char: "长", pinyin: "cháng" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "的", pinyin: "de" }, { char: "饥", pinyin: "jī" }, { char: "饿", pinyin: "è" }, { char: "让", pinyin: "ràng" }, { char: "他", pinyin: "tā" }, { char: "很", pinyin: "hěn" }, { char: "难", pinyin: "nán" }, { char: "受", pinyin: "shòu" }]
  },
  "圾": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "土 + 及",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "及", pinyin: "jí" }],
    memoryTip: "土字旁加及，垃圾圾土。",
    words: [{ word: "垃圾", pinyin: "lā jī" }, { word: "圾土", pinyin: "jī tǔ" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "随", pinyin: "suí" }, { char: "地", pinyin: "dì" }, { char: "乱", pinyin: "luàn" }, { char: "扔", pinyin: "rēng" }, { char: "垃", pinyin: "lā" }, { char: "圾", pinyin: "jī" }]
  },
  "机": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "木 + 几",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "几", pinyin: "jī" }],
    memoryTip: "木字旁加几，机器机会。",
    words: [{ word: "机器", pinyin: "jī qì" }, { word: "机会", pinyin: "jī huì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "台", pinyin: "tái" }, { char: "机", pinyin: "jī" }, { char: "器", pinyin: "qì" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "坏", pinyin: "huài" }, { char: "了", pinyin: "le" }]
  },
  "肌": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "月 + 几",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "几", pinyin: "jī" }],
    memoryTip: "月字旁加几，肌肉心肌。",
    words: [{ word: "肌肉", pinyin: "jī ròu" }, { word: "心肌", pinyin: "xīn jī" }],
    sentenceData: [{ char: "运", pinyin: "yùn" }, { char: "动", pinyin: "dòng" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "增", pinyin: "zēng" }, { char: "强", pinyin: "qiáng" }, { char: "肌", pinyin: "jī" }, { char: "肉", pinyin: "ròu" }]
  },
  "鸡": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "又 + 鸟",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "鸟", pinyin: "niǎo" }],
    memoryTip: "又字加鸟字，小鸡公鸡。",
    words: [{ word: "小鸡", pinyin: "xiǎo jī" }, { word: "公鸡", pinyin: "gōng jī" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "场", pinyin: "chǎng" }, { char: "里", pinyin: "lǐ" }, { char: "养", pinyin: "yǎng" }, { char: "了", pinyin: "le" }, { char: "许", pinyin: "xǔ" }, { char: "多", pinyin: "duō" }, { char: "鸡", pinyin: "jī" }]
  },
  "积": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "禾 + 只",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "只", pinyin: "zhī" }],
    memoryTip: "禾字旁加只，积极积累。",
    words: [{ word: "积极", pinyin: "jī jí" }, { word: "积累", pinyin: "jī lěi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "积", pinyin: "jī" }, { char: "极", pinyin: "jí" }, { char: "参", pinyin: "cān" }, { char: "加", pinyin: "jiā" }, { char: "社", pinyin: "shè" }, { char: "会", pinyin: "huì" }, { char: "活", pinyin: "huó" }, { char: "动", pinyin: "dòng" }]
  },
  "基": {
    pinyin: "jī",
    structure: "上下结构",
    composition: "其 + 土",
    compositionParts: [{ char: "其", pinyin: "qí" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "其字加土字，基础基本。",
    words: [{ word: "基础", pinyin: "jī chǔ" }, { word: "基本", pinyin: "jī běn" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "切", pinyin: "qiè" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shi" }, { char: "的", pinyin: "de" }, { char: "基", pinyin: "jī" }, { char: "础", pinyin: "chǔ" }]
  },
  "绩": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "纟 + 责",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "责", pinyin: "zé" }],
    memoryTip: "绞丝旁加责，成绩功绩。",
    words: [{ word: "成绩", pinyin: "chéng jì" }, { word: "功绩", pinyin: "gōng jì" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "成", pinyin: "chéng" }, { char: "绩", pinyin: "jì" }, { char: "很", pinyin: "hěn" }, { char: "优", pinyin: "yōu" }, { char: "秀", pinyin: "xiù" }]
  },
  "激": {
    pinyin: "jī",
    structure: "左右结构",
    composition: "氵 + 敫",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "敫", pinyin: "jiǎo" }],
    memoryTip: "三点水加敫，激动激烈。",
    words: [{ word: "激动", pinyin: "jī dòng" }, { word: "激烈", pinyin: "jī liè" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "场", pinyin: "chǎng" }, { char: "比", pinyin: "bǐ" }, { char: "赛", pinyin: "sài" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "激", pinyin: "jī" }, { char: "烈", pinyin: "liè" }]
  },
  "及": {
    pinyin: "jí",
    structure: "左右结构",
    composition: "乃 + 丶",
    compositionParts: [{ char: "乃", pinyin: "nǎi" }, { char: "丶", pinyin: "zhǔ" }],
    memoryTip: "乃字加一点，以及及时。",
    words: [{ word: "以及", pinyin: "yǐ jí" }, { word: "及时", pinyin: "jí shí" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "及", pinyin: "jí" }, { char: "时", pinyin: "shí" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }, { char: "这", pinyin: "zhè" }, { char: "项", pinyin: "xiàng" }, { char: "任", pinyin: "rèn" }, { char: "务", pinyin: "wù" }]
  },
  "吉": {
    pinyin: "jí",
    structure: "上下结构",
    composition: "士 + 口",
    compositionParts: [{ char: "士", pinyin: "shì" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "士字加口字，吉祥吉利。",
    words: [{ word: "吉祥", pinyin: "jí xiáng" }, { word: "吉利", pinyin: "jí lì" }],
    sentenceData: [{ char: "新", pinyin: "xīn" }, { char: "年", pinyin: "nián" }, { char: "吉", pinyin: "jí" }, { char: "祥", pinyin: "xiáng" }, { char: "如", pinyin: "rú" }, { char: "意", pinyin: "yì" }]
  },
  "级": {
    pinyin: "jí",
    structure: "左右结构",
    composition: "纟 + 及",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "及", pinyin: "jí" }],
    memoryTip: "绞丝旁加及，等级年级。",
    words: [{ word: "等级", pinyin: "děng jí" }, { word: "年级", pinyin: "nián jí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "是", pinyin: "shì" }, { char: "三", pinyin: "sān" }, { char: "年", pinyin: "nián" }, { char: "级", pinyin: "jí" }, { char: "的", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }]
  },
  "即": {
    pinyin: "jí",
    structure: "左右结构",
    composition: "卩 + 㠯",
    compositionParts: [{ char: "卩", pinyin: "jié" }, { char: "㠯", pinyin: "jí" }],
    memoryTip: "单耳旁加㠯，即使立即。",
    words: [{ word: "即使", pinyin: "jí shǐ" }, { word: "立即", pinyin: "lì jí" }],
    sentenceData: [{ char: "即", pinyin: "jí" }, { char: "使", pinyin: "shǐ" }, { char: "遇", pinyin: "yù" }, { char: "到", pinyin: "dào" }, { char: "困", pinyin: "kùn" }, { char: "难", pinyin: "nán" }, { char: "也", pinyin: "yě" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "放", pinyin: "fàng" }, { char: "弃", pinyin: "qì" }]
  },
  "极": {
    pinyin: "jí",
    structure: "左右结构",
    composition: "木 + 及",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "及", pinyin: "jí" }],
    memoryTip: "木字旁加及，积极极点。",
    words: [{ word: "积极", pinyin: "jī jí" }, { word: "极点", pinyin: "jí diǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "对", pinyin: "duì" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "积", pinyin: "jī" }, { char: "极", pinyin: "jí" }]
  },
  "急": {
    pinyin: "jí",
    structure: "上下结构",
    composition: "刍 + 心",
    compositionParts: [{ char: "刍", pinyin: "chú" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "刍字加心字，着急急忙。",
    words: [{ word: "着急", pinyin: "zháo jí" }, { word: "急忙", pinyin: "jí máng" }],
    sentenceData: [{ char: "别", pinyin: "bié" }, { char: "着", pinyin: "zháo" }, { char: "急", pinyin: "jí" }, { char: "，", pinyin: "，" }, { char: "慢", pinyin: "màn" }, { char: "慢", pinyin: "màn" }, { char: "来", pinyin: "lái" }]
  },
  "疾": {
    pinyin: "jí",
    structure: "半包围结构",
    composition: "疒 + 矢",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "矢", pinyin: "shǐ" }],
    memoryTip: "病字头加矢，疾病疾苦。",
    words: [{ word: "疾病", pinyin: "jí bìng" }, { word: "疾苦", pinyin: "jí kǔ" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "患", pinyin: "huàn" }, { char: "了", pinyin: "le" }, { char: "严", pinyin: "yán" }, { char: "重", pinyin: "zhòng" }, { char: "的", pinyin: "de" }, { char: "疾", pinyin: "jí" }, { char: "病", pinyin: "bìng" }]
  },
  "集": {
    pinyin: "jí",
    structure: "上下结构",
    composition: "隹 + 木",
    compositionParts: [{ char: "隹", pinyin: "zhuī" }, { char: "木", pinyin: "mù" }],
    memoryTip: "隹字加木字，集合集中。",
    words: [{ word: "集合", pinyin: "jí hé" }, { word: "集中", pinyin: "jí zhōng" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "在", pinyin: "zài" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "集", pinyin: "jí" }, { char: "合", pinyin: "hé" }]
  },
  "辑": {
    pinyin: "jí",
    structure: "左右结构",
    composition: "车 + 旦",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "旦", pinyin: "dàn" }],
    memoryTip: "车字旁加旦，编辑专辑。",
    words: [{ word: "编辑", pinyin: "biān jí" }, { word: "专辑", pinyin: "zhuān jí" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }, { char: "优", pinyin: "yōu" }, { char: "秀", pinyin: "xiù" }, { char: "的", pinyin: "de" }, { char: "编", pinyin: "biān" }, { char: "辑", pinyin: "jí" }]
  },
  "籍": {
    pinyin: "jí",
    structure: "上下结构",
    composition: "竹 + 籍",
    compositionParts: [{ char: "竹", pinyin: "zhú" }, { char: "籍", pinyin: "jí" }],
    memoryTip: "竹字头加籍，书籍籍贯。",
    words: [{ word: "书籍", pinyin: "shū jí" }, { word: "籍贯", pinyin: "jí guàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }, { char: "籍", pinyin: "jí" }, { char: "很", pinyin: "hěn" }, { char: "有", pinyin: "yǒu" }, { char: "趣", pinyin: "qù" }]
  },
  "几": {
    pinyin: "jī",
    structure: "独体字",
    composition: "几",
    compositionParts: [{ char: "几", pinyin: "jī" }],
    memoryTip: "像小桌子，几个几何。",
    words: [{ word: "几个", pinyin: "jǐ ge" }, { word: "几何", pinyin: "jǐ hé" }],
    sentenceData: [{ char: "桌", pinyin: "zhuō" }, { char: "子", pinyin: "zi" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "几", pinyin: "jǐ" }, { char: "本", pinyin: "běn" }, { char: "书", pinyin: "shū" }]
  },
  "已": {
    pinyin: "yǐ",
    structure: "独体字",
    composition: "已",
    compositionParts: [{ char: "已", pinyin: "yǐ" }],
    memoryTip: "像半开口的框，已经已经。",
    words: [{ word: "已经", pinyin: "yǐ jīng" }, { word: "已而", pinyin: "yǐ ér" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }, { char: "了", pinyin: "le" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }]
  },
  "挤": {
    pinyin: "jǐ",
    structure: "左右结构",
    composition: "扌 + 齐",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "齐", pinyin: "qí" }],
    memoryTip: "提手旁加齐，拥挤挤压。",
    words: [{ word: "拥挤", pinyin: "yōng jǐ" }, { word: "挤压", pinyin: "jǐ yā" }],
    sentenceData: [{ char: "公", pinyin: "gōng" }, { char: "交", pinyin: "jiāo" }, { char: "车", pinyin: "chē" }, { char: "上", pinyin: "shàng" }, { char: "人", pinyin: "rén" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "，", pinyin: "，" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "拥", pinyin: "yōng" }, { char: "挤", pinyin: "jǐ" }]
  },
  "脊": {
    pinyin: "jǐ",
    structure: "上下结构",
    composition: "⺡ + 人 + 月",
    compositionParts: [{ char: "⺡", pinyin: "shuǐ" }, { char: "人", pinyin: "rén" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "三点水加人加月，脊梁脊椎。",
    words: [{ word: "脊梁", pinyin: "jǐ liáng" }, { word: "脊椎", pinyin: "jǐ zhuī" }],
    sentenceData: [{ char: "长", pinyin: "cháng" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "弯", pinyin: "wān" }, { char: "腰", pinyin: "yāo" }, { char: "会", pinyin: "huì" }, { char: "伤", pinyin: "shāng" }, { char: "脊", pinyin: "jǐ" }, { char: "椎", pinyin: "zhuī" }]
  },
  "计": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "讠 + 十",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "十", pinyin: "shí" }],
    memoryTip: "言字旁加十字，计算计划。",
    words: [{ word: "计算", pinyin: "jì suàn" }, { word: "计划", pinyin: "jì huà" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "计", pinyin: "jì" }, { char: "算", pinyin: "suàn" }, { char: "一", pinyin: "yī" }, { char: "下", pinyin: "xià" }, { char: "成", pinyin: "chéng" }, { char: "本", pinyin: "běn" }]
  },
  "记": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "讠 + 己",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "己", pinyin: "jǐ" }],
    memoryTip: "言字旁加己，记住日记。",
    words: [{ word: "记住", pinyin: "jì zhù" }, { word: "日记", pinyin: "rì jì" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "记", pinyin: "jì" }, { char: "住", pinyin: "zhù" }, { char: "这", pinyin: "zhè" }, { char:"个", pinyin: "ge" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }, { char: "的", pinyin: "de" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shi" }, { char: "点", pinyin: "diǎn" }]
  },
  "纪": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "纟 + 己",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "己", pinyin: "jǐ" }],
    memoryTip: "绞丝旁加己，纪律纪念。",
    words: [{ word: "纪律", pinyin: "jì lǜ" }, { word: "纪念", pinyin: "jì niàn" }],
    sentenceData: [{ char: "军", pinyin: "jūn" }, { char: "队", pinyin: "duì" }, { char: "有", pinyin: "yǒu" }, { char: "严", pinyin: "yán" }, { char: "格", pinyin: "gé" }, { char: "的", pinyin: "de" }, { char: "纪", pinyin: "jì" }, { char: "律", pinyin: "lǜ" }]
  },
  "迹": {
    pinyin: "jì",
    structure: "半包围结构",
    composition: "辶 + 亦",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "亦", pinyin: "yì" }],
    memoryTip: "走之底加亦，痕迹事迹。",
    words: [{ word: "痕迹", pinyin: "hén jì" }, { word: "事迹", pinyin: "shì jì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "留", pinyin: "liú" }, { char: "下", pinyin: "xià" }, { char: "了", pinyin: "le" }, { char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "足", pinyin: "zú" }, { char: "迹", pinyin: "jì" }]
  },
  "技": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "扌 + 支",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "支", pinyin: "zhī" }],
    memoryTip: "提手旁加支，技术技巧。",
    words: [{ word: "技术", pinyin: "jì shù" }, { word: "技巧", pinyin: "jì qiǎo" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "技", pinyin: "jì" }, { char: "术", pinyin: "shù" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }, { char: "超", pinyin: "chāo" }]
  },
  "际": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "阝 + 示",
    compositionParts: [{ char: "阝", pinyin: "yì" }, { char: "示", pinyin: "shì" }],
    memoryTip: "耳刀旁加示，国际实际。",
    words: [{ word: "国际", pinyin: "guó jì" }, { word: "实际", pinyin: "shí jì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "国", pinyin: "guó" }, { char: "际", pinyin: "jì" }, { char: "会", pinyin: "huì" }, { char: "议", pinyin: "yì" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "剂": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "刂 + 齐",
    compositionParts: [{ char: "刂", pinyin: "dāo" }, { char: "齐", pinyin: "qí" }],
    memoryTip: "立刀旁加齐，药剂剂量。",
    words: [{ word: "药剂", pinyin: "yào jì" }, { word: "剂量", pinyin: "jì liàng" }],
    sentenceData: [{ char: "医", pinyin: "yī" }, { char: "生", pinyin: "shēng" }, { char: "给", pinyin: "gěi" }, { char: "他", pinyin: "tā" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "些", pinyin: "xiē" }, { char: "药", pinyin: "yào" }, { char: "剂", pinyin: "jì" }]
  },
  "季": {
    pinyin: "jì",
    structure: "上下结构",
    composition: "禾 + 子",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "子", pinyin: "zǐ" }],
    memoryTip: "禾字加子字，季节季度。",
    words: [{ word: "季节", pinyin: "jì jié" }, { word: "季度", pinyin: "jì dù" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "年", pinyin: "nián" }, { char: "中", pinyin: "zhōng" }, { char: "最", pinyin: "zuì" }, { char: "美", pinyin: "měi" }, { char: "的", pinyin: "de" }, { char: "季", pinyin: "jì" }, { char: "节", pinyin: "jié" }]
  },
  "既": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "旡 + 旡",
    compositionParts: [{ char: "旡", pinyin: "jì" }, { char: "旡", pinyin: "jì" }],
    memoryTip: "两个旡字并排，既然既而。",
    words: [{ word: "既然", pinyin: "jì rán" }, { word: "既而", pinyin: "jì ér" }],
    sentenceData: [{ char: "既", pinyin: "jì" }, { char: "然", pinyin: "rán" }, { char: "你", pinyin: "nǐ" }, { char: "不", pinyin: "bù" }, { char: "想", pinyin: "xiǎng" }, { char: "去", pinyin: "qù" }, { char: "，", pinyin: "，" }, { char: "我", pinyin: "wǒ" }, { char: "也", pinyin: "yě" }, { char: "不", pinyin: "bù" }, { char: "强", pinyin: "qiǎng" }, { char: "求", pinyin: "qiú" }]
  },
  "济": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "氵 + 齐",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "齐", pinyin: "qí" }],
    memoryTip: "三点水加齐，经济救济。",
    words: [{ word: "经济", pinyin: "jīng jì" }, { word: "救济", pinyin: "jiù jì" }],
    sentenceData: [{ char: "国", pinyin: "guó" }, { char: "家", pinyin: "jiā" }, { char: "的", pinyin: "de" }, { char: "经", pinyin: "jīng" }, { char: "济", pinyin: "jì" }, { char: "发", pinyin: "fā" }, { char: "展", pinyin: "zhǎn" }, { char: "很", pinyin: "hěn" }, { char: "快", pinyin: "kuài" }]
  },
  "继": {
    pinyin: "jì",
    structure: "左右结构",
    composition: "纟 + 米",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "米", pinyin: "mǐ" }],
    memoryTip: "绞丝旁加米，继续继承。",
    words: [{ word: "继续", pinyin: "jì xù" }, { word: "继承", pinyin: "jì chéng" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "继", pinyin: "jì" }, { char: "续", pinyin: "xù" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "，", pinyin: "，" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "放", pinyin: "fàng" }, { char: "弃", pinyin: "qì" }]
  },
  "寂": {
    pinyin: "jì",
    structure: "上下结构",
    composition: "宀 + 叔",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "叔", pinyin: "shū" }],
    memoryTip: "宝盖头加叔，寂寞寂静。",
    words: [{ word: "寂寞", pinyin: "jì mò" }, { word: "寂静", pinyin: "jì jìng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "ge" }, { char: "人", pinyin: "rén" }, { char: "住", pinyin: "zhù" }, { char: "在", pinyin: "zài" }, { char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "，", pinyin: "，" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "很", pinyin: "hěn" }, { char: "寂", pinyin: "jì" }, { char: "寞", pinyin: "mò" }]
  },
  "寄": {
    pinyin: "jì",
    structure: "上下结构",
    composition: "宀 + 奇",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "奇", pinyin: "qí" }],
    memoryTip: "宝盖头加奇，寄信寄宿。",
    words: [{ word: "寄信", pinyin: "jì xìn" }, { word: "寄宿", pinyin: "jì sù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "给", pinyin: "gěi" }, { char: "家", pinyin: "jiā" }, { char: "里", pinyin: "lǐ" }, { char: "寄", pinyin: "jì" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "封", pinyin: "fēng" }, { char: "信", pinyin: "xìn" }]
  },
  "忌": {
    pinyin: "jì",
    structure: "上下结构",
    composition: "己 + 心",
    compositionParts: [{ char: "己", pinyin: "jǐ" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "己字加心字，忌妒禁忌。",
    words: [{ word: "忌妒", pinyin: "jì dù" }, { word: "禁忌", pinyin: "jìn jì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "不", pinyin: "bù" }, { char: "应", pinyin: "yīng" }, { char: "该", pinyin: "gāi" }, { char: "忌", pinyin: "jì" }, { char: "妒", pinyin: "dù" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }, { char: "的", pinyin: "de" }, { char: "成", pinyin: "chéng" }, { char: "功", pinyin: "gōng" }]
  },
  "加": {
    pinyin: "jiā",
    structure: "左右结构",
    composition: "力 + 口",
    compositionParts: [{ char: "力", pinyin: "lì" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "力字加口字，加入增加。",
    words: [{ word: "加入", pinyin: "jiā rù" }, { word: "增加", pinyin: "zēng jiā" }],
    sentenceData: [{ char: "欢", pinyin: "huān" }, { char: "迎", pinyin: "yíng" }, { char: "新", pinyin: "xīn" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "加", pinyin: "jiā" }, { char: "入", pinyin: "rù" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "班", pinyin: "bān" }, { char: "级", pinyin: "jí" }]
  },
  "夹": {
    pinyin: "jiā",
    structure: "独体字",
    composition: "夹",
    compositionParts: [{ char: "夹", pinyin: "jiā" }],
    memoryTip: "两点加一横加两点，夹子夹道。",
    words: [{ word: "夹子", pinyin: "jiā zi" }, { word: "夹道", pinyin: "jiā dào" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "用", pinyin: "yòng" }, { char: "夹", pinyin: "jiā" }, { char: "子", pinyin: "zi" }, { char: "夹", pinyin: "jiā" }, { char: "住", pinyin: "zhù" }, { char: "这", pinyin: "zhè" }, { char: "张", pinyin: "zhāng" }, { char: "纸", pinyin: "zhǐ" }]
  },
  "佳": {
    pinyin: "jiā",
    structure: "左右结构",
    composition: "亻 + 圭",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "圭", pinyin: "guī" }],
    memoryTip: "单人旁加圭，佳音佳作。",
    words: [{ word: "佳音", pinyin: "jiā yīn" }, { word: "佳作", pinyin: "jiā zuò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "篇", pinyin: "piān" }, { char: "文", pinyin: "wén" }, { char: "章", pinyin: "zhāng" }, { char: "真", pinyin: "zhēn" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "篇", pinyin: "piān" }, { char: "佳", pinyin: "jiā" }, { char: "作", pinyin: "zuò" }]
  },
  "家": {
    pinyin: "jiā",
    structure: "上下结构",
    composition: "宀 + 豕",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "豕", pinyin: "shǐ" }],
    memoryTip: "宝盖头加豕，家庭家人。",
    words: [{ word: "家庭", pinyin: "jiā tíng" }, { word: "家人", pinyin: "jiā rén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "家", pinyin: "jiā" }]
  },
  "嘉": {
    pinyin: "jiā",
    structure: "上下结构",
    composition: "吉 + 加",
    compositionParts: [{ char: "吉", pinyin: "jí" }, { char: "加", pinyin: "jiā" }],
    memoryTip: "吉字加加字，嘉奖嘉宾。",
    words: [{ word: "嘉奖", pinyin: "jiā jiǎng" }, { word: "嘉宾", pinyin: "jiā bīn" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "嘉", pinyin: "jiā" }, { char: "奖", pinyin: "jiǎng" }, { char: "了", pinyin: "le" }, { char: "优", pinyin: "yōu" }, { char: "秀", pinyin: "xiù" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }]
  },
  "甲": {
    pinyin: "jiǎ",
    structure: "独体字",
    composition: "甲",
    compositionParts: [{ char: "甲", pinyin: "jiǎ" }],
    memoryTip: "田字出头加一竖，甲乙丙丁。",
    words: [{ word: "甲乙", pinyin: "jiǎ yǐ" }, { word: "甲鱼", pinyin: "jiǎ yú" }],
    sentenceData: [{ char: "甲", pinyin: "jiǎ" }, { char: "、", pinyin: "、" }, { char: "乙", pinyin: "yǐ" }, { char: "、", pinyin: "、" }, { char: "丙", pinyin: "bǐng" }, { char: "、", pinyin: "、" }, { char: "丁", pinyin: "dīng" }, { char: "是", pinyin: "shì" }, { char: "天", pinyin: "tiān" }, { char: "干", pinyin: "gān" }, { char: "的", pinyin: "de" }, { char: "前", pinyin: "qián" }, { char: "四", pinyin: "sì" }, { char: "位", pinyin: "wèi" }]
  },
  "贾": {
    pinyin: "jiǎ",
    structure: "上下结构",
    composition: "西 + 贝",
    compositionParts: [{ char: "西", pinyin: "xī" }, { char: "贝", pinyin: "bèi" }],
    memoryTip: "西字加贝字，商贾姓氏。",
    words: [{ word: "商贾", pinyin: "shāng jiǎ" }, { word: "姓氏", pinyin: "xìng shì" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "商", pinyin: "shāng" }, { char: "贾", pinyin: "jiǎ" }, { char: "很", pinyin: "hěn" }, { char: "有", pinyin: "yǒu" }, { char: "钱", pinyin: "qián" }]
  },
  "钾": {
    pinyin: "jiǎ",
    structure: "左右结构",
    composition: "钅 + 甲",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "甲", pinyin: "jiǎ" }],
    memoryTip: "金字旁加甲，钾元素钾肥。",
    words: [{ word: "钾肥", pinyin: "jiǎ féi" }, { word: "钾元素", pinyin: "jiǎ yuán sù" }],
    sentenceData: [{ char: "钾", pinyin: "jiǎ" }, { char: "是", pinyin: "shì" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }, { char: "的", pinyin: "de" }, { char: "化", pinyin: "huà" }, { char: "学", pinyin: "xué" }, { char: "元", pinyin: "yuán" }, { char: "素", pinyin: "sù" }]
  },
  "价": {
    pinyin: "jià",
    structure: "左右结构",
    composition: "亻 + 介",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "介", pinyin: "jiè" }],
    memoryTip: "单人旁加介，价格价值。",
    words: [{ word: "价格", pinyin: "jià gé" }, { word: "价值", pinyin: "jià zhí" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "的", pinyin: "de" }, { char: "价", pinyin: "jià" }, { char: "格", pinyin: "gé" }, { char: "很", pinyin: "hěn" }, { char: "便", pinyin: "pián" }, { char: "宜", pinyin: "yi" }]
  },
  "驾": {
    pinyin: "jià",
    structure: "上下结构",
    composition: "加 + 马",
    compositionParts: [{ char: "加", pinyin: "jiā" }, { char: "马", pinyin: "mǎ" }],
    memoryTip: "加字加马字，驾驶驾车。",
    words: [{ word: "驾驶", pinyin: "jià shǐ" }, { word: "驾车", pinyin: "jià chē" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "在", pinyin: "zài" }, { char: "驾", pinyin: "jià" }, { char: "驶", pinyin: "shǐ" }, { char: "汽", pinyin: "qì" }, { char: "车", pinyin: "chē" }]
  },
  "架": {
    pinyin: "jià",
    structure: "上下结构",
    composition: "加 + 木",
    compositionParts: [{ char: "加", pinyin: "jiā" }, { char: "木", pinyin: "mù" }],
    memoryTip: "加字加木字，书架衣架。",
    words: [{ word: "书架", pinyin: "shū jià" }, { word: "衣架", pinyin: "yī jià" }],
    sentenceData: [{ char: "书", pinyin: "shū" }, { char: "架", pinyin: "jià" }, { char: "上", pinyin: "shàng" }, { char: "摆", pinyin: "bǎi" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "书", pinyin: "shū" }]
  },
  "假": {
    pinyin: "jiǎ",
    structure: "左中右结构",
    composition: "亻 + 叚",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "叚", pinyin: "jiǎ" }],
    memoryTip: "单人旁加叚，真假放假。",
    words: [{ word: "真假", pinyin: "zhēn jiǎ" }, { word: "放假", pinyin: "fàng jià" }],
    sentenceData: [{ char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "放", pinyin: "fàng" }, { char: "假", pinyin: "jià" }]
  },
  "嫁": {
    pinyin: "jià",
    structure: "左右结构",
    composition: "女 + 家",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "家", pinyin: "jiā" }],
    memoryTip: "女字旁加家，出嫁嫁衣。",
    words: [{ word: "出嫁", pinyin: "chū jià" }, { word: "嫁衣", pinyin: "jià yī" }],
    sentenceData: [{ char: "姐", pinyin: "jiě" }, { char: "姐", pinyin: "jie" }, { char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "出", pinyin: "chū" }, { char: "嫁", pinyin: "jià" }]
  },
  "稼": {
    pinyin: "jià",
    structure: "左右结构",
    composition: "禾 + 家",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "家", pinyin: "jiā" }],
    memoryTip: "禾字旁加家，庄稼稼穑。",
    words: [{ word: "庄稼", pinyin: "zhuāng jià" }, { word: "稼穑", pinyin: "jià sè" }],
    sentenceData: [{ char: "田", pinyin: "tián" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "庄", pinyin: "zhuāng" }, { char: "稼", pinyin: "jià" }, { char: "长", pinyin: "zhǎng" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "尖": {
    pinyin: "jiān",
    structure: "上下结构",
    composition: "小 + 大",
    compositionParts: [{ char: "小", pinyin: "xiǎo" }, { char: "大", pinyin: "dà" }],
    memoryTip: "小字加大字，尖锐笔尖。",
    words: [{ word: "尖锐", pinyin: "jiān ruì" }, { word: "笔尖", pinyin: "bǐ jiān" }],
    sentenceData: [{ char: "铅", pinyin: "qiān" }, { char: "笔", pinyin: "bǐ" }, { char: "的", pinyin: "de" }, { char: "笔", pinyin: "bǐ" }, { char: "尖", pinyin: "jiān" }, { char: "很", pinyin: "hěn" }, { char: "尖", pinyin: "jiān" }]
  },
  "坚": {
    pinyin: "jiān",
    structure: "上下结构",
    composition: "臣 + 又 + 土",
    compositionParts: [{ char: "臣", pinyin: "chén" }, { char: "又", pinyin: "yòu" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "臣字加又加土，坚强坚固。",
    words: [{ word: "坚强", pinyin: "jiān qiáng" }, { word: "坚固", pinyin: "jiān gù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "有", pinyin: "yǒu" }, { char: "坚", pinyin: "jiān" }, { char: "强", pinyin: "qiáng" }, { char: "的", pinyin: "de" }, { char: "意", pinyin: "yì" }, { char: "志", pinyin: "zhì" }]
  },
  "间": {
    pinyin: "jiān",
    structure: "半包围结构",
    composition: "门 + 日",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "日", pinyin: "rì" }],
    memoryTip: "门字加日字，时间中间。",
    words: [{ word: "时间", pinyin: "shí jiān" }, { word: "中间", pinyin: "zhōng jiān" }],
    sentenceData: [{ char: "中", pinyin: "zhōng" }, { char: "间", pinyin: "jiān" }, { char: "的", pinyin: "de" }, { char: "那", pinyin: "nà" }, { char: "个", pinyin: "ge" }, { char: "人", pinyin: "rén" }, { char: "是", pinyin: "shì" }, { char: "谁", pinyin: "shuí" }]
  },
  "肩": {
    pinyin: "jiān",
    structure: "半包围结构",
    composition: "户 + 月",
    compositionParts: [{ char: "户", pinyin: "hù" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "户字加月字，肩膀肩头。",
    words: [{ word: "肩膀", pinyin: "jiān bǎng" }, { word: "肩头", pinyin: "jiān tóu" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "肩", pinyin: "jiān" }, { char: "膀", pinyin: "bǎng" }, { char: "很", pinyin: "hěn" }, { char: "宽", pinyin: "kuān" }]
  },
  "艰": {
    pinyin: "jiān",
    structure: "左右结构",
    composition: "又 + 艮",
    compositionParts: [{ char: "又", pinyin: "yòu" }, { char: "艮", pinyin: "gèn" }],
    memoryTip: "又字加艮字，艰难艰苦。",
    words: [{ word: "艰难", pinyin: "jiān nán" }, { word: "艰苦", pinyin: "jiān kǔ" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "件", pinyin: "jiàn" }, { char: "艰", pinyin: "jiān" }, { char: "难", pinyin: "nán" }, { char: "的", pinyin: "de" }, { char: "事", pinyin: "shì" }]
  },
  "兼": {
    pinyin: "jiān",
    structure: "独体字",
    composition: "兼",
    compositionParts: [{ char: "兼", pinyin: "jiān" }],
    memoryTip: "两点一横加两竖，兼顾兼任。",
    words: [{ word: "兼顾", pinyin: "jiān gù" }, { word: "兼任", pinyin: "jiān rèn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "要", pinyin: "yào" }, { char: "兼", pinyin: "jiān" }, { char: "顾", pinyin: "gù" }, { char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }, { char: "和", pinyin: "hé" }, { char: "家", pinyin: "jiā" }, { char: "庭", pinyin: "tíng" }]
  },
  "监": {
    pinyin: "jiān",
    structure: "上下结构",
    composition: "臣 + 皿",
    compositionParts: [{ char: "臣", pinyin: "chén" }, { char: "皿", pinyin: "mǐn" }],
    memoryTip: "臣字加皿字，监督监视。",
    words: [{ word: "监督", pinyin: "jiān dū" }, { word: "监视", pinyin: "jiān shì" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "在", pinyin: "zài" }, { char: "监", pinyin: "jiān" }, { char: "督", pinyin: "dū" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "减": {
    pinyin: "jiǎn",
    structure: "左右结构",
    composition: "冫 + 咸",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "咸", pinyin: "xián" }],
    memoryTip: "两点水加咸，减少减法。",
    words: [{ word: "减少", pinyin: "jiǎn shǎo" }, { word: "减法", pinyin: "jiǎn fǎ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "减", pinyin: "jiǎn" }, { char: "少", pinyin: "shǎo" }, { char: "浪", pinyin: "làng" }, { char: "费", pinyin: "fèi" }]
  },
  "剪": {
    pinyin: "jiǎn",
    structure: "上下结构",
    composition: "前 + 刀",
    compositionParts: [{ char: "前", pinyin: "qián" }, { char: "刀", pinyin: "dāo" }],
    memoryTip: "前字加刀字，剪刀剪纸。",
    words: [{ word: "剪刀", pinyin: "jiǎn dāo" }, { word: "剪纸", pinyin: "jiǎn zhǐ" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }, { char: "用", pinyin: "yòng" }, { char: "剪", pinyin: "jiǎn" }, { char: "刀", pinyin: "dāo" }, { char: "剪", pinyin: "jiǎn" }, { char: "纸", pinyin: "zhǐ" }]
  },
  "检": {
    pinyin: "jiǎn",
    structure: "左右结构",
    composition: "木 + 佥",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "佥", pinyin: "qiān" }],
    memoryTip: "木字旁加佥，检查检验。",
    words: [{ word: "检查", pinyin: "jiǎn chá" }, { word: "检验", pinyin: "jiǎn yàn" }],
    sentenceData: [{ char: "医", pinyin: "yī" }, { char: "生", pinyin: "shēng" }, { char: "在", pinyin: "zài" }, { char: "检", pinyin: "jiǎn" }, { char: "查", pinyin: "chá" }, { char: "病", pinyin: "bìng" }, { char: "人", pinyin: "rén" }]
  },
  "简": {
    pinyin: "jiǎn",
    structure: "上下结构",
    composition: "⺮ + 间",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "间", pinyin: "jiān" }],
    memoryTip: "竹字头加间，简单简化。",
    words: [{ word: "简单", pinyin: "jiǎn dān" }, { word: "简化", pinyin: "jiǎn huà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "道", pinyin: "dào" }, { char: "题", pinyin: "tí" }, { char: "很", pinyin: "hěn" }, { char: "简", pinyin: "jiǎn" }, { char: "单", pinyin: "dān" }]
  },
  "碱": {
    pinyin: "jiǎn",
    structure: "左右结构",
    composition: "石 + 咸",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "咸", pinyin: "xián" }],
    memoryTip: "石字旁加咸，碱性碱面。",
    words: [{ word: "碱性", pinyin: "jiǎn xìng" }, { word: "碱面", pinyin: "jiǎn miàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "种", pinyin: "zhǒng" }, { char: "物", pinyin: "wù" }, { char: "质", pinyin: "zhì" }, { char: "呈", pinyin: "chéng" }, { char: "碱", pinyin: "jiǎn" }, { char: "性", pinyin: "xìng" }]
  },
  "见": {
    pinyin: "jiàn",
    structure: "独体字",
    composition: "见",
    compositionParts: [{ char: "见", pinyin: "jiàn" }],
    memoryTip: "一横一撇加竖弯，看见见面。",
    words: [{ word: "看见", pinyin: "kàn jiàn" }, { word: "见面", pinyin: "jiàn miàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "看", pinyin: "kàn" }, { char: "见", pinyin: "jiàn" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }]
  },
  "件": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "亻 + 牛",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "牛", pinyin: "niú" }],
    memoryTip: "单人旁加牛，一件衣服。",
    words: [{ word: "衣服", pinyin: "yī fu" }, { word: "文件", pinyin: "wén jiàn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "事", pinyin: "shì" }, { char: "情", pinyin: "qing" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "建": {
    pinyin: "jiàn",
    structure: "半包围结构",
    composition: "廴 + 聿",
    compositionParts: [{ char: "廴", pinyin: "yǐn" }, { char: "聿", pinyin: "yù" }],
    memoryTip: "建之旁加聿，建设建立。",
    words: [{ word: "建设", pinyin: "jiàn shè" }, { word: "建立", pinyin: "jiàn lì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "建", pinyin: "jiàn" }, { char: "设", pinyin: "shè" }, { char: "美", pinyin: "měi" }, { char: "好", pinyin: "hǎo" }, { char: "家", pinyin: "jiā" }, { char: "园", pinyin: "yuán" }]
  },
  "剑": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "佥 + 刂",
    compositionParts: [{ char: "佥", pinyin: "qiān" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "佥字加立刀，宝剑刀剑。",
    words: [{ word: "宝剑", pinyin: "bǎo jiàn" }, { word: "刀剑", pinyin: "dāo jiàn" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "剑", pinyin: "jiàn" }, { char: "客", pinyin: "kè" }, { char: "很", pinyin: "hěn" }, { char: "厉", pinyin: "lì" }, { char: "害", pinyin: "hai" }]
  },
  "健": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "亻 + 建",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "建", pinyin: "jiàn" }],
    memoryTip: "单人旁加建，健康健美。",
    words: [{ word: "健康", pinyin: "jiàn kāng" }, { word: "健美", pinyin: "jiàn měi" }],
    sentenceData: [{ char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "舰": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "舟 + 见",
    compositionParts: [{ char: "舟", pinyin: "zhōu" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "舟字旁加见，军舰战舰。",
    words: [{ word: "军舰", pinyin: "jūn jiàn" }, { word: "战舰", pinyin: "zhàn jiàn" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "军", pinyin: "jūn" }, { char: "的", pinyin: "de" }, { char: "军", pinyin: "jūn" }, { char: "舰", pinyin: "jiàn" }, { char: "很", pinyin: "hěn" }, { char: "威", pinyin: "wēi" }, { char: "武", pinyin: "wǔ" }]
  },
  "渐": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "氵 + 斩",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "斩", pinyin: "zhǎn" }],
    memoryTip: "三点水加斩，逐渐渐渐。",
    words: [{ word: "逐渐", pinyin: "zhú jiàn" }, { word: "渐渐", pinyin: "jiàn jiàn" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "渐", pinyin: "jiàn" }, { char: "渐", pinyin: "jiàn" }, { char: "冷", pinyin: "lěng" }, { char: "了", pinyin: "le" }]
  },
  "战": {
    pinyin: "zhàn",
    structure: "左右结构",
    composition: "占 + 戈",
    compositionParts: [{ char: "占", pinyin: "zhàn" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "占字加戈字，战争战斗。",
    words: [{ word: "战争", pinyin: "zhàn zhēng" }, { word: "战斗", pinyin: "zhàn dòu" }],
    sentenceData: [{ char: "战", pinyin: "zhàn" }, { char: "士", pinyin: "shì" }, { char: "们", pinyin: "men" }, { char: "很", pinyin: "hěn" }, { char: "勇", pinyin: "yǒng" }, { char: "敢", pinyin: "gǎn" }]
  },
  "鉴": {
    pinyin: "jiàn",
    structure: "上下结构",
    composition: "⺮ + 金",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "金", pinyin: "jīn" }],
    memoryTip: "竹字头加金，鉴定鉴别。",
    words: [{ word: "鉴定", pinyin: "jiàn dìng" }, { word: "鉴别", pinyin: "jiàn bié" }],
    sentenceData: [{ char: "专", pinyin: "zhuān" }, { char: "家", pinyin: "jiā" }, { char: "在", pinyin: "zài" }, { char: "鉴", pinyin: "jiàn" }, { char: "定", pinyin: "dìng" }, { char: "古", pinyin: "gǔ" }, { char: "董", pinyin: "dǒng" }]
  },
  "键": {
    pinyin: "jiàn",
    structure: "左右结构",
    composition: "钅 + 建",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "建", pinyin: "jiàn" }],
    memoryTip: "金字旁加建，键盘关键。",
    words: [{ word: "键盘", pinyin: "jiàn pán" }, { word: "关键", pinyin: "guān jiàn" }],
    sentenceData: [{ char: "电", pinyin: "diàn" }, { char: "脑", pinyin: "nǎo" }, { char: "的", pinyin: "de" }, { char: "键", pinyin: "jiàn" }, { char: "盘", pinyin: "pán" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "用", pinyin: "yòng" }]
  },
  "箭": {
    pinyin: "jiàn",
    structure: "上下结构",
    composition: "⺮ + 前",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "前", pinyin: "qián" }],
    memoryTip: "竹字头加前，弓箭箭头。",
    words: [{ word: "弓箭", pinyin: "gōng jiàn" }, { word: "箭头", pinyin: "jiàn tóu" }],
    sentenceData: [{ char: "猎", pinyin: "liè" }, { char: "人", pinyin: "rén" }, { char: "拿", pinyin: "ná" }, { char: "着", pinyin: "zhe" }, { char: "弓", pinyin: "gōng" }, { char: "箭", pinyin: "jiàn" }]
  },
  "江": {
    pinyin: "jiāng",
    structure: "左右结构",
    composition: "氵 + 工",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "三点水加工，长江江水。",
    words: [{ word: "长江", pinyin: "cháng jiāng" }, { word: "江水", pinyin: "jiāng shuǐ" }],
    sentenceData: [{ char: "长", pinyin: "cháng" }, { char: "江", pinyin: "jiāng" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "最", pinyin: "zuì" }, { char: "长", pinyin: "cháng" }, { char: "的", pinyin: "de" }, { char: "河", pinyin: "hé" }, { char: "流", pinyin: "liú" }]
  },
  "姜": {
    pinyin: "jiāng",
    structure: "上下结构",
    composition: "⺮ + 女",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "女", pinyin: "nǚ" }],
    memoryTip: "草字头加女，生姜姜汤。",
    words: [{ word: "生姜", pinyin: "shēng jiāng" }, { word: "姜汤", pinyin: "jiāng tāng" }],
    sentenceData: [{ char: "生", pinyin: "shēng" }, { char: "姜", pinyin: "jiāng" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "的", pinyin: "de" }, { char: "调", pinyin: "tiáo" }, { char: "味", pinyin: "wèi" }, { char: "品", pinyin: "pǐn" }]
  },
  "将": {
    pinyin: "jiāng",
    structure: "左右结构",
    composition: "丬 + 寽",
    compositionParts: [{ char: "丬", pinyin: "pán" }, { char: "寽", pinyin: "lǜ" }],
    memoryTip: "将字旁加寽，将来将军。",
    words: [{ word: "将来", pinyin: "jiāng lái" }, { word: "将军", pinyin: "jiāng jūn" }],
    sentenceData: [{ char: "将", pinyin: "jiāng" }, { char: "来", pinyin: "lái" }, { char: "我", pinyin: "wǒ" }, { char: "要", pinyin: "yào" }, { char: "当", pinyin: "dāng" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }, { char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }]
  },
  "浆": {
    pinyin: "jiāng",
    structure: "上下结构",
    composition: "⺮ + 水",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "水", pinyin: "shuǐ" }],
    memoryTip: "竹字头加水，豆浆泥浆。",
    words: [{ word: "豆浆", pinyin: "dòu jiāng" }, { word: "泥浆", pinyin: "ní jiāng" }],
    sentenceData: [{ char: "早", pinyin: "zǎo" }, { char: "上", pinyin: "shàng" }, { char: "我", pinyin: "wǒ" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "喝", pinyin: "hē" }, { char: "豆", pinyin: "dòu" }, { char: "浆", pinyin: "jiāng" }]
  },
  "僵": {
    pinyin: "jiāng",
    structure: "左右结构",
    composition: "亻 + 畺",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "畺", pinyin: "jiāng" }],
    memoryTip: "单人旁加畺，僵硬冻僵。",
    words: [{ word: "僵硬", pinyin: "jiāng yìng" }, { word: "冻僵", pinyin: "dòng jiāng" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "太", pinyin: "tài" }, { char: "冷", pinyin: "lěng" }, { char: "手", pinyin: "shǒu" }, { char: "都", pinyin: "dōu" }, { char: "冻", pinyin: "dòng" }, { char: "僵", pinyin: "jiāng" }]
  },
  "疆": {
    pinyin: "jiāng",
    structure: "左右结构",
    composition: "弓 + 畺",
    compositionParts: [{ char: "弓", pinyin: "gōng" }, { char: "畺", pinyin: "jiāng" }],
    memoryTip: "弓字旁加畺，边疆新疆。",
    words: [{ word: "边疆", pinyin: "biān jiāng" }, { word: "新疆", pinyin: "xīn jiāng" }],
    sentenceData: [{ char: "新", pinyin: "xīn" }, { char: "疆", pinyin: "jiāng" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "大", pinyin: "dà" }, { char: "省", pinyin: "shěng" }, { char: "份", pinyin: "fèn" }]
  },
  "讲": {
    pinyin: "jiǎng",
    structure: "左右结构",
    composition: "讠 + 井",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "井", pinyin: "jǐng" }],
    memoryTip: "言字旁加井，讲话讲课。",
    words: [{ word: "讲话", pinyin: "jiǎng huà" }, { word: "讲课", pinyin: "jiǎng kè" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "在", pinyin: "zài" }, { char: "讲", pinyin: "jiǎng" }, { char: "课", pinyin: "kè" }, { char: "给", pinyin: "gěi" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "听", pinyin: "tīng" }]
  },
  "奖": {
    pinyin: "jiǎng",
    structure: "上下结构",
    composition: "丬 + 夕 + 大",
    compositionParts: [{ char: "丬", pinyin: "pán" }, { char: "夕", pinyin: "xī" }, { char: "大", pinyin: "dà" }],
    memoryTip: "将字旁加夕加大，奖励奖状。",
    words: [{ word: "奖励", pinyin: "jiǎng lì" }, { word: "奖状", pinyin: "jiǎng zhuàng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "获", pinyin: "huò" }, { char: "得", pinyin: "dé" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "奖", pinyin: "jiǎng" }, { char: "状", pinyin: "zhuàng" }]
  },
  "蒋": {
    pinyin: "jiǎng",
    structure: "上下结构",
    composition: "艹 + 将",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "将", pinyin: "jiāng" }],
    memoryTip: "草字头加将，蒋姓蒋家。",
    words: [{ word: "蒋姓", pinyin: "jiǎng xìng" }, { word: "蒋家", pinyin: "jiǎng jiā" }],
    sentenceData: [{ char: "蒋", pinyin: "jiǎng" }, { char: "先", pinyin: "xiān" }, { char: "生", pinyin: "shēng" }, { char: "是", pinyin: "shì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "的", pinyin: "de" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }]
  },
  "匠": {
    pinyin: "jiàng",
    structure: "半包围结构",
    composition: "匚 + 斤",
    compositionParts: [{ char: "匚", pinyin: "fāng" }, { char: "斤", pinyin: "jīn" }],
    memoryTip: "匚字旁加斤，木匠工匠。",
    words: [{ word: "木匠", pinyin: "mù jiàng" }, { word: "工匠", pinyin: "gōng jiàng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "位", pinyin: "wèi" }, { char: "木", pinyin: "mù" }, { char: "匠", pinyin: "jiàng" }, { char: "手", pinyin: "shǒu" }, { char: "艺", pinyin: "yì" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "降": {
    pinyin: "jiàng",
    structure: "左右结构",
    composition: "阝 + 夅",
    compositionParts: [{ char: "阝", pinyin: "fù" }, { char: "夅", pinyin: "jiàng" }],
    memoryTip: "双耳旁加夅，下降降落。",
    words: [{ word: "下降", pinyin: "xià jiàng" }, { word: "降落", pinyin: "jiàng luò" }],
    sentenceData: [{ char: "飞", pinyin: "fēi" }, { char: "机", pinyin: "jī" }, { char: "降", pinyin: "jiàng" }, { char: "落", pinyin: "luò" }, { char: "在", pinyin: "zài" }, { char: "机", pinyin: "jī" }, { char: "场", pinyin: "chǎng" }]
  },
  "交": {
    pinyin: "jiāo",
    structure: "上下结构",
    composition: "亠 + 父 + 乂",
    compositionParts: [{ char: "亠", pinyin: "tóu" }, { char: "父", pinyin: "fù" }, { char: "乂", pinyin: "yì" }],
    memoryTip: "六字头加父加乂，交通交换。",
    words: [{ word: "交通", pinyin: "jiāo tōng" }, { word: "交换", pinyin: "jiāo huàn" }],
    sentenceData: [{ char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }, { char: "的", pinyin: "de" }, { char: "交", pinyin: "jiāo" }, { char: "通", pinyin: "tōng" }, { char: "很", pinyin: "hěn" }, { char: "便", pinyin: "biàn" }, { char: "利", pinyin: "lì" }]
  },
  "郊": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "阝 + 交",
    compositionParts: [{ char: "阝", pinyin: "fù" }, { char: "交", pinyin: "jiāo" }],
    memoryTip: "双耳旁加交，郊区郊外。",
    words: [{ word: "郊区", pinyin: "jiāo qū" }, { word: "郊外", pinyin: "jiāo wài" }],
    sentenceData: [{ char: "郊", pinyin: "jiāo" }, { char: "外", pinyin: "wài" }, { char: "的", pinyin: "de" }, { char: "风", pinyin: "fēng" }, { char: "景", pinyin: "jǐng" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }]
  },
  "娇": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "女 + 乔",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "乔", pinyin: "qiáo" }],
    memoryTip: "女字旁加乔，娇嫩娇气。",
    words: [{ word: "娇嫩", pinyin: "jiāo nèn" }, { word: "娇气", pinyin: "jiāo qì" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "女", pinyin: "nǚ" }, { char: "孩", pinyin: "hái" }, { char: "很", pinyin: "hěn" }, { char: "娇", pinyin: "jiāo" }, { char: "嫩", pinyin: "nèn" }]
  },
  "浇": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "氵 + 尧",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "尧", pinyin: "yáo" }],
    memoryTip: "三点水加尧，浇水浇灌。",
    words: [{ word: "浇水", pinyin: "jiāo shuǐ" }, { word: "浇灌", pinyin: "jiāo guàn" }],
    sentenceData: [{ char: "给", pinyin: "gěi" }, { char: "花", pinyin: "huā" }, { char: "浇", pinyin: "jiāo" }, { char: "水", pinyin: "shuǐ" }, { char: "要", pinyin: "yào" }, { char: "适", pinyin: "shì" }, { char: "量", pinyin: "liàng" }]
  },
  "骄": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "马 + 乔",
    compositionParts: [{ char: "马", pinyin: "mǎ" }, { char: "乔", pinyin: "qiáo" }],
    memoryTip: "马字旁加乔，骄傲骄阳。",
    words: [{ word: "骄傲", pinyin: "jiāo ào" }, { word: "骄阳", pinyin: "jiāo yáng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "为", pinyin: "wèi" }, { char: "祖", pinyin: "zǔ" }, { char: "国", pinyin: "guó" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "骄", pinyin: "jiāo" }, { char: "傲", pinyin: "ào" }]
  },
  "胶": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "月 + 交",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "交", pinyin: "jiāo" }],
    memoryTip: "月字旁加交，胶水胶带。",
    words: [{ word: "胶水", pinyin: "jiāo shuǐ" }, { word: "胶带", pinyin: "jiāo dài" }],
    sentenceData: [{ char: "用", pinyin: "yòng" }, { char: "胶", pinyin: "jiāo" }, { char: "水", pinyin: "shuǐ" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "粘", pinyin: "zhān" }, { char: "东", pinyin: "dōng" }, { char: "西", pinyin: "xī" }]
  },
  "焦": {
    pinyin: "jiāo",
    structure: "上下结构",
    composition: "隹 + 灬",
    compositionParts: [{ char: "隹", pinyin: "zhuī" }, { char: "灬", pinyin: "huǒ" }],
    memoryTip: "隹字加四点，焦急焦点。",
    words: [{ word: "焦急", pinyin: "jiāo jí" }, { word: "焦点", pinyin: "jiāo diǎn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "很", pinyin: "hěn" }, { char: "焦", pinyin: "jiāo" }, { char: "急", pinyin: "jí" }, { char: "地", pinyin: "de" }, { char: "等", pinyin: "děng" }, { char: "待", pinyin: "dài" }, { char: "结", pinyin: "jié" }, { char: "果", pinyin: "guǒ" }]
  },
  "礁": {
    pinyin: "jiāo",
    structure: "左右结构",
    composition: "石 + 焦",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "焦", pinyin: "jiāo" }],
    memoryTip: "石字旁加焦，礁石暗礁。",
    words: [{ word: "礁石", pinyin: "jiāo shí" }, { word: "暗礁", pinyin: "àn jiāo" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "礁", pinyin: "jiāo" }, { char: "石", pinyin: "shí" }]
  },
  "角": {
    pinyin: "jiǎo",
    structure: "上下结构",
    composition: "⺈ + 用",
    compositionParts: [{ char: "⺈", pinyin: "jué" }, { char: "用", pinyin: "yòng" }],
    memoryTip: "斜刀头加用，角度角落。",
    words: [{ word: "角度", pinyin: "jiǎo dù" }, { word: "角落", pinyin: "jiǎo luò" }],
    sentenceData: [{ char: "三", pinyin: "sān" }, { char: "角", pinyin: "jiǎo" }, { char: "形", pinyin: "xíng" }, { char: "有", pinyin: "yǒu" }, { char: "三", pinyin: "sān" }, { char: "个", pinyin: "ge" }, { char: "角", pinyin: "jiǎo" }]
  },
  "脚": {
    pinyin: "jiǎo",
    structure: "左右结构",
    composition: "月 + 却",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "却", pinyin: "què" }],
    memoryTip: "月字旁加却，脚步脚印。",
    words: [{ word: "脚步", pinyin: "jiǎo bù" }, { word: "脚印", pinyin: "jiǎo yìn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "脚", pinyin: "jiǎo" }, { char: "步", pinyin: "bù" }, { char: "很", pinyin: "hěn" }, { char: "轻", pinyin: "qīng" }]
  },
  "搅": {
    pinyin: "jiǎo",
    structure: "左右结构",
    composition: "扌 + 觉",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "觉", pinyin: "jué" }],
    memoryTip: "提手旁加觉，搅拌打搅。",
    words: [{ word: "搅拌", pinyin: "jiǎo bàn" }, { word: "打搅", pinyin: "dǎ jiǎo" }],
    sentenceData: [{ char: "用", pinyin: "yòng" }, { char: "勺", pinyin: "sháo" }, { char: "子", pinyin: "zi" }, { char: "搅", pinyin: "jiǎo" }, { char: "拌", pinyin: "bàn" }, { char: "蛋", pinyin: "dàn" }, { char: "黄", pinyin: "huáng" }]
  },
  "叫": {
    pinyin: "jiào",
    structure: "左右结构",
    composition: "口 + 丩",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "丩", pinyin: "jiū" }],
    memoryTip: "口字旁加丩，叫声喊叫。",
    words: [{ word: "叫声", pinyin: "jiào shēng" }, { word: "喊叫", pinyin: "hǎn jiào" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }, { char: "在", pinyin: "zài" }, { char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "叫", pinyin: "jiào" }]
  },
  "轿": {
    pinyin: "jiào",
    structure: "左右结构",
    composition: "车 + 乔",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "乔", pinyin: "qiáo" }],
    memoryTip: "车字旁加乔，轿车轿子。",
    words: [{ word: "轿车", pinyin: "jiào chē" }, { word: "轿子", pinyin: "jiào zi" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "辆", pinyin: "liàng" }, { char: "轿", pinyin: "jiào" }, { char: "车", pinyin: "chē" }, { char: "很", pinyin: "hěn" }, { char: "漂", pinyin: "piào" }, { char: "亮", pinyin: "liàng" }]
  },
  "较": {
    pinyin: "jiào",
    structure: "左右结构",
    composition: "车 + 交",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "交", pinyin: "jiāo" }],
    memoryTip: "车字旁加交，比较较量。",
    words: [{ word: "比较", pinyin: "bǐ jiào" }, { word: "较量", pinyin: "jiào liàng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "两", pinyin: "liǎng" }, { char: "个", pinyin: "ge" }, { char: "数", pinyin: "shù" }, { char: "字", pinyin: "zì" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "比", pinyin: "bǐ" }, { char: "较", pinyin: "jiào" }]
  },
  "教": {
    pinyin: "jiào",
    structure: "左右结构",
    composition: "孝 + 攵",
    compositionParts: [{ char: "孝", pinyin: "xiào" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "孝字加反文，教师教育。",
    words: [{ word: "教师", pinyin: "jiào shī" }, { word: "教育", pinyin: "jiào yù" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "在", pinyin: "zài" }, { char: "教", pinyin: "jiào" }, { char: "书", pinyin: "shū" }, { char: "育", pinyin: "yù" }, { char: "人", pinyin: "rén" }]
  },
  "阶": {
    pinyin: "jiē",
    structure: "左右结构",
    composition: "阝 + 介",
    compositionParts: [{ char: "阝", pinyin: "fù" }, { char: "介", pinyin: "jiè" }],
    memoryTip: "双耳旁加介，台阶阶段。",
    words: [{ word: "台阶", pinyin: "tái jiē" }, { word: "阶段", pinyin: "jiē duàn" }],
    sentenceData: [{ char: "台", pinyin: "tái" }, { char: "阶", pinyin: "jiē" }, { char: "上", pinyin: "shàng" }, { char: "坐", pinyin: "zuò" }, { char: "着", pinyin: "zhe" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }]
  },
  "皆": {
    pinyin: "jiē",
    structure: "上下结构",
    composition: "比 + 白",
    compositionParts: [{ char: "比", pinyin: "bǐ" }, { char: "白", pinyin: "bái" }],
    memoryTip: "比字加白字，皆是皆大欢喜。",
    words: [{ word: "皆是", pinyin: "jiē shì" }, { word: "皆大欢喜", pinyin: "jiē dà huān xǐ" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "人", pinyin: "rén" }, { char: "皆", pinyin: "jiē" }, { char: "有", pinyin: "yǒu" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "长", pinyin: "cháng" }, { char: "处", pinyin: "chù" }]
  },
  "接": {
    pinyin: "jiē",
    structure: "左右结构",
    composition: "扌 + 妾",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "妾", pinyin: "qiè" }],
    memoryTip: "提手旁加妾，接受接待。",
    words: [{ word: "接受", pinyin: "jiē shòu" }, { word: "接待", pinyin: "jiē dài" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "接", pinyin: "jiē" }, { char: "受", pinyin: "shòu" }, { char: "了", pinyin: "le" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "的", pinyin: "de" }, { char: "批", pinyin: "pī" }, { char: "评", pinyin: "píng" }]
  },
  "揭": {
    pinyin: "jiē",
    structure: "左右结构",
    composition: "扌 + 曷",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "曷", pinyin: "hé" }],
    memoryTip: "提手旁加曷，揭开揭露。",
    words: [{ word: "揭开", pinyin: "jiē kāi" }, { word: "揭露", pinyin: "jiē lù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "揭", pinyin: "jiē" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "谜", pinyin: "mí" }, { char: "底", pinyin: "dǐ" }]
  },
  "街": {
    pinyin: "jiē",
    structure: "左中右结构",
    composition: "彳 + 亍 + 圭",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "亍", pinyin: "chù" }, { char: "圭", pinyin: "guī" }],
    memoryTip: "双人旁加圭，街道街头。",
    words: [{ word: "街道", pinyin: "jiē dào" }, { word: "街头", pinyin: "jiē tóu" }],
    sentenceData: [{ char: "街", pinyin: "jiē" }, { char: "道", pinyin: "dào" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "人", pinyin: "rén" }]
  },
  "节": {
    pinyin: "jié",
    structure: "上下结构",
    composition: "艹 + 卩",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "卩", pinyin: "jié" }],
    memoryTip: "草字头加卩，节日节约。",
    words: [{ word: "节日", pinyin: "jié rì" }, { word: "节约", pinyin: "jié yuē" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "节", pinyin: "jié" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "传", pinyin: "chuán" }, { char: "统", pinyin: "tǒng" }, { char: "节", pinyin: "jié" }, { char: "日", pinyin: "rì" }]
  },
  "劫": {
    pinyin: "jié",
    structure: "左右结构",
    composition: "去 + 力",
    compositionParts: [{ char: "去", pinyin: "qù" }, { char: "力", pinyin: "lì" }],
    memoryTip: "去字加力字，抢劫劫难。",
    words: [{ word: "抢劫", pinyin: "qiǎng jié" }, { word: "劫难", pinyin: "jié nàn" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "抓", pinyin: "zhuā" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "劫", pinyin: "jié" }, { char: "匪", pinyin: "fěi" }]
  },
  "杰": {
    pinyin: "jié",
    structure: "上下结构",
    composition: "木 + 灬",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "灬", pinyin: "huǒ" }],
    memoryTip: "木字加四点，杰出杰作。",
    words: [{ word: "杰出", pinyin: "jié chū" }, { word: "杰作", pinyin: "jié zuò" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "位", pinyin: "wèi" }, { char: "杰", pinyin: "jié" }, { char: "出", pinyin: "chū" }, { char: "的", pinyin: "de" }, { char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }]
  },
  "洁": {
    pinyin: "jié",
    structure: "左右结构",
    composition: "氵 + 吉",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "吉", pinyin: "jí" }],
    memoryTip: "三点水加吉，清洁纯洁。",
    words: [{ word: "清洁", pinyin: "qīng jié" }, { word: "纯洁", pinyin: "chún jié" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "持", pinyin: "chí" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }, { char: "清", pinyin: "qīng" }, { char: "洁", pinyin: "jié" }]
  },
  "结": {
    pinyin: "jié",
    structure: "左右结构",
    composition: "纟 + 吉",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "吉", pinyin: "jí" }],
    memoryTip: "绞丝旁加吉，结果团结。",
    words: [{ word: "结果", pinyin: "jié guǒ" }, { word: "团结", pinyin: "tuán jié" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "棵", pinyin: "kē" }, { char: "树", pinyin: "shù" }, { char: "结", pinyin: "jié" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "果", pinyin: "guǒ" }, { char: "子", pinyin: "zi" }]
  },
  "捷": {
    pinyin: "jié",
    structure: "左右结构",
    composition: "扌 + 疌",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "疌", pinyin: "jié" }],
    memoryTip: "提手旁加疌，敏捷快捷。",
    words: [{ word: "敏捷", pinyin: "mǐn jié" }, { word: "快捷", pinyin: "kuài jié" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "动", pinyin: "dòng" }, { char: "作", pinyin: "zuò" }, { char: "很", pinyin: "hěn" }, { char: "敏", pinyin: "mǐn" }, { char: "捷", pinyin: "jié" }]
  },
  "截": {
    pinyin: "jié",
    structure: "半包围结构",
    composition: "隹 + 戈",
    compositionParts: [{ char: "隹", pinyin: "zhuī" }, { char: "戈", pinyin: "gē" }],
    memoryTip: "隹字加戈字，截断截止。",
    words: [{ word: "截断", pinyin: "jié duàn" }, { word: "截止", pinyin: "jié zhǐ" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "把", pinyin: "bǎ" }, { char: "这", pinyin: "zhè" }, { char: "根", pinyin: "gēn" }, { char: "绳", pinyin: "shéng" }, { char: "子", pinyin: "zi" }, { char: "截", pinyin: "jié" }, { char: "断", pinyin: "duàn" }]
  },
  "竭": {
    pinyin: "jié",
    structure: "左右结构",
    composition: "立 + 曷",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "曷", pinyin: "hé" }],
    memoryTip: "立字加曷字，竭力枯竭。",
    words: [{ word: "竭力", pinyin: "jié lì" }, { word: "枯竭", pinyin: "kū jié" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "竭", pinyin: "jié" }, { char: "力", pinyin: "lì" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }, { char: "了", pinyin: "le" }, { char: "任", pinyin: "rèn" }, { char: "务", pinyin: "wù" }]
  },
  "姐": {
    pinyin: "jiě",
    structure: "左右结构",
    composition: "女 + 且",
    compositionParts: [{ char: "女", pinyin: "nǚ" }, { char: "且", pinyin: "qiě" }],
    memoryTip: "女字旁加且，姐姐姐妹。",
    words: [{ word: "姐姐", pinyin: "jiě jie" }, { word: "姐妹", pinyin: "jiě mèi" }],
    sentenceData: [{ char: "姐", pinyin: "jiě" }, { char: "姐", pinyin: "jie" }, { char: "对", pinyin: "duì" }, { char: "我", pinyin: "wǒ" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "介": {
    pinyin: "jiè",
    structure: "上下结构",
    composition: "人 + 八",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "八", pinyin: "bā" }],
    memoryTip: "人字加八字，介绍介意。",
    words: [{ word: "介绍", pinyin: "jiè shào" }, { word: "介意", pinyin: "jiè yì" }],
    sentenceData: [{ char: "请", pinyin: "qǐng" }, { char: "给", pinyin: "gěi" }, { char: "我", pinyin: "wǒ" }, { char: "介", pinyin: "jiè" }, { char: "绍", pinyin: "shào" }, { char: "一", pinyin: "yī" }, { char: "下", pinyin: "xià" }]
  },
  "戒": {
    pinyin: "jiè",
    structure: "半包围结构",
    composition: "戈 + 廾",
    compositionParts: [{ char: "戈", pinyin: "gē" }, { char: "廾", pinyin: "gǒng" }],
    memoryTip: "戈字加廾字，戒指戒备。",
    words: [{ word: "戒指", pinyin: "jiè zhi" }, { word: "戒备", pinyin: "jiè bèi" }],
    sentenceData: [{ char: "她", pinyin: "tā" }, { char: "戴", pinyin: "dài" }, { char: "着", pinyin: "zhe" }, { char: "一", pinyin: "yī" }, { char: "枚", pinyin: "méi" }, { char: "戒", pinyin: "jiè" }, { char: "指", pinyin: "zhi" }]
  },
  "届": {
    pinyin: "jiè",
    structure: "半包围结构",
    composition: "尸 + 由",
    compositionParts: [{ char: "尸", pinyin: "shī" }, { char: "由", pinyin: "yóu" }],
    memoryTip: "尸字加由字，应届届时。",
    words: [{ word: "应届", pinyin: "yīng jiè" }, { word: "届时", pinyin: "jiè shí" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "届", pinyin: "jiè" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "很", pinyin: "hěn" }, { char: "优", pinyin: "yōu" }, { char: "秀", pinyin: "xiù" }]
  },
  "界": {
    pinyin: "jiè",
    structure: "上下结构",
    composition: "田 + 介",
    compositionParts: [{ char: "田", pinyin: "tián" }, { char: "介", pinyin: "jiè" }],
    memoryTip: "田字加介字，世界边界。",
    words: [{ word: "世界", pinyin: "shì jiè" }, { word: "边界", pinyin: "biān jiè" }],
    sentenceData: [{ char: "世", pinyin: "shì" }, { char: "界", pinyin: "jiè" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "国", pinyin: "guó" }, { char: "家", pinyin: "jiā" }]
  },
  "借": {
    pinyin: "jiè",
    structure: "左右结构",
    composition: "亻 + 昔",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "单人旁加昔，借书借钱。",
    words: [{ word: "借书", pinyin: "jiè shū" }, { word: "借钱", pinyin: "jiè qián" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "去", pinyin: "qù" }, { char: "图", pinyin: "tú" }, { char: "书", pinyin: "shū" }, { char: "馆", pinyin: "guǎn" }, { char: "借", pinyin: "jiè" }, { char: "书", pinyin: "shū" }]
  },
  "巾": {
    pinyin: "jīn",
    structure: "独体字",
    composition: "巾",
    compositionParts: [{ char: "巾", pinyin: "jīn" }],
    memoryTip: "一竖加横折，毛巾头巾。",
    words: [{ word: "毛巾", pinyin: "máo jīn" }, { word: "头巾", pinyin: "tóu jīn" }],
    sentenceData: [{ char: "毛", pinyin: "máo" }, { char: "巾", pinyin: "jīn" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "擦", pinyin: "cā" }, { char: "手", pinyin: "shǒu" }]
  },
  "今": {
    pinyin: "jīn",
    structure: "上下结构",
    composition: "人 + 丶",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "丶", pinyin: "zhǔ" }],
    memoryTip: "人字加一点，今天如今。",
    words: [{ word: "今天", pinyin: "jīn tiān" }, { word: "如今", pinyin: "rú jīn" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "是", pinyin: "shì" }, { char: "个", pinyin: "ge" }, { char: "好", pinyin: "hǎo" }, { char: "日", pinyin: "rì" }, { char: "子", pinyin: "zi" }]
  },
  "斤": {
    pinyin: "jīn",
    structure: "独体字",
    composition: "斤",
    compositionParts: [{ char: "斤", pinyin: "jīn" }],
    memoryTip: "一撇加横折，斤两斤重。",
    words: [{ word: "斤两", pinyin: "jīn liǎng" }, { word: "斤重", pinyin: "jīn zhòng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "袋", pinyin: "dài" }, { char: "米", pinyin: "mǐ" }, { char: "有", pinyin: "yǒu" }, { char: "五", pinyin: "wǔ" }, { char: "斤", pinyin: "jīn" }, { char: "重", pinyin: "zhòng" }]
  },
  "金": {
    pinyin: "jīn",
    structure: "上下结构",
    composition: "人 + 王 + 丶",
    compositionParts: [{ char: "人", pinyin: "rén" }, { char: "王", pinyin: "wáng" }, { char: "丶", pinyin: "zhǔ" }],
    memoryTip: "人字加王加点，黄金金属。",
    words: [{ word: "黄金", pinyin: "huáng jīn" }, { word: "金属", pinyin: "jīn shǔ" }],
    sentenceData: [{ char: "黄", pinyin: "huáng" }, { char: "金", pinyin: "jīn" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "贵", pinyin: "guì" }, { char: "重", pinyin: "zhòng" }, { char: "的", pinyin: "de" }, { char: "金", pinyin: "jīn" }, { char: "属", pinyin: "shǔ" }]
  },
  "津": {
    pinyin: "jīn",
    structure: "左右结构",
    composition: "氵 + 聿",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "聿", pinyin: "yù" }],
    memoryTip: "三点水加聿，天津津液。",
    words: [{ word: "天津", pinyin: "tiān jīn" }, { word: "津液", pinyin: "jīn yè" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "津", pinyin: "jīn" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "直", pinyin: "zhí" }, { char: "辖", pinyin: "xiá" }, { char: "市", pinyin: "shì" }]
  },
  "筋": {
    pinyin: "jīn",
    structure: "上下结构",
    composition: "⺮ + 肋",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "肋", pinyin: "lèi" }],
    memoryTip: "竹字头加肋，筋骨钢筋。",
    words: [{ word: "筋骨", pinyin: "jīn gǔ" }, { word: "钢筋", pinyin: "gāng jīn" }],
    sentenceData: [{ char: "钢", pinyin: "gāng" }, { char: "筋", pinyin: "jīn" }, { char: "是", pinyin: "shì" }, { char: "建", pinyin: "jiàn" }, { char: "筑", pinyin: "zhù" }, { char: "材", pinyin: "cái" }, { char: "料", pinyin: "liào" }]
  },
  "仅": {
    pinyin: "jǐn",
    structure: "左右结构",
    composition: "亻 + 又",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "又", pinyin: "yòu" }],
    memoryTip: "单人旁加又，不仅仅仅。",
    words: [{ word: "不仅", pinyin: "bù jǐn" }, { word: "仅仅", pinyin: "jǐn jǐn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "不", pinyin: "bù" }, { char: "仅", pinyin: "jǐn" }, { char: "会", pinyin: "huì" }, { char: "唱", pinyin: "chàng" }, { char: "歌", pinyin: "gē" }, { char: "还", pinyin: "hái" }, { char: "会", pinyin: "huì" }, { char: "跳", pinyin: "tiào" }, { char: "舞", pinyin: "wǔ" }]
  },
  "紧": {
    pinyin: "jǐn",
    structure: "上下结构",
    composition: "⺈ + 糸",
    compositionParts: [{ char: "⺈", pinyin: "jué" }, { char: "糸", pinyin: "mì" }],
    memoryTip: "斜刀头加糸，紧张紧密。",
    words: [{ word: "紧张", pinyin: "jǐn zhāng" }, { word: "紧密", pinyin: "jǐn mì" }],
    sentenceData: [{ char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "时", pinyin: "shí" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "紧", pinyin: "jǐn" }, { char: "张", pinyin: "zhāng" }]
  },
  "锦": {
    pinyin: "jǐn",
    structure: "左右结构",
    composition: "钅 + 帛",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "帛", pinyin: "bó" }],
    memoryTip: "金字旁加帛，锦绣锦旗。",
    words: [{ word: "锦绣", pinyin: "jǐn xiù" }, { word: "锦旗", pinyin: "jǐn qí" }],
    sentenceData: [{ char: "锦", pinyin: "jǐn" }, { char: "绣", pinyin: "xiù" }, { char: "前", pinyin: "qián" }, { char: "程", pinyin: "chéng" }, { char: "美", pinyin: "měi" }, { char: "好", pinyin: "hǎo" }]
  },
  "尽": {
    pinyin: "jìn",
    structure: "上下结构",
    composition: "尺 + 灬",
    compositionParts: [{ char: "尺", pinyin: "chǐ" }, { char: "灬", pinyin: "huǒ" }],
    memoryTip: "尺字加四点，尽力尽头。",
    words: [{ word: "尽力", pinyin: "jìn lì" }, { word: "尽头", pinyin: "jìn tóu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "会", pinyin: "huì" }, { char: "尽", pinyin: "jìn" }, { char: "力", pinyin: "lì" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }, { char: "你", pinyin: "nǐ" }]
  },
  "劲": {
    pinyin: "jìn",
    structure: "左右结构",
    composition: "巠 + 力",
    compositionParts: [{ char: "巠", pinyin: "jīng" }, { char: "力", pinyin: "lì" }],
    memoryTip: "巠字加力字，干劲劲头。",
    words: [{ word: "干劲", pinyin: "gàn jìn" }, { word: "劲头", pinyin: "jìn tóu" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "干", pinyin: "gàn" }, { char: "活", pinyin: "huó" }, { char: "的", pinyin: "de" }, { char: "干", pinyin: "gàn" }, { char: "劲", pinyin: "jìn" }, { char: "很", pinyin: "hěn" }, { char: "足", pinyin: "zú" }]
  },
  "近": {
    pinyin: "jìn",
    structure: "半包围结构",
    composition: "斤 + 辶",
    compositionParts: [{ char: "斤", pinyin: "jīn" }, { char: "辶", pinyin: "chuò" }],
    memoryTip: "斤字加走之，附近接近。",
    words: [{ word: "附近", pinyin: "fù jìn" }, { word: "接近", pinyin: "jiē jìn" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "附", pinyin: "fù" }, { char: "近", pinyin: "jìn" }, { char: "有", pinyin: "yǒu" }, { char: "个", pinyin: "ge" }, { char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }]
  },
  "进": {
    pinyin: "jìn",
    structure: "半包围结构",
    composition: "井 + 辶",
    compositionParts: [{ char: "井", pinyin: "jǐng" }, { char: "辶", pinyin: "chuò" }],
    memoryTip: "井字加走之，前进进步。",
    words: [{ word: "前进", pinyin: "qián jìn" }, { word: "进步", pinyin: "jìn bù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "不", pinyin: "bù" }, { char: "断", pinyin: "duàn" }, { char: "进", pinyin: "jìn" }, { char: "步", pinyin: "bù" }]
  },
  "晋": {
    pinyin: "jìn",
    structure: "上下结构",
    composition: "亚 + 日",
    compositionParts: [{ char: "亚", pinyin: "yà" }, { char: "日", pinyin: "rì" }],
    memoryTip: "亚字加日字，山西晋剧。",
    words: [{ word: "山西", pinyin: "shān xī" }, { word: "晋剧", pinyin: "jìn jù" }],
    sentenceData: [{ char: "晋", pinyin: "jìn" }, { char: "剧", pinyin: "jù" }, { char: "是", pinyin: "shì" }, { char: "山", pinyin: "shān" }, { char: "西", pinyin: "xī" }, { char: "的", pinyin: "de" }, { char: "地", pinyin: "dì" }, { char: "方", pinyin: "fāng" }, { char: "戏", pinyin: "xì" }]
  },
  "浸": {
    pinyin: "jìn",
    structure: "左右结构",
    composition: "氵 + 侵",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "侵", pinyin: "qīn" }],
    memoryTip: "三点水加侵，浸泡浸湿。",
    words: [{ word: "浸泡", pinyin: "jìn pào" }, { word: "浸湿", pinyin: "jìn shī" }],
    sentenceData: [{ char: "把", pinyin: "bǎ" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "浸", pinyin: "jìn" }, { char: "湿", pinyin: "shī" }, { char: "了", pinyin: "le" }, { char: "要", pinyin: "yào" }, { char: "及", pinyin: "jí" }, { char: "时", pinyin: "shí" }, { char: "晾", pinyin: "liàng" }]
  },
  "禁": {
    pinyin: "jìn",
    structure: "上下结构",
    composition: "林 + 示",
    compositionParts: [{ char: "林", pinyin: "lín" }, { char: "示", pinyin: "shì" }],
    memoryTip: "林字加示字，禁止禁忌。",
    words: [{ word: "禁止", pinyin: "jìn zhǐ" }, { word: "禁忌", pinyin: "jìn jì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "禁", pinyin: "jìn" }, { char: "止", pinyin: "zhǐ" }, { char: "吸", pinyin: "xī" }, { char: "烟", pinyin: "yān" }]
  },
  "京": {
    pinyin: "jīng",
    structure: "上下结构",
    composition: "亠 + 口 + 小",
    compositionParts: [{ char: "亠", pinyin: "tóu" }, { char: "口", pinyin: "kǒu" }, { char: "小", pinyin: "xiǎo" }],
    memoryTip: "六字头加口加小，北京京城。",
    words: [{ word: "北京", pinyin: "běi jīng" }, { word: "京城", pinyin: "jīng chéng" }],
    sentenceData: [{ char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }, { char: "是", pinyin: "shì" }, { char: "中", pinyin: "zhōng" }, { char: "国", pinyin: "guó" }, { char: "的", pinyin: "de" }, { char: "首", pinyin: "shǒu" }, { char: "都", pinyin: "dū" }]
  },
  "经": {
    pinyin: "jīng",
    structure: "左右结构",
    composition: "纟 + 巠",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "巠", pinyin: "jīng" }],
    memoryTip: "绞丝旁加巠，已经经过。",
    words: [{ word: "已经", pinyin: "yǐ jīng" }, { word: "经过", pinyin: "jīng guò" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "已", pinyin: "yǐ" }, { char: "经", pinyin: "jīng" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }, { char: "作", pinyin: "zuò" }, { char: "业", pinyin: "yè" }, { char: "了", pinyin: "le" }]
  },
  "荃": {
    pinyin: "quán",
    structure: "上下结构",
    composition: "艹 + 全",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "全", pinyin: "quán" }],
    memoryTip: "草字头加全，荃草荃荃。",
    words: [{ word: "荃草", pinyin: "quán cǎo" }, { word: "荃荃", pinyin: "quán quán" }],
    sentenceData: [{ char: "荃", pinyin: "quán" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "种", pinyin: "zhǒng" }, { char: "香", pinyin: "xiāng" }, { char: "草", pinyin: "cǎo" }]
  },
  "惊": {
    pinyin: "jīng",
    structure: "左右结构",
    composition: "忄 + 京",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "京", pinyin: "jīng" }],
    memoryTip: "竖心旁加京，吃惊惊讶。",
    words: [{ word: "吃惊", pinyin: "chī jīng" }, { word: "惊讶", pinyin: "jīng yà" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "很", pinyin: "hěn" }, { char: "吃", pinyin: "chī" }, { char: "惊", pinyin: "jīng" }, { char: "地", pinyin: "de" }, { char: "看", pinyin: "kàn" }, { char: "着", pinyin: "zhe" }, { char: "我", pinyin: "wǒ" }]
  },
  "晶": {
    pinyin: "jīng",
    structure: "上下结构",
    composition: "日 + 日 + 日",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "日", pinyin: "rì" }, { char: "日", pinyin: "rì" }],
    memoryTip: "三个日字叠，水晶亮晶晶。",
    words: [{ word: "水晶", pinyin: "shuǐ jīng" }, { word: "亮晶晶", pinyin: "liàng jīng jīng" }],
    sentenceData: [{ char: "水", pinyin: "shuǐ" }, { char: "晶", pinyin: "jīng" }, { char: "是", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "宝", pinyin: "bǎo" }, { char: "石", pinyin: "shí" }]
  },
  "晴": {
    pinyin: "qíng",
    structure: "左右结构",
    composition: "日 + 青",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "青", pinyin: "qīng" }],
    memoryTip: "日字旁加青，晴天晴朗。",
    words: [{ word: "晴天", pinyin: "qíng tiān" }, { word: "晴朗", pinyin: "qíng lǎng" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "是", pinyin: "shì" }, { char: "晴", pinyin: "qíng" }, { char: "天", pinyin: "tiān" }, { char: "，", pinyin: "," }, { char: "很", pinyin: "hěn" }, { char: "适", pinyin: "shì" }, { char: "合", pinyin: "hé" }, { char: "出", pinyin: "chū" }, { char: "去", pinyin: "qù" }, { char: "玩", pinyin: "wán" }]
  },
  "精": {
    pinyin: "jīng",
    structure: "左右结构",
    composition: "米 + 青",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "青", pinyin: "qīng" }],
    memoryTip: "米字旁加青，精神精彩。",
    words: [{ word: "精神", pinyin: "jīng shén" }, { word: "精彩", pinyin: "jīng cǎi" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "精", pinyin: "jīng" }, { char: "神", pinyin: "shén" }, { char: "状", pinyin: "zhuàng" }, { char: "态", pinyin: "tài" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "鲸": {
    pinyin: "jīng",
    structure: "左右结构",
    composition: "鱼 + 京",
    compositionParts: [{ char: "鱼", pinyin: "yú" }, { char: "京", pinyin: "jīng" }],
    memoryTip: "鱼字旁加京，鲸鱼鲸鲨。",
    words: [{ word: "鲸鱼", pinyin: "jīng yú" }, { word: "鲸鲨", pinyin: "jīng shā" }],
    sentenceData: [{ char: "鲸", pinyin: "jīng" }, { char: "鱼", pinyin: "yú" }, { char: "是", pinyin: "shì" }, { char: "海", pinyin: "hǎi" }, { char: "洋", pinyin: "yáng" }, { char: "里", pinyin: "lǐ" }, { char: "最", pinyin: "zuì" }, { char: "大", pinyin: "dà" }, { char: "的", pinyin: "de" }, { char: "动", pinyin: "dòng" }, { char: "物", pinyin: "wù" }]
  },
  "井": {
    pinyin: "jǐng",
    structure: "独体字",
    composition: "井",
    compositionParts: [{ char: "井", pinyin: "jǐng" }],
    memoryTip: "两横两竖是井，水井井口。",
    words: [{ word: "水井", pinyin: "shuǐ jǐng" }, { word: "井口", pinyin: "jǐng kǒu" }],
    sentenceData: [{ char: "村", pinyin: "cūn" }, { char: "里", pinyin: "lǐ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "口", pinyin: "kǒu" }, { char: "老", pinyin: "lǎo" }, { char: "井", pinyin: "jǐng" }]
  },
  "颈": {
    pinyin: "jǐng",
    structure: "左右结构",
    composition: "巠 + 页",
    compositionParts: [{ char: "巠", pinyin: "jīng" }, { char: "页", pinyin: "yè" }],
    memoryTip: "巠字加页字，脖颈颈项。",
    words: [{ word: "脖颈", pinyin: "bó jǐng" }, { word: "颈项", pinyin: "jǐng xiàng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }, { char: "的", pinyin: "de" }, { char: "颈", pinyin: "jǐng" }, { char: "上", pinyin: "shàng" }, { char: "挂", pinyin: "guà" }, { char: "着", pinyin: "zhe" }, { char: "铃", pinyin: "líng" }, { char: "铛", pinyin: "dāng" }]
  },
  "景": {
    pinyin: "jǐng",
    structure: "上下结构",
    composition: "日 + 京",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "京", pinyin: "jīng" }],
    memoryTip: "日字加京字，风景景色。",
    words: [{ word: "风景", pinyin: "fēng jǐng" }, { word: "景色", pinyin: "jǐng sè" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "风", pinyin: "fēng" }, { char: "景", pinyin: "jǐng" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }]
  },
  "警": {
    pinyin: "jǐng",
    structure: "上下结构",
    composition: "敬 + 言",
    compositionParts: [{ char: "敬", pinyin: "jìng" }, { char: "言", pinyin: "yán" }],
    memoryTip: "敬字加言字，警察报警。",
    words: [{ word: "警察", pinyin: "jǐng chá" }, { word: "报警", pinyin: "bào jǐng" }],
    sentenceData: [{ char: "警", pinyin: "jǐng" }, { char: "察", pinyin: "chá" }, { char: "叔", pinyin: "shū" }, { char: "叔", pinyin: "shu" }, { char: "在", pinyin: "zài" }, { char: "指", pinyin: "zhǐ" }, { char: "挥", pinyin: "huī" }, { char: "交", pinyin: "jiāo" }, { char: "通", pinyin: "tōng" }]
  },
  "净": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "冫 + 争",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "争", pinyin: "zhēng" }],
    memoryTip: "两点水加争，干净洁净。",
    words: [{ word: "干净", pinyin: "gān jìng" }, { word: "洁净", pinyin: "jié jìng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "把", pinyin: "bǎ" }, { char: "房", pinyin: "fáng" }, { char: "间", pinyin: "jiān" }, { char: "打", pinyin: "dǎ" }, { char: "扫", pinyin: "sǎo" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }]
  },
  "径": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "彳 + 巠",
    compositionParts: [{ char: "彳", pinyin: "chì" }, { char: "巠", pinyin: "jīng" }],
    memoryTip: "双人旁加巠，路径途径。",
    words: [{ word: "路径", pinyin: "lù jìng" }, { word: "途径", pinyin: "tú jìng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "条", pinyin: "tiáo" }, { char: "小", pinyin: "xiǎo" }, { char: "径", pinyin: "jìng" }, { char: "通", pinyin: "tōng" }, { char: "向", pinyin: "xiàng" }, { char: "山", pinyin: "shān" }, { char: "顶", pinyin: "dǐng" }]
  },
  "竞": {
    pinyin: "jìng",
    structure: "上下结构",
    composition: "立 + 兄",
    compositionParts: [{ char: "立", pinyin: "lì" }, { char: "兄", pinyin: "xiōng" }],
    memoryTip: "立字加兄字，竞赛竞争。",
    words: [{ word: "竞赛", pinyin: "jìng sài" }, { word: "竞争", pinyin: "jìng zhēng" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "竞", pinyin: "jìng" }, { char: "赛", pinyin: "sài" }, { char: "中", pinyin: "zhōng" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "竟": {
    pinyin: "jìng",
    structure: "上下结构",
    composition: "音 + 儿",
    compositionParts: [{ char: "音", pinyin: "yīn" }, { char: "儿", pinyin: "ér" }],
    memoryTip: "音字加儿字，竟然究竟。",
    words: [{ word: "竟然", pinyin: "jìng rán" }, { word: "究竟", pinyin: "jiù jìng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "竟", pinyin: "jìng" }, { char: "然", pinyin: "rán" }, { char: "考", pinyin: "kǎo" }, { char: "了", pinyin: "le" }, { char: "第", pinyin: "dì" }, { char: "一", pinyin: "yī" }, { char: "名", pinyin: "míng" }]
  },
  "敬": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "苟 + 攵",
    compositionParts: [{ char: "苟", pinyin: "gǒu" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "苟字加反文，尊敬敬礼。",
    words: [{ word: "尊敬", pinyin: "zūn jìng" }, { word: "敬礼", pinyin: "jìng lǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "尊", pinyin: "zūn" }, { char: "敬", pinyin: "jìng" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }]
  },
  "境": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "土 + 竟",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "竟", pinyin: "jìng" }],
    memoryTip: "土字旁加竟，环境边境。",
    words: [{ word: "环境", pinyin: "huán jìng" }, { word: "边境", pinyin: "biān jìng" }],
    sentenceData: [{ char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "静": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "青 + 争",
    compositionParts: [{ char: "青", pinyin: "qīng" }, { char: "争", pinyin: "zhēng" }],
    memoryTip: "青字加争字，安静平静。",
    words: [{ word: "安静", pinyin: "ān jìng" }, { word: "平静", pinyin: "píng jìng" }],
    sentenceData: [{ char: "教", pinyin: "jiào" }, { char: "室", pinyin: "shì" }, { char: "里", pinyin: "lǐ" }, { char: "很", pinyin: "hěn" }, { char: "安", pinyin: "ān" }, { char: "静", pinyin: "jìng" }]
  },
  "镜": {
    pinyin: "jìng",
    structure: "左右结构",
    composition: "钅 + 竟",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "竟", pinyin: "jìng" }],
    memoryTip: "金字旁加竟，镜子眼镜。",
    words: [{ word: "镜子", pinyin: "jìng zi" }, { word: "眼镜", pinyin: "yǎn jìng" }],
    sentenceData: [{ char: "妈", pinyin: "mā" }, { char: "妈", pinyin: "ma" }, { char: "在", pinyin: "zài" }, { char: "照", pinyin: "zhào" }, { char: "镜", pinyin: "jìng" }, { char: "子", pinyin: "zi" }]
  },
  "纠": {
    pinyin: "jiū",
    structure: "左右结构",
    composition: "纟 + 丩",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "丩", pinyin: "jiū" }],
    memoryTip: "绞丝旁加丩，纠正纠缠。",
    words: [{ word: "纠正", pinyin: "jiū zhèng" }, { word: "纠缠", pinyin: "jiū chán" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "帮", pinyin: "bāng" }, { char: "我", pinyin: "wǒ" }, { char: "纠", pinyin: "jiū" }, { char: "正", pinyin: "zhèng" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }]
  },
  "究": {
    pinyin: "jiū",
    structure: "上下结构",
    composition: "穴 + 九",
    compositionParts: [{ char: "穴", pinyin: "xué" }, { char: "九", pinyin: "jiǔ" }],
    memoryTip: "穴字头加九，研究追究。",
    words: [{ word: "研究", pinyin: "yán jiū" }, { word: "追究", pinyin: "zhuī jiū" }],
    sentenceData: [{ char: "科", pinyin: "kē" }, { char: "学", pinyin: "xué" }, { char: "家", pinyin: "jiā" }, { char: "在", pinyin: "zài" }, { char: "研", pinyin: "yán" }, { char: "究", pinyin: "jiū" }, { char: "新", pinyin: "xīn" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }]
  },
  "九": {
    pinyin: "jiǔ",
    structure: "独体字",
    composition: "九",
    compositionParts: [{ char: "九", pinyin: "jiǔ" }],
    memoryTip: "一撇一弯钩，数字第九。",
    words: [{ word: "第九", pinyin: "dì jiǔ" }, { word: "九霄", pinyin: "jiǔ xiāo" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "今", pinyin: "jīn" }, { char: "年", pinyin: "nián" }, { char: "九", pinyin: "jiǔ" }, { char: "岁", pinyin: "suì" }, { char: "了", pinyin: "le" }]
  },
  "久": {
    pinyin: "jiǔ",
    structure: "独体字",
    composition: "久",
    compositionParts: [{ char: "久", pinyin: "jiǔ" }],
    memoryTip: "一撇一横捺，长久永久。",
    words: [{ word: "长久", pinyin: "cháng jiǔ" }, { word: "永久", pinyin: "yǒng jiǔ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "永", pinyin: "yǒng" }, { char: "久", pinyin: "jiǔ" }, { char: "友", pinyin: "yǒu" }, { char: "好", pinyin: "hǎo" }]
  },
  "酒": {
    pinyin: "jiǔ",
    structure: "左右结构",
    composition: "氵 + 酉",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "酉", pinyin: "yǒu" }],
    memoryTip: "三点水加酉，喝酒酒杯。",
    words: [{ word: "喝酒", pinyin: "hē jiǔ" }, { word: "酒杯", pinyin: "jiǔ bēi" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "不", pinyin: "bù" }, { char: "喝", pinyin: "hē" }, { char: "酒", pinyin: "jiǔ" }, { char: "了", pinyin: "le" }]
  },
  "旧": {
    pinyin: "jiù",
    structure: "左右结构",
    composition: "丨 + 日",
    compositionParts: [{ char: "丨", pinyin: "gǔn" }, { char: "日", pinyin: "rì" }],
    memoryTip: "一竖加日字，新旧陈旧。",
    words: [{ word: "新旧", pinyin: "xīn jiù" }, { word: "陈旧", pinyin: "chén jiù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "旧", pinyin: "jiù" }, { char: "照", pinyin: "zhào" }, { char: "片", pinyin: "piàn" }]
  },
  "救": {
    pinyin: "jiù",
    structure: "左右结构",
    composition: "求 + 攵",
    compositionParts: [{ char: "求", pinyin: "qiú" }, { char: "攵", pinyin: "pū" }],
    memoryTip: "求字加反文，救命救人。",
    words: [{ word: "救命", pinyin: "jiù mìng" }, { word: "救人", pinyin: "jiù rén" }],
    sentenceData: [{ char: "医", pinyin: "yī" }, { char: "生", pinyin: "shēng" }, { char: "救", pinyin: "jiù" }, { char: "了", pinyin: "le" }, { char: "病", pinyin: "bìng" }, { char: "人", pinyin: "rén" }, { char: "的", pinyin: "de" }, { char: "命", pinyin: "mìng" }]
  },
  "就": {
    pinyin: "jiù",
    structure: "左右结构",
    composition: "京 + 尤",
    compositionParts: [{ char: "京", pinyin: "jīng" }, { char: "尤", pinyin: "yóu" }],
    memoryTip: "京字加尤字，就是成就。",
    words: [{ word: "就是", pinyin: "jiù shì" }, { word: "成就", pinyin: "chéng jiù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "就", pinyin: "jiù" }, { char: "是", pinyin: "shì" }, { char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }]
  },
  "舅": {
    pinyin: "jiù",
    structure: "上下结构",
    composition: "臼 + 男",
    compositionParts: [{ char: "臼", pinyin: "jiù" }, { char: "男", pinyin: "nán" }],
    memoryTip: "臼字加男字，舅舅舅妈。",
    words: [{ word: "舅舅", pinyin: "jiù jiu" }, { word: "舅妈", pinyin: "jiù mā" }],
    sentenceData: [{ char: "舅", pinyin: "jiù" }, { char: "舅", pinyin: "jiu" }, { char: "带", pinyin: "dài" }, { char: "我", pinyin: "wǒ" }, { char: "去", pinyin: "qù" }, { char: "公", pinyin: "gōng" }, { char: "园", pinyin: "yuán" }, { char: "玩", pinyin: "wán" }]
  },
  "居": {
    pinyin: "jū",
    structure: "半包围结构",
    composition: "尸 + 古",
    compositionParts: [{ char: "尸", pinyin: "shī" }, { char: "古", pinyin: "gǔ" }],
    memoryTip: "尸字加古字，居住邻居。",
    words: [{ word: "居住", pinyin: "jū zhù" }, { word: "邻居", pinyin: "lín jū" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "居", pinyin: "jū" }, { char: "住", pinyin: "zhù" }, { char: "在", pinyin: "zài" }, { char: "北", pinyin: "běi" }, { char: "京", pinyin: "jīng" }]
  },
  "局": {
    pinyin: "jú",
    structure: "半包围结构",
    composition: "尸 + 可",
    compositionParts: [{ char: "尸", pinyin: "shī" }, { char: "可", pinyin: "kě" }],
    memoryTip: "尸字加可字，局部邮局。",
    words: [{ word: "局部", pinyin: "jú bù" }, { word: "邮局", pinyin: "yóu jú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "去", pinyin: "qù" }, { char: "邮", pinyin: "yóu" }, { char: "局", pinyin: "jú" }, { char: "寄", pinyin: "jì" }, { char: "信", pinyin: "xìn" }]
  },
  "菊": {
    pinyin: "jú",
    structure: "上下结构",
    composition: "艹 + 匊",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "匊", pinyin: "jú" }],
    memoryTip: "草字头加匊，菊花赏菊。",
    words: [{ word: "菊花", pinyin: "jú huā" }, { word: "赏菊", pinyin: "shǎng jú" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "菊", pinyin: "jú" }, { char: "花", pinyin: "huā" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }]
  },
  "橘": {
    pinyin: "jú",
    structure: "左右结构",
    composition: "木 + 矞",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "矞", pinyin: "yù" }],
    memoryTip: "木字旁加矞，橘子柑橘。",
    words: [{ word: "橘子", pinyin: "jú zi" }, { word: "柑橘", pinyin: "gān jú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "爱", pinyin: "ài" }, { char: "吃", pinyin: "chī" }, { char: "橘", pinyin: "jú" }, { char: "子", pinyin: "zi" }]
  },
  "举": {
    pinyin: "jǔ",
    structure: "上下结构",
    composition: "兴 + 丶",
    compositionParts: [{ char: "兴", pinyin: "xīng" }, { char: "丶", pinyin: "zhǔ" }],
    memoryTip: "兴字加一点，举手举重。",
    words: [{ word: "举手", pinyin: "jǔ shǒu" }, { word: "举重", pinyin: "jǔ zhòng" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "让", pinyin: "ràng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "举", pinyin: "jǔ" }, { char: "手", pinyin: "shǒu" }, { char: "发", pinyin: "fā" }, { char: "言", pinyin: "yán" }]
  },
  "矩": {
    pinyin: "jǔ",
    structure: "左右结构",
    composition: "矢 + 巨",
    compositionParts: [{ char: "矢", pinyin: "shǐ" }, { char: "巨", pinyin: "jù" }],
    memoryTip: "矢字加巨字，规矩矩形。",
    words: [{ word: "规矩", pinyin: "guī ju" }, { word: "矩形", pinyin: "jǔ xíng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "守", pinyin: "shǒu" }, { char: "规", pinyin: "guī" }, { char: "矩", pinyin: "ju" }]
  },
  "句": {
    pinyin: "jù",
    structure: "半包围结构",
    composition: "勹 + 口",
    compositionParts: [{ char: "勹", pinyin: "bāo" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "包字头加口，句子语句。",
    words: [{ word: "句子", pinyin: "jù zi" }, { word: "语句", pinyin: "yǔ jù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "句", pinyin: "jù" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "长", pinyin: "cháng" }]
  },
  "巨": {
    pinyin: "jù",
    structure: "独体字",
    composition: "巨",
    compositionParts: [{ char: "巨", pinyin: "jù" }],
    memoryTip: "一横一折加横，巨大巨人。",
    words: [{ word: "巨大", pinyin: "jù dà" }, { word: "巨人", pinyin: "jù rén" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "很", pinyin: "hěn" }, { char: "巨", pinyin: "jù" }, { char: "大", pinyin: "dà" }]
  },
  "拒": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "扌 + 巨",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "巨", pinyin: "jù" }],
    memoryTip: "提手旁加巨，拒绝抗拒。",
    words: [{ word: "拒绝", pinyin: "jù jué" }, { word: "抗拒", pinyin: "kàng jù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "拒", pinyin: "jù" }, { char: "绝", pinyin: "jué" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "请", pinyin: "qǐng" }, { char: "求", pinyin: "qiú" }]
  },
  "具": {
    pinyin: "jù",
    structure: "上下结构",
    composition: "且 + 八",
    compositionParts: [{ char: "且", pinyin: "qiě" }, { char: "八", pinyin: "bā" }],
    memoryTip: "且字加八字，工具具体。",
    words: [{ word: "工具", pinyin: "gōng jù" }, { word: "具体", pinyin: "jù tǐ" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "件", pinyin: "jiàn" }, { char: "新", pinyin: "xīn" }, { char: "工", pinyin: "gōng" }, { char: "具", pinyin: "jù" }]
  },
  "俱": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "亻 + 具",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "具", pinyin: "jù" }],
    memoryTip: "单人旁加具，俱全俱备。",
    words: [{ word: "俱全", pinyin: "jù quán" }, { word: "俱备", pinyin: "jù bèi" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "应", pinyin: "yīng" }, { char: "有", pinyin: "yǒu" }, { char: "尽", pinyin: "jìn" }, { char: "有", pinyin: "yǒu" }, { char: "俱", pinyin: "jù" }]
  },
  "剧": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "居 + 刂",
    compositionParts: [{ char: "居", pinyin: "jū" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "居字加立刀，戏剧剧烈。",
    words: [{ word: "戏剧", pinyin: "xì jù" }, { word: "剧烈", pinyin: "jù liè" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "部", pinyin: "bù" }, { char: "戏", pinyin: "xì" }, { char: "剧", pinyin: "jù" }, { char: "很", pinyin: "hěn" }, { char: "精", pinyin: "jīng" }, { char: "彩", pinyin: "cǎi" }]
  },
  "惧": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "忄 + 具",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "具", pinyin: "jù" }],
    memoryTip: "竖心旁加具，恐惧畏惧。",
    words: [{ word: "恐惧", pinyin: "kǒng jù" }, { word: "畏惧", pinyin: "wèi jù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "不", pinyin: "bù" }, { char: "恐", pinyin: "kǒng" }, { char: "惧", pinyin: "jù" }, { char: "困", pinyin: "kùn" }, { char: "难", pinyin: "nán" }]
  },
  "据": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "扌 + 居",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "居", pinyin: "jū" }],
    memoryTip: "提手旁加居，根据证据。",
    words: [{ word: "根据", pinyin: "gēn jù" }, { word: "证据", pinyin: "zhèng jù" }],
    sentenceData: [{ char: "根", pinyin: "gēn" }, { char: "据", pinyin: "jù" }, { char: "规", pinyin: "guī" }, { char: "定", pinyin: "dìng" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "按", pinyin: "àn" }, { char: "时", pinyin: "shí" }, { char: "完", pinyin: "wán" }, { char: "成", pinyin: "chéng" }]
  },
  "距": {
    pinyin: "jù",
    structure: "左右结构",
    composition: "足 + 巨",
    compositionParts: [{ char: "足", pinyin: "zú" }, { char: "巨", pinyin: "jù" }],
    memoryTip: "足字旁加巨，距离相距。",
    words: [{ word: "距离", pinyin: "jù lí" }, { word: "相距", pinyin: "xiāng jù" }],
    sentenceData: [{ char: "两", pinyin: "liǎng" }, { char: "地", pinyin: "dì" }, { char: "相", pinyin: "xiāng" }, { char: "距", pinyin: "jù" }, { char: "很", pinyin: "hěn" }, { char: "远", pinyin: "yuǎn" }]
  },
  "聚": {
    pinyin: "jù",
    structure: "上下结构",
    composition: "取 + 乑",
    compositionParts: [{ char: "取", pinyin: "qǔ" }, { char: "乑", pinyin: "yín" }],
    memoryTip: "取字加乑字，聚会聚集。",
    words: [{ word: "聚会", pinyin: "jù huì" }, { word: "聚集", pinyin: "jù jí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "聚", pinyin: "jù" }, { char: "会", pinyin: "huì" }]
  },
  "卷": {
    pinyin: "juǎn",
    structure: "上下结构",
    composition: "龹 + 卩",
    compositionParts: [{ char: "龹", pinyin: "juǎn" }, { char: "卩", pinyin: "jié" }],
    memoryTip: "龹字加单耳，试卷卷轴。",
    words: [{ word: "试卷", pinyin: "shì juàn" }, { word: "卷轴", pinyin: "juàn zhóu" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "发", pinyin: "fā" }, { char: "下", pinyin: "xià" }, { char: "考", pinyin: "kǎo" }, { char: "卷", pinyin: "juàn" }]
  },
  "倦": {
    pinyin: "juàn",
    structure: "左右结构",
    composition: "亻 + 卷",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "卷", pinyin: "juàn" }],
    memoryTip: "单人旁加卷，疲倦厌倦。",
    words: [{ word: "疲倦", pinyin: "pí juàn" }, { word: "厌倦", pinyin: "yàn juàn" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "太", pinyin: "tài" }, { char: "长", pinyin: "cháng" }, { char: "会", pinyin: "huì" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "疲", pinyin: "pí" }, { char: "倦", pinyin: "juàn" }]
  },
  "决": {
    pinyin: "jué",
    structure: "左右结构",
    composition: "冫 + 夬",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "夬", pinyin: "guài" }],
    memoryTip: "两点水加夬，决定坚决。",
    words: [{ word: "决定", pinyin: "jué dìng" }, { word: "坚决", pinyin: "jiān jué" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "决", pinyin: "jué" }, { char: "定", pinyin: "dìng" }, { char: "好", pinyin: "hǎo" }, { char: "好", pinyin: "hǎo" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "绝": {
    pinyin: "jué",
    structure: "左右结构",
    composition: "纟 + 色",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "色", pinyin: "sè" }],
    memoryTip: "绞丝旁加色，绝对断绝。",
    words: [{ word: "绝对", pinyin: "jué duì" }, { word: "断绝", pinyin: "duàn jué" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "事", pinyin: "shì" }, { char: "情", pinyin: "qing" }, { char: "绝", pinyin: "jué" }, { char: "对", pinyin: "duì" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "做", pinyin: "zuò" }]
  },
  "觉": {
    pinyin: "jué",
    structure: "上下结构",
    composition: "⺮ + 见",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "学字头加见，感觉觉得。",
    words: [{ word: "感觉", pinyin: "gǎn jué" }, { word: "觉得", pinyin: "jué de" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "觉", pinyin: "jué" }, { char: "得", pinyin: "de" }, { char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "很", pinyin: "hěn" }, { char: "高", pinyin: "gāo" }, { char: "兴", pinyin: "xìng" }]
  },
  "掘": {
    pinyin: "jué",
    structure: "左右结构",
    composition: "扌 + 屈",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "屈", pinyin: "qū" }],
    memoryTip: "提手旁加屈，挖掘掘土。",
    words: [{ word: "挖掘", pinyin: "wā jué" }, { word: "掘土", pinyin: "jué tǔ" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "在", pinyin: "zài" }, { char: "挖", pinyin: "wā" }, { char: "掘", pinyin: "jué" }, { char: "地", pinyin: "dì" }, { char: "下", pinyin: "xià" }, { char: "管", pinyin: "guǎn" }, { char: "道", pinyin: "dào" }]
  },
  "嚼": {
    pinyin: "jiáo",
    structure: "左右结构",
    composition: "口 + 爵",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "爵", pinyin: "jué" }],
    memoryTip: "口字旁加爵，咀嚼嚼碎。",
    words: [{ word: "咀嚼", pinyin: "jǔ jué" }, { word: "嚼碎", pinyin: "jiáo suì" }],
    sentenceData: [{ char: "吃", pinyin: "chī" }, { char: "饭", pinyin: "fàn" }, { char: "要", pinyin: "yào" }, { char: "细", pinyin: "xì" }, { char: "嚼", pinyin: "jiáo" }, { char: "慢", pinyin: "màn" }, { char: "咽", pinyin: "yàn" }]
  },
  "军": {
    pinyin: "jūn",
    structure: "上下结构",
    composition: "冖 + 车",
    compositionParts: [{ char: "冖", pinyin: "mì" }, { char: "车", pinyin: "chē" }],
    memoryTip: "秃宝盖加车，军队军人。",
    words: [{ word: "军队", pinyin: "jūn duì" }, { word: "军人", pinyin: "jūn rén" }],
    sentenceData: [{ char: "军", pinyin: "jūn" }, { char: "人", pinyin: "rén" }, { char: "叔", pinyin: "shū" }, { char: "叔", pinyin: "shu" }, { char: "很", pinyin: "hěn" }, { char: "英", pinyin: "yīng" }, { char: "勇", pinyin: "yǒng" }]
  },
  "君": {
    pinyin: "jūn",
    structure: "半包围结构",
    composition: "尹 + 口",
    compositionParts: [{ char: "尹", pinyin: "yǐn" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "尹字加口字，君主国君。",
    words: [{ word: "君主", pinyin: "jūn zhǔ" }, { word: "国君", pinyin: "guó jūn" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "君", pinyin: "jūn" }, { char: "主", pinyin: "zhǔ" }, { char: "权", pinyin: "quán" }, { char: "力", pinyin: "lì" }, { char: "很", pinyin: "hěn" }, { char: "大", pinyin: "dà" }]
  },
  "均": {
    pinyin: "jūn",
    structure: "左右结构",
    composition: "土 + 匀",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "匀", pinyin: "yún" }],
    memoryTip: "土字旁加匀，平均均匀。",
    words: [{ word: "平均", pinyin: "píng jūn" }, { word: "均匀", pinyin: "jūn yún" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "些", pinyin: "xiē" }, { char: "糖", pinyin: "táng" }, { char: "果", pinyin: "guǒ" }, { char: "分", pinyin: "fēn" }, { char: "配", pinyin: "pèi" }, { char: "很", pinyin: "hěn" }, { char: "均", pinyin: "jūn" }, { char: "匀", pinyin: "yún" }]
  },
  "菌": {
    pinyin: "jūn",
    structure: "上下结构",
    composition: "艹 + 囷",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "囷", pinyin: "qūn" }],
    memoryTip: "草字头加囷，细菌杀菌。",
    words: [{ word: "细菌", pinyin: "xì jūn" }, { word: "杀菌", pinyin: "shā jūn" }],
    sentenceData: [{ char: "细", pinyin: "xì" }, { char: "菌", pinyin: "jūn" }, { char: "用", pinyin: "yòng" }, { char: "显", pinyin: "xiǎn" }, { char: "微", pinyin: "wēi" }, { char: "镜", pinyin: "jìng" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "看", pinyin: "kàn" }, { char: "见", pinyin: "jiàn" }]
  },
  "俊": {
    pinyin: "jùn",
    structure: "左右结构",
    composition: "亻 + 夋",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "夋", pinyin: "qūn" }],
    memoryTip: "单人旁加夋，英俊俊俏。",
    words: [{ word: "英俊", pinyin: "yīng jùn" }, { word: "俊俏", pinyin: "jùn qiào" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "ge" }, { char: "小", pinyin: "xiǎo" }, { char: "伙", pinyin: "huǒ" }, { char: "子", pinyin: "zi" }, { char: "长", pinyin: "zhǎng" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "英", pinyin: "yīng" }, { char: "俊", pinyin: "jùn" }]
  },
  "峻": {
    pinyin: "jùn",
    structure: "左右结构",
    composition: "山 + 夋",
    compositionParts: [{ char: "山", pinyin: "shān" }, { char: "夋", pinyin: "qūn" }],
    memoryTip: "山字旁加夋，严峻峻岭。",
    words: [{ word: "严峻", pinyin: "yán jùn" }, { word: "峻岭", pinyin: "jùn lǐng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "山", pinyin: "shān" }, { char: "很", pinyin: "hěn" }, { char: "峻", pinyin: "jùn" }, { char: "峭", pinyin: "qiào" }]
  },
  "卡": {
    pinyin: "kǎ",
    structure: "上下结构",
    composition: "上 + 下",
    compositionParts: [{ char: "上", pinyin: "shàng" }, { char: "下", pinyin: "xià" }],
    memoryTip: "上字加下字，卡片关卡。",
    words: [{ word: "卡片", pinyin: "kǎ piàn" }, { word: "关卡", pinyin: "guān kǎ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "张", pinyin: "zhāng" }, { char: "信", pinyin: "xìn" }, { char: "用", pinyin: "yòng" }, { char: "卡", pinyin: "kǎ" }]
  },
  "开": {
    pinyin: "kāi",
    structure: "独体字",
    composition: "开",
    compositionParts: [{ char: "开", pinyin: "kāi" }],
    memoryTip: "一横两竖撇捺，开门开始。",
    words: [{ word: "开门", pinyin: "kāi mén" }, { word: "开始", pinyin: "kāi shǐ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "开", pinyin: "kāi" }, { char: "始", pinyin: "shǐ" }, { char: "上", pinyin: "shàng" }, { char: "课", pinyin: "kè" }, { char: "了", pinyin: "le" }]
  },
  "凯": {
    pinyin: "kǎi",
    structure: "左右结构",
    composition: "岂 + 几",
    compositionParts: [{ char: "岂", pinyin: "qǐ" }, { char: "几", pinyin: "jǐ" }],
    memoryTip: "岂字加几字，凯旋凯歌。",
    words: [{ word: "凯旋", pinyin: "kǎi xuán" }, { word: "凯歌", pinyin: "kǎi gē" }],
    sentenceData: [{ char: "战", pinyin: "zhàn" }, { char: "士", pinyin: "shì" }, { char: "们", pinyin: "men" }, { char: "凯", pinyin: "kǎi" }, { char: "旋", pinyin: "xuán" }, { char: "而", pinyin: "ér" }, { char: "归", pinyin: "guī" }]
  },
  "慨": {
    pinyin: "kǎi",
    structure: "左右结构",
    composition: "忄 + 既",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "既", pinyin: "jì" }],
    memoryTip: "竖心旁加既，感慨慷慨。",
    words: [{ word: "感慨", pinyin: "gǎn kǎi" }, { word: "慷慨", pinyin: "kāng kǎi" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "慷", pinyin: "kāng" }, { char: "慨", pinyin: "kǎi" }, { char: "地", pinyin: "de" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }]
  },
  "刊": {
    pinyin: "kān",
    structure: "左右结构",
    composition: "干 + 刂",
    compositionParts: [{ char: "干", pinyin: "gān" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "干字加立刀，刊物报刊。",
    words: [{ word: "刊物", pinyin: "kān wù" }, { word: "报刊", pinyin: "bào kān" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "本", pinyin: "běn" }, { char: "刊", pinyin: "kān" }, { char: "物", pinyin: "wù" }, { char: "很", pinyin: "hěn" }, { char: "受", pinyin: "shòu" }, { char: "欢", pinyin: "huān" }, { char: "迎", pinyin: "yíng" }]
  },
  "堪": {
    pinyin: "kān",
    structure: "左右结构",
    composition: "土 + 甚",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "甚", pinyin: "shèn" }],
    memoryTip: "土字旁加甚，不堪难堪。",
    words: [{ word: "不堪", pinyin: "bù kān" }, { word: "难堪", pinyin: "nán kān" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "种", pinyin: "zhǒng" }, { char: "行", pinyin: "xíng" }, { char: "为", pinyin: "wéi" }, { char: "实", pinyin: "shí" }, { char: "在", pinyin: "zài" }, { char: "不", pinyin: "bù" }, { char: "堪", pinyin: "kān" }]
  },
  "砍": {
    pinyin: "kǎn",
    structure: "左右结构",
    composition: "石 + 欠",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "石字旁加欠，砍柴砍树。",
    words: [{ word: "砍柴", pinyin: "kǎn chái" }, { word: "砍树", pinyin: "kǎn shù" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "在", pinyin: "zài" }, { char: "砍", pinyin: "kǎn" }, { char: "伐", pinyin: "fá" }, { char: "树", pinyin: "shù" }, { char: "木", pinyin: "mù" }]
  },
  "看": {
    pinyin: "kàn",
    structure: "半包围结构",
    composition: "龵 + 目",
    compositionParts: [{ char: "龵", pinyin: "shǒu" }, { char: "目", pinyin: "mù" }],
    memoryTip: "手字旁加目，看见观看。",
    words: [{ word: "看见", pinyin: "kàn jiàn" }, { word: "观看", pinyin: "guān kàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "看", pinyin: "kàn" }, { char: "见", pinyin: "jiàn" }, { char: "一", pinyin: "yī" }, { char: "只", pinyin: "zhī" }, { char: "小", pinyin: "xiǎo" }, { char: "鸟", pinyin: "niǎo" }]
  },
  "康": {
    pinyin: "kāng",
    structure: "半包围结构",
    composition: "广 + 隶",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "隶", pinyin: "lì" }],
    memoryTip: "广字旁加隶，健康安康。",
    words: [{ word: "健康", pinyin: "jiàn kāng" }, { word: "安康", pinyin: "ān kāng" }],
    sentenceData: [{ char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }, { char: "很", pinyin: "hěn" }, { char: "重", pinyin: "zhòng" }, { char: "要", pinyin: "yào" }]
  },
  "抗": {
    pinyin: "kàng",
    structure: "左右结构",
    composition: "扌 + 亢",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "亢", pinyin: "kàng" }],
    memoryTip: "提手旁加亢，反抗抵抗。",
    words: [{ word: "反抗", pinyin: "fǎn kàng" }, { word: "抵抗", pinyin: "dǐ kàng" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "民", pinyin: "mín" }, { char: "奋", pinyin: "fèn" }, { char: "力", pinyin: "lì" }, { char: "抗", pinyin: "kàng" }, { char: "争", pinyin: "zhēng" }]
  },
  "炕": {
    pinyin: "kàng",
    structure: "左右结构",
    composition: "火 + 亢",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "亢", pinyin: "kàng" }],
    memoryTip: "火字旁加亢，火炕炕头。",
    words: [{ word: "火炕", pinyin: "huǒ kàng" }, { word: "炕头", pinyin: "kàng tóu" }],
    sentenceData: [{ char: "北", pinyin: "běi" }, { char: "方", pinyin: "fāng" }, { char: "的", pinyin: "de" }, { char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "睡", pinyin: "shuì" }, { char: "火", pinyin: "huǒ" }, { char: "炕", pinyin: "kàng" }, { char: "很", pinyin: "hěn" }, { char: "暖", pinyin: "nuǎn" }, { char: "和", pinyin: "huo" }]
  },
  "考": {
    pinyin: "kǎo",
    structure: "半包围结构",
    composition: "耂 + 丂",
    compositionParts: [{ char: "耂", pinyin: "lǎo" }, { char: "丂", pinyin: "kǎo" }],
    memoryTip: "老字头加丂，考试考察。",
    words: [{ word: "考试", pinyin: "kǎo shì" }, { word: "考察", pinyin: "kǎo chá" }],
    sentenceData: [{ char: "明", pinyin: "míng" }, { char: "天", pinyin: "tiān" }, { char: "要", pinyin: "yào" }, { char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "了", pinyin: "le" }]
  },
  "烤": {
    pinyin: "kǎo",
    structure: "左右结构",
    composition: "火 + 考",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "考", pinyin: "kǎo" }],
    memoryTip: "火字旁加考，烧烤烤火。",
    words: [{ word: "烧烤", pinyin: "shāo kǎo" }, { word: "烤火", pinyin: "kǎo huǒ" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "野", pinyin: "yě" }, { char: "外", pinyin: "wài" }, { char: "烧", pinyin: "shāo" }, { char: "烤", pinyin: "kǎo" }]
  },
  "靠": {
    pinyin: "kào",
    structure: "上下结构",
    composition: "告 + 非",
    compositionParts: [{ char: "告", pinyin: "gào" }, { char: "非", pinyin: "fēi" }],
    memoryTip: "告字加非字，依靠靠近。",
    words: [{ word: "依靠", pinyin: "yī kào" }, { word: "靠近", pinyin: "kào jìn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "依", pinyin: "yī" }, { char: "靠", pinyin: "kào" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "科": {
    pinyin: "kē",
    structure: "左右结构",
    composition: "禾 + 斗",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "斗", pinyin: "dǒu" }],
    memoryTip: "禾字旁加斗，科学科目。",
    words: [{ word: "科学", pinyin: "kē xué" }, { word: "科目", pinyin: "kē mù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "最", pinyin: "zuì" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "的", pinyin: "de" }, { char: "科", pinyin: "kē" }, { char: "目", pinyin: "mù" }, { char: "是", pinyin: "shì" }, { char: "数", pinyin: "shù" }, { char: "学", pinyin: "xué" }]
  },
  "棵": {
    pinyin: "kē",
    structure: "左右结构",
    composition: "木 + 果",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "果", pinyin: "guǒ" }],
    memoryTip: "木字旁加果，一棵树苗。",
    words: [{ word: "一棵", pinyin: "yī kē" }, { word: "树苗", pinyin: "shù miáo" }],
    sentenceData: [{ char: "那", pinyin: "nà" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "棵", pinyin: "kē" }, { char: "小", pinyin: "xiǎo" }, { char: "树", pinyin: "shù" }]
  },
  "颗": {
    pinyin: "kē",
    structure: "左右结构",
    composition: "果 + 页",
    compositionParts: [{ char: "果", pinyin: "guǒ" }, { char: "页", pinyin: "yè" }],
    memoryTip: "果字旁加页，一颗星星。",
    words: [{ word: "一颗", pinyin: "yī kē" }, { word: "星星", pinyin: "xīng xing" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "颗", pinyin: "kē" }, { char: "星", pinyin: "xīng" }, { char: "星", pinyin: "xing" }]
  },
  "壳": {
    pinyin: "ké",
    structure: "上下结构",
    composition: "士 + 冖 + 几",
    compositionParts: [{ char: "士", pinyin: "shì" }, { char: "冖", pinyin: "" }, { char: "几", pinyin: "jǐ" }],
    memoryTip: "士字盖几，外壳贝壳。",
    words: [{ word: "外壳", pinyin: "wài ké" }, { word: "贝壳", pinyin: "bèi ké" }],
    sentenceData: [{ char: "乌", pinyin: "wū" }, { char: "龟", pinyin: "guī" }, { char: "有", pinyin: "yǒu" }, { char: "坚", pinyin: "jiān" }, { char: "硬", pinyin: "yìng" }, { char: "的", pinyin: "de" }, { char: "外", pinyin: "wài" }, { char: "壳", pinyin: "ké" }]
  },
  "咳": {
    pinyin: "ké",
    structure: "左右结构",
    composition: "口 + 亥",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "亥", pinyin: "hài" }],
    memoryTip: "口字旁加亥，咳嗽咳声。",
    words: [{ word: "咳嗽", pinyin: "ké sou" }, { word: "咳声", pinyin: "ké shēng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "明", pinyin: "míng" }, { char: "咳", pinyin: "ké" }, { char: "嗽", pinyin: "sou" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "声", pinyin: "shēng" }]
  },
  "可": {
    pinyin: "kě",
    structure: "半包围结构",
    composition: "丁 + 口",
    compositionParts: [{ char: "丁", pinyin: "dīng" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "丁字加口字，可以可是。",
    words: [{ word: "可以", pinyin: "kě yǐ" }, { word: "可是", pinyin: "kě shì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "去", pinyin: "qù" }, { char: "玩", pinyin: "wán" }, { char: "吗", pinyin: "ma" }]
  },
  "渴": {
    pinyin: "kě",
    structure: "左右结构",
    composition: "氵 + 曷",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "曷", pinyin: "hé" }],
    memoryTip: "三点水加曷，口渴渴望。",
    words: [{ word: "口渴", pinyin: "kǒu kě" }, { word: "渴望", pinyin: "kě wàng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "口", pinyin: "kǒu" }, { char: "渴", pinyin: "kě" }, { char: "了", pinyin: "le" }, { char: "想", pinyin: "xiǎng" }, { char: "喝", pinyin: "hē" }, { char: "水", pinyin: "shuǐ" }]
  },
  "克": {
    pinyin: "kè",
    structure: "上下结构",
    composition: "十 + 口 + 儿",
    compositionParts: [{ char: "十", pinyin: "shí" }, { char: "口", pinyin: "kǒu" }, { char: "儿", pinyin: "ér" }],
    memoryTip: "十口儿组合，千克克服。",
    words: [{ word: "千克", pinyin: "qiān kè" }, { word: "克服", pinyin: "kè fú" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "克", pinyin: "kè" }, { char: "服", pinyin: "fú" }, { char: "困", pinyin: "kùn" }, { char: "难", pinyin: "nán" }]
  },
  "刻": {
    pinyin: "kè",
    structure: "左右结构",
    composition: "亥 + 刂",
    compositionParts: [{ char: "亥", pinyin: "hài" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "亥字旁加立刀，时刻立刻。",
    words: [{ word: "时刻", pinyin: "shí kè" }, { word: "立刻", pinyin: "lì kè" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "刻", pinyin: "kè" }, { char: "苦", pinyin: "kǔ" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }, { char: "知", pinyin: "zhī" }, { char: "识", pinyin: "shi" }]
  },
  "客": {
    pinyin: "kè",
    structure: "上下结构",
    composition: "宀 + 各",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "各", pinyin: "gè" }],
    memoryTip: "宝盖头加各，客人做客。",
    words: [{ word: "客人", pinyin: "kè rén" }, { word: "做客", pinyin: "zuò kè" }],
    sentenceData: [{ char: "家", pinyin: "jiā" }, { char: "里", pinyin: "lǐ" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "位", pinyin: "wèi" }, { char: "客", pinyin: "kè" }, { char: "人", pinyin: "rén" }]
  },
  "课": {
    pinyin: "kè",
    structure: "左右结构",
    composition: "讠 + 果",
    compositionParts: [{ char: "讠", pinyin: "yán" }, { char: "果", pinyin: "guǒ" }],
    memoryTip: "言字旁加果，上课课文。",
    words: [{ word: "上课", pinyin: "shàng kè" }, { word: "课文", pinyin: "kè wén" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "上", pinyin: "shàng" }, { char: "语", pinyin: "yǔ" }, { char: "文", pinyin: "wén" }, { char: "课", pinyin: "kè" }]
  },
  "肯": {
    pinyin: "kěn",
    structure: "上下结构",
    composition: "止 + 月",
    compositionParts: [{ char: "止", pinyin: "zhǐ" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "止字加月字，肯定不肯。",
    words: [{ word: "肯定", pinyin: "kěn dìng" }, { word: "不肯", pinyin: "bù kěn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "肯", pinyin: "kěn" }, { char: "定", pinyin: "dìng" }, { char: "能", pinyin: "néng" }, { char: "做", pinyin: "zuò" }, { char: "好", pinyin: "hǎo" }, { char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "事", pinyin: "shì" }]
  },
  "坑": {
    pinyin: "kēng",
    structure: "左右结构",
    composition: "土 + 亢",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "亢", pinyin: "kàng" }],
    memoryTip: "土字旁加亢，土坑坑洞。",
    words: [{ word: "土坑", pinyin: "tǔ kēng" }, { word: "坑洞", pinyin: "kēng dòng" }],
    sentenceData: [{ char: "路", pinyin: "lù" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "大", pinyin: "dà" }, { char: "坑", pinyin: "kēng" }, { char: "要", pinyin: "yào" }, { char: "小", pinyin: "xiǎo" }, { char: "心", pinyin: "xīn" }]
  },
  "空": {
    pinyin: "kōng",
    structure: "上下结构",
    composition: "穴 + 工",
    compositionParts: [{ char: "穴", pinyin: "xué" }, { char: "工", pinyin: "gōng" }],
    memoryTip: "穴字头加工，天空空气。",
    words: [{ word: "天空", pinyin: "tiān kōng" }, { word: "空气", pinyin: "kōng qì" }],
    sentenceData: [{ char: "蓝", pinyin: "lán" }, { char: "蓝", pinyin: "lán" }, { char: "的", pinyin: "de" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "中", pinyin: "zhōng" }, { char: "飘", pinyin: "piāo" }, { char: "着", pinyin: "zhe" }, { char: "白", pinyin: "bái" }, { char: "云", pinyin: "yún" }]
  },
  "孔": {
    pinyin: "kǒng",
    structure: "左右结构",
    composition: "子 + 乚",
    compositionParts: [{ char: "子", pinyin: "zǐ" }, { char: "乚", pinyin: "" }],
    memoryTip: "子字加乚，孔子孔洞。",
    words: [{ word: "孔子", pinyin: "kǒng zǐ" }, { word: "孔洞", pinyin: "kǒng dòng" }],
    sentenceData: [{ char: "墙", pinyin: "qiáng" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "小", pinyin: "xiǎo" }, { char: "孔", pinyin: "kǒng" }, { char: "洞", pinyin: "dòng" }]
  },
  "恐": {
    pinyin: "kǒng",
    structure: "上下结构",
    composition: "巩 + 心",
    compositionParts: [{ char: "巩", pinyin: "gǒng" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "巩字加心字，恐怕恐慌。",
    words: [{ word: "恐怕", pinyin: "kǒng pà" }, { word: "恐慌", pinyin: "kǒng huāng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "恐", pinyin: "kǒng" }, { char: "怕", pinyin: "pà" }, { char: "考", pinyin: "kǎo" }, { char: "试", pinyin: "shì" }, { char: "考", pinyin: "kǎo" }, { char: "不", pinyin: "bù" }, { char: "好", pinyin: "hǎo" }]
  },
  "控": {
    pinyin: "kòng",
    structure: "左右结构",
    composition: "扌 + 空",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "空", pinyin: "kōng" }],
    memoryTip: "提手旁加空，控制遥控。",
    words: [{ word: "控制", pinyin: "kòng zhì" }, { word: "遥控", pinyin: "yáo kòng" }],
    sentenceData: [{ char: "爸", pinyin: "bà" }, { char: "爸", pinyin: "ba" }, { char: "用", pinyin: "yòng" }, { char: "遥", pinyin: "yáo" }, { char: "控", pinyin: "kòng" }, { char: "器", pinyin: "qì" }, { char: "开", pinyin: "kāi" }, { char: "电", pinyin: "diàn" }, { char: "视", pinyin: "shì" }]
  },
  "口": {
    pinyin: "kǒu",
    structure: "独体字",
    composition: "口",
    compositionParts: [{ char: "口", pinyin: "kǒu" }],
    memoryTip: "四方小口，人口门口。",
    words: [{ word: "人口", pinyin: "rén kǒu" }, { word: "门口", pinyin: "mén kǒu" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "的", pinyin: "de" }, { char: "口", pinyin: "kǒu" }, { char: "鼻", pinyin: "bí" }, { char: "耳", pinyin: "ěr" }, { char: "都", pinyin: "dōu" }, { char: "是", pinyin: "shì" }, { char: "感", pinyin: "gǎn" }, { char: "官", pinyin: "guān" }]
  },
  "扣": {
    pinyin: "kòu",
    structure: "左右结构",
    composition: "扌 + 口",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "口", pinyin: "kǒu" }],
    memoryTip: "提手旁加口，扣子扣住。",
    words: [{ word: "扣子", pinyin: "kòu zi" }, { word: "扣住", pinyin: "kòu zhù" }],
    sentenceData: [{ char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "的", pinyin: "de" }, { char: "扣", pinyin: "kòu" }, { char: "子", pinyin: "zi" }, { char: "掉", pinyin: "diào" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }]
  },
  "枯": {
    pinyin: "kū",
    structure: "左右结构",
    composition: "木 + 古",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "古", pinyin: "gǔ" }],
    memoryTip: "木字旁加古，干枯枯树。",
    words: [{ word: "干枯", pinyin: "gān kū" }, { word: "枯树", pinyin: "kū shù" }],
    sentenceData: [{ char: "秋", pinyin: "qiū" }, { char: "天", pinyin: "tiān" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }, { char: "树", pinyin: "shù" }, { char: "叶", pinyin: "yè" }, { char: "枯", pinyin: "kū" }, { char: "黄", pinyin: "huáng" }, { char: "了", pinyin: "le" }]
  },
  "哭": {
    pinyin: "kū",
    structure: "上下结构",
    composition: "吅 + 犬",
    compositionParts: [{ char: "吅", pinyin: "" }, { char: "犬", pinyin: "quǎn" }],
    memoryTip: "双口加犬，大哭哭声。",
    words: [{ word: "大哭", pinyin: "dà kū" }, { word: "哭声", pinyin: "kū shēng" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "妹", pinyin: "mèi" }, { char: "妹", pinyin: "mei" }, { char: "摔", pinyin: "shuāi" }, { char: "倒", pinyin: "dǎo" }, { char: "了", pinyin: "le" }, { char: "大", pinyin: "dà" }, { char: "哭", pinyin: "kū" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }]
  },
  "苦": {
    pinyin: "kǔ",
    structure: "上下结构",
    composition: "艹 + 古",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "古", pinyin: "gǔ" }],
    memoryTip: "草字头加古，辛苦苦瓜。",
    words: [{ word: "辛苦", pinyin: "xīn kǔ" }, { word: "苦瓜", pinyin: "kǔ guā" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bo" }, { char: "种", pinyin: "zhòng" }, { char: "地", pinyin: "dì" }, { char: "很", pinyin: "hěn" }, { char: "辛", pinyin: "xīn" }, { char: "苦", pinyin: "kǔ" }]
  },
  "库": {
    pinyin: "kù",
    structure: "半包围结构",
    composition: "广 + 车",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "车", pinyin: "chē" }],
    memoryTip: "广字旁加车，仓库车库。",
    words: [{ word: "仓库", pinyin: "cāng kù" }, { word: "车库", pinyin: "chē kù" }],
    sentenceData: [{ char: "汽", pinyin: "qì" }, { char: "车", pinyin: "chē" }, { char: "停", pinyin: "tíng" }, { char: "在", pinyin: "zài" }, { char: "车", pinyin: "chē" }, { char: "库", pinyin: "kù" }, { char: "里", pinyin: "lǐ" }]
  },
  "裤": {
    pinyin: "kù",
    structure: "左右结构",
    composition: "衤 + 库",
    compositionParts: [{ char: "衤", pinyin: "yī" }, { char: "库", pinyin: "kù" }],
    memoryTip: "衣字旁加库，裤子长裤。",
    words: [{ word: "裤子", pinyin: "kù zi" }, { word: "长裤", pinyin: "cháng kù" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "裤", pinyin: "kù" }, { char: "子", pinyin: "zi" }, { char: "破", pinyin: "pò" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "个", pinyin: "gè" }, { char: "洞", pinyin: "dòng" }]
  },
  "酷": {
    pinyin: "kù",
    structure: "左右结构",
    composition: "酉 + 告",
    compositionParts: [{ char: "酉", pinyin: "yǒu" }, { char: "告", pinyin: "gào" }],
    memoryTip: "酉字旁加告，酷热酷帅。",
    words: [{ word: "酷热", pinyin: "kù rè" }, { word: "酷帅", pinyin: "kù shuài" }],
    sentenceData: [{ char: "今", pinyin: "jīn" }, { char: "天", pinyin: "tiān" }, { char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "真", pinyin: "zhēn" }, { char: "酷", pinyin: "kù" }, { char: "热", pinyin: "rè" }, { char: "啊", pinyin: "a" }]
  },
  "夸": {
    pinyin: "kuā",
    structure: "上下结构",
    composition: "大 + 亏",
    compositionParts: [{ char: "大", pinyin: "dà" }, { char: "亏", pinyin: "kuī" }],
    memoryTip: "大字加亏字，夸奖夸张。",
    words: [{ word: "夸奖", pinyin: "kuā jiǎng" }, { word: "夸张", pinyin: "kuā zhāng" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "夸", pinyin: "kuā" }, { char: "奖", pinyin: "jiǎng" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "作", pinyin: "zuò" }, { char: "文", pinyin: "wén" }]
  },
  "跨": {
    pinyin: "kuà",
    structure: "左右结构",
    composition: "足 + 夸",
    compositionParts: [{ char: "足", pinyin: "zú" }, { char: "夸", pinyin: "kuā" }],
    memoryTip: "足字旁加夸，跨越跨过。",
    words: [{ word: "跨越", pinyin: "kuà yuè" }, { word: "跨过", pinyin: "kuà guò" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "马", pinyin: "mǎ" }, { char: "跨", pinyin: "kuà" }, { char: "过", pinyin: "guò" }, { char: "了", pinyin: "le" }, { char: "小", pinyin: "xiǎo" }, { char: "河", pinyin: "hé" }, { char: "流", pinyin: "liú" }]
  },
  "块": {
    pinyin: "kuài",
    structure: "左右结构",
    composition: "土 + 夬",
    compositionParts: [{ char: "土", pinyin: "tǔ" }, { char: "夬", pinyin: "guài" }],
    memoryTip: "土字旁加夬，石块方块。",
    words: [{ word: "石块", pinyin: "shí kuài" }, { word: "方块", pinyin: "fāng kuài" }],
    sentenceData: [{ char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "一", pinyin: "yī" }, { char: "块", pinyin: "kuài" }, { char: "石", pinyin: "shí" }, { char: "头", pinyin: "tóu" }, { char: "挡", pinyin: "dǎng" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "路", pinyin: "lù" }]
  },
  "快": {
    pinyin: "kuài",
    structure: "左右结构",
    composition: "忄 + 夬",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "夬", pinyin: "guài" }],
    memoryTip: "竖心旁加夬，快乐飞快。",
    words: [{ word: "快乐", pinyin: "kuài lè" }, { word: "飞快", pinyin: "fēi kuài" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "you" }, { char: "们", pinyin: "men" }, { char: "快", pinyin: "kuài" }, { char: "乐", pinyin: "lè" }, { char: "地", pinyin: "de" }, { char: "游", pinyin: "yóu" }, { char: "戏", pinyin: "xì" }]
  },
  "宽": {
    pinyin: "kuān",
    structure: "上下结构",
    composition: "宀 + 见",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "宝盖头加见，宽阔宽大。",
    words: [{ word: "宽阔", pinyin: "kuān kuò" }, { word: "宽大", pinyin: "kuān dà" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "条", pinyin: "tiáo" }, { char: "马", pinyin: "mǎ" }, { char: "路", pinyin: "lù" }, { char: "很", pinyin: "hěn" }, { char: "宽", pinyin: "kuān" }, { char: "阔", pinyin: "kuò" }]
  },
  "款": {
    pinyin: "kuǎn",
    structure: "左右结构",
    composition: "士 + 示 + 欠",
    compositionParts: [{ char: "士", pinyin: "shì" }, { char: "示", pinyin: "shì" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "士示欠组合，款式存款。",
    words: [{ word: "款式", pinyin: "kuǎn shì" }, { word: "存款", pinyin: "cún kuǎn" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "件", pinyin: "jiàn" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }, { char: "的", pinyin: "de" }, { char: "款", pinyin: "kuǎn" }, { char: "式", pinyin: "shì" }, { char: "很", pinyin: "hěn" }, { char: "新", pinyin: "xīn" }]
  },
  "狂": {
    pinyin: "kuáng",
    structure: "左右结构",
    composition: "犭 + 王",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "王", pinyin: "wáng" }],
    memoryTip: "反犬旁加王，疯狂狂风。",
    words: [{ word: "疯狂", pinyin: "fēng kuáng" }, { word: "狂风", pinyin: "kuáng fēng" }],
    sentenceData: [{ char: "狂", pinyin: "kuáng" }, { char: "风", pinyin: "fēng" }, { char: "把", pinyin: "bǎ" }, { char: "树", pinyin: "shù" }, { char: "都", pinyin: "dōu" }, { char: "吹", pinyin: "chuī" }, { char: "倒", pinyin: "dǎo" }, { char: "了", pinyin: "le" }]
  },
  "旷": {
    pinyin: "kuàng",
    structure: "左右结构",
    composition: "日 + 广",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "广", pinyin: "guǎng" }],
    memoryTip: "日字旁加广，空旷旷课。",
    words: [{ word: "空旷", pinyin: "kōng kuàng" }, { word: "旷课", pinyin: "kuàng kè" }],
    sentenceData: [{ char: "旷", pinyin: "kuàng" }, { char: "野", pinyin: "yě" }, { char: "很", pinyin: "hěn" }, { char: "空", pinyin: "kōng" }, { char: "旷", pinyin: "kuàng" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "放", pinyin: "fàng" }, { char: "风", pinyin: "fēng" }, { char: "筝", pinyin: "zheng" }]
  },
  "矿": {
    pinyin: "kuàng",
    structure: "左右结构",
    composition: "石 + 广",
    compositionParts: [{ char: "石", pinyin: "shí" }, { char: "广", pinyin: "guǎng" }],
    memoryTip: "石字旁加广，矿石矿山。",
    words: [{ word: "矿石", pinyin: "kuàng shí" }, { word: "矿山", pinyin: "kuàng shān" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "人", pinyin: "rén" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "矿", pinyin: "kuàng" }, { char: "山", pinyin: "shān" }, { char: "开", pinyin: "kāi" }, { char: "采", pinyin: "cǎi" }, { char: "矿", pinyin: "kuàng" }, { char: "石", pinyin: "shí" }]
  },
  "亏": {
    pinyin: "kuī",
    structure: "上下结构",
    composition: "一 + 丂",
    compositionParts: [{ char: "一", pinyin: "yī" }, { char: "丂", pinyin: "kǎo" }],
    memoryTip: "一字加丂字，吃亏亏损。",
    words: [{ word: "吃亏", pinyin: "chī kuī" }, { word: "亏损", pinyin: "kuī sǔn" }],
    sentenceData: [{ char: "做", pinyin: "zuò" }, { char: "生", pinyin: "shēng" }, { char: "意", pinyin: "yi" }, { char: "亏", pinyin: "kuī" }, { char: "本", pinyin: "běn" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "难", pinyin: "nán" }, { char: "做", pinyin: "zuò" }, { char: "下", pinyin: "xià" }, { char: "去", pinyin: "qù" }]
  },
  "葵": {
    pinyin: "kuí",
    structure: "上下结构",
    composition: "艹 + 癸",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "癸", pinyin: "guǐ" }],
    memoryTip: "草字头加癸，葵花向日葵。",
    words: [{ word: "葵花", pinyin: "kuí huā" }, { word: "向日葵", pinyin: "xiàng rì kuí" }],
    sentenceData: [{ char: "向", pinyin: "xiàng" }, { char: "日", pinyin: "rì" }, { char: "葵", pinyin: "kuí" }, { char: "总", pinyin: "zǒng" }, { char: "是", pinyin: "shì" }, { char: "朝", pinyin: "cháo" }, { char: "着", pinyin: "zhe" }, { char: "太", pinyin: "tài" }, { char: "阳", pinyin: "yáng" }]
  
  },
  "愧": {
    pinyin: "kuì",
    structure: "左右结构",
    composition: "忄 + 鬼",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "鬼", pinyin: "guǐ" }],
    memoryTip: "竖心旁加鬼，惭愧羞愧。",
    words: [{ word: "惭愧", pinyin: "cán kuì" }, { word: "羞愧", pinyin: "xiū kuì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "为", pinyin: "wèi" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "的", pinyin: "de" }, { char: "错", pinyin: "cuò" }, { char: "误", pinyin: "wù" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "惭", pinyin: "cán" }, { char: "愧", pinyin: "kuì" }]
  },
  "溃": {
    pinyin: "kuì",
    structure: "左右结构",
    composition: "氵 + 贵",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "贵", pinyin: "guì" }],
    memoryTip: "三点水加贵，崩溃溃败。",
    words: [{ word: "崩溃", pinyin: "bēng kuì" }, { word: "溃败", pinyin: "kuì bài" }],
    sentenceData: [{ char: "敌", pinyin: "dí" }, { char: "军", pinyin: "jūn" }, { char: "全", pinyin: "quán" }, { char: "线", pinyin: "xiàn" }, { char: "溃", pinyin: "kuì" }, { char: "败", pinyin: "bài" }, { char: "了", pinyin: "le" }]
  },
  "昆": {
    pinyin: "kūn",
    structure: "上下结构",
    composition: "日 + 比",
    compositionParts: [{ char: "日", pinyin: "rì" }, { char: "比", pinyin: "bǐ" }],
    memoryTip: "日字加比字，昆虫昆仑。",
    words: [{ word: "昆虫", pinyin: "kūn chóng" }, { word: "昆仑", pinyin: "kūn lún" }],
    sentenceData: [{ char: "蝴", pinyin: "hú" }, { char: "蝶", pinyin: "dié" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "种", pinyin: "zhǒng" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }, { char: "的", pinyin: "de" }, { char: "昆", pinyin: "kūn" }, { char: "虫", pinyin: "chóng" }]
  },
  "困": {
    pinyin: "kùn",
    structure: "全包围结构",
    composition: "囗 + 木",
    compositionParts: [{ char: "囗", pinyin: "wéi" }, { char: "木", pinyin: "mù" }],
    memoryTip: "方框中加木，困难围困。",
    words: [{ word: "困难", pinyin: "kùn nan" }, { word: "围困", pinyin: "wéi kùn" }],
    sentenceData: [{ char: "遇", pinyin: "yù" }, { char: "到", pinyin: "dào" }, { char: "困", pinyin: "kùn" }, { char: "难", pinyin: "nan" }, { char: "不", pinyin: "bù" }, { char: "要", pinyin: "yào" }, { char: "轻", pinyin: "qīng" }, { char: "易", pinyin: "yì" }, { char: "放", pinyin: "fàng" }, { char: "弃", pinyin: "qì" }]
  },
  "扩": {
    pinyin: "kuò",
    structure: "左右结构",
    composition: "扌 + 广",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "广", pinyin: "guǎng" }],
    memoryTip: "提手旁加广，扩大扩展。",
    words: [{ word: "扩大", pinyin: "kuò dà" }, { word: "扩展", pinyin: "kuò zhǎn" }],
    sentenceData: [{ char: "城", pinyin: "chéng" }, { char: "市", pinyin: "shì" }, { char: "不", pinyin: "bù" }, { char: "断", pinyin: "duàn" }, { char: "扩", pinyin: "kuò" }, { char: "大", pinyin: "dà" }, { char: "发", pinyin: "fā" }, { char: "展", pinyin: "zhǎn" }]
  },
  "括": {
    pinyin: "kuò",
    structure: "左右结构",
    composition: "扌 + 舌",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "舌", pinyin: "shé" }],
    memoryTip: "提手旁加舌，括号包括。",
    words: [{ word: "括号", pinyin: "kuò hào" }, { word: "包括", pinyin: "bāo kuò" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "句", pinyin: "jù" }, { char: "子", pinyin: "zi" }, { char: "包", pinyin: "bāo" }, { char: "括", pinyin: "kuò" }, { char: "三", pinyin: "sān" }, { char: "个", pinyin: "gè" }, { char: "成", pinyin: "chéng" }, { char: "分", pinyin: "fèn" }]
  },
  "阔": {
    pinyin: "kuò",
    structure: "半包围结构",
    composition: "门 + 活",
    compositionParts: [{ char: "门", pinyin: "mén" }, { char: "活", pinyin: "huó" }],
    memoryTip: "门字框加活，广阔宽阔。",
    words: [{ word: "广阔", pinyin: "guǎng kuò" }, { word: "宽阔", pinyin: "kuān kuò" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "海", pinyin: "hǎi" }, { char: "一", pinyin: "yī" }, { char: "望", pinyin: "wàng" }, { char: "无", pinyin: "wú" }, { char: "际", pinyin: "jì" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "广", pinyin: "guǎng" }, { char: "阔", pinyin: "kuò" }]
  },
  "拉": {
    pinyin: "lā",
    structure: "左右结构",
    composition: "扌 + 立",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "立", pinyin: "lì" }],
    memoryTip: "提手旁加立，拉车拉手。",
    words: [{ word: "拉车", pinyin: "lā chē" }, { word: "拉手", pinyin: "lā shǒu" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "拉", pinyin: "lā" }, { char: "手", pinyin: "shǒu" }, { char: "唱", pinyin: "chàng" }, { char: "歌", pinyin: "gē" }]
  },
  "啦": {
    pinyin: "la",
    structure: "左右结构",
    composition: "口 + 拉",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "拉", pinyin: "lā" }],
    memoryTip: "口字旁加拉，好啦走啦。",
    words: [{ word: "好啦", pinyin: "hǎo la" }, { word: "走啦", pinyin: "zǒu la" }],
    sentenceData: [{ char: "好", pinyin: "hǎo" }, { char: "啦", pinyin: "la" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "可", pinyin: "kě" }, { char: "以", pinyin: "yǐ" }, { char: "出", pinyin: "chū" }, { char: "发", pinyin: "fā" }, { char: "了", pinyin: "le" }]
  },
  "喇": {
    pinyin: "lǎ",
    structure: "左中右结构",
    composition: "口 + 束 + 刂",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "束", pinyin: "shù" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "口字旁加拉，喇叭喇嘛。",
    words: [{ word: "喇叭", pinyin: "lǎ ba" }, { word: "喇嘛", pinyin: "lǎ ma" }],
    sentenceData: [{ char: "汽", pinyin: "qì" }, { char: "车", pinyin: "chē" }, { char: "喇", pinyin: "lǎ" }, { char: "叭", pinyin: "ba" }, { char: "响", pinyin: "xiǎng" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "声", pinyin: "shēng" }]
  },
  "腊": {
    pinyin: "là",
    structure: "左右结构",
    composition: "月 + 昔",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "月字旁加昔，腊月腊肉。",
    words: [{ word: "腊月", pinyin: "là yuè" }, { word: "腊肉", pinyin: "là ròu" }],
    sentenceData: [{ char: "腊", pinyin: "là" }, { char: "月", pinyin: "yuè" }, { char: "是", pinyin: "shì" }, { char: "一", pinyin: "yī" }, { char: "年", pinyin: "nián" }, { char: "中", pinyin: "zhōng" }, { char: "最", pinyin: "zuì" }, { char: "冷", pinyin: "lěng" }, { char: "的", pinyin: "de" }, { char: "月", pinyin: "yuè" }, { char: "份", pinyin: "fèn" }]
  },
  "蜡": {
    pinyin: "là",
    structure: "左右结构",
    composition: "虫 + 昔",
    compositionParts: [{ char: "虫", pinyin: "chóng" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "虫字旁加昔，蜡烛蜡笔。",
    words: [{ word: "蜡烛", pinyin: "là zhú" }, { word: "蜡笔", pinyin: "là bǐ" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "you" }, { char: "用", pinyin: "yòng" }, { char: "蜡", pinyin: "là" }, { char: "笔", pinyin: "bǐ" }, { char: "画", pinyin: "huà" }, { char: "画", pinyin: "huà" }]
  },
  "辣": {
    pinyin: "là",
    structure: "左右结构",
    composition: "辛 + 束",
    compositionParts: [{ char: "辛", pinyin: "xīn" }, { char: "束", pinyin: "shù" }],
    memoryTip: "辛字旁加束，辣椒辛辣。",
    words: [{ word: "辣椒", pinyin: "là jiāo" }, { word: "辛辣", pinyin: "xīn là" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "不", pinyin: "bù" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "吃", pinyin: "chī" }, { char: "辣", pinyin: "là" }, { char: "椒", pinyin: "jiāo" }, { char: "太", pinyin: "tài" }, { char: "辣", pinyin: "là" }, { char: "了", pinyin: "le" }]
  },
  "来": {
    pinyin: "lái",
    structure: "独体字",
    composition: "来",
    compositionParts: [{ char: "来", pinyin: "lái" }],
    memoryTip: "十字加米字，来往未来。",
    words: [{ word: "来往", pinyin: "lái wǎng" }, { word: "未来", pinyin: "wèi lái" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "来", pinyin: "lái" }, { char: "了", pinyin: "le" }, { char: "花", pinyin: "huā" }, { char: "儿", pinyin: "ér" }, { char: "都", pinyin: "dōu" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }]
  },
  "莱": {
    pinyin: "lái",
    structure: "上下结构",
    composition: "艹 + 来",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "来", pinyin: "lái" }],
    memoryTip: "草字头加来，蓬莱莱阳。",
    words: [{ word: "蓬莱", pinyin: "péng lái" }, { word: "莱阳", pinyin: "lái yáng" }],
    sentenceData: [{ char: "蓬", pinyin: "péng" }, { char: "莱", pinyin: "lái" }, { char: "是", pinyin: "shì" }, { char: "传", pinyin: "chuán" }, { char: "说", pinyin: "shuō" }, { char: "中", pinyin: "zhōng" }, { char: "的", pinyin: "de" }, { char: "仙", pinyin: "xiān" }, { char: "境", pinyin: "jìng" }]
  },
  "赖": {
    pinyin: "lài",
    structure: "左右结构",
    composition: "束 + 负",
    compositionParts: [{ char: "束", pinyin: "shù" }, { char: "负", pinyin: "fù" }],
    memoryTip: "束字加负字，依赖赖皮。",
    words: [{ word: "依赖", pinyin: "yī lài" }, { word: "赖皮", pinyin: "lài pí" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "孩", pinyin: "hái" }, { char: "子", pinyin: "zi" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "总", pinyin: "zǒng" }, { char: "是", pinyin: "shì" }, { char: "依", pinyin: "yī" }, { char: "赖", pinyin: "lài" }, { char: "父", pinyin: "fù" }, { char: "母", pinyin: "mǔ" }]
  },
  "兰": {
    pinyin: "lán",
    structure: "上下结构",
    composition: "丷 + 三",
    compositionParts: [{ char: "丷", pinyin: "" }, { char: "三", pinyin: "sān" }],
    memoryTip: "两点加三字，兰花兰州。",
    words: [{ word: "兰花", pinyin: "lán huā" }, { word: "兰州", pinyin: "lán zhōu" }],
    sentenceData: [{ char: "兰", pinyin: "lán" }, { char: "花", pinyin: "huā" }, { char: "开", pinyin: "kāi" }, { char: "放", pinyin: "fàng" }, { char: "的", pinyin: "de" }, { char: "时", pinyin: "shí" }, { char: "候", pinyin: "hou" }, { char: "散", pinyin: "sàn" }, { char: "发", pinyin: "fā" }, { char: "着", pinyin: "zhe" }, { char: "淡", pinyin: "dàn" }, { char: "淡", pinyin: "dàn" }, { char: "的", pinyin: "de" }, { char: "香", pinyin: "xiāng" }, { char: "味", pinyin: "wèi" }]
  },
  "拦": {
    pinyin: "lán",
    structure: "左右结构",
    composition: "扌 + 兰",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "兰", pinyin: "lán" }],
    memoryTip: "提手旁加兰，拦住拦路。",
    words: [{ word: "拦住", pinyin: "lán zhù" }, { word: "拦路", pinyin: "lán lù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "伸", pinyin: "shēn" }, { char: "手", pinyin: "shǒu" }, { char: "拦", pinyin: "lán" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }, { char: "我", pinyin: "wǒ" }, { char: "的", pinyin: "de" }, { char: "去", pinyin: "qù" }, { char: "路", pinyin: "lù" }]
  },
  "栏": {
    pinyin: "lán",
    structure: "左右结构",
    composition: "木 + 兰",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "兰", pinyin: "lán" }],
    memoryTip: "木字旁加兰，栏杆栏目。",
    words: [{ word: "栏杆", pinyin: "lán gān" }, { word: "栏目", pinyin: "lán mù" }],
    sentenceData: [{ char: "桥", pinyin: "qiáo" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "栏", pinyin: "lán" }, { char: "杆", pinyin: "gān" }, { char: "很", pinyin: "hěn" }, { char: "坚", pinyin: "jiān" }, { char: "固", pinyin: "gù" }]
  },
  "蓝": {
    pinyin: "lán",
    structure: "上下结构",
    composition: "艹 + 监",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "监", pinyin: "jiān" }],
    memoryTip: "草字头加监，蓝天蓝色。",
    words: [{ word: "蓝天", pinyin: "lán tiān" }, { word: "蓝色", pinyin: "lán sè" }],
    sentenceData: [{ char: "蓝", pinyin: "lán" }, { char: "天", pinyin: "tiān" }, { char: "白", pinyin: "bái" }, { char: "云", pinyin: "yún" }, { char: "真", pinyin: "zhēn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "篮": {
    pinyin: "lán",
    structure: "上下结构",
    composition: "⺮ + 监",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "监", pinyin: "jiān" }],
    memoryTip: "竹字头加监，篮球篮子。",
    words: [{ word: "篮球", pinyin: "lán qiú" }, { word: "篮子", pinyin: "lán zi" }],
    sentenceData: [{ char: "哥", pinyin: "gē" }, { char: "哥", pinyin: "ge" }, { char: "喜", pinyin: "xǐ" }, { char: "欢", pinyin: "huān" }, { char: "打", pinyin: "dǎ" }, { char: "篮", pinyin: "lán" }, { char: "球", pinyin: "qiú" }]
  },
  "览": {
    pinyin: "lǎn",
    structure: "上下结构",
    composition: "⺮ + 见",
    compositionParts: [{ char: "⺮", pinyin: "zhú" }, { char: "见", pinyin: "jiàn" }],
    memoryTip: "竹字头加见，游览展览。",
    words: [{ word: "游览", pinyin: "yóu lǎn" }, { word: "展览", pinyin: "zhǎn lǎn" }],
    sentenceData: [{ char: "国", pinyin: "guó" }, { char: "庆", pinyin: "qìng" }, { char: "期", pinyin: "qī" }, { char: "间", pinyin: "jiān" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "去", pinyin: "qù" }, { char: "游", pinyin: "yóu" }, { char: "览", pinyin: "lǎn" }, { char: "了", pinyin: "le" }, { char: "名", pinyin: "míng" }, { char: "胜", pinyin: "shèng" }, { char: "古", pinyin: "gǔ" }, { char: "迹", pinyin: "jì" }]
  },
  "懒": {
    pinyin: "lǎn",
    structure: "左中右结构",
    composition: "忄 + 束 + 欠",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "束", pinyin: "shù" }, { char: "欠", pinyin: "qiàn" }],
    memoryTip: "竖心旁加束欠，懒惰懒散。",
    words: [{ word: "懒惰", pinyin: "lǎn duò" }, { word: "懒散", pinyin: "lǎn sǎn" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "猫", pinyin: "māo" }, { char: "懒", pinyin: "lǎn" }, { char: "洋", pinyin: "yáng" }, { char: "洋", pinyin: "yang" }, { char: "地", pinyin: "de" }, { char: "躺", pinyin: "tǎng" }, { char: "在", pinyin: "zài" }, { char: "地", pinyin: "dì" }, { char: "上", pinyin: "shàng" }]
  },
  "烂": {
    pinyin: "làn",
    structure: "左右结构",
    composition: "火 + 兰",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "兰", pinyin: "lán" }],
    memoryTip: "火字旁加兰，腐烂破烂。",
    words: [{ word: "腐烂", pinyin: "fǔ làn" }, { word: "破烂", pinyin: "pò làn" }],
    sentenceData: [{ char: "落", pinyin: "luò" }, { char: "叶", pinyin: "yè" }, { char: "腐", pinyin: "fǔ" }, { char: "烂", pinyin: "làn" }, { char: "后", pinyin: "hòu" }, { char: "变", pinyin: "biàn" }, { char: "成", pinyin: "chéng" }, { char: "了", pinyin: "le" }, { char: "肥", pinyin: "féi" }, { char: "料", pinyin: "liào" }]
  },
  "滥": {
    pinyin: "làn",
    structure: "左右结构",
    composition: "氵 + 监",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "监", pinyin: "jiān" }],
    memoryTip: "三点水加监，泛滥滥用。",
    words: [{ word: "泛滥", pinyin: "fàn làn" }, { word: "滥用", pinyin: "làn yòng" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "合", pinyin: "hé" }, { char: "理", pinyin: "lǐ" }, { char: "用", pinyin: "yòng" }, { char: "水", pinyin: "shuǐ" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "滥", pinyin: "làn" }, { char: "用", pinyin: "yòng" }]
  },
  "郎": {
    pinyin: "láng",
    structure: "左右结构",
    composition: "良 + 阝",
    compositionParts: [{ char: "良", pinyin: "liáng" }, { char: "阝", pinyin: "yì" }],
    memoryTip: "良字加右耳，新郎郎中。",
    words: [{ word: "新郎", pinyin: "xīn láng" }, { word: "郎中", pinyin: "láng zhōng" }],
    sentenceData: [{ char: "新", pinyin: "xīn" }, { char: "郎", pinyin: "láng" }, { char: "新", pinyin: "xīn" }, { char: "娘", pinyin: "niáng" }, { char: "手", pinyin: "shǒu" }, { char: "牵", pinyin: "qiān" }, { char: "着", pinyin: "zhe" }, { char: "手", pinyin: "shǒu" }, { char: "走", pinyin: "zǒu" }, { char: "进", pinyin: "jìn" }, { char: "了", pinyin: "le" }, { char: "婚", pinyin: "hūn" }, { char: "礼", pinyin: "lǐ" }, { char: "堂", pinyin: "táng" }]
  },
  "狼": {
    pinyin: "láng",
    structure: "左右结构",
    composition: "犭 + 良",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "良", pinyin: "liáng" }],
    memoryTip: "反犬旁加良，豺狼狼狗。",
    words: [{ word: "豺狼", pinyin: "chái láng" }, { word: "狼狗", pinyin: "láng gǒu" }],
    sentenceData: [{ char: "山", pinyin: "shān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "野", pinyin: "yě" }, { char: "狼", pinyin: "láng" }, { char: "在", pinyin: "zài" }, { char: "月", pinyin: "yuè" }, { char: "亮", pinyin: "liàng" }, { char: "下", pinyin: "xià" }, { char: "嚎", pinyin: "háo" }, { char: "叫", pinyin: "jiào" }]
  },
  "廊": {
    pinyin: "láng",
    structure: "半包围结构",
    composition: "广 + 郎",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "郎", pinyin: "láng" }],
    memoryTip: "广字旁加郎，走廊长廊。",
    words: [{ word: "走廊", pinyin: "zǒu láng" }, { word: "长廊", pinyin: "cháng láng" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "的", pinyin: "de" }, { char: "走", pinyin: "zǒu" }, { char: "廊", pinyin: "láng" }, { char: "上", pinyin: "shàng" }, { char: "挂", pinyin: "guà" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "学", pinyin: "xué" }, { char: "生", pinyin: "shēng" }, { char: "的", pinyin: "de" }, { char: "作", pinyin: "zuò" }, { char: "品", pinyin: "pǐn" }]
  },
  "朗": {
    pinyin: "lǎng",
    structure: "左右结构",
    composition: "良 + 月",
    compositionParts: [{ char: "良", pinyin: "liáng" }, { char: "月", pinyin: "yuè" }],
    memoryTip: "良字加月字，朗读朗诵。",
    words: [{ word: "朗读", pinyin: "lǎng dú" }, { word: "朗诵", pinyin: "lǎng sòng" }],
    sentenceData: [{ char: "早", pinyin: "zǎo" }, { char: "读", pinyin: "dú" }, { char: "时", pinyin: "shí" }, { char: "间", pinyin: "jiān" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "都", pinyin: "dōu" }, { char: "在", pinyin: "zài" }, { char: "大", pinyin: "dà" }, { char: "声", pinyin: "shēng" }, { char: "朗", pinyin: "lǎng" }, { char: "读", pinyin: "dú" }]
  },
  "浪": {
    pinyin: "làng",
    structure: "左右结构",
    composition: "氵 + 良",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "良", pinyin: "liáng" }],
    memoryTip: "三点水加良，海浪浪花。",
    words: [{ word: "海浪", pinyin: "hǎi làng" }, { word: "浪花", pinyin: "làng huā" }],
    sentenceData: [{ char: "海", pinyin: "hǎi" }, { char: "浪", pinyin: "làng" }, { char: "一", pinyin: "yī" }, { char: "波", pinyin: "bō" }, { char: "接", pinyin: "jiē" }, { char: "着", pinyin: "zhe" }, { char: "一", pinyin: "yī" }, { char: "波", pinyin: "bō" }, { char: "冲", pinyin: "chōng" }, { char: "向", pinyin: "xiàng" }, { char: "沙", pinyin: "shā" }, { char: "滩", pinyin: "tān" }]
  },
  "捞": {
    pinyin: "lāo",
    structure: "左右结构",
    composition: "扌 + 劳",
    compositionParts: [{ char: "扌", pinyin: "shǒu" }, { char: "劳", pinyin: "láo" }],
    memoryTip: "提手旁加劳，打捞捞鱼。",
    words: [{ word: "打捞", pinyin: "dǎ lāo" }, { word: "捞鱼", pinyin: "lāo yú" }],
    sentenceData: [{ char: "渔", pinyin: "yú" }, { char: "民", pinyin: "mín" }, { char: "在", pinyin: "zài" }, { char: "河", pinyin: "hé" }, { char: "里", pinyin: "lǐ" }, { char: "捞", pinyin: "lāo" }, { char: "鱼", pinyin: "yú" }]
  },
  "劳": {
    pinyin: "láo",
    structure: "上下结构",
    composition: "艹 + 冖 + 力",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "冖", pinyin: "" }, { char: "力", pinyin: "lì" }],
    memoryTip: "草字头加冖力，劳动勤劳。",
    words: [{ word: "劳动", pinyin: "láo dòng" }, { word: "勤劳", pinyin: "qín láo" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "民", pinyin: "mín" }, { char: "通", pinyin: "tōng" }, { char: "过", pinyin: "guò" }, { char: "劳", pinyin: "láo" }, { char: "动", pinyin: "dòng" }, { char: "创", pinyin: "chuàng" }, { char: "造", pinyin: "zào" }, { char: "美", pinyin: "měi" }, { char: "好", pinyin: "hǎo" }, { char: "生", pinyin: "shēng" }, { char: "活", pinyin: "huó" }]
  },
  "牢": {
    pinyin: "láo",
    structure: "上下结构",
    composition: "宀 + 牛",
    compositionParts: [{ char: "宀", pinyin: "mián" }, { char: "牛", pinyin: "niú" }],
    memoryTip: "宝盖头加牛，牢房牢记。",
    words: [{ word: "牢房", pinyin: "láo fáng" }, { word: "牢记", pinyin: "láo jì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "牢", pinyin: "láo" }, { char: "记", pinyin: "jì" }, { char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "的", pinyin: "de" }, { char: "教", pinyin: "jiào" }, { char: "导", pinyin: "dǎo" }]
  },
  "老": {
    pinyin: "lǎo",
    structure: "半包围结构",
    composition: "耂 + 匕",
    compositionParts: [{ char: "耂", pinyin: "lǎo" }, { char: "匕", pinyin: "bǐ" }],
    memoryTip: "老字头加匕，老师老人。",
    words: [{ word: "老师", pinyin: "lǎo shī" }, { word: "老人", pinyin: "lǎo rén" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "像", pinyin: "xiàng" }, { char: "蜡", pinyin: "là" }, { char: "烛", pinyin: "zhú" }, { char: "一", pinyin: "yī" }, { char: "样", pinyin: "yàng" }, { char: "燃", pinyin: "rán" }, { char: "烧", pinyin: "shāo" }, { char: "自", pinyin: "zì" }, { char: "己", pinyin: "jǐ" }, { char: "照", pinyin: "zhào" }, { char: "亮", pinyin: "liàng" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }]
  },
  "乐": {
    pinyin: "lè",
    structure: "独体字",
    composition: "乐",
    compositionParts: [{ char: "乐", pinyin: "lè" }],
    memoryTip: "丿加幺加小，快乐乐观。",
    words: [{ word: "快乐", pinyin: "kuài lè" }, { word: "乐观", pinyin: "lè guān" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "里", pinyin: "lǐ" }, { char: "快", pinyin: "kuài" }, { char: "乐", pinyin: "lè" }, { char: "地", pinyin: "de" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "勒": {
    pinyin: "lè",
    structure: "左右结构",
    composition: "革 + 力",
    compositionParts: [{ char: "革", pinyin: "gé" }, { char: "力", pinyin: "lì" }],
    memoryTip: "革字旁加力，勒索勾勒。",
    words: [{ word: "勒索", pinyin: "lè suǒ" }, { word: "勾勒", pinyin: "gōu lè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "用", pinyin: "yòng" }, { char: "铅", pinyin: "qiān" }, { char: "笔", pinyin: "bǐ" }, { char: "勒", pinyin: "lè" }, { char: "索", pinyin: "suǒ" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "笔", pinyin: "bǐ" }, { char: "钱", pinyin: "qián" }]
  },
  "雷": {
    pinyin: "léi",
    structure: "上下结构",
    composition: "雨 + 田",
    compositionParts: [{ char: "雨", pinyin: "yǔ" }, { char: "田", pinyin: "tián" }],
    memoryTip: "雨字头加田，雷雨雷电。",
    words: [{ word: "雷雨", pinyin: "léi yǔ" }, { word: "雷电", pinyin: "léi diàn" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "雷", pinyin: "léi" }, { char: "雨", pinyin: "yǔ" }, { char: "多", pinyin: "duō" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "注", pinyin: "zhù" }, { char: "意", pinyin: "yì" }, { char: "安", pinyin: "ān" }, { char: "全", pinyin: "quán" }]
  },
  "蕾": {
    pinyin: "lěi",
    structure: "上下结构",
    composition: "艹 + 雷",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "雷", pinyin: "léi" }],
    memoryTip: "草字头加雷，花蕾蓓蕾。",
    words: [{ word: "花蕾", pinyin: "huā lěi" }, { word: "蓓蕾", pinyin: "bèi lěi" }],
    sentenceData: [{ char: "花", pinyin: "huā" }, { char: "蕾", pinyin: "lěi" }, { char: "在", pinyin: "zài" }, { char: "春", pinyin: "chūn" }, { char: "风", pinyin: "fēng" }, { char: "中", pinyin: "zhōng" }, { char: "慢", pinyin: "màn" }, { char: "慢", pinyin: "màn" }, { char: "绽", pinyin: "zhàn" }, { char: "放", pinyin: "fàng" }]
  },
  "泪": {
    pinyin: "lèi",
    structure: "左右结构",
    composition: "氵 + 目",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "目", pinyin: "mù" }],
    memoryTip: "三点水加目，眼泪泪水。",
    words: [{ word: "眼泪", pinyin: "yǎn lèi" }, { word: "泪水", pinyin: "lèi shuǐ" }],
    sentenceData: [{ char: "她", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "眼", pinyin: "yǎn" }, { char: "泪", pinyin: "lèi" }, { char: "像", pinyin: "xiàng" }, { char: "断", pinyin: "duàn" }, { char: "了", pinyin: "le" }, { char: "线", pinyin: "xiàn" }, { char: "的", pinyin: "de" }, { char: "珍", pinyin: "zhēn" }, { char: "珠", pinyin: "zhū" }, { char: "一", pinyin: "yī" }, { char: "样", pinyin: "yàng" }, { char: "掉", pinyin: "diào" }, { char: "下", pinyin: "xià" }, { char: "来", pinyin: "lái" }]
  },
  "类": {
    pinyin: "lèi",
    structure: "上下结构",
    composition: "米 + 大",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "大", pinyin: "dà" }],
    memoryTip: "米字加大字，人类分类。",
    words: [{ word: "人类", pinyin: "rén lèi" }, { word: "分类", pinyin: "fēn lèi" }],
    sentenceData: [{ char: "人", pinyin: "rén" }, { char: "类", pinyin: "lèi" }, { char: "要", pinyin: "yào" }, { char: "保", pinyin: "bǎo" }, { char: "护", pinyin: "hù" }, { char: "地", pinyin: "dì" }, { char: "球", pinyin: "qiú" }, { char: "的", pinyin: "de" }, { char: "环", pinyin: "huán" }, { char: "境", pinyin: "jìng" }]
  },
  "累": {
    pinyin: "lèi",
    structure: "上下结构",
    composition: "田 + 糸",
    compositionParts: [{ char: "田", pinyin: "tián" }, { char: "糸", pinyin: "mì" }],
    memoryTip: "田字加糸字，劳累积累。",
    words: [{ word: "劳累", pinyin: "láo lèi" }, { word: "积累", pinyin: "jī lěi" }],
    sentenceData: [{ char: "工", pinyin: "gōng" }, { char: "作", pinyin: "zuò" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "天", pinyin: "tiān" }, { char: "他", pinyin: "tā" }, { char: "感", pinyin: "gǎn" }, { char: "到", pinyin: "dào" }, { char: "很", pinyin: "hěn" }, { char: "累", pinyin: "lèi" }]
  },
  "冷": {
    pinyin: "lěng",
    structure: "左右结构",
    composition: "冫 + 令",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "令", pinyin: "lìng" }],
    memoryTip: "两点水加令，寒冷冷静。",
    words: [{ word: "寒冷", pinyin: "hán lěng" }, { word: "冷静", pinyin: "lěng jìng" }],
    sentenceData: [{ char: "冬", pinyin: "dōng" }, { char: "天", pinyin: "tiān" }, { char: "天", pinyin: "tiān" }, { char: "气", pinyin: "qì" }, { char: "很", pinyin: "hěn" }, { char: "冷", pinyin: "lěng" }, { char: "要", pinyin: "yào" }, { char: "多", pinyin: "duō" }, { char: "穿", pinyin: "chuān" }, { char: "衣", pinyin: "yī" }, { char: "服", pinyin: "fu" }]
  },
  "愣": {
    pinyin: "lèng",
    structure: "左右结构",
    composition: "忄 + 楞",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "楞", pinyin: "léng" }],
    memoryTip: "竖心旁加楞，发愣愣住。",
    words: [{ word: "发愣", pinyin: "fā lèng" }, { word: "愣住", pinyin: "lèng zhù" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "听", pinyin: "tīng" }, { char: "到", pinyin: "dào" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "消", pinyin: "xiāo" }, { char: "息", pinyin: "xi" }, { char: "愣", pinyin: "lèng" }, { char: "住", pinyin: "zhù" }, { char: "了", pinyin: "le" }]
  },
  "厘": {
    pinyin: "lí",
    structure: "半包围结构",
    composition: "厂 + 里",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "里", pinyin: "lǐ" }],
    memoryTip: "厂字旁加里，厘米毫厘。",
    words: [{ word: "厘米", pinyin: "lí mǐ" }, { word: "毫厘", pinyin: "háo lí" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "根", pinyin: "gēn" }, { char: "绳", pinyin: "shéng" }, { char: "子", pinyin: "zi" }, { char: "长", pinyin: "cháng" }, { char: "三", pinyin: "sān" }, { char: "十", pinyin: "shí" }, { char: "厘", pinyin: "lí" }, { char: "米", pinyin: "mǐ" }]
  },
  "梨": {
    pinyin: "lí",
    structure: "上下结构",
    composition: "利 + 木",
    compositionParts: [{ char: "利", pinyin: "lì" }, { char: "木", pinyin: "mù" }],
    memoryTip: "利字加木字，梨树梨花。",
    words: [{ word: "梨树", pinyin: "lí shù" }, { word: "梨花", pinyin: "lí huā" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "梨", pinyin: "lí" }, { char: "花", pinyin: "huā" }, { char: "盛", pinyin: "shèng" }, { char: "开", pinyin: "kāi" }, { char: "像", pinyin: "xiàng" }, { char: "白", pinyin: "bái" }, { char: "雪", pinyin: "xuě" }, { char: "一", pinyin: "yī" }, { char: "样", pinyin: "yàng" }]
  },
  "离": {
    pinyin: "lí",
    structure: "上下结构",
    composition: "亠 + 凶 + 禸",
    compositionParts: [{ char: "亠", pinyin: "" }, { char: "凶", pinyin: "xiōng" }, { char: "禸", pinyin: "" }],
    memoryTip: "文字头加凶禸，离开距离。",
    words: [{ word: "离开", pinyin: "lí kāi" }, { word: "距离", pinyin: "jù lí" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "离", pinyin: "lí" }, { char: "开", pinyin: "kāi" }, { char: "这", pinyin: "zhè" }, { char: "里", pinyin: "lǐ" }, { char: "了", pinyin: "le" }]
  },
  "犁": {
    pinyin: "lí",
    structure: "上下结构",
    composition: "利 + 牛",
    compositionParts: [{ char: "利", pinyin: "lì" }, { char: "牛", pinyin: "niú" }],
    memoryTip: "利字加牛字，犁地犁田。",
    words: [{ word: "犁地", pinyin: "lí dì" }, { word: "犁田", pinyin: "lí tián" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "用", pinyin: "yòng" }, { char: "犁", pinyin: "lí" }, { char: "耕", pinyin: "gēng" }, { char: "地", pinyin: "dì" }, { char: "准", pinyin: "zhǔn" }, { char: "备", pinyin: "bèi" }, { char: "播", pinyin: "bō" }, { char: "种", pinyin: "zhǒng" }]
  },
  "璃": {
    pinyin: "lí",
    structure: "左右结构",
    composition: "王 + 离",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "离", pinyin: "lí" }],
    memoryTip: "王字旁加离，玻璃琉璃。",
    words: [{ word: "玻璃", pinyin: "bō lí" }, { word: "琉璃", pinyin: "liú lí" }],
    sentenceData: [{ char: "玻", pinyin: "bō" }, { char: "璃", pinyin: "lí" }, { char: "窗", pinyin: "chuāng" }, { char: "擦", pinyin: "cā" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "干", pinyin: "gān" }, { char: "净", pinyin: "jìng" }]
  },
  "黎": {
    pinyin: "lí",
    structure: "上下结构",
    composition: "黍 + 氺",
    compositionParts: [{ char: "黍", pinyin: "shǔ" }, { char: "氺", pinyin: "" }],
    memoryTip: "黍字加水字，黎明黎民。",
    words: [{ word: "黎明", pinyin: "lí míng" }, { word: "黎民", pinyin: "lí mín" }],
    sentenceData: [{ char: "黎", pinyin: "lí" }, { char: "明", pinyin: "míng" }, { char: "时", pinyin: "shí" }, { char: "分", pinyin: "fēn" }, { char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "中", pinyin: "zhōng" }, { char: "出", pinyin: "chū" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "一", pinyin: "yī" }, { char: "道", pinyin: "dào" }, { char: "曙", pinyin: "shǔ" }, { char: "光", pinyin: "guāng" }]
  },
  "礼": {
    pinyin: "lǐ",
    structure: "左右结构",
    composition: "礻 + 乚",
    compositionParts: [{ char: "礻", pinyin: "shì" }, { char: "乚", pinyin: "" }],
    memoryTip: "示字旁加乚，礼貌礼节。",
    words: [{ word: "礼貌", pinyin: "lǐ mào" }, { word: "礼节", pinyin: "lǐ jié" }],
    sentenceData: [{ char: "小", pinyin: "xiǎo" }, { char: "朋", pinyin: "péng" }, { char: "友", pinyin: "you" }, { char: "要", pinyin: "yào" }, { char: "讲", pinyin: "jiǎng" }, { char: "文", pinyin: "wén" }, { char: "明", pinyin: "míng" }, { char: "懂", pinyin: "dǒng" }, { char: "礼", pinyin: "lǐ" }, { char: "貌", pinyin: "mào" }]
  },
  "李": {
    pinyin: "lǐ",
    structure: "上下结构",
    composition: "木 + 子",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "子", pinyin: "zǐ" }],
    memoryTip: "木字加子字，李子李树。",
    words: [{ word: "李子", pinyin: "lǐ zi" }, { word: "李树", pinyin: "lǐ shù" }],
    sentenceData: [{ char: "李", pinyin: "lǐ" }, { char: "子", pinyin: "zi" }, { char: "树", pinyin: "shù" }, { char: "上", pinyin: "shàng" }, { char: "结", pinyin: "jié" }, { char: "满", pinyin: "mǎn" }, { char: "了", pinyin: "le" }, { char: "果", pinyin: "guǒ" }, { char: "实", pinyin: "shí" }]
  },
  "里": {
    pinyin: "lǐ",
    structure: "上下结构",
    composition: "田 + 土",
    compositionParts: [{ char: "田", pinyin: "tián" }, { char: "土", pinyin: "tǔ" }],
    memoryTip: "田字加土字，里面公里。",
    words: [{ word: "里面", pinyin: "lǐ miàn" }, { word: "公里", pinyin: "gōng lǐ" }],
    sentenceData: [{ char: "学", pinyin: "xué" }, { char: "校", pinyin: "xiào" }, { char: "里", pinyin: "lǐ" }, { char: "面", pinyin: "miàn" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }]
  },
  "哩": {
    pinyin: "li",
    structure: "左右结构",
    composition: "口 + 里",
    compositionParts: [{ char: "口", pinyin: "kǒu" }, { char: "里", pinyin: "lǐ" }],
    memoryTip: "口字旁加里，好哩叽哩。",
    words: [{ word: "好哩", pinyin: "hǎo li" }, { word: "叽哩", pinyin: "jī li" }],
    sentenceData: [{ char: "好", pinyin: "hǎo" }, { char: "哩", pinyin: "li" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "快", pinyin: "kuài" }, { char: "点", pinyin: "diǎn" }, { char: "出", pinyin: "chū" }, { char: "发", pinyin: "fā" }, { char: "吧", pinyin: "ba" }]
  },
  "理": {
    pinyin: "lǐ",
    structure: "左右结构",
    composition: "王 + 里",
    compositionParts: [{ char: "王", pinyin: "wáng" }, { char: "里", pinyin: "lǐ" }],
    memoryTip: "王字旁加里，道理理想。",
    words: [{ word: "道理", pinyin: "dào lǐ" }, { word: "理想", pinyin: "lǐ xiǎng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "道", pinyin: "dào" }, { char: "理", pinyin: "lǐ" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "都", pinyin: "dōu" }, { char: "要", pinyin: "yào" }, { char: "明", pinyin: "míng" }, { char: "白", pinyin: "bái" }]
  },
  "鲤": {
    pinyin: "lǐ",
    structure: "左右结构",
    composition: "鱼 + 里",
    compositionParts: [{ char: "鱼", pinyin: "yú" }, { char: "里", pinyin: "lǐ" }],
    memoryTip: "鱼字旁加里，鲤鱼锦鲤。",
    words: [{ word: "鲤鱼", pinyin: "lǐ yú" }, { word: "锦鲤", pinyin: "jǐn lǐ" }],
    sentenceData: [{ char: "池", pinyin: "chí" }, { char: "塘", pinyin: "táng" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "鲤", pinyin: "lǐ" }, { char: "鱼", pinyin: "yú" }, { char: "在", pinyin: "zài" }, { char: "水", pinyin: "shuǐ" }, { char: "中", pinyin: "zhōng" }, { char: "自", pinyin: "zì" }, { char: "由", pinyin: "yóu" }, { char: "地", pinyin: "de" }, { char: "游", pinyin: "yóu" }, { char: "动", pinyin: "dòng" }]
  },
  "力": {
    pinyin: "lì",
    structure: "独体字",
    composition: "力",
    compositionParts: [{ char: "力", pinyin: "lì" }],
    memoryTip: "横折钩加撇，力量力气。",
    words: [{ word: "力量", pinyin: "lì liàng" }, { word: "力气", pinyin: "lì qi" }],
    sentenceData: [{ char: "团", pinyin: "tuán" }, { char: "结", pinyin: "jié" }, { char: "就", pinyin: "jiù" }, { char: "是", pinyin: "shì" }, { char: "力", pinyin: "lì" }, { char: "量", pinyin: "liàng" }]
  },
  "厉": {
    pinyin: "lì",
    structure: "半包围结构",
    composition: "厂 + 万",
    compositionParts: [{ char: "厂", pinyin: "chǎng" }, { char: "万", pinyin: "wàn" }],
    memoryTip: "厂字加万字，严厉厉害。",
    words: [{ word: "严厉", pinyin: "yán lì" }, { word: "厉害", pinyin: "lì hai" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "对", pinyin: "duì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "很", pinyin: "hěn" }, { char: "严", pinyin: "yán" }, { char: "厉", pinyin: "lì" }]
  },
  "立": {
    pinyin: "lì",
    structure: "独体字",
    composition: "立",
    compositionParts: [{ char: "立", pinyin: "lì" }],
    memoryTip: "一点一横加两点，立正站立。",
    words: [{ word: "立正", pinyin: "lì zhèng" }, { word: "站立", pinyin: "zhàn lì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "立", pinyin: "lì" }, { char: "正", pinyin: "zhèng" }, { char: "站", pinyin: "zhàn" }, { char: "好", pinyin: "hǎo" }]
  },
  "丽": {
    pinyin: "lì",
    structure: "上下结构",
    composition: "一 + 丶 + 丿 + 丶",
    compositionParts: [{ char: "丽", pinyin: "lì" }],
    memoryTip: "美丽的丽，秀丽华丽。",
    words: [{ word: "美丽", pinyin: "měi lì" }, { word: "秀丽", pinyin: "xiù lì" }],
    sentenceData: [{ char: "春", pinyin: "chūn" }, { char: "天", pinyin: "tiān" }, { char: "的", pinyin: "de" }, { char: "花", pinyin: "huā" }, { char: "儿", pinyin: "ér" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }, { char: "丽", pinyin: "lì" }]
  },
  "利": {
    pinyin: "lì",
    structure: "左右结构",
    composition: "禾 + 刂",
    compositionParts: [{ char: "禾", pinyin: "hé" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "禾木旁加立刀，利益锋利。",
    words: [{ word: "利益", pinyin: "lì yì" }, { word: "锋利", pinyin: "fēng lì" }],
    sentenceData: [{ char: "做", pinyin: "zuò" }, { char: "事", pinyin: "shì" }, { char: "要", pinyin: "yào" }, { char: "考", pinyin: "kǎo" }, { char: "虑", pinyin: "lǜ" }, { char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "的", pinyin: "de" }, { char: "利", pinyin: "lì" }, { char: "益", pinyin: "yì" }]
  },
  "励": {
    pinyin: "lì",
    structure: "左右结构",
    composition: "厉 + 力",
    compositionParts: [{ char: "厉", pinyin: "lì" }, { char: "力", pinyin: "lì" }],
    memoryTip: "厉字加力字，鼓励奖励。",
    words: [{ word: "鼓励", pinyin: "gǔ lì" }, { word: "奖励", pinyin: "jiǎng lì" }],
    sentenceData: [{ char: "老", pinyin: "lǎo" }, { char: "师", pinyin: "shī" }, { char: "鼓", pinyin: "gǔ" }, { char: "励", pinyin: "lì" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "努", pinyin: "nǔ" }, { char: "力", pinyin: "lì" }, { char: "学", pinyin: "xué" }, { char: "习", pinyin: "xí" }]
  },
  "例": {
    pinyin: "lì",
    structure: "左右结构",
    composition: "亻 + 列",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "列", pinyin: "liè" }],
    memoryTip: "单人旁加列，例子例如。",
    words: [{ word: "例子", pinyin: "lì zi" }, { word: "例如", pinyin: "lì rú" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "例", pinyin: "lì" }, { char: "子", pinyin: "zi" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }, { char: "地", pinyin: "dì" }, { char: "说", pinyin: "shuō" }, { char: "明", pinyin: "míng" }, { char: "了", pinyin: "le" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }]
  },
  "隶": {
    pinyin: "lì",
    structure: "独体字",
    composition: "隶",
    compositionParts: [{ char: "隶", pinyin: "lì" }],
    memoryTip: "隶书的隶，奴隶隶属。",
    words: [{ word: "奴隶", pinyin: "nú lì" }, { word: "隶属", pinyin: "lì shǔ" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "奴", pinyin: "nú" }, { char: "隶", pinyin: "lì" }]
  },
  "粒": {
    pinyin: "lì",
    structure: "左右结构",
    composition: "米 + 立",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "立", pinyin: "lì" }],
    memoryTip: "米字旁加立，颗粒米粒。",
    words: [{ word: "颗粒", pinyin: "kē lì" }, { word: "米粒", pinyin: "mǐ lì" }],
    sentenceData: [{ char: "每", pinyin: "měi" }, { char: "一", pinyin: "yī" }, { char: "粒", pinyin: "lì" }, { char: "粮", pinyin: "liáng" }, { char: "食", pinyin: "shí" }, { char: "都", pinyin: "dōu" }, { char: "来", pinyin: "lái" }, { char: "之", pinyin: "zhī" }, { char: "不", pinyin: "bù" }, { char: "易", pinyin: "yì" }]
  },
  "莉": {
    pinyin: "lì",
    structure: "上下结构",
    composition: "艹 + 利",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "利", pinyin: "lì" }],
    memoryTip: "草字头加利，茉莉莉香。",
    words: [{ word: "茉莉", pinyin: "mò lì" }, { word: "莉香", pinyin: "lì xiāng" }],
    sentenceData: [{ char: "茉", pinyin: "mò" }, { char: "莉", pinyin: "lì" }, { char: "花", pinyin: "huā" }, { char: "开", pinyin: "kāi" }, { char: "了", pinyin: "le" }, { char: "满", pinyin: "mǎn" }, { char: "院", pinyin: "yuàn" }, { char: "子", pinyin: "zi" }, { char: "都", pinyin: "dōu" }, { char: "是", pinyin: "shì" }, { char: "香", pinyin: "xiāng" }, { char: "味", pinyin: "wèi" }]
  },
  "俩": {
    pinyin: "liǎ",
    structure: "左右结构",
    composition: "亻 + 两",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "两", pinyin: "liǎng" }],
    memoryTip: "单人旁加两，咱俩俩个。",
    words: [{ word: "咱俩", pinyin: "zán liǎ" }, { word: "俩个", pinyin: "liǎ gè" }],
    sentenceData: [{ char: "咱", pinyin: "zán" }, { char: "俩", pinyin: "liǎ" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "去", pinyin: "qù" }, { char: "上", pinyin: "shàng" }, { char: "学", pinyin: "xué" }, { char: "吧", pinyin: "ba" }]
  },
  "连": {
    pinyin: "lián",
    structure: "半包围结构",
    composition: "辶 + 车",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "车", pinyin: "chē" }],
    memoryTip: "走之旁加车，连接连续。",
    words: [{ word: "连接", pinyin: "lián jiē" }, { word: "连续", pinyin: "lián xù" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "两", pinyin: "liǎng" }, { char: "个", pinyin: "gè" }, { char: "地", pinyin: "dì" }, { char: "方", pinyin: "fāng" }, { char: "被", pinyin: "bèi" }, { char: "一", pinyin: "yī" }, { char: "条", pinyin: "tiáo" }, { char: "路", pinyin: "lù" }, { char: "连", pinyin: "lián" }, { char: "接", pinyin: "jiē" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }]
  },
  "帘": {
    pinyin: "lián",
    structure: "上下结构",
    composition: "穴 + 巾",
    compositionParts: [{ char: "穴", pinyin: "xué" }, { char: "巾", pinyin: "jīn" }],
    memoryTip: "穴字头加巾，窗帘门帘。",
    words: [{ word: "窗帘", pinyin: "chuāng lián" }, { word: "门帘", pinyin: "mén lián" }],
    sentenceData: [{ char: "窗", pinyin: "chuāng" }, { char: "帘", pinyin: "lián" }, { char: "被", pinyin: "bèi" }, { char: "风", pinyin: "fēng" }, { char: "吹", pinyin: "chuī" }, { char: "得", pinyin: "de" }, { char: "飘", pinyin: "piāo" }, { char: "起", pinyin: "qǐ" }, { char: "来", pinyin: "lái" }]
  },
  "怜": {
    pinyin: "lián",
    structure: "左右结构",
    composition: "忄 + 令",
    compositionParts: [{ char: "忄", pinyin: "xīn" }, { char: "令", pinyin: "lìng" }],
    memoryTip: "竖心旁加令，可怜怜悯。",
    words: [{ word: "可怜", pinyin: "kě lián" }, { word: "怜悯", pinyin: "lián mǐn" }],
    sentenceData: [{ char: "那", pinyin: "nà" }, { char: "个", pinyin: "gè" }, { char: "小", pinyin: "xiǎo" }, { char: "孩", pinyin: "hái" }, { char: "很", pinyin: "hěn" }, { char: "可", pinyin: "kě" }, { char: "怜", pinyin: "lián" }, { char: "，", pinyin: "" }, { char: "没", pinyin: "méi" }, { char: "人", pinyin: "rén" }, { char: "照", pinyin: "zhào" }, { char: "顾", pinyin: "gù" }]
  },
  "莲": {
    pinyin: "lián",
    structure: "上下结构",
    composition: "艹 + 连",
    compositionParts: [{ char: "艹", pinyin: "cǎo" }, { char: "连", pinyin: "lián" }],
    memoryTip: "草字头加连，莲花莲蓬。",
    words: [{ word: "莲花", pinyin: "lián huā" }, { word: "莲蓬", pinyin: "lián peng" }],
    sentenceData: [{ char: "池", pinyin: "chí" }, { char: "塘", pinyin: "táng" }, { char: "里", pinyin: "lǐ" }, { char: "的", pinyin: "de" }, { char: "莲", pinyin: "lián" }, { char: "花", pinyin: "huā" }, { char: "开", pinyin: "kāi" }, { char: "得", pinyin: "de" }, { char: "很", pinyin: "hěn" }, { char: "美", pinyin: "měi" }]
  },
  "联": {
    pinyin: "lián",
    structure: "左右结构",
    composition: "耳 + 关",
    compositionParts: [{ char: "耳", pinyin: "ěr" }, { char: "关", pinyin: "guān" }],
    memoryTip: "耳字旁加关，联合联系。",
    words: [{ word: "联合", pinyin: "lián hé" }, { word: "联系", pinyin: "lián xì" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "加", pinyin: "jiā" }, { char: "强", pinyin: "qiáng" }, { char: "联", pinyin: "lián" }, { char: "系", pinyin: "xì" }, { char: "，", pinyin: "" }, { char: "互", pinyin: "hù" }, { char: "相", pinyin: "xiāng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }]
  },
  "廉": {
    pinyin: "lián",
    structure: "半包围结构",
    composition: "广 + 兼",
    compositionParts: [{ char: "广", pinyin: "guǎng" }, { char: "兼", pinyin: "jiān" }],
    memoryTip: "广字旁加兼，廉洁廉价。",
    words: [{ word: "廉洁", pinyin: "lián jié" }, { word: "廉价", pinyin: "lián jià" }],
    sentenceData: [{ char: "为", pinyin: "wéi" }, { char: "官", pinyin: "guān" }, { char: "要", pinyin: "yào" }, { char: "清", pinyin: "qīng" }, { char: "正", pinyin: "zhèng" }, { char: "廉", pinyin: "lián" }, { char: "洁", pinyin: "jié" }, { char: "，", pinyin: "" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "贪", pinyin: "tān" }, { char: "污", pinyin: "wū" }, { char: "受", pinyin: "shòu" }, { char: "贿", pinyin: "huì" }]
  },
  "脸": {
    pinyin: "liǎn",
    structure: "左右结构",
    composition: "月 + 佥",
    compositionParts: [{ char: "月", pinyin: "yuè" }, { char: "佥", pinyin: "qiān" }],
    memoryTip: "月字旁加佥，脸面脸色。",
    words: [{ word: "脸面", pinyin: "liǎn miàn" }, { word: "脸色", pinyin: "liǎn sè" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "脸", pinyin: "liǎn" }, { char: "上", pinyin: "shàng" }, { char: "露", pinyin: "lù" }, { char: "出", pinyin: "chū" }, { char: "了", pinyin: "le" }, { char: "笑", pinyin: "xiào" }, { char: "容", pinyin: "róng" }]
  },
  "练": {
    pinyin: "liàn",
    structure: "左右结构",
    composition: "纟 + 柬",
    compositionParts: [{ char: "纟", pinyin: "sī" }, { char: "柬", pinyin: "jiǎn" }],
    memoryTip: "绞丝旁加柬，练习训练。",
    words: [{ word: "练习", pinyin: "liàn xí" }, { word: "训练", pinyin: "xùn liàn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "要", pinyin: "yào" }, { char: "好", pinyin: "hǎo" }, { char: "好", pinyin: "hǎo" }, { char: "练", pinyin: "liàn" }, { char: "习", pinyin: "xí" }, { char: "，", pinyin: "" }, { char: "才", pinyin: "cái" }, { char: "能", pinyin: "néng" }, { char: "学", pinyin: "xué" }, { char: "好", pinyin: "hǎo" }, { char: "本", pinyin: "běn" }, { char: "领", pinyin: "lǐng" }]
  },
  "炼": {
    pinyin: "liàn",
    structure: "左右结构",
    composition: "火 + 柬",
    compositionParts: [{ char: "火", pinyin: "huǒ" }, { char: "柬", pinyin: "jiǎn" }],
    memoryTip: "火字旁加柬，锻炼炼钢。",
    words: [{ word: "锻炼", pinyin: "duàn liàn" }, { word: "炼钢", pinyin: "liàn gāng" }],
    sentenceData: [{ char: "坚", pinyin: "jiān" }, { char: "持", pinyin: "chí" }, { char: "锻", pinyin: "duàn" }, { char: "炼", pinyin: "liàn" }, { char: "，", pinyin: "" }, { char: "身", pinyin: "shēn" }, { char: "体", pinyin: "tǐ" }, { char: "会", pinyin: "huì" }, { char: "更", pinyin: "gèng" }, { char: "健", pinyin: "jiàn" }, { char: "康", pinyin: "kāng" }]
  },
  "恋": {
    pinyin: "liàn",
    structure: "上下结构",
    composition: "亦 + 心",
    compositionParts: [{ char: "亦", pinyin: "yì" }, { char: "心", pinyin: "xīn" }],
    memoryTip: "亦字加心字，恋爱留恋。",
    words: [{ word: "恋爱", pinyin: "liàn ài" }, { word: "留恋", pinyin: "liú liàn" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "们", pinyin: "men" }, { char: "在", pinyin: "zài" }, { char: "谈", pinyin: "tán" }, { char: "恋", pinyin: "liàn" }, { char: "爱", pinyin: "ài" }, { char: "，", pinyin: "" }, { char: "感", pinyin: "gǎn" }, { char: "情", pinyin: "qíng" }, { char: "很", pinyin: "hěn" }, { char: "好", pinyin: "hǎo" }]
  },
  "链": {
    pinyin: "liàn",
    structure: "左右结构",
    composition: "钅 + 连",
    compositionParts: [{ char: "钅", pinyin: "jīn" }, { char: "连", pinyin: "lián" }],
    memoryTip: "金字旁加连，链条铁链。",
    words: [{ word: "链条", pinyin: "liàn tiáo" }, { word: "铁链", pinyin: "tiě liàn" }],
    sentenceData: [{ char: "自", pinyin: "zì" }, { char: "行", pinyin: "xíng" }, { char: "车", pinyin: "chē" }, { char: "的", pinyin: "de" }, { char: "链", pinyin: "liàn" }, { char: "条", pinyin: "tiáo" }, { char: "断", pinyin: "duàn" }, { char: "了", pinyin: "le" }, { char: "，", pinyin: "" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "修", pinyin: "xiū" }, { char: "理", pinyin: "lǐ" }]
  },
  "良": {
    pinyin: "liáng",
    structure: "独体字",
    composition: "良",
    compositionParts: [{ char: "良", pinyin: "liáng" }],
    memoryTip: "点加艮字，良好优良。",
    words: [{ word: "良好", pinyin: "liáng hǎo" }, { word: "优良", pinyin: "yōu liáng" }],
    sentenceData: [{ char: "他", pinyin: "tā" }, { char: "的", pinyin: "de" }, { char: "表", pinyin: "biǎo" }, { char: "现", pinyin: "xiàn" }, { char: "很", pinyin: "hěn" }, { char: "良", pinyin: "liáng" }, { char: "好", pinyin: "hǎo" }, { char: "，", pinyin: "" }, { char: "得", pinyin: "dé" }, { char: "到", pinyin: "dào" }, { char: "了", pinyin: "le" }, { char: "表", pinyin: "biǎo" }, { char: "扬", pinyin: "yáng" }]
  },
  "凉": {
    pinyin: "liáng",
    structure: "左右结构",
    composition: "冫 + 京",
    compositionParts: [{ char: "冫", pinyin: "bīng" }, { char: "京", pinyin: "jīng" }],
    memoryTip: "两点水加京，凉快凉爽。",
    words: [{ word: "凉快", pinyin: "liáng kuai" }, { word: "凉爽", pinyin: "liáng shuǎng" }],
    sentenceData: [{ char: "夏", pinyin: "xià" }, { char: "天", pinyin: "tiān" }, { char: "吃", pinyin: "chī" }, { char: "西", pinyin: "xī" }, { char: "瓜", pinyin: "guā" }, { char: "很", pinyin: "hěn" }, { char: "凉", pinyin: "liáng" }, { char: "快", pinyin: "kuai" }]
  },
  "梁": {
    pinyin: "liáng",
    structure: "上下结构",
    composition: "氵 + 刃 + 木",
    compositionParts: [{ char: "氵", pinyin: "shuǐ" }, { char: "刃", pinyin: "rèn" }, { char: "木", pinyin: "mù" }],
    memoryTip: "三点水加刃木，桥梁屋梁。",
    words: [{ word: "桥梁", pinyin: "qiáo liáng" }, { word: "屋梁", pinyin: "wū liáng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "座", pinyin: "zuò" }, { char: "桥", pinyin: "qiáo" }, { char: "梁", pinyin: "liáng" }, { char: "很", pinyin: "hěn" }, { char: "宏", pinyin: "hóng" }, { char: "伟", pinyin: "wěi" }, { char: "，", pinyin: "" }, { char: "连", pinyin: "lián" }, { char: "接", pinyin: "jiē" }, { char: "着", pinyin: "zhe" }, { char: "两", pinyin: "liǎng" }, { char: "岸", pinyin: "àn" }]
  },
  "粮": {
    pinyin: "liáng",
    structure: "左右结构",
    composition: "米 + 良",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "良", pinyin: "liáng" }],
    memoryTip: "米字旁加良，粮食粮库。",
    words: [{ word: "粮食", pinyin: "liáng shi" }, { word: "粮库", pinyin: "liáng kù" }],
    sentenceData: [{ char: "农", pinyin: "nóng" }, { char: "民", pinyin: "mín" }, { char: "伯", pinyin: "bó" }, { char: "伯", pinyin: "bo" }, { char: "把", pinyin: "bǎ" }, { char: "粮", pinyin: "liáng" }, { char: "食", pinyin: "shi" }, { char: "卖", pinyin: "mài" }, { char: "给", pinyin: "gěi" }, { char: "了", pinyin: "le" }, { char: "国", pinyin: "guó" }, { char: "家", pinyin: "jiā" }]
  },
  "两": {
    pinyin: "liǎng",
    structure: "独体字",
    composition: "两",
    compositionParts: [{ char: "两", pinyin: "liǎng" }],
    memoryTip: "一横加两个人，两个两位。",
    words: [{ word: "两个", pinyin: "liǎng gè" }, { word: "两位", pinyin: "liǎng wèi" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "班", pinyin: "bān" }, { char: "有", pinyin: "yǒu" }, { char: "两", pinyin: "liǎng" }, { char: "个", pinyin: "gè" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "请", pinyin: "qǐng" }, { char: "假", pinyin: "jià" }, { char: "了", pinyin: "le" }]
  },
  "亮": {
    pinyin: "liàng",
    structure: "上下结构",
    composition: "亠 + 口 + 冗",
    compositionParts: [{ char: "亠", pinyin: "" }, { char: "口", pinyin: "kǒu" }, { char: "冗", pinyin: "rǒng" }],
    memoryTip: "文字头加口冗，明亮漂亮。",
    words: [{ word: "明亮", pinyin: "míng liàng" }, { word: "漂亮", pinyin: "piào liang" }],
    sentenceData: [{ char: "天", pinyin: "tiān" }, { char: "空", pinyin: "kōng" }, { char: "中", pinyin: "zhōng" }, { char: "的", pinyin: "de" }, { char: "星", pinyin: "xīng" }, { char: "星", pinyin: "xing" }, { char: "很", pinyin: "hěn" }, { char: "明", pinyin: "míng" }, { char: "亮", pinyin: "liàng" }]
  },
  "辆": {
    pinyin: "liàng",
    structure: "左右结构",
    composition: "车 + 两",
    compositionParts: [{ char: "车", pinyin: "chē" }, { char: "两", pinyin: "liǎng" }],
    memoryTip: "车字旁加两，车辆一辆。",
    words: [{ word: "车辆", pinyin: "chē liàng" }, { word: "一辆", pinyin: "yí liàng" }],
    sentenceData: [{ char: "路", pinyin: "lù" }, { char: "上", pinyin: "shàng" }, { char: "有", pinyin: "yǒu" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "车", pinyin: "chē" }, { char: "辆", pinyin: "liàng" }, { char: "在", pinyin: "zài" }, { char: "行", pinyin: "xíng" }, { char: "驶", pinyin: "shǐ" }]
  },
  "量": {
    pinyin: "liàng",
    structure: "上下结构",
    composition: "旦 + 里",
    compositionParts: [{ char: "旦", pinyin: "dàn" }, { char: "里", pinyin: "lǐ" }],
    memoryTip: "旦字加里字，数量重量。",
    words: [{ word: "数量", pinyin: "shù liàng" }, { word: "重量", pinyin: "zhòng liàng" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "箱", pinyin: "xiāng" }, { char: "子", pinyin: "zi" }, { char: "的", pinyin: "de" }, { char: "重", pinyin: "zhòng" }, { char: "量", pinyin: "liàng" }, { char: "是", pinyin: "shì" }, { char: "多", pinyin: "duō" }, { char: "少", pinyin: "shǎo" }]
  },
  "辽": {
    pinyin: "liáo",
    structure: "半包围结构",
    composition: "辶 + 了",
    compositionParts: [{ char: "辶", pinyin: "chuò" }, { char: "了", pinyin: "liǎo" }],
    memoryTip: "走之旁加了，辽阔辽宁。",
    words: [{ word: "辽阔", pinyin: "liáo kuò" }, { word: "辽宁", pinyin: "liáo níng" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "草", pinyin: "cǎo" }, { char: "原", pinyin: "yuán" }, { char: "一", pinyin: "yī" }, { char: "望", pinyin: "wàng" }, { char: "无", pinyin: "wú" }, { char: "际", pinyin: "jì" }, { char: "，", pinyin: "" }, { char: "非", pinyin: "fēi" }, { char: "常", pinyin: "cháng" }, { char: "辽", pinyin: "liáo" }, { char: "阔", pinyin: "kuò" }]
  },
  "疗": {
    pinyin: "liáo",
    structure: "半包围结构",
    composition: "疒 + 了",
    compositionParts: [{ char: "疒", pinyin: "nè" }, { char: "了", pinyin: "liǎo" }],
    memoryTip: "病字旁加了，治疗疗效。",
    words: [{ word: "治疗", pinyin: "zhì liáo" }, { word: "疗效", pinyin: "liáo xiào" }],
    sentenceData: [{ char: "生", pinyin: "shēng" }, { char: "病", pinyin: "bìng" }, { char: "了", pinyin: "le" }, { char: "要", pinyin: "yào" }, { char: "及", pinyin: "jí" }, { char: "时", pinyin: "shí" }, { char: "治", pinyin: "zhì" }, { char: "疗", pinyin: "liáo" }, { char: "，", pinyin: "" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "拖", pinyin: "tuō" }, { char: "延", pinyin: "yán" }]
  },
  "聊": {
    pinyin: "liáo",
    structure: "左右结构",
    composition: "耳 + 卯",
    compositionParts: [{ char: "耳", pinyin: "ěr" }, { char: "卯", pinyin: "mǎo" }],
    memoryTip: "耳字旁加卯，聊天闲聊。",
    words: [{ word: "聊天", pinyin: "liáo tiān" }, { word: "闲聊", pinyin: "xián liáo" }],
    sentenceData: [{ char: "放", pinyin: "fàng" }, { char: "学", pinyin: "xué" }, { char: "后", pinyin: "hòu" }, { char: "，", pinyin: "" }, { char: "我", pinyin: "wǒ" }, { char: "们", pinyin: "men" }, { char: "经", pinyin: "jīng" }, { char: "常", pinyin: "cháng" }, { char: "一", pinyin: "yī" }, { char: "起", pinyin: "qǐ" }, { char: "聊", pinyin: "liáo" }, { char: "天", pinyin: "tiān" }]
  },
  "僚": {
    pinyin: "liáo",
    structure: "左右结构",
    composition: "亻 + 尞",
    compositionParts: [{ char: "亻", pinyin: "rén" }, { char: "尞", pinyin: "liáo" }],
    memoryTip: "单人旁加尞，官僚僚属。",
    words: [{ word: "官僚", pinyin: "guān liáo" }, { word: "僚属", pinyin: "liáo shǔ" }],
    sentenceData: [{ char: "古", pinyin: "gǔ" }, { char: "代", pinyin: "dài" }, { char: "的", pinyin: "de" }, { char: "官", pinyin: "guān" }, { char: "僚", pinyin: "liáo" }, { char: "系", pinyin: "xì" }, { char: "很", pinyin: "hěn" }, { char: "复", pinyin: "fù" }, { char: "杂", pinyin: "zá" }]
  },
  "了": {
    pinyin: "le",
    structure: "独体字",
    composition: "了",
    compositionParts: [{ char: "了", pinyin: "le" }],
    memoryTip: "横撇加竖钩，了解好了。",
    words: [{ word: "了解", pinyin: "liǎo jiě" }, { word: "好了", pinyin: "hǎo le" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "了", pinyin: "le" }, { char: "解", pinyin: "jiě" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "问", pinyin: "wèn" }, { char: "题", pinyin: "tí" }, { char: "了", pinyin: "le" }]
  },
  "料": {
    pinyin: "liào",
    structure: "左右结构",
    composition: "米 + 斗",
    compositionParts: [{ char: "米", pinyin: "mǐ" }, { char: "斗", pinyin: "dǒu" }],
    memoryTip: "米字旁加斗，材料原料。",
    words: [{ word: "材料", pinyin: "cái liào" }, { word: "原料", pinyin: "yuán liào" }],
    sentenceData: [{ char: "做", pinyin: "zuò" }, { char: "这", pinyin: "zhè" }, { char: "个", pinyin: "gè" }, { char: "实", pinyin: "shí" }, { char: "验", pinyin: "yàn" }, { char: "需", pinyin: "xū" }, { char: "要", pinyin: "yào" }, { char: "准", pinyin: "zhǔn" }, { char: "备", pinyin: "bèi" }, { char: "好", pinyin: "hǎo" }, { char: "材", pinyin: "cái" }, { char: "料", pinyin: "liào" }]
  },
  "列": {
    pinyin: "liè",
    structure: "左右结构",
    composition: "歹 + 刂",
    compositionParts: [{ char: "歹", pinyin: "dǎi" }, { char: "刂", pinyin: "dāo" }],
    memoryTip: "歹字旁加立刀，排列列车。",
    words: [{ word: "排列", pinyin: "pái liè" }, { word: "列车", pinyin: "liè chē" }],
    sentenceData: [{ char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "们", pinyin: "men" }, { char: "排", pinyin: "pái" }, { char: "列", pinyin: "liè" }, { char: "整", pinyin: "zhěng" }, { char: "齐", pinyin: "qí" }, { char: "地", pinyin: "dì" }, { char: "站", pinyin: "zhàn" }, { char: "在", pinyin: "zài" }, { char: "操", pinyin: "cāo" }, { char: "场", pinyin: "chǎng" }, { char: "上", pinyin: "shàng" }]
  },
  "劣": {
    pinyin: "liè",
    structure: "上下结构",
    composition: "少 + 力",
    compositionParts: [{ char: "少", pinyin: "shǎo" }, { char: "力", pinyin: "lì" }],
    memoryTip: "少字加力字，恶劣劣质。",
    words: [{ word: "恶劣", pinyin: "è liè" }, { word: "劣质", pinyin: "liè zhì" }],
    sentenceData: [{ char: "这", pinyin: "zhè" }, { char: "种", pinyin: "zhǒng" }, { char: "劣", pinyin: "liè" }, { char: "质", pinyin: "zhì" }, { char: "产", pinyin: "chǎn" }, { char: "品", pinyin: "pǐn" }, { char: "不", pinyin: "bù" }, { char: "能", pinyin: "néng" }, { char: "出", pinyin: "chū" }, { char: "售", pinyin: "shòu" }]
  },
  "烈": {
    pinyin: "liè",
    structure: "上下结构",
    composition: "列 + 灬",
    compositionParts: [{ char: "列", pinyin: "liè" }, { char: "灬", pinyin: "huǒ" }],
    memoryTip: "列字加四点，强烈热烈。",
    words: [{ word: "强烈", pinyin: "qiáng liè" }, { word: "热烈", pinyin: "rè liè" }],
    sentenceData: [{ char: "大", pinyin: "dà" }, { char: "家", pinyin: "jiā" }, { char: "热", pinyin: "rè" }, { char: "烈", pinyin: "liè" }, { char: "欢", pinyin: "huān" }, { char: "迎", pinyin: "yíng" }, { char: "新", pinyin: "xīn" }, { char: "同", pinyin: "tóng" }, { char: "学", pinyin: "xué" }, { char: "的", pinyin: "de" }, { char: "到", pinyin: "dào" }, { char: "来", pinyin: "lái" }]
  },
  "猎": {
    pinyin: "liè",
    structure: "左右结构",
    composition: "犭 + 昔",
    compositionParts: [{ char: "犭", pinyin: "quǎn" }, { char: "昔", pinyin: "xī" }],
    memoryTip: "反犬旁加昔，猎人打猎。",
    words: [{ word: "猎人", pinyin: "liè rén" }, { word: "打猎", pinyin: "dǎ liè" }],
    sentenceData: [{ char: "猎", pinyin: "liè" }, { char: "人", pinyin: "rén" }, { char: "带", pinyin: "dài" }, { char: "着", pinyin: "zhe" }, { char: "猎", pinyin: "liè" }, { char: "枪", pinyin: "qiāng" }, { char: "进", pinyin: "jìn" }, { char: "山", pinyin: "shān" }, { char: "林", pinyin: "lín" }]
  },
  "裂": {
    pinyin: "liè",
    structure: "上下结构",
    composition: "列 + 衣",
    compositionParts: [{ char: "列", pinyin: "liè" }, { char: "衣", pinyin: "yī" }],
    memoryTip: "列字加衣字，破裂分裂。",
    words: [{ word: "破裂", pinyin: "pò liè" }, { word: "分裂", pinyin: "fēn liè" }],
    sentenceData: [{ char: "地", pinyin: "dì" }, { char: "震", pinyin: "zhèn" }, { char: "后", pinyin: "hòu" }, { char: "，", pinyin: "" }, { char: "地", pinyin: "dì" }, { char: "面", pinyin: "miàn" }, { char: "出", pinyin: "chū" }, { char: "现", pinyin: "xiàn" }, { char: "了", pinyin: "le" }, { char: "很", pinyin: "hěn" }, { char: "多", pinyin: "duō" }, { char: "裂", pinyin: "liè" }, { char: "缝", pinyin: "fèng" }]
  },
  "邻": {
    pinyin: "lín",
    structure: "左右结构",
    composition: "令 + 阝",
    compositionParts: [{ char: "令", pinyin: "lìng" }, { char: "阝", pinyin: "yì" }],
    memoryTip: "令字加右耳，邻居邻近。",
    words: [{ word: "邻居", pinyin: "lín jū" }, { word: "邻近", pinyin: "lín jìn" }],
    sentenceData: [{ char: "我", pinyin: "wǒ" }, { char: "家", pinyin: "jiā" }, { char: "的", pinyin: "de" }, { char: "邻", pinyin: "lín" }, { char: "居", pinyin: "jū" }, { char: "很", pinyin: "hěn" }, { char: "热", pinyin: "rè" }, { char: "情", pinyin: "qíng" }, { char: "，", pinyin: "" }, { char: "常", pinyin: "cháng" }, { char: "帮", pinyin: "bāng" }, { char: "助", pinyin: "zhù" }, { char: "别", pinyin: "bié" }, { char: "人", pinyin: "rén" }]
  },
  "林": {
    pinyin: "lín",
    structure: "左右结构",
    composition: "木 + 木",
    compositionParts: [{ char: "木", pinyin: "mù" }, { char: "木", pinyin: "mù" }],
    memoryTip: "两个木字，树林森林。",
    words: [{ word: "树林", pinyin: "shù lín" }, { word: "森林", pinyin: "sēn lín" }],
    sentenceData: [{ char: "山", pinyin: "shān" }, { char: "上", pinyin: "shàng" }, { char: "的", pinyin: "de" }, { char: "树", pinyin: "shù" }, { char: "林", pinyin: "lín" }, { char: "郁", pinyin: "yù" }, { char: "郁", pinyin: "yu" }, { char: "葱", pinyin: "cōng" }, { char: "葱", pinyin: "cong" }, { char: "，", pinyin: "" }, { char: "空", pinyin: "kōng" }, { char: "气", pinyin: "qì" }, { char: "很", pinyin: "hěn" }, { char: "清", pinyin: "qīng" }, { char: "新", pinyin: "xīn" }]
  },
};
