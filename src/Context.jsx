import { createContext } from "react";

export const Data = createContext({title: "" , body: ""});
export const SetData = createContext(null);

export const DataPosts = createContext([]);
export const SetDataPosts = createContext(null);