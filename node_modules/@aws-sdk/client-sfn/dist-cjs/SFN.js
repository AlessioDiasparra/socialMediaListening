"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SFN = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const CreateActivityCommand_1 = require("./commands/CreateActivityCommand");
const CreateStateMachineAliasCommand_1 = require("./commands/CreateStateMachineAliasCommand");
const CreateStateMachineCommand_1 = require("./commands/CreateStateMachineCommand");
const DeleteActivityCommand_1 = require("./commands/DeleteActivityCommand");
const DeleteStateMachineAliasCommand_1 = require("./commands/DeleteStateMachineAliasCommand");
const DeleteStateMachineCommand_1 = require("./commands/DeleteStateMachineCommand");
const DeleteStateMachineVersionCommand_1 = require("./commands/DeleteStateMachineVersionCommand");
const DescribeActivityCommand_1 = require("./commands/DescribeActivityCommand");
const DescribeExecutionCommand_1 = require("./commands/DescribeExecutionCommand");
const DescribeMapRunCommand_1 = require("./commands/DescribeMapRunCommand");
const DescribeStateMachineAliasCommand_1 = require("./commands/DescribeStateMachineAliasCommand");
const DescribeStateMachineCommand_1 = require("./commands/DescribeStateMachineCommand");
const DescribeStateMachineForExecutionCommand_1 = require("./commands/DescribeStateMachineForExecutionCommand");
const GetActivityTaskCommand_1 = require("./commands/GetActivityTaskCommand");
const GetExecutionHistoryCommand_1 = require("./commands/GetExecutionHistoryCommand");
const ListActivitiesCommand_1 = require("./commands/ListActivitiesCommand");
const ListExecutionsCommand_1 = require("./commands/ListExecutionsCommand");
const ListMapRunsCommand_1 = require("./commands/ListMapRunsCommand");
const ListStateMachineAliasesCommand_1 = require("./commands/ListStateMachineAliasesCommand");
const ListStateMachinesCommand_1 = require("./commands/ListStateMachinesCommand");
const ListStateMachineVersionsCommand_1 = require("./commands/ListStateMachineVersionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PublishStateMachineVersionCommand_1 = require("./commands/PublishStateMachineVersionCommand");
const SendTaskFailureCommand_1 = require("./commands/SendTaskFailureCommand");
const SendTaskHeartbeatCommand_1 = require("./commands/SendTaskHeartbeatCommand");
const SendTaskSuccessCommand_1 = require("./commands/SendTaskSuccessCommand");
const StartExecutionCommand_1 = require("./commands/StartExecutionCommand");
const StartSyncExecutionCommand_1 = require("./commands/StartSyncExecutionCommand");
const StopExecutionCommand_1 = require("./commands/StopExecutionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateMapRunCommand_1 = require("./commands/UpdateMapRunCommand");
const UpdateStateMachineAliasCommand_1 = require("./commands/UpdateStateMachineAliasCommand");
const UpdateStateMachineCommand_1 = require("./commands/UpdateStateMachineCommand");
const SFNClient_1 = require("./SFNClient");
const commands = {
    CreateActivityCommand: CreateActivityCommand_1.CreateActivityCommand,
    CreateStateMachineCommand: CreateStateMachineCommand_1.CreateStateMachineCommand,
    CreateStateMachineAliasCommand: CreateStateMachineAliasCommand_1.CreateStateMachineAliasCommand,
    DeleteActivityCommand: DeleteActivityCommand_1.DeleteActivityCommand,
    DeleteStateMachineCommand: DeleteStateMachineCommand_1.DeleteStateMachineCommand,
    DeleteStateMachineAliasCommand: DeleteStateMachineAliasCommand_1.DeleteStateMachineAliasCommand,
    DeleteStateMachineVersionCommand: DeleteStateMachineVersionCommand_1.DeleteStateMachineVersionCommand,
    DescribeActivityCommand: DescribeActivityCommand_1.DescribeActivityCommand,
    DescribeExecutionCommand: DescribeExecutionCommand_1.DescribeExecutionCommand,
    DescribeMapRunCommand: DescribeMapRunCommand_1.DescribeMapRunCommand,
    DescribeStateMachineCommand: DescribeStateMachineCommand_1.DescribeStateMachineCommand,
    DescribeStateMachineAliasCommand: DescribeStateMachineAliasCommand_1.DescribeStateMachineAliasCommand,
    DescribeStateMachineForExecutionCommand: DescribeStateMachineForExecutionCommand_1.DescribeStateMachineForExecutionCommand,
    GetActivityTaskCommand: GetActivityTaskCommand_1.GetActivityTaskCommand,
    GetExecutionHistoryCommand: GetExecutionHistoryCommand_1.GetExecutionHistoryCommand,
    ListActivitiesCommand: ListActivitiesCommand_1.ListActivitiesCommand,
    ListExecutionsCommand: ListExecutionsCommand_1.ListExecutionsCommand,
    ListMapRunsCommand: ListMapRunsCommand_1.ListMapRunsCommand,
    ListStateMachineAliasesCommand: ListStateMachineAliasesCommand_1.ListStateMachineAliasesCommand,
    ListStateMachinesCommand: ListStateMachinesCommand_1.ListStateMachinesCommand,
    ListStateMachineVersionsCommand: ListStateMachineVersionsCommand_1.ListStateMachineVersionsCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    PublishStateMachineVersionCommand: PublishStateMachineVersionCommand_1.PublishStateMachineVersionCommand,
    SendTaskFailureCommand: SendTaskFailureCommand_1.SendTaskFailureCommand,
    SendTaskHeartbeatCommand: SendTaskHeartbeatCommand_1.SendTaskHeartbeatCommand,
    SendTaskSuccessCommand: SendTaskSuccessCommand_1.SendTaskSuccessCommand,
    StartExecutionCommand: StartExecutionCommand_1.StartExecutionCommand,
    StartSyncExecutionCommand: StartSyncExecutionCommand_1.StartSyncExecutionCommand,
    StopExecutionCommand: StopExecutionCommand_1.StopExecutionCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    UpdateMapRunCommand: UpdateMapRunCommand_1.UpdateMapRunCommand,
    UpdateStateMachineCommand: UpdateStateMachineCommand_1.UpdateStateMachineCommand,
    UpdateStateMachineAliasCommand: UpdateStateMachineAliasCommand_1.UpdateStateMachineAliasCommand,
};
class SFN extends SFNClient_1.SFNClient {
}
exports.SFN = SFN;
(0, smithy_client_1.createAggregatedClient)(commands, SFN);
