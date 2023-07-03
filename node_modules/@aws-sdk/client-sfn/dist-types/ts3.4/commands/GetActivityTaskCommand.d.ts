import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetActivityTaskInput,
  GetActivityTaskOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface GetActivityTaskCommandInput extends GetActivityTaskInput {}
export interface GetActivityTaskCommandOutput
  extends GetActivityTaskOutput,
    __MetadataBearer {}
export declare class GetActivityTaskCommand extends $Command<
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: GetActivityTaskCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetActivityTaskCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput>;
  private serialize;
  private deserialize;
}
