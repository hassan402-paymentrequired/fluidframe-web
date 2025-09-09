import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
