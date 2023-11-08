import React from 'react';
import InfoList from '../InfoList/InfoList';
import { useTranslation } from "react-i18next";
import styles from './Header.module.scss';
import TimoImage from '../../assets/images/timo-pp.jpg';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className={styles.header}>
            <img src={TimoImage} className={styles.headerImage} />
            <section className={styles.headerNameContainer}>
                <h1 className={styles.headerName}>{t('resume.name')}</h1>
                <p className={styles.headerJob}>{t('resume.jobTitle')}</p>
            </section>
            <section className={styles.headerInfo}>
                <InfoList />
            </section>
        </header>
    );
};

export default Header;