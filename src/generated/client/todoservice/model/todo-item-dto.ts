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
     * Name of the task
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
     * Holds all possible statues for a todo item
     * @type {string}
     * @memberof TodoItemDto
     */
    'status': TodoItemDtoStatusEnum;
    /**
     * The action that should be done for this item
     * @type {string}
     * @memberof TodoItemDto
     */
    'action'?: TodoItemDtoActionEnum;
    /**
     * the person that is responsible to follow up and fulfill this task
     * @type {string}
     * @memberof TodoItemDto
     */
    'assignedTo'?: string;
    /**
     * the priority of this task, can be any integer, typically from 1- 10
     * @type {number}
     * @memberof TodoItemDto
     */
    'priority'?: number;
    /**
     * the price of this item
     * @type {object}
     * @memberof TodoItemDto
     */
    'price'?: object;
    /**
     * number of minutes worked with this task
     * @type {number}
     * @memberof TodoItemDto
     */
    'workedMinutes'?: number;
}

export const TodoItemDtoStatusEnum = {
    Open: 'OPEN',
    InProgress: 'IN_PROGRESS',
    OnHold: 'ON_HOLD',
    Done: 'DONE',
    Cancelled: 'CANCELLED'
} as const;

export type TodoItemDtoStatusEnum = typeof TodoItemDtoStatusEnum[keyof typeof TodoItemDtoStatusEnum];
export const TodoItemDtoActionEnum = {
    ToBeSold: 'TO_BE_SOLD',
    GivesAway: 'GIVES_AWAY',
    ThrowAway: 'THROW_AWAY',
    OwnedBy: 'OWNED_BY',
    GivenTo: 'GIVEN_TO',
    StayAsIs: 'STAY_AS_IS'
} as const;

export type TodoItemDtoActionEnum = typeof TodoItemDtoActionEnum[keyof typeof TodoItemDtoActionEnum];

