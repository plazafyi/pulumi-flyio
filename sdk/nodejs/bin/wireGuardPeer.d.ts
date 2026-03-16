import * as pulumi from "@pulumi/pulumi";
/**
 * A Fly.io WireGuard peer for private network connectivity.
 */
export declare class WireGuardPeer extends pulumi.CustomResource {
    /**
     * Get an existing WireGuardPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WireGuardPeer;
    /**
     * Returns true if the given object is an instance of WireGuardPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WireGuardPeer;
    /**
     * The endpoint IP address for the WireGuard peer.
     */
    readonly endpointIp: pulumi.Output<string>;
    /**
     * The name of the WireGuard peer.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The network the WireGuard peer belongs to.
     */
    readonly network: pulumi.Output<string | undefined>;
    /**
     * The organization the WireGuard peer belongs to.
     */
    readonly org: pulumi.Output<string>;
    /**
     * The IP address assigned to the WireGuard peer.
     */
    readonly peerIp: pulumi.Output<string>;
    /**
     * The private key of the WireGuard peer.
     */
    readonly privateKey: pulumi.Output<string>;
    /**
     * The public key of the WireGuard peer.
     */
    readonly publicKey: pulumi.Output<string>;
    /**
     * The region the WireGuard peer is in.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The WireGuard configuration for the peer.
     */
    readonly wireguardConfig: pulumi.Output<string>;
    /**
     * Create a WireGuardPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WireGuardPeerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a WireGuardPeer resource.
 */
export interface WireGuardPeerArgs {
    /**
     * The name of the WireGuard peer.
     */
    name?: pulumi.Input<string>;
    /**
     * The network to create the WireGuard peer in.
     */
    network?: pulumi.Input<string>;
    /**
     * The organization to create the WireGuard peer in.
     */
    org: pulumi.Input<string>;
    /**
     * The region to create the WireGuard peer in.
     */
    region?: pulumi.Input<string>;
}
