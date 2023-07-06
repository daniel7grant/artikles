import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import Input from '../components/Input.tsx';

interface InputMaskProps {
    color?: string;
    defaultValue?: string;
    disabled?: boolean;
    length?: number;
}

const InputMask: FunctionComponent<InputMaskProps> = (
    { color, defaultValue = '', disabled = false, length = 3 },
) => {
    const [article, setArticle] = useState(defaultValue);

    return (
        <Input
            color={color}
            name='article'
            disabled={disabled}
            style={{ width: length * 24 }}
            maxLength={length}
            value={article}
            onInput={(ev) => {
                setArticle((ev.target as HTMLInputElement).value);
            }}
        />
    );
};

export default InputMask;
