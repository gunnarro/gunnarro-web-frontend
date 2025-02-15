import { defineConfig, loadEnv } from 'vite';
// rest support
import axios from "axios";
// service import
import { Configuration, TodoItemDtoStatusEnum, TodoItemDtoActionEnum, TodoItemDtoPriorityEnum } from "../generated/client/todoservice";


// When you add the headers to your axios request, the request becomes a "non-simple" request and the browser performs a preflight request before the actual request.
// This preflight request is an OPTIONS request that checks if the CORS protocol is understood and if the actual request is safe to send.
//
// config axios with todo rest service properties, user and pwd should not be placed here, still in react learning mode.
export const TodoRestApi = axios.create({
  baseURL: process.env.TODO_SERVICE_URL,
  timeout: process.env.TODO_SERVICE_TIMEOUT,
  auth: {
      username: process.env.TODO_SERVICE_USER,
      password: process.env.TODO_SERVICE_PWD
  },
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json; charset=utf-8",
  }
});

export function RestApiConfiguration() {
    const config = new Configuration();
    config.basePath = process.env.TODO_SERVICE_URL;
    config.username = process.env.TODO_SERVICE_USER;
    config.password = process.env.TODO_SERVICE_PWD;

    {/* Always check for users access token and add it to the request header, if not found, the user is not authenticated to call any service. */}
    const accessToken = localStorage.getItem('accessToken'); // get stored access token
    console.log("Read token from LocalStorage: " + accessToken);
    if (accessToken) {
        config.accessToken = "Bearer ${accessToken}"; // set in header
    } else {
        config.accessToken = "none"; // set in header
    }
    return config;
}

export function toTodoItemDtoActionEnum(key: string): TodoItemDtoActionEnum {
     console.log("map key: " + key);
     if (key == TodoItemDtoActionEnum.ToBeSold) {
        return TodoItemDtoActionEnum.ToBeSold;
     } else if (key == TodoItemDtoActionEnum.GivesAway) {
        return TodoItemDtoActionEnum.GivesAway;
     } else if (key == TodoItemDtoActionEnum.ThrowAway) {
        return TodoItemDtoActionEnum.ThrowAway;
     } else if (key == TodoItemDtoActionEnum.OwnedBy) {
        return TodoItemDtoActionEnum.OwnedBy;
     } else if (key == TodoItemDtoActionEnum.GivenTo) {
        return TodoItemDtoActionEnum.GivenTo;
     } else if (key == TodoItemDtoActionEnum.StayAsIs) {
        return TodoItemDtoActionEnum.StayAsIs;
    } else {
        console.log("no map for key: " + key);
        return TodoItemDtoActionEnum.StayAsIs;
    }
}

export function toTodoItemDtoPriorityEnum(key: string): TodoItemDtoPriorityEnum {
     if (key == TodoItemDtoPriorityEnum.Highest) {
        return TodoItemDtoPriorityEnum.Highest;
     } else if (key == TodoItemDtoPriorityEnum.High) {
        return TodoItemDtoPriorityEnum.High;
     } else if (key == TodoItemDtoPriorityEnum.Medium) {
        return TodoItemDtoPriorityEnum.Medium;
     } else if (key == TodoItemDtoPriorityEnum.Low) {
        return TodoItemDtoPriorityEnum.Low;
     } else if (key == TodoItemDtoPriorityEnum.Lowest) {
        return TodoItemDtoPriorityEnum.Lowest;
    } else {
        console.log("no map for key: " + key);
        return TodoItemDtoPriorityEnum.Medium;
    }
}

export function toTodoItemDtoStatusEnum(key: string): TodoItemDtoStatusEnum {
      if (key == TodoItemDtoStatusEnum.Open) {
         return TodoItemDtoStatusEnum.Open;
      } else if (key == TodoItemDtoStatusEnum.InProgress) {
         return TodoItemDtoStatusEnum.InProgress;
      } else if (key == TodoItemDtoStatusEnum.OnHold) {
         return TodoItemDtoStatusEnum.OnHold;
      } else if (key == TodoItemDtoStatusEnum.Done) {
         return TodoItemDtoStatusEnum.Done;
      } else if (key == TodoItemDtoStatusEnum.Cancelled) {
         return TodoItemDtoStatusEnum.Cancelled;
     } else {
         console.log("no map for key: " + key);
         return TodoItemDtoStatusEnum.Open;
     }
}

function isInStringEnum(key: string, enumeration: any): boolean {
     return Object.keys(enumeration).includes(key) || Object.values(enumeration).includes(key);
 }


