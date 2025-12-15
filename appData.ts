
import { Curriculum, Character } from './types';
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

// Helper to get all characters from a curriculum in order (Grade 1 -> 6)
// Defaults to Renjiaoban if ID not found
export const getOrderedCurriculumChars = (curriculumId: string = 'renjiaoban'): Character[] => {
    const curriculum = APP_DATA.find(c => c.id === curriculumId) || RENJIAOBAN;
    const allChars: Character[] = [];
    const seen = new Set<string>();

    // Iterate through grades and units in order
    curriculum.grades.forEach(grade => {
        grade.units.forEach(unit => {
            unit.characters.forEach(char => {
                // Deduplicate based on char string, but preserve order of first appearance
                if (!seen.has(char.char)) {
                    seen.add(char.char);
                    allChars.push(char);
                }
            });
        });
    });

    return allChars;
};
