import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendTaskSuccessInput,
  SendTaskSuccessOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface SendTaskSuccessCommandInput extends SendTaskSuccessInput {}
export interface SendTaskSuccessCommandOutput
  extends SendTaskSuccessOutput,
    __MetadataBearer {}
export declare class SendTaskSuccessCommand extends $Command<
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: SendTaskSuccessCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendTaskSuccessCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput>;
  private serialize;
  private deserialize;
}
