import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useTranslation } from '../../i18n';
import styles from './Skills.module.scss';
import Section from '../Section/Section';
import i18nConfig from '../../i18n';
import useTranslationFileImport from '../../hooks/useTranslationFileImport';
import { WithTranslation } from 'next-i18next';

const Skills: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const skillsMap = useTranslationFileImport<{ skills: string[] }>({
        fileName: 'skills',
        language: i18n.language,
    });

    return (
        <Section header={t('resume.skills.header')}>
            <ul className={styles.skillsList}>
                {skillsMap &&
                    skillsMap.skills.map((skill) => (
                        <li key={skill} className={styles.skillsListItem}>
                            {skill}
                        </li>
                    ))}
            </ul>
        </Section>
    );
};

export default i18nConfig.withTranslation()(Skills);
