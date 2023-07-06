import { Handlers, PageProps } from '$fresh/server.ts';
import CheckButton from '../../../components/CheckButton.tsx';
import Question from '../../../components/Question.tsx';
import QuestionForm from '../../../components/QuestionForm.tsx';
import Layout from '../../../components/Layout.tsx';
import RandomizedButton from '../../../islands/RandomizedButton.tsx';
import { articles, words } from '../../../data/languages/german/words.ts';
import { sentences } from '../../../data/languages/german/sentences.ts';
import Meaning from '../../../components/Meaning.tsx';

type ShowQuestionPageProps = {
    question: string;
    meaning: string;
    answer?: string;
    solution?: string;
    hints?: string[];
};

export const handler: Handlers<ShowQuestionPageProps | null> = {
    async GET(req, ctx) {
        const { wordId, sentenceId } = ctx.params;
        const word = words.find((w) => w.id === wordId);
        const sentence = sentences.find((w) => w.id === sentenceId);

        if (!word || !sentence) {
            return await ctx.render(null);
        }

        const isPlural = false;
        const noun = !isPlural ? word.noun : word.plural;
        const question = sentence.sentence({ isPlural, noun });
        const meaning = sentence.meaning({ isPlural, noun: word.meaning });

        return await ctx.render({ question, meaning });
    },
    async POST(req, ctx) {
        const form = await req.formData();
        const answer = form.get('article')?.toString().trim();

        const { wordId, sentenceId } = ctx.params;
        const word = words.find((w) => w.id === wordId);
        const sentence = sentences.find((w) => w.id === sentenceId);

        if (!word || !sentence) {
            return await ctx.render(null);
        }

        const isPlural = false;
        const noun = !isPlural ? word.noun : word.plural;
        const question = sentence.sentence({ isPlural, noun });
        const meaning = sentence.meaning({ isPlural, noun: word.meaning });
        const solution = articles.singular[word.gender][sentence.type];

        const hints: string[] = [];
        if (answer !== solution) {
            const solutionSentence = sentence.sentence({
                isPlural,
                noun,
                solution,
            });
            hints.push(`The solution is "${solutionSentence}".`);
        }
        const detailedExplanation = [
            `${solution} ${noun} (${
                sentence.type === 'nominative' ? word.gender : sentence.type
            })`,
        ];
        if (isPlural) {
            const pluralNominative = articles.plural[word.gender].nominative;
            detailedExplanation.push(
                `${pluralNominative} ${word.plural} (plural)`,
            );
        }
        if (sentence.type !== 'nominative') {
            const nominative = articles.singular[word.gender].nominative;
            detailedExplanation.push(
                `${nominative} ${word.noun} (${word.gender})`,
            );
        }
        hints.push(detailedExplanation.join(' -> '));

        return await ctx.render({
            answer,
            meaning,
            question,
            solution,
            hints,
        });
    },
};

export default function ShowQuestion(
    { data }: PageProps<ShowQuestionPageProps | null>,
) {
    if (!data) {
        return (
            <Layout title='Articles'>
                Something's not right.
                <RandomizedButton>
                    Play.
                </RandomizedButton>
            </Layout>
        );
    }

    const { answer, meaning, question, hints, solution } = data;

    return (
        <Layout title='Articles'>
            <QuestionForm>
                <div class='my-8'>
                    <Question
                        question={question}
                        answer={answer}
                        solution={solution}
                    />
                    <Meaning meaning={meaning} />
                </div>
                {!!hints && (
                    <div class='my-8'>
                        {hints.map((hint) => <p>{hint}</p>)}
                    </div>
                )}
                <div class='my-8'>
                    {answer
                        ? <RandomizedButton>Next</RandomizedButton>
                        : <CheckButton>Answer</CheckButton>}
                </div>
            </QuestionForm>
        </Layout>
    );
}
