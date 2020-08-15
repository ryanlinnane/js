export declare function spawn(cmd: string, args: string[]): Promise<{
    ok: boolean;
    result: string;
    code: number;
}>;
