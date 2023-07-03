import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface GetExecutionHistoryCommandInput
  extends GetExecutionHistoryInput {}
export interface GetExecutionHistoryCommandOutput
  extends GetExecutionHistoryOutput,
    __MetadataBearer {}
export declare class GetExecutionHistoryCommand extends $Command<
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: GetExecutionHistoryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetExecutionHistoryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput>;
  private serialize;
  private deserialize;
}
