declare module 'neko.js' {
    export class Client {
        public constructor(key: string);
        public pat(): Promise<object>;
        public hug(): Promise<object>;
        public kiss(): Promise<object>;
        public neko(): Promise<object>;
        public why(): Promise<object>;
        public LewdNeko(): Promise<object>;
        public lizard(): Promise<object>;
        private _get(endpoint: string): Promise<object>;
    }

    export const version: string;
}
