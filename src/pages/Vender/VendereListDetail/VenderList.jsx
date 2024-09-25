

// import React from 'react';
// import { FiStar, FiGlobe,  FiShoppingBag, FiClock, FiTrendingUp, FiPercent, FiDollarSign } from 'react-icons/fi';
// import './VenderList.css'
// import ShopStoreDetails from './ShopStoreDetails';
// import { Link } from 'react-router-dom';
// const VenderListDetail = () => {
//     return (
//         <div className="content container-fluid snipcss-XDKLR">
//             <div className="mb-3">
//                 <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//                     <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="" /> Vendor details
//                 </h2>
//             </div>
//             <div className="page-header border-0 mb-4">
//                 <div className="js-nav-scroller hs-nav-scroller-horizontal">
//                     <ul className="nav nav-tabs flex-wrap page-header-tabs">
//                         <li className="nav-item">
//                             <Link className="nav-link active" to='/shopview'>Shop overview</Link>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="https://6valley.6amtech.com/admin/vendors/view/9/order">Order</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="https://6valley.6amtech.com/admin/vendors/view/9/product">Product</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="https://6valley.6amtech.com/admin/vendors/view/9/setting">Setting</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="https://6valley.6amtech.com/admin/vendors/view/9/transaction">Transaction</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="https://6valley.6amtech.com/admin/vendors/view/9/review">Review</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="card card-top-bg-element mb-5">
//                 {/* <div className="card-body">
//                     <div className="d-flex flex-wrap gap-3 justify-content-between">
//                         <div className="media flex-column flex-sm-row gap-3">
//                             <img className="avatar avatar-170 rounded-0" src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-23-626405e4d6205.png" alt="Image" />
//                             <div className="media-body">
//                                 <div className="d-block">
//                                     <h2 className="mb-2 pb-1">Super Store Online</h2>
//                                     <div className="d-flex gap-3 flex-wrap mb-3 lh-1">
//                                         <div className="review-hover position-relative cursor-pointer d-flex gap-2 align-items-center">
//                                             <FiStar />
//                                             <span>0</span>
//                                             <div className="review-details-popup">
//                                                 <h6 className="mb-2">Rating</h6>
//                                                 <div className="">
//                                                     <ul className="list-unstyled list-unstyled-py-2 mb-0">
//                                                         <li className="d-flex align-items-center font-size-sm">
//                                                             <span className="mr-3">5 Star</span>
//                                                             <div className="progress flex-grow-1">
//                                                                 <div className="progress-bar width--100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                             </div>
//                                                             <span className="ml-3">0</span>
//                                                         </li>
//                                                         <li className="d-flex align-items-center font-size-sm">
//                                                             <span className="mr-3">4 Star</span>
//                                                             <div className="progress flex-grow-1">
//                                                                 <div className="progress-bar width--80" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                             </div>
//                                                             <span className="ml-3">0</span>
//                                                         </li>
//                                                         <li className="d-flex align-items-center font-size-sm">
//                                                             <span className="mr-3">3 Star</span>
//                                                             <div className="progress flex-grow-1">
//                                                                 <div className="progress-bar width--60" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                             </div>
//                                                             <span className="ml-3">0</span>
//                                                         </li>
//                                                         <li className="d-flex align-items-center font-size-sm">
//                                                             <span className="mr-3">2 Star</span>
//                                                             <div className="progress flex-grow-1">
//                                                                 <div className="progress-bar width--40" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                             </div>
//                                                             <span className="ml-3">0</span>
//                                                         </li>
//                                                         <li className="d-flex align-items-center font-size-sm">
//                                                             <span className="mr-3">1 Star</span>
//                                                             <div className="progress flex-grow-1">
//                                                                 <div className="progress-bar width--20" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
//                                                             </div>
//                                                             <span className="ml-3">0</span>
//                                                         </li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <span className="border-left"></span>
//                                         <a href="javascript:" className="text-dark">0 Ratings</a>
//                                         <span className="border-left"></span>
//                                         <a href="https://6valley.6amtech.com/admin/vendors/view/9/review" className="text-dark">0 Reviews</a>
//                                     </div>
//                                     <a href="https://6valley.6amtech.com/shopView/9" className="btn btn-outline--primary px-4" target="_blank"><FiGlobe /> View live</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="d-flex justify-content-sm-end flex-wrap gap-2 mb-3">
//                             <form className="d-inline-block" action="https://6valley.6amtech.com/admin/vendors/status" id="suspend-form" method="POST">
//                                 <input type="hidden" name="_token" value="xODXJF1cGU5Uk2IombJHq9U8AL4dxWA8yUTpg7Cm" autoComplete="off" /> <input type="hidden" name="id" value="9" />
//                                 <input type="hidden" name="status" value="suspended" />
//                                 <button type="button" className="btn btn-danger px-5 form-alert" data-message="Want to suspend this vendor?" data-id="suspend-form">Suspend this vendor</button>
//                             </form>
//                         </div>
//                     </div>
//                     <hr />
//                     <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
//                         <div className="border p-3 w-170">
//                             <div className="d-flex flex-column mb-1">
//                                 <h6 className="font-weight-normal">Total products :</h6>
//                                 <h3 className="text-primary fs-18">4</h3>
//                             </div>
//                             <div className="d-flex flex-column">
//                                 <h6 className="font-weight-normal">Total orders :</h6>
//                                 <h3 className="text-primary fs-18">0</h3>
//                             </div>
//                         </div>
//                         <div className="row gy-3 flex-grow-1 w-100">
//                             <div className="col-sm-6 col-xxl-3">
//                                 <h4 className="mb-3 text-capitalize">Shop information</h4>
//                                 <div className="pair-list">
//                                     <div>
//                                         <span className="key text-nowrap">Shop name</span>
//                                         <span>:</span>
//                                         <span className="value ">Super Store Online</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Phone</span>
//                                         <span>:</span>
//                                         <span className="value">0**********</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Address</span>
//                                         <span>:</span>
//                                         <span className="value">Mirpur</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Status</span>
//                                         <span>:</span>
//                                         <span className="value">
//                                             <span className="badge badge-info"> Active </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 col-xxl-3">
//                                 <h4 className="mb-3 text-capitalize">Vendor information</h4>
//                                 <div className="pair-list">
//                                     <div>
//                                         <span className="key">Name</span>
//                                         <span>:</span>
//                                         <span className="value text-capitalize">test seller 5</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Email</span>
//                                         <span>:</span>
//                                         <span className="value">t**********@gmail.com</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Last login</span>
//                                         <span>:</span>
//                                         <span className="value">2022-04-23 07:34:54</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Total wallet</span>
//                                         <span>:</span>
//                                         <span className="value">
//                                             <span className="text-primary">USD 0</span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 col-xxl-3">
//                                 <h4 className="mb-3 text-capitalize">Shop policy</h4>
//                                 <div className="pair-list">
//                                     <div>
//                                         <span className="key">Refund policy</span>
//                                         <span>:</span>
//                                         <span className="value">-</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Shipping policy</span>
//                                         <span>:</span>
//                                         <span className="value">-</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Payment policy</span>
//                                         <span>:</span>
//                                         <span className="value">-</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Additional information</span>
//                                         <span>:</span>
//                                         <span className="value">-</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6 col-xxl-3">
//                                 <h4 className="mb-3 text-capitalize">Other information</h4>
//                                 <div className="pair-list">
//                                     <div>
//                                         <span className="key">Total product sale</span>
//                                         <span>:</span>
//                                         <span className="value">USD 0</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Total earning</span>
//                                         <span>:</span>
//                                         <span className="value">USD 0</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Total order</span>
//                                         <span>:</span>
//                                         <span className="value">0</span>
//                                     </div>
//                                     <div>
//                                         <span className="key">Total review</span>
//                                         <span>:</span>
//                                         <span className="value">0</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//                 <ShopStoreDetails />
//             </div>
//         </div>
//     );
// };

