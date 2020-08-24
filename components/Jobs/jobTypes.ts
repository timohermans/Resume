export type JobMap = {
    [name: string]: {
        title: string;
        company: string;
        date: string;
        companyDescription: string;
        tasks: JobTaskMap;
    };
};

export type JobTaskMap = {
    [key: string]: {
        title: string;
        description1: string;
        description2: string;
        description3: string;
    };
};
