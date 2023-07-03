import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteStateMachineInput,
  DeleteStateMachineOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DeleteStateMachineCommandInput
  extends DeleteStateMachineInput {}
export interface DeleteStateMachineCommandOutput
  extends DeleteStateMachineOutput,
    __MetadataBearer {}
export declare class DeleteStateMachineCommand extends $Command<
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DeleteStateMachineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteStateMachineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput>;
  private serialize;
  private deserialize;
}
