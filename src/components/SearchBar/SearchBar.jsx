import React from "react";
import useForm from "../UseForm/UseForm";

const SearchBar = ({ onFormSubmit}) => {
    const [term, setTerm] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
