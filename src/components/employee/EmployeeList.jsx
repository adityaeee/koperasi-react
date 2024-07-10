import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/features/employeeSlice";

export default function EmployeeList() {
    const { employees } = useSelector((state) => state.employee);
    console.log("🚀 ~ EmployeeList ~ employees:", employees);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <>
            {employees.map((employee) => (
                <div key={employee.id} className="list-group-items">
                    <div className="row align-items-center g-3">
                        <div className="col-md-3 col-lg-2">
                            Name {employee.fullname}
                        </div>
                        <div className="col-md-3 col-lg-2">
                            Email {employee.email}
                        </div>
                        <div className="col-md-3 col-lg-2">
                            Phone {employee.phone}
                        </div>
                        <div className="col-md-3 col-lg-2">
                            Position {employee.position}
                        </div>
                        <div className="col-md-3 col-lg-2">
                            {employee.status ? "Active" : "Inactive"}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
