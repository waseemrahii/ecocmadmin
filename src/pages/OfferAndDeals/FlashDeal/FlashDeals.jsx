// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaSearch, FaEye } from "react-icons/fa";
// import { MdFlashOn } from "react-icons/md";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import "./FlashDeals.css";
// import ApiUrl from "../../../ApiUrl";

// const FlashDeals = () => {
//   const [activeLang, setActiveLang] = useState("en");
//   const [errorMessage, setErrorMessage] = useState('');
//   const [formData, setFormData] = useState({
//     title: "",
//     startDate: "",
//     endDate: "",
//     image: null,
//   });
//   const [flashDeals, setFlashDeals] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchFlashDeals();
//   }, []);

//   const fetchFlashDeals = async () => {
//     try {
//       const token = localStorage.getItem("authToken"); // Retrieve token from local storage
//       const response = await axios.get(`${ApiUrl}flash-deals/`, {
//         headers: {
//           Authorization: `Bearer ${token}` // Add token to request headers
//         }
//       });
//       setFlashDeals(response.data.doc);
//     } catch (error) {
//       console.error("Error fetching flash deals:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Check if end date is after start date
//     if (new Date(formData.startDate) > new Date(formData.endDate)) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Date Range',
//         text: 'End Date must be after Start Date!',
//       });
//       return;
//     }

//     // Validate image file size (example: max 2MB)
//     if (formData.image && formData.image.size > 2 * 1024 * 1024) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid File Size',
//         text: 'Image file size must be less than 2MB!',
//       });
//       return;
//     }

//     if (!formData.image) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Image Required',
//         text: 'Please upload an image!',
//       });
//       return;
//     }

//     const formDataToSubmit = new FormData();
//     formDataToSubmit.append("startDate", formData.startDate);
//     formDataToSubmit.append("endDate", formData.endDate);
//     formDataToSubmit.append("image", formData.image);
//     formDataToSubmit.append("title", formData.title);

//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.post(`${ApiUrl}flash-deals/`, formDataToSubmit, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}` // Add token to request headers
//         },
//       });

//       setFlashDeals(prevDeals => [...prevDeals, response.data]); // Update state with new deal
//       setFormData({
//         title: "",
//         startDate: "",
//         endDate: "",
//         image: null,
//       });

//       Swal.fire({
//         icon: 'success',
//         title: 'Flash Deal Added',
//         text: 'New flash deal has been successfully added!',
//       });
//     } catch (error) {
//       console.error("Error submitting flash deal:", error);
//       setErrorMessage(`Error adding flash deal: ${error.response?.data?.message || error.message}`);

//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: error.response?.data?.message || 'Failed to add new flash deal!',
//       });
//     }
//   };

//   const handleSwitcherChange = async (id) => {
//     const dealToUpdate = flashDeals.find((deal) => deal._id === id);
//     try {
//       const token = localStorage.getItem("authToken");
//       const response = await axios.patch(`${ApiUrl}flash-deals/${id}/update-publish`, {
//         publish: !dealToUpdate.publish,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}` // Add token to request headers
//         }
//       });
//       setFlashDeals((prevDeals) =>
//         prevDeals.map((deal) =>
//           deal._id === id ? { ...deal, publish: response.data.publish } : deal
//         )
//       );
//       Swal.fire({
//         icon: 'success',
//         title: 'Status Updated',
//         text: 'Flash deal status has been successfully updated!',
//       });
//     } catch (error) {
//       console.error("Error updating flash deal:", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to update flash deal status!',
//       });
//     }
//   };

//   const confirmDeleteDeal = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this flash deal?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleDeleteDeal(id);
//       }
//     });
//   };

