import { Paginator } from "@smithy/types";
import {
  ListMapRunsCommandInput,
  ListMapRunsCommandOutput,
} from "../commands/ListMapRunsCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
export declare function paginateListMapRuns(
  config: SFNPaginationConfiguration,
  input: ListMapRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListMapRunsCommandOutput>;
