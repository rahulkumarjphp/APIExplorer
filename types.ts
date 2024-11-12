export interface Provider {
    name: string;
    title: string;
}

export interface API {
    name: string;
    description: string;
    [key: string]: any;
}