import { Sentence } from '../types.ts';
import { GermanCases } from './words.ts';

export const sentences: Sentence<GermanCases>[] = [
    {
        id: 'default',
        type: 'nominative',
        categories: ['animal', 'bodypart', 'food', 'object', 'person', 'place', 'time', 'vehicle'],
        sentence: ({ noun, solution = '___' }) => `${solution} ${noun}`,
        meaning: ({ noun }) => `the ${noun}`,
    },
    {
        id: 'hier',
        type: 'nominative',
        categories: ['animal', 'bodypart', 'food', 'object', 'person', 'place', 'vehicle'],
        sentence: ({ isPlural, noun, solution = '___' }) =>
            `Hier ${isPlural ? 'sind' : 'ist'} ${solution} ${noun}`,
        meaning: ({ isPlural, noun }) => `Here ${isPlural ? 'are' : 'is'} the ${noun}`,
    },
    {
        id: 'gib',
        type: 'accusative',
        categories: ['food'],
        sentence: ({ noun, solution = '___' }) => `Gib mir ${solution} ${noun}`,
        meaning: ({ noun }) => `Give me the ${noun}`,
    },
    {
        id: 'mag',
        type: 'accusative',
        categories: [
            'animal',
            'bodypart',
            'concept',
            'food',
            'object',
            'person',
            'place',
            'vehicle',
        ],
        sentence: ({ noun, solution = '___' }) => `Ich mag ${solution} ${noun}`,
        meaning: ({ noun }) => `I like the ${noun}`,
    },
    {
        id: 'nehme',
        type: 'accusative',
        categories: ['food'],
        sentence: ({ noun, solution = '___' }) => `Ich nehme ${solution} ${noun}`,
        meaning: ({ noun }) => `I take the ${noun}`,
    },
    {
        id: 'gebe',
        type: 'dative',
        categories: ['animal', 'person'],
        sentence: ({ noun, solution = '___' }) => `Ich gebe ${solution} ${noun} Wasser`,
        meaning: ({ noun }) => `I give the ${noun} water`,
    },
];
