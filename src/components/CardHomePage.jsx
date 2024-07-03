import React from "react";

export default function ({ title, desc, buttonText }) {
    return (
        <div className="card">
            <div className="content">
                <h2 className="titles">{title}</h2>
                <p className="copy">{desc}</p>
                <button className="card__btn">{buttonText}</button>
            </div>
        </div>
    );
}
