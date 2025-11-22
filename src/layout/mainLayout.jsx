import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppLayout from "./AppLayout";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 container">
        <AppLayout>
          <Outlet />
        </AppLayout>
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
