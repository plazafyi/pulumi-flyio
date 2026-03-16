import * as pulumi from "@pulumi/pulumi";
/**
 * Generates a random string of the specified length.
 */
export declare class Random extends pulumi.CustomResource {
    /**
     * Get an existing Random resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Random;
    /**
     * Returns true if the given object is an instance of Random.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Random;
    /**
     * The length of the random string to generate.
     */
    readonly length: pulumi.Output<number>;
    /**
     * The generated random string.
     */
    readonly result: pulumi.Output<string>;
    /**
     * Create a Random resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RandomArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Random resource.
 */
export interface RandomArgs {
    /**
     * The length of the random string to generate.
     */
    length: pulumi.Input<number>;
}
