import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { SendTaskFailureInput, SendTaskFailureOutput } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandInput extends SendTaskFailureInput {
}
/**
 * @public
 *
 * The output of {@link SendTaskFailureCommand}.
 */
export interface SendTaskFailureCommandOutput extends SendTaskFailureOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report that the task identified by the <code>taskToken</code> failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskFailureCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskFailureCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // SendTaskFailureInput
 *   taskToken: "STRING_VALUE", // required
 *   error: "STRING_VALUE",
 *   cause: "STRING_VALUE",
 * };
 * const command = new SendTaskFailureCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendTaskFailureCommandInput - {@link SendTaskFailureCommandInput}
 * @returns {@link SendTaskFailureCommandOutput}
 * @see {@link SendTaskFailureCommandInput} for command's `input` shape.
 * @see {@link SendTaskFailureCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidToken} (client fault)
 *  <p>The provided token is not valid.</p>
 *
 * @throws {@link TaskDoesNotExist} (client fault)
 *
 * @throws {@link TaskTimedOut} (client fault)
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export declare class SendTaskFailureCommand extends $Command<SendTaskFailureCommandInput, SendTaskFailureCommandOutput, SFNClientResolvedConfig> {
    readonly input: SendTaskFailureCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: SendTaskFailureCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTaskFailureCommandInput, SendTaskFailureCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
