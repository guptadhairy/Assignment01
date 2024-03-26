import React from 'react';

const Companies = () => {
    return (
        <div style={{ textAlign: "center", height: "42vh", position: "relative" }}>
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}></div>
            <h1 className='text-5xl font-semibold text-center text-white pt-20' style={{ position: "relative", zIndex: 1 }}>Companies</h1>
            <p className='mt-3 font-bold text-sm text-white pt-5' style={{ position: "relative", zIndex: 1 }}>Thousands of prestigious employers for you, search for a recruiter right</p>
            <p className='mt-3 font-bold text-sm text-white ' style={{ position: "relative", zIndex: 1 }}>now.</p>
        </div>
    );
}

export default Companies;
