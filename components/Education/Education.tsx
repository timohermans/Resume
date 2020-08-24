import React from 'react';
import Section from '../Section/Section';
import i18n, { useTranslation } from '../../i18n';
import useTranslationFileImport from '../../hooks/useTranslationFileImport';
import { WithTranslation } from 'next-i18next';
import Job from '../Jobs/Job';
import { JobMap } from '../Jobs/jobTypes';

const Education: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const educationMap = useTranslationFileImport<JobMap>({
        fileName: 'education',
        language: i18n.language,
    });

    return (
        <Section header={t('resume.education.title')}>
            <ul>
                {educationMap &&
                    Object.keys(educationMap).map((educationKey: string) => (
                        <Job
                            key={educationKey}
                            jobName={educationKey}
                            jobMap={educationMap}
                        />
                    ))}
            </ul>
        </Section>
    );
};

export default i18n.withTranslation()(Education);
