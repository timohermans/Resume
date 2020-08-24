export type TaskMap = {
    [key: string]: {
        title: string;
        description0: string;
        description1: string;
        description2: string;
    };
};

export type Task = {
    title: string;
    descriptions: string[];
}