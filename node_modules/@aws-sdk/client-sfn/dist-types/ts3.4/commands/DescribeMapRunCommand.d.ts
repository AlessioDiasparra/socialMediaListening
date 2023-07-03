import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { DescribeMapRunInput, DescribeMapRunOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeMapRunCommandInput extends DescribeMapRunInput {}
export interface DescribeMapRunCommandOutput
  extends DescribeMapRunOutput,
    __MetadataBearer {}
export declare class DescribeMapRunCommand extends $Command<
  DescribeMapRunCommandInput,
  DescribeMapRunCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeMapRunCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeMapRunCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMapRunCommandInput, DescribeMapRunCommandOutput>;
  private serialize;
  private deserialize;
}
