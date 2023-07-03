"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_ListActivitiesCommand = exports.de_GetExecutionHistoryCommand = exports.de_GetActivityTaskCommand = exports.de_DescribeStateMachineForExecutionCommand = exports.de_DescribeStateMachineAliasCommand = exports.de_DescribeStateMachineCommand = exports.de_DescribeMapRunCommand = exports.de_DescribeExecutionCommand = exports.de_DescribeActivityCommand = exports.de_DeleteStateMachineVersionCommand = exports.de_DeleteStateMachineAliasCommand = exports.de_DeleteStateMachineCommand = exports.de_DeleteActivityCommand = exports.de_CreateStateMachineAliasCommand = exports.de_CreateStateMachineCommand = exports.de_CreateActivityCommand = exports.se_UpdateStateMachineAliasCommand = exports.se_UpdateStateMachineCommand = exports.se_UpdateMapRunCommand = exports.se_UntagResourceCommand = exports.se_TagResourceCommand = exports.se_StopExecutionCommand = exports.se_StartSyncExecutionCommand = exports.se_StartExecutionCommand = exports.se_SendTaskSuccessCommand = exports.se_SendTaskHeartbeatCommand = exports.se_SendTaskFailureCommand = exports.se_PublishStateMachineVersionCommand = exports.se_ListTagsForResourceCommand = exports.se_ListStateMachineVersionsCommand = exports.se_ListStateMachinesCommand = exports.se_ListStateMachineAliasesCommand = exports.se_ListMapRunsCommand = exports.se_ListExecutionsCommand = exports.se_ListActivitiesCommand = exports.se_GetExecutionHistoryCommand = exports.se_GetActivityTaskCommand = exports.se_DescribeStateMachineForExecutionCommand = exports.se_DescribeStateMachineAliasCommand = exports.se_DescribeStateMachineCommand = exports.se_DescribeMapRunCommand = exports.se_DescribeExecutionCommand = exports.se_DescribeActivityCommand = exports.se_DeleteStateMachineVersionCommand = exports.se_DeleteStateMachineAliasCommand = exports.se_DeleteStateMachineCommand = exports.se_DeleteActivityCommand = exports.se_CreateStateMachineAliasCommand = exports.se_CreateStateMachineCommand = exports.se_CreateActivityCommand = void 0;
exports.de_UpdateStateMachineAliasCommand = exports.de_UpdateStateMachineCommand = exports.de_UpdateMapRunCommand = exports.de_UntagResourceCommand = exports.de_TagResourceCommand = exports.de_StopExecutionCommand = exports.de_StartSyncExecutionCommand = exports.de_StartExecutionCommand = exports.de_SendTaskSuccessCommand = exports.de_SendTaskHeartbeatCommand = exports.de_SendTaskFailureCommand = exports.de_PublishStateMachineVersionCommand = exports.de_ListTagsForResourceCommand = exports.de_ListStateMachineVersionsCommand = exports.de_ListStateMachinesCommand = exports.de_ListStateMachineAliasesCommand = exports.de_ListMapRunsCommand = exports.de_ListExecutionsCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const models_0_1 = require("../models/models_0");
const SFNServiceException_1 = require("../models/SFNServiceException");
const se_CreateActivityCommand = async (input, context) => {
    const headers = sharedHeaders("CreateActivity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateActivityCommand = se_CreateActivityCommand;
const se_CreateStateMachineCommand = async (input, context) => {
    const headers = sharedHeaders("CreateStateMachine");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateStateMachineCommand = se_CreateStateMachineCommand;
const se_CreateStateMachineAliasCommand = async (input, context) => {
    const headers = sharedHeaders("CreateStateMachineAlias");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateStateMachineAliasCommand = se_CreateStateMachineAliasCommand;
const se_DeleteActivityCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteActivity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteActivityCommand = se_DeleteActivityCommand;
const se_DeleteStateMachineCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteStateMachine");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteStateMachineCommand = se_DeleteStateMachineCommand;
const se_DeleteStateMachineAliasCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteStateMachineAlias");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteStateMachineAliasCommand = se_DeleteStateMachineAliasCommand;
const se_DeleteStateMachineVersionCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteStateMachineVersion");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteStateMachineVersionCommand = se_DeleteStateMachineVersionCommand;
const se_DescribeActivityCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeActivity");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeActivityCommand = se_DescribeActivityCommand;
const se_DescribeExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeExecutionCommand = se_DescribeExecutionCommand;
const se_DescribeMapRunCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeMapRun");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeMapRunCommand = se_DescribeMapRunCommand;
const se_DescribeStateMachineCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStateMachine");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStateMachineCommand = se_DescribeStateMachineCommand;
const se_DescribeStateMachineAliasCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStateMachineAlias");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStateMachineAliasCommand = se_DescribeStateMachineAliasCommand;
const se_DescribeStateMachineForExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStateMachineForExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStateMachineForExecutionCommand = se_DescribeStateMachineForExecutionCommand;
const se_GetActivityTaskCommand = async (input, context) => {
    const headers = sharedHeaders("GetActivityTask");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetActivityTaskCommand = se_GetActivityTaskCommand;
const se_GetExecutionHistoryCommand = async (input, context) => {
    const headers = sharedHeaders("GetExecutionHistory");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetExecutionHistoryCommand = se_GetExecutionHistoryCommand;
const se_ListActivitiesCommand = async (input, context) => {
    const headers = sharedHeaders("ListActivities");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListActivitiesCommand = se_ListActivitiesCommand;
const se_ListExecutionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListExecutions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListExecutionsCommand = se_ListExecutionsCommand;
const se_ListMapRunsCommand = async (input, context) => {
    const headers = sharedHeaders("ListMapRuns");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListMapRunsCommand = se_ListMapRunsCommand;
const se_ListStateMachineAliasesCommand = async (input, context) => {
    const headers = sharedHeaders("ListStateMachineAliases");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListStateMachineAliasesCommand = se_ListStateMachineAliasesCommand;
const se_ListStateMachinesCommand = async (input, context) => {
    const headers = sharedHeaders("ListStateMachines");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListStateMachinesCommand = se_ListStateMachinesCommand;
const se_ListStateMachineVersionsCommand = async (input, context) => {
    const headers = sharedHeaders("ListStateMachineVersions");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListStateMachineVersionsCommand = se_ListStateMachineVersionsCommand;
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForResourceCommand = se_ListTagsForResourceCommand;
const se_PublishStateMachineVersionCommand = async (input, context) => {
    const headers = sharedHeaders("PublishStateMachineVersion");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PublishStateMachineVersionCommand = se_PublishStateMachineVersionCommand;
const se_SendTaskFailureCommand = async (input, context) => {
    const headers = sharedHeaders("SendTaskFailure");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendTaskFailureCommand = se_SendTaskFailureCommand;
const se_SendTaskHeartbeatCommand = async (input, context) => {
    const headers = sharedHeaders("SendTaskHeartbeat");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendTaskHeartbeatCommand = se_SendTaskHeartbeatCommand;
const se_SendTaskSuccessCommand = async (input, context) => {
    const headers = sharedHeaders("SendTaskSuccess");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendTaskSuccessCommand = se_SendTaskSuccessCommand;
const se_StartExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StartExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartExecutionCommand = se_StartExecutionCommand;
const se_StartSyncExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StartSyncExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    let { hostname: resolvedHostname } = await context.endpoint();
    if (context.disableHostPrefix !== true) {
        resolvedHostname = "sync-" + resolvedHostname;
        if (!(0, protocol_http_1.isValidHostname)(resolvedHostname)) {
            throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
        }
    }
    return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};
exports.se_StartSyncExecutionCommand = se_StartSyncExecutionCommand;
const se_StopExecutionCommand = async (input, context) => {
    const headers = sharedHeaders("StopExecution");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StopExecutionCommand = se_StopExecutionCommand;
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TagResourceCommand = se_TagResourceCommand;
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UntagResourceCommand = se_UntagResourceCommand;
const se_UpdateMapRunCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateMapRun");
    let body;
    body = JSON.stringify(se_UpdateMapRunInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateMapRunCommand = se_UpdateMapRunCommand;
const se_UpdateStateMachineCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateStateMachine");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateStateMachineCommand = se_UpdateStateMachineCommand;
const se_UpdateStateMachineAliasCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateStateMachineAlias");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateStateMachineAliasCommand = se_UpdateStateMachineAliasCommand;
const de_CreateActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateActivityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateActivityCommand = de_CreateActivityCommand;
const de_CreateActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityLimitExceeded":
        case "com.amazonaws.sfn#ActivityLimitExceeded":
            throw await de_ActivityLimitExceededRes(parsedOutput, context);
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            throw await de_InvalidNameRes(parsedOutput, context);
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            throw await de_TooManyTagsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateStateMachineCommand = de_CreateStateMachineCommand;
const de_CreateStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidDefinition":
        case "com.amazonaws.sfn#InvalidDefinition":
            throw await de_InvalidDefinitionRes(parsedOutput, context);
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.sfn#InvalidLoggingConfiguration":
            throw await de_InvalidLoggingConfigurationRes(parsedOutput, context);
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            throw await de_InvalidNameRes(parsedOutput, context);
        case "InvalidTracingConfiguration":
        case "com.amazonaws.sfn#InvalidTracingConfiguration":
            throw await de_InvalidTracingConfigurationRes(parsedOutput, context);
        case "StateMachineAlreadyExists":
        case "com.amazonaws.sfn#StateMachineAlreadyExists":
            throw await de_StateMachineAlreadyExistsRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineLimitExceeded":
        case "com.amazonaws.sfn#StateMachineLimitExceeded":
            throw await de_StateMachineLimitExceededRes(parsedOutput, context);
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            throw await de_TooManyTagsRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_CreateStateMachineAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateStateMachineAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateStateMachineAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateStateMachineAliasCommand = de_CreateStateMachineAliasCommand;
const de_CreateStateMachineAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            throw await de_InvalidNameRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.sfn#ServiceQuotaExceededException":
            throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteActivityCommand = de_DeleteActivityCommand;
const de_DeleteActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteStateMachineCommand = de_DeleteStateMachineCommand;
const de_DeleteStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteStateMachineAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteStateMachineAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteStateMachineAliasCommand = de_DeleteStateMachineAliasCommand;
const de_DeleteStateMachineAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteStateMachineVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteStateMachineVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteStateMachineVersionCommand = de_DeleteStateMachineVersionCommand;
const de_DeleteStateMachineVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeActivityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeActivityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeActivityOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeActivityCommand = de_DescribeActivityCommand;
const de_DescribeActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.sfn#ActivityDoesNotExist":
            throw await de_ActivityDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeExecutionCommand = de_DescribeExecutionCommand;
const de_DescribeExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeMapRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeMapRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeMapRunOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeMapRunCommand = de_DescribeMapRunCommand;
const de_DescribeMapRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStateMachineCommand = de_DescribeStateMachineCommand;
const de_DescribeStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeStateMachineAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStateMachineAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStateMachineAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStateMachineAliasCommand = de_DescribeStateMachineAliasCommand;
const de_DescribeStateMachineAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeStateMachineForExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStateMachineForExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStateMachineForExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStateMachineForExecutionCommand = de_DescribeStateMachineForExecutionCommand;
const de_DescribeStateMachineForExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetActivityTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetActivityTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetActivityTaskCommand = de_GetActivityTaskCommand;
const de_GetActivityTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ActivityDoesNotExist":
        case "com.amazonaws.sfn#ActivityDoesNotExist":
            throw await de_ActivityDoesNotExistRes(parsedOutput, context);
        case "ActivityWorkerLimitExceeded":
        case "com.amazonaws.sfn#ActivityWorkerLimitExceeded":
            throw await de_ActivityWorkerLimitExceededRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetExecutionHistoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetExecutionHistoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetExecutionHistoryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetExecutionHistoryCommand = de_GetExecutionHistoryCommand;
const de_GetExecutionHistoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListActivitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListActivitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListActivitiesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListActivitiesCommand = de_ListActivitiesCommand;
const de_ListActivitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListExecutionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListExecutionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListExecutionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListExecutionsCommand = de_ListExecutionsCommand;
const de_ListExecutionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListMapRunsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListMapRunsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListMapRunsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListMapRunsCommand = de_ListMapRunsCommand;
const de_ListMapRunsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListStateMachineAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListStateMachineAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListStateMachineAliasesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListStateMachineAliasesCommand = de_ListStateMachineAliasesCommand;
const de_ListStateMachineAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListStateMachinesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListStateMachinesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListStateMachinesOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListStateMachinesCommand = de_ListStateMachinesCommand;
const de_ListStateMachinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListStateMachineVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListStateMachineVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListStateMachineVersionsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListStateMachineVersionsCommand = de_ListStateMachineVersionsCommand;
const de_ListStateMachineVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTagsForResourceCommand = de_ListTagsForResourceCommand;
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PublishStateMachineVersionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PublishStateMachineVersionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PublishStateMachineVersionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PublishStateMachineVersionCommand = de_PublishStateMachineVersionCommand;
const de_PublishStateMachineVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.sfn#ServiceQuotaExceededException":
            throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SendTaskFailureCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendTaskFailureCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendTaskFailureCommand = de_SendTaskFailureCommand;
const de_SendTaskFailureCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            throw await de_TaskDoesNotExistRes(parsedOutput, context);
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            throw await de_TaskTimedOutRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SendTaskHeartbeatCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendTaskHeartbeatCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendTaskHeartbeatCommand = de_SendTaskHeartbeatCommand;
const de_SendTaskHeartbeatCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            throw await de_TaskDoesNotExistRes(parsedOutput, context);
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            throw await de_TaskTimedOutRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SendTaskSuccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendTaskSuccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendTaskSuccessCommand = de_SendTaskSuccessCommand;
const de_SendTaskSuccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOutput":
        case "com.amazonaws.sfn#InvalidOutput":
            throw await de_InvalidOutputRes(parsedOutput, context);
        case "InvalidToken":
        case "com.amazonaws.sfn#InvalidToken":
            throw await de_InvalidTokenRes(parsedOutput, context);
        case "TaskDoesNotExist":
        case "com.amazonaws.sfn#TaskDoesNotExist":
            throw await de_TaskDoesNotExistRes(parsedOutput, context);
        case "TaskTimedOut":
        case "com.amazonaws.sfn#TaskTimedOut":
            throw await de_TaskTimedOutRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_StartExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartExecutionCommand = de_StartExecutionCommand;
const de_StartExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionAlreadyExists":
        case "com.amazonaws.sfn#ExecutionAlreadyExists":
            throw await de_ExecutionAlreadyExistsRes(parsedOutput, context);
        case "ExecutionLimitExceeded":
        case "com.amazonaws.sfn#ExecutionLimitExceeded":
            throw await de_ExecutionLimitExceededRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidExecutionInput":
        case "com.amazonaws.sfn#InvalidExecutionInput":
            throw await de_InvalidExecutionInputRes(parsedOutput, context);
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            throw await de_InvalidNameRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartSyncExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartSyncExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_StartSyncExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartSyncExecutionCommand = de_StartSyncExecutionCommand;
const de_StartSyncExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidExecutionInput":
        case "com.amazonaws.sfn#InvalidExecutionInput":
            throw await de_InvalidExecutionInputRes(parsedOutput, context);
        case "InvalidName":
        case "com.amazonaws.sfn#InvalidName":
            throw await de_InvalidNameRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        case "StateMachineTypeNotSupported":
        case "com.amazonaws.sfn#StateMachineTypeNotSupported":
            throw await de_StateMachineTypeNotSupportedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StopExecutionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopExecutionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_StopExecutionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StopExecutionCommand = de_StopExecutionCommand;
const de_StopExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExecutionDoesNotExist":
        case "com.amazonaws.sfn#ExecutionDoesNotExist":
            throw await de_ExecutionDoesNotExistRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TagResourceCommand = de_TagResourceCommand;
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "TooManyTags":
        case "com.amazonaws.sfn#TooManyTags":
            throw await de_TooManyTagsRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UntagResourceCommand = de_UntagResourceCommand;
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateMapRunCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateMapRunCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateMapRunCommand = de_UpdateMapRunCommand;
const de_UpdateMapRunCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateStateMachineCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateStateMachineCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateStateMachineOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateStateMachineCommand = de_UpdateStateMachineCommand;
const de_UpdateStateMachineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "InvalidDefinition":
        case "com.amazonaws.sfn#InvalidDefinition":
            throw await de_InvalidDefinitionRes(parsedOutput, context);
        case "InvalidLoggingConfiguration":
        case "com.amazonaws.sfn#InvalidLoggingConfiguration":
            throw await de_InvalidLoggingConfigurationRes(parsedOutput, context);
        case "InvalidTracingConfiguration":
        case "com.amazonaws.sfn#InvalidTracingConfiguration":
            throw await de_InvalidTracingConfigurationRes(parsedOutput, context);
        case "MissingRequiredParameter":
        case "com.amazonaws.sfn#MissingRequiredParameter":
            throw await de_MissingRequiredParameterRes(parsedOutput, context);
        case "ServiceQuotaExceededException":
        case "com.amazonaws.sfn#ServiceQuotaExceededException":
            throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
        case "StateMachineDeleting":
        case "com.amazonaws.sfn#StateMachineDeleting":
            throw await de_StateMachineDeletingRes(parsedOutput, context);
        case "StateMachineDoesNotExist":
        case "com.amazonaws.sfn#StateMachineDoesNotExist":
            throw await de_StateMachineDoesNotExistRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateStateMachineAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateStateMachineAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateStateMachineAliasOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateStateMachineAliasCommand = de_UpdateStateMachineAliasCommand;
const de_UpdateStateMachineAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.sfn#ConflictException":
            throw await de_ConflictExceptionRes(parsedOutput, context);
        case "InvalidArn":
        case "com.amazonaws.sfn#InvalidArn":
            throw await de_InvalidArnRes(parsedOutput, context);
        case "ResourceNotFound":
        case "com.amazonaws.sfn#ResourceNotFound":
            throw await de_ResourceNotFoundRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.sfn#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ActivityDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ActivityDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ActivityLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ActivityLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ActivityWorkerLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ActivityWorkerLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExecutionAlreadyExistsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExecutionAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExecutionDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExecutionDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExecutionLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExecutionLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidArnRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidArn({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDefinitionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidDefinition({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidExecutionInputRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidExecutionInput({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidLoggingConfigurationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidLoggingConfiguration({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidNameRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidName({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidOutputRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidOutput({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTokenRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidToken({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTracingConfigurationRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidTracingConfiguration({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_MissingRequiredParameterRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.MissingRequiredParameter({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceNotFound({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ServiceQuotaExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ServiceQuotaExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StateMachineAlreadyExistsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.StateMachineAlreadyExists({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StateMachineDeletingRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.StateMachineDeleting({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StateMachineDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.StateMachineDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StateMachineLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.StateMachineLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_StateMachineTypeNotSupportedRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.StateMachineTypeNotSupported({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TaskDoesNotExistRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TaskDoesNotExist({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TaskTimedOutRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TaskTimedOut({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TooManyTagsRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.TooManyTags({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ValidationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_UpdateMapRunInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        mapRunArn: [],
        maxConcurrency: [],
        toleratedFailureCount: [],
        toleratedFailurePercentage: smithy_client_1.serializeFloat,
    });
};
const de_ActivityList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ActivityListItem(entry, context);
    });
    return retVal;
};
const de_ActivityListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        activityArn: smithy_client_1.expectString,
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        name: smithy_client_1.expectString,
    });
};
const de_CreateActivityOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        activityArn: smithy_client_1.expectString,
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_CreateStateMachineAliasOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineAliasArn: smithy_client_1.expectString,
    });
};
const de_CreateStateMachineOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineArn: smithy_client_1.expectString,
        stateMachineVersionArn: smithy_client_1.expectString,
    });
};
const de_DescribeActivityOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        activityArn: smithy_client_1.expectString,
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        name: smithy_client_1.expectString,
    });
};
const de_DescribeExecutionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        cause: smithy_client_1.expectString,
        error: smithy_client_1.expectString,
        executionArn: smithy_client_1.expectString,
        input: smithy_client_1.expectString,
        inputDetails: smithy_client_1._json,
        mapRunArn: smithy_client_1.expectString,
        name: smithy_client_1.expectString,
        output: smithy_client_1.expectString,
        outputDetails: smithy_client_1._json,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineAliasArn: smithy_client_1.expectString,
        stateMachineArn: smithy_client_1.expectString,
        stateMachineVersionArn: smithy_client_1.expectString,
        status: smithy_client_1.expectString,
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        traceHeader: smithy_client_1.expectString,
    });
};
const de_DescribeMapRunOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        executionArn: smithy_client_1.expectString,
        executionCounts: smithy_client_1._json,
        itemCounts: smithy_client_1._json,
        mapRunArn: smithy_client_1.expectString,
        maxConcurrency: smithy_client_1.expectInt32,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        status: smithy_client_1.expectString,
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        toleratedFailureCount: smithy_client_1.expectLong,
        toleratedFailurePercentage: smithy_client_1.limitedParseFloat32,
    });
};
const de_DescribeStateMachineAliasOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        description: smithy_client_1.expectString,
        name: smithy_client_1.expectString,
        routingConfiguration: smithy_client_1._json,
        stateMachineAliasArn: smithy_client_1.expectString,
        updateDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DescribeStateMachineForExecutionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        definition: smithy_client_1.expectString,
        label: smithy_client_1.expectString,
        loggingConfiguration: smithy_client_1._json,
        mapRunArn: smithy_client_1.expectString,
        name: smithy_client_1.expectString,
        revisionId: smithy_client_1.expectString,
        roleArn: smithy_client_1.expectString,
        stateMachineArn: smithy_client_1.expectString,
        tracingConfiguration: smithy_client_1._json,
        updateDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_DescribeStateMachineOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        definition: smithy_client_1.expectString,
        description: smithy_client_1.expectString,
        label: smithy_client_1.expectString,
        loggingConfiguration: smithy_client_1._json,
        name: smithy_client_1.expectString,
        revisionId: smithy_client_1.expectString,
        roleArn: smithy_client_1.expectString,
        stateMachineArn: smithy_client_1.expectString,
        status: smithy_client_1.expectString,
        tracingConfiguration: smithy_client_1._json,
        type: smithy_client_1.expectString,
    });
};
const de_ExecutionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ExecutionListItem(entry, context);
    });
    return retVal;
};
const de_ExecutionListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        executionArn: smithy_client_1.expectString,
        itemCount: smithy_client_1.expectInt32,
        mapRunArn: smithy_client_1.expectString,
        name: smithy_client_1.expectString,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineAliasArn: smithy_client_1.expectString,
        stateMachineArn: smithy_client_1.expectString,
        stateMachineVersionArn: smithy_client_1.expectString,
        status: smithy_client_1.expectString,
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_GetExecutionHistoryOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        events: (_) => de_HistoryEventList(_, context),
        nextToken: smithy_client_1.expectString,
    });
};
const de_HistoryEvent = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        activityFailedEventDetails: smithy_client_1._json,
        activityScheduleFailedEventDetails: smithy_client_1._json,
        activityScheduledEventDetails: smithy_client_1._json,
        activityStartedEventDetails: smithy_client_1._json,
        activitySucceededEventDetails: smithy_client_1._json,
        activityTimedOutEventDetails: smithy_client_1._json,
        executionAbortedEventDetails: smithy_client_1._json,
        executionFailedEventDetails: smithy_client_1._json,
        executionStartedEventDetails: smithy_client_1._json,
        executionSucceededEventDetails: smithy_client_1._json,
        executionTimedOutEventDetails: smithy_client_1._json,
        id: smithy_client_1.expectLong,
        lambdaFunctionFailedEventDetails: smithy_client_1._json,
        lambdaFunctionScheduleFailedEventDetails: smithy_client_1._json,
        lambdaFunctionScheduledEventDetails: smithy_client_1._json,
        lambdaFunctionStartFailedEventDetails: smithy_client_1._json,
        lambdaFunctionSucceededEventDetails: smithy_client_1._json,
        lambdaFunctionTimedOutEventDetails: smithy_client_1._json,
        mapIterationAbortedEventDetails: smithy_client_1._json,
        mapIterationFailedEventDetails: smithy_client_1._json,
        mapIterationStartedEventDetails: smithy_client_1._json,
        mapIterationSucceededEventDetails: smithy_client_1._json,
        mapRunFailedEventDetails: smithy_client_1._json,
        mapRunStartedEventDetails: smithy_client_1._json,
        mapStateStartedEventDetails: smithy_client_1._json,
        previousEventId: smithy_client_1.expectLong,
        stateEnteredEventDetails: smithy_client_1._json,
        stateExitedEventDetails: smithy_client_1._json,
        taskFailedEventDetails: smithy_client_1._json,
        taskScheduledEventDetails: smithy_client_1._json,
        taskStartFailedEventDetails: smithy_client_1._json,
        taskStartedEventDetails: smithy_client_1._json,
        taskSubmitFailedEventDetails: smithy_client_1._json,
        taskSubmittedEventDetails: smithy_client_1._json,
        taskSucceededEventDetails: smithy_client_1._json,
        taskTimedOutEventDetails: smithy_client_1._json,
        timestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        type: smithy_client_1.expectString,
    });
};
const de_HistoryEventList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_HistoryEvent(entry, context);
    });
    return retVal;
};
const de_ListActivitiesOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        activities: (_) => de_ActivityList(_, context),
        nextToken: smithy_client_1.expectString,
    });
};
const de_ListExecutionsOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        executions: (_) => de_ExecutionList(_, context),
        nextToken: smithy_client_1.expectString,
    });
};
const de_ListMapRunsOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        mapRuns: (_) => de_MapRunList(_, context),
        nextToken: smithy_client_1.expectString,
    });
};
const de_ListStateMachineAliasesOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        nextToken: smithy_client_1.expectString,
        stateMachineAliases: (_) => de_StateMachineAliasList(_, context),
    });
};
const de_ListStateMachinesOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        nextToken: smithy_client_1.expectString,
        stateMachines: (_) => de_StateMachineList(_, context),
    });
};
const de_ListStateMachineVersionsOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        nextToken: smithy_client_1.expectString,
        stateMachineVersions: (_) => de_StateMachineVersionList(_, context),
    });
};
const de_MapRunList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_MapRunListItem(entry, context);
    });
    return retVal;
};
const de_MapRunListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        executionArn: smithy_client_1.expectString,
        mapRunArn: smithy_client_1.expectString,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineArn: smithy_client_1.expectString,
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_PublishStateMachineVersionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineVersionArn: smithy_client_1.expectString,
    });
};
const de_StartExecutionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        executionArn: smithy_client_1.expectString,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_StartSyncExecutionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        billingDetails: smithy_client_1._json,
        cause: smithy_client_1.expectString,
        error: smithy_client_1.expectString,
        executionArn: smithy_client_1.expectString,
        input: smithy_client_1.expectString,
        inputDetails: smithy_client_1._json,
        name: smithy_client_1.expectString,
        output: smithy_client_1.expectString,
        outputDetails: smithy_client_1._json,
        startDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineArn: smithy_client_1.expectString,
        status: smithy_client_1.expectString,
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        traceHeader: smithy_client_1.expectString,
    });
};
const de_StateMachineAliasList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StateMachineAliasListItem(entry, context);
    });
    return retVal;
};
const de_StateMachineAliasListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineAliasArn: smithy_client_1.expectString,
    });
};
const de_StateMachineList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StateMachineListItem(entry, context);
    });
    return retVal;
};
const de_StateMachineListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        name: smithy_client_1.expectString,
        stateMachineArn: smithy_client_1.expectString,
        type: smithy_client_1.expectString,
    });
};
const de_StateMachineVersionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StateMachineVersionListItem(entry, context);
    });
    return retVal;
};
const de_StateMachineVersionListItem = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        creationDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        stateMachineVersionArn: smithy_client_1.expectString,
    });
};
const de_StopExecutionOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        stopDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_UpdateStateMachineAliasOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        updateDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const de_UpdateStateMachineOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        revisionId: smithy_client_1.expectString,
        stateMachineVersionArn: smithy_client_1.expectString,
        updateDate: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(SFNServiceException_1.SFNServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": `AWSStepFunctions.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
