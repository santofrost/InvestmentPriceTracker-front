import { useState, useCallback } from 'react';

/**
 * A simple custom hook to manage a boolean toggle state.
 * @param initialState - The initial state of the toggle (default: false)
 * @returns An array containing the current state, a function to toggle it, and functions to explicitly set it to true or false.
 */
export const useToggle = (initialState: boolean = false) => {
    const [state, setState] = useState<boolean>(initialState);

    const toggle = useCallback(() => setState((prev) => !prev), []);
    const setTrue = useCallback(() => setState(true), []);
    const setFalse = useCallback(() => setState(false), []);

    return [state, toggle, setTrue, setFalse] as const;
};
