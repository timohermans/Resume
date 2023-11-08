import React from 'react';
import styles from './Intro.module.scss';
import { useTranslation } from "react-i18next";

const Intro: React.FC = () => {
    const {t} = useTranslation();

    return <p className={styles.intro}>{t('resume.intro')}</p>
}

export default Intro;