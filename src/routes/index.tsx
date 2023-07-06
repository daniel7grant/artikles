import Layout from '../components/Layout.tsx';
import RandomizedButton from '../islands/RandomizedButton.tsx';

export default function Home() {
    return (
        <Layout title='Articles'>
            <RandomizedButton>Start the game</RandomizedButton>
        </Layout>
    );
}
