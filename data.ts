import { Curriculum } from './types';

// In a real app, these would be fetched from separate JSON files.
export const APP_DATA: Curriculum[] = [
  {
    id: "renjiaoban",
    name: "人教版 (RJB)",
    grades: [
      {
        id: "g1-1",
        name: "一年级上册",
        units: [
          // --- 识字 (一) ---
          {
            id: "u1-1",
            name: "识字1 《天地人》",
            characters: [
              { char: "天", pinyin: "tiān" },
              { char: "地", pinyin: "dì" },
              { char: "人", pinyin: "rén" },
              { char: "你", pinyin: "nǐ" },
              { char: "我", pinyin: "wǒ" },
              { char: "他", pinyin: "tā" }
            ]
          },
          {
            id: "u1-2",
            name: "识字2 《金木水火土》",
            characters: [
              { char: "一", pinyin: "yī" },
              { char: "二", pinyin: "èr" },
              { char: "三", pinyin: "sān" },
              { char: "四", pinyin: "sì" },
              { char: "五", pinyin: "wǔ" },
              { char: "上", pinyin: "shàng" },
              { char: "下", pinyin: "xià" }
            ]
          },
          {
            id: "u1-3",
            name: "识字3 《口耳目》",
            characters: [
              { char: "口", pinyin: "kǒu" },
              { char: "耳", pinyin: "ěr" },
              { char: "目", pinyin: "mù" },
              { char: "手", pinyin: "shǒu" },
              { char: "足", pinyin: "zú" },
              { char: "站", pinyin: "zhàn" },
              { char: "坐", pinyin: "zuò" }
            ]
          },
          {
            id: "u1-4",
            name: "识字4 《日月水火》",
            characters: [
              { char: "日", pinyin: "rì" },
              { char: "月", pinyin: "yuè" },
              { char: "水", pinyin: "shuǐ" },
              { char: "火", pinyin: "huǒ" },
              { char: "山", pinyin: "shān" },
              { char: "石", pinyin: "shí" },
              { char: "田", pinyin: "tián" },
              { char: "禾", pinyin: "hé" }
            ]
          },
          {
            id: "u1-5",
            name: "识字5 《对韵歌》",
            characters: [
              { char: "对", pinyin: "duì" },
              { char: "云", pinyin: "yún" },
              { char: "雨", pinyin: "yǔ" },
              { char: "风", pinyin: "fēng" },
              { char: "花", pinyin: "huā" },
              { char: "鸟", pinyin: "niǎo" },
              { char: "虫", pinyin: "chóng" }
            ]
          },
          {
            id: "u1-garden1",
            name: "语文园地一",
            characters: [
              { char: "六", pinyin: "liù" },
              { char: "七", pinyin: "qī" },
              { char: "八", pinyin: "bā" },
              { char: "九", pinyin: "jiǔ" },
              { char: "十", pinyin: "shí" }
            ]
          },

          // --- 汉语拼音单元 (Pinyin Units) ---
          {
            id: "u-py-1",
            name: "汉语拼音 (3-5)",
            characters: [
              { char: "爸", pinyin: "bà" },
              { char: "妈", pinyin: "mā" },
              { char: "马", pinyin: "mǎ" },
              { char: "土", pinyin: "tǔ" },
              { char: "不", pinyin: "bù" },
              { char: "画", pinyin: "huà" },
              { char: "打", pinyin: "dǎ" }
            ]
          },
          {
            id: "u-py-2",
            name: "汉语拼音 (6-8)",
            characters: [
              { char: "棋", pinyin: "qí" },
              { char: "鸡", pinyin: "jī" },
              { char: "字", pinyin: "zì" },
              { char: "词", pinyin: "cí" },
              { char: "语", pinyin: "yǔ" },
              { char: "句", pinyin: "jù" },
              { char: "子", pinyin: "zi" },
              { char: "桌", pinyin: "zhuō" },
              { char: "纸", pinyin: "zhǐ" }
            ]
          },
          {
            id: "u1-garden2",
            name: "语文园地二",
            characters: [
              { char: "文", pinyin: "wén" },
              { char: "数", pinyin: "shù" },
              { char: "学", pinyin: "xué" },
              { char: "音", pinyin: "yīn" },
              { char: "乐", pinyin: "yuè" }
            ]
          },
          {
            id: "u-py-3",
            name: "汉语拼音 (9-11)",
            characters: [
              { char: "妹", pinyin: "mèi" },
              { char: "奶", pinyin: "nǎi" },
              { char: "小", pinyin: "xiǎo" },
              { char: "桥", pinyin: "qiáo" },
              { char: "台", pinyin: "tái" },
              { char: "雪", pinyin: "xuě" },
              { char: "儿", pinyin: "ér" }
            ]
          },
           {
            id: "u-py-4",
            name: "汉语拼音 (12-13)",
            characters: [
              { char: "白", pinyin: "bái" },
              { char: "草", pinyin: "cǎo" },
              { char: "家", pinyin: "jiā" },
              { char: "是", pinyin: "shì" },
              { char: "车", pinyin: "chē" },
              { char: "路", pinyin: "lù" },
              { char: "灯", pinyin: "dēng" },
              { char: "走", pinyin: "zǒu" }
            ]
          },

          // --- 课文 (一) ---
          {
            id: "u-txt-1",
            name: "课文1 《秋天》",
            characters: [
              { char: "秋", pinyin: "qiū" },
              { char: "气", pinyin: "qì" },
              { char: "了", pinyin: "le" },
              { char: "树", pinyin: "shù" },
              { char: "叶", pinyin: "yè" },
              { char: "片", pinyin: "piàn" },
              { char: "大", pinyin: "dà" },
              { char: "飞", pinyin: "fēi" },
              { char: "会", pinyin: "huì" },
              { char: "个", pinyin: "gè" }
            ]
          },
          {
            id: "u-txt-2",
            name: "课文2 《小小的船》",
            characters: [
              { char: "的", pinyin: "de" },
              { char: "船", pinyin: "chuán" },
              { char: "两", pinyin: "liǎng" },
              { char: "头", pinyin: "tóu" },
              { char: "在", pinyin: "zài" },
              { char: "里", pinyin: "lǐ" },
              { char: "看", pinyin: "kàn" },
              { char: "见", pinyin: "jiàn" },
              { char: "闪", pinyin: "shǎn" },
              { char: "星", pinyin: "xīng" }
            ]
          },
          {
            id: "u-txt-3",
            name: "课文3 《江南》",
            characters: [
              { char: "江", pinyin: "jiāng" },
              { char: "南", pinyin: "nán" },
              { char: "可", pinyin: "kě" },
              { char: "采", pinyin: "cǎi" },
              { char: "莲", pinyin: "lián" },
              { char: "鱼", pinyin: "yú" },
              { char: "东", pinyin: "dōng" },
              { char: "西", pinyin: "xī" },
              { char: "北", pinyin: "běi" }
            ]
          },
          {
            id: "u-txt-4",
            name: "课文4 《四季》",
            characters: [
              { char: "尖", pinyin: "jiān" },
              { char: "说", pinyin: "shuō" },
              { char: "春", pinyin: "chūn" },
              { char: "青", pinyin: "qīng" },
              { char: "蛙", pinyin: "wā" },
              { char: "夏", pinyin: "xià" },
              { char: "弯", pinyin: "wān" },
              { char: "皮", pinyin: "pí" },
              { char: "地", pinyin: "de" },
              { char: "冬", pinyin: "dōng" }
            ]
          },
          {
            id: "u1-garden4",
            name: "语文园地四",
            characters: [
              { char: "男", pinyin: "nán" },
              { char: "女", pinyin: "nǚ" },
              { char: "开", pinyin: "kāi" },
              { char: "关", pinyin: "guān" },
              { char: "正", pinyin: "zhèng" },
              { char: "反", pinyin: "fǎn" }
            ]
          },

          // --- 识字 (二) ---
          {
            id: "u2-6",
            name: "识字6 《画》",
            characters: [
              { char: "远", pinyin: "yuǎn" },
              { char: "有", pinyin: "yǒu" },
              { char: "色", pinyin: "sè" },
              { char: "近", pinyin: "jìn" },
              { char: "听", pinyin: "tīng" },
              { char: "无", pinyin: "wú" },
              { char: "声", pinyin: "shēng" },
              { char: "去", pinyin: "qù" },
              { char: "还", pinyin: "hái" },
              { char: "来", pinyin: "lái" }
            ]
          },
          {
            id: "u2-7",
            name: "识字7 《大小多少》",
            characters: [
              { char: "多", pinyin: "duō" },
              { char: "少", pinyin: "shǎo" },
              { char: "黄", pinyin: "huáng" },
              { char: "牛", pinyin: "niú" },
              { char: "只", pinyin: "zhī" },
              { char: "猫", pinyin: "māo" },
              { char: "边", pinyin: "biān" },
              { char: "鸭", pinyin: "yā" },
              { char: "苹", pinyin: "píng" },
              { char: "果", pinyin: "guǒ" },
              { char: "杏", pinyin: "xìng" },
              { char: "桃", pinyin: "táo" }
            ]
          },
          {
            id: "u2-8",
            name: "识字8 《小书包》",
            characters: [
              { char: "书", pinyin: "shū" },
              { char: "包", pinyin: "bāo" },
              { char: "尺", pinyin: "chǐ" },
              { char: "作", pinyin: "zuò" },
              { char: "业", pinyin: "yè" },
              { char: "本", pinyin: "běn" },
              { char: "笔", pinyin: "bǐ" },
              { char: "刀", pinyin: "dāo" },
              { char: "课", pinyin: "kè" },
              { char: "早", pinyin: "zǎo" },
              { char: "校", pinyin: "xiào" }
            ]
          },
          {
            id: "u2-9",
            name: "识字9 《日月明》",
            characters: [
              { char: "明", pinyin: "míng" },
              { char: "力", pinyin: "lì" },
              { char: "尘", pinyin: "chén" },
              { char: "从", pinyin: "cóng" },
              { char: "众", pinyin: "zhòng" },
              { char: "双", pinyin: "shuāng" },
              { char: "木", pinyin: "mù" },
              { char: "林", pinyin: "lín" },
              { char: "森", pinyin: "sēn" },
              { char: "条", pinyin: "tiáo" },
              { char: "心", pinyin: "xīn" }
            ]
          },
          {
            id: "u2-10",
            name: "识字10 《升国旗》",
            characters: [
              { char: "升", pinyin: "shēng" },
              { char: "国", pinyin: "guó" },
              { char: "旗", pinyin: "qí" },
              { char: "中", pinyin: "zhōng" },
              { char: "红", pinyin: "hóng" },
              { char: "歌", pinyin: "gē" },
              { char: "起", pinyin: "qǐ" },
              { char: "么", pinyin: "me" },
              { char: "美", pinyin: "měi" },
              { char: "丽", pinyin: "lì" },
              { char: "立", pinyin: "lì" }
            ]
          },
          {
            id: "u1-garden5",
            name: "语文园地五",
            characters: [
              { char: "午", pinyin: "wǔ" },
              { char: "晚", pinyin: "wǎn" },
              { char: "昨", pinyin: "zuó" },
              { char: "今", pinyin: "jīn" },
              { char: "年", pinyin: "nián" }
            ]
          },

          // --- 课文 (二) ---
          {
            id: "u-txt-5",
            name: "课文5 《影子》",
            characters: [
              { char: "影", pinyin: "yǐng" },
              { char: "前", pinyin: "qián" },
              { char: "后", pinyin: "hòu" },
              { char: "黑", pinyin: "hēi" },
              { char: "狗", pinyin: "gǒu" },
              { char: "左", pinyin: "zuǒ" },
              { char: "右", pinyin: "yòu" },
              { char: "它", pinyin: "tā" },
              { char: "好", pinyin: "hǎo" },
              { char: "朋", pinyin: "péng" },
              { char: "友", pinyin: "yǒu" }
            ]
          },
          {
            id: "u-txt-6",
            name: "课文6 《比尾巴》",
            characters: [
              { char: "比", pinyin: "bǐ" },
              { char: "尾", pinyin: "wěi" },
              { char: "巴", pinyin: "bā" },
              { char: "谁", pinyin: "shuí" },
              { char: "长", pinyin: "cháng" },
              { char: "短", pinyin: "duǎn" },
              { char: "把", pinyin: "bǎ" },
              { char: "伞", pinyin: "sǎn" },
              { char: "兔", pinyin: "tù" },
              { char: "最", pinyin: "zuì" },
              { char: "公", pinyin: "gōng" }
            ]
          },
          {
            id: "u-txt-7",
            name: "课文7 《青蛙写诗》",
            characters: [
              { char: "写", pinyin: "xiě" },
              { char: "诗", pinyin: "shī" },
              { char: "点", pinyin: "diǎn" },
              { char: "要", pinyin: "yào" },
              { char: "过", pinyin: "guò" },
              { char: "给", pinyin: "gěi" },
              { char: "当", pinyin: "dāng" },
              { char: "串", pinyin: "chuàn" },
              { char: "们", pinyin: "men" },
              { char: "以", pinyin: "yǐ" },
              { char: "成", pinyin: "chéng" }
            ]
          },
          {
            id: "u-txt-8",
            name: "课文8 《雨点儿》",
            characters: [
              { char: "数", pinyin: "shǔ" },
              { char: "彩", pinyin: "cǎi" },
              { char: "半", pinyin: "bàn" },
              { char: "空", pinyin: "kōng" },
              { char: "问", pinyin: "wèn" },
              { char: "到", pinyin: "dào" },
              { char: "方", pinyin: "fāng" },
              { char: "没", pinyin: "méi" },
              { char: "更", pinyin: "gèng" },
              { char: "绿", pinyin: "lǜ" },
              { char: "出", pinyin: "chū" },
              { char: "长", pinyin: "zhǎng" }
            ]
          },
          {
            id: "u-txt-9",
            name: "课文9 《明天要远足》",
            characters: [
              { char: "睡", pinyin: "shuì" },
              { char: "那", pinyin: "nà" },
              { char: "海", pinyin: "hǎi" },
              { char: "真", pinyin: "zhēn" },
              { char: "老", pinyin: "lǎo" },
              { char: "师", pinyin: "shī" },
              { char: "吗", pinyin: "ma" },
              { char: "同", pinyin: "tóng" },
              { char: "什", pinyin: "shén" },
              { char: "才", pinyin: "cái" },
              { char: "亮", pinyin: "liàng" }
            ]
          },
          {
            id: "u-txt-10",
            name: "课文10 《大还是小》",
            characters: [
              { char: "时", pinyin: "shí" },
              { char: "候", pinyin: "hòu" },
              { char: "觉", pinyin: "jué" },
              { char: "得", pinyin: "de" },
              { char: "自", pinyin: "zì" },
              { char: "己", pinyin: "jǐ" },
              { char: "很", pinyin: "hěn" },
              { char: "穿", pinyin: "chuān" },
              { char: "衣", pinyin: "yī" },
              { char: "服", pinyin: "fú" },
              { char: "门", pinyin: "mén" },
              { char: "快", pinyin: "kuài" }
            ]
          },
          {
            id: "u-txt-11",
            name: "课文11 《项链》",
            characters: [
              { char: "蓝", pinyin: "lán" },
              { char: "又", pinyin: "yòu" },
              { char: "笑", pinyin: "xiào" },
              { char: "着", pinyin: "zhe" },
              { char: "向", pinyin: "xiàng" },
              { char: "和", pinyin: "hé" },
              { char: "贝", pinyin: "bèi" },
              { char: "娃", pinyin: "wá" },
              { char: "挂", pinyin: "guà" },
              { char: "活", pinyin: "huó" },
              { char: "金", pinyin: "jīn" }
            ]
          },
          {
            id: "u1-garden7",
            name: "语文园地七",
            characters: [
              { char: "哥", pinyin: "gē" },
              { char: "姐", pinyin: "jiě" },
              { char: "弟", pinyin: "dì" },
              { char: "叔", pinyin: "shū" },
              { char: "爷", pinyin: "yé" }
            ]
          },
          {
            id: "u-txt-12",
            name: "课文12 《雪地里的小画家》",
            characters: [
              { char: "群", pinyin: "qún" },
              { char: "竹", pinyin: "zhú" },
              { char: "牙", pinyin: "yá" },
              { char: "用", pinyin: "yòng" },
              { char: "几", pinyin: "jǐ" },
              { char: "步", pinyin: "bù" },
              { char: "为", pinyin: "wèi" },
              { char: "参", pinyin: "cān" },
              { char: "加", pinyin: "jiā" },
              { char: "洞", pinyin: "dòng" },
              { char: "着", pinyin: "zháo" }
            ]
          },
          {
            id: "u-txt-13",
            name: "课文13 《乌鸦喝水》",
            characters: [
              { char: "乌", pinyin: "wū" },
              { char: "鸦", pinyin: "yā" },
              { char: "处", pinyin: "chù" },
              { char: "找", pinyin: "zhǎo" },
              { char: "办", pinyin: "bàn" },
              { char: "旁", pinyin: "páng" },
              { char: "许", pinyin: "xǔ" },
              { char: "法", pinyin: "fǎ" },
              { char: "放", pinyin: "fàng" },
              { char: "进", pinyin: "jìn" },
              { char: "高", pinyin: "gāo" }
            ]
          },
          {
            id: "u-txt-14",
            name: "课文14 《小蜗牛》",
            characters: [
              { char: "住", pinyin: "zhù" },
              { char: "孩", pinyin: "hái" },
              { char: "玩", pinyin: "wán" },
              { char: "吧", pinyin: "ba" },
              { char: "发", pinyin: "fā" },
              { char: "芽", pinyin: "yá" },
              { char: "爬", pinyin: "pá" },
              { char: "呀", pinyin: "ya" },
              { char: "久", pinyin: "jiǔ" },
              { char: "回", pinyin: "huí" },
              { char: "全", pinyin: "quán" },
              { char: "变", pinyin: "biàn" }
            ]
          },
          {
            id: "u1-garden8",
            name: "语文园地八",
            characters: [
              { char: "工", pinyin: "gōng" },
              { char: "厂", pinyin: "chǎng" },
              { char: "医", pinyin: "yī" },
              { char: "院", pinyin: "yuàn" },
              { char: "生", pinyin: "shēng" }
            ]
          }
        ]
      },
      {
        id: "g1-2",
        name: "一年级下册",
        units: [
          {
            id: "u1-spring",
            name: "识字1 春夏秋冬",
            characters: [
              { char: "春", pinyin: "chūn" },
              { char: "夏", pinyin: "xià" },
              { char: "秋", pinyin: "qiū" },
              { char: "冬", pinyin: "dōng" },
              { char: "风", pinyin: "fēng" },
              { char: "雪", pinyin: "xuě" },
              { char: "花", pinyin: "huā" },
              { char: "飞", pinyin: "fēi" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "suban",
    name: "苏教版 (Su)",
    grades: [
      {
        id: "g1-1-su",
        name: "一年级上册",
        units: [
          {
            id: "u1-su",
            name: "第一单元",
            characters: [
              { char: "马", pinyin: "mǎ" },
              { char: "牛", pinyin: "niú" },
              { char: "羊", pinyin: "yáng" }
            ]
          }
        ]
      }
    ]
  }
];