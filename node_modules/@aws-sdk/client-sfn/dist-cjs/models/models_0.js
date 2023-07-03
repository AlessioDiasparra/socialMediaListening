"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionStartedEventDetailsFilterSensitiveLog = exports.ExecutionFailedEventDetailsFilterSensitiveLog = exports.ExecutionAbortedEventDetailsFilterSensitiveLog = exports.GetActivityTaskOutputFilterSensitiveLog = exports.DescribeStateMachineForExecutionOutputFilterSensitiveLog = exports.DescribeStateMachineAliasOutputFilterSensitiveLog = exports.DescribeStateMachineOutputFilterSensitiveLog = exports.DescribeExecutionOutputFilterSensitiveLog = exports.CreateStateMachineAliasInputFilterSensitiveLog = exports.CreateStateMachineInputFilterSensitiveLog = exports.ActivityTimedOutEventDetailsFilterSensitiveLog = exports.ActivitySucceededEventDetailsFilterSensitiveLog = exports.ActivityScheduleFailedEventDetailsFilterSensitiveLog = exports.ActivityScheduledEventDetailsFilterSensitiveLog = exports.ActivityFailedEventDetailsFilterSensitiveLog = exports.MissingRequiredParameter = exports.SyncExecutionStatus = exports.InvalidExecutionInput = exports.ExecutionLimitExceeded = exports.ExecutionAlreadyExists = exports.InvalidOutput = exports.TaskTimedOut = exports.TaskDoesNotExist = exports.InvalidToken = exports.HistoryEventType = exports.StateMachineDoesNotExist = exports.StateMachineStatus = exports.MapRunStatus = exports.ExecutionDoesNotExist = exports.ExecutionStatus = exports.ServiceQuotaExceededException = exports.ResourceNotFound = exports.ValidationException = exports.ValidationExceptionReason = exports.StateMachineTypeNotSupported = exports.StateMachineLimitExceeded = exports.StateMachineDeleting = exports.StateMachineAlreadyExists = exports.InvalidTracingConfiguration = exports.InvalidLoggingConfiguration = exports.InvalidDefinition = exports.InvalidArn = exports.StateMachineType = exports.LogLevel = exports.ConflictException = exports.TooManyTags = exports.InvalidName = exports.ActivityWorkerLimitExceeded = exports.ActivityLimitExceeded = exports.ActivityDoesNotExist = void 0;
exports.UpdateStateMachineAliasInputFilterSensitiveLog = exports.UpdateStateMachineInputFilterSensitiveLog = exports.StopExecutionInputFilterSensitiveLog = exports.StartSyncExecutionOutputFilterSensitiveLog = exports.StartSyncExecutionInputFilterSensitiveLog = exports.StartExecutionInputFilterSensitiveLog = exports.SendTaskSuccessInputFilterSensitiveLog = exports.SendTaskFailureInputFilterSensitiveLog = exports.PublishStateMachineVersionInputFilterSensitiveLog = exports.GetExecutionHistoryOutputFilterSensitiveLog = exports.HistoryEventFilterSensitiveLog = exports.TaskTimedOutEventDetailsFilterSensitiveLog = exports.TaskSucceededEventDetailsFilterSensitiveLog = exports.TaskSubmittedEventDetailsFilterSensitiveLog = exports.TaskSubmitFailedEventDetailsFilterSensitiveLog = exports.TaskStartFailedEventDetailsFilterSensitiveLog = exports.TaskScheduledEventDetailsFilterSensitiveLog = exports.TaskFailedEventDetailsFilterSensitiveLog = exports.StateExitedEventDetailsFilterSensitiveLog = exports.StateEnteredEventDetailsFilterSensitiveLog = exports.MapRunFailedEventDetailsFilterSensitiveLog = exports.LambdaFunctionTimedOutEventDetailsFilterSensitiveLog = exports.LambdaFunctionSucceededEventDetailsFilterSensitiveLog = exports.LambdaFunctionStartFailedEventDetailsFilterSensitiveLog = exports.LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog = exports.LambdaFunctionScheduledEventDetailsFilterSensitiveLog = exports.LambdaFunctionFailedEventDetailsFilterSensitiveLog = exports.ExecutionTimedOutEventDetailsFilterSensitiveLog = exports.ExecutionSucceededEventDetailsFilterSensitiveLog = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const SFNServiceException_1 = require("./SFNServiceException");
class ActivityDoesNotExist extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ActivityDoesNotExist",
            $fault: "client",
            ...opts,
        });
        this.name = "ActivityDoesNotExist";
        this.$fault = "client";
        Object.setPrototypeOf(this, ActivityDoesNotExist.prototype);
    }
}
exports.ActivityDoesNotExist = ActivityDoesNotExist;
class ActivityLimitExceeded extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ActivityLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "ActivityLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, ActivityLimitExceeded.prototype);
    }
}
exports.ActivityLimitExceeded = ActivityLimitExceeded;
class ActivityWorkerLimitExceeded extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ActivityWorkerLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "ActivityWorkerLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, ActivityWorkerLimitExceeded.prototype);
    }
}
exports.ActivityWorkerLimitExceeded = ActivityWorkerLimitExceeded;
class InvalidName extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidName",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidName";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidName.prototype);
    }
}
exports.InvalidName = InvalidName;
class TooManyTags extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "TooManyTags",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyTags";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyTags.prototype);
        this.resourceName = opts.resourceName;
    }
}
exports.TooManyTags = TooManyTags;
class ConflictException extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
exports.ConflictException = ConflictException;
exports.LogLevel = {
    ALL: "ALL",
    ERROR: "ERROR",
    FATAL: "FATAL",
    OFF: "OFF",
};
exports.StateMachineType = {
    EXPRESS: "EXPRESS",
    STANDARD: "STANDARD",
};
class InvalidArn extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidArn",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidArn";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidArn.prototype);
    }
}
exports.InvalidArn = InvalidArn;
class InvalidDefinition extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidDefinition",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidDefinition";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidDefinition.prototype);
    }
}
exports.InvalidDefinition = InvalidDefinition;
class InvalidLoggingConfiguration extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidLoggingConfiguration",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidLoggingConfiguration";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidLoggingConfiguration.prototype);
    }
}
exports.InvalidLoggingConfiguration = InvalidLoggingConfiguration;
class InvalidTracingConfiguration extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidTracingConfiguration",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidTracingConfiguration";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidTracingConfiguration.prototype);
    }
}
exports.InvalidTracingConfiguration = InvalidTracingConfiguration;
class StateMachineAlreadyExists extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "StateMachineAlreadyExists",
            $fault: "client",
            ...opts,
        });
        this.name = "StateMachineAlreadyExists";
        this.$fault = "client";
        Object.setPrototypeOf(this, StateMachineAlreadyExists.prototype);
    }
}
exports.StateMachineAlreadyExists = StateMachineAlreadyExists;
class StateMachineDeleting extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "StateMachineDeleting",
            $fault: "client",
            ...opts,
        });
        this.name = "StateMachineDeleting";
        this.$fault = "client";
        Object.setPrototypeOf(this, StateMachineDeleting.prototype);
    }
}
exports.StateMachineDeleting = StateMachineDeleting;
class StateMachineLimitExceeded extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "StateMachineLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "StateMachineLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, StateMachineLimitExceeded.prototype);
    }
}
exports.StateMachineLimitExceeded = StateMachineLimitExceeded;
class StateMachineTypeNotSupported extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "StateMachineTypeNotSupported",
            $fault: "client",
            ...opts,
        });
        this.name = "StateMachineTypeNotSupported";
        this.$fault = "client";
        Object.setPrototypeOf(this, StateMachineTypeNotSupported.prototype);
    }
}
exports.StateMachineTypeNotSupported = StateMachineTypeNotSupported;
exports.ValidationExceptionReason = {
    API_DOES_NOT_SUPPORT_LABELED_ARNS: "API_DOES_NOT_SUPPORT_LABELED_ARNS",
    CANNOT_UPDATE_COMPLETED_MAP_RUN: "CANNOT_UPDATE_COMPLETED_MAP_RUN",
    INVALID_ROUTING_CONFIGURATION: "INVALID_ROUTING_CONFIGURATION",
    MISSING_REQUIRED_PARAMETER: "MISSING_REQUIRED_PARAMETER",
};
class ValidationException extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.reason = opts.reason;
    }
}
exports.ValidationException = ValidationException;
class ResourceNotFound extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFound",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFound";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFound.prototype);
        this.resourceName = opts.resourceName;
    }
}
exports.ResourceNotFound = ResourceNotFound;
class ServiceQuotaExceededException extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ServiceQuotaExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
}
exports.ServiceQuotaExceededException = ServiceQuotaExceededException;
exports.ExecutionStatus = {
    ABORTED: "ABORTED",
    FAILED: "FAILED",
    RUNNING: "RUNNING",
    SUCCEEDED: "SUCCEEDED",
    TIMED_OUT: "TIMED_OUT",
};
class ExecutionDoesNotExist extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ExecutionDoesNotExist",
            $fault: "client",
            ...opts,
        });
        this.name = "ExecutionDoesNotExist";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExecutionDoesNotExist.prototype);
    }
}
exports.ExecutionDoesNotExist = ExecutionDoesNotExist;
exports.MapRunStatus = {
    ABORTED: "ABORTED",
    FAILED: "FAILED",
    RUNNING: "RUNNING",
    SUCCEEDED: "SUCCEEDED",
};
exports.StateMachineStatus = {
    ACTIVE: "ACTIVE",
    DELETING: "DELETING",
};
class StateMachineDoesNotExist extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "StateMachineDoesNotExist",
            $fault: "client",
            ...opts,
        });
        this.name = "StateMachineDoesNotExist";
        this.$fault = "client";
        Object.setPrototypeOf(this, StateMachineDoesNotExist.prototype);
    }
}
exports.StateMachineDoesNotExist = StateMachineDoesNotExist;
exports.HistoryEventType = {
    ActivityFailed: "ActivityFailed",
    ActivityScheduleFailed: "ActivityScheduleFailed",
    ActivityScheduled: "ActivityScheduled",
    ActivityStarted: "ActivityStarted",
    ActivitySucceeded: "ActivitySucceeded",
    ActivityTimedOut: "ActivityTimedOut",
    ChoiceStateEntered: "ChoiceStateEntered",
    ChoiceStateExited: "ChoiceStateExited",
    ExecutionAborted: "ExecutionAborted",
    ExecutionFailed: "ExecutionFailed",
    ExecutionStarted: "ExecutionStarted",
    ExecutionSucceeded: "ExecutionSucceeded",
    ExecutionTimedOut: "ExecutionTimedOut",
    FailStateEntered: "FailStateEntered",
    LambdaFunctionFailed: "LambdaFunctionFailed",
    LambdaFunctionScheduleFailed: "LambdaFunctionScheduleFailed",
    LambdaFunctionScheduled: "LambdaFunctionScheduled",
    LambdaFunctionStartFailed: "LambdaFunctionStartFailed",
    LambdaFunctionStarted: "LambdaFunctionStarted",
    LambdaFunctionSucceeded: "LambdaFunctionSucceeded",
    LambdaFunctionTimedOut: "LambdaFunctionTimedOut",
    MapIterationAborted: "MapIterationAborted",
    MapIterationFailed: "MapIterationFailed",
    MapIterationStarted: "MapIterationStarted",
    MapIterationSucceeded: "MapIterationSucceeded",
    MapRunAborted: "MapRunAborted",
    MapRunFailed: "MapRunFailed",
    MapRunStarted: "MapRunStarted",
    MapRunSucceeded: "MapRunSucceeded",
    MapStateAborted: "MapStateAborted",
    MapStateEntered: "MapStateEntered",
    MapStateExited: "MapStateExited",
    MapStateFailed: "MapStateFailed",
    MapStateStarted: "MapStateStarted",
    MapStateSucceeded: "MapStateSucceeded",
    ParallelStateAborted: "ParallelStateAborted",
    ParallelStateEntered: "ParallelStateEntered",
    ParallelStateExited: "ParallelStateExited",
    ParallelStateFailed: "ParallelStateFailed",
    ParallelStateStarted: "ParallelStateStarted",
    ParallelStateSucceeded: "ParallelStateSucceeded",
    PassStateEntered: "PassStateEntered",
    PassStateExited: "PassStateExited",
    SucceedStateEntered: "SucceedStateEntered",
    SucceedStateExited: "SucceedStateExited",
    TaskFailed: "TaskFailed",
    TaskScheduled: "TaskScheduled",
    TaskStartFailed: "TaskStartFailed",
    TaskStarted: "TaskStarted",
    TaskStateAborted: "TaskStateAborted",
    TaskStateEntered: "TaskStateEntered",
    TaskStateExited: "TaskStateExited",
    TaskSubmitFailed: "TaskSubmitFailed",
    TaskSubmitted: "TaskSubmitted",
    TaskSucceeded: "TaskSucceeded",
    TaskTimedOut: "TaskTimedOut",
    WaitStateAborted: "WaitStateAborted",
    WaitStateEntered: "WaitStateEntered",
    WaitStateExited: "WaitStateExited",
};
class InvalidToken extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidToken",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidToken";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidToken.prototype);
    }
}
exports.InvalidToken = InvalidToken;
class TaskDoesNotExist extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "TaskDoesNotExist",
            $fault: "client",
            ...opts,
        });
        this.name = "TaskDoesNotExist";
        this.$fault = "client";
        Object.setPrototypeOf(this, TaskDoesNotExist.prototype);
    }
}
exports.TaskDoesNotExist = TaskDoesNotExist;
class TaskTimedOut extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "TaskTimedOut",
            $fault: "client",
            ...opts,
        });
        this.name = "TaskTimedOut";
        this.$fault = "client";
        Object.setPrototypeOf(this, TaskTimedOut.prototype);
    }
}
exports.TaskTimedOut = TaskTimedOut;
class InvalidOutput extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidOutput",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidOutput";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidOutput.prototype);
    }
}
exports.InvalidOutput = InvalidOutput;
class ExecutionAlreadyExists extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ExecutionAlreadyExists",
            $fault: "client",
            ...opts,
        });
        this.name = "ExecutionAlreadyExists";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExecutionAlreadyExists.prototype);
    }
}
exports.ExecutionAlreadyExists = ExecutionAlreadyExists;
class ExecutionLimitExceeded extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "ExecutionLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "ExecutionLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExecutionLimitExceeded.prototype);
    }
}
exports.ExecutionLimitExceeded = ExecutionLimitExceeded;
class InvalidExecutionInput extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "InvalidExecutionInput",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidExecutionInput";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidExecutionInput.prototype);
    }
}
exports.InvalidExecutionInput = InvalidExecutionInput;
exports.SyncExecutionStatus = {
    FAILED: "FAILED",
    SUCCEEDED: "SUCCEEDED",
    TIMED_OUT: "TIMED_OUT",
};
class MissingRequiredParameter extends SFNServiceException_1.SFNServiceException {
    constructor(opts) {
        super({
            name: "MissingRequiredParameter",
            $fault: "client",
            ...opts,
        });
        this.name = "MissingRequiredParameter";
        this.$fault = "client";
        Object.setPrototypeOf(this, MissingRequiredParameter.prototype);
    }
}
exports.MissingRequiredParameter = MissingRequiredParameter;
const ActivityFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActivityFailedEventDetailsFilterSensitiveLog = ActivityFailedEventDetailsFilterSensitiveLog;
const ActivityScheduledEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActivityScheduledEventDetailsFilterSensitiveLog = ActivityScheduledEventDetailsFilterSensitiveLog;
const ActivityScheduleFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActivityScheduleFailedEventDetailsFilterSensitiveLog = ActivityScheduleFailedEventDetailsFilterSensitiveLog;
const ActivitySucceededEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActivitySucceededEventDetailsFilterSensitiveLog = ActivitySucceededEventDetailsFilterSensitiveLog;
const ActivityTimedOutEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ActivityTimedOutEventDetailsFilterSensitiveLog = ActivityTimedOutEventDetailsFilterSensitiveLog;
const CreateStateMachineInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.versionDescription && { versionDescription: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateStateMachineInputFilterSensitiveLog = CreateStateMachineInputFilterSensitiveLog;
const CreateStateMachineAliasInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
});
exports.CreateStateMachineAliasInputFilterSensitiveLog = CreateStateMachineAliasInputFilterSensitiveLog;
const DescribeExecutionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.DescribeExecutionOutputFilterSensitiveLog = DescribeExecutionOutputFilterSensitiveLog;
const DescribeStateMachineOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
});
exports.DescribeStateMachineOutputFilterSensitiveLog = DescribeStateMachineOutputFilterSensitiveLog;
const DescribeStateMachineAliasOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
});
exports.DescribeStateMachineAliasOutputFilterSensitiveLog = DescribeStateMachineAliasOutputFilterSensitiveLog;
const DescribeStateMachineForExecutionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
});
exports.DescribeStateMachineForExecutionOutputFilterSensitiveLog = DescribeStateMachineForExecutionOutputFilterSensitiveLog;
const GetActivityTaskOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.GetActivityTaskOutputFilterSensitiveLog = GetActivityTaskOutputFilterSensitiveLog;
const ExecutionAbortedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ExecutionAbortedEventDetailsFilterSensitiveLog = ExecutionAbortedEventDetailsFilterSensitiveLog;
const ExecutionFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ExecutionFailedEventDetailsFilterSensitiveLog = ExecutionFailedEventDetailsFilterSensitiveLog;
const ExecutionStartedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.ExecutionStartedEventDetailsFilterSensitiveLog = ExecutionStartedEventDetailsFilterSensitiveLog;
const ExecutionSucceededEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.ExecutionSucceededEventDetailsFilterSensitiveLog = ExecutionSucceededEventDetailsFilterSensitiveLog;
const ExecutionTimedOutEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.ExecutionTimedOutEventDetailsFilterSensitiveLog = ExecutionTimedOutEventDetailsFilterSensitiveLog;
const LambdaFunctionFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionFailedEventDetailsFilterSensitiveLog = LambdaFunctionFailedEventDetailsFilterSensitiveLog;
const LambdaFunctionScheduledEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionScheduledEventDetailsFilterSensitiveLog = LambdaFunctionScheduledEventDetailsFilterSensitiveLog;
const LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog = LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog;
const LambdaFunctionStartFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionStartFailedEventDetailsFilterSensitiveLog = LambdaFunctionStartFailedEventDetailsFilterSensitiveLog;
const LambdaFunctionSucceededEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionSucceededEventDetailsFilterSensitiveLog = LambdaFunctionSucceededEventDetailsFilterSensitiveLog;
const LambdaFunctionTimedOutEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.LambdaFunctionTimedOutEventDetailsFilterSensitiveLog = LambdaFunctionTimedOutEventDetailsFilterSensitiveLog;
const MapRunFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.MapRunFailedEventDetailsFilterSensitiveLog = MapRunFailedEventDetailsFilterSensitiveLog;
const StateEnteredEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.StateEnteredEventDetailsFilterSensitiveLog = StateEnteredEventDetailsFilterSensitiveLog;
const StateExitedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.StateExitedEventDetailsFilterSensitiveLog = StateExitedEventDetailsFilterSensitiveLog;
const TaskFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskFailedEventDetailsFilterSensitiveLog = TaskFailedEventDetailsFilterSensitiveLog;
const TaskScheduledEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.parameters && { parameters: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskScheduledEventDetailsFilterSensitiveLog = TaskScheduledEventDetailsFilterSensitiveLog;
const TaskStartFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskStartFailedEventDetailsFilterSensitiveLog = TaskStartFailedEventDetailsFilterSensitiveLog;
const TaskSubmitFailedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskSubmitFailedEventDetailsFilterSensitiveLog = TaskSubmitFailedEventDetailsFilterSensitiveLog;
const TaskSubmittedEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskSubmittedEventDetailsFilterSensitiveLog = TaskSubmittedEventDetailsFilterSensitiveLog;
const TaskSucceededEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskSucceededEventDetailsFilterSensitiveLog = TaskSucceededEventDetailsFilterSensitiveLog;
const TaskTimedOutEventDetailsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.TaskTimedOutEventDetailsFilterSensitiveLog = TaskTimedOutEventDetailsFilterSensitiveLog;
const HistoryEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.activityFailedEventDetails && {
        activityFailedEventDetails: (0, exports.ActivityFailedEventDetailsFilterSensitiveLog)(obj.activityFailedEventDetails),
    }),
    ...(obj.activityScheduleFailedEventDetails && {
        activityScheduleFailedEventDetails: (0, exports.ActivityScheduleFailedEventDetailsFilterSensitiveLog)(obj.activityScheduleFailedEventDetails),
    }),
    ...(obj.activityScheduledEventDetails && {
        activityScheduledEventDetails: (0, exports.ActivityScheduledEventDetailsFilterSensitiveLog)(obj.activityScheduledEventDetails),
    }),
    ...(obj.activitySucceededEventDetails && {
        activitySucceededEventDetails: (0, exports.ActivitySucceededEventDetailsFilterSensitiveLog)(obj.activitySucceededEventDetails),
    }),
    ...(obj.activityTimedOutEventDetails && {
        activityTimedOutEventDetails: (0, exports.ActivityTimedOutEventDetailsFilterSensitiveLog)(obj.activityTimedOutEventDetails),
    }),
    ...(obj.taskFailedEventDetails && {
        taskFailedEventDetails: (0, exports.TaskFailedEventDetailsFilterSensitiveLog)(obj.taskFailedEventDetails),
    }),
    ...(obj.taskScheduledEventDetails && {
        taskScheduledEventDetails: (0, exports.TaskScheduledEventDetailsFilterSensitiveLog)(obj.taskScheduledEventDetails),
    }),
    ...(obj.taskStartFailedEventDetails && {
        taskStartFailedEventDetails: (0, exports.TaskStartFailedEventDetailsFilterSensitiveLog)(obj.taskStartFailedEventDetails),
    }),
    ...(obj.taskSubmitFailedEventDetails && {
        taskSubmitFailedEventDetails: (0, exports.TaskSubmitFailedEventDetailsFilterSensitiveLog)(obj.taskSubmitFailedEventDetails),
    }),
    ...(obj.taskSubmittedEventDetails && {
        taskSubmittedEventDetails: (0, exports.TaskSubmittedEventDetailsFilterSensitiveLog)(obj.taskSubmittedEventDetails),
    }),
    ...(obj.taskSucceededEventDetails && {
        taskSucceededEventDetails: (0, exports.TaskSucceededEventDetailsFilterSensitiveLog)(obj.taskSucceededEventDetails),
    }),
    ...(obj.taskTimedOutEventDetails && {
        taskTimedOutEventDetails: (0, exports.TaskTimedOutEventDetailsFilterSensitiveLog)(obj.taskTimedOutEventDetails),
    }),
    ...(obj.executionFailedEventDetails && {
        executionFailedEventDetails: (0, exports.ExecutionFailedEventDetailsFilterSensitiveLog)(obj.executionFailedEventDetails),
    }),
    ...(obj.executionStartedEventDetails && {
        executionStartedEventDetails: (0, exports.ExecutionStartedEventDetailsFilterSensitiveLog)(obj.executionStartedEventDetails),
    }),
    ...(obj.executionSucceededEventDetails && {
        executionSucceededEventDetails: (0, exports.ExecutionSucceededEventDetailsFilterSensitiveLog)(obj.executionSucceededEventDetails),
    }),
    ...(obj.executionAbortedEventDetails && {
        executionAbortedEventDetails: (0, exports.ExecutionAbortedEventDetailsFilterSensitiveLog)(obj.executionAbortedEventDetails),
    }),
    ...(obj.executionTimedOutEventDetails && {
        executionTimedOutEventDetails: (0, exports.ExecutionTimedOutEventDetailsFilterSensitiveLog)(obj.executionTimedOutEventDetails),
    }),
    ...(obj.lambdaFunctionFailedEventDetails && {
        lambdaFunctionFailedEventDetails: (0, exports.LambdaFunctionFailedEventDetailsFilterSensitiveLog)(obj.lambdaFunctionFailedEventDetails),
    }),
    ...(obj.lambdaFunctionScheduleFailedEventDetails && {
        lambdaFunctionScheduleFailedEventDetails: (0, exports.LambdaFunctionScheduleFailedEventDetailsFilterSensitiveLog)(obj.lambdaFunctionScheduleFailedEventDetails),
    }),
    ...(obj.lambdaFunctionScheduledEventDetails && {
        lambdaFunctionScheduledEventDetails: (0, exports.LambdaFunctionScheduledEventDetailsFilterSensitiveLog)(obj.lambdaFunctionScheduledEventDetails),
    }),
    ...(obj.lambdaFunctionStartFailedEventDetails && {
        lambdaFunctionStartFailedEventDetails: (0, exports.LambdaFunctionStartFailedEventDetailsFilterSensitiveLog)(obj.lambdaFunctionStartFailedEventDetails),
    }),
    ...(obj.lambdaFunctionSucceededEventDetails && {
        lambdaFunctionSucceededEventDetails: (0, exports.LambdaFunctionSucceededEventDetailsFilterSensitiveLog)(obj.lambdaFunctionSucceededEventDetails),
    }),
    ...(obj.lambdaFunctionTimedOutEventDetails && {
        lambdaFunctionTimedOutEventDetails: (0, exports.LambdaFunctionTimedOutEventDetailsFilterSensitiveLog)(obj.lambdaFunctionTimedOutEventDetails),
    }),
    ...(obj.stateEnteredEventDetails && {
        stateEnteredEventDetails: (0, exports.StateEnteredEventDetailsFilterSensitiveLog)(obj.stateEnteredEventDetails),
    }),
    ...(obj.stateExitedEventDetails && {
        stateExitedEventDetails: (0, exports.StateExitedEventDetailsFilterSensitiveLog)(obj.stateExitedEventDetails),
    }),
    ...(obj.mapRunFailedEventDetails && {
        mapRunFailedEventDetails: (0, exports.MapRunFailedEventDetailsFilterSensitiveLog)(obj.mapRunFailedEventDetails),
    }),
});
exports.HistoryEventFilterSensitiveLog = HistoryEventFilterSensitiveLog;
const GetExecutionHistoryOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.events && { events: obj.events.map((item) => (0, exports.HistoryEventFilterSensitiveLog)(item)) }),
});
exports.GetExecutionHistoryOutputFilterSensitiveLog = GetExecutionHistoryOutputFilterSensitiveLog;
const PublishStateMachineVersionInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
});
exports.PublishStateMachineVersionInputFilterSensitiveLog = PublishStateMachineVersionInputFilterSensitiveLog;
const SendTaskFailureInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.SendTaskFailureInputFilterSensitiveLog = SendTaskFailureInputFilterSensitiveLog;
const SendTaskSuccessInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.SendTaskSuccessInputFilterSensitiveLog = SendTaskSuccessInputFilterSensitiveLog;
const StartExecutionInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.StartExecutionInputFilterSensitiveLog = StartExecutionInputFilterSensitiveLog;
const StartSyncExecutionInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
});
exports.StartSyncExecutionInputFilterSensitiveLog = StartSyncExecutionInputFilterSensitiveLog;
const StartSyncExecutionOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.input && { input: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.output && { output: smithy_client_1.SENSITIVE_STRING }),
});
exports.StartSyncExecutionOutputFilterSensitiveLog = StartSyncExecutionOutputFilterSensitiveLog;
const StopExecutionInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.error && { error: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.cause && { cause: smithy_client_1.SENSITIVE_STRING }),
});
exports.StopExecutionInputFilterSensitiveLog = StopExecutionInputFilterSensitiveLog;
const UpdateStateMachineInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.definition && { definition: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.versionDescription && { versionDescription: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateStateMachineInputFilterSensitiveLog = UpdateStateMachineInputFilterSensitiveLog;
const UpdateStateMachineAliasInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateStateMachineAliasInputFilterSensitiveLog = UpdateStateMachineAliasInputFilterSensitiveLog;
