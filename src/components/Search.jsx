import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="mt-2 mb-2  ">
      <div className="border-end ">
        <div className="input-group flex-nowrap  ">
          <input
            type="text"
            className="form-control col-11"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="input-group-text" id="addon-wrapping">
            <BsSearch></BsSearch>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Search;
