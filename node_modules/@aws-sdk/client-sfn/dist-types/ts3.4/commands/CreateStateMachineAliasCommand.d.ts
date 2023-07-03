import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateStateMachineAliasInput,
  CreateStateMachineAliasOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface CreateStateMachineAliasCommandInput
  extends CreateStateMachineAliasInput {}
export interface CreateStateMachineAliasCommandOutput
  extends CreateStateMachineAliasOutput,
    __MetadataBearer {}
export declare class CreateStateMachineAliasCommand extends $Command<
  CreateStateMachineAliasCommandInput,
  CreateStateMachineAliasCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: CreateStateMachineAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateStateMachineAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateStateMachineAliasCommandInput,
    CreateStateMachineAliasCommandOutput
  >;
  private serialize;
  private deserialize;
}
