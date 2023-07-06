import { FunctionComponent, VNode } from 'preact';
import InputMask from '../islands/InputMask.tsx';

interface QuestionProps {
    question: string;
    answer?: string;
    solution?: string;
}

function splitQuestion(
    question: string,
    answer?: string,
    solution?: string,
): VNode[] {
    const components: VNode[] = [];

    let underscores = 0;
    for (const part of question.split('_')) {
        if (part.length === 0) {
            underscores++;
        } else {
            if (underscores > 0) {
                components.push(
                    <InputMask
                        color={answer
                            ? answer === solution ? 'green-500' : 'red-500'
                            : 'black'}
                        defaultValue={answer}
                        disabled={!!answer}
                        length={underscores + 1}
                    />,
                );
                underscores = 0;
            }
            components.push(<span>{part}</span>);
        }
    }

    return components;
}

const Question: FunctionComponent<QuestionProps> = (
    { question, answer, solution },
) => {
    const components = splitQuestion(question, answer, solution);
    return <div class='my-4 text-4xl'>{components}</div>;
};

export default Question;
