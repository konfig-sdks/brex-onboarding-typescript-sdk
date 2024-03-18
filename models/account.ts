/*
Onboarding API


The onboarding API allows you to refer your customers and personal contacts to Brex.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccountInstructions } from './account-instructions';

/**
 * If the application status is APPROVED, array of bank cash management accounts (note there is currently only one account per customer).
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * Brex Cash management account ID.
     * @type {string}
     * @memberof Account
     */
    'id': string;
    /**
     * 
     * @type {AccountInstructions}
     * @memberof Account
     */
    'instructions'?: AccountInstructions;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    'created_at': string;
}
