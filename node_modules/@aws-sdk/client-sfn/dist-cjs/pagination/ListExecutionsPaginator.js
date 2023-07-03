"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListExecutions = void 0;
const ListExecutionsCommand_1 = require("../commands/ListExecutionsCommand");
const SFNClient_1 = require("../SFNClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListExecutionsCommand_1.ListExecutionsCommand(input), ...args);
};
async function* paginateListExecutions(config, input, ...additionalArguments) {
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
exports.paginateListExecutions = paginateListExecutions;
