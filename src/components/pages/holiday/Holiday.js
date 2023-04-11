import React from "react";
import Sidenav from "../drawer/Sidenav";
import { Box } from "@mui/material";
import "../holiday/Holi.css";

const Holiday = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Sidenav />

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="project-box"
        >
          <div className="holiday-content-box">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
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
                  <td colspan="2"></td>
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

export default Holiday;
