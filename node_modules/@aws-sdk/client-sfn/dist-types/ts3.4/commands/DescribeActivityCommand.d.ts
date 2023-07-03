import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeActivityInput,
  DescribeActivityOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DescribeActivityCommandInput extends DescribeActivityInput {}
export interface DescribeActivityCommandOutput
  extends DescribeActivityOutput,
    __MetadataBearer {}
export declare class DescribeActivityCommand extends $Command<
  DescribeActivityCommandInput,
  DescribeActivityCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DescribeActivityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeActivityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeActivityCommandInput, DescribeActivityCommandOutput>;
  private serialize;
  private deserialize;
}
