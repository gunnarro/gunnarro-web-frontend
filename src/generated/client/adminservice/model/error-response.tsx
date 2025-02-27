/* tslint:disable */
/* eslint-disable */
/**
 * Todo
 * Rest Api for todo
 *
 * The version of the OpenAPI document: V1
 * Contact: gunnarro@gunnarroas.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Holds rest service error description.
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * http status code.
     * @type {number}
     * @memberof ErrorResponse
     */
    'httpStatus'?: number;
    /**
     * Http message.
     * @type {string}
     * @memberof ErrorResponse
     */
    'httpMessage'?: string;
    /**
     * Internal error code.
     * @type {number}
     * @memberof ErrorResponse
     */
    'errorCode'?: number;
    /**
     * Description of the error.
     * @type {string}
     * @memberof ErrorResponse
     */
    'description'?: string;
}

