import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from '../../i18n';
import styles from './Jobs.module.scss';
import Section from '../Section/Section';
import i18nConfig from '../../i18n';
import { WithTranslation } from 'next-i18next';
import Job from './Job';
import { JobMap } from './jobTypes';

const Jobs: React.FC<WithTranslation> = ({ i18n }) => {
    const { t } = useTranslation();
    const language = i18n.language;
    const [jobs, setJobs] = useState<JobMap>(null);

    const fetchJobs = async () => {
        // improvement here could be to rip out the jobs json
        // put it in a different file in the locale folder :)
        const translations = await import(
            `../../public/static/locales/${language}/common.json`
        );

        setJobs(translations.resume.jobs as JobMap);
    };

    useEffect(() => {
        fetchJobs();
    });

    return (
        <Section header={t('resume.jobsSection.header')}>
            <ul>
                {jobs &&
                    Object.keys(jobs).map((jobName: string) => (
                        <Job key={jobName} jobName={jobName} jobMap={jobs} />
                    ))}
            </ul>
        </Section>
    );
};

export default i18nConfig.withTranslation()(Jobs);
