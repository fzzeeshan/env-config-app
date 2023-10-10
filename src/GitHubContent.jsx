import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import config from "./configs/config.json";

const GitHubContent = () => {
  const [fileContent, setFileContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubFile = async () => {
      try {
        const { endpoint, token, owner, repo, filepath } = config;
        const gitHubURL = `${endpoint}/repos/${owner}/${repo}/contents/${filepath}`;
        //"https://api.github.com/repos/fzzeeshan/basic-react-app/contents/src/sample.properties"
        const response = await axios.get(gitHubURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const decodedContent = atob(response.data.content); // Decode base64 content
        const lines = decodedContent.split("\n"); // Split content into lines

        // Parse key-value pairs from each line
        const parsedContent = lines.map((line, index) => {
          const [key, value] = line.split("=");
          return { id: index + 1, key, value };
        });

        setFileContent(parsedContent);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub file:", error);
        setLoading(false);
      }
    };

    fetchGitHubFile();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fileContent.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.key}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GitHubContent;
