import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendTaskHeartbeatInput,
  SendTaskHeartbeatOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface SendTaskHeartbeatCommandInput extends SendTaskHeartbeatInput {}
export interface SendTaskHeartbeatCommandOutput
  extends SendTaskHeartbeatOutput,
    __MetadataBearer {}
export declare class SendTaskHeartbeatCommand extends $Command<
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: SendTaskHeartbeatCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendTaskHeartbeatCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput>;
  private serialize;
  private deserialize;
}
