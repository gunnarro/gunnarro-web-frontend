/* tslint:disable */
/* eslint-disable */
/**
 * Todo Service
 * Rest Api for todo services
 *
 * The version of the OpenAPI document: V1
 * Contact: gunnarro@gunnarroas.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Holds information about a todo list participant.
 * @export
 * @interface ParticipantDto
 */
export interface ParticipantDto {
    /**
     * Global unique identifier of a participant. Should not be set for new todo item.
     * @type {string}
     * @memberof ParticipantDto
     */
    'id'?: string;
    /**
     * Unique identifier of the todo the participant is assigned to.
     * @type {string}
     * @memberof ParticipantDto
     */
    'todoId'?: string;
    /**
     * The participant name
     * @type {string}
     * @memberof ParticipantDto
     */
    'name'?: string;
    /**
     * The participant email address
     * @type {string}
     * @memberof ParticipantDto
     */
    'email'?: string;
    /**
     * Is the participant enabled or not
     * @type {number}
     * @memberof ParticipantDto
     */
    'enabled'?: number;
}

