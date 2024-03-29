/*
Onboarding API


The onboarding API allows you to refer your customers and personal contacts to Brex.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * This is a presigned S3 link that should be used to attach the document. The maximum size accepted for this document is 50 MB.
     * @type {string}
     * @memberof Document
     */
    'uri': string;
    /**
     * Unique identifier for the document.
     * @type {string}
     * @memberof Document
     */
    'id': string;
}

