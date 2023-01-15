import React, { useEffect } from "react";

interface IUseCopyToClipboardProps {
    onCopy?: (value: string) => void;
    onError?: (value: string) => void;
    refreshDelay?: number;
}

const useCopyToClipboard = ({
    onCopy,
    onError,
    refreshDelay = 500
}: IUseCopyToClipboardProps) => {
    const [clipboardValue, setClipboardValue] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");

    const triggerCopy = (text: string) => {
        if (typeof text === "string" || typeof text == "number") {
            navigator.clipboard.writeText(text.toString())
                .then(() => {
                    setClipboardValue(text.toString());
                    setError("");
                });
        } else {
            setClipboardValue("");
            setError("Must be a string or number.");
        }
    };

    useEffect(() => {
        if (onCopy && clipboardValue) {
            onCopy(clipboardValue);

            setTimeout(() => {
                setClipboardValue("");
            }, refreshDelay);
        }
    }, [clipboardValue]);

    useEffect(() => {
        if (onError && error) {
            onError(error);

            setTimeout(() => {
                setError("");
            }, refreshDelay);
        }
    }, [error]);

    return triggerCopy;
};

export default useCopyToClipboard;