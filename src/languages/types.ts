export interface Word<Genders extends string> {
    noun: string;
    gender: Genders;
    meaning: string;
    plural: string;
}
