import React from "react";
import Header from "../../components/header";
import UserDetails from "./components/user_details";
import Tables from "./components/tables";
import Footer from "../../components/footer";

function Home() {
  return (
    <>
      <Header />
      <UserDetails />
      <Tables />
      <Footer />
    </>
  );
}

export default Home;
