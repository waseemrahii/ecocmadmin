
import React, { useState, useEffect } from "react";
import { FaEye, FaDownload, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, updateOrderStatus, deleteOrder } from '../../components/redux/orderSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const OrderList = () => {
  const dispatch = useDispatch();
  const { orders = [], loading, error } = useSelector((state) => state.vendorOrder || {});
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchOrder());
  }, [dispatch]);

  const handleUpdateStatus = (orderId, status) => {
    dispatch(updateOrderStatus({ orderId, status }));
    toast.success("Order status updated successfully!");
  };

  const handleDeleteOrder = (orderId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteOrder(orderId));
        toast.success("Order deleted successfully!");
      }
    });
  };

  // Pagination Logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalOrders = orders.length;

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Export Functionality
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      ["Order ID,Date,Customer Name,Store,Amount,Status"].concat(
        currentOrders.map(order => [
          order._id,
          new Date(order.createdAt).toLocaleDateString(),
          order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : 'Unknown Customer',
          order.vendor ? order.vendor.shopName : 'Unknown Store',
          order.totalAmount,
          order.orderStatus
        ].join(","))
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="content container-fluid">
      <div>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <h2 className="h1 mb-0 flex">
            <img
              src="/all-orders.png"
              className="mb-1 mr-1"
              alt="Orders"
            />
            <span className="page-header-title">All Orders</span>
          </h2>
          <span className="badge badge-soft-dark radius-50 fz-14">
            {orders.length}
          </span>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <div className="px-3 py-4 light-bg">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <h5 className="mb-0 text-capitalize font-bold d-flex gap-2 mr-auto">
                  Order List
                  <span className="badge badge-soft-dark radius-50 fz-12 ml-1">
                    {orders.length}
                  </span>
                </h5>
                <div>
                  <button
                    type="button"
                    className="btn px-4 py-2 justify-center align-items-center bg-[#A1CB46] text-white hover:bg-[#7e9f37] text-nowrap btn-block flex gap-2"
                    onClick={handleExport}
                 style={{color:"white"}}
                >
                    <FaDownload className="text-white"/> Export
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Store</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((order) => (
                    <tr key={order._id}>
                <td className="text-truncate" style={{ maxWidth: '150px' }}>
  {order._id.substring(0, 6)} {/* Display first 6 characters of order ID */}
</td>
    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>{order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : 'Unknown Customer'}</td>
                      <td>{order.vendors.length > 0 ? order.vendors[0].shopName : 'Unknown Store'}</td>
                      <td>{order.totalAmount}</td>
                      <td>
                        {(() => {
                          switch (order.orderStatus) {
                            case "pending":
                              return <span className="badge bg-green-600 text-white">Pending</span>;
                            case "confirmed":
                              return <span className="badge bg-blue-300 text-white">Confirmed</span>;
                            case "packaging":
                              return <span className="badge bg-yellow-300 text-white">Packaging</span>;
                            case "out_for_delivery":
                              return <span className="badge bg-orange-300 text-white">Out for Delivery</span>;
                            case "delivered":
                              return <span className="badge bg-green-500 text-white">Delivered</span>;
                            case "failed_to_deliver":
                              return <span className="badge bg-red-500 text-white">Failed to Deliver</span>;
                            case "returned":
                              return <span className="badge bg-gray-500 text-white">Returned</span>;
                            case "canceled":
                              return <span className="badge bg-red-300 text-white">Canceled</span>;
                            default:
                              return <span className="badge bg-gray-400 text-white">Unknown</span>;
                          }
                        })()}
                      </td>
                      <td>
                        <Link
                          to={`/orderdetail/${order._id}`}
                          className="btn bg-green-300 text-white btn-sm"
                        >
                          <FaEye size={18} />
                        </Link>
                        <button
                          className="btn bg-red-300 text-white btn-sm ml-2"
                          onClick={() => handleDeleteOrder(order._id)}
                        >
                          <FaTrashAlt size={18} />
                        </button> 
                      </td>
                    </tr>
                  ))}
                  {currentOrders.length === 0 && (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <nav>
              <ul className="pagination justify-content-center">
                {[...Array(Math.ceil(totalOrders / ordersPerPage))].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
