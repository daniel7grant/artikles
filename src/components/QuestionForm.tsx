import { FunctionComponent } from 'preact';

const QuestionForm: FunctionComponent = ({ children }) => {
    return (
        <form method='POST'>
            {children}
        </form>
    );
};

export default QuestionForm;
