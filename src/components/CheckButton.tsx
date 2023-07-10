import { FunctionComponent } from 'preact';

const CheckButton: FunctionComponent = ({ children }) => {
    return (
        <button
            type='submit'
            class='px-4 py-2 bg-blue-500 rounded text-white text-xl'
        >
            {children}
        </button>
    );
};

export default CheckButton;
