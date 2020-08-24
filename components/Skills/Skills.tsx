import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useTranslation } from '../../i18n';
import styles from './Skills.module.scss';
import Section from '../Section/Section';

const skills = [
    'React',
    'Next.js',
    'GraphQL',
    'Docker',
    'Git',
    'Django',
    'Spring Boot',
    'Angular',
    '.NET Core',
    'PostgreSQL',
    'Node.js',
    'Unit/Integration testing',
    'Laravel',
    'CI/CD',
    'Azure',
    'Heroku',
];

const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Section header={t('resume.skills.header')}>
            <ul className={styles.skillsList}>
                {skills.map((skill) => (
                    <li key={skill} className={styles.skillsListItem}>
                        {skill}
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Skills;
