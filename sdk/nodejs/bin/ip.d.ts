import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * A Fly.io IP address allocation for an application.
 */
export declare class IP extends pulumi.CustomResource {
    /**
     * Get an existing IP resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IP;
    /**
     * Returns true if the given object is an instance of IP.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IP;
    /**
     * The allocated IP address.
     */
    readonly address: pulumi.Output<string>;
    /**
     * The application the IP address is allocated for.
     */
    readonly app: pulumi.Output<string>;
    /**
     * When the IP address was allocated.
     */
    readonly createdAt: pulumi.Output<outputs.time.Time>;
    /**
     * The Fly.io IP address ID.
     */
    readonly flyId: pulumi.Output<string | undefined>;
    /**
     * The input arguments used to allocate the IP address.
     */
    readonly input: pulumi.Output<outputs.IPArgs>;
    /**
     * The network the IP address belongs to.
     */
    readonly network: pulumi.Output<string | undefined>;
    /**
     * The region the IP address is allocated in.
     */
    readonly region: pulumi.Output<string | undefined>;
    /**
     * The type of IP address (v4 or v6).
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a IP resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IPArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a IP resource.
 */
export interface IPArgs {
    /**
     * The type of IP address (v4, v6, shared_v4, or private_v6).
     */
    addrType: pulumi.Input<string>;
    /**
     * The name of the Fly.io application to allocate the IP address for.
     */
    app: pulumi.Input<string>;
    /**
     * The network to allocate the IP address in.
     */
    network?: pulumi.Input<string>;
    /**
     * The region to allocate the IP address in. This is required for non-shared IP addresses.
     */
    region?: pulumi.Input<string>;
}
