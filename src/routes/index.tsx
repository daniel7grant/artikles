import { Head } from '$fresh/runtime.ts';

export default function Home() {
    const question = 'Gib mir ___ Salz';

    return (
        <>
            <Head>
                <title>Articles</title>
            </Head>
            <div>
                <p>
                    {question}
                </p>
            </div>
        </>
    );
}
