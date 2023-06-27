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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * Response code.
     * @type {string}
     * @memberof UsersResponse
     */
    code?: string;
    /**
     * Response message.
     * @type {string}
     * @memberof UsersResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof UsersResponse
     */
    users?: Array<User>;
    /**
     * Pagination token.
     * @type {string}
     * @memberof UsersResponse
     */
    nextToken?: string;
}

/**
 * Check if a given object implements the UsersResponse interface.
 */
export function instanceOfUsersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UserFromJSON)),
        'nextToken': !exists(json, 'next_token') ? undefined : json['next_token'],
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UserToJSON)),
        'next_token': value.nextToken,
    };
}

