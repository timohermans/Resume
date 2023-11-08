import React from 'react';
import Section from '../Section/Section';
import Job from '../Jobs/Job';
import { JobMap } from '../Jobs/jobTypes';
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
    const { t } = useTranslation();

    const educationMap = t('education', { returnObjects: true}) as JobMap; 

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

export default Education;
