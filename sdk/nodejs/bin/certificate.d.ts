import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * A Fly.io SSL/TLS certificate for an app's domain.
 */
export declare class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Certificate;
    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Certificate;
    /**
     * Whether ACME ALPN verification is configured.
     */
    readonly acmeAlpnConfigured: pulumi.Output<boolean>;
    /**
     * Whether ACME DNS verification is configured.
     */
    readonly acmeDnsConfigured: pulumi.Output<boolean>;
    /**
     * The name of the Fly app.
     */
    readonly app: pulumi.Output<string>;
    /**
     * The certificate authority used.
     */
    readonly certificateAuthority: pulumi.Output<string>;
    /**
     * The status of the certificate.
     */
    readonly clientStatus: pulumi.Output<string>;
    /**
     * Whether the certificate is fully configured.
     */
    readonly configured: pulumi.Output<boolean>;
    /**
     * When the certificate was created.
     */
    readonly createdAt: pulumi.Output<outputs.time.Time>;
    /**
     * The DNS provider for the hostname.
     */
    readonly dnsProvider: pulumi.Output<string>;
    /**
     * Hostname for DNS validation.
     */
    readonly dnsValidationHostname: pulumi.Output<string>;
    /**
     * Instructions for DNS validation.
     */
    readonly dnsValidationInstructions: pulumi.Output<string>;
    /**
     * Target for DNS validation.
     */
    readonly dnsValidationTarget: pulumi.Output<string>;
    /**
     * The Fly.io certificate ID.
     */
    readonly flyId: pulumi.Output<string>;
    /**
     * The hostname for the certificate.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The input arguments used to create the certificate.
     */
    readonly input: pulumi.Output<outputs.CertificateArgs>;
    /**
     * Whether the hostname is an apex domain.
     */
    readonly isApex: pulumi.Output<boolean>;
    /**
     * Whether the certificate is a wildcard certificate.
     */
    readonly isWildcard: pulumi.Output<boolean>;
    /**
     * The source of the certificate.
     */
    readonly source: pulumi.Output<string>;
    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The name of the Fly app to add the certificate to.
     */
    app: pulumi.Input<string>;
    /**
     * The hostname for the certificate (e.g., example.com).
     */
    hostname: pulumi.Input<string>;
}
