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



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchVendors, deleteVendor, updateVendorStatus } 
// from "../../../components/redux/vendorSlice";
// import { Link } from 'react-router-dom';
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";
// import Swal from 'sweetalert2';
// import { AiOutlinePlus } from 'react-icons/ai';

// const VendorList = () => {
//   const dispatch = useDispatch();

//    // Accessing state from 'vendor' slice
//    const vendors = useSelector((state) => state.vendor?.vendors || []);
//    const loading = useSelector((state) => state.vendor?.loading || false);
//    const error = useSelector((state) => state.vendor?.error || null);
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     dispatch(fetchVendors(token));
//   }, [dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     const token = localStorage.getItem('token');
//     dispatch(deleteVendor({ vendorId, token }));
//   };

//   const handleUpdateStatus = async (vendorId, status) => {
//     const token = localStorage.getItem('token');
//     dispatch(updateVendorStatus({ vendorId, status, token }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="content container-fluid">
//       <div className="mb-4 p-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img src="/add-new-seller.png" alt="" />
//           Vendor List{' '}
//           <span className="badge badge-soft-dark radius-50 fz-16 text-capitalize">
//             {vendors.length}
//           </span>
//         </h2>
//         <div className="card">
//           <div className="card-body">
//             <div className="d-flex justify-content-between mb-3">
//               <VendorSearch />
//               <Link
//                 to="/addvenderform"
//                 className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
//               >
//                 <AiOutlinePlus /> Add New Vendor
//               </Link>
//             </div>
//             <VendorTable vendors={vendors} onDeleteVendor={handleDeleteVendor} onUpdateStatus={handleUpdateStatus} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendors, deleteVendor, updateVendorStatus } from "../../../components/redux/vendorSlice";
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
    dispatch(fetchVendors());
  }, [dispatch]);

  const handleDeleteVendor = async (vendorId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this vendor!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      dispatch(deleteVendor(vendorId));
      Swal.fire("Deleted!", "Vendor has been deleted.", "success");
    }
  };

  const handleUpdateStatus = async (vendorId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to update the status to ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    });

    if (result.isConfirmed) {
      dispatch(updateVendorStatus({ vendorId, status: newStatus }));
      Swal.fire("Updated!", `Vendor status has been updated to ${newStatus}.`, "success");
    }
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
            <VendorTable 
              vendors={vendors} 
              onDeleteVendor={handleDeleteVendor} 
              onUpdateStatus={handleUpdateStatus} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
