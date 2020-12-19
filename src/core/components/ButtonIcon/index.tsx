import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (

    <div>
        <button className="button-icon">
            <h5 className="text-style">{text}</h5>
        </button>
    </div>
);

export default ButtonIcon;