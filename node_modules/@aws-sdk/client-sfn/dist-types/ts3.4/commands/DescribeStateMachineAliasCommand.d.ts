import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeStateMachineAliasInput,
  DescribeStateMachineAliasOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeStateMachineAliasCommandInput
  extends DescribeStateMachineAliasInput {}
export interface DescribeStateMachineAliasCommandOutput
  extends DescribeStateMachineAliasOutput,
    __MetadataBearer {}
export declare class DescribeStateMachineAliasCommand extends $Command<
  DescribeStateMachineAliasCommandInput,
  DescribeStateMachineAliasCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeStateMachineAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeStateMachineAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStateMachineAliasCommandInput,
    DescribeStateMachineAliasCommandOutput
  >;
  private serialize;
  private deserialize;
}
