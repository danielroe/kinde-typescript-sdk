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
 * @interface GetOrganizationFeatureFlagsResponseFeatureFlagsValue
 */
export interface GetOrganizationFeatureFlagsResponseFeatureFlagsValue {
    /**
     * 
     * @type {string}
     * @memberof GetOrganizationFeatureFlagsResponseFeatureFlagsValue
     */
    type?: GetOrganizationFeatureFlagsResponseFeatureFlagsValueTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetOrganizationFeatureFlagsResponseFeatureFlagsValue
     */
    value?: string;
}


/**
 * @export
 */
export const GetOrganizationFeatureFlagsResponseFeatureFlagsValueTypeEnum = {
    Str: 'str',
    Int: 'int',
    Bool: 'bool'
} as const;
export type GetOrganizationFeatureFlagsResponseFeatureFlagsValueTypeEnum = typeof GetOrganizationFeatureFlagsResponseFeatureFlagsValueTypeEnum[keyof typeof GetOrganizationFeatureFlagsResponseFeatureFlagsValueTypeEnum];


/**
 * Check if a given object implements the GetOrganizationFeatureFlagsResponseFeatureFlagsValue interface.
 */
export function instanceOfGetOrganizationFeatureFlagsResponseFeatureFlagsValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSON(json: any): GetOrganizationFeatureFlagsResponseFeatureFlagsValue {
    return GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSONTyped(json, false);
}

export function GetOrganizationFeatureFlagsResponseFeatureFlagsValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOrganizationFeatureFlagsResponseFeatureFlagsValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function GetOrganizationFeatureFlagsResponseFeatureFlagsValueToJSON(value?: GetOrganizationFeatureFlagsResponseFeatureFlagsValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

