import React from "react";
import EmployeeList from "../components/employee/EmployeeList";

export default function Employee() {
    return (
        <div style={{ marginTop: "140px", marginBottom: "40px" }}>
            <h1>Employee List</h1>
            <EmployeeList />
        </div>
    );
}
