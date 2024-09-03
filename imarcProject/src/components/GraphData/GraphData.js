import React from "react";
import LineChart2 from "../Chart/LineChart2";
import "./GraphData.css";
import { Stack, Box, Typography } from "@mui/material";

const sampleData = [
  { date: "2024-08-01", price: 100 },
  { date: "2024-08-02", price: 150 },
  { date: "2024-08-03", price: 125 },
  { date: "2024-08-04", price: 175 },
  { date: "2024-08-05", price: 200 },
];

const cardValue = [
  { change: "%W-o-W Change", text1: "NA", text2: "NA" },
  { change: "%M-o-M Change", text1: "13.61%", text2: "1470.00" },
  { change: "%Q-o-Q Change", text1: "27.48%", text2: "1310.00" },
];

const GraphData = () => {
  return (
    <Stack direction="row" className="graph-data-model">
      <Stack className="graph-data-box">
      <LineChart2 data={sampleData} />
      </Stack>
      <Stack className="graph-data-data-box">
        <Box className="total-data-card">
          <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: "600" }}>
            1770.00
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "12px", color: "rgb(141, 139, 139)" }}
          >
            USD/MT
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "12px", color: "rgb(141, 139, 139)" }}
          >
            INDONESIA
          </Typography>
        </Box>

        <Box className="total-data-time">
          {cardValue.map((data) => {
            return (
              <Box className="list-card-data">
                <Typography
                  variant="h5"
                  sx={{ fontSize: "12px", color: "rgb(141, 139, 139)" }}
                >
                  {data.change}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "24px", fontWeight: "500" }}
                  >
                    {data.text1}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "12px", ml: "40px" }}
                  >
                    {data.text2}
                  </Typography>
                </Stack>
                <Box className="data-line"></Box>
              </Box>
            );
          })}
          {/* <Box className="list-card-data">
            <Typography
              variant="h5"
              sx={{ fontSize: "12px", color: "rgb(141, 139, 139)" }}
            >
              %W-o-W Change
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "24px", fontWeight: "500" }}
              >
                NA
              </Typography>
              <Typography variant="h5" sx={{ fontSize: "12px", ml: "40px" }}>
                NA
              </Typography>
            </Stack>
            <Box className="data-line"></Box>
          </Box> */}
        </Box>
      </Stack>
    </Stack>
  );
};

export default GraphData;
