import React from "react";
import "./style.css";

function ResultCard() {
    return (
        <div className="card mb-3 resultCard">
            <div className="row no-gutters">
                <div className="col-md-1">
                    <img src="https://via.placeholder.com/100" className="card-img img-fluid" alt="..." />
                </div>
                <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">Harry Potter's Bookshelf</h5>
                        <p className="card-text"><small className="text-muted">By John Granger</small></p>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>             
                    </div>
                </div>
                <div className="resultBtns">
                    <a href="google.com">View</a><button>Save</button>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;