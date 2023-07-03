import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface DeleteActivityCommandInput extends DeleteActivityInput {}
export interface DeleteActivityCommandOutput
  extends DeleteActivityOutput,
    __MetadataBearer {}
export declare class DeleteActivityCommand extends $Command<
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: DeleteActivityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteActivityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteActivityCommandInput, DeleteActivityCommandOutput>;
  private serialize;
  private deserialize;
}
