import { useState } from "react";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    let userInput = e.target.value;
  }

  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <input
          type="text"
          placeholder="Search vehicle by model"
          value={searchValue}
          onChange
        ></input>
        <button type="submit" value="" onClick={handleSubmit(userInput)}>
          Search
        </button>
      </form>
    </div>
  );
}
