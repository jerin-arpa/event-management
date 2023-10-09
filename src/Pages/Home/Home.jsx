import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HomeEvent from "../../Components/HomeEvent/HomeEvent";
import { BsStopwatch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiChemicalBolt } from 'react-icons/gi';
import { IoMdCheckmark } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import moment from 'moment';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const events = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            {/* Services section */}
            <section className="container mx-auto my-24 px-5 text-white">
                <div className="text-center lg:w-1/2 mx-auto my-10">
                    <div className="flex gap-3 justify-center">
                        <div>
                            <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                        </div>
                        <p className="mb-3 text-white">Our Services</p>
                    </div>
                    <h1 className="mb-5 text-3xl lg:text-4xl font-bold"><span className="text-amber-600">FestCon</span> Management <span className="text-amber-600">Service</span></h1>
                    <p className="mb-5">Expertly orchestrating events that resonate, creating unforgettable festival experiences. Discover exceptional artists and craft a vibrant festival lineup that hits all the right notes of FestCon Management.</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
                    {
                        events.map(event => <HomeEvent key={event.id} event={event}></HomeEvent>)
                    }
                </div>
            </section>

            {/* program event schedule */}
            <section className="bg-slate-900 py-20 mt-20 text-white text-sm">
                <div className="container mx-auto px-5">
                    <div className="text-center lg:w-1/2 mx-auto mb-14">
                        <div className="flex gap-3 justify-center">
                            <div>
                                <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                            </div>
                            <p className="mb-3 text-white">Event Schedule 2023</p>
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold">Program <span className="text-amber-600">Event</span> Schedule</h1>
                    </div>

                    <div className="flex flex-wrap gap-5 lg:pb-10 pb-5 justify-center">
                        <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">{moment().add(1, 'days').calendar()}</button>

                        <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">{moment().add(2, 'days').calendar()}</button>

                        <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">{moment().add(3, 'days').calendar()}</button>

                        <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">{moment().add(4, 'days').calendar()}</button>

                        <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">{moment().add(5, 'days').calendar()}</button>
                    </div>

                    <hr className="mb-10" />

                    <div>
                        {
                            events.slice(0, 6).map(event => (
                                <div key={event.id} data-aos="zoom-in-up" >
                                    <div className='grid lg:grid-cols-10 gap-10 bg-slate-950 mb-5 p-7 rounded-xl lg:px-10'>
                                        <div className='flex items-center justify-center lg:justify-start col-span-2'>
                                            <h3 className="text-2xl text-amber-600 font-bold">{event.eventName}</h3>
                                        </div>

                                        <div className='flex flex-col col-span-2 items-center justify-center'>
                                            <div className="flex lg:flex-col gap-5 md:gap-14 lg:gap-0">
                                                <div className="flex gap-2 mb-3">
                                                    <BsStopwatch className="text-amber-600 text-2xl"></BsStopwatch>
                                                    <p>{event.time}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <GoLocation className="text-amber-600 text-2xl"></GoLocation>
                                                    <p>{event.place}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-center lg:justify-start col-span-2'>
                                            <p>{event.event_description}</p>
                                        </div>
                                        <div className='flex items-center gap-4 justify-center col-span-2'>
                                            <img className="rounded-full w-20 h-20" src={event.singerImage1} alt="" />
                                            <img className="rounded-full w-20 h-20" src={event.singerImage2} alt="" />
                                        </div>

                                        <div className='flex items-center col-span-2'>
                                            <button className="btn w-full bg-gray-300 text-lg hover:border-0 text-amber-600 font-bold hover:bg-amber-600 border-0 hover:text-white p-1 px-4 rounded-3xl">Buy Ticket</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>


            {/* Purchase Ticket */}
            <section className="bg-slate-950 py-20 text-white text-sm">
                <div className="container mx-auto px-5">
                    <div className="text-center">
                        <div className="flex justify-center gap-3">
                            <div className="flex">
                                <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                            </div>
                            <p className="mb-3 text-xl">Our Events Pricing</p>
                        </div>
                        <h1 className="mb-5 text-3xl lg:text-4xl font-bold"><span className="text-amber-600">Purchase</span> Your <span className="text-amber-600s">Ticket</span></h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 mb-10">
                        {/* Option-1 */}
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="bg-slate-900 py-10 px-5 rounded-lg">
                            <div className="border-b border-dashed">
                                <h2 className="text-center text-xl font-bold mb-5">Basic</h2>
                                <p className="text-center mb-5">$ <span className="text-amber-500"><span className="text-4xl">20</span> /per month</span></p>
                            </div>
                            <div className="flex justify-center my-7">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Access to all keynote</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Workshop</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Eligible for VIP</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Launch Food</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Entertainment</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Full Conference</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Live videos</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Meet Speaker</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-amber-600 border-0 text-white px-10 py-1 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">Buy Ticket</button>
                            </div>
                        </div>

                        {/* Option-2 */}
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="bg-slate-900 py-10 px-5 rounded-lg">
                            <div className="border-b border-dashed">
                                <h2 className="text-center text-xl font-bold mb-5">Standard Plan</h2>
                                <p className="text-center mb-5">$ <span className="text-amber-500"><span className="text-4xl">45</span> /per month</span></p>
                            </div>
                            <div className="flex justify-center my-7">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Access to all keynote</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Workshop</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Eligible for VIP</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Launch Food</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Entertainment</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Full Conference</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Live videos</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Meet Speaker</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-amber-600 border-0 text-white px-10 py-1 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">Buy Ticket</button>
                            </div>
                        </div>

                        {/* Option-3 */}
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="bg-slate-900 py-10 px-5 rounded-lg">
                            <div className="border-b border-dashed">
                                <h2 className="text-center text-xl font-bold mb-5">premium</h2>
                                <p className="text-center mb-5">$ <span className="text-amber-500"><span className="text-4xl">65</span> /per month</span></p>
                            </div>
                            <div className="flex justify-center my-7">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Access to all keynote</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Workshop</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Eligible for VIP</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Launch Food</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Entertainment</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Full Conference</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Live videos</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <RxCrossCircled className="bg-red-600 rounded-full"></RxCrossCircled>
                                        <p>Meet Speaker</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-amber-600 border-0 text-white px-10 py-1 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">Buy Ticket</button>
                            </div>
                        </div>


                        {/* Option-4 */}
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="bg-slate-900 py-10 px-5 rounded-lg">
                            <div className="border-b border-dashed">
                                <h2 className="text-center text-xl font-bold mb-5">Pro Plan</h2>
                                <p className="text-center mb-5">$ <span className="text-amber-500"><span className="text-4xl">85</span> /per month</span></p>
                            </div>
                            <div className="flex justify-center my-7">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Access to all keynote</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Workshop</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Eligible for VIP</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Launch Food</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Entertainment</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Full Conference</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Live videos</p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <IoMdCheckmark className="bg-green-600 rounded-full"></IoMdCheckmark>
                                        <p>Meet Speaker</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button className="bg-amber-600 border-0 text-white px-10 py-1 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">Buy Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Book Seat */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-5">
                    <div className="hero py-44 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/kSmVCC0/10.png)' }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center">
                            <div className="w-4/5 lg:w-full text-white">
                                <div className="flex gap-3 justify-center">
                                    <div>
                                        <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-3 text-white">About The Event</p>
                                </div>
                                <h1 className="mb-5 text-3xl lg:text-4xl font-bold">Have Not Booked Your Seat Yet <br /> Get Ticket Now</h1>
                                <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600 mt-6">Purchase Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;