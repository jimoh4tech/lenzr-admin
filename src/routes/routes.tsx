import { Layout } from "@/layout/layout";
import { ForgetPasswordPage } from "@/pages/auth/forget-password";
import { LoginPage } from "@/pages/auth/login";
import { ResetPasswordPage } from "@/pages/auth/reset-password";
import { Dashboard } from "@/pages/dashboard";
import NotFoundPage from "@/pages/not-found";
import { Orders } from "@/pages/orders";
import { Payments } from "@/pages/payments";
import { Products } from "@/pages/products";
import { Reports } from "@/pages/reports";
import { Settings } from "@/pages/settings";
import { Users } from "@/pages/users";
import { Route, Routes } from "react-router-dom";

// const CurrentUserProviderWrapper = () => (
//   <CurrentUserProvider>
//     <Layout />
//   </CurrentUserProvider>
// );

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          //   <CurrentUserProvider>
          //   </CurrentUserProvider>
          <LoginPage />
        }
      />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      {/* NOTE:element={<CurrentUserProviderWrapper />} */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
