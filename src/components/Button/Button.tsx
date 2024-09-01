import React from 'react';

interface IButtonProps {
    label: String;
}

const Button = (props: IButtonProps) => {
    return (
        <button>{props.label}</button>
    );
};

export default Button;
