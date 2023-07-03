import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListMapRunsInput, ListMapRunsOutput } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMapRunsCommand}.
 */
export interface ListMapRunsCommandInput extends ListMapRunsInput {
}
/**
 * @public
 *
 * The output of {@link ListMapRunsCommand}.
 */
export interface ListMapRunsCommandOutput extends ListMapRunsOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListMapRunsCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListMapRunsCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // ListMapRunsInput
 *   executionArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMapRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListMapRunsOutput
 * //   mapRuns: [ // MapRunList // required
 * //     { // MapRunListItem
 * //       executionArn: "STRING_VALUE", // required
 * //       mapRunArn: "STRING_VALUE", // required
 * //       stateMachineArn: "STRING_VALUE", // required
 * //       startDate: new Date("TIMESTAMP"), // required
 * //       stopDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMapRunsCommandInput - {@link ListMapRunsCommandInput}
 * @returns {@link ListMapRunsCommandOutput}
 * @see {@link ListMapRunsCommandInput} for command's `input` shape.
 * @see {@link ListMapRunsCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export declare class ListMapRunsCommand extends $Command<ListMapRunsCommandInput, ListMapRunsCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListMapRunsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListMapRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMapRunsCommandInput, ListMapRunsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
