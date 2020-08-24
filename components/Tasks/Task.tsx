import React from 'react';
import { Task as TaskType, TaskMap } from './taskTypes';
import DescriptionList from '../DescriptionList/DescriptionList';
import styles from './Tasks.module.scss';

type Props = {
    index: string;
    taskMap: TaskMap;
};

const Task: React.FC<Props> = ({ index, taskMap }) => {
    const taskData = taskMap[index];
    const task = Object.keys(taskData).reduce<TaskType>(
        (taskNew: TaskType, property: string) => {
            if (property === 'title') taskNew.title = taskData[property];
            if (property.startsWith('description'))
                taskNew.descriptions.push(taskData[property]);
            return taskNew;
        },
        {
            title: '',
            descriptions: [],
        }
    );

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
