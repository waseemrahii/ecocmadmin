import React from 'react';
import { FaWallet, FaMoneyCheckAlt, FaTruckLoading, FaPercentage } from 'react-icons/fa';

const Adminwallet = () => {
  return (
    <div className="card-body snipcss-KRwJd">
      <h4 className="d-flex align-items-center text-capitalize gap-10 mb-3">
        <img width="20" className="mb-1" src="/admin-wallet.png" alt="" /> Admin wallet
      </h4>
      <div className="row g-2" id="order_stats">
        <div className="col-lg-4">
          <div className="card h-100 d-flex justify-content-center align-items-center">
            <div className="card-body d-flex flex-column gap-10 align-items-center justify-content-center">
              <img width="48" className="mb-2" src="/inhouse-earning.png" alt="" />
              <h3 className="for-card-count mb-0 fz-24">$39,892.00</h3>
              <div className="text-capitalize mb-30">In-house earning</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-2">
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$12,755.02</h3>
                    <div className="text-capitalize mb-0">Commission earned</div>
                  </div>
                  <div>
                    <FaMoneyCheckAlt size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$1,360.00</h3>
                    <div className="text-capitalize mb-0">Delivery charge earned</div>
                  </div>
                  <div>
                    <FaTruckLoading size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$2,343.00</h3>
                    <div className="text-capitalize mb-0">Total tax collected</div>
                  </div>
                  <div>
                    <FaPercentage size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$8,153.00</h3>
                    <div className="text-capitalize mb-0">Pending amount</div>
                  </div>
                  <div>
                    <FaWallet size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminwallet;
