import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { Secret } from "jsonwebtoken";
import httpStatus from "http-status";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import ApiError from "../errors/ApiErrors";
import { IUser } from "../interfaces";

const auth = (...roles: string[]) => {
    return async (req: Request & { user?: IUser }, res: Response, next: NextFunction) => {
        try {
            let token = req.headers.authorization;

            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized Access! Token is missing.");
            }

            if (token.startsWith("Bearer ")) {
                token = token.slice(7).trim();
            }

            if (!config.jwt.jwt_secret) {
                throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "JWT secret is not configured.");
            }

            let verifiedUser: any;
            try {
                verifiedUser = jwtHelpers.verifyToken(token, config.jwt.jwt_secret as Secret);
            } catch (err: any) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid or expired token.");
            }

            req.user = verifiedUser as IUser;
            
            if (roles.length && !roles.includes(verifiedUser.role)) {
                throw new ApiError(httpStatus.FORBIDDEN, "Forbidden! You do not have permission.");
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};

export default auth;