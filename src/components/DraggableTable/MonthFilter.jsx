import { useEffect, useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentYear = new Date().getFullYear();

export default function MonthFilter() {
    const [open, setOpen] = useState(false);
    const [year, setYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(0);

    return (
        <div className='inline-flex items-center gap-x-5'>
            <section className="relative">
                <button onClick={()=>setOpen(prev=>!prev)} className="m-1 btn btn-sm text-white btn-outline bg-gray-800 rounded">Select Month</button>
                <div className={`p-5 shadow menu absolute z-[1] bg-base-100 w-72 rounded border-2 ${open?'block':'hidden'}`}>

                    <section className='flex justify-between select-none'>
                        <IoMdArrowDropleft onClick={() => setYear(prev => prev - 1)} className='cursor-pointer w-5 h-5 active:scale-95 bg-gray-300 text-gray-900 p-0.5 rounded-full' />
                        <p className='font-bold'>{year}</p>
                        <IoMdArrowDropright onClick={() => setYear(prev => prev + 1)} className='cursor-pointer w-5 h-5 active:scale-95 bg-gray-300 text-gray-900 p-0.5 rounded-full' />
                    </section>

                    <section className='grid grid-cols-4 gap-2 pt-8'>
                        {
                            [...months].map((month, i) => <MonthBlock key={i} month={month} index={i+1} setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />)
                        }
                    </section>

                </div>
            </section>

            {
                selectedMonth?
                <div className='font-medium text-slate-950/40 inline-flex gap-x-1'>
                    <span className='text-slate-950/60'>{`${months[selectedMonth-1]} 16, ${year}`}</span>
                    <span>to</span>
                    <span className='text-slate-950/60'>{`${selectedMonth===12?months[0]:months[selectedMonth]} 15, ${selectedMonth===12?year+1:year}`}</span>
                </div>:''
            }
        </div>
    )
}




function MonthBlock({ month,index, setSelectedMonth, selectedMonth }) {

    return (
        <button onClick={() => setSelectedMonth(prev=>prev===index?0:index)} className={`py-2 rounded border border-slate-950/20 ${selectedMonth === index?'bg-gray-900 text-white':'bg-gray-100'} capitalize`}>
            {month.slice(0, 3)}
        </button>
    )
}