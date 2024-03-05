export type CallbackFunction<T> = (data: T) => void;

export type Options = {
  sources?: string;
};

export type URLOptions = {
  sources?: string;
  apiKey?:string
};

export type ApiOptions = {
  apiKey: string | undefined
};
