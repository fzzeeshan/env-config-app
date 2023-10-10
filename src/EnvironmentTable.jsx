import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./style.css";

const tableData = [
  {
    envName: "xxx-sit",
    "env-properties": {
      xxv5: "fff",
      int: "fff",
      mmm: "311",
      "xver-ccc": "ccc",
      "xver-aaa": "act",
      con: "fff",
    },
  },
  {
    envName: "xxx-uat",
    "env-properties": {
      xxv5: "fff",
      int: "fff",
      mmm: "217",
      "xver-ccc": "ccc",
      "xver-aaa": "act",
      con: "fff",
    },
  },
];

const EnvPropertiesTable = () => {
  const [openRows, setOpenRows] = useState([]);

  const toggleRow = (index) => {
    if (openRows.includes(index)) {
      setOpenRows(openRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setOpenRows([...openRows, index]);
    }
  };

  return (
    <div>
      {tableData.map((row, index) => (
        <div key={index} className="property-container">
          <div
            className={`bold-key ${
              openRows.includes(index) ? "table-row-border-bottom" : ""
            }`}
          >
            <IconButton size="small" onClick={() => toggleRow(index)}>
              {openRows.includes(index) ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
            {row.envName}
          </div>
          <Collapse in={openRows.includes(index)} timeout="auto" unmountOnExit>
            <Box margin={1} className="key-value-container">
              {row["env-properties"] &&
                Object.entries(row["env-properties"]).map(([key, value]) => (
                  <div key={key} className="key-value-pair">
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      color={"orangered"}
                    >
                      {key}:
                    </Typography>
                    <Typography variant="body2">{value}</Typography>
                  </div>
                ))}
            </Box>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default EnvPropertiesTable;
