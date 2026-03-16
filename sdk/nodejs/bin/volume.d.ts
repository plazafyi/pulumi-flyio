import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * A Fly.io volume provides persistent storage for your applications.
 */
export declare class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Volume;
    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Volume;
    /**
     * The Fly.io application the volume is attached to.
     */
    readonly app: pulumi.Output<string>;
    readonly attachedAllocId: pulumi.Output<string | undefined>;
    readonly attachedMachineId: pulumi.Output<string | undefined>;
    readonly autoBackupEnabled: pulumi.Output<boolean | undefined>;
    readonly blockSize: pulumi.Output<number | undefined>;
    readonly blocks: pulumi.Output<number | undefined>;
    readonly blocksAvail: pulumi.Output<number | undefined>;
    readonly blocksFree: pulumi.Output<number | undefined>;
    readonly createdAt: pulumi.Output<string | undefined>;
    readonly encrypted: pulumi.Output<boolean | undefined>;
    readonly flyId: pulumi.Output<string>;
    readonly fstype: pulumi.Output<string | undefined>;
    readonly hostStatus: pulumi.Output<string | undefined>;
    /**
     * The input arguments used to create the volume.
     */
    readonly input: pulumi.Output<outputs.VolumeArgs>;
    readonly name: pulumi.Output<string | undefined>;
    readonly region: pulumi.Output<string | undefined>;
    readonly sizeGb: pulumi.Output<number | undefined>;
    readonly snapshotRetention: pulumi.Output<number | undefined>;
    readonly state: pulumi.Output<string | undefined>;
    readonly zone: pulumi.Output<string | undefined>;
    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * The Fly.io application to attach the volume to.
     */
    app: pulumi.Input<string>;
    /**
     * Whether to enable automatic backups for the volume.
     */
    autoBackupEnabled?: pulumi.Input<boolean>;
    compute?: pulumi.Input<inputs.flyio.FlyMachineGuestArgs>;
    computeImage?: pulumi.Input<string>;
    encrypted?: pulumi.Input<boolean>;
    fstype?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    requireUniqueZone?: pulumi.Input<boolean>;
    sizeGb?: pulumi.Input<number>;
    snapshotId?: pulumi.Input<string>;
    snapshotRetention?: pulumi.Input<number>;
    sourceVolumeId?: pulumi.Input<string>;
    uniqueZoneAppWide?: pulumi.Input<boolean>;
}
