/* tslint:disable */
/* eslint-disable */
/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConnectedAppsAccessToken,
  ConnectedAppsAuthUrl,
  ErrorResponse,
  SuccessResponse,
} from '../models/index';
import {
    ConnectedAppsAccessTokenFromJSON,
    ConnectedAppsAccessTokenToJSON,
    ConnectedAppsAuthUrlFromJSON,
    ConnectedAppsAuthUrlToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SuccessResponseFromJSON,
    SuccessResponseToJSON,
} from '../models/index';

export interface GetConnectedAppAuthUrlRequest {
    keyCodeRef: string;
    userId: string;
}

export interface GetConnectedAppTokenRequest {
    sessionId: string;
}

export interface RevokeConnectedAppTokenRequest {
    sessionId: string;
}

/**
 * 
 */
export class ConnectedAppsApi extends runtime.BaseAPI {

    /**
     * Get a URL that authenticates and authorizes a user to a third-party connected app.
     * Get Connected App URL
     */
    async getConnectedAppAuthUrlRaw(requestParameters: GetConnectedAppAuthUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectedAppsAuthUrl>> {
        if (requestParameters.keyCodeRef === null || requestParameters.keyCodeRef === undefined) {
            throw new runtime.RequiredError('keyCodeRef','Required parameter requestParameters.keyCodeRef was null or undefined when calling getConnectedAppAuthUrl.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling getConnectedAppAuthUrl.');
        }

        const queryParameters: any = {};

        if (requestParameters.keyCodeRef !== undefined) {
            queryParameters['key_code_ref'] = requestParameters.keyCodeRef;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['user_id'] = requestParameters.userId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/connected_apps/auth_url`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectedAppsAuthUrlFromJSON(jsonValue));
    }

    /**
     * Get a URL that authenticates and authorizes a user to a third-party connected app.
     * Get Connected App URL
     */
    async getConnectedAppAuthUrl(requestParameters: GetConnectedAppAuthUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectedAppsAuthUrl> {
        const response = await this.getConnectedAppAuthUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an access token that can be used to call the third-party provider linked to the connected app.
     * Get Connected App Token
     */
    async getConnectedAppTokenRaw(requestParameters: GetConnectedAppTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConnectedAppsAccessToken>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling getConnectedAppToken.');
        }

        const queryParameters: any = {};

        if (requestParameters.sessionId !== undefined) {
            queryParameters['session_id'] = requestParameters.sessionId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/connected_apps/token`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectedAppsAccessTokenFromJSON(jsonValue));
    }

    /**
     * Get an access token that can be used to call the third-party provider linked to the connected app.
     * Get Connected App Token
     */
    async getConnectedAppToken(requestParameters: GetConnectedAppTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConnectedAppsAccessToken> {
        const response = await this.getConnectedAppTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revoke the tokens linked to the connected app session.
     * Revoke Connected App Token
     */
    async revokeConnectedAppTokenRaw(requestParameters: RevokeConnectedAppTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>> {
        if (requestParameters.sessionId === null || requestParameters.sessionId === undefined) {
            throw new runtime.RequiredError('sessionId','Required parameter requestParameters.sessionId was null or undefined when calling revokeConnectedAppToken.');
        }

        const queryParameters: any = {};

        if (requestParameters.sessionId !== undefined) {
            queryParameters['session_id'] = requestParameters.sessionId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("kindeBearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/connected_apps/revoke`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseFromJSON(jsonValue));
    }

    /**
     * Revoke the tokens linked to the connected app session.
     * Revoke Connected App Token
     */
    async revokeConnectedAppToken(requestParameters: RevokeConnectedAppTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse> {
        const response = await this.revokeConnectedAppTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
