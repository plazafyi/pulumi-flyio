import * as pulumi from "@pulumi/pulumi";
/**
 * Manages application secrets for a Fly.io application.
 */
export declare class Secrets extends pulumi.CustomResource {
    /**
     * Get an existing Secrets resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Secrets;
    /**
     * Returns true if the given object is an instance of Secrets.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Secrets;
    /**
     * The Fly.io application the secrets are set for.
     */
    readonly app: pulumi.Output<string>;
    /**
     * The secret values, as key-value pairs.
     */
    readonly values: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a Secrets resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Secrets resource.
 */
export interface SecretsArgs {
    /**
     * The Fly.io application to set secrets for.
     */
    app: pulumi.Input<string>;
    /**
     * The secret values to set, as key-value pairs.
     */
    values: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
