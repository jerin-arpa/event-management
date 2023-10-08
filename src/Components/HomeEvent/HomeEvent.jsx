import { FaMoneyCheck } from 'react-icons/fa6';
import { MdEventSeat } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeEvent = ({ event }) => {
    const { id, image, service_name, description, price, seat } = event;
    return (
        <div className='rounded-xl shadow-xl bg-slate-900 text-white'>
            <img className='rounded-t-xl w-full h-56' src={image} alt="" />
            <div className='p-5'>
                <div className='h-16'>
                    <h2 className='text-xl font-bold mb-2 text-amber-600'>{service_name}</h2>
                </div>
                <p className='text-xs mb-2'>{description}</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <FaMoneyCheck className='text-amber-600'></FaMoneyCheck>
                            </div>
                            <p className='text-sm'>{price}</p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <MdEventSeat className='text-amber-600'></MdEventSeat>
                            </div>
                            <p className='text-sm'>{seat}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-3'>
                        <Link to={`/eventDetails/${id}`}>
                            <button className='p-2 px-3 rounded-md bg-amber-600 border-0 text-white hover:bg-white hover:text-amber-600 text-sm'>Show Details</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

HomeEvent.propTypes = {
    event: PropTypes.object,
};

export default HomeEvent;