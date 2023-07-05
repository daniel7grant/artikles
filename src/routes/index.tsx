import { Head } from '$fresh/runtime.ts';
import Question from '../components/Question.tsx';
import RandomizedButton from '../islands/RandomizedButton.tsx';

export default function Home() {
    const question = 'Gib mir ___ Salz';

    return (
        <>
            <Head>
                <title>Articles</title>
            </Head>
            <div class="container mx-auto text-center">
                <Question question={question} />
                <div>
                    <RandomizedButton>Next</RandomizedButton>
                </div>
            </div>
        </>
    );
}
