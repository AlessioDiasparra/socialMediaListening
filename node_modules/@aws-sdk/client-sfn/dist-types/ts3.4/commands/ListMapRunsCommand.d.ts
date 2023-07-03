import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { ListMapRunsInput, ListMapRunsOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListMapRunsCommandInput extends ListMapRunsInput {}
export interface ListMapRunsCommandOutput
  extends ListMapRunsOutput,
    __MetadataBearer {}
export declare class ListMapRunsCommand extends $Command<
  ListMapRunsCommandInput,
  ListMapRunsCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListMapRunsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListMapRunsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMapRunsCommandInput, ListMapRunsCommandOutput>;
  private serialize;
  private deserialize;
}
