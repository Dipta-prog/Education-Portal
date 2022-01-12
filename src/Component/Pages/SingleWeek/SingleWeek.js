import React from 'react';

const SingleWeek = ({ singleWeek }) => {
    return (
        <div>
            <h1>This is single week</h1>
            <p>{singleWeek.id}</p>
            <p>{singleWeek.first_name}</p>
            <p>{singleWeek.last_name}</p>
        </div>
    );
};

export default SingleWeek;