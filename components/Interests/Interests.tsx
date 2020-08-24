import React from 'react';
import i18nConfig, { useTranslation } from '../../i18n';
import styles from './Interests.module.scss';
import Section from '../Section/Section';
import { WithTranslation } from 'next-i18next';
import useTranslationFileImport from '../../hooks/useTranslationFileImport';
import { InterestsMap } from './interestType';

const Interests: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const interestsMap = useTranslationFileImport<InterestsMap>({
        fileName: 'interests',
        language: i18n.language,
    });

    return (
        <Section header={t('resume.interests.title')}>
            <ul className={styles.interestsList}>
                {interestsMap &&
                    interestsMap.interests.map((intereset) => (
                        <li key={intereset} className={styles.interestsListItem}>
                            {intereset}
                        </li>
                    ))}
            </ul>
        </Section>
    );
};

export default i18nConfig.withTranslation()(Interests);
