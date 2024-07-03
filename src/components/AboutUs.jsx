import React from "react";

export default function ({ title, desc }) {
    return (
        <div className="col-md-5">
            <h3 className="title-about-us">{title}</h3>
            <p className="desc-about-us">{desc}</p>
        </div>
    );
}
