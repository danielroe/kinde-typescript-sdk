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
 * @interface UpdateRolePermissionsRequestPermissionsInner
 */
export interface UpdateRolePermissionsRequestPermissionsInner {
    /**
     * The permission id.
     * @type {string}
     * @memberof UpdateRolePermissionsRequestPermissionsInner
     */
    id?: string;
    /**
     * Optional operation, set to 'delete' to remove the permission from the role.
     * @type {string}
     * @memberof UpdateRolePermissionsRequestPermissionsInner
     */
    operation?: string;
}

/**
 * Check if a given object implements the UpdateRolePermissionsRequestPermissionsInner interface.
 */
export function instanceOfUpdateRolePermissionsRequestPermissionsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRolePermissionsRequestPermissionsInnerFromJSON(json: any): UpdateRolePermissionsRequestPermissionsInner {
    return UpdateRolePermissionsRequestPermissionsInnerFromJSONTyped(json, false);
}

export function UpdateRolePermissionsRequestPermissionsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRolePermissionsRequestPermissionsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'operation': !exists(json, 'operation') ? undefined : json['operation'],
    };
}

export function UpdateRolePermissionsRequestPermissionsInnerToJSON(value?: UpdateRolePermissionsRequestPermissionsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'operation': value.operation,
    };
}

