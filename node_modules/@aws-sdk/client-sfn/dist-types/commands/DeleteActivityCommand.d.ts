import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteActivityCommand}.
 */
export interface DeleteActivityCommandInput extends DeleteActivityInput {
}
/**
 * @public
 *
 * The output of {@link DeleteActivityCommand}.
 */
export interface DeleteActivityCommandOutput extends DeleteActivityOutput, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes an activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DeleteActivityInput
 *   activityArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteActivityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteActivityCommandInput - {@link DeleteActivityCommandInput}
 * @returns {@link DeleteActivityCommandOutput}
 * @see {@link DeleteActivityCommandInput} for command's `input` shape.
 * @see {@link DeleteActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export declare class DeleteActivityCommand extends $Command<DeleteActivityCommandInput, DeleteActivityCommandOutput, SFNClientResolvedConfig> {
    readonly input: DeleteActivityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteActivityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActivityCommandInput, DeleteActivityCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
