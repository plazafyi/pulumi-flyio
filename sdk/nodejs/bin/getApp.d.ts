import * as pulumi from "@pulumi/pulumi";
/**
 * Gets the state of a Fly.io app.
 */
export declare function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult>;
export interface GetAppArgs {
    /**
     * The name of the app.
     */
    name: string;
}
export interface GetAppResult {
    readonly flyId: string;
    readonly name: string;
    readonly org: string;
    readonly status: string;
}
/**
 * Gets the state of a Fly.io app.
 */
export declare function getAppOutput(args: GetAppOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppResult>;
export interface GetAppOutputArgs {
    /**
     * The name of the app.
     */
    name: pulumi.Input<string>;
}
