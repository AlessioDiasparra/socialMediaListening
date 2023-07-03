import { Paginator } from "@smithy/types";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "../commands/ListActivitiesCommand";
import { SFNPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListActivities(config: SFNPaginationConfiguration, input: ListActivitiesCommandInput, ...additionalArguments: any): Paginator<ListActivitiesCommandOutput>;
