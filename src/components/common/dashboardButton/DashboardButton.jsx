import { Button } from "@mui/material";
import "../../pages/dashboard/dashboards.css";

const DashboardButton = ({ data }) => {
  const { buttonText, handleClick } = data;
  return (
    <Button
      color="secondary"
      variant="contained"
      type="button"
      onClick={() => handleClick(null)}
      sx={{my:"1rem"}}
    >
      {buttonText}
    </Button>
  );
};

export default DashboardButton;
