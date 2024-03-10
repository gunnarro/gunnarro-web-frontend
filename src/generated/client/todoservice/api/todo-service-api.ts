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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ErrorResponse } from '../model';
// @ts-ignore
import { TodoDto } from '../model';
// @ts-ignore
import { TodoHistoryDto } from '../model';
// @ts-ignore
import { TodoItemDto } from '../model';
/**
 * TodoServiceApi - axios parameter creator
 * @export
 */
export const TodoServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * return created todo information
         * @summary create a new todo
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodo: async (todoDto: TodoDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoDto' is not null or undefined
            assertParamExists('createTodo', 'todoDto', todoDto)
            const localVarPath = `/todoservice/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return created todo item
         * @summary Add new todo item to the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodoItem: async (todoId: string, todoItemDto: TodoItemDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('createTodoItem', 'todoId', todoId)
            // verify required parameter 'todoItemDto' is not null or undefined
            assertParamExists('createTodoItem', 'todoItemDto', todoItemDto)
            const localVarPath = `/todoservice/v1/todos/{todoId}/items`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/problem+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoItemDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * id of deleted todo
         * @summary delete todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo: async (todoId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('deleteTodo', 'todoId', todoId)
            const localVarPath = `/todoservice/v1/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * todo item id to delete
         * @summary delete todo item
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodoItem: async (todoId: string, todoItemId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('deleteTodoItem', 'todoId', todoId)
            // verify required parameter 'todoItemId' is not null or undefined
            assertParamExists('deleteTodoItem', 'todoItemId', todoItemId)
            const localVarPath = `/todoservice/v1/todos/{todoId}/items/{todoItemId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)))
                .replace(`{${"todoItemId"}}`, encodeURIComponent(String(todoItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return todo information
         * @summary Get todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoById: async (todoId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('getTodoById', 'todoId', todoId)
            const localVarPath = `/todoservice/v1/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoHistoryById: async (todoId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('getTodoHistoryById', 'todoId', todoId)
            const localVarPath = `/todoservice/v1/todos/{todoId}/history`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoItemHistoryById: async (todoId: string, todoItemId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('getTodoItemHistoryById', 'todoId', todoId)
            // verify required parameter 'todoItemId' is not null or undefined
            assertParamExists('getTodoItemHistoryById', 'todoItemId', todoItemId)
            const localVarPath = `/todoservice/v1/todos/{todoId}/items/{todoItemId}/history`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)))
                .replace(`{${"todoItemId"}}`, encodeURIComponent(String(todoItemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return todos created by user
         * @summary Get todos created by user
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodosByUserName: async (userName: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userName' is not null or undefined
            assertParamExists('getTodosByUserName', 'userName', userName)
            const localVarPath = `/todoservice/v1/todos/user/{userName}`
                .replace(`{${"userName"}}`, encodeURIComponent(String(userName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return updated todo
         * @summary update todo
         * @param {string} todoId 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo: async (todoId: string, todoDto: TodoDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('updateTodo', 'todoId', todoId)
            // verify required parameter 'todoDto' is not null or undefined
            assertParamExists('updateTodo', 'todoDto', todoDto)
            const localVarPath = `/todoservice/v1/todos/{todoId}`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * return updated todo item
         * @summary update todo item in the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodoItem: async (todoId: string, todoItemDto: TodoItemDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('updateTodoItem', 'todoId', todoId)
            // verify required parameter 'todoItemDto' is not null or undefined
            assertParamExists('updateTodoItem', 'todoItemDto', todoItemDto)
            const localVarPath = `/todoservice/v1/todos/{todoId}/items`
                .replace(`{${"todoId"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoItemDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodoServiceApi - functional programming interface
 * @export
 */
export const TodoServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodoServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * return created todo information
         * @summary create a new todo
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTodo(todoDto: TodoDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTodo(todoDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.createTodo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return created todo item
         * @summary Add new todo item to the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTodoItem(todoId, todoItemDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.createTodoItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * id of deleted todo
         * @summary delete todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodo(todoId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodo(todoId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.deleteTodo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * todo item id to delete
         * @summary delete todo item
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodoItem(todoId: string, todoItemId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodoItem(todoId, todoItemId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.deleteTodoItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return todo information
         * @summary Get todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodoById(todoId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodoById(todoId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.getTodoById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodoHistoryById(todoId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoHistoryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodoHistoryById(todoId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.getTodoHistoryById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodoItemHistoryById(todoId: string, todoItemId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoHistoryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodoItemHistoryById(todoId, todoItemId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.getTodoItemHistoryById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return todos created by user
         * @summary Get todos created by user
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodosByUserName(userName: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodosByUserName(userName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.getTodosByUserName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return updated todo
         * @summary update todo
         * @param {string} todoId 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTodo(todoId: string, todoDto: TodoDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTodo(todoId, todoDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.updateTodo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * return updated todo item
         * @summary update todo item in the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TodoItemDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTodoItem(todoId, todoItemDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TodoServiceApi.updateTodoItem']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TodoServiceApi - factory interface
 * @export
 */
export const TodoServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodoServiceApiFp(configuration)
    return {
        /**
         * return created todo information
         * @summary create a new todo
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodo(todoDto: TodoDto, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.createTodo(todoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * return created todo item
         * @summary Add new todo item to the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: any): AxiosPromise<TodoItemDto> {
            return localVarFp.createTodoItem(todoId, todoItemDto, options).then((request) => request(axios, basePath));
        },
        /**
         * id of deleted todo
         * @summary delete todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo(todoId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTodo(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * todo item id to delete
         * @summary delete todo item
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodoItem(todoId: string, todoItemId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteTodoItem(todoId, todoItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * return todo information
         * @summary Get todo
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoById(todoId: string, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.getTodoById(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoHistoryById(todoId: string, options?: any): AxiosPromise<TodoHistoryDto> {
            return localVarFp.getTodoHistoryById(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * return todo audit history
         * @summary Get todo audit history
         * @param {string} todoId 
         * @param {string} todoItemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodoItemHistoryById(todoId: string, todoItemId: string, options?: any): AxiosPromise<TodoHistoryDto> {
            return localVarFp.getTodoItemHistoryById(todoId, todoItemId, options).then((request) => request(axios, basePath));
        },
        /**
         * return todos created by user
         * @summary Get todos created by user
         * @param {string} userName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodosByUserName(userName: string, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.getTodosByUserName(userName, options).then((request) => request(axios, basePath));
        },
        /**
         * return updated todo
         * @summary update todo
         * @param {string} todoId 
         * @param {TodoDto} todoDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo(todoId: string, todoDto: TodoDto, options?: any): AxiosPromise<TodoDto> {
            return localVarFp.updateTodo(todoId, todoDto, options).then((request) => request(axios, basePath));
        },
        /**
         * return updated todo item
         * @summary update todo item in the todo list
         * @param {string} todoId 
         * @param {TodoItemDto} todoItemDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: any): AxiosPromise<TodoItemDto> {
            return localVarFp.updateTodoItem(todoId, todoItemDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TodoServiceApi - object-oriented interface
 * @export
 * @class TodoServiceApi
 * @extends {BaseAPI}
 */
export class TodoServiceApi extends BaseAPI {
    /**
     * return created todo information
     * @summary create a new todo
     * @param {TodoDto} todoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public createTodo(todoDto: TodoDto, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).createTodo(todoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return created todo item
     * @summary Add new todo item to the todo list
     * @param {string} todoId 
     * @param {TodoItemDto} todoItemDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public createTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).createTodoItem(todoId, todoItemDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * id of deleted todo
     * @summary delete todo
     * @param {string} todoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public deleteTodo(todoId: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).deleteTodo(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * todo item id to delete
     * @summary delete todo item
     * @param {string} todoId 
     * @param {string} todoItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public deleteTodoItem(todoId: string, todoItemId: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).deleteTodoItem(todoId, todoItemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return todo information
     * @summary Get todo
     * @param {string} todoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public getTodoById(todoId: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).getTodoById(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return todo audit history
     * @summary Get todo audit history
     * @param {string} todoId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public getTodoHistoryById(todoId: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).getTodoHistoryById(todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return todo audit history
     * @summary Get todo audit history
     * @param {string} todoId 
     * @param {string} todoItemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public getTodoItemHistoryById(todoId: string, todoItemId: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).getTodoItemHistoryById(todoId, todoItemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return todos created by user
     * @summary Get todos created by user
     * @param {string} userName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public getTodosByUserName(userName: string, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).getTodosByUserName(userName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return updated todo
     * @summary update todo
     * @param {string} todoId 
     * @param {TodoDto} todoDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public updateTodo(todoId: string, todoDto: TodoDto, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).updateTodo(todoId, todoDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * return updated todo item
     * @summary update todo item in the todo list
     * @param {string} todoId 
     * @param {TodoItemDto} todoItemDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodoServiceApi
     */
    public updateTodoItem(todoId: string, todoItemDto: TodoItemDto, options?: RawAxiosRequestConfig) {
        return TodoServiceApiFp(this.configuration).updateTodoItem(todoId, todoItemDto, options).then((request) => request(this.axios, this.basePath));
    }
}

