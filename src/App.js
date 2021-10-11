import React from "react";
import "./App.css";
import TopNav from "./topNav/topNav";
import MainNav from "./mainNav/nav";
import Hero from "./hero/hero";
import Partners from "./partners/parterns";
import RecentPost from "./RecentPost/recentPost";
import Footer from "./footer/footer";
import Grid from "./grid/grid";
import AboutUs from "./aboutUs/aboutUs";
import Testimonial from "./testimonial/testimonial";
import SubSides from "./subsides/subsides";
import ItaAcademia from "./ita-academia/itaAcademia";
import ItaRCenter from "./itaRCenter/itaRcenter";
import ItaKalewal from "./itaKalewal/itaKalewal";
import PointOfSale from "./products/pointOfSale";
import SchoolMis from "./products/SchoolMis";
import CurrencyMis from "./products/CurrencyMis";
import HajjUmrahMis from "./products/HajjUmrahMis";
import REstateSoft from "./products/REstateSoft";
import Services from "./Services/services";
import DomainHosting from "./Services/DomainHosting";
import DigitalMarketing from "./Services/DigitalMarketing";
import WebDevelopment from "./Services/WebDevelopment";
import MobileAppDevelopment from "./Services/MobAppDev";
import GraphicsDesigning from "./Services/graphicsDesigning";
import SoftwareDevelopment from "./Services/SoftwareDev";
import EBussiness from "./Services/E-bussiness";
import ContentWriting from "./Services/contentWriting";
import FYPIdeas from "./Services/FypIdeas";
import PlayStore from "./playStore/playStore";
import PrivacyPolicy from "./playStore/privacyPolicy";
import NotFound from "./notFound/notFound";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";
import Contact from "./contact/contact";
import Training from "./contact/training";
import Job from "./contact/job";
import InternShip from "./contact/internship";
function App() {
  return (
    <div className="App">
      <ScrollUpButton />
      <TopNav />
      <MainNav />
      <Switch>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/ourTeam">
          <Grid />
        </Route>
        <Route path="/testimonials">
          <Testimonial />
        </Route>
        <Route path="/subSides">
          <SubSides />
        </Route>
        <Route path="/itaAcedamia">
          <ItaAcademia />
        </Route>
        <Route path="/itaRcenter">
          <ItaRCenter />
        </Route>
        <Route path="/itaKalewal">
          <ItaKalewal />
        </Route>

        <Route path="/products">
          <PointOfSale />
        </Route>
        <Route path="/currencyMis">
          <CurrencyMis />
        </Route>
        <Route path="/hajjUmrahMis">
          <HajjUmrahMis />
        </Route>
        <Route path="/pointOfSale">
          <PointOfSale />
        </Route>
        <Route path="/REstateMis">
          <REstateSoft />
        </Route>
        <Route path="/schoolMis">
          <SchoolMis />
        </Route>

        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contentWriting">
          <ContentWriting />
        </Route>
        <Route path="/digitalMarketing">
          <DigitalMarketing />
        </Route>
        <Route path="/domainHosting">
          <DomainHosting />
        </Route>
        <Route path="/E-bussiness">
          <EBussiness />
        </Route>
        <Route path="/fypIdeas">
          <FYPIdeas />
        </Route>
        <Route path="/graphicsDesinging">
          <GraphicsDesigning />
        </Route>
        <Route path="/mobile-app-dev">
          <MobileAppDevelopment />
        </Route>
        <Route path="/software-dev">
          <SoftwareDevelopment />
        </Route>
        <Route path="/webDevelopment">
          <WebDevelopment />
        </Route>

        <Route path="/playStore">
          <PlayStore />
        </Route>
        <Route path="/privacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/apply-for-training">
          <Training />
        </Route>
        <Route path="/apply-for-jobs">
          <Job />{" "}
        </Route>
        <Route path="/internship-in-peshawar-software-house">
          <InternShip />
        </Route>
        <Route path="/home">
          <Hero />
          <Partners />
          <RecentPost />
        </Route>
        <Route
          path="/not-found"
          component={NotFound}
        />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
