import React from "react";
import Sidenav from "../drawer/Sidenav";
import { Box } from "@mui/material";
import "../leave/Leaves.css";

const Leave = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Sidenav />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="project-box"
        >
          <div className="leave-content-box">
            <table className="table table-hover leave-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Leave Type</th>
                  <th>Number Of Leave Taken</th>
                  <th>Status</th>
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
              </tbody>
            </table>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Leave;
