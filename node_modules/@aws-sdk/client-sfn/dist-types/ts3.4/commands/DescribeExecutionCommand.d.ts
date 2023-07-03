import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeExecutionInput,
  DescribeExecutionOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
export interface DescribeExecutionCommandOutput
  extends DescribeExecutionOutput,
    __MetadataBearer {}
export declare class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeExecutionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeExecutionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput>;
  private serialize;
  private deserialize;
}
