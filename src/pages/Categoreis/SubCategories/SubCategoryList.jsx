// SubCategoryList.js
import React from 'react';
import { FaTrash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubCategoryList = ({ subCategories, handleDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
        <thead className="thead-light thead-50 text-capitalize">
          <tr>
            <th>ID</th>
            <th>Sub category name</th>
            <th>Category name</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.filter(Boolean).map((subCategory, index) => (
            <tr key={subCategory._id}>
              <td>{index + 1}</td>
              <td>
                <span className="d-block font-size-sm text-body">
                  {subCategory.name || 'N/A'}
                </span>
              </td>
              <td>
                <span className="d-block font-size-sm text-body">
                  {subCategory.mainCategory?.name || 'N/A'}
                </span>
              </td>
              <td className="text-center">{subCategory.priority}</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <Link to={`/admin/sub-category/${subCategory._id}/edit`}>
                    <button type="button" className="btn btn-sm bg-green-400 text-white hover:bg-green-600">
                      <FaEye />
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                    onClick={() => handleDelete(subCategory._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {subCategories.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">No subcategories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategoryList;
