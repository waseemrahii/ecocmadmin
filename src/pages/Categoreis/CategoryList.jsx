import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineDownload } from 'react-icons/ai';
import { FaEye, FaTrash } from 'react-icons/fa';

const CategoryList = React.memo(({ categories, handleDelete, handleSearch, searchQuery }) => {
  const renderedCategories = useMemo(() => {
    return categories.map((category) => (
      <tr key={category._id}>
        <td>{`C${category._id.substring(0, 6)}`}</td>
        <td>
          <img
            src={`https://lionfish-app-tdhk5.ondigitalocean.app/uploads/${category.logo}`} 
            className="avatar" 
            alt={category.name} 
            aria-label="Category Logo"
          />
        </td>
        <td>{category.name}</td>
        <td className=''>{category.priority || '0'}</td>
        {/* <td className="text-center">
          <label className="switcher mx-auto">
            <input
              type="checkbox"
              className="switcher_input"
              checked={category.status === "active"}
              aria-label="Category Status"
              // onChange={() => updateStatus(category.status)}
            />
            <span className="switcher_control" />
          </label>
        </td> */}
        <td>
          <div className="d-flex gap-2 justify-content-center">
            <Link
              to={`/categoryedit/${category._id}`}
              className="btn border-green-500 text-green-500 btn-sm hover:text-white hover:bg-green-400"
              title="View"
              aria-label={`Edit ${category.name}`}
            >
              <FaEye />
            </Link>
            <button
              type="button"
              className="btn border-red-500 text-red-500 btn-sm hover:text-white hover:bg-red-400"
              onClick={() => handleDelete(category._id)}
              title="Delete"
              aria-label={`Delete ${category.name}`}
            >
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    ));
  }, [categories, handleDelete]);

  return (
    <div className="card mt-4 px-2">
      <div className="px-3 py-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h5 className="form-label">Category Table <span className="badge badge-soft-dark ml-2">
              {categories.length}
            </span></h5>
          </div>
          <div className="col-lg-6">
            <form className="search-form">
              <div className="input-group input-group-merge input-group-flush">
                <div className="input-group-prepend">
                  <span className="input-group-text" aria-label="Search">
                    <AiOutlineSearch size={18} />
                  </span>
                </div>
                <input
                  id="datatableSearch"
                  type="search"
                  placeholder="Search by ID, category or sub category"
                  className="form-control"
                  value={searchQuery}
                  onChange={handleSearch}
                  aria-label="Search Categories"
                />
              </div>
            </form>
          </div>
          <div className="col-lg-2">
            <div className="d-flex justify-content-lg-end">
              <button
                type="button"
                className="btn bg-green-400 text-white flex align-items-center gap-2"
                aria-label="Export Categories"
              >
                <AiOutlineDownload className="icon" /> Export
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table id="datatable" className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table" style={{ width: "100%" }}>
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Category Image</th>
              <th>Category Name</th>
              <th>Priority</th>
              {/* <th>Status</th> */}
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {renderedCategories}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default CategoryList;
