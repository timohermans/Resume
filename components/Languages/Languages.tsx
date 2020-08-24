import React from 'react';
import Section from '../Section/Section';
import i18n, { useTranslation } from '../../i18n';
import useTranslationFileImport from '../../hooks/useTranslationFileImport';
import { Language as LanguageType, LanguageMap } from './languageTypes';
import { WithTranslation } from 'next-i18next';
import styles from './Languages.module.scss';

const Languages: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const languageMap = useTranslationFileImport<LanguageMap>({
        fileName: 'languages',
        language: i18n.language,
    });

    return (
        <Section header={t('resume.languages.title')}>
            <ul className={styles.languages}>
                {languageMap &&
                    languageMap.languages.map((language: LanguageType) => (
                        <li key={language.language}>
                            <h3>{language.language}</h3>
                            <p className={styles.proficiency}>
                                {language.proficiency}
                            </p>
                        </li>
                    ))}
            </ul>
        </Section>
    );
};

export default i18n.withTranslation()(Languages);
