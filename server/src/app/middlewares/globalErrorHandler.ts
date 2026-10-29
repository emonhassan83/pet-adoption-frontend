import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "../../config";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || "Something went wrong!";

    res.status(statusCode).json({
        success: false,
        message,
        errorDetails: config.env === "development" ? err : undefined,
    });
};

export default globalErrorHandler;