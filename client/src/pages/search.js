import React from "react";
import SearchForm from "../components/SearchForm";
import resultContainer from "../components/resultContainer";

function Search() {
    return (
        <div>
            <SearchForm />
            <resultContainer />
        </div>
    );
}

export default Search;