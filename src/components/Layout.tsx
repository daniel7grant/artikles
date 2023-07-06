import { FunctionComponent } from 'preact';
import { Head } from '$fresh/runtime.ts';

interface LayoutProps {
    title: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div class='container mx-auto my-16 text-center'>
                {children}
            </div>
        </>
    );
};

export default Layout;
