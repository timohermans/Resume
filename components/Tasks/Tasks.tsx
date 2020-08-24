import React from 'react';
import { TaskMap } from './taskTypes';
import Task from './Task';

type Props = {
    taskMap: TaskMap;
};

const Tasks: React.FC<Props> = ({ taskMap }) => {
    if (!taskMap) return null;
    const taskIndices = Object.keys(taskMap);

    return (
        <>
            {taskIndices.map((taskIndex: string) => (
                <Task key={taskIndex} index={taskIndex} taskMap={taskMap} />
            ))}
        </>
    );
};

export default Tasks;
