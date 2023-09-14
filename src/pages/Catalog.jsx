import ProductList from "../components/Product/ProductList";
import DrawerFilter from "../components/Filter/DrawerFilter";
import FilterContext from "../store/filter-context";
import { useState, useEffect } from "react";
import axios from "axios";

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const changeFilterHandler = (id) => {
    if (filteredCategories.includes(id)) {
      setFilteredCategories(filteredCategories.filter((item) => item !== id));
    } else {
      setFilteredCategories([...filteredCategories, id]);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("http://localhost:8000/categories", {
        cancelToken: source.token,
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Axios request aborted.");
        } else {
          console.error(error);
        }
      });
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <FilterContext.Provider
      value={{
        onChangeFilter: changeFilterHandler,
        categories,
        filteredCategories,
      }}
    >
      <DrawerFilter />
      <ProductList />
    </FilterContext.Provider>
  );
};

export default Catalog;
