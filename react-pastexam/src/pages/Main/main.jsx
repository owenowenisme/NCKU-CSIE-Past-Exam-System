import React, { useEffect } from "react";
import { Sidebar } from "../../conponents/Sidebar/sidebar";
import { MainWrapper } from "./style";
import { Table } from "../../conponents/Table/table";
import { Navbar } from "../../conponents/Navbar/navbar";
import { Box } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
export const Main = () => {
    return (
        <Box sx={{ display: 'flex' }} >
             <Navbar />
                <Sidebar />
            <Table/>
        </Box>
    )
}