// export default VenderListDetail;


////////////

// import React, { useState } from 'react';
// import { FiStar, FiGlobe } from 'react-icons/fi';
// import './VenderList.css';
// import ShopStoreDetails from './ShopStoreDetails';
// // import OrderDetails from './OrderDetails'; // Import OrderDetails component
// // import ProductDetails from './ProductDetails'; // Import ProductDetails component
// // import SettingDetails from './SettingDetails'; // Import SettingDetails component
// // import TransactionDetails from './TransactionDetails'; // Import TransactionDetails component
// // import ReviewDetails from './ReviewDetails'; // Import ReviewDetails component
// import { Link, Route, Routes } from 'react-router-dom';

// const VenderListDetail = () => {
//     const [activeTab, setActiveTab] = useState('shopview');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="content container-fluid snipcss-XDKLR">
//             <div className="mb-3">
//                 <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//                     <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="" /> Vendor details
//                 </h2>
//             </div>
//             <div className="page-header border-0 mb-4">
//                 <div className="js-nav-scroller hs-nav-scroller-horizontal">
//                     <ul className="nav nav-tabs flex-wrap page-header-tabs">
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'shopview' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('shopview')}
//                                 to="/shopview"
//                             >
//                                 Shop overview
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'order' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('order')}
//                                 to="/order"
//                             >
//                                 Order
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'product' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('product')}
//                                 to="/product"
//                             >
//                                 Product
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'setting' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('setting')}
//                                 to="/setting"
//                             >
//                                 Setting
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'transaction' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('transaction')}
//                                 to="/transaction"
//                             >
//                                 Transaction
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
//                                 onClick={() => handleTabClick('review')}
//                                 to="/review"
//                             >
//                                 Review
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="card card-top-bg-element mb-5">
//                 <div className="card-body">
//                     <Routes>
//                         <Route path="/shopview" element={<ShopStoreDetails />} />
//                         <Route path="/order" element={<ShopStoreDetails />} />
//                         <Route path="/product" element={<ShopStoreDetails />} />
//                         <Route path="/setting" element={<ShopStoreDetails />} />
//                         <Route path="/transaction" element={<ShopStoreDetails />} />
//                         <Route path="/review" element={<ShopStoreDetails />} />
//                     </Routes>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VenderListDetail;

