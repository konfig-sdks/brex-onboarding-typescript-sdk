/*
Onboarding API


The onboarding API allows you to refer your customers and personal contacts to Brex.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BeneficialOwner } from './beneficial-owner';
import { BeneficialOwnerAddress } from './beneficial-owner-address';
import { Business } from './business';
import { IncorporationType } from './incorporation-type';

/**
 * 
 * @export
 * @interface CreateReferralRequestBusiness
 */
export interface CreateReferralRequestBusiness {
    /**
     * Company legal name.
     * @type {string}
     * @memberof CreateReferralRequestBusiness
     */
    'legal_name'?: string | null;
    /**
     * 
     * @type {IncorporationType}
     * @memberof CreateReferralRequestBusiness
     */
    'incorporation_type'?: IncorporationType;
    /**
     * Company Employer Identification Number(EIN).
     * @type {string}
     * @memberof CreateReferralRequestBusiness
     */
    'employer_identification_number'?: string | null;
    /**
     * Business website (or link to ecommerce store for sellers).
     * @type {string}
     * @memberof CreateReferralRequestBusiness
     */
    'website_url'?: string | null;
    /**
     * Brief description of the business activity.
     * @type {string}
     * @memberof CreateReferralRequestBusiness
     */
    'activity_description'?: string | null;
    /**
     * 
     * @type {BeneficialOwnerAddress}
     * @memberof CreateReferralRequestBusiness
     */
    'address'?: BeneficialOwnerAddress;
    /**
     * List of beneficial owners of the company
     * @type {Array<BeneficialOwner>}
     * @memberof CreateReferralRequestBusiness
     */
    'beneficial_owners'?: Array<BeneficialOwner> | null;
    /**
     * 
     * @type {BeneficialOwnerAddress}
     * @memberof CreateReferralRequestBusiness
     */
    'alternate_address'?: BeneficialOwnerAddress;
}

