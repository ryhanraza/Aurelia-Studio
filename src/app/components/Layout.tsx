import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" expand={false} richColors />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
