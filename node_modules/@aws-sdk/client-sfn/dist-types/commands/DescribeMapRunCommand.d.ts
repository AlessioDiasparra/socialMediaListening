import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DescribeMapRunInput, DescribeMapRunOutput } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandInput extends DescribeMapRunInput {
}
/**
 * @public
 *
 * The output of {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandOutput extends DescribeMapRunOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeMapRunCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeMapRunCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeMapRunInput
 *   mapRunArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMapRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMapRunOutput
 * //   mapRunArn: "STRING_VALUE", // required
 * //   executionArn: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "ABORTED", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"),
 * //   maxConcurrency: Number("int"), // required
 * //   toleratedFailurePercentage: Number("float"), // required
 * //   toleratedFailureCount: Number("long"), // required
 * //   itemCounts: { // MapRunItemCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //   },
 * //   executionCounts: { // MapRunExecutionCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMapRunCommandInput - {@link DescribeMapRunCommandInput}
 * @returns {@link DescribeMapRunCommandOutput}
 * @see {@link DescribeMapRunCommandInput} for command's `input` shape.
 * @see {@link DescribeMapRunCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export declare class DescribeMapRunCommand extends $Command<DescribeMapRunCommandInput, DescribeMapRunCommandOutput, SFNClientResolvedConfig> {
    readonly input: DescribeMapRunCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeMapRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMapRunCommandInput, DescribeMapRunCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
