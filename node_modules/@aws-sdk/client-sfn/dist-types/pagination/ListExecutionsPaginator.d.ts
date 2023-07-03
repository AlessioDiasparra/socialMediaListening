import { Paginator } from "@smithy/types";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListExecutions(config: SFNPaginationConfiguration, input: ListExecutionsCommandInput, ...additionalArguments: any): Paginator<ListExecutionsCommandOutput>;
