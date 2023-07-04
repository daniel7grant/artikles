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
    // TODO: replace with word or singular
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

export type Sentence<T extends string> = {
    type: T;
    categories: Category[];
    sentence: (s: SentenceParams) => string;
    meaning: (s: SentenceParams) => string;
};
