import { PageProps } from '$fresh/server.ts';
import { words } from '../../../../lib/languages/german/words.ts';
import { sentences } from '../../../../lib/languages/german/sentences.ts';

export default function Greet(props: PageProps) {
    const { wordId, sentenceId } = props.params;

    const word = words.find((w) => w.id === wordId);
    const sentence = sentences.find((w) => w.id === sentenceId);

    if (!word || !sentence) {
        return <div>Word not found.</div>;
    }

    return <div>{word?.noun}</div>;
}
