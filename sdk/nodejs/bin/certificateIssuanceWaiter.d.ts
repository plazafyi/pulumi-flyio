import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * A component that waits for a Fly.io SSL/TLS certificate to be fully issued.
 */
export declare class CertificateIssuanceWaiter extends pulumi.CustomResource {
    /**
     * Get an existing CertificateIssuanceWaiter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CertificateIssuanceWaiter;
    /**
     * Returns true if the given object is an instance of CertificateIssuanceWaiter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateIssuanceWaiter;
    /**
     * The name of the Fly app.
     */
    readonly app: pulumi.Output<string>;
    /**
     * The certificate authority used.
     */
    readonly certificateAuthority: pulumi.Output<string>;
    /**
     * The Fly.io certificate ID.
     */
    readonly certificateId: pulumi.Output<string>;
    /**
     * The status of the certificate.
     */
    readonly clientStatus: pulumi.Output<string>;
    /**
     * Expiration time for the ECDSA certificate.
     */
    readonly ecdsaExpiresAt: pulumi.Output<outputs.time.Time | undefined>;
    /**
     * The hostname for the certificate.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The input arguments used for the certificate issuance waiter.
     */
    readonly input: pulumi.Output<outputs.CertificateIssuanceWaiterArgs>;
    /**
     * Whether the certificate is fully issued (has both ECDSA and RSA certificates).
     */
    readonly isFullyIssued: pulumi.Output<boolean>;
    /**
     * When the certificate was fully issued.
     */
    readonly issuedAt: pulumi.Output<outputs.time.Time>;
    /**
     * Expiration time for the RSA certificate.
     */
    readonly rsaExpiresAt: pulumi.Output<outputs.time.Time | undefined>;
    /**
     * The timeout duration used for waiting.
     */
    readonly timeout: pulumi.Output<number>;
    /**
     * Create a CertificateIssuanceWaiter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateIssuanceWaiterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a CertificateIssuanceWaiter resource.
 */
export interface CertificateIssuanceWaiterArgs {
    /**
     * The name of the Fly app that the certificate is associated with.
     */
    app: pulumi.Input<string>;
    /**
     * The hostname for the certificate (e.g., example.com).
     */
    hostname: pulumi.Input<string>;
    /**
     * The maximum time to wait for the certificate to be fully issued. Formatted like 5s, 5m, etc.
     */
    timeout: pulumi.Input<number>;
}
