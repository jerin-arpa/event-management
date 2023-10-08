import { FaMoneyCheck } from 'react-icons/fa6';
import { MdEventSeat } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeEvent = ({ event }) => {
    const { id, image, service_name, description, price, seat } = event;
    return (
        <div className='rounded-xl shadow-xl bg-cyan-950'>
            <img className='rounded-t-xl w-full h-60' src={image} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl font-bold mb-2 text-amber-600'>{service_name}</h2>
                <p >{description}</p>
                <div className='flex justify-between mt-6'>
                    <div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <FaMoneyCheck className='text-amber-600'></FaMoneyCheck>
                            </div>
                            <p className='text-lg'>{price}</p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <MdEventSeat className='text-amber-600'></MdEventSeat>
                            </div>
                            <p className='text-lg'>{seat} seats</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center my-3'>
                        <Link to={`/eventDetails/${id}`}>
                            <button className='btn bg-amber-800 border-0 text-white hover:bg-cyan-800 hover:text-white'>Show Details</button>
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