import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  StartSyncExecutionInput,
  StartSyncExecutionOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface StartSyncExecutionCommandInput
  extends StartSyncExecutionInput {}
export interface StartSyncExecutionCommandOutput
  extends StartSyncExecutionOutput,
    __MetadataBearer {}
export declare class StartSyncExecutionCommand extends $Command<
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: StartSyncExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartSyncExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
