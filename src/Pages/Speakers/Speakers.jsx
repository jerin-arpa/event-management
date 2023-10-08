import { useLoaderData } from "react-router-dom";
import Speaker from "../../Components/Speaker/Speaker";
import { GiChemicalBolt } from 'react-icons/gi';

const Speakers = () => {

    const speakers = useLoaderData();

    return (
        <div className="bg-slate-950">
            <div className="pb-14">
                <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/qrRP7WT/1.png)', backgroundSize: 'cover' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content py-28 md:py-36">
                        <div className="max-w-md lg:max-w-2xl">
                            <div className="text-center lg:w-1/2 mx-auto mb-3">
                                <div className="flex gap-3 justify-center">
                                    <div>
                                        <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-3">Meet Our Team Members</p>
                                </div>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Our Professional <span className="text-amber-600"> Speakers</span></h1>
                            <p className="mb-5 text-white">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                        </div>
                    </div>
                </div>


                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
                        {
                            speakers.map(speaker => <Speaker key={speaker.id} speaker={speaker}></Speaker>)
                        }
                    </div>
                </div>


                <section className="bg-slate-900 py-20 text-white">
                    <div className="container mx-auto px-5">
                        <div className="hero py-44 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/kSmVCC0/10.png)' }}>
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


export default Speakers;
