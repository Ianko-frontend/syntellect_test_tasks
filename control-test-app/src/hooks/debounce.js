import {useRef} from "react";

export function useDebounce(fn) {
    const ref = useRef(null);

    return function (...args) {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => fn(...args), 1000)
    }
 }