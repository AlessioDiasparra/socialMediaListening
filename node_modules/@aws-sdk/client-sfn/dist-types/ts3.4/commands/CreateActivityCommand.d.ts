import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { CreateActivityInput, CreateActivityOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface CreateActivityCommandInput extends CreateActivityInput {}
export interface CreateActivityCommandOutput
  extends CreateActivityOutput,
    __MetadataBearer {}
export declare class CreateActivityCommand extends $Command<
  CreateActivityCommandInput,
  CreateActivityCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: CreateActivityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateActivityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActivityCommandInput, CreateActivityCommandOutput>;
  private serialize;
  private deserialize;
}
