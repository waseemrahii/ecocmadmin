
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import {
//   AiOutlineSearch,
//   AiOutlinePlus,

// } from "react-icons/ai";
// import { FaTrash } from "react-icons/fa";

// // VendorSearch Component
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
//         className="form-control"
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

// // VendorTable Component
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
//           <th className="text-center">Total Products</th>
//           <th className="text-center">Total Orders</th>
//           <th className="text-center">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {vendors.map((vendor, index) => (
//           <tr key={vendor._id}>
//             <td>{index + 1}</td>
//             <td>
//               <div className="d-flex align-items-center gap-10 w-max-content">
//                 <img
//                   width="50"
//                   className="avatar rounded-circle"
//                   src={`http://localhost:3000/${vendor.vendorImage}`}
//                   alt=""
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
//             <td className="text-center">
//               {vendor.totalProducts}
//             </td>
//             <td className="text-center">
//               {vendor.totalOrders}
//             </td>
//             <td className="text-center">
//               <div className="btn--group flex gap-2">
//                 {/* <Link
//                   to={`/vendor-details/${vendor._id}`}
//                   className="btn btn-outline-info btn-sm"
//                 >
//                   <AiOutlineEye />
//                 </Link> */}
//                 <button
//                   onClick={() =>
//                     onUpdateStatus(
//                       vendor._id,
//                       vendor.status === "approved" ? "pending" : "approved"
//                     )
//                   }
//                   className="btn btn-outline-warning border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
//                 >
//                <span>
//                   {  vendor.status   }
//                 </span>
//                   {/* {vendor.status === "approved" ? "Pending" : "Approve"} */}
//                 </button>
//                 <button
//                   onClick={() => onDeleteVendor(vendor._id)}
//                   className="btn border-red-500 text-red-500  hover:bg-red-500 hover:text-white"
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

// // VendorList Component
// const VendorList = () => {
//   const [vendors, setVendors] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchVendors = async () => {
//       const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//       try {
//         const response = await axios.get("http://localhost:3000/api/vendors", {
//           headers: { Authorization: `Bearer ${token}` }, // Add token to the header
//         });
//         const vendorsData = response.data.doc;

//         // Fetch products count for each vendor
//         const vendorsWithProducts = await Promise.all(
//           vendorsData.map(async (vendor) => {
//             try {
//               const productsResponse = await axios.get(
//                 `http://localhost:3000/api/products/?userId=${vendor._id}`,
//                 { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//               );
//               const totalProducts = productsResponse.data.doc.length;
//               return { ...vendor, totalProducts };
//             } catch (error) {
//               console.error("Error fetching products:", error);
//               return { ...vendor, totalProducts: 0 };
//             }
//           })
//         );

//         // Fetch orders for each vendor and update totalOrders
//         const vendorsWithOrdersAndProducts = await Promise.all(
//           vendorsWithProducts.map(async (vendor) => {
//             try {
//               const ordersResponse = await axios.get(
//                 `http://localhost:3000/api/orders/?vendorId=${vendor._id}`,
//                 { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//               );
//               const totalOrders = ordersResponse.data.docs.length;
//               return { ...vendor, totalOrders };
//             } catch (error) {
//               console.error("Error fetching orders:", error);
//               return { ...vendor, totalOrders: 0 };
//             }
//           })
//         );

//         setVendors(vendorsWithOrdersAndProducts);
//       } catch (error) {
//         console.error("Error fetching vendors:", error);
//       }
//     };

//     fetchVendors();
//   }, []);

//   const handleDeleteVendor = async (vendorId) => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You will not be able to recover this vendor!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         const response = await axios.delete(
//           `http://localhost:3000/api/vendors/${vendorId}`,
//           { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//         );
//         if (response.status === 200) {
//           Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//           setVendors((prevVendors) =>
//             prevVendors.filter((vendor) => vendor._id !== vendorId)
//           );
//         } else {
//           Swal.fire("Failed!", "Failed to delete vendor.", "error");
//         }
//       }
//     } catch (error) {
//       console.error("Error deleting vendor:", error);
//     }
//   };

//   const handleUpdateStatus = async (vendorId, status) => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: `Are you sure you want to update the status to ${status}?`,
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, update it!",
//       });

//       if (result.isConfirmed) {
//         const response = await axios.put(
//           `http://localhost:3000/api/vendors/${vendorId}/status`,
//           { status },
//           { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//         );
//         if (response.status === 200) {
//           Swal.fire(
//             "Updated!",
//             `Vendor status has been updated to ${status}.`,
//             "success"
//           );
//           setVendors((prevVendors) =>
//             prevVendors.map((vendor) =>
//               vendor._id === vendorId ? { ...vendor, status } : vendor
//             )
//           );
//         } else {
//           Swal.fire("Failed!", "Failed to update status.", "error");
//         }
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png"
//             alt=""
//           />
//           Vendor List{" "}
//           <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
//             {vendors.length}
//           </span>
//         </h2>
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex justify-content-between mb-3">
//               <VendorSearch
//                 searchQuery={searchQuery}
//                 onSearchChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Link
//                 to="/addvenderform"
//                 className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
//               >
//                 <AiOutlinePlus /> Add New Vendor
//               </Link>
//             </div>
//             <VendorTable
//               vendors={vendors.filter((vendor) =>
//                 vendor.shopName.toLowerCase().includes(searchQuery.toLowerCase())
//               )}
//               onDeleteVendor={handleDeleteVendor}
//               onUpdateStatus={handleUpdateStatus}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";

// // // VendorList Component
// const VendorList = () => {
//   const [vendors, setVendors] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchVendors = async () => {
//       const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//       try {
//         const response = await axios.get("http://localhost:3000/api/vendors", {
//           headers: { Authorization: `Bearer ${token}` }, // Add token to the header
//         });
//         const vendorsData = response.data.doc;

//         // Fetch products count for each vendor
//         const vendorsWithProducts = await Promise.all(
//           vendorsData.map(async (vendor) => {
//             try {
//               const productsResponse = await axios.get(
//                 `http://localhost:3000/api/products/?userId=${vendor._id}`,
//                 { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//               );
//               const totalProducts = productsResponse.data.doc.length;
//               return { ...vendor, totalProducts };
//             } catch (error) {
//               console.error("Error fetching products:", error);
//               return { ...vendor, totalProducts: 0 };
//             }
//           })
//         );

//         // Fetch orders for each vendor and update totalOrders
//         const vendorsWithOrdersAndProducts = await Promise.all(
//           vendorsWithProducts.map(async (vendor) => {
//             try {
//               const ordersResponse = await axios.get(
//                 `http://localhost:3000/api/orders/?vendorId=${vendor._id}`,
//                 { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//               );
//               const totalOrders = ordersResponse.data.docs.length;
//               return { ...vendor, totalOrders };
//             } catch (error) {
//               console.error("Error fetching orders:", error);
//               return { ...vendor, totalOrders: 0 };
//             }
//           })
//         );

//         setVendors(vendorsWithOrdersAndProducts);
//       } catch (error) {
//         console.error("Error fetching vendors:", error);
//       }
//     };

//     fetchVendors();
//   }, []);

//   const handleDeleteVendor = async (vendorId) => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You will not be able to recover this vendor!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         const response = await axios.delete(
//           `http://localhost:3000/api/vendors/${vendorId}`,
//           { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//         );
//         if (response.status === 200) {
//           Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//           setVendors((prevVendors) =>
//             prevVendors.filter((vendor) => vendor._id !== vendorId)
//           );
//         } else {
//           Swal.fire("Failed!", "Failed to delete vendor.", "error");
//         }
//       }
//     } catch (error) {
//       console.error("Error deleting vendor:", error);
//     }
//   };

//   const handleUpdateStatus = async (vendorId, status) => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: `Are you sure you want to update the status to ${status}?`,
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, update it!",
//       });

//       if (result.isConfirmed) {
//         const response = await axios.put(
//           `http://localhost:3000/api/vendors/${vendorId}/status`,
//           { status },
//           { headers: { Authorization: `Bearer ${token}` } } // Add token to the header
//         );
//         if (response.status === 200) {
//           Swal.fire(
//             "Updated!",
//             `Vendor status has been updated to ${status}.`,
//             "success"
//           );
//           setVendors((prevVendors) =>
//             prevVendors.map((vendor) =>
//               vendor._id === vendorId ? { ...vendor, status } : vendor
//             )
//           );
//         } else {
//           Swal.fire("Failed!", "Failed to update status.", "error");
//         }
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             src="/add-new-seller.png"
//             alt=""
//           />
//           Vendor List{" "}
//           <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
//             {vendors.length}
//           </span>
//         </h2>
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex justify-content-between mb-3">
//               <VendorSearch
//                 searchQuery={searchQuery}
//                 onSearchChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Link
//                 to="/addvenderform"
//                 className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
//               >
//                 <AiOutlinePlus /> Add New Vendor
//               </Link>
//             </div>
//             <VendorTable
//               vendors={vendors.filter((vendor) =>
//                 vendor.shopName.toLowerCase().includes(searchQuery.toLowerCase())
//               )}
//               onDeleteVendor={handleDeleteVendor}
//               onUpdateStatus={handleUpdateStatus}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;




// VendorList.js

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";
// import { fetchVendors, deleteVendor, updateVendorStatus } 
// from "../../../components/redux/vendorSlice";

// const VendorList = () => {
//   const dispatch = useDispatch();
//   const { vendors, loading, error } = useSelector((state) => state.vendors);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     dispatch(fetchVendors(localStorage.getItem('token')));
//   }, [dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You will not be able to recover this vendor!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });

//       if (result.isConfirmed) {
//         await dispatch(deleteVendor(vendorId));
//         Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//       }
//     } catch (error) {
//       Swal.fire("Failed!", "Failed to delete vendor.", "error");
//     }
//   };

//   const handleUpdateStatus = async (vendorId, status) => {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: `Are you sure you want to update the status to ${status}?`,
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, update it!",
//       });

//       if (result.isConfirmed) {
//         await dispatch(updateVendorStatus({ vendorId, status }));
//         Swal.fire("Updated!", `Vendor status has been updated to ${status}.`, "success");
//       }
//     } catch (error) {
//       Swal.fire("Failed!", "Failed to update status.", "error");
//     }
//   };

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img src="/add-new-seller.png" alt="" />
//           Vendor List{" "}
//           <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
//             {vendors.length}
//           </span>
//         </h2>
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex justify-content-between mb-3">
//               <VendorSearch
//                 searchQuery={searchQuery}
//                 onSearchChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Link
//                 to="/addvenderform"
//                 className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
//               >
//                 <AiOutlinePlus /> Add New Vendor
//               </Link>
//             </div>
//             <VendorTable
//               vendors={vendors.filter((vendor) =>
//                 vendor.shopName.toLowerCase().includes(searchQuery.toLowerCase())
//               )}
//               onDeleteVendor={handleDeleteVendor}
//               onUpdateStatus={handleUpdateStatus}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendors, deleteVendor, updateVendorStatus } 
from "../../../components/redux/vendorSlice";
import { Link } from 'react-router-dom';
import VendorSearch from "./VendorList/VendorSearch";
import VendorTable from "./VendorList/VendorTable";
import Swal from 'sweetalert2';
import { AiOutlinePlus } from 'react-icons/ai';

const VendorList = () => {
  const dispatch = useDispatch();

   // Accessing state from 'vendor' slice
   const vendors = useSelector((state) => state.vendor?.vendors || []);
   const loading = useSelector((state) => state.vendor?.loading || false);
   const error = useSelector((state) => state.vendor?.error || null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchVendors(token));
  }, [dispatch]);

  const handleDeleteVendor = async (vendorId) => {
    const token = localStorage.getItem('token');
    dispatch(deleteVendor({ vendorId, token }));
  };

  const handleUpdateStatus = async (vendorId, status) => {
    const token = localStorage.getItem('token');
    dispatch(updateVendorStatus({ vendorId, status, token }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content container-fluid">
      <div className="mb-4 p-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img src="/add-new-seller.png" alt="" />
          Vendor List{' '}
          <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
            {vendors.length}
          </span>
        </h2>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <VendorSearch />
              <Link
                to="/addvenderform"
                className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
              >
                <AiOutlinePlus /> Add New Vendor
              </Link>
            </div>
            <VendorTable vendors={vendors} onDeleteVendor={handleDeleteVendor} onUpdateStatus={handleUpdateStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;




