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
          {
            id: "u1",
            name: "识字（一）1-5课",
            characters: [
              { char: "天", pinyin: "tiān", definition: "Sky" },
              { char: "地", pinyin: "dì", definition: "Earth, Ground" },
              { char: "人", pinyin: "rén", definition: "Person" },
              { char: "你", pinyin: "nǐ", definition: "You" },
              { char: "我", pinyin: "wǒ", definition: "I, Me" },
              { char: "他", pinyin: "tā", definition: "He, Him" }
            ]
          },
          {
            id: "u2",
            name: "识字（一） 金木水火土",
            characters: [
              { char: "一", pinyin: "yī", definition: "One" },
              { char: "二", pinyin: "èr", definition: "Two" },
              { char: "三", pinyin: "sān", definition: "Three" },
              { char: "四", pinyin: "sì", definition: "Four" },
              { char: "五", pinyin: "wǔ", definition: "Five" },
              { char: "上", pinyin: "shàng", definition: "Up" },
              { char: "下", pinyin: "xià", definition: "Down" }
            ]
          },
          {
            id: "u3",
            name: "汉语拼音 · 口耳目",
            characters: [
              { char: "口", pinyin: "kǒu", definition: "Mouth" },
              { char: "耳", pinyin: "ěr", definition: "Ear" },
              { char: "目", pinyin: "mù", definition: "Eye" },
              { char: "手", pinyin: "shǒu", definition: "Hand" },
              { char: "足", pinyin: "zú", definition: "Foot" },
              { char: "站", pinyin: "zhàn", definition: "Stand" },
              { char: "坐", pinyin: "zuò", definition: "Sit" }
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
              { char: "春", pinyin: "chūn", definition: "Spring" },
              { char: "夏", pinyin: "xià", definition: "Summer" },
              { char: "秋", pinyin: "qiū", definition: "Autumn" },
              { char: "冬", pinyin: "dōng", definition: "Winter" },
              { char: "风", pinyin: "fēng", definition: "Wind" },
              { char: "雪", pinyin: "xuě", definition: "Snow" },
              { char: "花", pinyin: "huā", definition: "Flower" },
              { char: "飞", pinyin: "fēi", definition: "Fly" }
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
              { char: "马", pinyin: "mǎ", definition: "Horse" },
              { char: "牛", pinyin: "niú", definition: "Cow" },
              { char: "羊", pinyin: "yáng", definition: "Sheep" }
            ]
          }
        ]
      }
    ]
  }
];
