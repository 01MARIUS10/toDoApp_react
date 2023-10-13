export default function Datetime({ datetime }) {

    const [date, time] = datetime.split(' ');

    return (
        <div className="d-flex gap-3">
            <p className="m-0 d-flex align-items-center">
                <img className='icon' src="/icons/icons8-calendar-48.png" alt="" />
                <span>{ date }</span>
            </p>
            <p className="m-0 d-flex align-items-center">
                <img className='icon' src="/icons/icons8-time-64.png" alt="" />
                <span>{ time }</span>
            </p>
        </div>
    )
} 