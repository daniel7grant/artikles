import { FunctionComponent, Ref } from 'preact';
import { getRandomItem, getRandomItemWithWeights } from '../utils/rand.ts';
import { sentences } from '../data/languages/german/sentences.ts';
import { words } from '../data/languages/german/words.ts';
import useAutoFocus from '../hooks/useAutoFocus.ts';

const RandomizedButton: FunctionComponent = ({ children }) => {
    const ref: Ref<HTMLAnchorElement> = useAutoFocus();
    const sentence = getRandomItemWithWeights(sentences, [4]);
    const word = getRandomItem(
        words.filter((w) => sentence.categories.includes(w.category)),
    );
    return (
        <a
            class='px-4 py-2 bg-red-500 rounded text-white text-xl outline-none'
            href={`/word/${sentence.id}/${word.id}`}
            ref={ref}
        >
            {children}
        </a>
    );
};

export default RandomizedButton;
