import React from "react"

export const Card = ({
    onClick,
    url,
    buttonText,
}) => {
    return(
        <div className="card">
            <img className="card--img" src={url} />
            <button className="delete-btn" onClick={onClick}>{buttonText}</button>
        </div>
    )
}