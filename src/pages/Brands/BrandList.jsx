// import React, { useState, useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";
// import { CiImport } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";

// const BrandList = () => {
//   const [brands, setBrands] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredBrands, setFilteredBrands] = useState([]);

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     filterBrands();
//   }, [brands, searchQuery]);

//   const fetchBrands = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/brands");
//       if (response.ok) {
//         const data = await response.json();
//         setBrands(data.docs); // Assuming 'data.docs' contains the array of brands
//       } else {
//         console.error("Failed to fetch brands:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error fetching brands:", error);
//     }
//   };

//   const filterBrands = () => {
//     if (searchQuery.trim() === "") {
//       setFilteredBrands(brands);
//     } else {
//       setFilteredBrands(
//         brands.filter((brand) =>
//           brand.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const deleteBrand = (id) => {
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this brand!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then(async (willDelete) => {
//       if (willDelete) {
//         try {
//           const response = await fetch(`http://localhost:3000/api/brands/${id}`, {
//             method: "DELETE",
//           });
//           if (response.ok) {
//             swal("Poof! Your brand has been deleted!", {
//               icon: "success",
//             });
//             fetchBrands(); // Refresh brands list
//           } else {
//             swal("Oops! Something went wrong.", {
//               icon: "error",
//             });
//           }
//         } catch (error) {
//           console.error("Error deleting brand:", error);
//           swal("Oops! Something went wrong.", {
//             icon: "error",
//           });
//         }
//       } else {
//         swal("Your brand is safe!");
//       }
//     });
//   };

//   return (
//     <div className="row mt-3 bg-[#F9F9FB] px-5 py-5 w-[100%]">
//       <div className="col-md-12">
//         <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
//             alt=""
//             className="w-7 h-7"
//           />
//           <h1>BrandList</h1>
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//             {filteredBrands.length}
//           </span>
//         </div>
//         <div className="card">
//           <div className="d-flex justify-content-between align-items-center px-5 py-4">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="input-group input-group-custom input-group-merge border-green-400">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FiSearch />
//                   </div>
//                 </div>
//                 <input
//                   type="search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   className="form-control"
//                   placeholder="Search by Product Name"
//                 />
//                 <button
//                   type="submit"
//                   className="btn btn--success bg-[#01cd56] text-white border-[#01cd56]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>

//             <button
//               type="button"
//               className="flex gap-2 items-center justify-center border-green-500 border rounded px-3 py-2"
//             >
//               <CiImport />
//               Export
//               {/* <FaChevronDown /> */}
//             </button>
//           </div>
//           <div className="table-responsive">
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-green-400 text-white">
//                   <tr>
//                     <th className="px-4 py-2">SL</th>
//                     <th className="px-4 py-2">Brand Logo</th>
//                     <th className="px-4 py-2 text-center">Name</th>
//                     <th className="px-4 py-2 text-center">Total Product</th>
//                     <th className="px-4 py-2 text-center">Total Order</th>
//                     <th className="px-4 py-2 text-center">Status</th>
//                     <th className="px-4 py-2 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredBrands.map((brand, index) => (
//                     <tr key={brand._id} className="hover:bg-gray-100">
//                       <td className="p-10">{index + 1}</td>
//                       <td className="px-4 py-2">
//                         <a
//                           href="#"
//                           className="flex items-center gap-2"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             src={`http://localhost:3000/${brand.thumbnail}`}
//                             alt={brand.name}
//                             className="h-16 w-16 rounded-lg border"
//                           />
//                         </a>
//                       </td>
//                       <td className="px-4 py-2 text-center text-[.9rem]">
//                         {brand.name}
//                       </td>
//                       <td className="px-4 py-2 text-center">0</td>
//                       <td className="px-4 py-2 text-center">0</td>
                     
//                          <td className="text-center">
//                     <label className="switcher mx-auto">
//                       <input
//                         type="checkbox"
//                         className="switcher_input"
//                         checked={brand.status}
//                         // onChange={() => confirmUpdateStatus(brand._id)}
//                       />
//                       <span className="switcher_control" />
//                     </label>
//                   </td>
                
//                       <td className="px-4 py-2 text-center">
//                         <div className="flex justify-center gap-2">
//                           <Link
//                             to={`/brandupdate/${brand._id}`}
//                             type="button"
//                             className="btn btn-outline-primary btn-sm text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
//                           >
//                             <FiEdit />
//                           </Link>
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm text-pink-500 border-pink-500 hover:text-white"
//                             onClick={() => deleteBrand(brand._id)}
//                           >
//                             <FiTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* <div className="page-area">
//             <nav aria-label="Page navigation">
//               <ul className="pagination flex gap-2">
//                 <li className="page-item">
//                   <button className="page-link">Prev</button>
//                 </li>
//                 <li className="page-item active">
//                   <button className="page-link">1</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">2</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">3</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">Next</button>
//                 </li>
//               </ul>
//             </nav>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandList;




// import React, { useState, useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";
// import { CiImport } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import swal from "sweetalert";

// const BrandList = () => {
//   const [brands, setBrands] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredBrands, setFilteredBrands] = useState([]);

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     filterBrands();
//   }, [brands, searchQuery]);

//   const fetchBrands = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/brands/");
//       if (response.ok) {
//         const data = await response.json();
//         setBrands(data.docs); // Assuming 'data.docs' contains the array of brands
//       } else {
//         console.error("Failed to fetch brands:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error fetching brands:", error);
//     }
//   };

//   const filterBrands = () => {
//     if (searchQuery.trim() === "") {
//       setFilteredBrands(brands);
//     } else {
//       setFilteredBrands(
//         brands.filter((brand) =>
//           brand.name.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const deleteBrand = (id) => {
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this brand!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then(async (willDelete) => {
//       if (willDelete) {
//         try {
//           const response = await fetch(`http://localhost:3000/api/brands/${id}`, {
//             method: "DELETE",
//           });
//           if (response.ok) {
//             swal("Poof! Your brand has been deleted!", {
//               icon: "success",
//             });
//             fetchBrands(); // Refresh brands list
//           } else {
//             swal("Oops! Something went wrong.", {
//               icon: "error",
//             });
//           }
//         } catch (error) {
//           console.error("Error deleting brand:", error);
//           swal("Oops! Something went wrong.", {
//             icon: "error",
//           });
//         }
//       } else {
//         swal("Your brand is safe!");
//       }
//     });
//   };

//   const updateStatus = async (id, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
    
//     try {
//       const response = await fetch(`http://localhost:3000/api/brands/${id}/status`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (response.ok) {
//         swal("Success!", "Brand status updated successfully.", "success");
//         fetchBrands(); // Refresh brands list
//       } else {
//         swal("Oops! Something went wrong.", "Unable to update brand status.", "error");
//       }
//     } catch (error) {
//       console.error("Error updating brand status:", error);
//       swal("Oops! Something went wrong.", "Unable to update brand status.", "error");
//     }
//   };

//   return (
//     <div className="row mt-3 bg-[#F9F9FB] px-5 py-5 w-[100%]">
//       <div className="col-md-12">
//         <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
//             alt=""
//             className="w-7 h-7"
//           />
//           <h1>BrandList</h1>
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//             {filteredBrands.length}
//           </span>
//         </div>
//         <div className="card">
//           <div className="d-flex justify-content-between align-items-center px-5 py-4">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="input-group input-group-custom input-group-merge border-green-400">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FiSearch />
//                   </div>
//                 </div>
//                 <input
//                   type="search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   className="form-control"
//                   placeholder="Search by Product Name"
//                 />
//                 <button
//                   type="submit"
//                   className="btn btn--success bg-[#01cd56] text-white border-[#01cd56]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>

//             <button
//               type="button"
//               className="flex gap-2 items-center justify-center border-green-500 border rounded px-3 py-2"
//             >
//               <CiImport />
//               Export
//               {/* <FaChevronDown /> */}
//             </button>
//           </div>
//           <div className="table-responsive">
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-green-400 text-white">
//                   <tr>
//                     <th className="px-4 py-2">SL</th>
//                     <th className="px-4 py-2">Brand Logo</th>
//                     <th className="px-4 py-2 text-center">Name</th>
//                     <th className="px-4 py-2 text-center">Total Product</th>
//                     <th className="px-4 py-2 text-center">Total Order</th>
//                     <th className="px-4 py-2 text-center">Status</th>
//                     <th className="px-4 py-2 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredBrands.map((brand, index) => (
//                     <tr key={brand._id} className="hover:bg-gray-100">
//                       <td className="p-10">{index + 1}</td>
//                       <td className="px-4 py-2">
//                         <a
//                           href="#"
//                           className="flex items-center gap-2"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             src={`http://localhost:3000/${brand.thumbnail}`}
//                             alt={brand.name}
//                             className="h-16 w-16 rounded-lg border"
//                           />
//                         </a>
//                       </td>
//                       <td className="px-4 py-2 text-center text-[.9rem]">
//                         {brand.name}
//                       </td>
//                       <td className="px-4 py-2 text-center">0</td>
//                       <td className="px-4 py-2 text-center">0</td>
//                       <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={brand.status === "active"}
//                             onChange={() => updateStatus(brand._id)}
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <div className="flex justify-center gap-2">
//                           <Link
//                             to={`/brandupdate/${brand._id}`}
//                             type="button"
//                             className="btn btn-outline-primary btn-sm text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
//                           >
//                             <FiEdit />
//                           </Link>
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm text-pink-500 border-pink-500 hover:text-white"
//                             onClick={() => deleteBrand(brand._id)}
//                           >
//                             <FiTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* <div className="page-area">
//             <nav aria-label="Page navigation">
//               <ul className="pagination flex gap-2">
//                 <li className="page-item">
//                   <button className="page-link">Prev</button>
//                 </li>
//                 <li className="page-item active">
//                   <button className="page-link">1</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">2</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">3</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">Next</button>
//                 </li>
//               </ul>
//             </nav>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandList;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";
// import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";
// import { CiImport } from "react-icons/ci";
// import swal from "sweetalert";
// import {
//   fetchBrands,
//   updateBrandStatus,
//   deleteBrand,
// } from "../../components/redux/brandSlice"; // Adjust the import path as necessary

// const BrandList = () => {
//   const dispatch = useDispatch();
//   const { brands, loading, error } = useSelector((state) => state.brand);
//   const [searchQuery, setSearchQuery] = React.useState("");

//   useEffect(() => {
//     dispatch(fetchBrands());
//   }, [dispatch]);

//   const filteredBrands = searchQuery
//     ? brands.filter((brand) =>
//         brand.name.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : brands;

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleDeleteBrand = (id) => {
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this brand!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         dispatch(deleteBrand(id));
//       }
//     });
//   };

//   const handleUpdateStatus = (id, currentStatus) => {
//     const newStatus = currentStatus === "active" ? "inactive" : "active";
//     dispatch(updateBrandStatus({ brandId: id, status: newStatus }));
//   };
  

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="row mt-3 bg-[#F9F9FB] px-5 py-5 w-[100%]">
//       <div className="col-md-12">
//         <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
//             alt=""
//             className="w-7 h-7"
//           />
//           <h1>BrandList</h1>
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//             {filteredBrands.length}
//           </span>
//         </div>
//         <div className="card">
//           <div className="d-flex justify-content-between align-items-center px-5 py-4">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="input-group input-group-custom input-group-merge border-green-400">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FiSearch />
//                   </div>
//                 </div>
//                 <input
//                   type="search"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   className="form-control"
//                   placeholder="Search by Product Name"
//                 />
//                 <button
//                   type="submit"
//                   className="btn btn--success bg-[#01cd56] text-white border-[#01cd56]"
//                 >
//                   Search
//                 </button>
//               </div>
//             </form>

//             <button
//               type="button"
//               className="flex gap-2 items-center justify-center border-green-500 border rounded px-3 py-2"
//             >
//               <CiImport />
//               Export
//               {/* <FaChevronDown /> */}
//             </button>
//           </div>
//           <div className="table-responsive">
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-green-400 text-white">
//                   <tr>
//                     <th className="px-4 py-2">SL</th>
//                     <th className="px-4 py-2">Brand Logo</th>
//                     <th className="px-4 py-2 text-center">Name</th>
//                     <th className="px-4 py-2 text-center">Total Product</th>
//                     <th className="px-4 py-2 text-center">Total Order</th>
//                     <th className="px-4 py-2 text-center">Status</th>
//                     <th className="px-4 py-2 text-center">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredBrands.map((brand, index) => (
//                     <tr key={brand._id} className="hover:bg-gray-100">
//                       <td className="p-10">{index + 1}</td>
//                       <td className="px-4 py-2">
//                         <a
//                           href="#"
//                           className="flex items-center gap-2"
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <img
//                             src={`http://localhost:3000/${brand.thumbnail}`}
//                             alt={brand.name}
//                             className="h-16 w-16 rounded-lg border"
//                           />
//                         </a>
//                       </td>
//                       <td className="px-4 py-2 text-center text-[.9rem]">
//                         {brand.name}
//                       </td>
//                       <td className="px-4 py-2 text-center">0</td>
//                       <td className="px-4 py-2 text-center">0</td>
//                       <td className="text-center">
//                         <label className="switcher mx-auto">
//                           <input
//                             type="checkbox"
//                             className="switcher_input"
//                             checked={brand.status === "active"}
//                             onChange={() => handleUpdateStatus(brand._id, brand.status)}
//                           />
//                           <span className="switcher_control" />
//                         </label>
//                       </td>
//                       <td className="px-4 py-2 text-center">
//                         <div className="flex justify-center gap-2">
//                           <Link
//                             to={`/brandupdate/${brand._id}`}
//                             type="button"
//                             className="btn btn-outline-primary btn-sm text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
//                           >
//                             <FiEdit />
//                           </Link>
//                           <button
//                             type="button"
//                             className="btn btn-outline-danger btn-sm text-pink-500 border-pink-500 hover:text-white"
//                             onClick={() => handleDeleteBrand(brand._id)}
//                           >
//                             <FiTrash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* <div className="page-area">
//             <nav aria-label="Page navigation">
//               <ul className="pagination flex gap-2">
//                 <li className="page-item">
//                   <button className="page-link">Prev</button>
//                 </li>
//                 <li className="page-item active">
//                   <button className="page-link">1</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">2</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">3</button>
//                 </li>
//                 <li className="page-item">
//                   <button className="page-link">Next</button>
//                 </li>
//               </ul>
//             </nav>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandList;



import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";
import { CiImport } from "react-icons/ci";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchBrands,
  updateBrandStatus,
  deleteBrand,
} from "../../components/redux/brandSlice"; // Adjust the import path as necessary

const BrandList = () => {
  const dispatch = useDispatch();
  const { brands, loading, error } = useSelector((state) => state.brand);
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const filteredBrands = searchQuery
    ? brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : brands;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteBrand = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this brand!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id)).then(() => {
          toast.success("Brand deleted successfully!");
        });
      }
    });
  };

