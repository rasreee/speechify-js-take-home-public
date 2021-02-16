export enum DataType {
    HTML = "HTML",
    TXT = "TXT",
    JSON = "JSON",
}

export type Data = {
    type: DataType;
    source: string;
    data: string;
};

// TODO: refine this type to represent a unit of streaming content
export type StreamChunk = any;
