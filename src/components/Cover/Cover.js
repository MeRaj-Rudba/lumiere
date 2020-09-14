import React from 'react';
import './Cover.css';


const Cover = () => {
    return (
        <div className='container cover'>
            <div className="card cover-card border-0 row justify-content-around">

                <div className='left-panel d-flex align-items-center w-50'>
                    <div>
                        
                        <h3 className='paragraph'>"There is more treasure in books than in all the pirate’s loot on Treasure Island."</h3>
                        <h3 className='author'>– Walt Disney</h3>
                    </div>
                </div>
                <div className='right-panel w-50'>

                </div>
            </div>

        </div>
    );
};

export default Cover;