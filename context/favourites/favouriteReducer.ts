import { MealType } from "../../data/dummyData";
import { FavouriteManager } from "./FavouriteContextProvider";

export type FavouriteManagerAction =
  | {
      type: "addFavourite";
      payload: MealType;
    }
  | {
      type: "removeFavourite";
      payload: string;
    };

function favouriteReducer(
  manager: FavouriteManager,
  action: FavouriteManagerAction
): FavouriteManager {
  switch (action.type) {
    case "addFavourite":
      return {
        ...manager,
        favourites: { ...manager.favourites, ...action.payload },
      };
    case "removeFavourite":
      return {
        ...manager,
        favourites: manager.favourites.filter((f) => f.id !== action.payload),
      };
    default:
      return manager;
  }
}

export default favouriteReducer;
