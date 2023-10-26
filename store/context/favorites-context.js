import { createContext, useState} from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {

  const [favoriteMealIDs, setFavoriteMealIDs] = useState([]);

  function addFavorite(id){
    setFavoriteMealIDs((currentFavIDs) => [...currentFavIDs, id]);
  }
  function removeFavorite(id){
    setFavoriteMealIDs((currentFavIDs) => currentFavIDs.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIDs, 
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return <FavoritesContext.Provider value = {value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;