///////


import React, { useState } from 'react';
import { FiStar, FiGlobe } from 'react-icons/fi';
import './VenderList.css';
import ShopStoreDetails from './ShopStoreDetails';
import { Link } from 'react-router-dom';
import VenderOrder from '../VenderOrder/VenderOrder';
import VenderProduct from '../VenderList/VenderProduct/VenderProduct';
import VendorSettings from '../VenderSetting/VenderSetting';

import TransactionTable from '../VenderTransaction/VenderTransaction';
import VenderReview from '../VenderReview/VenderReview';


const VenderListDetail = () => {
    const [activeTab, setActiveTab] = useState('shopview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'shopview':
                return <ShopStoreDetails />;
            case 'order':
                return <VenderOrder />;
            case 'product':
                return <VenderProduct />;
            case 'setting':
                return <VendorSettings />;
            case 'transaction':
                return <TransactionTable />;
            // case 'transaction':
            //     return <ProductEdit />;
            case 'review':
                return <VenderReview />;
            default:
                return <ShopStoreDetails />;
        }
    };

    return (
        <div className="content container-fluid snipcss-XDKLR">
            <div className="mb-3">
                <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
                   
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" alt="" /> Vendor details
                 
                </h2>
            </div>
            <div className="page-header border-0 mb-4">
                <div className="js-nav-scroller hs-nav-scroller-horizontal">
                    <ul className="nav nav-tabs flex-wrap page-header-tabs">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'shopview' ? 'active' : ''}`}
                                onClick={() => handleTabClick('shopview')}
                            >
                                Shop overview
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'order' ? 'active' : ''}`}
                                onClick={() => handleTabClick('order')}
                            >
                                Order
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'product' ? 'active' : ''}`}
                                onClick={() => handleTabClick('product')}
                            >
                                Product
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'setting' ? 'active' : ''}`}
                                onClick={() => handleTabClick('setting')}
                            >
                                Setting
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'transaction' ? 'active' : ''}`}
                                onClick={() => handleTabClick('transaction')}
                            >
                                Transaction
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
                                onClick={() => handleTabClick('review')}
                            >
                                Review
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card card-top-bg-element mb-5">
                <div className="card-body">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default VenderListDetail;

