import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const style = {
  fields: { width: "30vw", mr: "20px", mt: "10px" },
  dataFields: { width: "30vw", mr: "20px", mt: "8px" },
  viewBtn: {
    fontSize: "12px",
    fontWeight: "300",
    fontFamily: "Inter, sans-serif",
    mr: "4px",
    textTransform: "capitalize",
    background: "#040440",
    "&:hover": {
      background: "#040440",
    },
  },
};

const LineChart = ({ data }) => {
  const navigate = useNavigate();
  const chartData = {
    labels: data.map((item) => item.date), // X-axis labels (dates)
    datasets: [
      {
        label: "Price",
        data: data.map((item) => item.price), // Y-axis data (prices)
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Price Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <Stack width="40vw" height="50vh" className="graph-form-chart-model">
      <Stack direction="row" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={style.viewBtn}
          startIcon={<VisibilityIcon />}
          onClick={() => navigate("/graphData")}
        >
          View
        </Button>
        <Box className="delete-box">
          <DeleteIcon sx={{ fontSize: "20px", color: "white" }} />
        </Box>
      </Stack>
      <Stack className="graph-header">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography
              variant="h7"
              sx={{ color: "#040440", fontWeight: "600" }}
            >
              Crude Palm oil
            </Typography>
            <Typography
              variant="h8"
              sx={{
                color: "rgb(141, 139, 139)",
                fontWeight: "600",
                mt: "4px",
                fontSize: "12px",
              }}
            >
              Crude Palm oil|USD/MT|Indonesia
            </Typography>
          </Stack>
          <Stack direction="row">
            <AddCircleOutlineIcon
              sx={{ color: "rgb(141, 139, 139)", mr: "4px" }}
            />
            <RemoveCircleOutlineIcon
              sx={{ color: "rgb(141, 139, 139)", mr: "4px" }}
            />
            <MenuIcon sx={{ color: "rgb(141, 139, 139)", mr: "4px" }} />
          </Stack>
        </Stack>
        <Line data={chartData} options={options} />
      </Stack>
    </Stack>
  );
};

export default LineChart;
