import { FunctionComponent } from 'preact';

interface QuestionProps {
    question: string;
}

const Question: FunctionComponent<QuestionProps> = ({ question }) => {
    return <div class="my-16 text-4xl">{question}</div>;
};

export default Question;
