import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HomeEvent from "../../Components/HomeEvent/HomeEvent";
import { BsStopwatch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { GiChemicalBolt } from 'react-icons/gi';
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
            <section className="container mx-auto my-24 px-5">
                <div className="text-center lg:w-1/2 mx-auto my-10">
                    <h1 className="mb-5 text-4xl font-bold">FestCon Management Service</h1>
                    <p className="mb-5">Expertly orchestrating events that resonate, creating unforgettable festival experiences. Discover exceptional artists and craft a vibrant festival lineup that hits all the right notes</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        events.map(event => <HomeEvent key={event.id} event={event}></HomeEvent>)
                    }
                </div>
            </section>

            {/* program event schedule */}
            <section className="bg-slate-900 py-20 mt-20">
                <div className="container mx-auto px-5">
                    <div className="text-center lg:w-1/2 mx-auto mb-14">
                        <div className="flex gap-3 justify-center">
                            <div>
                                <GiChemicalBolt className="text-2xl text-amber-500"></GiChemicalBolt>
                            </div>
                            <p className="mb-3">Event Schedule 2023</p>
                        </div>
                        <h1 className="text-4xl font-bold">Program <span className="text-amber-600">Event</span> Schedule</h1>
                    </div>

                    <div className="flex flex-wrap gap-5 lg:pb-10 pb-5 justify-center">
                        <button className="btn bg-cyan-800 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-cyan-800">{moment().add(1, 'days').calendar()}</button>

                        <button className="btn bg-cyan-800 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-cyan-800">{moment().add(2, 'days').calendar()}</button>

                        <button className="btn bg-cyan-800 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-cyan-800">{moment().add(3, 'days').calendar()}</button>

                        <button className="btn bg-cyan-800 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-cyan-800">{moment().add(4, 'days').calendar()}</button>

                        <button className="btn bg-cyan-800 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-cyan-800">{moment().add(5, 'days').calendar()}</button>
                    </div>

                    <hr className="mb-10" />

                    <div>
                        {
                            events.slice(0, 6).map(event => (
                                <div key={event.id} data-aos="zoom-in-up" >
                                    <div className='grid lg:grid-cols-10 gap-10 bg-slate-950 mb-5 p-7 rounded-xl lg:px-10'>
                                        <div className='flex items-center justify-center lg:justify-start col-span-2'>
                                            <h3 className="text-2xl text-amber-600">{event.eventName}</h3>
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
                                            <button className="btn w-full bg-amber-800 border-0 text-white p-1 px-4 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600">Buy Ticket</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;