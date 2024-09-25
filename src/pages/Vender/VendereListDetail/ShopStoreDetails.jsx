///////

import React, { useState } from 'react';
import { FiStar, FiGlobe, FiDollarSign } from 'react-icons/fi';
import Swal from 'sweetalert2';
import './VenderList.css';
import VendorWallet from './ShopStoreWallet';

const ShopStoreDetails = () => {
    const [status, setStatus] = useState('active'); // Initial status

    const handleStatusChange = () => {
        // Show confirmation modal
        Swal.fire({
            title: 'Are you sure?',
            text: `Want to ${status === 'active' ? 'suspend' : 'activate'} this vendor?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: status === 'active' ? 'Yes, suspend' : 'Yes, activate',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                // Change status
                const newStatus = status === 'active' ? 'suspended' : 'active';
                setStatus(newStatus);

                // Show success message
                Swal.fire({
                    title: 'Success!',
                    text: `Vendor has been ${newStatus === 'active' ? 'activated' : 'suspended'}.`,
                    icon: 'success',
                    timer: 2000
                });
            }
        });
    };

    return (
        <div className="content container-fluid snipcss-XDKLR">
            <div className="card card-top-bg-element mb-5">
                <div className="card-body">
                    <div className="d-flex flex-wrap gap-3 justify-content-between">
                        <div className="media flex-column flex-sm-row gap-3">
                            <img className="avatar avatar-170 rounded-0" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-23-626405e4d6205.png" alt="Image" />
                            <div className="media-body">
                                <div className="d-block">
                                    <h2 className="mb-2 pb-1">Super Store Online</h2>
                                    <div className="d-flex gap-3 flex-wrap mb-3 lh-1">
                                        <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
                                            <FiStar />
                                            <span>0</span>
                                            <div className="review-details-popup">
                                                <h6 className="mb-2">Rating</h6>
                                                <div>
                                                    <ul className="list-unstyled list-unstyled-py-2 mb-0">
                                                        <li className="d-flex align-items-center font-size-sm">
                                                            <span className="mr-3">5 Star</span>
                                                            <div className="progress flex-grow-1">
                                                                <div className="progress-bar width--100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="ml-3">0</span>
                                                        </li>
                                                        <li className="d-flex align-items-center font-size-sm">
                                                            <span className="mr-3">4 Star</span>
                                                            <div className="progress flex-grow-1">
                                                                <div className="progress-bar width--80" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="ml-3">0</span>
                                                        </li>
                                                        <li className="d-flex align-items-center font-size-sm">
                                                            <span className="mr-3">3 Star</span>
                                                            <div className="progress flex-grow-1">
                                                                <div className="progress-bar width--60" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="ml-3">0</span>
                                                        </li>
                                                        <li className="d-flex align-items-center font-size-sm">
                                                            <span className="mr-3">2 Star</span>
                                                            <div className="progress flex-grow-1">
                                                                <div className="progress-bar width--40" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="ml-3">0</span>
                                                        </li>
                                                        <li className="d-flex align-items-center font-size-sm">
                                                            <span className="mr-3">1 Star</span>
                                                            <div className="progress flex-grow-1">
                                                                <div className="progress-bar width--20" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="ml-3">0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="border-left"></span>
                                        <a href="javascript:" className="text-dark">0 Ratings</a>
                                        <span className="border-left"></span>
                                        <a href="https://6valley.6amtech.com/admin/vendors/view/9/review" className="text-dark">0 Reviews</a>
                                    </div>
                                    <a href="https://6valley.6amtech.com/shopView/9" className="btn btn-outline--primary px-4" target="_blank"><FiGlobe /> View live </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-sm-end flex-wrap gap-2 mb-3">
                            <form className="d-inline-block">
                                <button type="button" className="btn btn-danger px-5" onClick={handleStatusChange}>
                                    {status === 'active' ? 'Suspend this vendor' : 'Activate this vendor'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
                        <div className="border p-3 w-170">
                            <div className="d-flex flex-column mb-1">
                                <h6 className="font-weight-normal">Total products :</h6>
                                <h3 className="text-primary fs-18">4</h3>
                            </div>
                            <div className="d-flex flex-column">
                                <h6 className="font-weight-normal">Total orders :</h6>
                                <h3 className="text-primary fs-18">0</h3>
                            </div>
                        </div>
                        <div className="row gy-3 flex-grow-1 w-100">
                            <div className="col-sm-6 col-xxl-3">
                                <h4 className="mb-3 text-capitalize">Shop information</h4>
                                <div className="pair-list">
                                    <div>
                                        <span className="key text-nowrap">Shop name</span>
                                        <span>:</span>
                                        <span className="value ">Super Store Online</span>
                                    </div>
                                    <div>
                                        <span className="key">Phone</span>
                                        <span>:</span>
                                        <span className="value">0**********</span>
                                    </div>
                                    <div>
                                        <span className="key">Address</span>
                                        <span>:</span>
                                        <span className="value">Mirpur</span>
                                    </div>
                                    <div>
                                        <span className="key">Status</span>
                                        <span>:</span>
                                        <span className="value">
                                            <span className={`badge badge-${status === 'active' ? 'info' : 'danger'}`}>
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <h4 className="mb-3 text-capitalize">Vendor information</h4>
                                <div className="pair-list">
                                    <div>
                                        <span className="key">Name</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">test seller 5</span>
                                    </div>
                                    <div>
                                        <span className="key">Email</span>
                                        <span>:</span>
                                        <span className="value">test.seller5@gmail.com</span>
                                    </div>
                                    <div>
                                        <span className="key">Phone</span>
                                        <span>:</span>
                                        <span className="value">+8801*********</span>
                                    </div>
                                    <div>
                                        <span className="key">Joined at</span>
                                        <span>:</span>
                                        <span className="value">23 Apr 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <h4 className="mb-3 text-capitalize">Account information</h4>
                                <div className="pair-list">
                                    <div>
                                        <span className="key">Balance</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">0.00 $</span>
                                    </div>
                                    <div>
                                        <span className="key">Commissions</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">0.00 $</span>
                                    </div>
                                    <div>
                                        <span className="key">Total earnings</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">0.00 $</span>
                                    </div>
                                    <div>
                                        <span className="key">Payment method</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">C.O.D</span>
                                    </div>
                                    <div>
                                        <a href="" className="btn btn-outline--primary px-4 flex gap-2 justify-center">
                                            <FiDollarSign /> View transaction
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xxl-3">
                                <h4 className="mb-3 text-capitalize">Bank information</h4>
                                <div className="pair-list">
                                    <div>
                                        <span className="key">Bank name</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">Test Bank</span>
                                    </div>
                                    <div>
                                        <span className="key">Branch name</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">Mirpur Branch</span>
                                    </div>
                                    <div>
                                        <span className="key">Holder name</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">Test Holder</span>
                                    </div>
                                    <div>
                                        <span className="key">Account no.</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">1234567890</span>
                                    </div>
                                    <div>
                                        <span className="key">IBAN no.</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">0987654321</span>
                                    </div>
                                    <div>
                                        <span className="key">Swift code</span>
                                        <span>:</span>
                                        <span className="value text-capitalize">T1234567</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VendorWallet />
        </div>
    );
};

export default ShopStoreDetails;
