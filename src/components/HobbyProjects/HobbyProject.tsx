import React from 'react';
import { HobbyProject as HobbyProjectType } from './hobbyTypes';
import DescriptionList from '../DescriptionList/DescriptionList';
import styles from './HobbyProjects.module.scss';

type Props = {
    project: HobbyProjectType;
};

const HobbyProject: React.FC<Props> = ({ project }) => {
    return (
        <li className={styles.hobbyProject}>
            <h3>{project.title}</h3>
            <p className={styles.date}>{project.date}</p>
            <DescriptionList descriptions={project.descriptions} />
        </li>
    );
};

export default HobbyProject;
