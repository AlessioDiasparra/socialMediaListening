import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteStateMachineAliasInput,
  DeleteStateMachineAliasOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DeleteStateMachineAliasCommandInput
  extends DeleteStateMachineAliasInput {}
export interface DeleteStateMachineAliasCommandOutput
  extends DeleteStateMachineAliasOutput,
    __MetadataBearer {}
export declare class DeleteStateMachineAliasCommand extends $Command<
  DeleteStateMachineAliasCommandInput,
  DeleteStateMachineAliasCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DeleteStateMachineAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteStateMachineAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteStateMachineAliasCommandInput,
    DeleteStateMachineAliasCommandOutput
  >;
  private serialize;
  private deserialize;
}
