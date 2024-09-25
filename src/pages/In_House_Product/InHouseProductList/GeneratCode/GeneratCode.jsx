

import React from 'react';
import './GeneratCode.css'; // Assuming you have custom styles here

const GenerateBarcode = () => {
    return (
        <div className="container-fluid mt-5 snipcss-K8yog">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                <h2 className="h1 mb-0 flex gap-3">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="" className="mb-1 mr-1" /> Generate Barcode
                </h2>
            </div>
            <div className="row">
                <div className="col-md-12 mb-3 mb-lg-2">
                    <div className="card">
                        <div className="py-4">
                            <div className="table-responsive">
                                <form action="https://6valley.6amtech.com/admin/products/barcode/45" method="GET">
                                    <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
                                        <thead className="thead-light thead-50 text-capitalize">
                                            <tr>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>176899</span>
                                                </td>
                                                <td>Create Your Own Business</td>
                                                <td>
                                                    <input id="limit" className="form-control" type="number" name="limit" min="1" defaultValue="4" />
                                                    <span className="text-danger mt-1 d-block"> Maximum quantity 270 </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <button className="btn btn-outline-info" type="submit"> Generate barcode </button>
                                                        <a href="https://6valley.6amtech.com/admin/products/barcode/45" className="btn btn-outline-danger"> Reset </a>
                                                        <button type="button" id="print_bar" data-value="print-area" className="btn btn-outline-primary action-print-invoice"> Print </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional content for printing area */}
            <div id="print-area" className="show-div pb-5 snipcss-s52gd">
                <div className="barcode-a4">
                    <div className="item style24">
                        <span className="barcode_site text-capitalize"> 6valley CMS </span>
                        <span className="barcode_name text-capitalize"> Create Your Own Business </span>
                        <div className="barcode_price text-capitalize"> $500.00 </div>
                        <div className="barcode_image d-flex justify-content-center">
                            <div id="style-arcJx" className="style-arcJx">
                                {/* Add your barcode styles here */}
                                {/* Example content for barcode */}
                                <div className="barcode-content">&nbsp;</div>
                                <div className="barcode-content">&nbsp;</div>
                                <div className="barcode-content">&nbsp;</div>
                                {/* Add more as needed */}
                            </div>
                        </div>
                        <div className="barcode_code text-capitalize"> Code : 176899 </div>
                    </div>
                    {/* Add more items as needed */}
                </div>
            </div>
        </div>
    );
};

export default GenerateBarcode;
