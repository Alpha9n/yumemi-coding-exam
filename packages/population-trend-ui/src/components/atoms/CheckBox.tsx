import React from 'react';

interface CheckBoxProps {
    label: string;
    name: string;
    id: string;
    onChange: (state: boolean) => void;
    checked: boolean;
}

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
        <div>
            <Input/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}