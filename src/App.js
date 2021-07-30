import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import ProductPage from "./pages/Courses/productpage/ProductPage";
import Message from "./components/message/Message";
import MessageMobile from "./components/message/MessageMobile";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import CartDrawer from "./components/drawer/CartDrawer";
import Cart from "./pages/cart/Cart";
import Hiring from "./pages/hiring/Hiring";
import Blog from "./pages/blog/Blog";
import BlogSearch from "./pages/blog/BlogSearch";
import BlogPage from "./pages/blog/blogpage/BlogPage";
import BlogSearchHome from "./pages/blog/BlogSearchHome";
import Certification from "./pages/certification/Certification";
import AlumniTeam from "./pages/alumniteam/AlumniTeam";
import Forum from "./pages/forum/Forum";
import ForumSearch from "./pages/forum/forumsearch/ForumSearch";
import ForumSearchEmpty from "./pages/forum/forumsearch/ForumSearchEmpty";
import Hackathon from "./pages/hackathon/Hackathon";
import MemberShip from "./pages/membership/MemberShip";
import CampusProgram from "./pages/campus_program/CampusProgram";
import Mentorship from "./pages/mentorship/Mentorship";
import SocialMedia from "./pages/social_media/SocialMedia";
import Testimonials from "./pages/testimonials/Testimonials";
import ContactUs from "./pages/contact_us/ContactUs";
import Complaints from "./pages/complaints/Complaints";
import SearchResults from "./pages/search_results/SearchResults";
import Entrepreneurship from "./pages/entrepreneurship/Entrepreneurship";
import DigitalMarketing from "./pages/digital_marketing/DigitalMarketing";
import ProductManagement from "./pages/product_management/ProductManagement";
import Checkout from "./pages/checkout/Checkout";
import Buy from "./pages/Courses/productpage/buy/Buy";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CartDrawer />
        <Navbar />
        <Home />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/courses">
        <CartDrawer />
        <Navbar />
        <Courses />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/product-page/:slug">
        <CartDrawer />
        <Navbar />
        <ProductPage />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/cart">
        <CartDrawer />
        <Navbar />
        <Cart />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/hiring">
        <CartDrawer />
        <Navbar />
        <Hiring />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/blog">
        <CartDrawer />
        <Navbar />
        <Blog />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/blog/search/:slug">
        <CartDrawer />
        <Navbar />
        <BlogSearch />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/blog/search">
        <CartDrawer />
        <Navbar />
        <BlogSearchHome />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/post/:slug">
        <CartDrawer />
        <Navbar />
        <BlogPage />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/certification">
        <CartDrawer />
        <Navbar />
        <Certification />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/alumni-team">
        <CartDrawer />
        <Navbar />
        <AlumniTeam />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/forum">
        <CartDrawer />
        <Navbar />
        <Forum />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/forum/search">
        <CartDrawer />
        <Navbar />
        <ForumSearchEmpty />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/forum/search/:slug">
        <CartDrawer />
        <Navbar />
        <ForumSearch />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/hackathon">
        <CartDrawer />
        <Navbar />
        <Hackathon />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/membership-registration">
        <CartDrawer />
        <Navbar />
        <MemberShip />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/campus-ambassador-program">
        <CartDrawer />
        <Navbar />
        <CampusProgram />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/mentorship">
        <CartDrawer />
        <Navbar />
        <Mentorship />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/social-media">
        <CartDrawer />
        <Navbar />
        <SocialMedia />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/testimonials">
        <CartDrawer />
        <Navbar />
        <Testimonials />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/contact-us">
        <CartDrawer />
        <Navbar />
        <ContactUs />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/complaints">
        <CartDrawer />
        <Navbar />
        <Complaints />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/search-results/:slug">
        <CartDrawer />
        <Navbar />
        <SearchResults />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/entrepreneurship">
        <CartDrawer />
        <Navbar />
        <Entrepreneurship />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/digital-marketing">
        <CartDrawer />
        <Navbar />
        <DigitalMarketing />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/product-management">
        <CartDrawer />
        <Navbar />
        <ProductManagement />
        <Message />
        <ScrollUp />
        <MessageMobile />
        <Login />
        <Footer />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
        <Login />
      </Route>
      <Route exact path="/buy/:slug">
        <Buy />
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
