import { useEffect, useRef } from "preact/hooks";

const useAutoFocus = <T extends HTMLElement>(disabled = false) => {
    const inputRef = useRef<T>(null);

    useEffect(() => {
        if (!disabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef.current]);

    return inputRef;
};

export default useAutoFocus;