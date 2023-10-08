import { GiChemicalBolt } from 'react-icons/gi';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/7.png';
import image8 from '../../assets/images/8.png';
import image9 from '../../assets/images/9.png';
import image10 from '../../assets/images/10.png';
import image11 from '../../assets/images/11.png';
import image12 from '../../assets/images/12.png';


const Gallery = () => {
    return (
        <div className="bg-slate-950">
            <div>
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/MkJ7Scn/2.png)', backgroundSize: 'cover' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-28">
                        <div className="max-w-md lg:max-w-2xl">
                            <div className="text-center lg:w-1/2 mx-auto mb-3">
                                <div className="flex gap-3 justify-center">
                                    <div>
                                        <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-3">Recent Photo Gallery</p>
                                </div>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Check Our <span className="text-amber-600">Latest Photos</span></h1>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='container mx-auto px-5 py-20'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image1} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image2} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image3} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image4} alt="" />
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image5} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image6} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image7} alt="" />
                            <img className='border-2 lg:col-span-4 w-full h-64 rounded-2xl' src={image8} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image10} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image9} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image11} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-4 w-full h-64 rounded-2xl' src={image6} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image12} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image1} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image2} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image3} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image4} alt="" />
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image5} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image6} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image7} alt="" />
                            <img className='border-2 lg:col-span-4 w-full h-64 rounded-2xl' src={image8} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image10} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image9} alt="" />
                            <img className='border-2 md:col-span-2 lg:col-span-2 w-full h-64 rounded-2xl' src={image11} alt="" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 mb-7'>
                            <img className='border-2 lg:col-span-4 w-full h-64 rounded-2xl' src={image6} alt="" />
                            <img className='border-2 lg:col-span-3 w-full h-64 rounded-2xl' src={image12} alt="" />
                        </div>
                    </div>
                </div>


                <section className="bg-slate-900 py-20 text-white">
                    <div className="container mx-auto px-5">
                        <div className="hero py-44 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/JxcQ1sf/enjoying-great-concert.jpg)' }}>
                            <div className="hero-overlay bg-opacity-70"></div>
                            <div className="hero-content text-center">
                                <div className="w-2/3 lg:w-full text-white">
                                    <div className="flex gap-3 justify-center">
                                        <div>
                                            <GiChemicalBolt className="text-2xl text-amber-500"></GiChemicalBolt>
                                        </div>
                                        <p className="mb-3 text-xl">About the Event</p>
                                    </div>
                                    <h1 className="mb-5 text-3xl lg:text-4xl">Have Not Booked Your Seat Yet <br /> Get Ticket Now</h1>
                                    <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600 mt-6">Purchase Ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;