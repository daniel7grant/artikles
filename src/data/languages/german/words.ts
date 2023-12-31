import { Word } from '../types.ts';

// TODO: extract types to separate file
export type GermanGender = 'masculine' | 'feminine' | 'neuter';
export type GermanWord = Word<GermanGender>;

export const pluralities = ['singular', 'plural'] as const;
export type GermanPluralities = (typeof pluralities)[number];
export const cases = ['nominative', 'accusative', 'dative'] as const;
export type GermanCases = (typeof cases)[number];

type Articles = Record<
    GermanPluralities,
    Record<GermanGender, Record<GermanCases, string>>
>;

// TODO: add indefinite articles
export const articles: Articles = {
    singular: {
        masculine: { nominative: 'der', accusative: 'den', dative: 'dem' },
        feminine: { nominative: 'die', accusative: 'die', dative: 'der' },
        neuter: { nominative: 'das', accusative: 'das', dative: 'dem' },
    },
    plural: {
        masculine: { nominative: 'die', accusative: 'die', dative: 'den' },
        feminine: { nominative: 'die', accusative: 'die', dative: 'den' },
        neuter: { nominative: 'die', accusative: 'die', dative: 'den' },
    },
};

// TODO: Add multiple levels of words (e.g. simple, medium, hard)
export const words: GermanWord[] = [
    {
        id: 'mann',
        noun: 'Mann',
        gender: 'masculine',
        meaning: 'man',
        plural: 'Männer',
        category: 'person',
        // TODO: dativePlural: 'Männern'
    },
    {
        id: 'frau',
        noun: 'Frau',
        gender: 'feminine',
        meaning: 'woman',
        plural: 'Frauen',
        category: 'person',
    },
    {
        id: 'kind',
        noun: 'Kind',
        gender: 'neuter',
        meaning: 'child',
        plural: 'Kinder',
        category: 'person',
    },
    {
        id: 'haus',
        noun: 'Haus',
        gender: 'neuter',
        meaning: 'house',
        plural: 'Häuser',
        category: 'place',
    },
    {
        id: 'zeit',
        noun: 'Zeit',
        gender: 'feminine',
        meaning: 'time',
        plural: 'Zeiten',
        category: 'concept',
    },
    {
        id: 'tag',
        noun: 'Tag',
        gender: 'masculine',
        meaning: 'day',
        plural: 'Tage',
        category: 'time',
    },
    {
        id: 'jahr',
        noun: 'Jahr',
        gender: 'neuter',
        meaning: 'year',
        plural: 'Jahre',
        category: 'time',
    },
    {
        id: 'stadt',
        noun: 'Stadt',
        gender: 'feminine',
        meaning: 'city',
        plural: 'Städte',
        category: 'place',
    },
    {
        id: 'land',
        noun: 'Land',
        gender: 'neuter',
        meaning: 'country',
        plural: 'Länder',
        category: 'place',
    },
    {
        id: 'leben',
        noun: 'Leben',
        gender: 'neuter',
        meaning: 'life',
        plural: 'Leben',
        category: 'concept',
    },
    {
        id: 'mensch',
        noun: 'Mensch',
        gender: 'masculine',
        meaning: 'human',
        plural: 'Menschen',
        category: 'person',
    },
    {
        id: 'weg',
        noun: 'Weg',
        gender: 'masculine',
        meaning: 'way',
        plural: 'Wege',
        category: 'place',
    },
    {
        id: 'ort',
        noun: 'Ort',
        gender: 'masculine',
        meaning: 'place',
        plural: 'Orte',
        category: 'place',
    },
    {
        id: 'buch',
        noun: 'Buch',
        gender: 'neuter',
        meaning: 'book',
        plural: 'Bücher',
        category: 'object',
    },
    {
        id: 'wasser',
        noun: 'Wasser',
        gender: 'neuter',
        meaning: 'water',
        plural: 'Wasser',
        category: 'food',
    },
    {
        id: 'stunde',
        noun: 'Stunde',
        gender: 'feminine',
        meaning: 'hour',
        plural: 'Stunden',
        category: 'time',
    },
    {
        id: 'schule',
        noun: 'Schule',
        gender: 'feminine',
        meaning: 'school',
        plural: 'Schulen',
        category: 'place',
    },
    {
        id: 'arbeit',
        noun: 'Arbeit',
        gender: 'feminine',
        meaning: 'work',
        plural: 'Arbeiten',
        category: 'concept',
    },
    {
        id: 'geld',
        noun: 'Geld',
        gender: 'neuter',
        meaning: 'money',
        plural: 'Gelder',
        category: 'object',
    },
    {
        id: 'stück',
        noun: 'Stück',
        gender: 'neuter',
        meaning: 'piece',
        plural: 'Stücke',
        category: 'object',
    },
    {
        id: 'problem',
        noun: 'Problem',
        gender: 'neuter',
        meaning: 'problem',
        plural: 'Probleme',
        category: 'object',
    },
    {
        id: 'wort',
        noun: 'Wort',
        gender: 'neuter',
        meaning: 'word',
        plural: 'Wörter',
        category: 'object',
    },
    {
        id: 'mädchen',
        noun: 'Mädchen',
        gender: 'neuter',
        meaning: 'girl',
        plural: 'Mädchen',
        category: 'person',
    },
    {
        id: 'junge',
        noun: 'Junge',
        gender: 'masculine',
        meaning: 'boy',
        plural: 'Jungen',
        category: 'person',
    },
    {
        id: 'welt',
        noun: 'Welt',
        gender: 'feminine',
        meaning: 'world',
        plural: 'Welten',
        category: 'place',
    },
    {
        id: 'familie',
        noun: 'Familie',
        gender: 'feminine',
        meaning: 'family',
        plural: 'Familien',
        category: 'person',
    },
    {
        id: 'morgen',
        noun: 'Morgen',
        gender: 'masculine',
        meaning: 'morning',
        plural: 'Morgen',
        category: 'time',
    },
    {
        id: 'abend',
        noun: 'Abend',
        gender: 'masculine',
        meaning: 'evening',
        plural: 'Abende',
        category: 'time',
    },
    {
        id: 'freund',
        noun: 'Freund',
        gender: 'masculine',
        meaning: 'friend',
        plural: 'Freunde',
        category: 'person',
    },
    {
        id: 'mutter',
        noun: 'Mutter',
        gender: 'feminine',
        meaning: 'mother',
        plural: 'Mütter',
        category: 'person',
    },
    {
        id: 'vater',
        noun: 'Vater',
        gender: 'masculine',
        meaning: 'father',
        plural: 'Väter',
        category: 'person',
    },
    {
        id: 'geschichte',
        noun: 'Geschichte',
        gender: 'feminine',
        meaning: 'history',
        plural: 'Geschichten',
        category: 'object',
    },
    {
        id: 'sohn',
        noun: 'Sohn',
        gender: 'masculine',
        meaning: 'son',
        plural: 'Söhne',
        category: 'person',
    },
    {
        id: 'tochter',
        noun: 'Tochter',
        gender: 'feminine',
        meaning: 'daughter',
        plural: 'Töchter',
        category: 'person',
    },
    {
        id: 'bruder',
        noun: 'Bruder',
        gender: 'masculine',
        meaning: 'brother',
        plural: 'Brüder',
        category: 'person',
    },
    {
        id: 'schwester',
        noun: 'Schwester',
        gender: 'feminine',
        meaning: 'sister',
        plural: 'Schwestern',
        category: 'person',
    },
    {
        id: 'himmel',
        noun: 'Himmel',
        gender: 'masculine',
        meaning: 'sky',
        plural: 'Himmel',
        category: 'object',
    },
    {
        id: 'berg',
        noun: 'Berg',
        gender: 'masculine',
        meaning: 'mountain',
        plural: 'Berge',
        category: 'place',
    },
    {
        id: 'boden',
        noun: 'Boden',
        gender: 'masculine',
        meaning: 'ground',
        plural: 'Böden',
        category: 'place',
    },
    {
        id: 'wald',
        noun: 'Wald',
        gender: 'masculine',
        meaning: 'forest',
        plural: 'Wälder',
        category: 'place',
    },
    {
        id: 'baum',
        noun: 'Baum',
        gender: 'masculine',
        meaning: 'tree',
        plural: 'Bäume',
        category: 'object',
    },
    {
        id: 'blume',
        noun: 'Blume',
        gender: 'feminine',
        meaning: 'flower',
        plural: 'Blumen',
        category: 'object',
    },
    {
        id: 'haus',
        noun: 'Haus',
        gender: 'neuter',
        meaning: 'home',
        plural: 'Häuser',
        category: 'place',
    },
    {
        id: 'zimmer',
        noun: 'Zimmer',
        gender: 'neuter',
        meaning: 'room',
        plural: 'Zimmer',
        category: 'place',
    },
    {
        id: 'tür',
        noun: 'Tür',
        gender: 'feminine',
        meaning: 'door',
        plural: 'Türen',
        category: 'object',
    },
    {
        id: 'fenster',
        noun: 'Fenster',
        gender: 'neuter',
        meaning: 'window',
        plural: 'Fenster',
        category: 'object',
    },
    {
        id: 'stuhl',
        noun: 'Stuhl',
        gender: 'masculine',
        meaning: 'chair',
        plural: 'Stühle',
        category: 'object',
    },
    {
        id: 'tisch',
        noun: 'Tisch',
        gender: 'masculine',
        meaning: 'table',
        plural: 'Tische',
        category: 'object',
    },
    {
        id: 'bett',
        noun: 'Bett',
        gender: 'neuter',
        meaning: 'bed',
        plural: 'Betten',
        category: 'object',
    },
    {
        id: 'hund',
        noun: 'Hund',
        gender: 'masculine',
        meaning: 'dog',
        plural: 'Hunde',
        category: 'animal',
    },
    {
        id: 'katze',
        noun: 'Katze',
        gender: 'feminine',
        meaning: 'cat',
        plural: 'Katzen',
        category: 'animal',
    },
    {
        id: 'vogel',
        noun: 'Vogel',
        gender: 'masculine',
        meaning: 'bird',
        plural: 'Vögel',
        category: 'animal',
    },
    {
        id: 'fisch',
        noun: 'Fisch',
        gender: 'masculine',
        meaning: 'fish',
        plural: 'Fische',
        category: 'animal',
    },
    {
        id: 'kuh',
        noun: 'Kuh',
        gender: 'feminine',
        meaning: 'cow',
        plural: 'Kühe',
        category: 'animal',
    },
    {
        id: 'pferd',
        noun: 'Pferd',
        gender: 'neuter',
        meaning: 'horse',
        plural: 'Pferde',
        category: 'animal',
    },
    {
        id: 'schwein',
        noun: 'Schwein',
        gender: 'neuter',
        meaning: 'pig',
        plural: 'Schweine',
        category: 'animal',
    },
    {
        id: 'auto',
        noun: 'Auto',
        gender: 'neuter',
        meaning: 'car',
        plural: 'Autos',
        category: 'vehicle',
    },
    {
        id: 'flugzeug',
        noun: 'Flugzeug',
        gender: 'neuter',
        meaning: 'airplane',
        plural: 'Flugzeuge',
        category: 'vehicle',
    },
    {
        id: 'schiff',
        noun: 'Schiff',
        gender: 'neuter',
        meaning: 'ship',
        plural: 'Schiffe',
        category: 'vehicle',
    },
    {
        id: 'zug',
        noun: 'Zug',
        gender: 'masculine',
        meaning: 'train',
        plural: 'Züge',
        category: 'vehicle',
    },
    {
        id: 'bus',
        noun: 'Bus',
        gender: 'masculine',
        meaning: 'bus',
        plural: 'Busse',
        category: 'vehicle',
    },
    {
        id: 'rad',
        noun: 'Rad',
        gender: 'neuter',
        meaning: 'wheel',
        plural: 'Räder',
        category: 'object',
    },
    {
        id: 'uhr',
        noun: 'Uhr',
        gender: 'feminine',
        meaning: 'clock',
        plural: 'Uhren',
        category: 'object',
    },
    {
        id: 'telefon',
        noun: 'Telefon',
        gender: 'neuter',
        meaning: 'telephone',
        plural: 'Telefone',
        category: 'object',
    },
    {
        id: 'computer',
        noun: 'Computer',
        gender: 'masculine',
        meaning: 'computer',
        plural: 'Computer',
        category: 'object',
    },
    {
        id: 'fernseher',
        noun: 'Fernseher',
        gender: 'masculine',
        meaning: 'television',
        plural: 'Fernseher',
        category: 'object',
    },
    {
        id: 'buch',
        noun: 'Buch',
        gender: 'neuter',
        meaning: 'book',
        plural: 'Bücher',
        category: 'object',
    },
    {
        id: 'heft',
        noun: 'Heft',
        gender: 'neuter',
        meaning: 'notebook',
        plural: 'Hefte',
        category: 'object',
    },
    {
        id: 'stift',
        noun: 'Stift',
        gender: 'masculine',
        meaning: 'pen',
        plural: 'Stifte',
        category: 'object',
    },
    {
        id: 'bleistift',
        noun: 'Bleistift',
        gender: 'masculine',
        meaning: 'pencil',
        plural: 'Bleistifte',
        category: 'object',
    },
    {
        id: 'farbe',
        noun: 'Farbe',
        gender: 'feminine',
        meaning: 'color',
        plural: 'Farben',
        category: 'object',
    },
    {
        id: 'gesicht',
        noun: 'Gesicht',
        gender: 'neuter',
        meaning: 'face',
        plural: 'Gesichter',
        category: 'bodypart',
    },
    {
        id: 'auge',
        noun: 'Auge',
        gender: 'neuter',
        meaning: 'eye',
        plural: 'Augen',
        category: 'bodypart',
    },
    {
        id: 'nase',
        noun: 'Nase',
        gender: 'feminine',
        meaning: 'nose',
        plural: 'Nasen',
        category: 'bodypart',
    },
    {
        id: 'mund',
        noun: 'Mund',
        gender: 'masculine',
        meaning: 'mouth',
        plural: 'Münder',
        category: 'bodypart',
    },
    {
        id: 'ohr',
        noun: 'Ohr',
        gender: 'neuter',
        meaning: 'ear',
        plural: 'Ohren',
        category: 'bodypart',
    },
    {
        id: 'hand',
        noun: 'Hand',
        gender: 'feminine',
        meaning: 'hand',
        plural: 'Hände',
        category: 'bodypart',
    },
    {
        id: 'fuß',
        noun: 'Fuß',
        gender: 'masculine',
        meaning: 'foot',
        plural: 'Füße',
        category: 'bodypart',
    },
    {
        id: 'bein',
        noun: 'Bein',
        gender: 'neuter',
        meaning: 'leg',
        plural: 'Beine',
        category: 'bodypart',
    },
    {
        id: 'kopf',
        noun: 'Kopf',
        gender: 'masculine',
        meaning: 'head',
        plural: 'Köpfe',
        category: 'bodypart',
    },
    {
        id: 'herz',
        noun: 'Herz',
        gender: 'neuter',
        meaning: 'heart',
        plural: 'Herzen',
        category: 'bodypart',
    },
    {
        id: 'see',
        noun: 'See',
        gender: 'masculine',
        meaning: 'lake',
        plural: 'Seen',
        category: 'bodypart',
    },
    {
        id: 'fluss',
        noun: 'Fluss',
        gender: 'masculine',
        meaning: 'river',
        plural: 'Flüsse',
        category: 'place',
    },
    {
        id: 'meer',
        noun: 'Meer',
        gender: 'neuter',
        meaning: 'sea',
        plural: 'Meere',
        category: 'place',
    },
    {
        id: 'strand',
        noun: 'Strand',
        gender: 'masculine',
        meaning: 'beach',
        plural: 'Strände',
        category: 'place',
    },
    {
        id: 'sonne',
        noun: 'Sonne',
        gender: 'feminine',
        meaning: 'sun',
        plural: 'Sonnen',
        category: 'object',
    },
    {
        id: 'mond',
        noun: 'Mond',
        gender: 'masculine',
        meaning: 'moon',
        plural: 'Monde',
        category: 'object',
    },
    {
        id: 'stern',
        noun: 'Stern',
        gender: 'masculine',
        meaning: 'star',
        plural: 'Sterne',
        category: 'object',
    },
    {
        id: 'feuer',
        noun: 'Feuer',
        gender: 'neuter',
        meaning: 'fire',
        plural: 'Feuer',
        category: 'object',
    },
    {
        id: 'luft',
        noun: 'Luft',
        gender: 'feminine',
        meaning: 'air',
        plural: 'Luft',
        category: 'object',
    },
    {
        id: 'erde',
        noun: 'Erde',
        gender: 'feminine',
        meaning: 'earth',
        plural: 'Erden',
        category: 'object',
    },
    {
        id: 'stein',
        noun: 'Stein',
        gender: 'masculine',
        meaning: 'stone',
        plural: 'Steine',
        category: 'object',
    },
    {
        id: 'sand',
        noun: 'Sand',
        gender: 'masculine',
        meaning: 'sand',
        plural: 'Sände',
        category: 'object',
    },
    {
        id: 'glas',
        noun: 'Glas',
        gender: 'neuter',
        meaning: 'glass',
        plural: 'Gläser',
        category: 'object',
    },
    {
        id: 'holz',
        noun: 'Holz',
        gender: 'neuter',
        meaning: 'wood',
        plural: 'Hölzer',
        category: 'object',
    },
    {
        id: 'metall',
        noun: 'Metall',
        gender: 'neuter',
        meaning: 'metal',
        plural: 'Metalle',
        category: 'object',
    },
    {
        id: 'stahl',
        noun: 'Stahl',
        gender: 'masculine',
        meaning: 'steel',
        plural: 'Stähle',
        category: 'object',
    },
    {
        id: 'gold',
        noun: 'Gold',
        gender: 'neuter',
        meaning: 'gold',
        plural: 'Golde',
        category: 'object',
    },
    {
        id: 'silber',
        noun: 'Silber',
        gender: 'neuter',
        meaning: 'silver',
        plural: 'Silbere',
        category: 'object',
    },
    {
        id: 'essen',
        noun: 'Essen',
        gender: 'neuter',
        meaning: 'food',
        plural: 'Essen',
        category: 'food',
    },
    {
        id: 'getränk',
        noun: 'Getränk',
        gender: 'neuter',
        meaning: 'drink',
        plural: 'Trinken',
        category: 'food',
    },
    {
        id: 'schlaf',
        noun: 'Schlaf',
        gender: 'masculine',
        meaning: 'sleep',
        plural: 'Schlaf',
        category: 'concept',
    },
    {
        id: 'traum',
        noun: 'Traum',
        gender: 'masculine',
        meaning: 'dream',
        plural: 'Träume',
        category: 'concept',
    },
    {
        id: 'leben',
        noun: 'Leben',
        gender: 'neuter',
        meaning: 'life',
        plural: 'Leben',
        category: 'concept',
    },
    {
        id: 'tod',
        noun: 'Tod',
        gender: 'masculine',
        meaning: 'death',
        plural: 'Tode',
        category: 'concept',
    },
    {
        id: 'liebe',
        noun: 'Liebe',
        gender: 'feminine',
        meaning: 'love',
        plural: 'Lieben',
        category: 'concept',
    },
];
