// SearchBar.js
import React from 'react';
import { FaSearch, FaDownload, FaChevronDown } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="d-flex flex-wrap gap-3 align-items-center">
      <form>
        <div className="input-group input-group-custom text-white input-group-merge" style={{ border: "1px solid lightgreen" }}>
          <div className="input-group-prepend">
            <div className="input-group-text">
              <FaSearch />
            </div>
          </div>
          <input
            type="search"
            name="searchValue"
            className="form-control"
            placeholder="Search by sub category name"
          />
          <button type="submit" className="btn" style={{ background: "lightgreen" }}>
            Search
          </button>
        </div>
      </form>
      <div>
        <button
          type="button"
          className="btn btn-outline--success text-white flex text-nowrap btn-block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "lightgreen",
            gap: "4px"
          }}
        >
          <FaDownload /> Export <FaChevronDown />
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li>
            <a className="dropdown-item" href="#">
              <img
                width="14"
                src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
                alt="Excel"
              /> Excel
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
