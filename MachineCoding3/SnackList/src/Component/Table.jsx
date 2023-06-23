import { Snacks } from "../DB/Snacks";
import { useReducer, useState } from "react";
import "./table.css";
import { reducer } from "../Reducer";
export const Table = () => {
  const initialValue = {
    sortPrice: "",
    sortPriceValue: "asc",
    sortName: "",
    sortNameValue: "atoz",
  };
  const [searchValue, setSearchValue] = useState("");
  const [dataState, dispatch] = useReducer(reducer, initialValue);

  const seachHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const priceSortHandler = () => {
    console.log("click");
    const newsortValue = dataState.sortPriceValue === "asc" ? "desc" : "asc";
    dispatch({ type: "reValue", payload: newsortValue });
    dispatch({ type: "sortPrice", payload: newsortValue });
  };

  const nameSortHandler = () => {
    const newNameSortValue =
      dataState.sortNameValue === "atoz" ? "atoa" : "atoz";
    dispatch({ type: "reValueName", payload: newNameSortValue });
    dispatch({ type: "sortName", payload: newNameSortValue });
  };

  const appliedFilter = () => {
    let snack = [...Snacks];

    if (searchValue.length > 0) {
      return (snack = snack.filter(
        (item) =>
          item.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
          item.product_name.toLowerCase().includes(searchValue.toLowerCase())
      ));
    }

    if (dataState?.sortPrice === "asc") {
      return (snack = snack.sort((a, b) => a.price - b.price));
    } else if (dataState?.sortPrice === "desc") {
      return (snack = snack.sort((a, b) => b.price - a.price));
    }

    if (dataState?.sortName === "atoz") {
      return (snack = snack.sort((a, b) => a.product_name - b.product_name));
    } else if (dataState?.sortName === "ztoa") {
      return (snack = snack.sort((a, b) => b.product_name - a.product_name));
    }
    return snack;
  };

  const newArray = appliedFilter();

  return (
    <div className="table-container">
      <input
        placeholder="search snacks here"
        onChange={(e) => seachHandler(e)}
      />
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th onClick={nameSortHandler}>Product Name</th>
          <th>Product Weight</th>
          <th onClick={priceSortHandler}>Price (INR)</th>
          <th>Calories</th>
          <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {newArray.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.product_name}</td>
              <td>{item.product_weight}</td>
              <td>{item.price}</td>
              <td>{item.calories}</td>
              <td>{item.ingredients.join(", ")}</td>

              {/* <td>{item.ingredients.map((item)=>(<span key={item}>{item},</span>))}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
