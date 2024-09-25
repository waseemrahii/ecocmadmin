// with login page
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AttributeSetup from "./pages/ProductAttributeSetUp/ProductAttributeSetUp";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Categories from "./pages/Categoreis/Categories";
import SubCateggories from "./pages/Categoreis/SubCateggories";
import Sub_Sub_Categories from "./pages/Categoreis/Sub_Sub_Categories";
import AddNewBrand from "./pages/Brands/AddNew";
import BulkImport from "./pages/In_House_Product/AddProduct/BulkImport/BulkImport";
import Coupon from "./pages/OfferAndDeals/Coupon/Coupon";
import FlashDeals from "./pages/OfferAndDeals/FlashDeal/FlashDeals";
import DealOfTheDay from "./pages/OfferAndDeals/DealOfDay/DealOfDay";
import FeatureDeal from "./pages/OfferAndDeals/FeatureDeal/FeatureDeal";
import CustomerReviews from "./pages/Costumers/Costumer_Review/CustomerReviews";
import CustomerList from "./pages/Costumers/Costumer_Review/CustomerList/CustomerList";
import WalletManagement from "./pages/Costumers/CWallet/CustomersWallet";
import CustomerBonusSetUp from "./pages/Costumers/CustomerBonusSetUp/CustomerBonusSetUp";

import CustomerLoyaltyReport from "./pages/Costumers/CustomerLoyalityReport/CustomerLoyaltyReport";
import EmployeeRoleSetup from "./pages/Employees/EmployeRoleSetUp/EmployeeRoleSetup";

import EmployeeList from "./pages/Employees/Employees/Employees";
import SubscriberList from "./pages/Subscriber/SubscriberList";
import SystemSetup from "./pages/SettingSetup/SystemSetup.jsx/SystemSetup";
import AppSettings from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import SystemSettings from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import SystemSetups from "./pages/SettingSetup/SystemSetup.jsx/SystemSetups";
import LoginSetups from "./pages/SettingSetup/LoginSetting/LoginSetting";
import TheemSetUp from "./pages/SettingSetup/Theem/TheemSetUp";
import ThirParty from "./pages/ThirdParty/ThirParty";
import OtherConfiguration from "./pages/ThirdParty/Paymentmethod/OtherConfiguration/OtherConfiguration";
import Page from "./pages/ThirdParty/Paymentmethod/OtherConfiguration/page";
import SocialMedia from "./pages/PagesAndMedia/SocialMedia";
import PageAndMedia from "./pages/PagesAndMedia/page";
import Combine from "./pages/SalesAndTransaction/EarnReport/totallcomponent";
import EarningReport from "./pages/SalesAndTransaction/EarnReport/totallcomponent";
import InhouseSale from "./pages/SalesAndTransaction/InhouseProduct/InhouseProduct";
import BusinessSetup from "./pages/Bussnesssetup/BusinessSetup";
import InHouseBusiness from "./pages/Bussnesssetup/InHouseBusiness/InHouseBusiness";

import Ticket_Support from "./pages/Health_Support/Ticket_Support";
import Message from "./pages/Health_Support/Message";
import OrderList from "./pages/Order/OrderList";
import ProdictGallery from "./pages/Health_Support/Product_Gallery";
import BrandList from "./pages/Brands/BrandList";
import BannerSetup from "./pages/faisal/BannerSetup/BannerSetup";
import POS from "./pages/Health_Support/Pos";
import IndexMessage from "./pages/Health_Support/Index";

