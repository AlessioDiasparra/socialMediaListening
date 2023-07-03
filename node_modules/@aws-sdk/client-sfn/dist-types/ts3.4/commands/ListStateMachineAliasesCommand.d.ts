import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListStateMachineAliasesInput,
  ListStateMachineAliasesOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListStateMachineAliasesCommandInput
  extends ListStateMachineAliasesInput {}
export interface ListStateMachineAliasesCommandOutput
  extends ListStateMachineAliasesOutput,
    __MetadataBearer {}
export declare class ListStateMachineAliasesCommand extends $Command<
  ListStateMachineAliasesCommandInput,
  ListStateMachineAliasesCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListStateMachineAliasesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListStateMachineAliasesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListStateMachineAliasesCommandInput,
    ListStateMachineAliasesCommandOutput
  >;
  private serialize;
  private deserialize;
}
