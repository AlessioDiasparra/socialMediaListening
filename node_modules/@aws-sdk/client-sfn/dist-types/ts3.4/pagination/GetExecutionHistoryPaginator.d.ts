import { Paginator } from "@smithy/types";
import {
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
export declare function paginateGetExecutionHistory(
  config: SFNPaginationConfiguration,
  input: GetExecutionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetExecutionHistoryCommandOutput>;
