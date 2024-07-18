import React, { useEffect, useState } from "react";
import EmployeeList from "../components/employee/EmployeeList";
import Modal from "react-modal";
import EmployeeForm from "../components/employee/EmployeeForm";
import {
    updateEmployee,
    createEmployee,
    fetchEmployees,
} from "../redux/features/employeeSlice";
import { useDispatch } from "react-redux";

export default function Employee() {
    const [modalIsOpen, setModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentEmployee(null);
    };

    const handleCreate = () => {
        setCurrentEmployee(null);
        openModal();
    };

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
        openModal();
    };

    const handleSave = async (data, id) => {
        try {
            const action = id ? updateEmployee(data) : createEmployee(data);
            await dispatch(action).unwrap();
            closeModal();
            dispatch(fetchEmployees());
        } catch (e) {
            console.error("error when saving", e);
        }
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "750px",
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1100, // Higher than typical navbar z-index
        },
    };

    return (
        <div style={{ marginTop: "120px" }} className="container">
            <div className="row">
                <div className="col md-5">
                    <h1>Employee Management</h1>
                </div>
                <div className="col md-5">
                    <button
                        className="btn btn-primary mb-3"
                        onClick={handleCreate}
                    >
                        Create New Employee
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <EmployeeList onEdit={handleEdit} />
                </div>
            </div>
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Employee Form"
            >
                <button
                    type="button"
                    class-name="btn-close"
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        border: "none",
                        background: "none",
                    }}
                    onClick={closeModal}
                    aria-label="Close"
                >
                    <span
                        aria-hidden="true"
                        style={{ color: "red", fontSize: "1.5em" }}
                    >
                        &times;
                    </span>
                </button>
                <EmployeeForm onSave={handleSave} employee={currentEmployee} />
            </Modal>
        </div>
    );
}
