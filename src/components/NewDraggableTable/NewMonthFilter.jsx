import { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import style from './styles/monthFilter.module.css';



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentYear = new Date().getFullYear();

export default function NewMonthFilter() {
    const [year, setYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(0);

    return (
        <div className='d-inline-flex align-items-center' style={{ gap: '0 1.25rem' }}>

            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Select Month
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className={style.dropdown_box}>
                        <section className='d-flex justify-content-between'>
                            <IoMdArrowDropleft onClick={() => setYear(prev => prev - 1)} className={style.arrow_btn} />
                            <p className='font-weight-bold'>{year}</p>
                            <IoMdArrowDropright onClick={() => setYear(prev => prev + 1)} className={style.arrow_btn} />
                        </section>

                        <section className={style.months_container}>
                            {
                                [...months].map((month, i) => <MonthBlock key={i} month={month} index={i + 1} setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />)
                            }
                        </section>
                    </div>
                </Dropdown.Menu>
            </Dropdown>

            {
                selectedMonth ?
                    <div className='text-secondary d-inline-flex' style={{ gap: '0 0.5rem' }}>
                        <span className='text-dark'>{`${months[selectedMonth - 1]} 16, ${year}`}</span>
                        <span>to</span>
                        <span className='text-dark'>{`${selectedMonth === 12 ? months[0] : months[selectedMonth]} 15, ${selectedMonth === 12 ? year + 1 : year}`}</span>
                    </div> : ''
            }
        </div>
    )
}




function MonthBlock({ month, index, setSelectedMonth, selectedMonth }) {

    return (
        <Button variant={`${selectedMonth === index?'primary':'light'}`} onClick={() => setSelectedMonth(prev => prev === index ? 0 : index)}>
            {month.slice(0, 3)}
        </Button>
    )
}