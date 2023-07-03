import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { StopExecutionInput, StopExecutionOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface StopExecutionCommandInput extends StopExecutionInput {}
export interface StopExecutionCommandOutput
  extends StopExecutionOutput,
    __MetadataBearer {}
export declare class StopExecutionCommand extends $Command<
  StopExecutionCommandInput,
  StopExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: StopExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StopExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopExecutionCommandInput, StopExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
