import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateStateMachineAliasInput,
  UpdateStateMachineAliasOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface UpdateStateMachineAliasCommandInput
  extends UpdateStateMachineAliasInput {}
export interface UpdateStateMachineAliasCommandOutput
  extends UpdateStateMachineAliasOutput,
    __MetadataBearer {}
export declare class UpdateStateMachineAliasCommand extends $Command<
  UpdateStateMachineAliasCommandInput,
  UpdateStateMachineAliasCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: UpdateStateMachineAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateStateMachineAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateStateMachineAliasCommandInput,
    UpdateStateMachineAliasCommandOutput
  >;
  private serialize;
  private deserialize;
}
