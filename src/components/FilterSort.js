import React from 'react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={greased}
                            onChange={toggleGreased} 
                        />
                        Show Greased
                    </label>
                </div>
                <div className="field">
                    <label>Sort by</label>
                    <select 
                        className="ui dropdown"
                        onChange={(e) => handleSortChange(e.target.value)}
                    >
                        <option value="">Select Sorting</option>
                        <option value="name">Sort by Name</option>
                        <option value="weight">Sort by Weight</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;
