import React, { useEffect, useState } from "react";

export default function EmployeeForm({ employee, onSave }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        hireDate: "",
        position: "",
        salary: "",
        image: null,
    });

    useEffect(() => {
        if (employee) {
            const formattedHireDate = employee.hireDate
                ? new Date(employee.hireDate).toISOString().slice(0, 10)
                : "";
            setFormData({
                fullName: employee.fullName,
                email: employee.email,
                phoneNumber: employee.phoneNumber,
                hireDate: formattedHireDate,
                position: employee.position,
                salary: employee.salary,
                image: null,
            });
        } else {
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                hireDate: "",
                position: "",
                salary: "",
                image: null,
            });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (e.target.type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        const employeeDetails = {
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            hireDate: formData.hireDate,
            position: formData.position,
            salary: formData.salary,
        };

        if (employee && employee.id) {
            employeeDetails.id = employee.id;
        }

        const jsonEmployee = JSON.stringify(employeeDetails);

        data.append(
            "employee",
            new Blob([jsonEmployee], { type: "application/json" })
        );

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await onSave(data, employee ? employee.id : null);
        } catch (e) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Employee Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            value={formData.fullName}
                            name="fullName"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Phone Number
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            value={formData.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Hire Date</label>
                    <div className="col-sm-10">
                        <input
                            type="date"
                            className="form-control"
                            value={formData.hireDate}
                            name="hireDate"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Position</label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Position</option>
                            <option value="CASHIER">Cashier</option>
                            <option value="MANAGER">Manager</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Salary</label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            value={formData.salary}
                            name="salary"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Profile Image
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        {status === "failed" && (
                            <p className="text-danger">Error: {error}</p>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
