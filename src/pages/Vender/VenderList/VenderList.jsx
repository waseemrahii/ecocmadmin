// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchVendors, deleteVendor, updateVendorStatus } from "../../../components/redux/vendorSlice";
// import { Link } from 'react-router-dom';
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";
// import Swal from 'sweetalert2';
// import { AiOutlinePlus } from 'react-icons/ai';

// const VendorList = () => {
//   const dispatch = useDispatch();

//   // Accessing state from 'vendor' slice
//   const vendors = useSelector((state) => state.vendor?.vendors || []);
//   const loading = useSelector((state) => state.vendor?.loading || false);
//   const error = useSelector((state) => state.vendor?.error || null);

//   useEffect(() => {
//     dispatch(fetchVendors());
//   }, [dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this vendor!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       dispatch(deleteVendor(vendorId));
//       Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//     }
//   };

//   const handleUpdateStatus = async (vendorId, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: `Are you sure you want to update the status to ${newStatus}?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, update it!",
//     });

//     if (result.isConfirmed) {
//       dispatch(updateVendorStatus({ vendorId, status: newStatus }));
//       Swal.fire("Updated!", `Vendor status has been updated to ${newStatus}.`, "success");
//     }
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
//             <VendorTable 
//               vendors={vendors} 
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



// import React, { useEffect, useState, Suspense, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchVendors, deleteVendor, updateVendorStatus } from "../../../components/redux/vendorSlice";
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AiOutlinePlus } from 'react-icons/ai';

// // Lazy load VendorSearch and VendorTable components
// import VendorSearch from "./VendorList/VendorSearch";
// import VendorTable from "./VendorList/VendorTable";
// const VendorList = () => {
//   const dispatch = useDispatch();

//   // State for managing image loading
//   const [imageLoading, setImageLoading] = useState({});

//   // Accessing state from 'vendor' slice
//   const vendors = useSelector((state) => state.vendor?.vendors || []);
//   const loading = useSelector((state) => state.vendor?.loading || false);
//   const error = useSelector((state) => state.vendor?.error || null);

//   useEffect(() => {
//     dispatch(fetchVendors());
//   }, [dispatch]);

//   const handleDeleteVendor = async (vendorId) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to recover this vendor!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       dispatch(deleteVendor(vendorId));
//       Swal.fire("Deleted!", "Vendor has been deleted.", "success");
//     }
//   };

//   const handleUpdateStatus = async (vendorId, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: `Are you sure you want to update the status to ${newStatus}?`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, update it!",
//     });

//     if (result.isConfirmed) {
//       dispatch(updateVendorStatus({ vendorId, status: newStatus }));
//       Swal.fire("Updated!", `Vendor status has been updated to ${newStatus}.`, "success");
//     }
//   };

//   // Memoize the vendors array for performance optimization
//   const memoizedVendors = useMemo(() => vendors, [vendors]);

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
//               <Suspense fallback={<div>Loading Search...</div>}>
//                 <VendorSearch />
//               </Suspense>
//               <Link
//                 to="/addvenderform"
//                 className="btn bg-green-400 text-white flex items-center gap-2 justify-center"
//               >
//                 <AiOutlinePlus /> Add New Vendor
//               </Link>
//             </div>
//             <Suspense fallback={<div>Loading Table...</div>}>
//               <VendorTable
//                 vendors={memoizedVendors}
//                 onDeleteVendor={handleDeleteVendor}
//                 onUpdateStatus={handleUpdateStatus}
//                 setImageLoading={setImageLoading}
//                 imageLoading={imageLoading}
//               />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorList;




import React, { useEffect, useState, Suspense, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVendors, deleteVendor, updateVendorStatus } from "../../../components/redux/vendorSlice";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlinePlus } from 'react-icons/ai';

// Lazy load VendorSearch and VendorTable components
import VendorSearch from "./VendorList/VendorSearch";
import VendorTable from "./VendorList/VendorTable";

const VendorList = () => {
  const dispatch = useDispatch();
  const [imageLoading, setImageLoading] = useState({});
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

  const memoizedVendors = useMemo(() => vendors, [vendors]);

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
            <div className="d-flex flex-col sm:flex-row justify-between mb-3">
              <Suspense fallback={<div>Loading Search...</div>}>
                <VendorSearch />
              </Suspense>
              <Link
                to="/addvenderform"
                className="btn bg-green-400 text-white flex items-center gap-2 justify-center mt-3 sm:mt-0"
              >
                <AiOutlinePlus /> Add New Vendor
              </Link>
            </div>
            <Suspense fallback={<div>Loading Table...</div>}>
              <VendorTable
                vendors={memoizedVendors}
                onDeleteVendor={handleDeleteVendor}
                onUpdateStatus={handleUpdateStatus}
                setImageLoading={setImageLoading}
                imageLoading={imageLoading}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
