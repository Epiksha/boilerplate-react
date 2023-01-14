import React from "react";

export default (resetInterval: number = 0) => {
  const [isCopied, setCopied] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const handleCopy = async (text: string) => {
    if (typeof text === "string" || typeof text == "number") {
      await navigator.clipboard.writeText(text.toString());
      setCopied(true);
      setError("");
    } else {
      setCopied(false);
      setError("Cannot copy to clipboard, must be a string or number.");
    }
  };

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> ;

    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy, error];
};