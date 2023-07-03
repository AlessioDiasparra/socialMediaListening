import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  PublishStateMachineVersionInput,
  PublishStateMachineVersionOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface PublishStateMachineVersionCommandInput
  extends PublishStateMachineVersionInput {}
export interface PublishStateMachineVersionCommandOutput
  extends PublishStateMachineVersionOutput,
    __MetadataBearer {}
export declare class PublishStateMachineVersionCommand extends $Command<
  PublishStateMachineVersionCommandInput,
  PublishStateMachineVersionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: PublishStateMachineVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PublishStateMachineVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PublishStateMachineVersionCommandInput,
    PublishStateMachineVersionCommandOutput
  >;
  private serialize;
  private deserialize;
}
