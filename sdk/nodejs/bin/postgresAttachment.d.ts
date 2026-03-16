import * as pulumi from "@pulumi/pulumi";
/**
 * A Fly.io Postgres attachment connects a Postgres database to an application.
 */
export declare class PostgresAttachment extends pulumi.CustomResource {
    /**
     * Get an existing PostgresAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PostgresAttachment;
    /**
     * Returns true if the given object is an instance of PostgresAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PostgresAttachment;
    /**
     * The application to attach the Postgres database to.
     */
    readonly app: pulumi.Output<string>;
    /**
     * The unique ID of the Postgres attachment.
     */
    readonly attachmentId: pulumi.Output<string>;
    /**
     * The PostgreSQL connection string.
     */
    readonly connectionString: pulumi.Output<string>;
    /**
     * The name of the database to use.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * The database user to connect as.
     */
    readonly databaseUser: pulumi.Output<string | undefined>;
    /**
     * Whether to manually enter the connection details.
     */
    readonly manualEntry: pulumi.Output<boolean | undefined>;
    /**
     * The Postgres cluster to attach.
     */
    readonly postgres: pulumi.Output<string>;
    /**
     * The environment variable name that contains the connection string.
     */
    readonly variableName: pulumi.Output<string>;
    /**
     * Create a PostgresAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PostgresAttachmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a PostgresAttachment resource.
 */
export interface PostgresAttachmentArgs {
    /**
     * The application to attach the Postgres database to.
     */
    app: pulumi.Input<string>;
    /**
     * The name of the database to use.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The database user to connect as.
     */
    databaseUser?: pulumi.Input<string>;
    /**
     * Whether to manually enter the connection details.
     */
    manualEntry?: pulumi.Input<boolean>;
    /**
     * The Postgres cluster to attach.
     */
    postgres: pulumi.Input<string>;
    /**
     * The environment variable name to store the connection string.
     */
    variableName?: pulumi.Input<string>;
}
