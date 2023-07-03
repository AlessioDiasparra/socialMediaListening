import { Paginator } from "@smithy/types";
import {
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput,
} from "../commands/ListStateMachinesCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
export declare function paginateListStateMachines(
  config: SFNPaginationConfiguration,
  input: ListStateMachinesCommandInput,
  ...additionalArguments: any
): Paginator<ListStateMachinesCommandOutput>;
