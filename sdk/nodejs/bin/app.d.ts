import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * A Fly.io application.
 */
export declare class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): App;
    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is App;
    /**
     * Whether subdomains are enabled for the application.
     */
    readonly enableSubdomains: pulumi.Output<boolean | undefined>;
    /**
     * The input arguments used to create the application.
     */
    readonly input: pulumi.Output<outputs.AppArgs>;
    /**
     * The name of the Fly.io application.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The network the application belongs to.
     */
    readonly network: pulumi.Output<string | undefined>;
    /**
     * The organization the application belongs to.
     */
    readonly org: pulumi.Output<string>;
    /**
     * The current status of the application.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * Whether to enable subdomains for the application.
     */
    enableSubdomains?: pulumi.Input<boolean>;
    /**
     * The name of the Fly.io application.
     */
    name: pulumi.Input<string>;
    /**
     * The network the application belongs to.
     */
    network?: pulumi.Input<string>;
    /**
     * The organization the application belongs to.
     */
    org: pulumi.Input<string>;
}