import PuchNotify from "./pages/faisal/PuchNotifaction/PuchNotify";
import AnnouncementSetup from "./pages/faisal/AnnouncementSetup/AnnouncementSetup";
import SendNotifaction from "./pages/faisal/SendNotifaction";
import AddNewDelivery from "./pages/faisal/Delivery Men/AddNew";
import DeliveryManList from "./pages/faisal/Delivery Men/List";
import EmergencyContact from "./pages/faisal/Delivery Men/EmergencyContact";
import WithdrawRequest from "./pages/faisal/Delivery Men/WithdrawRequest";
import BusinessSetupShop from "./pages/Bussnesssetup/BusinessSetup";
import VendorList from "./pages/Vender/VenderList/VenderList";
import VenderListDetail from "./pages/Vender/VendereListDetail/VenderList";
import ShopStoreDetails from "./pages/Vender/VendereListDetail/ShopStoreDetails";
import OrderDeatiels from "./pages/Order/OrderDeatiels";
import AddVendorForm from "./pages/Vender/AddVender/AddVender";
import VenderWallet from "./pages/Vender/VenderWallet/VenderWallet";
import VenderWalletMethod from "./pages/Vender/VenderWalletMethod/VenderWalletMethod";
import WithdrawalMethods from "./pages/Vender/VenderWalletMethod/VenderWidrawmethod";
import RefundDetails from "./pages/Refound/Details/RefoundDetail/RefoundDetail";
import CategoryUpdate from "./pages/Categoreis/CategoryEdit/CategoryEdit";
import SubEdit from "./pages/Categoreis/Subcategoryedit";
import BrandUpdate from "./pages/Brands/BrandUpdate";
import UpdateAttribute from "./pages/ProductAttributeSetUp/UpdateAtribute";
import GenerateBarcode from "./pages/In_House_Product/InHouseProductList/GeneratCode/GeneratCode";
import ProductDetails from "./pages/In_House_Product/InHouseProductList/ProductDetail/ProductDetail.jsx";
import BannerUpdateForm from "./pages/faisal/BannerSetup/BannerSetupForm";
import AddBannerForm from "./pages/faisal/BannerSetup/AddBanner";
import CouponUpdate from "./pages/OfferAndDeals/Coupon/CouponUpdate";
import AddNewProductComponent from "./pages/OfferAndDeals/FeatureDeal/AddDealProduct";
import LimitedStockProductsList from "./pages/In_House_Product/InHouseProductList/LimitedProduct/LimitedProduct";
import ProductGallery from "./pages/Health_Support/Product_Gallery";
import PageGallery from "./pages/Health_Support/Gallery";
import EaringReports from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/EmaingReport/EamingReports";
import ProductReports from "./pages/faisal/ReportAndAnalysis/ProductReports/ProductReports";
import OrderReports from "./pages/faisal/ReportAndAnalysis/OrderReports/OrderReports";
import InHouseSales from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/InHouseSales";
import VendorSales from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/VendorSales";
import TranscatioReports from "./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/TransctionReports/TranscatioReports";
import AddInHouseNewProduct from "./pages/In_House_Product/AddProduct/AddProduct";
import ProfileInformation from "./components/new/Footer/ProfileInformation/ProfileInformation";

import AddFlashDealProdcut from "./pages/OfferAndDeals/FlashDeal/addFlashDealProdcut.jsx";

import {  
   PendingOrders,
  ConfirmedOrders,
  DeliveredOrders,
  PackagingOrders,
  OutForDeliveryOrders,
  FailedToDeliverOrders,
  ReturnedOrders,
  CanceledOrders } 
from './pages/Order/OrderManagementPages.jsx';

import { ApprovedRefunds, PendingRefunds, RefundedRefunds, RejectedRefunds } from "./pages/Refound/RefundRequestPage.jsx";
import {
  InHouseProductPage,
  VendorPendingProductPage,
  VendorNewRequestProductPage,
  VendorApprovedProductPage,
  VendorDeniedProductPage
} from "./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx";// Adjust the import path as needed
import InhouseProductUpdate from "./pages/In_House_Product/AddProduct/InhouseProductUpdate.jsx";
import SubCategoriess from "./pages/Categoreis/SubCategories/SubCategories.jsx";

