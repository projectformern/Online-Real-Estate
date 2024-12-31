import DashboardHome from "../Components/dashboard/DashboardHome";
import { Routes, Route } from "react-router-dom";
import DashboardLayouts from "../layouts/DashboardLayouts";
import SignIn from "../Pages/dashboard/SignIn";
import SignUp from "../Pages/dashboard/SignUp";
import NotFound from "../Components/dashboard/NotFound";

const DashboardRouter = () => {
  return (
    <DashboardLayouts>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<DashboardHome />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </DashboardLayouts>
  );
};

export default DashboardRouter;
