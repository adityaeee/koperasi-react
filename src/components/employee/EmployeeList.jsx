import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteEmployee,
    fetchEmployees,
} from "../../redux/features/employeeSlice";

export default function EmployeeList({ onEdit }) {
    const { employees } = useSelector((state) => state.employee);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id))
            .unwrap()
            .then(() => {
                dispatch(fetchEmployees());
            })
            .catch((error) => console.error("Deletion failed:", error));
    };

    return (
        <div className="list-group" style={{ minHeight: "60vh" }}>
            {employees.map((employee) => (
                <div
                    key={employee.id}
                    className="list-group-item list-group-item-action"
                >
                    <div className="row align-items-center g-3">
                        <div className="col-md-3 col-lg-2 text-truncate">
                            <strong>Name:</strong> {employee.fullName}
                        </div>
                        <div className="col-md-3 col-lg-2 text-truncate">
                            <strong>Email:</strong> {employee.email}
                        </div>
                        <div className="col-md-3 col-lg-2 text-truncate">
                            <strong>Phone:</strong> {employee.phoneNumber}
                        </div>
                        <div className="col-md-3 col-lg-2 text-truncate">
                            <strong>Position:</strong> {employee.position}
                        </div>
                        <div className="col-md-3 col-lg-2 text-truncate">
                            <strong>Status:</strong>{" "}
                            {employee.status ? "Active" : "Inactive"}
                        </div>
                        <div className="col-md-6 col-lg-2 text-center">
                            <button
                                className="btn btn-info btn-sm badge"
                                onClick={() => onEdit(employee)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm ms-2 badge"
                                onClick={() => handleDelete(employee.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
