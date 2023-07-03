import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListStateMachineVersionsInput,
  ListStateMachineVersionsOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListStateMachineVersionsCommandInput
  extends ListStateMachineVersionsInput {}
export interface ListStateMachineVersionsCommandOutput
  extends ListStateMachineVersionsOutput,
    __MetadataBearer {}
export declare class ListStateMachineVersionsCommand extends $Command<
  ListStateMachineVersionsCommandInput,
  ListStateMachineVersionsCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListStateMachineVersionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListStateMachineVersionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListStateMachineVersionsCommandInput,
    ListStateMachineVersionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
