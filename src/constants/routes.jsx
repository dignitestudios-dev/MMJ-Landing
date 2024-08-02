import React, { lazy } from "react";
import Layout from "../components/global/Layout";
import ContactPage from "../pages/ContactPage";
const Home = lazy(() => import("../pages/Home"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));

export const routes = [
  {
    title: "Home page",
    url: "/",
    page: <Layout children={<Home />} />,
  },
  {
    title: "Contact page",
    url: "/contact",
    page: <ContactPage />,
  },
  {
    title: "Privacy Policy Page",
    url: "/privacy-policy",
    page: <Layout children={<PrivacyPolicy />} />,
  },
  {
    title: "Terms and Conditions page",
    url: "/terms-and-conditions",
    page: <Layout children={<TermsAndConditions />} />,
  },
];
