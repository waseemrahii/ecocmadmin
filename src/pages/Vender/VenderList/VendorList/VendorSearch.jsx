// import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";

// const VendorSearch = ({ searchQuery, onSearchChange }) => (
//   <form>
//     <div className="input-group input-group-merge input-group-custom width-500px">
//       <div className="input-group-prepend">
//         <div className="input-group-text">
//           <AiOutlineSearch />
//         </div>
//       </div>
//       <input
//         type="search"
//         className="form-control border-none outline-none"
//         placeholder="Search by shop name or vendor name or phone or email"
//         value={searchQuery}
//         onChange={onSearchChange}
//       />
//       <button type="button" className="btn bg-green-400 text-white">
//         Search
//       </button>
//     </div>
//   </form>
// );

// export default VendorSearch;



import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const VendorSearch = ({ searchQuery, onSearchChange }) => (
  <form className="w-full sm:max-w-xs">
    <div className="input-group input-group-merge input-group-custom">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <AiOutlineSearch />
        </div>
      </div>
      <input
        type="search"
        className="form-control border-none outline-none"
        placeholder="Search by shop name or vendor name or phone or email"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button type="button" className="btn bg-green-400 text-white">
        Search
      </button>
    </div>
  </form>
);

export default VendorSearch;
