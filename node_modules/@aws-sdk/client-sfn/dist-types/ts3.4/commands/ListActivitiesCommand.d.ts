import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { ListActivitiesInput, ListActivitiesOutput } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SFNClientResolvedConfig,
} from "../SFNClient";
export { __MetadataBearer, $Command };
export interface ListActivitiesCommandInput extends ListActivitiesInput {}
export interface ListActivitiesCommandOutput
  extends ListActivitiesOutput,
    __MetadataBearer {}
export declare class ListActivitiesCommand extends $Command<
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
  SFNClientResolvedConfig
> {
  readonly input: ListActivitiesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListActivitiesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListActivitiesCommandInput, ListActivitiesCommandOutput>;
  private serialize;
  private deserialize;
}
