import PropTypes from 'prop-types';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';



const Speaker = ({ speaker }) => {
    const { name, image, position } = speaker;
    return (
        <div className='relative'>
            <div className='absolute top-5 right-5'>
                <BsFacebook className='bg-amber-600 text-white rounded-full text-4xl mb-4'></BsFacebook>
                <BsLinkedin className='bg-amber-600 text-white rounded-full text-4xl mb-4'></BsLinkedin>
                <AiFillTwitterCircle className='bg-amber-600 text-white rounded-full text-4xl mb-4'></AiFillTwitterCircle>
            </div>
            <img className='w-full h-[420px] md:h-[420px] rounded-2xl' src={image} alt="" />
            <div className='flex justify-center'>
                <div className='absolute bottom-5 bg-white bg-opacity-30 text-white font-bold rounded-2xl w-11/12 p-2 py-5'>
                    <h2 className='text-2xl text-center mb-2'>{name}</h2>
                    <p className='text-lg text-center'>{position}</p>
                </div>
            </div>
        </div>
    );
};

Speaker.propTypes = {
    speaker: PropTypes.object,
};

export default Speaker;