


import React, { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import './BannerSetForm.css';

const BannerSetup = () => {
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState({
    searchValue: "",
  });

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = () => {
    fetch('http://localhost:3000/api/banner/')
      .then(response => response.json())
      .then(data => {
        setList(data.doc.map(item => ({
          id: item._id,
          name: item.bannerType,
          img: item.bannerImage,
          priority: item.priority,
          published: item.publish,
        })));
      })
      .catch(error => console.error('Error fetching banner data:', error));
  };

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Apply filtering logic
    const filteredBanners = list.filter((banner) => {
      return (
        (filters.searchValue === "" ||
          banner.name
            .toLowerCase()
            .includes(filters.searchValue.toLowerCase()))
      );
    });
    setList(filteredBanners);
  };

  const handleReset = () => {
    setFilters({
      searchValue: "",
    });
    fetchBanners();
  };

  const handleTogglePublish = (id, currentStatus) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${currentStatus ? "unpublish" : "publish"} this banner?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Update status on server
        fetch(`http://localhost:3000/api/banner/${id}/publish`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ publish: !currentStatus }), // Toggle publish status
        })
          .then(response => response.json())
          .then(data => {
            if (data.publish !== undefined) { // Check if 'publish' key is present in the response
              // Update status locally
              setList(prevList => prevList.map(banner =>
                banner.id === id ? { ...banner, published: data.publish } : banner
              ));
              Swal.fire(
                'Updated!',
                `Banner has been ${currentStatus ? 'unpublished' : 'published'}.`,
                'success'
              );
            } else {
              Swal.fire(
                'Error!',
                'There was an error updating the banner.',
                'error'
              );
            }
          })
          .catch(error => {
            console.error('Error updating banner:', error);
            Swal.fire(
              'Error!',
              'There was an error updating the banner.',
              'error'
            );
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this banner?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Send delete request to server
        fetch(`http://localhost:3000/api/banner/${id}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (response.ok) {
              // Remove the deleted banner from the list
              setList(prevList => prevList.filter(banner => banner.id !== id));
              Swal.fire(
                'Deleted!',
                'The banner has been deleted.',
                'success'
              );
            } else {
              Swal.fire(
                'Error!',
                'There was an error deleting the banner.',
                'error'
              );
            }
          })
          .catch(error => {
            console.error('Error deleting banner:', error);
            Swal.fire(
              'Error!',
              'There was an error deleting the banner.',
              'error'
            );
          });
      }
    });
  };

  return (
    <>
      <div className="bg-[#F9F9FB] px-5 py-5 w-[100%]">
        <div className="font-bold text-[1.3rem] bg-[#F9F9FB] flex gap-2 items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
            alt=""
            className="w-8 h-8"
          />
          <h1>
            Banner Setup{" "}
            <span className="text-xl font-weight-bold text-blue-500">
              (Default)
            </span>
          </h1>
        </div>
        <div className="row mt-8">
          <div className="col-md-12">
            <div className="card">
              <div className="d-flex justify-content-between align-items-center px-5">
                <div className="flex gap-3">
                  <h1 className="text-[1rem] font-bold">Banner Table</h1>
                  <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
                    {list.length}
                  </span>
                </div>
                <div>
                  <div className="px-3 py-4">
                    <div className="row align-items-center">
                      <div className="col-lg-12 d-flex justify-content-end gap-3 align-items-center">
                        <form onSubmit={handleSearchSubmit}>
                          <div className="flex justify-center gap-2 ">
                            <input
                              type="search"
                              name="searchValue"
                              className="form-control"
                              placeholder="Search by Banner Name"
                              value={filters.searchValue}
                              onChange={handleInputChange}
                            />
                            <button
                              type="submit"
                              className="btn btn--primary bg-[#0177CD] text-white "
                            >
                              Search
                            </button>
                          </div>
                        </form>
                       
                        <Link to='/addbannerform'
                          type="button"
                          className="flex gap-2 items-center bg-green-500 justify-center border-green-500 border text-white rounded px-3 py-2"
                        >
                          <IoMdAdd />
                          Add banner
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-blue-50 text-blue-900">
                      <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2 text-center">Banner Type</th>
                        <th className="px-4 py-2 text-center">Published</th>
                        <th className="px-4 py-2 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((banner, index) => (
                        <tr key={banner.id} className="hover:bg-gray-100">
                          <td className="p-10" key={index}>
                            {banner.id}
                          </td>
                          <td className="px-4 py-2">
                            <a href="#" className="flex items-center gap-2">
                              <img
                                src={`http://localhost:3000/${banner.img}`}
                                alt=""
                                className="h-5 w-20"
                              />
                            </a>
                          </td>
                          <td className="px-4 py-2 text-center text-[.9rem]">
                            {banner.name}
                          </td>
                          <td className="px-4 py-2 text-center " >
                            <label className="switcher snipcss-qKxnT">
                              <input
                                type="checkbox"
                                className="switcher_input toggle-switch-message"
                                name="status"
                                id={`banner-status${banner.id}`}
                                checked={banner.published}
                                readOnly
                                onClick={() => handleTogglePublish(banner.id, banner.published)}
                              />
                              <span className="switcher_control"></span>
                            </label>
                          </td>
                          <td className="px-4 py-2 text-center">
                            <div className="flex justify-center gap-2">
                              <Link 
                              to={`/editbannerform/${banner.id}`}
                                type="button"
                                className="btn bg-green-400 p-2 btn-sm text-white border-green-500"
                              >
                                <FaPen />
                              </Link>
                              <button
                                type="button"
                                className="btn btn-outline-danger p-2 btn-sm text-pink-500 border-pink-500"
                                onClick={() => handleDelete(banner.id)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSetup;


// import React, { useState, useEffect } from "react";
// import { FaPen } from "react-icons/fa";
// import { FiTrash } from "react-icons/fi";
// import { IoMdAdd } from "react-icons/io";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2"; // Import SweetAlert2
// import './BannerSetForm.css';

// const BannerSetup = () => {
//   const [list, setList] = useState([]);
//   const [filters, setFilters] = useState({
//     searchValue: "",
//   });

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const fetchBanners = () => {
//     fetch('http://localhost:3000/api/banner/')
//       .then(response => response.json())
//       .then(data => {
//         setList(data.map(item => ({
//           id: item._id,
//           name: item.bannerType,
//           img: item.bannerImage,
//           priority: item.priority,
//           published: item.publish,
//         })));
//       })
//       .catch(error => console.error('Error fetching banner data:', error));
//   };

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Apply filtering logic
//     const filteredBanners = list.filter((banner) => {
//       return (
//         (filters.searchValue === "" ||
//           banner.name
//             .toLowerCase()
//             .includes(filters.searchValue.toLowerCase()))
//       );
//     });
//     setList(filteredBanners);
//   };

//   const handleReset = () => {
//     setFilters({
//       searchValue: "",
//     });
//     fetchBanners();
//   };

//   const handleTogglePublish = (id, currentStatus) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${currentStatus ? "unpublish" : "publish"} this banner?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Update status on server
//         fetch(`http://localhost:3000/api/banner/${id}/publish`, {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ publish: !currentStatus }), // Toggle publish status
//         })
//           .then(response => response.json())
//           .then(data => {
//             if (data.publish !== undefined) { // Check if 'publish' key is present in the response
//               // Update status locally
//               setList(prevList => prevList.map(banner =>
//                 banner.id === id ? { ...banner, published: data.publish } : banner
//               ));
//               Swal.fire(
//                 'Updated!',
//                 `Banner has been ${currentStatus ? 'unpublished' : 'published'}.`,
//                 'success'
//               );
//             } else {
//               Swal.fire(
//                 'Error!',
//                 'There was an error updating the banner.',
//                 'error'
//               );
//             }
//           })
//           .catch(error => {
//             console.error('Error updating banner:', error);
//             Swal.fire(
//               'Error!',
//               'There was an error updating the banner.',
//               'error'
//             );
//           });
//       }
//     });
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "Do you want to delete this banner?",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Send delete request to server
//         fetch(`http://localhost:3000/api/banner/${id}`, {
//           method: 'DELETE',
//         })
//           .then(response => {
//             if (response.ok) {
//               // Remove the deleted banner from the list
//               setList(prevList => prevList.filter(banner => banner.id !== id));
//               Swal.fire(
//                 'Deleted!',
//                 'The banner has been deleted.',
//                 'success'
//               );
//             } else {
//               Swal.fire(
//                 'Error!',
//                 'There was an error deleting the banner.',
//                 'error'
//               );
//             }
//           })
//           .catch(error => {
//             console.error('Error deleting banner:', error);
//             Swal.fire(
//               'Error!',
//               'There was an error deleting the banner.',
//               'error'
//             );
//           });
//       }
//     });
//   };

//   return (
//     <>
//       <div className="bg-[#F9F9FB] px-5 py-5 w-[100%]">
//         <div className="font-bold text-[1.3rem] bg-[#F9F9FB] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/banner.png"
//             alt=""
//             className="w-8 h-8"
//           />
//           <h1>
//             Banner Setup{" "}
//             <span className="text-xl font-weight-bold text-blue-500">
//               (Default)
//             </span>
//           </h1>
//         </div>
//         <div className="row mt-8">
//           <div className="col-md-12">
//             <div className="card">
//               <div className="d-flex justify-content-between align-items-center px-5">
//                 <div className="flex gap-3">
//                   <h1 className="text-[1rem] font-bold">Banner Table</h1>
//                   <span className="badge badge-soft-dark radius-50 fz-14 ml-1">
//                     {list.length}
//                   </span>
//                 </div>
//                 <div>
//                   <div className="px-3 py-4">
//                     <div className="row align-items-center">
//                       <div className="col-lg-12 d-flex justify-content-end gap-3 align-items-center">
//                         <form onSubmit={handleSearchSubmit}>
//                           <div className="flex justify-center gap-2 ">
//                             <input
//                               type="search"
//                               name="searchValue"
//                               className="form-control"
//                               placeholder="Search by Banner Name"
//                               value={filters.searchValue}
//                               onChange={handleInputChange}
//                             />
//                             <button
//                               type="submit"
//                               className="btn btn--primary bg-[#0177CD] text-white "
//                             >
//                               Search
//                             </button>
//                           </div>
//                         </form>
                       
//                         <Link to='/addbannerform'
//                           type="button"
//                           className="flex gap-2 items-center bg-green-500 justify-center border-green-500 border text-white rounded px-3 py-2"
//                         >
//                           <IoMdAdd />
//                           Add banner
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="table-responsive">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                     <thead className="bg-blue-50 text-blue-900">
//                       <tr>
//                         <th className="px-4 py-2">ID</th>
//                         <th className="px-4 py-2">Image</th>
//                         <th className="px-4 py-2 text-center">Banner Type</th>
//                         <th className="px-4 py-2 text-center">Published</th>
//                         <th className="px-4 py-2 text-center">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {list.map((banner, index) => (
//                         <tr key={banner.id} className="hover:bg-gray-100">
//                           <td className="p-10" key={index}>
//                             {banner.id}
//                           </td>
//                           <td className="px-4 py-2">
//                             <a href="#" className="flex items-center gap-2">
//                               <img
//                                 src={`http://localhost:3000/${banner.img}`}
//                                 alt=""
//                                 className="h-5 w-20"
//                               />
//                             </a>
//                           </td>
//                           <td className="px-4 py-2 text-center text-[.9rem]">
//                             {banner.name}
//                           </td>
//                           <td className="px-4 py-2 text-center">
//                             <label className="switcher snipcss-qKxnT">
//                               <input
//                                 type="checkbox"
//                                 className="switcher_input toggle-switch-message"
//                                 name="status"
//                                 id={`banner-status${banner.id}`}
//                                 checked={banner.published}
//                                 onChange={() => handleTogglePublish(banner.id, banner.published)}
//                               />
//                               <span className="switcher_label"></span>
//                             </label>
//                           </td>
//                           <td className="px-4 py-2 text-center">
//                             <Link
//                               to={`/editbannerform/${banner.id}`}
//                               className="text-blue-500 mx-2"
//                             >
//                               <FaPen />
//                             </Link>
//                             <button
//                               className="text-red-500 mx-2"
//                               onClick={() => handleDelete(banner.id)}
//                             >
//                               <FiTrash />
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
//     </>
//   );
// };

// export default BannerSetup;
