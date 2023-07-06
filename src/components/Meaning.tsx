import { FunctionComponent } from 'preact';

interface MeaningProps {
    meaning: string;
}

const Meaning: FunctionComponent<MeaningProps> = ({ meaning }) => {
    return <div class='my-4 text-gray-600 text-xl'>{meaning}</div>;
};

export default Meaning;
