import React from 'react'
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css'


const ResultsContainer = ({ suggestedNames }) => {
    const suggestedJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });
    return <div className="results-container">{suggestedJsx}</div>
}

export default ResultsContainer
