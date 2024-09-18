import Footer from "@/component/common/footer/Footer";
import Header from "@/component/common/header/Header";
import React from "react";
type Props = {};

function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <section className="main-bg position-class container md pt-24">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
      </section>
      {/* <Footer/> */}
    </div>
  );
}

export default Layout;
