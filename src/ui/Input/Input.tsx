import React, {FC} from "react";
import './input.css'

type Props = {
    classNames?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder' | 'value'>;

const Input: FC<Props> = ({ classNames, ...inputAttributes }) => {
    return (
        <input
            className={classNames}
            {...inputAttributes}
        />
    )
}

export default Input
