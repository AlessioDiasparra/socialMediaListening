import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateStateMachineInput,
  CreateStateMachineOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface CreateStateMachineCommandInput
  extends CreateStateMachineInput {}
export interface CreateStateMachineCommandOutput
  extends CreateStateMachineOutput,
    __MetadataBearer {}
export declare class CreateStateMachineCommand extends $Command<
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: CreateStateMachineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateStateMachineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStateMachineCommandInput, CreateStateMachineCommandOutput>;
  private serialize;
  private deserialize;
}
