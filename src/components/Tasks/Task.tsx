import React from 'react';
import { TaskMap, Task } from './taskTypes';
import DescriptionList from '../DescriptionList/DescriptionList';
import styles from './Tasks.module.scss';

type Props = {
    index: string;
    taskMap: TaskMap;
};

const Task: React.FC<Props> = ({ index, taskMap }) => {
    const task: Task = taskMap[index];

    return (
        <section className={styles.task}>
            <div className={styles.borderTopRight} />
            <div className={styles.borderTopLeft} />
            <div className={styles.borderBottomLeft} />
            <div className={styles.borderBottomRight} />
            <h5 className={styles.title}>{task.title}</h5>
            <DescriptionList descriptions={task.descriptions} />
        </section>
    );
};

export default Task;
