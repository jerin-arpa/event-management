import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HomeEvent from "../../Components/HomeEvent/HomeEvent";

const Home = () => {

    const events = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            {/* Services section */}
            <section className="container mx-auto mb-10 px-5">
                <div className="text-center lg:w-1/2 mx-auto my-10">
                    <h1 className="mb-5 text-3xl font-bold">FestCon Management Service</h1>
                    <p className="mb-5">Expertly orchestrating events that resonate, creating unforgettable festival experiences. Discover exceptional artists and craft a vibrant festival lineup that hits all the right notes</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        events.map(event => <HomeEvent key={event.id} event={event}></HomeEvent>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;