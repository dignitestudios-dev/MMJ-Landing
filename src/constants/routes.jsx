import React from "react";
import Layout from "../components/global/Layout";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

export const routes = [
  {
    title: "Home page",
    url: "/",
    page: <Layout children={<Home />} />,
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
