import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [filter, setFilter] = useState(foods);
  function onQueryChange(query) {
    const newfilter = filterItems(foods, query);
    setFilter(newfilter);
  }
  return (
    <>
      <SearchBar onQueryChange={onQueryChange} />
      <hr />
      <List items={filter} />
    </>
  );
}

function SearchBar({ onQueryChange }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onQueryChange(newQuery);
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
