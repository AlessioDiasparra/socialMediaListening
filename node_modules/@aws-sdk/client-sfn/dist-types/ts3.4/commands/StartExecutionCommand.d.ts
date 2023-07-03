import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { StartExecutionInput, StartExecutionOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface StartExecutionCommandInput extends StartExecutionInput {}
export interface StartExecutionCommandOutput
  extends StartExecutionOutput,
    __MetadataBearer {}
export declare class StartExecutionCommand extends $Command<
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: StartExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartExecutionCommandInput, StartExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
