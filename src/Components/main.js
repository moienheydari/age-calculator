import React from 'react';
import '../css/main.min.css';

export default function Main () {
    return (
        <div className='main'>
            <div className='upper'>
            <label>
                DAY
                <input type='text'>

                </input>
            </label>
            <label>
                MONTH
                <input type='text'>

                </input>
            </label>
            <label>
                YEAR
                <input type='text'>

                </input>
            </label>
            </div>
            <button>
                Cl!
            </button>
            <div className='lower'>
                <span>_ _</span> <span>years</span> <br/>
                <span>_ _</span> <span>months</span> <br/>
                <span>_ _</span> <span>days</span> <br/>
            </div>
        </div>
    );
}