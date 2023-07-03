import { GetExecutionHistoryCommand, } from "../commands/GetExecutionHistoryCommand";
import { SFNClient } from "../SFNClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new GetExecutionHistoryCommand(input), ...args);
};
export async function* paginateGetExecutionHistory(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
        if (config.client instanceof SFNClient) {
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
