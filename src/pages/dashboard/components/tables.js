import {
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function Tables() {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "location", label: "Location", minWidth: 100 },
    { id: "deck", label: "Deck", minWidth: 100 },
  ];

  function createData(name, location, deck) {
    return { name, location, deck };
  }

  const rows = [
    createData("AliJ ohnson", "New York, London", "Project Alpha Deck"),
    createData("Abhishek Kasi", "Corbett", "Inhouse & Flybuy"),
    createData("Abhishek Kasi", "North Goa", "Inhouse"),
    createData("Abhishek Kasi", "Egypt", "Inhouse"),
    createData("Anuj Singh Yadav", "Manali", "Inhouse"),
    createData("Anuj Singh Yadav", "Manali", "Coldline & Flybuy"),
    createData("Anuj Singh Yadav", "Sikkim", "Inhouse & Flybuy"),
    createData("Anuj Singh Yadav", "Bangalore", "Inhouse & Flybuy"),
    createData("Rupa Parshuram Nalavade", "Thailand", "Inhouse"),
    createData("Rupa Parshuram Nalavade", "Phuket", "Inhouse"),
    createData("Suleman Ahamad", "Kerala", "Inhouse & Flybuy"),
    createData("Suleman Ahamad", "Munnar", "Inhouse & Flybuy"),
    createData("Suleman Ahamad", "Maldives", "Inhouse"),
    createData("Tarun Sharma", "Udaipur", "Inhouse & Flybuy"),
    createData("Tarun Sharma", "Jaipur", "Inhouse & Flybuy"),
  ];

  return (
    <>
      <Box
        sx={{
          mx: { xs: 2, sm: 3 },
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 2 },
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "calc(50% - 16px)", lg: "900px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              p: 2,
              color: "white",
            }}
          >
            Cluster Managers
          </Typography>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="cluster managers table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        backgroundColor: "#e0e0e0",
                        color: "black",
                        fontWeight: "bold",
                        borderBottom: "2px solid white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper
          sx={{
            py: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: "calc(50% - 16px)", lg: "900px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
            border: "none",
          }}
        >
          <TableContainer>
            <Table aria-label="borderless table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    Leaves Awaiting Approval
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    0
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    Leaves approved
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    0
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    Leaves Rejected
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    0
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    Leaves On Hold
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    0
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    Leaves Cancelled
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      padding: "8px 16px",
                      fontSize: "1rem",
                      color: "text.primary",
                    }}
                  >
                    0
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Box
        sx={{
          mx: { xs: 2, sm: 3 },
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 2 },
        }}
      >
        <Paper
          sx={{
            py: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: "calc(50% - 16px)", lg: "900px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              pb: 1,
              px: 2,
              color: "white",
            }}
          >
            New Trainee
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            1. Aadhar Card
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            2. Covid Vaccination certificate
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            3. Photographs (4)
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            4. Fill up the below form that will require them to give us personal
            details including contact details of two people in case of
            emergencies.
          </Typography>
        </Paper>

        <Paper
          sx={{
            py: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: "calc(50% - 16px)", lg: "900px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              pb: 1,
              px: 2,
              color: "white",
            }}
          >
            After Training Completion (Forms)
          </Typography>
          <Link
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            Employee Details Form
          </Link>
          <Link
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            Joining Documents & Bank Details Form
          </Link>
          <Link
            variant="body1"
            component="div"
            sx={{
              px: 2,
              pb: 1,
              color: "white",
            }}
          >
            Sales App Details for profile creation
          </Link>
        </Paper>
      </Box>
    </>
  );
}

export default Tables;
