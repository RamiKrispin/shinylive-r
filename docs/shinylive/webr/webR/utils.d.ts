export type ResolveFn = (_value?: unknown) => void;
export type RejectFn = (_reason?: any) => void;
export declare function promiseHandles(): {
    resolve: (_value?: unknown) => void;
    reject: (_reason?: any) => void;
    promise: Promise<unknown>;
};
export declare function sleep(ms: number): Promise<unknown>;
export declare function replaceInObject<T>(obj: T | T[], test: (obj: any) => boolean, replacer: (obj: any, ...replacerArgs: any[]) => unknown, ...replacerArgs: unknown[]): T | T[];
export declare function newCrossOriginWorker(url: string, cb: (worker: Worker) => void): void;
export declare function isCrossOrigin(urlString: string): boolean;
export declare function throwUnreachable(context?: string): void;
