import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { IBaseProps } from "@Types/component";
import { MessageLevel } from "@Types/message";
import Icon from "@Components/Icon";
import capitalize from "@Utilities/capitalize";

export interface IToasterProps extends IBaseProps {
    message: string;
    type: `${MessageLevel}`;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

const Toaster: React.FC<IToasterProps> = ({
    className,
    isVisible,
    message,
    id,
    setIsVisible,
    testId,
    type,
}) => {
    const [currentTimeout, setCurrentTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [newToasterTimeout, setNewToasterTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [isNewSwatch, setIsNewToaster] = useState<boolean>(false);

    const cancelCurrentTimeout = () => {
        clearTimeout(currentTimeout as ReturnType<typeof setTimeout>);
        setCurrentTimeout(null);
    };

    useEffect(() => {
        if (newToasterTimeout) {
            cancelCurrentTimeout();

            clearTimeout(newToasterTimeout);
            setNewToasterTimeout(null);
        }

        setIsNewToaster(true);
    }, [id]);

    useEffect(() => {
        if (isNewSwatch) {
            cancelCurrentTimeout();

            setNewToasterTimeout(
                setTimeout(() => {
                    setIsNewToaster(false);
                    setCurrentTimeout(setTimeout(() => setIsVisible(false), 3000));
                }, 50)
            );
        }
    }, [isNewSwatch]);

    const handleClose = () => {
        cancelCurrentTimeout();
        setIsVisible(false);
    };

    useEffect(() => {
        if (isVisible) {
            setCurrentTimeout(setTimeout(() => setIsVisible(false), 3000));
        } else {
            handleClose();
        }
    }, [isVisible]);

    return (
        <div
            className={classNames("toaster", className, `toaster--${type}`, { "toaster--visible": isVisible }, { "toaster--refresh": isNewSwatch })}
            data-testid={testId}
        >
            <div className="toaster__content">
                <div className="toaster__icon">
                    <Icon name={type} className="icon--toaster" />
                </div>

                <div className="toaster__message">
                    <span className="toaster__title">{capitalize(type)}</span>

                    <span className="toaster__description">{message}</span>
                </div>

                <button
                    className="toaster__close"
                    onClick={handleClose}
                >
                    <Icon name="close" className="icon--toaster-close" />
                </button>
            </div>

            <div
                className="toaster__progress"
                style={{ transform: `scaleX(${isVisible && !isNewSwatch ? 1: 0})` }}
            ></div>
        </div>
    );
};

export default Toaster;