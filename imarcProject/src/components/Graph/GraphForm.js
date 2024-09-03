import React, { useState } from "react";
import { Stack, Typography, Button, TextField, Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LineChart from "../Chart/LineChart";
import dayjs from "dayjs";
import "./GraphForm.css";

const style = {
  fields: { width: "30vw", mr: "20px", mt: "10px" },
  dataFields: { width: "30vw", mr: "20px", mt: "8px" },
};

const sampleData = [
  { date: "2024-08-01", price: 100 },
  { date: "2024-08-02", price: 150 },
  { date: "2024-08-03", price: 125 },
  { date: "2024-08-04", price: 175 },
  { date: "2024-08-05", price: 200 },
];

const GraphForm = () => {
  const [graphHeader, setGraphHeader] = useState({
    productName: "",
    discription: "",
  });
  const [value, setValue] = useState(dayjs(""));
  const [value2, setValue2] = useState(dayjs(""));

  const handleChange = (e) => {
    e.preventDefault();
    setGraphHeader({ ...graphHeader, [e.target.name]: e.target.value });
  };

  return (
    <Stack className="graph-form-model">
      <Stack className="graph-btn-box">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Market Product Price Trends</Typography>
          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "40px",
              textTransform: "capitalize",
              background: "#040440",
              "&:hover": {
                background: "#040440",
              },
            }}
            // onClick={handleLogin}
          >
            Add Changes
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <TextField
            sx={style.fields}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            value={graphHeader.productName}
            name="productName"
            size="small"
            onChange={handleChange}
          />
          <TextField
            sx={style.fields}
            size="small"
            id="outlined-basic"
            label="Discription"
            variant="outlined"
            value={graphHeader.discription}
            name="discription"
            onChange={handleChange}
          />
        </Stack>
      </Stack>

      <Stack className="graph-btn-box">
        <Stack direction="row" alignItems="center">
          <TextField
            sx={style.dataFields}
            size="small"
            id="outlined-basic"
            label="Name Price"
            variant="outlined"
            type="number"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px", // Adjust this value to your desired height
                    overflow: "hidden",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Box className="add-btn-box">
            <AddIcon sx={{ color: "white", cursor: "pointer" }} />
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center">
          <TextField
            sx={style.dataFields}
            size="small"
            id="outlined-basic"
            label="Name Price"
            variant="outlined"
            type="number"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Date"
                value={value2}
                onChange={(newValue) => setValue2(newValue)}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px", // Adjust this value to your desired height
                    overflow: "hidden",
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Box className="remove-btn-box">
            <RemoveIcon sx={{ color: "white", cursor: "pointer" }} />
          </Box>
        </Stack>
      </Stack>

      {/* ...........................graph */}
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <LineChart data={sampleData} />
        <LineChart data={sampleData} />
      </Stack>
    </Stack>
  );
};

export default GraphForm;
