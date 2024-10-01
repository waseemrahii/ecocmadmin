// import React, { useEffect, useState } from "react";
// import { FaSearch, FaDownload, FaEye, FaTrash } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCustomers } from '../../../../components/redux/customerSlice'; // Import your customer slice
// import Swal from 'sweetalert2'; // Assuming SweetAlert2 for confirmation dialog
// import * as XLSX from 'xlsx'; // For exporting customer data as Excel

// const CustomerList = () => {
//   const dispatch = useDispatch();
//   const { customers, status, error } = useSelector((state) => state.customers);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch customer data when the component mounts
//   useEffect(() => {
//     dispatch(fetchCustomers());
//   }, [dispatch]);

//   // Filter customers based on search query
//   const filteredCustomers = customers.filter(
//     (customer) =>
//       customer.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       customer.phoneNumber.includes(searchQuery)
//   );

//   // Handle export to CSV
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(customers);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");
//     XLSX.writeFile(workbook, "CustomerList.xlsx");
//   };

//   // Handle status update (block/unblock)
//   const handleStatusUpdate = (customerId, newStatus) => {
//     // Implement API call to update customer status here
//     Swal.fire({
//       title: `Are you sure you want to ${newStatus === 'active' ? 'unblock' : 'block'} this customer?`,
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Update the status in the backend here
//         console.log(`Updating status for ${customerId} to ${newStatus}`);
//       }
//     });
//   };

//   // Handle customer deletion
//   const handleDelete = (customerId) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "This action cannot be undone!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Implement the delete logic here
//         console.log(`Deleting customer ${customerId}`);
//         // Example API call can be added here
//       }
//     });
//   };

