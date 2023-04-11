import React from "react";
import Sidenav from "../drawer/Sidenav";
import { Box } from "@mui/material";
import "../project/Project.css";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useState } from "react";
// import $ from jQuery

const Projectlist = () => {
  const [project, setProject] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const addProject = () => {
    setProject(true);
  };
  const closeproject = () => {
    setProject(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Sidenav />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="project-box"
        >
          <div className="pro-content-box">
            {/* .............................Add Project Button........................................ */}
            <Button
              id="btn-add-project"
              variant="contained"
              endIcon={<AddCircleIcon />}
              onClick={addProject}
            >
              Add Project
            </Button>
            {/* ..........................Add Project Start......................... */}
            <Dialog
              className="dialog-box"
              fullScreen={fullScreen}
              open={project}
              onClose={closeproject}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Add Project
              </DialogTitle>
              <span>
                <DialogActions>
                  <Button
                    onClick={closeproject}
                    variant="contained"
                    endIcon={<BackspaceIcon />}
                  >
                    cancel
                  </Button>
                </DialogActions>
              </span>
              <DialogContent>
                <DialogContentText>
                  <form id="add-project-form">
                    <label id="">Name</label>
                    <br />
                    <br />
                    <input type="text" placeholder="Enter Project Name" />
                    <br />
                    <br />
                    <label>Member</label>
                    <br />
                    <br />
                    <input type="text" placeholder="Enter Project Member" />
                    <br />
                    <br />
                    <Button variant="contained" endIcon={<PlaylistAddIcon />}>
                      Add
                    </Button>
                  </form>
                </DialogContentText>
              </DialogContent>
            </Dialog>
            {/* ........................Table Start.................................... */}

            <table class="table table-hover project-tabel">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Projectlist;
