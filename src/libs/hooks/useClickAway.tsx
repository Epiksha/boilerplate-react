import React from "react";

const useClickAway = <Type extends HTMLElement = HTMLElement>(
    ref: React.RefObject<Type>,
    handler: (event: Event) => void,
) => {
    React.useEffect(() => {
        const listener = (event: Event) => {
            const el = ref?.current;

            if (!el || el.contains((event?.target as Node) || null)) return;

            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default useClickAway;