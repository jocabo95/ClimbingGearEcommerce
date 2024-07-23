import { Typography } from "@mui/material";

const PageHeader = ({data}) => {

  const {header} = data;

  return (
    <Typography
      className="page-title"
      sx={{
        fontSize: { xs: "1.5rem", sm: "2rem" },
        fontWeight: "200",
        letterSpacing: { xs: "0.5rem" },
        pl: "0rem",
      }}
    >
      {header}
    </Typography>
  );
}

export default PageHeader