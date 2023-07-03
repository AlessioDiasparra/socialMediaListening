import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeStateMachineInput,
  DescribeStateMachineOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeStateMachineCommandInput
  extends DescribeStateMachineInput {}
export interface DescribeStateMachineCommandOutput
  extends DescribeStateMachineOutput,
    __MetadataBearer {}
export declare class DescribeStateMachineCommand extends $Command<
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeStateMachineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeStateMachineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStateMachineCommandInput,
    DescribeStateMachineCommandOutput
  >;
  private serialize;
  private deserialize;
}
