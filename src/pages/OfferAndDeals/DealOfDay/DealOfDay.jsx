

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  AiOutlineSearch,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineCodepen,
} from "react-icons/ai";
import { FaEye, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const DealOfTheDay = () => {
  const [deals, setDeals] = useState([]);
  const [deal, setDeal] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchDeal = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/deal-of-day/");
    
      setDeal(response.data);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };

  const fetchDeals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products/");
      const formattedDeals = response.data.docs.products.map((deal) => ({
        id: deal._id,
        title: deal.name,
        productInfo: deal.description,
        category: deal.category.name,
        brand: deal.brand.name,
        thumbnail: deal.thumbnail,
      }));
      setDeals(formattedDeals);
    } catch (error) {
      console.error("Error fetching deals:", error);
    }
  };

  useEffect(() => {
    fetchDeal();
    fetchDeals();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the status of this deal?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(`http://localhost:3000/api/deal-of-day/${id}/status`, {
            status: newStatus,
          });
          const updatedDeal = response.data.dealOfTheDay;

          setDeal((prevDeals) =>
            prevDeals.map((deal) =>
              deal._id === id ? { ...deal, status: updatedDeal.status } : deal
            )
          );
          Swal.fire({
            title: "Updated!",
            text: "Deal status has been updated.",
            icon: "success",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK",
          });
        } catch (error) {
          console.error("Error updating deal status:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to update deal status.",
            icon: "error",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!title || !selectedProduct) {
  //     alert("Please fill in all fields");
  //     return;
  //   }
  //   const data = {
  //     title,
  //     productId: selectedProduct.id,
  //   };
  //   try {
  //     console.log("data--------------", data)
  //     const response = await axios.post("http://localhost:3000/api/deal-of-day/",
        
  //       {
  //        data
  //       } );
  //     console.log("Response:", response.data);
  //     setDeal([...deal, response.data]);
  //     fetchDeal();  // Refresh deal list
  //   } catch (error) {
  //     console.error("Error posting deal:", error);
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !selectedProduct) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields",
        icon: "error",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });
      return;
    }
  
    const data = {
      title,
      productId: selectedProduct.id,
    };
  
    try {
      console.log("Submitting data:", data);
      const response = await axios.post("http://localhost:3000/api/deal-of-day/", data);
      console.log("Response:", response.data);
  
      // setDeal([...deal, response.data]);
      // fetchDeal();  // Refresh deal list
  
      setDeal((prevDeals) => [...prevDeals, response.data]);
      fetchDeal();  // Refresh deal list
  
      Swal.fire({
        title: "Success!",
        text: "Deal has been added successfully.",
        icon: "success",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });
  
      // Reset the form
      setTitle("");
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error posting deal:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add the deal. Please try again.",
        icon: "error",
        confirmButtonColor: "#4CAF50",
        confirmButtonText: "OK",
      });
    }
  };
  
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/api/deal-of-day/${id}`);
          fetchDeal();  // Refresh deal list
          Swal.fire({
            title: "Deleted!",
            text: "Deal has been deleted.",
            icon: "success",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK",
          });
        } catch (error) {
          console.error("Error deleting deal:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete deal.",
            icon: "error",
            confirmButtonColor: "#4CAF50",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  return (
    <div className="content container-fluid">
      <div className="mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/deal_of_the_day.png"
            alt=""
          />{" "}
          Deal of the Day
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="text-start">
                <ul className="nav nav-tabs w-fit-content mb-4">
                  <li className="nav-item text-capitalize">
                    <a className="nav-link lang-link active" href="javascript:;" id="en-link">
                      English (EN)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a className="nav-link lang-link" href="javascript:;" id="sa-link">
                      Arabic (SA)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a className="nav-link lang-link" href="javascript:;" id="bd-link">
                      Bangla (BD)
                    </a>
                  </li>
                  <li className="nav-item text-capitalize">
                    <a className="nav-link lang-link" href="javascript:;" id="in-link">
                      Hindi (IN)
                    </a>
                  </li>
                </ul>
                <div className="form-group">
                  <div className="row lang-form" id="en-form">
                    <div className="col-md-12">
                      <label htmlFor="title">Title (EN)</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        placeholder="Ex: LUX"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <label htmlFor="product" className="title-color">
                        Products
                      </label>
                      <div
                        ref={dropdownRef}
                        className={`dropdown select-product-search w-100 ${dropdownOpen ? "show" : ""}`}
                      >
                        <button
                          type="button"
                          className="form-control text-start dropdown-toggle text-capitalize select-product-button"
                          onClick={toggleDropdown}
                        >
                          {selectedProduct ? selectedProduct.title : "Select product"}
                        </button>
                        <div className={`dropdown-menu w-100 px-2 ${dropdownOpen ? "show" : ""}`}>
                          <div className="search-form mb-3">
                            <button type="button" className="btn">
                              <AiOutlineSearch />
                            </button>
                            <input
                              type="text"
                              className="js-form-search form-control search-bar-input search-product"
                              placeholder="Search menu..."
                            />
                          </div>
                          <div className="d-flex flex-column gap-3 max-h-40vh overflow-y-auto overflow-x-hidden search-result-box">
                            {deals.map((deal) => (
                              <div
                                key={deal.id}
                                className="select-product-item media gap-3 border-bottom py-2 cursor-pointer"
                                onClick={() => handleProductSelect(deal)}
                              >
                                <img
                                  className="avatar avatar-xl border"
                                  width="40"
                                  height="40"
                                  src={`http://localhost:3000/${deal.thumbnail}`}
                                  alt="product"
                                />
                                <div className="media-body d-flex justify-content-between align-items-center">
                                  <div>
                                    <h5 className="text-hover-primary h6">
                                      {deal.title.length > 20
                                        ? `${deal.title.slice(0, 20)}...`
                                        : deal.title}
                                    </h5>
                                    <div className="text-muted text-capitalize">
                                      {deal.category} - {deal.brand}
                                    </div>
                                  </div>
                                  <div className="mr-2">
                                    <AiOutlineCheckCircle />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <button type="submit" className="btn bg-green-400 text-white flex justify-end hover:bg-green-700 ">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <table id="datatable" style={{ textAlign: "left" }} className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                <thead className="thead-light">
                  <tr>
                    <th>SL</th>
                    <th>Title</th>
                    <th>Product Info</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deal.map((dealItem, index) => (
                    <tr key={dealItem._id}>
                      <td>{index + 1}</td>
               
                     
                      {/* <td>
                        {dealItem.productId.name.length > 20
                          ? `${dealItem.productId.name.slice(0, 20)}...`
                          : dealItem.productId.name}
                      </td> */}
                      <td>
                            {dealItem.productId ? dealItem.productId.name : "N/A"}
                          </td>
                      <td>
                      {dealItem.title}
                      </td>
                      <td>
                        <label className="switcher">
                          <input
                            type="checkbox"
                            className="switcher_input"
                            checked={dealItem.status === "active"}
                            onChange={() => toggleStatus(dealItem._id, dealItem.status)}
                          />
                          <span className="switcher_control"></span>
                        </label>
                      </td>
                      <td className="text-center flex justify-center">
                        <div className="d-flex gap-2">


                          <button
                            title="Edit"
                            className="btn  hover:text-white btn-sm border-green-400 hover:bg-green-400 hover:text-white"
                            onClick={() => console.log("Edit button clicked")}
                          >
                            <FaPen />
                          </button>
                          <button
                            title="Delete"
                            className="btn btn-outline-danger hover:text-white btn-sm border-red-400"
                            onClick={() => handleDelete(dealItem._id)}
                          >
                            <AiOutlineDelete />
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
  );
};

export default DealOfTheDay;



