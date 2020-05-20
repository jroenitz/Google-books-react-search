import React from "react";

function SearchForm() {
    return (
        <div>
            <h3>Book Search</h3>
            <form>
                <div className="form-group">
                    <label>Book</label>
                    <imput className="form-control" id="bookImput" placeholder="search books" />
                </div>
                <button type= "submit" className= "btn btn-primary"> Submit</button>
            </form>
        </div>
    );
}

export default SearchForm;