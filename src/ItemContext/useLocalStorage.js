import React from "react";

function useLocalStore(itemName, initialValue) {

    const [items, setItems] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
      
    React.useEffect(() => {
  
      setTimeout(() => {
        try {
          const localStoredItem = localStorage.getItem(itemName)
  
          let safedItems;
  
          if (!localStoredItem) {
            safedItems = [];
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          }
          else {
            safedItems = JSON.parse(localStoredItem);
          }
  
          setItems(safedItems);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
  
  
      }, 1000);
    });
  
    const saveitems = (arrayItems) => {
      try {
        setItems(arrayItems);
        localStorage.setItem(itemName, JSON.stringify(arrayItems))
      } 
      catch (error)
      {
        setError(true);
      }
  
    };
  
    return {
      items,
      saveitems,
      loading,
      error
    };
  }

  export {useLocalStore};