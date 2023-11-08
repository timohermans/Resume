import React  from 'react';
import { useTranslation } from "react-i18next";
import Section from '../Section/Section';
import Job from './Job';
import { JobMap } from "./jobTypes";

const Jobs: React.FC = () => {
    const { t } = useTranslation();

    const jobs = t('resume.jobs', {returnObjects: true}) as JobMap;

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

export default Jobs;
