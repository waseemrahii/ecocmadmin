// import React, { useState, useEffect } from 'react';
// import { FaDownload, FaEdit, FaEye, FaSearch, FaTrash } from 'react-icons/fa';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import ApiUrl from '../../ApiUrl';
// import './subcategories.css';

// const Sub_Sub_Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     mainCategory: '',
//     subCategory: '',
//     priority: '',
//   });
//   const [activeTab, setActiveTab] = useState('en'); // State to manage active language tab

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   useEffect(() => {
//     // Fetch categories from backend
//     axios.get(`${ApiUrl}categories/`)
//       .then(response => {
//         setCategories(response.data.doc);
//       })
//       .catch(error => {
//         console.error('Error fetching categories:', error);
//       });

//     // Fetch sub-sub-categories from backend
//     axios.get(`${ApiUrl}sub-sub-categories/`)
//       .then(response => {
//         setSubSubCategories(response.data.doc);
//       })
//       .catch(error => {
//         console.error('Error fetching sub-sub-categories:', error);
//       });
//   }, []);


//   useEffect(() => {
//     if (formData.mainCategory) {
//       axios.get(`${ApiUrl}sub-categories/main-category/${formData.mainCategory}`)
//         .then(response => {
//           setSubCategories(response.data.doc);
//           setFilteredSubCategories(response.data.doc); // Update this based on your needs
//         })
//         .catch(error => {
//           console.error('Error fetching sub-categories:', error);
//         });
//     } else {
//       setSubCategories([]);
//       setFilteredSubCategories([]);
//     }
//   }, [formData.mainCategory]);
  
//   // console.log('Main Category:', formData.mainCategory);
//   // console.log('Sub Categories:', subCategories);
//   // console.log('Filtered Sub Categories:', filteredSubCategories);
  
//   useEffect(() => {
//     if (formData.mainCategory && subCategories.length > 0) {
//       const filtered = subCategories.filter(subCategory => subCategory.mainCategory === formData.mainCategory);
//       setFilteredSubCategories(filtered);
//     } else {
//       setFilteredSubCategories([]);
//     }
//   }, [formData.mainCategory, subCategories]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("formdata=======",formData)
//     axios.post(`${ApiUrl}sub-sub-categories/`, formData)
//       .then(response => {
//         setSubSubCategories([...subSubCategories, response.data.docs.subSubCategories]);

//         // Clear form fields after submission
//         setFormData({
//           name: '',
//           mainCategory: '',
//           subCategory: '',
//           priority: '',
//         });

//         // Show success message
//         Swal.fire('Success!', 'Sub-sub-category created successfully.', 'success');
//       })
//       .catch(error => {
//         console.error('Error creating sub-sub-category:', error);
//         Swal.fire('Error!', 'Failed to create sub-sub-category.', 'error');
//       });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTabClick = (lang) => {
//     setActiveTab(lang);
//   };

//   const handleDelete = (subSubCategoryId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this sub-sub-category!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`${ApiUrl}sub-sub-categories/${subSubCategoryId}`)
//           .then(() => {
//             const updatedSubSubCategories = subSubCategories.filter((subSubCategory) => subSubCategory._id !== subSubCategoryId);
//             setSubSubCategories(updatedSubSubCategories);
//             Swal.fire('Deleted!', 'Your sub-sub-category has been deleted.', 'success');
//           })
//           .catch(error => {
//             console.error('Error deleting sub-sub-category:', error);
//             Swal.fire('Error!', 'Failed to delete sub-sub-category.', 'error');
//           });
//       }
//     });
//   };

// const paginate = (pageNumber) => {
//   setCurrentPage(pageNumber);
// };

// // Get current sub-sub-categories
// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = subSubCategories.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="content container-fluid snipcss-TxIci">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 d-flex gap-2">
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="Sub Sub Category Setup" />
//           Sub Sub Category Setup
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body text-start">
//               <form onSubmit={handleSubmit}>
//                 <ul className="nav nav-tabs w-fit-content mb-4">
//                   {['en', 'sa', 'bd', 'in'].map((lang) => (
//                     <li className="nav-item" key={lang}>
//                       <span
//                         className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
//                         onClick={() => handleTabClick(lang)}
//                       >
//                         {lang === 'en' ? 'English' : lang === 'sa' ? 'Arabic' : lang === 'bd' ? 'Bangla' : 'Hindi'}({lang.toUpperCase()})
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="row">
//                       <div className="col-md-12 col-lg-12">
//                         {['en', 'sa', 'bd', 'in'].map((lang) => (
//                           <div key={lang} className={`form-group form-system-language-form ${activeTab === lang ? '' : 'd-none'}`}>
//                             <label className="title-color" htmlFor={`subSubCategoryName-${lang}`}>
//                               Sub sub category name <span className="text-danger">*</span> ({lang.toUpperCase()})
//                             </label>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id={`subSubCategoryName-${lang}`} placeholder="New Sub Sub Category" />
//                             <input type="hidden" name="lang[]" value={lang} />
//                           </div>
//                         ))}
//                         <input name="position" value="1" className="d-none" />
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="mainCategory">
//                           Main Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="mainCategory" name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select main category</option>
//                           {categories.map((category) => (
//                             <option key={category._id} value={category.slug}>
//                               {category.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="subCategory">
//                           Sub Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="subCategory" name="subCategory" value={formData.subCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select sub category</option>
//                           {subCategories.map((subCategory) => (
//                             <option key={subCategory._id} value={subCategory._id}>
//                            {/* {  console.log("subcateogries=========",subCategory.name)} */}
//                               {subCategory.name}
//                             </option>
                            
//                           ))}
                          

//                         </select>
//                         {/* {subCategories.map((subCategory) => (
//                             <h1 key={subCategory._id} value={subCategory._id}>
//                            {  console.log("subcateogries=========",subCategory.name)}
//                               {subCategory.name}
//                             </h1>
                            
//                           ))} */}

//                            </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color flex" htmlFor="priority">
//                           Priority
//                         </label>
//                         <select className="form-control" name="priority" value={formData.priority} onChange={handleChange} id="priority" required>
//                           <option value="" disabled>Set Priority</option>
//                           {Array.from({ length: 11 }, (_, i) => (
//                             <option key={i} value={i}>
//                               {i}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="d-flex justify-content-end">
//                       <button type="submit" className="btn bg-green-400 text-white hover:bg-green-300 ">Submit</button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="card mt-4">
//             <div className="card-body">
//               <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-2 mb-3">
//                 <div>
//                   <h5 className="d-flex align-items-center text-capitalize gap-2 mb-0">
//                     <img src="/sub-category.png" alt="Sub Sub Category List" />
//                     Sub Sub Category Table
//                     <span className="badge badge-soft-dark radius-50 fz-12">{subSubCategories.length}</span>
//                   </h5>
//                 </div>
//                 <div className="d-flex flex-wrap justify-content-end">
//                   <form className="mr-3">
//                     <div className="input-group input-group-merge input-group-flush">
//                       <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
//                       <div className="input-group-append bg-green-400 px-2" >
//                         <div className="input-group-text text-white ">
//                           {/* <i className="tio-search" /> */}
//                           <FaSearch  />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                   <div id="datatableCounterInfo" className="mr-2 d-none">
//                     <div className="d-flex align-items-center">
//                       <span className="font-size-sm mr-3">
//                         <span id="datatableCounter">0</span>
//                         Selected
//                       </span>
//                       <button className="btn btn-sm btn-outline-danger">
//                         <i className="tio-delete-outlined" /> Delete
//                       </button>
//                     </div>
//                   </div>
//                   <div className="hs-unfold">
//                     <a className="js-hs-unfold-invoker btn btn-sm bg-green-400 text-white dropdown-toggle" href="#" data-hs-unfold-options='{"target": "#usersExportDropdown", "type": "css-animation"}'>
//                       {/* <i className="tio-download-to mr-1" /> */}
//                       <FaDownload />
//                        Export
//                     </a>
              
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive datatable-custom">
//                 <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
//                   <thead className="thead-light">
//                     <tr>
//                       <th style={{ width: 5 }}>
//                         <div className="custom-control custom-checkbox">
//                           <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
//                           <label className="custom-control-label" htmlFor="datatableCheckAll" />
//                         </div>
//                       </th>
//                       <th className="table-column-pl-0">SL</th>
//                       <th>Sub Sub Category</th>
//                       <th>Main Category</th>
//                       <th>Sub Category</th>
//                       <th>Priority</th>
//                       <th className="text-center">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {subSubCategories.filter(Boolean).map((subSubCategory, index) => (
//                       <tr key={subSubCategory._id}>
//                         <td className="table-column-pr-0">
//                           <div className="custom-control custom-checkbox">
//                             <input id={`datatableCheck-${index}`} type="checkbox" className="custom-control-input" />
//                             <label className="custom-control-label" htmlFor={`datatableCheck-${index}`} />
//                           </div>
//                         </td>
//                         <td className="table-column-pl-0">{index + 1}</td>
//                         <td>{subSubCategory.name}</td>
//                         {console.log("sucbcategories----------",subSubCategories)}
//                         <td>{subSubCategory.mainCategory?.name || 'N/A'}</td>
//                         <td>{subSubCategory.subCategory?.name || 'N/A'}</td>
//                         <td>{subSubCategory.priority}</td>
//                         <td className="text-center">
//                           <Link to={`/edit-sub-sub-category/${subSubCategory._id}`} className="btn btn-outline-info btn-sm mr-1">
//                           <button type="button" className="btn btn-sm bg-green-400 text-white hover:bg-green-600 "><FaEye /></button>
//                           </Link>
                         
//                           <button className="btn btn-sm border-red-400
//                            text-red-400 hover:bg-red-400
//                             hover:text-white " onClick={() => handleDelete(subSubCategory._id)}>
//                             <FaTrash />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               {/* <div className="page-area">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => paginate(currentPage - 1)}
//                     disabled={currentPage === 1}
//                   >
//                     Previous
//                   </button>
//                   <span>Page {currentPage}</span>
//                   <button
//                     className="btn btn-outline-primary"
//                     onClick={() => paginate(currentPage + 1)}
//                     disabled={indexOfLastItem >= subSubCategories.length}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div> */}
//               {!subSubCategories.length && <div className="text-center p-4">
//                 <img className="mb-3" src="/sorry.svg" alt="No Data" />
//                 <p className="mb-0">No data to show</p>
//               </div>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sub_Sub_Categories;





// import React, { useState, useEffect } from 'react';
// import { FaDownload, FaEdit, FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, fetchSubCategories, fetchSubSubCategories } from '../../components/redux/categorybrandSlice';
// import { selectCategories, selectSubCategories } from '../../components/redux/categorybrandSlice'; // Adjust import path if needed

// const Sub_Sub_Categories = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector(selectCategories);
//   const subCategories = useSelector(selectSubCategories);


//   const [filteredSubCategories, setFilteredSubCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     mainCategory: '',
//     subCategory: '',
//     priority: '',
//   });
//   const [activeTab, setActiveTab] = useState('en');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     if (formData.mainCategory) {
//       dispatch(fetchSubCategories(formData.mainCategory));
//     }
//   }, [formData.mainCategory, dispatch]);

//   useEffect(() => {
//     if (formData.mainCategory && formData.subCategory) {
//       dispatch(fetchSubSubCategories());
//     }
//   }, [formData.mainCategory, formData.subCategory, dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:3000/api/sub-sub-categories/', formData)
//       .then(response => {
//         Swal.fire('Success!', 'Sub-sub-category created successfully.', 'success');
//       })
//       .catch(error => {
//         console.error('Error creating sub-sub-category:', error);
//         Swal.fire('Error!', 'Failed to create sub-sub-category.', 'error');
//       });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTabClick = (lang) => {
//     setActiveTab(lang);
//   };

//   const handleDelete = (subSubCategoryId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this sub-sub-category!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:3000/api/sub-sub-categories/${subSubCategoryId}`)
//           .then(() => {
//             Swal.fire('Deleted!', 'Your sub-sub-category has been deleted.', 'success');
//           })
//           .catch(error => {
//             console.error('Error deleting sub-sub-category:', error);
//             Swal.fire('Error!', 'Failed to delete sub-sub-category.', 'error');
//           });
//       }
//     });
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get current sub-sub-categories
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = subSubCategories.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="content container-fluid snipcss-TxIci">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 d-flex gap-2">
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="Sub Sub Category Setup" />
//           Sub Sub Category Setup
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body text-start">
//               <form onSubmit={handleSubmit}>
//                 <ul className="nav nav-tabs w-fit-content mb-4">
//                   {['en', 'sa', 'bd', 'in'].map((lang) => (
//                     <li className="nav-item" key={lang}>
//                       <span
//                         className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
//                         onClick={() => handleTabClick(lang)}
//                       >
//                         {lang === 'en' ? 'English' : lang === 'sa' ? 'Arabic' : lang === 'bd' ? 'Bangla' : 'Hindi'}({lang.toUpperCase()})
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="row">
//                       <div className="col-md-12 col-lg-12">
//                         {['en', 'sa', 'bd', 'in'].map((lang) => (
//                           <div key={lang} className={`form-group form-system-language-form ${activeTab === lang ? '' : 'd-none'}`}>
//                             <label className="title-color" htmlFor={`subSubCategoryName-${lang}`}>
//                               Sub sub category name <span className="text-danger">*</span> ({lang.toUpperCase()})
//                             </label>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id={`subSubCategoryName-${lang}`} placeholder="New Sub Sub Category" />
//                             <input type="hidden" name="lang[]" value={lang} />
//                           </div>
//                         ))}
//                         <input name="position" value="1" className="d-none" />
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="mainCategory">
//                           Main Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="mainCategory" name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select main category</option>
//                           {categories.map((category) => (
//                             <option key={category._id} value={category.slug}>
//                               {category.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="subCategory">
//                           Sub Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="subCategory" name="subCategory" value={formData.subCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select sub category</option>
//                           {subCategories.map((subCategory) => (
//                             <option key={subCategory._id} value={subCategory._id}>
//                               {subCategory.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="priority">
//                           Priority <span className="text-danger">*</span>
//                         </label>
//                         <input type="number" name="priority" value={formData.priority} onChange={handleChange} className="form-control" id="priority" placeholder="Priority" required />
//                       </div>
//                       <div className="col-lg-12 text-right">
//                         <button type="submit" className="btn btn-primary">
//                           <FaDownload /> Save
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-lg-12">
//           <div className="card">
//             <div className="card-body text-start">
//               <div className="table-responsive">
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Image</th>
//                       <th>Name</th>
//                       <th>Main Category</th>
//                       <th>Sub Category</th>
//                       <th>Priority</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentItems.map((item) => (
//                       <tr key={item._id}>
//                         <td>
//                           <img src={item.image} alt={item.name} className="img-thumbnail" />
//                         </td>
//                         <td>{item.name}</td>
//                         <td>{item.mainCategoryName}</td>
//                         <td>{item.subCategoryName}</td>
//                         <td>{item.priority}</td>
//                         <td>
//                           <Link to={`/sub-sub-categories/edit/${item._id}`} className="btn btn-warning btn-sm">
//                             <FaEdit />
//                           </Link>
//                           <button onClick={() => handleDelete(item._id)} className="btn btn-danger btn-sm">
//                             <FaTrash />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <nav>
//                   <ul className="pagination">
//                     {[...Array(Math.ceil(subSubCategories.length / itemsPerPage))].map((_, i) => (
//                       <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
//                         <button onClick={() => paginate(i + 1)} className="page-link">
//                           {i + 1}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sub_Sub_Categories;



// import React, { useState, useEffect } from 'react';
// import { FaDownload, FaEdit, FaTrash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchCategories,
//   fetchSubCategories,
//   fetchSubSubCategories,
//   addSubSubCategory,
//   updateSubSubCategory,
//   deleteSubSubCategory,
// } from '../../components/redux/categorybrandSlice';
// import {
//   selectCategories,
//   selectSubCategories,
//   selectSubSubCategories,
// } from '../../components/redux/categorybrandSlice';

// const Sub_Sub_Categories = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector(selectCategories);
//   const subCategories = useSelector(selectSubCategories);
//   const subSubCategories = useSelector(selectSubSubCategories);

//   const [formData, setFormData] = useState({
//     name: '',
//     mainCategory: '',
//     subCategory: '',
//     priority: '',
//   });
//   const [activeTab, setActiveTab] = useState('en');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     dispatch(fetchCategories());
//     dispatch(fetchSubCategories());
//     dispatch(fetchSubSubCategories({})).finally(() => setLoading(false));
//   }, [dispatch]);

//   useEffect(() => {
//     if (formData.mainCategory) {
//       dispatch(fetchSubCategories(formData.mainCategory));
//     }
//   }, [formData.mainCategory, dispatch]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await dispatch(addSubSubCategory(formData));
//       Swal.fire('Success!', 'Sub-sub-category created successfully.', 'success');
//       setFormData({
//         name: '',
//         mainCategory: '',
//         subCategory: '',
//         priority: '',
//       });
//     } catch (error) {
//       console.error('Error creating sub-sub-category:', error);
//       Swal.fire('Error!', 'Failed to create sub-sub-category.', 'error');
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTabClick = (lang) => {
//     setActiveTab(lang);
//   };

//   const handleDelete = (subSubCategoryId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this sub-sub-category!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await dispatch(deleteSubSubCategory(subSubCategoryId));
//           Swal.fire('Deleted!', 'Your sub-sub-category has been deleted.', 'success');
//         } catch (error) {
//           console.error('Error deleting sub-sub-category:', error);
//           Swal.fire('Error!', 'Failed to delete sub-sub-category.', 'error');
//         }
//       }
//     });
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get current sub-sub-categories
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentSubSubCategories = subSubCategories.doc.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div className="content container-fluid snipcss-TxIci">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 d-flex gap-2">
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png" alt="Sub Sub Category Setup" />
//           Sub Sub Category Setup
//         </h2>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body text-start">
//               <form onSubmit={handleSubmit}>
//                 <ul className="nav nav-tabs w-fit-content mb-4">
//                   {['en', 'sa', 'bd', 'in'].map((lang) => (
//                     <li className="nav-item" key={lang}>
//                       <span
//                         className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
//                         onClick={() => handleTabClick(lang)}
//                       >
//                         {lang === 'en' ? 'English' : lang === 'sa' ? 'Arabic' : lang === 'bd' ? 'Bangla' : 'Hindi'}({lang.toUpperCase()})
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <div className="row">
//                       <div className="col-md-12 col-lg-12">
//                         {['en', 'sa', 'bd', 'in'].map((lang) => (
//                           <div key={lang} className={`form-group form-system-language-form ${activeTab === lang ? '' : 'd-none'}`}>
//                             <label className="title-color" htmlFor={`subSubCategoryName-${lang}`}>
//                               Sub sub category name <span className="text-danger">*</span> ({lang.toUpperCase()})
//                             </label>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id={`subSubCategoryName-${lang}`} placeholder="New Sub Sub Category" />
//                             <input type="hidden" name="lang[]" value={lang} />
//                           </div>
//                         ))}
//                         <input name="position" value="1" className="d-none" />
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="mainCategory">
//                           Main Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="mainCategory" name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select main category</option>
//                           {categories.map((category) => (
//                             <option key={category._id} value={category._id}>
//                               {category.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="subCategory">
//                           Sub Category <span className="text-danger">*</span>
//                         </label>
//                         <select id="subCategory" name="subCategory" value={formData.subCategory} onChange={handleChange} className="form-control" required>
//                           <option value="" disabled>Select sub category</option>
//                           {subCategories.map((subCategory) => (
//                             <option key={subCategory._id} value={subCategory._id}>
//                               {subCategory.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="form-group col-md-6 col-lg-4">
//                         <label className="title-color" htmlFor="priority">
//                           Priority
//                         </label>
//                         <input type="number" name="priority" value={formData.priority} onChange={handleChange} className="form-control" id="priority" placeholder="1" min="1" />
//                       </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                       <FaDownload className="me-2" />
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row mt-4">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-body text-start">
//               <table className="table table-bordered table-hover table-striped">
//                 <thead>
//                   <tr>
//                     <th>Sub Sub Category Name</th>
//                     <th>Main Category</th>
//                     <th>Sub Category</th>
//                     <th>Priority</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {subSubCategories.slice(indexOfFirstItem, indexOfLastItem).map((subSubCategory) => (
//                     <tr key={subSubCategory._id}>
//                       <td>{subSubCategory.name}</td>
//                       <td>{subSubCategory.mainCategoryName}</td>
//                       <td>{subSubCategory.subCategoryName}</td>
//                       <td>{subSubCategory.priority}</td>
//                       <td>
//                         <Link to={`/edit-sub-sub-category/${subSubCategory._id}`} className="btn btn-info btn-sm">
//                           <FaEdit />
//                         </Link>
//                         <button onClick={() => handleDelete(subSubCategory._id)} className="btn btn-danger btn-sm ms-2">
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {/* Pagination Controls */}
//               <nav>
//                 <ul className="pagination">
//                   {[...Array(Math.ceil(subSubCategories.length / itemsPerPage)).keys()].map((number) => (
//                     <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
//                       <button onClick={() => paginate(number + 1)} className="page-link">
//                         {number + 1}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sub_Sub_Categories;



////////////

import React, { useState, useEffect } from 'react';
import { FaDownload, FaEdit, FaSearch, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchSubCategories,
  fetchSubSubCategories,
  addSubSubCategory,
  updateSubSubCategory,
  deleteSubSubCategory,
} from '../../components/redux/categorybrandSlice';
import {
  selectCategories,
  selectSubCategories,
  selectSubSubCategories,
} from '../../components/redux/categorybrandSlice';

const Sub_Sub_Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const subCategories = useSelector(selectSubCategories);
  const subSubCategories = useSelector(selectSubSubCategories);

  const [formData, setFormData] = useState({
    name: '',
    mainCategory: '',
    subCategory: '',
    priority: '',
  });
  const [activeTab, setActiveTab] = useState('en');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
    dispatch(fetchSubSubCategories({})).finally(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (formData.mainCategory) {
      dispatch(fetchSubCategories(formData.mainCategory));
    }
  }, [formData.mainCategory, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addSubSubCategory(formData));
      Swal.fire('Success!', 'Sub-sub-category created successfully.', 'success');
      setFormData({
        name: '',
        mainCategory: '',
        subCategory: '',
        priority: '',
      });
    } catch (error) {
      console.error('Error creating sub-sub-category:', error);
      Swal.fire('Error!', 'Failed to create sub-sub-category.', 'error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTabClick = (lang) => {
    setActiveTab(lang);
  };

  const handleDelete = (subSubCategoryId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this sub-sub-category!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("subsub cateogry id ===", subSubCategoryId)
          await dispatch(deleteSubSubCategory(subSubCategoryId));
          Swal.fire('Deleted!', 'Your sub-sub-category has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting sub-sub-category:', error);
          Swal.fire('Error!', 'Failed to delete sub-sub-category.', 'error');
        }
      }
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current sub-sub-categories
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubSubCategories = subSubCategories.doc.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content container-fluid snipcss-TxIci">
      <div className="mb-3">
        <h2 className="h1 mb-0 d-flex gap-2">
          <img src="/brand-setup.png" alt="Sub Sub Category Setup" />
          Sub Sub Category Setup
        </h2>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-start">
              <form onSubmit={handleSubmit}>
                <ul className="nav nav-tabs w-fit-content mb-4">
                  {['en', 'sa', 'bd', 'in'].map((lang) => (
                    <li className="nav-item" key={lang}>
                      <span
                        className={`nav-link form-system-language-tab cursor-pointer ${activeTab === lang ? 'active' : ''}`}
                        onClick={() => handleTabClick(lang)}
                      >
                        {lang === 'en' ? 'English' : lang === 'sa' ? 'Arabic' : lang === 'bd' ? 'Bangla' : 'Hindi'}({lang.toUpperCase()})
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-12 col-lg-12">
                        {['en', 'sa', 'bd', 'in'].map((lang) => (
                          <div key={lang} className={`form-group form-system-language-form ${activeTab === lang ? '' : 'd-none'}`}>
                            <label className="title-color" htmlFor={`subSubCategoryName-${lang}`}>
                              Sub sub category name <span className="text-danger">*</span> ({lang.toUpperCase()})
                            </label>
                            <input type="text" name="name" value={formData._id} onChange={handleChange} className="form-control" id={`subSubCategoryName-${lang}`} placeholder="New Sub Sub Category" />
                            <input type="hidden" name="lang[]" value={lang} />
                          </div>
                        ))}
                        <input name="position" value="1" className="d-none" />
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color" htmlFor="mainCategory">
                          Main Category <span className="text-danger">*</span>
                        </label>
                        <select id="mainCategory" name="mainCategory" value={formData.mainCategory} onChange={handleChange} className="form-control" required>
                          <option value="" disabled>Select main category</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color" htmlFor="subCategory">
                          Sub Category <span className="text-danger">*</span>
                        </label>
                        <select id="subCategory" name="subCategory" value={formData.subCategory} onChange={handleChange} className="form-control" required>
                          <option value="" disabled>Select sub category</option>
                          {subCategories.map((subCategory) => (
                            <option key={subCategory._id} value={subCategory._id}>
                              {subCategory.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-4">
                        <label className="title-color" htmlFor="priority">
                          Priority
                        </label>
                        <input type="number" name="priority" value={formData.priority} onChange={handleChange} className="form-control" id="priority" placeholder="1" min="1" />
                      </div>
                    </div>
                    <div className="form-group col-md-12 col-lg-4 justify-end flex">
                    <button type="submit" className="btn bg-green-400  text-white hover:bg-green-500 hover:text-white">
                      
                      Submit
                    </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 p-6">
          <div className="card">
          <div className="d-flex  p-6 flex-wrap justify-content-between align-items-center border-bottom pb-2 mb-3">
                <div>
                  <h5 className="d-flex align-items-center text-capitalize gap-2 mb-0">
                    {/* <img src="/sub-category.png" alt="Sub Sub Category List" /> */}
                    Sub Sub Category Table
                    <span className="badge badge-soft-dark radius-50 fz-12">{subSubCategories.length}</span>
                  </h5>
                </div>
                <div className="d-flex flex-wrap justify-content-end">
                  <form className="mr-3">
                    <div className="input-group input-group-merge input-group-flush">
                      <input type="search" className="form-control"
                       placeholder="Search" aria-label="Search" />
                      <div className="input-group-append bg-green-400 px-2" >
                        <div className="input-group-text text-white ">
                          {/* <i className="tio-search" /> */}
                          <FaSearch />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="datatableCounterInfo" className="mr-2 d-none">
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        <span id="datatableCounter">0</span>
                        Selected
                      </span>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="tio-delete-outlined" /> Delete
                      </button>
                    </div>
                  </div>
                  <div className="hs-unfold">
                    <a className="js-hs-unfold-invoker btn btn-sm bg-green-400 text-white dropdown-toggle" href="#" data-hs-unfold-options='{"target": "#usersExportDropdown", "type": "css-animation"}'>
                      {/* <i className="tio-download-to mr-1" /> */}
                      <FaDownload />
                       Export
                    </a>
              
                  </div>
                </div>
              </div>
            <div className="card-body text-start">
              <table className="table table-bordered table-hover table-striped">
                <thead>
                  <tr>
                    <th>Sub Sub Category Name</th>
                    <th>Main Category</th>
                    <th>Sub Category</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                   {currentSubSubCategories.map((subSubCategory) => (
   

                         <tr key={subSubCategory._id}>
                        {/* <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input id={`datatableCheck-${index}`} type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor={`datatableCheck-${index}`} />
                          </div>
                        </td> */}
                        {/* <td className="table-column-pl-0">{index + 1}</td> */}
                        <td>{subSubCategory.name}</td>
                        {/* {console.log("sucbcategories----------",subSubCategories)} */}
                        <td>{subSubCategory.mainCategory?.name || 'N/A'}</td>
                        <td>{subSubCategory.subCategory?.name || 'N/A'}</td>
                        <td>{subSubCategory.priority}</td>
                        <td className="text-center">
                          {/* <Link to={`/edit-sub-sub-category/${subSubCategory._id}`} className="btn btn-outline-info btn-sm mr-1">
                          <button type="button" className="btn btn-sm bg-green-400 text-white hover:bg-green-600 "><FaEye /></button>
                          </Link>
                          */}
                          <button onClick={() => handleDelete(subSubCategory._id)} className="btn btn-danger btn-sm ms-2">

                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination Controls */}
                  <nav>
                 <ul className="pagination">
                   {Array.from(
                     { length: Math.ceil(subSubCategories.doc.length / itemsPerPage) },
                     (_, i) => (
                       <li
                         key={i + 1}
                        className={`page-item ${
                           currentPage === i + 1 ? 'active' : ''
                         }`}
                       >
                         <button
                           className="page-link"
                           onClick={() => paginate(i + 1)}
                         >
                           {i + 1}
                         </button>
                      </li>
                     )
                   )}
                 </ul>
               </nav> *

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub_Sub_Categories;