function AllRoutes() {

  return (
   <>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/businesssetup" element={<BusinessSetup />} />
                  <Route path="/vendernew" element={<VendorNewRequestProductPage />} />
                  <Route path="/venderpendingproduct" element={<VendorPendingProductPage />} />
                  <Route path="/venderapprove" element={<VendorApprovedProductPage />} />
                  <Route path="/pos" element={<POS />} />
                  <Route path="/venderdenied" element={<VendorDeniedProductPage />} />
                  <Route path="/dashboard" element={<WelcomePage />} />
                  <Route path="/allorders" element={<OrderList />} />
                  <Route path="/orderdetail/:id" element={<OrderDeatiels />} />
                  <Route path="/pendingorders" element={<PendingOrders />} />
                  <Route path="/pendingrefundrequests" element={<PendingRefunds />} />
                  <Route path="/refunddetail/:id" element={<RefundDetails />} />
                  <Route path="/approverefundrequests" element={<ApprovedRefunds />} />
                  <Route path="/refunded" element={<RefundedRefunds />} />
                  <Route path="/rejected" element={<RejectedRefunds />} />
                  <Route
                    path="/profileinformation"
                    element={<ProfileInformation />}
                  />
                  <Route path="/refounddetail/:id" element={<RefundDetails />} />
                  <Route path="/productattributesetup" element={<AttributeSetup />} />
                  <Route path="/productattributeupdate" element={<UpdateAttribute />} />
                  <Route path="/inhouseproductlist" element={<InHouseProductPage />} />
                  <Route path="/inhouseproductlistcode" element={<GenerateBarcode />} />
                  <Route path="/products/:productId" element={<ProductDetails />} />
                  <Route path="//product/:id" element={<InhouseProductUpdate />} />
                  <Route path="/inhouseaddproduct" element={<AddInHouseNewProduct />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categoryedit/:id" element={<CategoryUpdate />} />
                  {/* <Route path="/subcategories" element={<SubCateggories />} /> */}
                  <Route path="/subcategories" element={<SubCategoriess />} />
                  <Route path="/subedit" element={<SubEdit />} />
                  <Route path="/subsubcategories" element={<Sub_Sub_Categories />} />
                  <Route path="/addnewbrand" element={<AddNewBrand />} />
                  <Route path="/brandlist" element={<BrandList />} />
                  <Route path="/brandupdate/:id" element={<BrandUpdate />} />
                  <Route path="/bulkimport" element={<BulkImport />} />
                  <Route path="/coupon" element={<Coupon />} />
                  <Route path="/couponupdate" element={<CouponUpdate />} />
                  <Route path="/flashdeals" element={<FlashDeals />} />
                  <Route path="/dealofday" element={<DealOfTheDay />} />
                  <Route path="/featuredeal" element={<FeatureDeal />} />
                  <Route path="featuredeal/add-product/:id" element={<AddNewProductComponent />} />
                  <Route path="flashdeals/add-flashproduct/:id" element={<AddFlashDealProdcut />} />
                  <Route path="/customerreviews" element={<CustomerReviews />} />
                  <Route path="/customerlist" element={<CustomerList />} />
                  <Route path="/walletmanagement" element={<WalletManagement />} />
                  <Route path="/customerbonussetup" element={<CustomerBonusSetUp />} />
                  <Route path="/customerloyaltyreport" element={<CustomerLoyaltyReport />} />
                  <Route path="/employeerolesetup" element={<EmployeeRoleSetup />} />
                  <Route path="/employeelist" element={<EmployeeList />} />
                  <Route path="/subscriberlist" element={<SubscriberList />} />
                  <Route path="/systemsetup" element={<SystemSetup />} />
                  <Route path="/appsettings" element={<AppSettings />} />
                  <Route path="/systemsettings" element={<SystemSettings />} />
                  <Route path="/systemsetups" element={<SystemSetups />} />
                  <Route path="/loginsetups" element={<LoginSetups />} />
                  <Route path="/theemsetup" element={<TheemSetUp />} />
                  <Route path="/thirdparty" element={<ThirParty />} />
                  <Route path="/otherconfiguration" element={<OtherConfiguration />} />
                  <Route path="/pagesocialmedia" element={<SocialMedia />} />
                  <Route path="/pagemedia" element={<PageAndMedia />} />

                  <Route path="/earningreport" element={<EaringReports />} />
                  <Route path="/inhousesales" element={<InHouseSales />} />
                  <Route path="/vendersale" element={<VendorSales />} />
                  <Route path="/transactionrepo" element={<TranscatioReports />} />
                 
                  <Route path="/productreport" element={<ProductReports />} />
                  <Route path="/orderreport" element={<OrderReports />} />

                  <Route path="/pagegallery" element={<PageGallery />} />
                  <Route path="/productgallery" element={<ProductGallery />} />
                  <Route path="/earningreport" element={<EarningReport />} />
                  <Route path="/inhouseproductearning" element={<InhouseSale />} />
                  <Route path="/inhouselimitedproduct" element={<LimitedStockProductsList />} />

                  <Route path="/businessinhouse" element={<InHouseBusiness />} />
                  <Route path="/ticketsupport" element={<Ticket_Support />} />
                  <Route path="/messagesupport" element={<Message />} />
                  <Route path="/orderlist" element={<OrderList />} />
                  <Route path="/pendingorder" element={<PendingOrders />} />
                  <Route path="/confirmedorder" element={<ConfirmedOrders />} />
                  <Route path="/packagingorder" element={<PackagingOrders />} />
                  <Route path="/deliveredorder" element={<DeliveredOrders />} />
                  <Route path="/returnedorder" element={<ReturnedOrders />} />
                  <Route path="/cancelledorder" element={<CanceledOrders />} />
                  <Route path="/failedorder" element={<FailedToDeliverOrders />} />
                  <Route path="/outfordelivery" element={<OutForDeliveryOrders />} />
                  <Route path="/pushnotification" element={<PuchNotify />} />
                  <Route path="/announcement" element={<AnnouncementSetup />} />
                  <Route path="/sendnotification" element={<SendNotifaction />} />
                  <Route path="/addnewdelivery" element={<AddNewDelivery />} />
                  <Route path="/deliverymanlist" element={<DeliveryManList />} />
                  <Route path="/emergencycontact" element={<EmergencyContact />} />
                  <Route path="/withdrawrequest" element={<WithdrawRequest />} />
                  <Route path="/indexmessage" element={<IndexMessage />} />
                  <Route path="/bannersetup" element={<BannerSetup />} />
                  <Route path="/editbannerform/:id" element={<BannerUpdateForm />} />
                  <Route path="/addbannerform" element={<AddBannerForm />} />
       
                  <Route path="/venderlist" element={<VendorList />} />
                  <Route path="/venderdetail" element={<VenderListDetail />} />
                  <Route path="/shopview" element={<ShopStoreDetails />} />
                  <Route path="/new" element={<ShopStoreDetails />} />
                  <Route path="/image" element={<ShopStoreDetails />} />
                  <Route path="/orderdetail" element={<OrderDeatiels />} />
                  <Route path="/addvenderform" element={<AddVendorForm />} />
                  <Route path="/addvenderwallet" element={<VenderWallet />} />
                  <Route path="/addvenderwalletmethod" element={<VenderWalletMethod />} />
                  <Route path="/addvenderwidthrawtmethod" element={<WithdrawalMethods />} />
  
                  </Routes>
                </>
  );
}

export default AllRoutes;





////////////////////////////



// import React, { lazy, Suspense } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// // Lazy load components
// const AttributeSetup = lazy(() => import("./pages/ProductAttributeSetUp/ProductAttributeSetUp"));
// const MainHouseAddProduct = lazy(() => import("./pages/In_House_Product/AddProduct/mainHouseAddProduct"));
// const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
// const Categories = lazy(() => import("./pages/Categoreis/Categories"));
// const SubCateggories = lazy(() => import("./pages/Categoreis/SubCateggories"));
// const Sub_Sub_Categories = lazy(() => import("./pages/Categoreis/Sub_Sub_Categories"));
// const AddNewBrand = lazy(() => import("./pages/Brands/AddNew"));
// const BulkImport = lazy(() => import("./pages/In_House_Product/AddProduct/BulkImport/BulkImport"));
// const Coupon = lazy(() => import("./pages/OfferAndDeals/Coupon/Coupon"));
// const FlashDeals = lazy(() => import("./pages/OfferAndDeals/FlashDeal/FlashDeals"));
// const DealOfTheDay = lazy(() => import("./pages/OfferAndDeals/DealOfDay/DealOfDay"));
// const FeatureDeal = lazy(() => import("./pages/OfferAndDeals/FeatureDeal/FeatureDeal"));
// const CustomerReviews = lazy(() => import("./pages/Costumers/Costumer_Review/CustomerReviews"));
// const CustomerList = lazy(() => import("./pages/Costumers/Costumer_Review/CustomerList/CustomerList"));
// const WalletManagement = lazy(() => import("./pages/Costumers/CWallet/CustomersWallet"));
// const CustomerBonusSetUp = lazy(() => import("./pages/Costumers/CustomerBonusSetUp/CustomerBonusSetUp"));
// const CustomerLoyaltyReport = lazy(() => import("./pages/Costumers/CustomerLoyalityReport/CustomerLoyaltyReport"));
// const EmployeeRoleSetup = lazy(() => import("./pages/Employees/EmployeRoleSetUp/EmployeeRoleSetup"));
// const EmployeeList = lazy(() => import("./pages/Employees/Employees/Employees"));
// const SubscriberList = lazy(() => import("./pages/Subscriber/SubscriberList"));
// const SystemSetup = lazy(() => import("./pages/SettingSetup/SystemSetup.jsx/SystemSetup"));
// const AppSettings = lazy(() => import("./pages/SettingSetup/SystemSetup.jsx/SystemSetups"));
// const SystemSettings = lazy(() => import("./pages/SettingSetup/SystemSetup.jsx/SystemSetups"));
// const SystemSetups = lazy(() => import("./pages/SettingSetup/SystemSetup.jsx/SystemSetups"));
// const LoginSetups = lazy(() => import("./pages/SettingSetup/LoginSetting/LoginSetting"));
// const TheemSetUp = lazy(() => import("./pages/SettingSetup/Theem/TheemSetUp"));
// const ThirParty = lazy(() => import("./pages/ThirdParty/ThirParty"));
// const OtherConfiguration = lazy(() => import("./pages/ThirdParty/Paymentmethod/OtherConfiguration/OtherConfiguration"));
// const SocialMedia = lazy(() => import("./pages/PagesAndMedia/SocialMedia"));
// const PageAndMedia = lazy(() => import("./pages/PagesAndMedia/page"));
// const EaringReports = lazy(() => import("./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/EmaingReport/EamingReports"));
// const InHouseSales = lazy(() => import("./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/InHouseSales"));
// const VendorSales = lazy(() => import("./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/VendorSales"));
// const TranscatioReports = lazy(() => import("./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/TransctionReports/TranscatioReports"));
// const ProductReports = lazy(() => import("./pages/faisal/ReportAndAnalysis/ProductReports/ProductReports"));
// const OrderReports = lazy(() => import("./pages/faisal/ReportAndAnalysis/OrderReports/OrderReports"));
// const PageGallery = lazy(() => import("./pages/Health_Support/Gallery"));
// const ProductGallery = lazy(() => import("./pages/Health_Support/Product_Gallery"));
// const InhouseSale = lazy(() => import("./pages/faisal/ReportAndAnalysis/SalesAndTranscationReports/InHouseSales"));
// const LimitedStockProductsList = lazy(() => import("./pages/In_House_Product/InHouseProductList/LimitedProduct/LimitedProduct"));
// const BusinessSetup = lazy(() => import("./pages/Bussnesssetup/BusinessSetup"));
// const InHouseBusiness = lazy(() => import("./pages/Bussnesssetup/InHouseBusiness/InHouseBusiness"));
// const Ticket_Support = lazy(() => import("./pages/Health_Support/Ticket_Support"));
// const Message = lazy(() => import("./pages/Health_Support/Message"));
// const OrderList = lazy(() => import("./pages/Order/OrderList"));
// const BrandList = lazy(() => import("./pages/Brands/BrandList"));
// const BannerSetup = lazy(() => import("./pages/faisal/BannerSetup/BannerSetup"));
// const POS = lazy(() => import("./pages/Health_Support/Pos"));
// const IndexMessage = lazy(() => import("./pages/Health_Support/Index"));
// const PuchNotify = lazy(() => import("./pages/faisal/PuchNotifaction/PuchNotify"));
// const AnnouncementSetup = lazy(() => import("./pages/faisal/AnnouncementSetup/AnnouncementSetup"));
// const SendNotifaction = lazy(() => import("./pages/faisal/SendNotifaction"));
// const AddNewDelivery = lazy(() => import("./pages/faisal/Delivery Men/AddNew"));
// const DeliveryManList = lazy(() => import("./pages/faisal/Delivery Men/List"));
// const EmergencyContact = lazy(() => import("./pages/faisal/Delivery Men/EmergencyContact"));
// const WithdrawRequest = lazy(() => import("./pages/faisal/Delivery Men/WithdrawRequest"));
// const VendorList = lazy(() => import("./pages/Vender/VenderList/VenderList"));
// const VenderListDetail = lazy(() => import("./pages/Vender/VendereListDetail/VenderList"));
// const ShopStoreDetails = lazy(() => import("./pages/Vender/VendereListDetail/ShopStoreDetails"));
// const OrderDeatiels = lazy(() => import("./pages/Order/OrderDeatiels"));
// const AddVendorForm = lazy(() => import("./pages/Vender/AddVender/AddVender"));
// // const VenderWallet = lazy(() => import("./pages/Vender/VenderWallet/VenderWallet"));
// // const VenderWalletMethod = lazy(() => import("./pages/Vender/VenderWalletMethod/VenderWalletMethod"));
// // const WithdrawalMethods = lazy(() => import("./pages/Vender/VenderWalletMethod/VenderWidrawmethod"));
// const RefundDetails = lazy(() => import("./pages/Refound/Details/RefoundDetail/RefoundDetail"));
// const CategoryUpdate = lazy(() => import("./pages/Categoreis/CategoryEdit/CategoryEdit"));
// const SubEdit = lazy(() => import("./pages/Categoreis/Subcategoryedit"));
// const BrandUpdate = lazy(() => import("./pages/Brands/BrandUpdate"));
// const UpdateAttribute = lazy(() => import("./pages/ProductAttributeSetUp/UpdateAtribute"));
// const GenerateBarcode = lazy(() => import("./pages/In_House_Product/InHouseProductList/GeneratCode/GeneratCode"));
// const BannerUpdateForm = lazy(() => import("./pages/faisal/BannerSetup/BannerSetupForm"));
// const AddBannerForm = lazy(() => import("./pages/faisal/BannerSetup/AddBanner"));
// const CouponUpdate = lazy(() => import("./pages/OfferAndDeals/Coupon/CouponUpdate"));
// const AddNewProductComponent = lazy(() => import("./pages/OfferAndDeals/FeatureDeal/AddDealProduct"));
// const AddFlashDealProdcut = lazy(() => import("./pages/OfferAndDeals/FlashDeal/addFlashDealProdcut.jsx"));



// // Lazy load components
// const PendingOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.PendingOrders })));
// const ConfirmedOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.ConfirmedOrders })));
// const DeliveredOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.DeliveredOrders })));
// const PackagingOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.PackagingOrders })));
// const OutForDeliveryOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.OutForDeliveryOrders })));
// const FailedToDeliverOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.FailedToDeliverOrders })));
// const ReturnedOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.ReturnedOrders })));
// const CanceledOrders = lazy(() => import('./pages/Order/OrderManagementPages.jsx').then(module => ({ default: module.CanceledOrders })));

// const ApprovedRefunds = lazy(() => import('./pages/Refound/RefundRequestPage.jsx').then(module => ({ default: module.ApprovedRefunds })));
// const PendingRefunds = lazy(() => import('./pages/Refound/RefundRequestPage.jsx').then(module => ({ default: module.PendingRefunds })));
// const RefundedRefunds = lazy(() => import('./pages/Refound/RefundRequestPage.jsx').then(module => ({ default: module.RefundedRefunds })));
// const RejectedRefunds = lazy(() => import('./pages/Refound/RefundRequestPage.jsx').then(module => ({ default: module.RejectedRefunds })));

// const InHouseProductPage = lazy(() => import('./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx').then(module => ({ default: module.InHouseProductPage })));
// const VendorPendingProductPage = lazy(() => import('./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx').then(module => ({ default: module.VendorPendingProductPage })));
// const VendorNewRequestProductPage = lazy(() => import('./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx').then(module => ({ default: module.VendorNewRequestProductPage })));
// const VendorApprovedProductPage = lazy(() => import('./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx').then(module => ({ default: module.VendorApprovedProductPage })));
// const VendorDeniedProductPage = lazy(() => import('./pages/In_House_Product/InHouseProductList/ProductManagmentComponent.jsx').then(module => ({ default: module.VendorDeniedProductPage })));

// function AllRoutes() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" />} />
//         <Route path="/businesssetup" element={<BusinessSetup />} />
//         <Route path="/vendernew" element={<VendorNewRequestProductPage />} />
//         <Route path="/venderpendingproduct" element={<VendorPendingProductPage />} />
//         <Route path="/venderapprove" element={<VendorApprovedProductPage />} />
//         <Route path="/pos" element={<POS />} />
//         <Route path="/venderdenied" element={<VendorDeniedProductPage />} />
//         <Route path="/dashboard" element={<WelcomePage />} />
//         <Route path="/allorders" element={<OrderList />} />
//         <Route path="/orderdetail/:id" element={<OrderDeatiels />} />
//         <Route path="/pendingorder" element={<PendingOrders />} />
//         <Route path="/confirmedorder" element={<ConfirmedOrders />} />
//         <Route path="/pendingrefundrequests" element={<PendingRefunds />} />
//         <Route path="/refunddetail/:id" element={<RefundDetails />} />
//         <Route path="/approverefundrequests" element={<ApprovedRefunds />} />
//         <Route path="/refunded" element={<RefundedRefunds />} />
//         <Route path="/rejected" element={<RejectedRefunds />} />
//         <Route path="/refounddetail/:id" element={<RefundDetails />} />
//         <Route path="/productattributes" element={<AttributeSetup />} />
//         <Route path="/addproduct" element={<MainHouseAddProduct />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/subcategories" element={<SubCateggories />} />
//         <Route path="/sub-subcategories" element={<Sub_Sub_Categories />} />
//         <Route path="/addbrand" element={<AddNewBrand />} />
//         <Route path="/bulkimport" element={<BulkImport />} />
//         <Route path="/coupons" element={<Coupon />} />
//         <Route path="/flashdeals" element={<FlashDeals />} />
//         <Route path="/dealoftheday" element={<DealOfTheDay />} />
//         <Route path="/featuredeals" element={<FeatureDeal />} />
//         <Route path="/customerreviews" element={<CustomerReviews />} />
//         <Route path="/customerlist" element={<CustomerList />} />
//         <Route path="/walletmanagement" element={<WalletManagement />} />
//         <Route path="/customerbonussetup" element={<CustomerBonusSetUp />} />
//         <Route path="/customerloyaltyreport" element={<CustomerLoyaltyReport />} />
//         <Route path="/employeerolesetup" element={<EmployeeRoleSetup />} />
//         <Route path="/employeelist" element={<EmployeeList />} />
//         <Route path="/subscriberlist" element={<SubscriberList />} />
//         <Route path="/systemsetup" element={<SystemSetup />} />
//         <Route path="/appsettings" element={<AppSettings />} />
//         <Route path="/systemsettings" element={<SystemSettings />} />
//         <Route path="/loginsettings" element={<LoginSetups />} />
//         <Route path="/theemsetup" element={<TheemSetUp />} />
//         <Route path="/thirdparty" element={<ThirParty />} />
//         <Route path="/otherconfiguration" element={<OtherConfiguration />} />
//         <Route path="/socialmedia" element={<SocialMedia />} />
//         <Route path="/pagesandmedia" element={<PageAndMedia />} />
//         <Route path="/earningreports" element={<EaringReports />} />
//         <Route path="/inhousesales" element={<InHouseSales />} />
//         <Route path="/vendorsales" element={<VendorSales />} />
//         <Route path="/transactionreports" element={<TranscatioReports />} />
//         <Route path="/productreports" element={<ProductReports />} />
//         <Route path="/orderreports" element={<OrderReports />} />
//         <Route path="/pagegallery" element={<PageGallery />} />
//         <Route path="/productgallery" element={<ProductGallery />} />
//         <Route path="/limitedstockproductslist" element={<LimitedStockProductsList />} />
//         <Route path="/inhousebusiness" element={<InHouseBusiness />} />
//         <Route path="/ticket_support" element={<Ticket_Support />} />
//         <Route path="/message" element={<Message />} />
//         <Route path="/brandlist" element={<BrandList />} />
//         <Route path="/bannersetup" element={<BannerSetup />} />
//         <Route path="/pos" element={<POS />} />
//         <Route path="/indexmessage" element={<IndexMessage />} />
//         <Route path="/pushnotify" element={<PuchNotify />} />
//         <Route path="/announcementsetup" element={<AnnouncementSetup />} />
//         <Route path="/sendnotifaction" element={<SendNotifaction />} />
//         <Route path="/addnewdelivery" element={<AddNewDelivery />} />
//         <Route path="/deliverymanlist" element={<DeliveryManList />} />
//         <Route path="/emergencycontact" element={<EmergencyContact />} />
//         <Route path="/withdrawalrequest" element={<WithdrawRequest />} />
//         <Route path="/venderlist" element={<VendorList />} />
//         <Route path="/venderlistdetail" element={<VenderListDetail />} />
//         <Route path="/shopstoredetails" element={<ShopStoreDetails />} />
//         <Route path="/generatebarcode" element={<GenerateBarcode />} />
//         <Route path="/productdetails/:id" element={<ProductDetails />} />
//         <Route path="/bannerupdateform/:id" element={<BannerUpdateForm />} />
//         <Route path="/addbannerform" element={<AddBannerForm />} />
//         <Route path="/couponupdate/:id" element={<CouponUpdate />} />
//         <Route path="/addnewproduct" element={<AddNewProductComponent />} />
//         <Route path="/addflashdealproduct" element={<AddFlashDealProdcut />} />
//         <Route path="/categoryupdate/:id" element={<CategoryUpdate />} />
//         <Route path="/subedit/:id" element={<SubEdit />} />
//         <Route path="/brandupdate/:id" element={<BrandUpdate />} />
//         <Route path="/updateattribute/:id" element={<UpdateAttribute />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default AllRoutes;
