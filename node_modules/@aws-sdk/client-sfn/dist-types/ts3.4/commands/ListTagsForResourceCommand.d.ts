import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListTagsForResourceCommandInput
  extends ListTagsForResourceInput {}
export interface ListTagsForResourceCommandOutput
  extends ListTagsForResourceOutput,
    __MetadataBearer {}
export declare class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListTagsForResourceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTagsForResourceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
  private serialize;
  private deserialize;
}
