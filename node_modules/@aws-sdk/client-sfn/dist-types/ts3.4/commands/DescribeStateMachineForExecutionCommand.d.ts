import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeStateMachineForExecutionCommandInput
  extends DescribeStateMachineForExecutionInput {}
export interface DescribeStateMachineForExecutionCommandOutput
  extends DescribeStateMachineForExecutionOutput,
    __MetadataBearer {}
export declare class DescribeStateMachineForExecutionCommand extends $Command<
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeStateMachineForExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeStateMachineForExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStateMachineForExecutionCommandInput,
    DescribeStateMachineForExecutionCommandOutput
  >;
  private serialize;
  private deserialize;
}