//   const handleDeleteDeal = async (id) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.delete(`${ApiUrl}flash-deals/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}` // Add token to request headers
//         }
//       });
//       setFlashDeals(flashDeals.filter((deal) => deal._id !== id));
//       Swal.fire({
//         icon: 'success',
//         title: 'Deleted!',
//         text: 'Flash deal has been deleted.',
//       });
//     } catch (error) {
//       console.error("Error deleting flash deal:", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Failed to delete flash deal!',
//       });
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const filteredFlashDeals = flashDeals.filter(deal =>
//     deal.title.toLowerCase().includes(searchQuery)
//   );

//   return (
//     <div className="content container-fluid snipcss-SrYZc">
//       <div className="d-flex justify-content-between gap-2 mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <MdFlashOn size={24} /> Flash deals
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body">
//               <form
//                 onSubmit={handleFormSubmit}
//                 className="text-start"
//                 encType="multipart/form-data"
//               >
//                 <div className="row">
//                   <div className="col-lg-6">
//                     <div className="form-group">
//                       <label
//                         htmlFor="title"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Title
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         className="form-control"
//                         placeholder="Enter title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label
//                         htmlFor="start-date"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Start Date
//                       </label>
//                       <input
//                         type="date"
//                         name="startDate"
//                         className="form-control"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label
//                         htmlFor="end-date"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         End Date
//                       </label>
//                       <input
//                         type="date"
//                         name="endDate"
//                         className="form-control"
//                         value={formData.endDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-6">
//                     <div className="form-group">
//                       <label
//                         htmlFor="image"
//                         className="title-color font-weight-medium text-capitalize"
//                       >
//                         Upload image
//                       </label>
//                       <input
//                         type="file"
//                         name="image"
//                         className="form-control-file"
//                         accept=".jpg, .png, .jpeg"
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                     {formData.image && (
//                       <div className="form-group">
//                         <img
//                           width="70%"
//                           height="100"
//                           src={URL.createObjectURL(formData.image)}
//                           alt="Uploaded"
//                           className="img-fluid"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {errorMessage && <div className="error-message">{errorMessage}</div>}

//                 <div className="d-flex justify-content-end gap-3">
//                   <button type="reset" className="btn btn-secondary px-4">
//                     Reset
//                   </button>
//                   <button
//                     type="submit"
//                     className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                   >
//                     Submit
//                   </button>

//                 </div>
      
      
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-header d-flex flex-wrap gap-3 justify-content-between align-items-center">
//           <h4 className="mb-0">Flash Deal List<span className="badge badge-soft-dark radius-50 fz-12 ml-1">{flashDeals.total || 0}</span></h4>
//           <div className="d-flex justify-content-between flex-wrap gap-3">
//             <form className="mr-2">
//               <div className="input-group input-group-merge input-group-flush">
//                 <input
//                   id="datatableSearch"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   className="form-control"
//                   onChange={handleSearch}
//                 />
//                 <div className="input-group-append">
//                   <div className="input-group-text">
//                     <FaSearch />
//                   </div>
//                 </div>
//               </div>
//             </form>
//             <div>
//               <select
//                 name="languages"
//                 className="form-control"
//                 onChange={(e) => handleLangChange(e.target.value)}
//               >
//                 <option value="en">English</option>
//                 <option value="es">Spanish</option>
//                 <option value="fr">French</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="table-responsive datatable-custom">
//           <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
//             <thead className="thead-light">
//               <tr>
//                 <th>#</th>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Start Date</th>
//                 <th>End Date</th>
//                 <th className="text-center">Status</th>
//                 <th>Publish</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {flashDeals.map((deal, index) => (
//                 <tr key={deal._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                      <img
//                        src={`http://localhost:3000/${deal.image}`}
//                        alt={deal.title}
//                        style={{ width: "50px", height: "50px" }}
//                        className="img-fluid"
//                      />
//                    </td>
//                   <td>{deal.title}</td>
//                   <td>{formatDate(deal.startDate)}</td>
//                   <td>{formatDate(deal.endDate)}</td>
//                   <td  className="flex justify-center items-center"> 
//                   <span   className={`btn ${deal.status === 'active' ? 'text-green-400 ' : 'text-danger'}`}>
//                      {deal.status === 'active' ? 'Active' : 'Inactive'}
//                     </span>
//                     <label className="switcher mx-auto">
//                       <input
//                         type="checkbox"
//                         className="switcher_input"
//                         checked={deal.status}
//                         onClick={() => confirmUpdateStatus(deal._id)}
//                       />
//                       <span className="switcher_control" />
//                     </label>
//                   </td>
//                 {/* /////////////////////////////  publish */}
//                 <td className="text-center">
//                     <label className="switcher mx-auto">
//                       <input
//                         type="checkbox"
//                         className="switcher_input"
//                         checked={deal.publish}
//                         onChange={() => confirmUpdatePublish(deal._id)}
//                       />
//                       <span className="switcher_control" />
//                     </label>
//                   </td>
                

// <td>
//                         <div className="d-flex justify-content-center gap-2">
//                         <Link to={`add-flashproduct/${deal._id}`} className="h-30 d-flex gap-2 align-items-center btn btn-soft-info btn-sm border-info">
//                              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="svg replaced-svg">
//                               <path d="M9 3.9375H5.0625V0H3.9375V3.9375H0V5.0625H3.9375V9H5.0625V5.0625H9V3.9375Z" fill="#00A3AD" />
//                                    </svg> Add product
//                                                      </Link>
//                           <button


//                             className="btn btn-outline-danger hover:text-white btn-sm border-green-400"
//                             onClick={() => confirmDeleteDeal(deal._id)}
//                             title="Delete"
//                           >
//                             <FaTrash />
//                           </button>
//                         </div>
//                       </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {flashDeals.length === 0 && (
//             <div className="text-center p-4">
//               <TbTimeDurationOff size={40} color="gray" />
//               <h6 className="mt-3 mb-0">No Flash Deals Found</h6>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlashDeals;


// ////





import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSearch, FaEye } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./FlashDeals.css";
import ApiUrl from "../../../ApiUrl";

const FlashDeals = () => {
  const [activeLang, setActiveLang] = useState("en");
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    image: null,
  });
  const [flashDeals, setFlashDeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchFlashDeals();
  }, []);

  const fetchFlashDeals = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(`${ApiUrl}flash-deals/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlashDeals(response.data.doc);
    } catch (error) {
      console.error("Error fetching flash deals:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate date range
    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date Range',
        text: 'End Date must be after Start Date!',
      });
      return;
    }

    // Validate image file size (max 2MB)
    if (formData.image && formData.image.size > 2 * 1024 * 1024) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid File Size',
        text: 'Image file size must be less than 2MB!',
      });
      return;
    }

    if (!formData.image) {
      Swal.fire({
        icon: 'error',
        title: 'Image Required',
        text: 'Please upload an image!',
      });
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("startDate", formData.startDate);
    formDataToSubmit.append("endDate", formData.endDate);
    formDataToSubmit.append("image", formData.image);
    formDataToSubmit.append("title", formData.title);

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(`${ApiUrl}flash-deals/`, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setFlashDeals((prevDeals) => [...prevDeals, response.data]);
      setFormData({ title: "", startDate: "", endDate: "", image: null });
      Swal.fire({
        icon: 'success',
        title: 'Flash Deal Added',
        text: 'New flash deal has been successfully added!',
      });
    } catch (error) {
      console.error("Error submitting flash deal:", error);
      setErrorMessage(`Error adding flash deal: ${error.response?.data?.message || error.message}`);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response?.data?.message || 'Failed to add new flash deal!',
      });
    }
  };

  const handleSwitcherChange = async (id) => {
    const dealToUpdate = flashDeals.find((deal) => deal._id === id);
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.patch(`${ApiUrl}flash-deals/${id}/update-publish`, {
        publish: !dealToUpdate.publish,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlashDeals((prevDeals) =>
        prevDeals.map((deal) =>
          deal._id === id ? { ...deal, publish: response.data.publish } : deal
        )
      );
      Swal.fire({
        icon: 'success',
        title: 'Status Updated',
        text: 'Flash deal status has been successfully updated!',
      });
    } catch (error) {
      console.error("Error updating flash deal:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to update flash deal status!',
      });
    }
  };

  const confirmDeleteDeal = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this flash deal?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteDeal(id);
      }
    });
  };

  const handleDeleteDeal = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`${ApiUrl}flash-deals/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlashDeals(flashDeals.filter((deal) => deal._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Flash deal has been deleted.',
      });
    } catch (error) {
      console.error("Error deleting flash deal:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to delete flash deal!',
      });
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const filteredFlashDeals = flashDeals.filter(deal => 
    (deal.title ? deal.title.toLowerCase() : "").includes(searchQuery)
  );
  
  // const filteredFlashDeals = flashDeals.filter(deal =>
  //   deal.title.toLowerCase().includes(searchQuery)
  // );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(activeLang, options);
  };

  return (
    <div className="content container-fluid snipcss-SrYZc">
      <div className="d-flex justify-content-between gap-2 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <MdFlashOn size={24} /> Flash deals
        </h2>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleFormSubmit} className="text-start" encType="multipart/form-data">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="title" className="title-color font-weight-medium text-capitalize">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="start-date" className="title-color font-weight-medium text-capitalize">Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        className="form-control"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="end-date" className="title-color font-weight-medium text-capitalize">End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        className="form-control"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="image" className="title-color font-weight-medium text-capitalize">Upload image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control-file"
                        accept=".jpg, .png, .jpeg"
                        onChange={handleInputChange}
                      />
                    </div>
                    {formData.image && (
                      <div className="form-group">
                        <img
                          width="70%"
                          height="100"
                          src={URL.createObjectURL(formData.image)}
                          alt="Uploaded"
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Add Flash Deal</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Flash Deals List</h4>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="form-control mt-2"
              />
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFlashDeals.length > 0 ? (
                      filteredFlashDeals.map((deal) => (
                        <tr key={deal._id}>
                          <td>
                            <img src={deal.image} alt={deal.title} className="img-fluid" width="50" height="50" />
                          </td>
                          <td>{deal.title}</td>
                          <td>{formatDate(deal.startDate)}</td>
                          <td>{formatDate(deal.endDate)}</td>
                          <td>
                            <label className="switch">
                              <input
                                type="checkbox"
                                checked={deal.publish}
                                onChange={() => handleSwitcherChange(deal._id)}
                              />
                              <span className="slider round"></span>
                            </label>
                          </td>
                          <td>
                            <Link to={`/flash-deals/${deal._id}`} className="btn btn-info">
                              <FaEye />
                            </Link>
                            <button onClick={() => confirmDeleteDeal(deal._id)} className="btn btn-danger">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">No Flash Deals found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
