import React from 'react';


function Header({today, nextHandleClick, todayHandleClick, prevHandleClick}) {




    return (
        <div className='d-flex flex-row justify-content-between p-1'>
            <div className='d-flex gap-3'>
                <span className='fw-bold fs-5'>{today.format("MMMM")}</span>
                <span className='fw-bold fs-5'>{today.format("YYYY")}</span>
            </div>

            <div className='btn-group d-flex gap-2'>
                <button onClick={prevHandleClick} className="btn bg-light">&lt;</button>
                <button onClick={todayHandleClick} className='btn bg-light'>Today</button>
                <button onClick={nextHandleClick} className='btn bg-light'>&gt;</button>
            </div>
        </div>
    );
}

export default Header;