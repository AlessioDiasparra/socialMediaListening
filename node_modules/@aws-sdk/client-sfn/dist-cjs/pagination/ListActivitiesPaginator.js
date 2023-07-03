"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListActivities = void 0;
const ListActivitiesCommand_1 = require("../commands/ListActivitiesCommand");
const SFNClient_1 = require("../SFNClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListActivitiesCommand_1.ListActivitiesCommand(input), ...args);
};
async function* paginateListActivities(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SFNClient_1.SFNClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SFN | SFNClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListActivities = paginateListActivities;
