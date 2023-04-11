import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenav from "../drawer/Sidenav";
import { Box } from "@mui/material";
import "../task/Task.css";

const Tasklist = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Sidenav />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="project-box"
        >
          <div className="content-box">
            <table className="table table-hover task-tabel">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td></td>
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

export default Tasklist;
