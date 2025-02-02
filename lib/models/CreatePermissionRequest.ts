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
 * @interface CreatePermissionRequest
 */
export interface CreatePermissionRequest {
    /**
     * The permission's name.
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    name?: string;
    /**
     * The permission's description.
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    description?: string;
    /**
     * The permission identifier to use in code.
     * @type {string}
     * @memberof CreatePermissionRequest
     */
    key?: string;
}

/**
 * Check if a given object implements the CreatePermissionRequest interface.
 */
export function instanceOfCreatePermissionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreatePermissionRequestFromJSON(json: any): CreatePermissionRequest {
    return CreatePermissionRequestFromJSONTyped(json, false);
}

export function CreatePermissionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePermissionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function CreatePermissionRequestToJSON(value?: CreatePermissionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'key': value.key,
    };
}

