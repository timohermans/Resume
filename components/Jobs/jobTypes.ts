import { TaskMap } from '../Tasks/taskTypes';

export type JobMap = {
    [name: string]: {
        title: string;
        company: string;
        date: string;
        companyDescription: string;
        tasks: TaskMap;
    };
};
