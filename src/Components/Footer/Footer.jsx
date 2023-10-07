const Footer = () => {
    return (
        <div className="bg-slate-950 text-white py-20">
            <footer className="footer p-10 container mx-auto px-5">
                <aside>

                    <p><span className="text-xl">FestCon Management</span><br />Providing reliable tech since 2021</p>
                </aside>
                <nav>
                    <header className="uppercase text-xl text-gray-500 font-bold">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-gray-500 font-bold">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Festival</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-gray-500 font-bold">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="uppercase text-xl text-gray-500 font-bold">Explore</header>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
            </footer>


            <div className="container mx-auto px-5">
                <p className="text-center text-sm mt-8">Copyright © 2023 - All right reserved by Ismat Jerin</p>
            </div>
        </div>
    );
};

export default Footer;