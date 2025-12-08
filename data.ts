
import { Curriculum } from './types';
import { RENJIAOBAN } from './data/curriculum/renjiaoban';
import { SUBAN } from './data/curriculum/suban';

// Central export of all curriculum data
export const APP_DATA: Curriculum[] = [
    RENJIAOBAN,
    SUBAN
];

export const GRADE_PRESETS = [
    "一年级上册", "一年级下册",
    "二年级上册", "二年级下册",
    "三年级上册", "三年级下册",
    "四年级上册", "四年级下册",
    "五年级上册", "五年级下册",
    "六年级上册", "六年级下册",
];
