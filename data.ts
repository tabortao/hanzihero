
import { Curriculum } from './types';
import { RENJIAOBAN } from './data/curriculum/renjiaoban';
import { SUBAN } from './data/curriculum/suban';

// Central export of all curriculum data
export const APP_DATA: Curriculum[] = [
    RENJIAOBAN,
    SUBAN
];
