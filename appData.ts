
import { Curriculum, Character } from './types';
import { RENJIAOBAN_2012 } from './data/curriculum/renjiaoban_2012';
import { RENJIAOBAN_2024 } from './data/curriculum/renjiaoban_2024';
import { HONGENSHIZI } from './data/curriculum/hongenshizi';

// Central export of all curriculum data
export const APP_DATA: Curriculum[] = [
    RENJIAOBAN_2012,
    RENJIAOBAN_2024,
    HONGENSHIZI
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
export const getOrderedCurriculumChars = (curriculumId: string = 'renjiaoban_2024'): Character[] => {
    const curriculum = APP_DATA.find(c => c.id === curriculumId) || RENJIAOBAN_2024;
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
