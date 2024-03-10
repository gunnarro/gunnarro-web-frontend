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
 * Holds information about a todo item
 * @export
 * @interface TodoItemDto
 */
export interface TodoItemDto {
    /**
     * Global unique identifier of the todo item. Should not be set for new todo item.
     * @type {string}
     * @memberof TodoItemDto
     */
    'id'?: string;
    /**
     * Global unique identifier for the todo that this item belongs to.
     * @type {string}
     * @memberof TodoItemDto
     */
    'todoId'?: string;
    /**
     * date when todo was created
     * @type {string}
     * @memberof TodoItemDto
     */
    'createdDate'?: string;
    /**
     * date when todo was last modified
     * @type {string}
     * @memberof TodoItemDto
     */
    'lastModifiedDate'?: string;
    /**
     * user that created the todo
     * @type {string}
     * @memberof TodoItemDto
     */
    'createdByUser'?: string;
    /**
     * user that last modified the todo
     * @type {string}
     * @memberof TodoItemDto
     */
    'lastModifiedByUser'?: string;
    /**
     * doc me
     * @type {string}
     * @memberof TodoItemDto
     */
    'name'?: string;
    /**
     * description of the task to do
     * @type {string}
     * @memberof TodoItemDto
     */
    'description'?: string;
    /**
     * Status of todo, OPEN, IN_PROGRESS or FINISHED
     * @type {string}
     * @memberof TodoItemDto
     */
    'status'?: string;
    /**
     * The action that should be done for this item
     * @type {string}
     * @memberof TodoItemDto
     */
    'action'?: string;
    /**
     * the person that is responsible to follow up and fulfill this task
     * @type {string}
     * @memberof TodoItemDto
     */
    'assignedTo'?: string;
}

