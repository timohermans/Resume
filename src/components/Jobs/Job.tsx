import React from 'react';
import styles from './Jobs.module.scss';
import { JobMap } from './jobTypes';
import Tasks from '../Tasks/Tasks';

type Props = {
    jobName: string;
    jobMap: JobMap;
};

const Job: React.FC<Props> = ({ jobName, jobMap }) => {
    const job = jobMap[jobName];

    if (!job.title) return null;

    return (
        <li className={styles.jobContainer}>
            <aside className={styles.jobTimeline}>
                <div className={styles.jobMarker} />
            </aside>

            <section className={styles.job}>
                <h3 className={styles.title}>{job.title}</h3>
                <h4 className={styles.subTitle}>{job.company}</h4>
                <p className={styles.dateLocation}>
                    <span>{job.date}</span>
                    <span>{job.location}</span>
                </p>
                <p className={styles.companyDescription}>
                    {job.companyDescription}
                </p>
                <Tasks taskMap={job?.tasks} />
            </section>
        </li>
    );
};

export default Job;
