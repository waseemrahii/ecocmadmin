
// import React, { useState, useEffect } from "react";
// import "./AttributeSetup.css";
// import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify'; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

// const AttributeSetup = () => {
//   const [attributes, setAttributes] = useState([]);
//   const [activeTab, setActiveTab] = useState('en');
//   const [searchValue, setSearchValue] = useState('');
//   const [newAttribute, setNewAttribute] = useState({
//     name: ""
//   });

//   // Fetch attributes data from API
//   useEffect(() => {
//     const fetchAttributes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/attributes/');
//         setAttributes(response.data.doc);
//       } catch (error) {
//         toast.error("Error fetching attributes data.");
//       }
//     };

//     fetchAttributes();
//   }, []);

//   // Handle tab click
//   const handleTabClick = (lang) => {
//     setActiveTab(lang);
//   };

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   // Handle input changes for new attribute
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewAttribute(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/api/attributes/', newAttribute);
//       toast.success("Attribute added successfully!");
//       // Optionally reset the form and fetch the updated attributes
//       setNewAttribute({
//         name: ''
//       });
//       const response = await axios.get('http://localhost:3000/api/attributes/');
//       setAttributes(response.data.doc);
//     } catch (error) {
//       toast.error("Error adding attribute.");
//     }
//   };

//   // Handle attribute deletion
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/attributes/${id}`);
//       toast.success("Attribute deleted successfully!");
//       // Fetch the updated attributes
//       const response = await axios.get('http://localhost:3000/api/attributes/');
//       setAttributes(response.data.doc);
//     } catch (error) {
//       toast.error("Error deleting attribute.");
//     }
//   };

//   // Filter attributes based on search value
//   const filteredAttributes = attributes.filter(attribute =>
//     attribute.name
//   );

//   return (
//     <>
//       <div className="content container-fluid p-15 snipcss-oDPVp">
//         <div className="mb-3">
//           <h2 className="h1 mb-0 d-flex gap-2">
//             <img
//               src="/attribute.png"
//               alt="Attribute Icon"
//             />
//             Attribute Setup
//           </h2>
//         </div>
//         <div className="row">
//           <div className="col-md-12 mb-3">
//             <div className="card">
//               <div className="card-body">
//                 <form onSubmit={handleSubmit} className="text-start">
//                   <ul className="nav nav-tabs w-fit-content mb-4">
//                     <li className="nav-item text-capitalize">
//                       <a
//                         className={`nav-link form-system-language-tab cursor-pointer ${
//                           activeTab === "en" ? "active" : ""
//                         }`}
//                         onClick={() => handleTabClick("en")}
//                       >
//                         English
//                       </a>
//                     </li>
//                   </ul>

//                   {activeTab === 'en' && (
//                     <div className="form-group form-system-language-form">
//                       <label className="title-color" htmlFor={`type-en`}>
//                         Attribute Name <span className="text-danger">*</span> (EN)
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         id={`type-en`}
//                         placeholder="Enter Attribute Name"
//                         value={newAttribute.name}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   )}

//                   <div className="d-flex flex-wrap gap-2 justify-content-end">
//                     <button
//                       type="submit"
//                       className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="card">
//               <div className="px-3 py-4">
//                 <div className="row align-items-center">
//                   <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
//                     <h5 className="mb-0 d-flex align-items-center gap-2">
//                       Attribute list{" "}
//                       <span className="badge badge-soft-dark radius-50 fz-12">
//                         {filteredAttributes.length}
//                       </span>
//                     </h5>
//                   </div>
//                   <div className="col-sm-8 col-md-6 col-lg-4">
//                     <form method="GET">
//                       <div className="input-group input-group-custom input-group-merge border-green-600">
//                         <div className="input-group-prepend">
//                           <div className="input-group-text">
//                             <FaSearch />
//                           </div>
//                         </div>
//                         <input
//                           type="search"
//                           name="searchValue"
//                           className="form-control border-green-400 outline-none"
//                           placeholder="Search by Attribute Name"
//                           aria-label="Search attributes"
//                           value={searchValue}
//                           onChange={handleSearchChange}
//                         />
//                         <button
//                           type="button"
//                           className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                         >
//                           Search
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               <div className="text-start">
//                 <div className="table-responsive">
//                   <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
//                     <thead className="thead-light thead-50 text-capitalize">
//                       <tr>
//                         <th>SL</th>
//                         <th className="text-center">Attribute Name</th>
//                         <th className="text-center">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredAttributes.map((attribute, index) => (
//                         <tr key={attribute._id}>
//                           <td>{index + 1}</td>
//                           <td className="text-center">{attribute.name}</td>
//                           <td className="text-center">
//                             <button
                              
//                               className="btn btn-primary"
//                             >
//                               <FaEye />
//                             </button>
//                             <button
//                               type="button"
//                               className="btn btn-danger ms-2 border-red-500 text-red-500"
//                               onClick={() => handleDelete(attribute._id)}
//                             >
//                               <FaTrash className="text-red-500" />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default AttributeSetup;


import React, { useState, useEffect } from "react";
import "./AttributeSetup.css";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiUrl from "../../ApiUrl";

const AttributeSetup = () => {
  const [attributes, setAttributes] = useState([]);
  const [activeTab, setActiveTab] = useState('en');
  const [searchValue, setSearchValue] = useState('');
  const [newAttribute, setNewAttribute] = useState({ name: "" });
  const [editingAttribute, setEditingAttribute] = useState(null);

  // Fetch attributes data from API
  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axios.get(`${ApiUrl}attributes/`);
        setAttributes(response.data.doc);
      } catch (error) {
        toast.error("Error fetching attributes data.");
      }
    };
    fetchAttributes();
  }, []);

  // Handle tab click
  const handleTabClick = (lang) => setActiveTab(lang);

  // Handle search input change
  const handleSearchChange = (event) => setSearchValue(event.target.value);

  // Handle input changes for new attribute
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAttribute(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission (add or update)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingAttribute) {
        // Update attribute
        await axios.put(`${ApiUrl}attributes/${editingAttribute._id}`, newAttribute);
        toast.success("Attribute updated successfully!");
      } else {
        // Add new attribute
        await axios.post(`${ApiUrl}attributes/`, newAttribute);
        toast.success("Attribute added successfully!");
      }
      // Reset form and refetch attributes
      setNewAttribute({ name: '' });
      setEditingAttribute(null);
      const response = await axios.get(`${ApiUrl}attributes/`);
      setAttributes(response.data.doc);
    } catch (error) {
      toast.error("Error saving attribute.");
    }
  };

  // Handle attribute deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${ApiUrl}attributes/${id}`);
      toast.success("Attribute deleted successfully!");
      const response = await axios.get(`${ApiUrl}attributes/`);
      setAttributes(response.data.doc);
    } catch (error) {
      toast.error("Error deleting attribute.");
    }
  };

  // Handle attribute edit (populate form)
  const handleEdit = (attribute) => {
    setNewAttribute({ name: attribute.name });
    setEditingAttribute(attribute);

    // Scroll to the form smoothly
  document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
  };

  // Filter attributes based on search value
  const filteredAttributes = attributes.filter(attribute =>
    attribute.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="content container-fluid p-15 snipcss-oDPVp">
        <div className="mb-3">
          <h2 className="h1 mb-0 d-flex gap-2">
            <img src="/attribute.png" alt="Attribute Icon" />
            Attribute Setup
          </h2>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="text-start">
                  <ul className="nav nav-tabs w-fit-content mb-4">
                    <li className="nav-item text-capitalize">
                      <a
                        className={`nav-link form-system-language-tab cursor-pointer ${
                          activeTab === "en" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("en")}
                      >
                        English
                      </a>
                    </li>
                  </ul>

                  {activeTab === 'en' && (
                    <div className="form-group form-system-language-form">
                      <label className="title-color" htmlFor={`type-en`}>
                        Attribute Name <span className="text-danger">*</span> (EN)
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id={`type-en`}
                        placeholder="Enter Attribute Name"
                        value={newAttribute.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  )}

                  <div className="d-flex flex-wrap gap-2 justify-content-end">
                    <button
                      type="submit"
                      className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                    >
                      {editingAttribute ? 'Update' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="px-3 py-4">
                <div className="row align-items-center">
                  <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
                    <h5 className="mb-0 d-flex align-items-center gap-2">
                      Attribute list{" "}
                      <span className="badge badge-soft-dark radius-50 fz-12">
                        {filteredAttributes.length}
                      </span>
                    </h5>
                  </div>
                  <div className="col-sm-8 col-md-6 col-lg-4">
                    <form method="GET">
                      <div className="input-group input-group-custom input-group-merge border-green-600">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <FaSearch />
                          </div>
                        </div>
                        <input
                          type="search"
                          name="searchValue"
                          className="form-control border-green-400 outline-none"
                          placeholder="Search by Attribute Name"
                          aria-label="Search attributes"
                          value={searchValue}
                          onChange={handleSearchChange}
                        />
                        <button
                          type="button"
                          className="btn bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-start">
                <div className="table-responsive">
                  <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                    <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                        <th>SL</th>
                        <th className="text-center">Attribute Name</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAttributes.map((attribute, index) => (
                        <tr key={attribute._id}>
                          <td>{index + 1}</td>
                          <td className="text-center">{attribute.name}</td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => handleEdit(attribute)}
                            >
                              <FaEye />
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger ms-2 border-red-500 text-red-500"
                              onClick={() => handleDelete(attribute._id)}
                            >
                              <FaTrash className="text-red-500" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AttributeSetup;
