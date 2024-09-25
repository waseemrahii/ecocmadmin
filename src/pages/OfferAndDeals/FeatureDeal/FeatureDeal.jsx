
import React, { useEffect, useState } from "react";
import { FaSearch, FaEdit, FaPlus, FaTrash, FaPen } from "react-icons/fa";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
// import "./FeatureDeal.css"; // Assume this file contains your custom styles
import { Link, useNavigate } from "react-router-dom";

const FeatureDeal = () => {
  const [deals, setDeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: ""
  });
  useEffect(() => {
    fetchDeals();
  }, [searchQuery]);
  
  const fetchDeals = () => {
    const query = searchQuery ? `?title=${encodeURIComponent(searchQuery)}` : '';
    fetch(`http://localhost:3000/api/feature-deals${query}`)
      .then(response => response.json())
      .then(data => setDeals(data.docs))
      .catch(error => console.error("Error fetching data:", error));
  };
  const navigate = useNavigate();


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name.includes("Date") ? new Date(value).toISOString().split('T')[0] : value
    }));
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/feature-deals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newDeal => {
        setDeals(prevDeals => [...prevDeals, newDeal]);
        setFormData({
          title: '',
          startDate: '',
          endDate: ''
        });
        toast.success("Deal added successfully!");
        fetchDeals();
      })
      .catch(error => {
        console.error("Error adding deal:", error);
        toast.error("Failed to add deal.");
      });
  };

  const toggleStatus = (dealId, currentStatus) => {
    fetch(`http://localhost:3000/api/feature-deals/${dealId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: currentStatus === "active" ? "inactive" : "active",
      }),
    })
      .then(response => response.json())
      .then(() => {
        setDeals(prevDeals =>
          prevDeals.map(deal =>
            deal._id === dealId
              ? { ...deal, status: currentStatus === "active" ? "inactive" : "active" }
              : deal
          )
        );
        toast.info("Deal status updated.");
      })
      .catch(error => {
        console.error("Error updating status:", error);
        toast.error("Failed to update status.");
      });
  };

  const handleDelete = (dealId) => {
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
        // console.log("deal id ========", dealId)
        fetch(`http://localhost:3000/api/feature-deals/${dealId}`, {
          method: "DELETE",
        })
          .then(response => response.json())
          .then(() => {
            setDeals(prevDeals => prevDeals.filter(deal => deal._id !== dealId));
            toast.success("Deal deleted successfully!");
          })
          .catch(error => {
            console.error("Error deleting deal:", error);
            toast.error("Failed to delete deal.");
          });
      }
    });
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchDeals(); // Trigger the search with the current query
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div className="content container-fluid">
      <ToastContainer />
      <div className="d-flex justify-content-between gap-2 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/featured_deal.png"
            alt="Feature deal"
          />
          Feature deal
        </h2>
        <button
          className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
          data-toggle="modal"
          data-target="#prioritySetModal"
        >
          <span
            data-toggle="tooltip"
            title="Now you can set priority of products."
          >
            Product priority Setup
          </span>
        </button>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={handleFormSubmit}
                className="text-start onsubmit-disable-action-button"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                  autoComplete="off"
                />
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link active"
                      href="javascript:void(0);"
                      id="en-link"
                    >
                      english(EN)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="sa-link"
                    >
                      Arabic(SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="bd-link"
                    >
                      Bangla(BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a
                      className="nav-link lang-link"
                      href="javascript:void(0);"
                      id="in-link"
                    >
                      Hindi(IN)
                    </a>
                  </li>
                </ul>
                <div className="form-group">
                  <div className="row">
                    <input
                      type="text"
                      name="deal_type"
                      value="feature_deal"
                      className="d-none"
                    />
                    <div className="col-md-12 lang-form" id="en-form">
                      <label
                        htmlFor="title"
                        className="title-color text-capitalize"
                      >
                        Title (EN)
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        placeholder="Ex:LUX"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-3">
                      <label
                        htmlFor="start-Date"
                        className="title-color text-capitalize"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleFormChange}
                      
                        required
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <label
                        htmlFor="end-Date"
                        className="title-color text-capitalize"
                      >
                        End date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"                     
                        value={formData.endDate}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <button type="reset" id="reset" className="btn btn-secondary">
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-20">
        <div className="col-md-12">
          <div className="card">
            <div className="px-3 py-4">
              <div className="row align-items-center">
                <div className="col-sm-4 col-md-6 col-lg-8 mb-3 mb-lg-0">
                  <h5 className="d-flex gap-2 mb-0 align-items-center">
                    <img
                      width="20"
                      src="https://6valley.6amtech.com/public/assets/back-end/img/featured_deal.png"
                      alt="Feature deal"
                    />
                    Feature Deal List
                    <span className="badge badge-soft-dark radius-50 fz-12">
                      {deals.length}
                    </span>
                  </h5>
                </div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="input-group">
                      <input
                        id="datatableSearch_"
                        type="search"
                        className="form-control"
                        placeholder="Search by ID or title"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <div className="input-group-append">
                        <button
                          type="submit"
                          className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table
                id="datatable"
                style={{ textAlign: "left" }}
                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100"
              >
                <thead className="thead-light">
                  <tr>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deals.map((deal, index) => (
                    <tr key={deal._id}>
                      <td>{index + 1}</td>
                      <td>{deal.title}</td>
                      <td>{formatDate(deal.startDate)}</td>
                      <td>{formatDate(deal.endDate)}</td>
                      <td>
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={deal.status === "active"}
                            onChange={() => toggleStatus(deal._id, deal.status)}
                          />
                          <span className="switcher_control"></span>
                        </label>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                        <Link to={`add-product/${deal._id}`} className="h-30 d-flex gap-2 align-items-center btn btn-soft-info btn-sm border-info">
                             <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" className="svg replaced-svg">
                              <path d="M9 3.9375H5.0625V0H3.9375V3.9375H0V5.0625H3.9375V9H5.0625V5.0625H9V3.9375Z" fill="#00A3AD" />
                                   </svg> Add product
                                                     </Link>
                          <button


                            className="btn btn-outline-danger hover:text-white btn-sm border-green-400"
                            onClick={() => handleDelete(deal._id)}
                            title="Delete"
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
            {deals.length === 0 && (
              <div className="text-center p-4">
                <img
                  className="mb-3 w-160"
                  src="https://6valley.6amtech.com/public/assets/back-end/svg/illustrations/sorry.svg"
                  alt="Image Description"
                />
                <p className="mb-0">
                  No data to show
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDeal;




