import React from 'react';


function Header({currentYear, currentMouth}) {




    return (
        <div className='d-flex flex-row justify-content-between p-1'>
            <div className='d-flex gap-3'>
                <span className='fw-bold fs-5'>{currentMouth}</span>
                <span className='fw-bold fs-5'>{currentYear}</span>
            </div>

            <div>
                <button>&lt;</button>
                <button>Today</button>
                <button>&gt;</button>
            </div>
        </div>
    );
}

export default Header;