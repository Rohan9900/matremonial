import React from 'react';

export default function Loader() {
    return (
        <div className="loaderComp">
            <marquee direction="right" truespeed="15" scrolldelay="15">
                <div className='loader'></div>
            </marquee>
        </div>
    );
}
