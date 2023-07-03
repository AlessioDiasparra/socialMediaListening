import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListStateMachinesInput,
  ListStateMachinesOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListStateMachinesCommandInput extends ListStateMachinesInput {}
export interface ListStateMachinesCommandOutput
  extends ListStateMachinesOutput,
    __MetadataBearer {}
export declare class ListStateMachinesCommand extends $Command<
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListStateMachinesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListStateMachinesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStateMachinesCommandInput, ListStateMachinesCommandOutput>;
  private serialize;
  private deserialize;
}
