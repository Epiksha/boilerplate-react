import React, { useEffect, useState } from 'react';
import Icon from './Icon';

interface InputProps {
    autoComplete?: string;
    classes?: string;
    errors?: string[];
    handler: (value: string|number) => void;
    id?: string;
    isActive?: boolean;
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    value: string|number;
}

export const Input = ({
    autoComplete = '',
    classes = '',
    errors = [],
    handler,
    id = '',
    isActive = false,
    label = '',
    placeholder = '',
    required = false,
    type = 'text',
    value,
}: InputProps): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [iconState, setIconState] = useState({
        name: '',
        class: ''
    });

    useEffect(() => {
        if (errors && errors.length && type !== 'password') {
            setIconState({
                name: 'icon-warning',
                class: 'icon--error',
            });
        } else if (type === 'email') {
            setIconState({
                name: 'icon-email',
                class: 'icon--email',
            });
        } else if (type === 'password') {
            setIconState({
                name: 'icon-visible',
                class: 'icon--visible',
            });
        }
    }, [type, errors]);

    return (
        <fieldset
            className={`
                fieldset
                ${isActive && 'active'}
                ${errors?.length && 'active'}
            `}
        >
            {label && (
                <label
                    id={id ? `${id}-label` : ''}
                    htmlFor={id ? id : ''}
                    className={isFocused ? 'active' : ''}
                >{ label }</label>
            )}

            <div className="inputWrapper">
                <input
                    id={id ? id : ''}
                    type={isShowingPassword ? 'text' : type}
                    placeholder={placeholder}
                    className={`
                        input
                        ${isActive && 'active'}
                        ${classes && classes}
                    `}
                    autoComplete={autoComplete}
                    required={required}
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => handler(event.target.value)}
                />

                {type !== 'password' ? (
                    <Icon
                        name={iconState.name}
                        classes={`icon--md ${iconState.class}`}
                    />
                ) : (
                    <button
                        className="button button--visible"
                        tabIndex={-1}
                        onClick={() => setIsShowingPassword(value => !value)}
                    >
                        <Icon
                            name={iconState.name}
                            classes={`icon--md ${iconState.class}`}
                        />
                    </button>
                )}
            </div>

            {errors?.length && errors.map(error => {
                <span
                    v-for="(error, index) in errors"
                    key={error}
                    aria-label={`${label} error`}
                    className="errorText"
                    role="alert"
                >
                    {{ error }}
                </span>
            })}

        </fieldset>
    );
};

export default Input;