import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog, hideHog }) => {
    const { name, specialty, weight, greased, "highest medal achieved": medal, image } = hog;
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    // Toggle description visibility
    const toggleDescription = () => {
        setIsDescriptionVisible(prev => !prev);
    };

    return (
        <Card onClick={toggleDescription} style={{ cursor: 'pointer' }}>
            <Card.Content>
                {/* Use a default image if none exists for the hog */}
                <img src={image || 'https://via.placeholder.com/150'} alt={name} />
                <Card.Header>{name}</Card.Header>
                {isDescriptionVisible && (
                    <div className='description'>
                        <p>Specialty: {specialty}</p>
                        <p>Weight: {weight}</p>
                        <p>Greased: {greased ? 'Yes' : 'No'}</p>
                        <p>Highest Medal Achieved: {medal}</p>
                        <button
                            className='ui button red'
                            onClick={(e) => {
                                e.stopPropagation(); // Prevents Card onClick from firing
                                hideHog(name);
                            }}
                        >
                            Hide
                        </button>
                    </div>
                )}
            </Card.Content>
        </Card>
    );
};

export default HogTile;
