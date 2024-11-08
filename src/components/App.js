import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile"; // Import HogTile component
import FilterSort from "./FilterSort"; // Import FilterSort component
import AddHogForm from "./AddHogForm"; // Import AddHogForm component
import hogsData from "../porkers_data"; // Import hog data
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS

function App() {
    const [hogs, setHogs] = useState(hogsData); // State for hogs
    const [greased, setGreased] = useState(false); // State for greased filter
    const [sortBy, setSortBy] = useState(""); // State for sorting
    const [hiddenHogs, setHiddenHogs] = useState(new Set()); // State for hidden hogs

    // Function to filter greased hogs
    const toggleGreased = () => {
        setGreased((prev) => !prev);
    };

    // Function to sort hogs
    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
    };

    // Function to add a new hog
    const addHog = (newHog) => {
        setHogs((prevHogs) => [...prevHogs, newHog]);
    };

    // Function to hide a hog
    const hideHog = (hogName) => {
        setHiddenHogs((prevHiddenHogs) => new Set(prevHiddenHogs).add(hogName));
    };

    // Filter and sort hogs based on state, excluding hidden hogs
    const filteredHogs = hogs
        .filter((hog) => (greased ? hog.greased : true))
        .filter((hog) => !hiddenHogs.has(hog.name)) // Exclude hidden hogs
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "weight") return a.weight - b.weight;
            return 0;
        });

    return (
        <div className="App">
            <Nav />
            <FilterSort 
                greased={greased}
                toggleGreased={toggleGreased}
                handleSortChange={handleSortChange}
            />
            <AddHogForm addHog={addHog} />
            <div className="ui grid container">
                {filteredHogs.map((hog) => (
                    <div className="ui eight wide column" key={hog.name}>
                        {/* Use Semantic UI Card component for each hog */}
                        <div className="ui card">
                            <div className="image">
                                <img src={hog.image} alt={hog.name} />
                            </div>
                            <div className="content">
                                <h3 className="header">{hog.name}</h3>
                                <div className="description">
                                    <p><strong>Specialty:</strong> {hog.specialty}</p>
                                    <p><strong>Weight:</strong> {hog.weight}</p>
                                    <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
                                    <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                            <div className="extra content">
                                <button 
                                    className="ui button"
                                    onClick={() => hideHog(hog.name)}
                                >
                                    Hide Hog
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
