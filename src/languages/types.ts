export type Category =
    | 'person'
    | 'animal'
    | 'food'
    | 'time'
    | 'place'
    | 'bodypart'
    | 'vehicle'
    | 'concept'
    | 'object';

export type Word<Genders extends string> = {
    noun: string;
    gender: Genders;
    meaning: string;
    plural: string;
    category: Category;
};

export type SentenceParams = {
    noun: string;
    isPlural: boolean;
    solution?: string;
};

export type Sentence<T extends String> = {
    type: T;
    categories: Category[];
    sentence: (s: SentenceParams) => string;
    meaning: (s: SentenceParams) => string;
};
