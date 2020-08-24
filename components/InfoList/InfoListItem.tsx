import React from 'react';
import i18n from '../../i18n';
import styles from './InfoList.module.css';

type Props = {
    text: string;
    icon: string;
};

const InfoListItem: React.FC<Props> = ({ text, icon }) => {
    const { t } = i18n.useTranslation();
    const textTranslated = t(text);

    return (
        <li className={styles.infoListItem}>
            <span>{textTranslated}</span>
            <img src={icon} alt={textTranslated} />
        </li>
    );
};

export default InfoListItem;