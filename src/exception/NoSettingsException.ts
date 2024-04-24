import {CustomError} from "ts-custom-error";

export class NoSettingsException extends CustomError {
    public constructor(
        public code: string,
        message?: string,
    ) {
        super(message)
    }

}