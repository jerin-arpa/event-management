import { FaMoneyCheck } from 'react-icons/fa6';
import { MdEventSeat } from 'react-icons/md';
import PropTypes from 'prop-types';

const HomeEvent = ({ event }) => {
    const { image, service_name, description, price, seat } = event;
    return (
        <div className='rounded-xl shadow-xl'>
            <img className='rounded-t-xl w-full h-60' src={image} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl font-bold mb-2'>{service_name}</h2>
                <p>{description}</p>
                <div className='flex justify-between my-6'>
                    <div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <FaMoneyCheck></FaMoneyCheck>
                            </div>
                            <p className='text-xl font-bold'>{price}</p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex items-center text-xl'>
                                <MdEventSeat></MdEventSeat>
                            </div>
                            <p className='text-xl font-bold'>{seat} seats</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className='btn btn-warning text-white'>Show Details</button>
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