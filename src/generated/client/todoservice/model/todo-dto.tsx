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


// May contain unused imports in some cases
// @ts-ignore
import { ParticipantDto } from './participant-dto';
// May contain unused imports in some cases
// @ts-ignore
import { TodoItemDto } from './todo-item-dto';

/**
 * Holds information about a todo
 * @export
 * @interface TodoDto
 */
export interface TodoDto {
    /**
     * Unique identifier of the todo. Should not be set for new Todo.
     * @type {string}
     * @memberof TodoDto
     */
    'id'?: string;
    /**
     * Unique global identifier of the todo. Used by guest users to access the todo, i.e, unidentified users
     * @type {string}
     * @memberof TodoDto
     */
    'uuid'?: string;
    /**
     * date when todo was created
     * @type {string}
     * @memberof TodoDto
     */
    'createdDate'?: string;
    /**
     * date when todo was last modified
     * @type {string}
     * @memberof TodoDto
     */
    'lastModifiedDate'?: string;
    /**
     * user that created the todo
     * @type {string}
     * @memberof TodoDto
     */
    'createdByUser'?: string;
    /**
     * user that last modified the todo
     * @type {string}
     * @memberof TodoDto
     */
    'lastModifiedByUser'?: string;
    /**
     * Name of todo
     * @type {string}
     * @memberof TodoDto
     */
    'name'?: string;
    /**
     * Holds all possible statues for a todo task.
     * @type {string}
     * @memberof TodoDto
     */
    'status': TodoDtoStatusEnum;
    /**
     * description of this to do task
     * @type {string}
     * @memberof TodoDto
     */
    'description'?: string;
    /**
     * List of task for the todo list
     * @type {Array<TodoItemDto>}
     * @memberof TodoDto
     */
    'todoItemDtoList'?: Array<TodoItemDto>;
    /**
     * The todo list can have many participants and a participant is unique for a todo list.
     * @type {Array<ParticipantDto>}
     * @memberof TodoDto
     */
    'participantDtoList'?: Array<ParticipantDto>;
}

export const TodoDtoStatusEnum = {
    Open: 'OPEN',
    InProgress: 'IN_PROGRESS',
    OnHold: 'ON_HOLD',
    Done: 'DONE',
    Cancelled: 'CANCELLED'
} as const;

export type TodoDtoStatusEnum = typeof TodoDtoStatusEnum[keyof typeof TodoDtoStatusEnum];

