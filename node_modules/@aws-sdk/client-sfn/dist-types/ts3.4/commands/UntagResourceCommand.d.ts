import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { UntagResourceInput, UntagResourceOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface UntagResourceCommandInput extends UntagResourceInput {}
export interface UntagResourceCommandOutput
  extends UntagResourceOutput,
    __MetadataBearer {}
export declare class UntagResourceCommand extends $Command<
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: UntagResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UntagResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagResourceCommandInput, UntagResourceCommandOutput>;
  private serialize;
  private deserialize;
}
