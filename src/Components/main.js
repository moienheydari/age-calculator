import React, { useState } from 'react';
import '../css/main.min.css';

export default function Main() {
    let dateVar;
    const [date, setDate] = useState({
        day: '',
        month: '',
        year: '',
        valid: {
            day: true,
            month: true,
            year: true
        },
        rule: {
            day: true,
            month: true,
            year: true
        }
    });
    const [show, setShow] = useState({
        day: '--',
        month: '--',
        year: '--'
    });
    function setRule(name, bool) {
        setDate((prev) => {
            return {
                ...prev,
                rule: {
                    ...prev.rule,
                    [name]: bool
                }
            }
        })
    }

    function ruleCheck() {
        setDate((prev) => {
            (prev.day < 32 && prev.day > 0) ? setRule('day', true) : setRule('day', false);
            (prev.month < 13 && prev.month > 0) ? setRule('month', true) : setRule('month', false);
            (prev.year < 2024 && prev.year > 0) ? setRule('year', true) : setRule('year', false);
            return prev;
        })
    }

    function handleChange({ target }) {
        const intRegex = /^\d+$/;

        if (!(intRegex.test(target.value) || (target.value === ''))) {
            setDate((prev) => {
                return {
                    ...prev,
                    valid: {
                        ...prev.valid,
                        [target.name]: false
                    }
                }
            })
        } else {
            setDate((prev) => {
                return {
                    ...prev,
                    valid: {
                        ...prev.valid,
                        [target.name]: true
                    }
                }
            })
        }

        setDate((prev) => {
            if (prev.valid[target.name]) {
                return {
                    ...prev,
                    [target.name]: target.value
                }
            } else {
                return prev;
            }
        })

        if (!date.rule[target.name]) {
            ruleCheck();
        }
    }

    function handleClick() {
        ruleCheck();
        setTimeout(() => {
            setDate((prev) => {
                if (Object.values(prev.rule).every(i => { return i; })) {
                    dateVar = new Date(`${date.year}-${(date.month < 10) ? `0${date.month}` : date.month}-${(date.day < 10) ? `0${date.day}` : date.day}`);

                    const curDate = new Date();
                    let dif = curDate.getTime() - dateVar.getTime();
                    dif = Math.floor(dif / (1000 * 60 * 60 * 24)) + 1;
                    let month = Math.floor(dif / 30);
                    let day = dif - (month * 30);
                    let year = Math.floor(month / 12);
                    month = month - (year * 12);
                    setShow({
                        day: day,
                        month: month,
                        year: year
                    })
                }
                return {
                    ...prev,
                    valid: {
                        day: true,
                        month: true,
                        year: true
                    }
                }
            })


        }, 100);
    }



    return (
        <div className='main'>
            <div className='upper'>
                <label>
                    <br />
                    <input
                        name='day'
                        value={date.day}
                        className={`${(date.valid.day && date.rule.day) ? '' : 'number-error'}`}
                        type='text'
                        placeholder='Hi'
                        onChange={handleChange}
                    ></input>
                    <div className={`label ${(date.valid.day && date.rule.day) ? '' : 'errorr'}`}>
                        DAY
                    </div>
                    <div className={`error ${(date.valid.day) ? '' : 'number-error'} ${(date.rule.day) ? '' : 'rule-error'}`}>
                        Must be a valid Day*
                    </div>
                </label>
                <label>
                    <br />
                    <input
                        name='month'
                        value={date.month}
                        className={`${(date.valid.month && date.rule.month) ? '' : 'number-error'}`}
                        type='text'
                        placeholder='Hi'
                        onChange={handleChange}
                    ></input>
                    <div className={`label ${(date.valid.month && date.rule.month) ? '' : 'errorr'}`}>
                        MONTH
                    </div>
                    <div className={`error ${(date.valid.month) ? '' : 'number-error'} ${(date.rule.month) ? '' : 'rule-error'}`}>
                        Must be a valid Month*
                    </div>
                </label>
                <label>
                    <br />
                    <input
                        name='year'
                        value={date.year}
                        className={`${(date.valid.year && date.rule.year) ? '' : 'number-error'}`}
                        type='text'
                        placeholder='Hi'
                        onChange={handleChange}
                    ></input>
                    <div className={`label ${(date.valid.year && date.rule.year) ? '' : 'errorr'}`}>
                        YEAR
                    </div>
                    <div className={`error ${(date.valid.year) ? '' : 'number-error'} ${(date.rule.year) ? '' : 'rule-error'}`}>
                        Must be in the past*
                    </div>
                </label>
            </div>
            <div className='button-cont'>
                <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
                </button>
            </div>
            <div className='lower'>
                <div className='lower-text'>
                    <p><span className='number number1'>{show.year}</span>years</p>
                </div>
                <div className='lower-text'>
                    <p><span className='number number2'>{show.month}</span>months</p>
                </div>
                <div className='lower-text'>
                    <p><span className='number number3'>{show.day}</span>days</p>
                </div>
            </div>
        </div>
    );
}
