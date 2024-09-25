// import React from "react";
// import { FaTrash } from "react-icons/fa";

// const VendorTable = ({ vendors, onDeleteVendor, onUpdateStatus }) => (
//   <div className="overflow-x-auto overflow-y-auto">
//     <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-full">
//       <thead className="thead-light thead-50 text-capitalize">
//         <tr>
//           <th>SL</th>
//           <th>Vendor Image</th>
//           <th>Shop Name</th>
//           <th>Vendor Name</th>
//           <th>Contact Info</th>
//           <th>Status</th>
//           {/* <th className="text-center">Total Products</th>
//           <th className="text-center">Total Orders</th> */}
//           <th className="text-center">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {vendors.map((vendor, index) => (
//           <tr key={vendor._id}>
//             {/* {console.log("vendor===========", vendor)} */}
//             <td>{index + 1}</td>
//             <td>
//               <div className="d-flex align-items-center gap-10 w-max-content">
//                 <img
//                   width="50"
//                   className="avatar rounded-circle"
//                   // src={`http://localhost:3000/${vendor.vendorImage}`}
//                   src={`https://lionfish-app-tdhk5.ondigitalocean.app/${vendor.vendorImage}`}
//               alt={vendor.firstName}
//                 />
//               </div>
//             </td>
//             <td>
//               <a className="title-color">{vendor.shopName}</a>
//             </td>
//             <td>
//               <label
//                 className={`badge badge-${
//                   vendor.status === "approved" ? "success" : "warning"
//                 }`}
//               >
//                 {vendor.firstName}
//               </label>
//             </td>
//             <td>
//               <div className="mb-1">
//                 <strong>
//                   <a
//                     className="title-color hover-c1"
//                     href={`mailto:${vendor.email}`}
//                   >
//                     {vendor.email}
//                   </a>
//                 </strong>
//               </div>
//               <a
//                 className="title-color hover-c1"
//                 href={`tel:${vendor.phoneNumber}`}
//               >
//                 {vendor.phoneNumber}
//               </a>
//             </td>
//             <td>
//               <label
//                 className={`badge badge-${
//                   vendor.status === "approved" ? "success" : "warning"
//                 }`}
//               >
//                 {vendor.status}
//               </label>
//             </td>
//             {/* <td className="text-center">{vendor.totalProducts}</td>
//             <td className="text-center">{vendor.totalOrders}</td> */}
//             <td className="text-center">
//               <div className="btn--group flex gap-2">
//                 <button
//                   onClick={() =>
//                     onUpdateStatus(
//                       vendor._id,
//                       vendor.status === "approved" ? "pending" : "approved"
//                     )
//                   }
//                   className="btn btn-outline-warning border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
//                 >
//                   <span>{vendor.status}</span>
//                 </button>
//                 <button
//                   onClick={() => onDeleteVendor(vendor._id)}
//                   className="btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// export default VendorTable;






import React from "react";
import { FaTrash } from "react-icons/fa";

const VendorTable = ({ vendors, onDeleteVendor, onUpdateStatus }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
      case "active":
        return "success";
      case "pending":
        return "warning";
      case "inactive":
      case "rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  // Dropdown options for statuses
  const statusOptions = ["pending", "active", "inactive", "rejected"];

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-full">
        <thead className="thead-light thead-50 text-capitalize">
          <tr>
            <th>SL</th>
            <th>Vendor Image</th>
            <th>Shop Name</th>
            <th>Vendor Name</th>
            <th>Contact Info</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={vendor._id}>
              <td>{index + 1}</td>
              <td>
                <div className="d-flex align-items-center gap-10 w-max-content">
                  <img
                    width="50"
                    className="avatar rounded-circle"
                    src={`https://lionfish-app-tdhk5.ondigitalocean.app/${vendor.vendorImage}`}
                    alt={vendor.firstName}
                  />
                </div>
              </td>
              <td>
                <a className="title-color">{vendor.shopName}</a>
              </td>
              <td>
                <label className={`badge badge-${getStatusBadge(vendor.status)}`}>
                  {vendor.firstName}
                </label>
              </td>
              <td>
                <div className="mb-1">
                  <strong>
                    <a className="title-color hover-c1" href={`mailto:${vendor.email}`}>
                      {vendor.email}
                    </a>
                  </strong>
                </div>
                <a className="title-color hover-c1" href={`tel:${vendor.phoneNumber}`}>
                  {vendor.phoneNumber}
                </a>
              </td>
              <td>
                <label className={`badge badge-${getStatusBadge(vendor.status)}`}>
                  {vendor.status}
                </label>
              </td>
              <td className="text-center">
                <div className="btn--group flex gap-2">
                  {/* Dropdown for status change */}
                  <select
                    value={vendor.status}
                    onChange={(e) =>
                      onUpdateStatus(vendor._id, e.target.value)
                    }
                    className="form-select border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => onDeleteVendor(vendor._id)}
                    className="btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorTable;
