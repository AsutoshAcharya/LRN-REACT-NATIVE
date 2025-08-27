import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { MealType } from "../../data/dummyData";
import favouriteReducer, { FavouriteManagerAction } from "./favouriteReducer";

export type FavouriteManager = {
  favourites: Array<MealType>;
};

type FavourtieContextType = {
  manager: FavouriteManager;
  dispatch: Dispatch<FavouriteManagerAction>;
};

const FavouriteContext = createContext<FavourtieContextType>(
  {} as FavourtieContextType
);
interface Props {
  children: ReactNode;
}
const FavouriteContextProvider = ({ children }: Props) => {
  const initialState: FavouriteManager = {
    favourites: [],
  };

  const [manager, dispatch] = useReducer(favouriteReducer, initialState);

  return (
    <FavouriteContext.Provider value={{ manager, dispatch }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;

export const useFavouriteContext = () => useContext(FavouriteContext);
