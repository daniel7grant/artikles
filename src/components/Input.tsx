import { FunctionComponent, Ref } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { JSX } from 'preact/jsx-runtime';
import useAutoFocus from '../hooks/useAutoFocus.ts';

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
    color?: string;
}

const Input: FunctionComponent<InputProps> = (
    { color = 'black', ...inputProps },
) => {
    const inputRef: Ref<HTMLInputElement> = useAutoFocus(!!inputProps.disabled);

    return (
        <input
            ref={inputRef}
            class={`border-${color} border-b-2 outline-none text-${color}`}
            {...inputProps}
        />
    );
};

export default Input;
