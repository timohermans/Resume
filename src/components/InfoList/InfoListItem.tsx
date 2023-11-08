import React from 'react';
import { useTranslation } from "react-i18next";
import styles from './InfoList.module.scss';

type Props = {
    text: string;
    icon: string;
};

const InfoListItem: React.FC<Props> = ({ text, icon }) => {
    const { t } = useTranslation();
    const textTranslated = t(text);

    return (
        <li className={styles.infoListItem}>
            <span className={styles.infoText}>{textTranslated}</span>
            <img src={icon} alt={textTranslated} />
        </li>
    );
};

export default InfoListItem;