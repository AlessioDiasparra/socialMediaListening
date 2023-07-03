import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { ListExecutionsInput, ListExecutionsOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListExecutionsCommandInput extends ListExecutionsInput {}
export interface ListExecutionsCommandOutput
  extends ListExecutionsOutput,
    __MetadataBearer {}
export declare class ListExecutionsCommand extends $Command<
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListExecutionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListExecutionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExecutionsCommandInput, ListExecutionsCommandOutput>;
  private serialize;
  private deserialize;
}
