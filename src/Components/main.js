import React from 'react';
import '../css/main.min.css';

export default function Main() {
    return (
        <div className='main'>
            <div className='upper'>
                <label>
                    <br />
                    <input type='text' placeholder='Hi'>

                    </input>
                    <div className='label'>
                        DAY
                    </div>
                </label>
                <label>
                    <br />
                    <input type='text' placeholder='Hi'>

                    </input>
                    <div className='label'>
                        MONTH
                    </div>
                </label>
                <label>
                    <br />
                    <input type='text' placeholder='Hi'>

                    </input>
                    <div className='label'>
                        YEAR
                    </div>
                </label>
            </div>
            <div className='button-cont'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
                </button>
            </div>
            <div className='lower'>
                <div className='lower-text'>
                    <p><span className='number number1'>--</span>years</p>
                </div>
                <div className='lower-text'>
                    <p><span className='number number2'>--</span>months</p>
                </div>
                <div className='lower-text'>
                    <p><span className='number number3'>--</span>days</p>
                </div>
            </div>
        </div>
    );
}