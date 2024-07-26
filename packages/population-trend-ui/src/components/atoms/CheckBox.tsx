import React from 'react';
import { css } from '@emotion/css';

interface CheckBoxProps {
    label: string;
    name: string;
    id: string;
    onChange: (state: boolean) => void;
    checked: boolean;
}

const checkboxWrapper = css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
    width: fit-content;
    font-size: 1rem;
    padding: 0.5rem;
    > input[type="checkbox"] {
        appearance: none;
        width: 2em;
        height: 2em;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 5px 1px #464646;
        transition: all 100ms ease-in-out;
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 1px 1px #464646;
        }
        &:checked {
            background-color: #464646;
            position: relative;
            box-shadow: 0 0 1px 1px #464646;
            &::before {
                position: absolute;
                top: 25%;
                left: 20%;
                width: 50%;
                height: 25%;
                transform: rotate(-45deg);
                border-left: 3px solid #fff;
                border-bottom: 3px solid #fff;
                border-radius: 1px;
                content: "";
            }
        }
    }
    > label:hover {
        cursor: pointer;
    }
`;

/**
 * CheckBoxコンポーネントは複数選択などの際に使用することができます。
 */
export function CheckBox({ label, id, name, onChange, checked }: CheckBoxProps) {
    const handleOnChange = () => {
        onChange(!checked);
    };

    const Input = () => {
        return checked ?
        (<input type="checkbox" name={name} id={id} onChange={handleOnChange} checked/>):
        (<input type="checkbox" name={name} id={id} onChange={handleOnChange}/>);
    };

    return (
        <div className={checkboxWrapper}>
            <Input/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}