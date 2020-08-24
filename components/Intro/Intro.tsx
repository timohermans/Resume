import React from 'react';
import { useTranslation } from '../../i18n';
import styles from './Intro.module.scss';

const Intro: React.FC = () => {
    const {t} = useTranslation();

    return <p className={styles.intro}>{t('resume.intro')}</p>
}

export default Intro;