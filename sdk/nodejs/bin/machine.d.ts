import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * A Fly.io machine represents a VM instance that runs your application.
 */
export declare class Machine extends pulumi.CustomResource {
    /**
     * Get an existing Machine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Machine;
    /**
     * Returns true if the given object is an instance of Machine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Machine;
    /**
     * The Fly.io application the machine belongs to.
     */
    readonly app: pulumi.Output<string>;
    readonly checks: pulumi.Output<outputs.flyio.CheckStatus[] | undefined>;
    readonly config: pulumi.Output<outputs.flyio.FlyMachineConfig>;
    readonly createdAt: pulumi.Output<string | undefined>;
    /**
     * The deployment strategy used for the machine.
     */
    readonly deploymentStrategy: pulumi.Output<string | undefined>;
    readonly events: pulumi.Output<outputs.flyio.MachineEvent[] | undefined>;
    readonly flyId: pulumi.Output<string>;
    readonly hostStatus: pulumi.Output<string | undefined>;
    readonly imageRef: pulumi.Output<outputs.flyio.ImageRef | undefined>;
    readonly incompleteConfig: pulumi.Output<outputs.flyio.FlyMachineConfig | undefined>;
    /**
     * The input arguments used to create the machine.
     */
    readonly input: pulumi.Output<outputs.MachineArgs>;
    readonly instanceId: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    readonly nonce: pulumi.Output<string | undefined>;
    readonly privateIp: pulumi.Output<string | undefined>;
    readonly region: pulumi.Output<string | undefined>;
    readonly state: pulumi.Output<string>;
    readonly updatedAt: pulumi.Output<string | undefined>;
    /**
     * Create a Machine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Machine resource.
 */
export interface MachineArgs {
    /**
     * The Fly.io application to deploy the machine to.
     */
    app: pulumi.Input<string>;
    config: pulumi.Input<inputs.flyio.FlyMachineConfigArgs>;
    /**
     * The deployment strategy for the machine.
     */
    deploymentStrategy?: pulumi.Input<string>;
    leaseTtl?: pulumi.Input<number>;
    lsvd?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    skipLaunch?: pulumi.Input<boolean>;
    skipServiceRegistration?: pulumi.Input<boolean>;
}
