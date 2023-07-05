import { FunctionComponent } from 'preact';

interface RandomizedButtonProps {}

const RandomizedButton: FunctionComponent<RandomizedButtonProps> = ({ children }) => {
    const href = '';
    return <a class="px-4 py-2 bg-red-500 rounded text-white text-xl" href={href}>{children}</a>;
};

export default RandomizedButton;
