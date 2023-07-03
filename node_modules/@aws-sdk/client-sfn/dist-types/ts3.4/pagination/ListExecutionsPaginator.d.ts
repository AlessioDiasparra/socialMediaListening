import { Paginator } from "@smithy/types";
import {
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
export declare function paginateListExecutions(
  config: SFNPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutionsCommandOutput>;
