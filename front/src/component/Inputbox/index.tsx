import React, { ChangeEvent } from "react";
import './style.css';

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    buttonTitle?: string;
    buttonStatus?: boolean;
    onButtonClickHandler?: () => void;
    message?: string;
    error?: boolean;
}

export default function InputBox({ label, type, value, placeholder, onChangeHandler, buttonTitle, buttonStatus, onButtonClickHandler, message, error }: InputBoxProps) {

    const buttonClass = buttonStatus ? 'input-primary-button' : 'input-disable-button';
    // 'input-message ' 한칸 띄우기 
    const messageClass = 'input-message ' + (error ? 'error' : 'primary');

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input
                    className="input"
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
                { buttonTitle && 
                <div className={buttonClass} onClick={onButtonClickHandler}>
                    {buttonTitle}
                </div> 
                }
                

            </div>
            <div className={messageClass}>
                {message}
            </div>

        </div>
    );
}