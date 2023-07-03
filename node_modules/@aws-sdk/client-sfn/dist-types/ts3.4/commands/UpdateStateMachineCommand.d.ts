import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateStateMachineInput,
  UpdateStateMachineOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface UpdateStateMachineCommandInput
  extends UpdateStateMachineInput {}
export interface UpdateStateMachineCommandOutput
  extends UpdateStateMachineOutput,
    __MetadataBearer {}
export declare class UpdateStateMachineCommand extends $Command<
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: UpdateStateMachineCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateStateMachineCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput>;
  private serialize;
  private deserialize;
}
