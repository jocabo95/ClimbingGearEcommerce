import "./companyInfo.css"
import { Grid, Typography } from "@mui/material"

const CompanyInfo = () => {
  return (
    <>
      <Grid item xs={12} sx={{ mb: "1rem", display:"flex", justifyContent:"center" }}>
        <img src="src\images\logo.PNG" width="150px"/>
      </Grid>
      <Grid item xs={12}>
        <Typography className="footerCompanyText" variant="body2" sx={{ mb: "0.5rem"}}>
          ventasbasaltostudio@gmail.com
        </Typography>
        <Typography className="footerCompanyText" variant="body2" sx={{ mb: "0.5rem"}}>
          basaltostudio@gmail.com
        </Typography>
        <Typography className="footerCompanyText" variant="body2" sx={{ mb: "0.5rem"}} >
          calle 80 # 10 - 43 piso 1 Showroom: piso 1 Oficina: piso 4 con cita
          previa
        </Typography>
      </Grid>
    </>
  );
}

export default CompanyInfo