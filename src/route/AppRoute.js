import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';

export class AppRoute extends Component {
  render() {
    return (
     <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={ <HomePage/> } />
          <Route exact path="/login" element={ <UserLoginPage/> } />
          <Route exact path="/contact" element={ <ContactPage/> } />

          <Route exact path="/purchase" element={<PurchasePage/>} />
          <Route exact path="/privacy" element={<PrivacyPage />} />
          <Route exact path="/refund" element={<RefundPage/>} />
          <Route exact path="/about" element={<AboutPage/>} />

          <Route exact path="/productdetails" element={<ProductDetailsPage />} />
          <Route exact path="/notification" element={<NotificationPage />} />
          <Route exact path="/favourite" element={<FavouritePage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
        
      </Router>
     </Fragment>
    )
  }
}

export default AppRoute