//   return (
//     <div className="content container-fluid snipcss-yBZjF">
//       <div className="mb-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             width="20"
//             src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
//             alt="Customer List"
//           />
//           Customer list
//           <span className="badge badge-soft-dark radius-50">{customers.length}</span>
//         </h2>
//       </div>
//       <div className="card">
//         <div className="px-3 py-4">
//           <div className="row gy-2 align-items-center">
//             <h3 className="col-sm-8 col-md-6 col-lg-4">Customer Table</h3>
//             <div className="col-sm-2 col-md-6 col-lg-4">
//               <div className="input-group input-group-merge input-group-custom">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">
//                     <FaSearch />
//                   </div>
//                 </div>
//                 <input
//                   type="search"
//                   className="form-control"
//                   placeholder="Search by Name, Email, or Phone"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="col-sm-4 col-md-6 col-lg-4 d-flex justify-content-end">
//               <button
//                 type="button"
//                 className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex gap-1"
//                 onClick={handleExport}
//               >
//                 <FaDownload /> Export
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="table-responsive datatable-custom">
//           <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
//             <thead className="thead-light text-capitalize">
//               <tr>
//                 <th>SL</th>
//                 <th>Customer Name</th>
//                 <th>Contact Info</th>
//                 <th>Total Orders</th>
//                 <th className="text-center">Block / Unblock</th>
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCustomers.map((customer, index) => (
//                 <tr key={customer._id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <a
//                       href={`/admin/customer/view/${customer._id}`}
//                       className="title-color hover-c1 d-flex align-items-center gap-10"
//                     >
//                       <img
//                         src={customer.image || "https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"}
//                         className="avatar rounded-circle"
//                         alt=""
//                         width="40"
//                       />
//                       {customer.firstName} {customer.lastName}
//                     </a>
//                   </td>
//                   <td>
//                     <div className="mb-1">
//                       <strong>
//                         <a className="title-color hover-c1" href={`mailto:${customer.email}`}>
//                           {customer.email}
//                         </a>
//                       </strong>
//                     </div>
//                     <a className="title-color hover-c1" href={`tel:${customer.phoneNumber}`}>
//                       {customer.phoneNumber}
//                     </a>
//                   </td>
//                   <td>
//                     <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
//                       {customer.totalOrders || 0}
//                     </label>
//                   </td>
//                   <td className="text-center">
//                     <label className="switcher mx-auto">
//                       <input
//                         type="checkbox"
//                         className="switcher_input"
//                         checked={customer.status === 'active'}
//                         onChange={() => handleStatusUpdate(customer._id, customer.status === 'active' ? 'inactive' : 'active')}
//                       />
//                       <span className="switcher_control"></span>
//                     </label>
//                   </td>
//                   <td className="text-center">
//                     <div className="d-flex justify-content-center gap-2">
//                       <a
//                         title="View"
//                         className="btn btn-outline-info btn-sm square-btn"
//                         href={`/admin/customer/view/${customer._id}`}
//                       >
//                         <FaEye />
//                       </a>
//                       <button
//                         title="Delete"
//                         className="btn btn-outline-danger btn-sm delete square-btn"
//                         onClick={() => handleDelete(customer._id)}
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerList;



import React, { useEffect, useState, useMemo } from "react";
import { FaSearch, FaDownload, FaEye, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers, deleteCustomer, updateCustomerStatus } from '../../../../components/redux/customerSlice'; // Import deleteCustomer action
import Swal from 'sweetalert2'; // Assuming SweetAlert2 for confirmation dialog
import * as XLSX from 'xlsx'; // For exporting customer data as Excel

const CustomerList = React.memo(() => {
  const dispatch = useDispatch();
  const { customers, status, error } = useSelector((state) => state.customers);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch customer data when the component mounts
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const firstName = customer.firstName ? customer.firstName.toLowerCase() : '';
      const email = customer.email ? customer.email.toLowerCase() : '';
      const phoneNumber = customer.phoneNumber ? customer.phoneNumber : '';
      return (
        firstName.includes(searchQuery.toLowerCase()) ||
        email.includes(searchQuery.toLowerCase()) ||
        phoneNumber.includes(searchQuery)
      );
    });
  }, [customers, searchQuery]);
  
  // Handle export to CSV
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(customers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Customers");
    XLSX.writeFile(workbook, "CustomerList.xlsx");
  };

  // Handle status update (block/unblock)
  const handleStatusUpdate = (customerId, newStatus) => {
    Swal.fire({
      title: `Are you sure you want to ${newStatus === 'active' ? 'unblock' : 'block'} this customer?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateCustomerStatus({ id: customerId, status: newStatus }));
      }
    });
  };

  // Handle customer deletion
  const handleDelete = (customerId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCustomer(customerId)); // Dispatch the delete action
      }
    });
  };

  return (
    <div className="content container-fluid">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
            alt="Customer List"
          />
          Customer list
          <span className="badge badge-soft-dark radius-50">{customers.length}</span>
        </h2>
      </div>
      <div className="card">
        <div className="px-3 py-4">
          <div className="row gy-2 align-items-center">
            <h3 className="col-sm-8 col-md-6 col-lg-4">Customer Table</h3>
            <div className="col-sm-2 col-md-6 col-lg-4">
              <div className="input-group input-group-merge input-group-custom">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <FaSearch />
                  </div>
                </div>
                <input
                  type="search"
                  className="form-control outline-none"
                  placeholder="Search by Name, Email, or Phone"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-4 d-flex justify-content-end">
              <button
                type="button"
                className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex gap-1"
                onClick={handleExport}
              >
                <FaDownload /> Export
              </button>
            </div>
          </div>
        </div>
        <div className="table-responsive datatable-custom">
          <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
            <thead className="thead-light text-capitalize">
              <tr>
                <th>SL</th>
                <th>Customer Name</th>
                <th>Contact Info</th>
                <th>Total Orders</th>
                <th className="text-center">Block / Unblock</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={customer._id}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={`/admin/customer/view/${customer._id}`}
                      className="title-color hover-c1 d-flex align-items-center gap-10"
                    >
                      <img
                        src={customer.image || "https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"}
                        className="avatar rounded-circle"
                        alt=""
                        width="40"
                      />
                      {customer.firstName} {customer.lastName}
                    </a>
                  </td>
                  <td>
                    <div className="mb-1">
                      <strong>
                        <a className="title-color hover-c1" href={`mailto:${customer.email}`}>
                          {customer.email}
                        </a>
                      </strong>
                    </div>
                    <a className="title-color hover-c1" href={`tel:${customer.phoneNumber}`}>
                      {customer.phoneNumber}
                    </a>
                  </td>
                  <td>
                    <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
                      {customer.totalOrders || 0}
                    </label>
                  </td>
                  <td className="text-center">
                    <label className="switcher mx-auto">
                      <input
                        type="checkbox"
                        className="switcher_input"
                        checked={customer.status === 'active'}
                        onChange={() => handleStatusUpdate(customer._id, customer.status === 'active' ? 'inactive' : 'active')}
                      />
                      <span className="switcher_control"></span>
                    </label>
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        title="View"
                        className="btn btn-outline-info btn-sm square-btn"
                        href={`/admin/customer/view/${customer._id}`}
                      >
                        <FaEye />
                      </a>
                      <button
                        title="Delete"
                        className="btn btn-outline-danger btn-sm delete square-btn"
                        onClick={() => handleDelete(customer._id)}
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
      </div>
    </div>
  );
});

export default CustomerList;
