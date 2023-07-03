import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteStateMachineVersionInput,
  DeleteStateMachineVersionOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DeleteStateMachineVersionCommandInput
  extends DeleteStateMachineVersionInput {}
export interface DeleteStateMachineVersionCommandOutput
  extends DeleteStateMachineVersionOutput,
    __MetadataBearer {}
export declare class DeleteStateMachineVersionCommand extends $Command<
  DeleteStateMachineVersionCommandInput,
  DeleteStateMachineVersionCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DeleteStateMachineVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteStateMachineVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteStateMachineVersionCommandInput,
    DeleteStateMachineVersionCommandOutput
  >;
  private serialize;
  private deserialize;
}
