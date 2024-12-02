import React, {FC} from "react";
import './button.css'

type Props = {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Button: FC<Props> = ({ children, onClick, className }) => {
    return (
        <button className={className || 'button'} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button
