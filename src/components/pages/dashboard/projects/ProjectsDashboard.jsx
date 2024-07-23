import DashboardButton from "../../../common/dashboardButton/DashboardButton";
import "../dashboards.css";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProjectsFormContainer from "./projectsForm/ProjectsFormContainer";

const ProjectsDashboard = ({ data }) => {
  const {
    modalStyle,
    handleOpen,
    handleClose,
    projectsList,
    deleteProject,
    open,
  } = data;

  const buttonData = {
    buttonText: "Agregar proyecto",
    handleClick: handleOpen,
  };
  return (
    <Box>
      <p className="dashboard-section-title">PROYECTOS</p>

      {/* add city*/}
      <DashboardButton data={buttonData} />

      {/* UI mags */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell align="center">Proyecto</TableCell>
              <TableCell align="center">Portada</TableCell>
              <TableCell align="center">Imagen 1</TableCell>
              <TableCell align="center">Imagen 2</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projectsList?.map((proj) => (
              <TableRow
                key={proj.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {proj.title}
                </TableCell>
                <TableCell align="center">
                  <img src={proj.mainImg} style={{ width: "100px" }} />
                </TableCell>
                <TableCell align="center">
                  <img src={proj.img1} style={{ width: "100px" }} />
                </TableCell>
                <TableCell align="center">
                  <img src={proj.img2} style={{ width: "100px" }} />
                </TableCell>

                <TableCell align="center">
                  <IconButton onClick={() => handleOpen(proj)}>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => deleteProject(proj)}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* MODAL */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <ProjectsFormContainer data={data} />
          </Box>
        </Modal>
      </TableContainer>
    </Box>
  );
};

export default ProjectsDashboard;