// Log in handleUpdateStatus
const handleUpdateStatus = (id, currentStatus) => {
  const newStatus = currentStatus === "active" ? "inactive" : "active";
  console.log(`Dispatching status update for ${id} to ${newStatus}`);
  dispatch(updateBrandStatus({ brandId: id, status: newStatus }))
    .then(() => {
      console.log(`Status update succeeded for ${id}`);
      toast.success(`Brand status updated to ${newStatus}!`);
    })
    .catch(() => {
      toast.error("Failed to update brand status.");
    });
};

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="row mt-3 bg-[#F9F9FB] px-5 py-5 w-[100%]">
      <div className="col-md-12">
        <ToastContainer />
        <div className="font-bold pb-4 text-[1.3rem] flex gap-2 items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
            alt=""
            className="w-7 h-7"
          />
          <h1>BrandList</h1>
          <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
            {filteredBrands.length}
          </span>
        </div>
        <div className="card">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group input-group-custom input-group-merge border-green-400">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FiSearch />
                  </div>
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="form-control"
                  placeholder="Search by Product Name"
                />
                <button
                  type="submit"
                  className="btn btn--success bg-[#01cd56] text-white border-[#01cd56]"
                >
                  Search
                </button>
              </div>
            </form>

            <button
              type="button"
              className="flex gap-2 items-center justify-center border-green-500 border rounded px-3 py-2"
            >
              <CiImport />
              Export
            </button>
          </div>
          <div className="table-responsive">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-green-400 text-white">
                  <tr>
                    <th className="px-4 py-2">SL</th>
                    <th className="px-4 py-2">Brand Logo</th>
                    <th className="px-4 py-2 text-center">Name</th>
                    <th className="px-4 py-2 text-center">Total Product</th>
                    <th className="px-4 py-2 text-center">Total Order</th>
                    <th className="px-4 py-2 text-center">Status</th>
                    <th className="px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBrands.map((brand, index) => (
                    <tr key={brand._id} className="hover:bg-gray-100">
                      <td className="p-10">{index + 1}</td>
                      <td className="px-4 py-2">
                        <a
                          href="#"
                          className="flex items-center gap-2"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            src={`http://localhost:3000/${brand.logo}`}
                            alt={brand.name}
                            className="h-16 w-16 rounded-lg border"
                          />
                        </a>
                      </td>
                      <td className="px-4 py-2 text-center text-[.9rem]">
                        {brand.name}
                      </td>
                      <td className="px-4 py-2 text-center">0</td>
                      <td className="px-4 py-2 text-center">0</td>
                      <td className="text-center">
                        <label className="switcher mx-auto">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={brand.status === "active"}
                            onChange={() =>
                              handleUpdateStatus(brand._id, brand.statuss)
                            }
                          />
                          <span className="switcher_control" />
                        </label>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center gap-2">
                          <Link
                            to={`/brandupdate/${brand._id}`}
                            type="button"
                            className="btn btn-outline-primary btn-sm text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
                          >
                            <FiEdit />
                          </Link>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm text-pink-500 border-pink-500 hover:text-white"
                            onClick={() => handleDeleteBrand(brand._id)}
                          >
                            <FiTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="page-area">
            <nav aria-label="Page navigation">
              <ul className="pagination flex gap-2">
                <li className="page-item">
                  <button className="page-link">Prev</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BrandList;
