import { TableCell, TableRow } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Table, TableContainer, TableHead, Paper } from "@mui/material";

const StaticDataTable = () => {
  const data = [
    {
      id: 1,
      appName: "XX v9",
      envName: "Development",
      connectionStatus: "Connected",
      connectedEnv: "QA",
      endpoint: "http://localhost:5173/",
      isCorrect: false,
    },
    {
      id: 2,
      appName: "XX v5",
      envName: "Staging",
      connectionStatus: "Disconnected",
      connectedEnv: "N/A",
      endpoint: "http://localhost:5173/",
      isCorrect: true,
    },
    {
      id: 3,
      appName: "XX v10",
      envName: "Production",
      connectionStatus: "Connected",
      connectedEnv: "Live",
      endpoint: "http://localhost:5173/",
      isCorrect: true,
    },
  ];

  const getClassByEnvName = (envName) => {
    switch (envName) {
      case "Development":
        return "development";
      case "Staging":
        return "staging";
      case "Production":
        return "production";
      default:
        return "";
    }
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="center-aligned-cell">Id</TableCell>
            <TableCell className="center-aligned-cell">
              Application Name
            </TableCell>
            <TableCell className="center-aligned-cell">
              Environment Name
            </TableCell>
            <TableCell className="center-aligned-cell">
              Connection Status
            </TableCell>
            <TableCell className="center-aligned-cell">Connected Env</TableCell>
            <TableCell className="center-aligned-cell">Endpoint</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="center-aligned-cell">{row.id}</TableCell>
              <TableCell className="center-aligned-cell">
                {row.appName}
              </TableCell>
              <TableCell className="center-aligned-cell">
                <span
                  className={`envNameSpan ${getClassByEnvName(row.envName)}`}
                >
                  {row.envName}
                </span>
              </TableCell>
              <TableCell className="center-aligned-cell">
                {row.isCorrect ? (
                  <CheckIcon color="primary" />
                ) : (
                  <ClearIcon color="error" />
                )}
              </TableCell>
              <TableCell className="center-aligned-cell">
                {row.connectedEnv}
              </TableCell>
              <TableCell className="center-aligned-cell">
                <a href={row.endpoint}>{row.endpoint}</a>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StaticDataTable;
