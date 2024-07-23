import OrdersDashboard from "./orders/OrdersDashboard";
import PageHeader from "../../common/pageHeader/PageHeader";
import NavigationFilters from "../../common/topNavigationFilters/NavigationFilters";
import ProductsDashboardContainer from "./products/ProductsDashboardContainer";
import ShipmentDashboardContainer from "./shipment/ShipmentDashboardContainer";
import { Box } from "@mui/material";
import MagDashboardContainer from "./magazines/MagDashboardContainer";
import ProjectsDashboardContainer from "./projects/ProjectsDashboardContainer";

const Dashboard = ({data}) => {

  const {modalStyle, categories} = data;



  const header = { header: "DASHBOARD" };

  const navigationCategories = { categories, redirectToUrl: "/dashboard" };

  return (
    <Box sx={{ p: { xs: "1rem", md: "3rem" } }}>
      {/* HEADER */}
      <PageHeader data={header} />

      <NavigationFilters data={navigationCategories} />

      {/* SHIPMENT COST */}
      <ShipmentDashboardContainer data={modalStyle} />

      {/* PRODUCTS CHART */}
      <ProductsDashboardContainer data={modalStyle} />

      {/* MAGAZINES */}
      <MagDashboardContainer data={modalStyle} />

      {/* PROJECTS */}
      <ProjectsDashboardContainer data={modalStyle} />

      {/* ORDERS CHART */}
      <OrdersDashboard />
    </Box>
  );
};

export default Dashboard;
