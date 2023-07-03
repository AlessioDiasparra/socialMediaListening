import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendTaskFailureInput,
  SendTaskFailureOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface SendTaskFailureCommandInput extends SendTaskFailureInput {}
export interface SendTaskFailureCommandOutput
  extends SendTaskFailureOutput,
    __MetadataBearer {}
export declare class SendTaskFailureCommand extends $Command<
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: SendTaskFailureCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendTaskFailureCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskFailureCommandInput, SendTaskFailureCommandOutput>;
  private serialize;
  private deserialize;
}
