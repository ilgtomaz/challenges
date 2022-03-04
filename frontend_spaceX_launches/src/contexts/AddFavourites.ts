import { createContext } from "react";
import { Launch } from "../data/launch";

const state: Launch[] = [];

export const addFavouritesCtxDefaultValue = {
  state,
  setState: (state: Launch[]) => {},
};

export const AddFavouritesContext = createContext(addFavouritesCtxDefaultValue);
