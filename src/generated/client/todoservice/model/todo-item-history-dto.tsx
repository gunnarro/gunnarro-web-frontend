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
 * Holds audit log for Todo item.
 * @export
 * @interface TodoItemHistoryDto
 */
export interface TodoItemHistoryDto {
    /**
     * Unique identifier of the revision.
     * @type {number}
     * @memberof TodoItemHistoryDto
     */
    'revisionNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof TodoItemHistoryDto
     */
    'revisionEndId'?: number;
    /**
     * The revision type, update, delete.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'revisionType'?: string;
    /**
     * Global unique identifier of the todo item. Should not be set for new todo item.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'id'?: string;
    /**
     * Global unique identifier for the todo item that this item belongs to.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'todoId': string;
    /**
     * Date when todo item was created.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'createdDate'?: string;
    /**
     * Date when todo item was last modified.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'lastModifiedDate'?: string;
    /**
     * User that created the todo item.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'createdByUser'?: string;
    /**
     * User that last modified the todo item.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'lastModifiedByUser'?: string;
    /**
     * doc me
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'name'?: string;
    /**
     * description of the task to do
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'description'?: string;
    /**
     * Status of todo item, OPEN, IN_PROGRESS or FINISHED
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'status'?: string;
    /**
     * The action that should be done for this item.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'action'?: string;
    /**
     * The person that is responsible to follow up and fulfill this task.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'assignedTo'?: string;
    /**
     * Holds all possible priority levels for a todo item. Where default level is MEDIUM.
     * @type {string}
     * @memberof TodoItemHistoryDto
     */
    'priority'?: TodoItemHistoryDtoPriorityEnum;
}

export const TodoItemHistoryDtoPriorityEnum = {
    Lowest: 'LOWEST',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Highest: 'HIGHEST'
} as const;

export type TodoItemHistoryDtoPriorityEnum = typeof TodoItemHistoryDtoPriorityEnum[keyof typeof TodoItemHistoryDtoPriorityEnum];


