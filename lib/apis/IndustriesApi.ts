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
  SuccessResponse,
} from '../models/index';
import {
    SuccessResponseFromJSON,
    SuccessResponseToJSON,
} from '../models/index';

export interface GetIndustriesRequest {
    industryKey?: string;
    name?: string;
}

/**
 * 
 */
export class IndustriesApi extends runtime.BaseAPI {

    /**
     * Get a list of industries and associated industry keys.
     * List industries and industry keys.
     */
    async getIndustriesRaw(requestParameters: GetIndustriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessResponse>> {
        const queryParameters: any = {};

        if (requestParameters.industryKey !== undefined) {
            queryParameters['industry_key'] = requestParameters.industryKey;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
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
            path: `/api/v1/industries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessResponseFromJSON(jsonValue));
    }

    /**
     * Get a list of industries and associated industry keys.
     * List industries and industry keys.
     */
    async getIndustries(requestParameters: GetIndustriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessResponse> {
        const response = await this.getIndustriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
