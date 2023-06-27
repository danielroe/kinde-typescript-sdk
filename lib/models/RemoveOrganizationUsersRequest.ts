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
/**
 * 
 * @export
 * @interface RemoveOrganizationUsersRequest
 */
export interface RemoveOrganizationUsersRequest {
    /**
     * List of user ids to be removed from the organization.
     * @type {Array<string>}
     * @memberof RemoveOrganizationUsersRequest
     */
    users?: Array<string>;
}

/**
 * Check if a given object implements the RemoveOrganizationUsersRequest interface.
 */
export function instanceOfRemoveOrganizationUsersRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RemoveOrganizationUsersRequestFromJSON(json: any): RemoveOrganizationUsersRequest {
    return RemoveOrganizationUsersRequestFromJSONTyped(json, false);
}

export function RemoveOrganizationUsersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveOrganizationUsersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': !exists(json, 'users') ? undefined : json['users'],
    };
}

export function RemoveOrganizationUsersRequestToJSON(value?: RemoveOrganizationUsersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': value.users,
    };
}

