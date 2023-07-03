import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { UpdateMapRunInput, UpdateMapRunOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface UpdateMapRunCommandInput extends UpdateMapRunInput {}
export interface UpdateMapRunCommandOutput
  extends UpdateMapRunOutput,
    __MetadataBearer {}
export declare class UpdateMapRunCommand extends $Command<
  UpdateMapRunCommandInput,
  UpdateMapRunCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: UpdateMapRunCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateMapRunCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMapRunCommandInput, UpdateMapRunCommandOutput>;
  private serialize;
  private deserialize;
}
