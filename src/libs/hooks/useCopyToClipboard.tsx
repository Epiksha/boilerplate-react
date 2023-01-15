import React, { useEffect } from "react";

interface IUseCopyToClipboardProps {
    onCopy?: (value: string) => void,
    onError?: (value: string) => void,
}

const useCopyToClipboard = ({
    onCopy,
    onError,
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
            setError("Cannot copy to clipboard, must be a string or number.");
        }
    };

    useEffect(() => {
        if (onCopy) {
            onCopy(clipboardValue);
        }
    }, [clipboardValue, onCopy]);

    useEffect(() => {
        if (onError) {
            onError(error);
        }
    }, [error, onError]);

    return triggerCopy;
};

export default useCopyToClipboard;