import React, {FC} from "react";
import styles from "./index.module.css";
import {Portal} from "../Portal/Portal";

type Props = {
    children: React.ReactNode;
    onClose: () => void;
};

export const Modal: FC<Props> = ({ children, onClose }) => <Portal>
    <div className={styles.overlay}>
        <div className={styles.content}>
            <button className={styles.closeButton} onClick={onClose}>
                X
            </button>
            {children}
        </div>
    </div>
</Portal>
