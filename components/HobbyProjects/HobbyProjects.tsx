import React from 'react';
import useTranslationFileImport from '../../hooks/useTranslationFileImport';
import { HobbyProjectMap } from './hobbyTypes';
import i18n, { useTranslation } from '../../i18n';
import { WithTranslation } from 'next-i18next';
import Section from '../Section/Section';
import HobbyProject from './HobbyProject';
import styles from './HobbyProjects.module.scss';

const HobbyProjects: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const hobbyProjectMap = useTranslationFileImport<HobbyProjectMap>({
        fileName: 'hobbyProjects',
        language: i18n.language,
    });

    return (
        <Section header={t('resume.hobbyProjects.title')}>
            <ul className={styles.hobbyProjectsContainer}>
                {hobbyProjectMap &&
                    Object.keys(hobbyProjectMap).map((projectName: string) => (
                        <HobbyProject key={projectName} project={hobbyProjectMap[projectName]} />
                    ))}
            </ul>
        </Section>
    );
};

export default i18n.withTranslation()(HobbyProjects);
