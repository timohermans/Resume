export type TaskMap = {
    [key: string]: Task;
};

export type Task = {
    title: string;
    descriptions: string[];
};
