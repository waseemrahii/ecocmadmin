// import React, { memo } from "react";
// import { FaEye, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const VendorTable = memo(({ vendors, onDeleteVendor, onUpdateStatus, setImageLoading, imageLoading }) => {
//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "approved":
//       case "active":
//         return "green";
//       case "pending":
//         return "";
//       case "inactive":
//       case "rejected":
//         return "danger";
//       default:
//         return "secondary";
//     }
//   };

//   const handleImageLoad = (vendorId) => {
//     setImageLoading((prevState) => ({
//       ...prevState,
//       [vendorId]: false,
//     }));
//   };

//   return (
//     <div className="overflow-x-auto overflow-y-auto">
//       <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-full">
//         <thead className="thead-light thead-50 text-capitalize">
//           <tr>
//             <th>SL</th>
//             <th>Vendor Image</th>
//             <th>Shop Name</th>
//             <th>Vendor Name</th>
//             <th>Contact Info</th>
//             <th>Status</th>
//             <th className="text-center">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vendors.map((vendor, index) => (
//             <tr key={vendor._id}>
//               <td>{index + 1}</td>
//               <td>
//                 <div className="d-flex align-items-center gap-10 w-max-content">
//                   {!imageLoading[vendor._id] && (
//                     <img
//                       width="50"
//                       className="avatar rounded-circle"
//                       src={`https://lionfish-app-tdhk5.ondigitalocean.app/${vendor.vendorImage}`}
//                       alt={vendor.firstName}
//                       onLoad={() => handleImageLoad(vendor._id)}
//                     />
//                   )}
//                   {imageLoading[vendor._id] && <span>Loading Image...</span>}
//                 </div>
//               </td>
//               <td>
//                 <a className="title-color">{vendor.shopName}</a>
//               </td>
//               <td>
//                 <label className={`badge badge-${getStatusBadge(vendor.status)}`}>
//                   {vendor.firstName}
//                 </label>
//               </td>
//               <td>
//                 <div className="mb-1">
//                   <strong>
//                     <a className="title-color hover-c1" href={`mailto:${vendor.email}`}>
//                       {vendor.email}
//                     </a>
//                   </strong>
//                 </div>
//                 <a className="title-color hover-c1" href={`tel:${vendor.phoneNumber}`}>
//                   {vendor.phoneNumber}
//                 </a>
//               </td>
//               <td>
//                 <label className={`badge bg-${getStatusBadge(vendor.status)}`}>
//                   {vendor.status}
//                 </label>
//               </td>
//               <td className="text-center">
//                 <div className="btn--group flex gap-2">
//                   <Link
//                     to={`/vendordetail/${vendor._id}`}
//                     className="btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
//                   >
//                     <FaEye />
//                   </Link>
//                   <button
//                     onClick={() => onDeleteVendor(vendor._id)}
//                     className="btn border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// });

// export default VendorTable;



import React, { memo } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const VendorTable = memo(({ vendors, onDeleteVendor, onUpdateStatus, setImageLoading, imageLoading }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
      case "active":
        return "green";
      case "pending":
        return "";
      case "inactive":
      case "rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  const handleImageLoad = (vendorId) => {
    setImageLoading((prevState) => ({
      ...prevState,
      [vendorId]: false,
    }));
  };

  return (
    <div className="overflow-x-auto">
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
                  {!imageLoading[vendor._id] && (
                    <img
                      width="50"
                      className="avatar rounded-circle"
                      src={`https://lionfish-app-tdhk5.ondigitalocean.app/${vendor.vendorImage}`}
                      alt={vendor.firstName}
                      onLoad={() => handleImageLoad(vendor._id)}
                    />
                  )}
                  {imageLoading[vendor._id] && <span>Loading Image...</span>}
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
                <label className={`badge bg-${getStatusBadge(vendor.status)}`}>
                  {vendor.status}
                </label>
              </td>
              <td className="text-center">
                <div className="btn--group flex gap-2">
                  <Link
                    to={`/vendordetail/${vendor._id}`}
                    className="btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  >
                    <FaEye />
                  </Link>
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
});

export default VendorTable;
