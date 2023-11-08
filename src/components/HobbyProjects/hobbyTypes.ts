export type HobbyProjectMap = {
    [hobbyName: string]: HobbyProject;
};

export type HobbyProject = {
    title: string;
    date: string;
    descriptions: string[];
};
