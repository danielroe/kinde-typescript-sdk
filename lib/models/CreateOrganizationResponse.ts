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

import { exists, mapValues } from '../runtime';
import type { CreateOrganizationResponseOrganization } from './CreateOrganizationResponseOrganization';
import {
    CreateOrganizationResponseOrganizationFromJSON,
    CreateOrganizationResponseOrganizationFromJSONTyped,
    CreateOrganizationResponseOrganizationToJSON,
} from './CreateOrganizationResponseOrganization';

/**
 * 
 * @export
 * @interface CreateOrganizationResponse
 */
export interface CreateOrganizationResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateOrganizationResponse
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrganizationResponse
     */
    code?: string;
    /**
     * 
     * @type {CreateOrganizationResponseOrganization}
     * @memberof CreateOrganizationResponse
     */
    organization?: CreateOrganizationResponseOrganization;
}

/**
 * Check if a given object implements the CreateOrganizationResponse interface.
 */
export function instanceOfCreateOrganizationResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateOrganizationResponseFromJSON(json: any): CreateOrganizationResponse {
    return CreateOrganizationResponseFromJSONTyped(json, false);
}

export function CreateOrganizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrganizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'organization': !exists(json, 'organization') ? undefined : CreateOrganizationResponseOrganizationFromJSON(json['organization']),
    };
}

export function CreateOrganizationResponseToJSON(value?: CreateOrganizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'code': value.code,
        'organization': CreateOrganizationResponseOrganizationToJSON(value.organization),
    };
}

