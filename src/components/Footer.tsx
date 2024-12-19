import { Instagram, Linkedin, Youtube} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="ml-12">
                        <div className="text-2xl font-bold text-yellow-500 mb-4">Athlon</div>
                        <p className="text-white" >
                            Your ultimate solution for booking sports venues
                            and connecting with players.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 ml-24">Company</h3>
                        <ul className="space-y-3 ml-24">
                            <li><a href="#about" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                            <li><a href="#features" className="hover:text-yellow-500 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-yellow-500 transition-colors">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4 ml-10">Legal</h3>
                        <ul className="space-y-2 ml-10">
                            <li><a href="#privacy" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#cookies" className="hover:text-yellow-500 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">

                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Youtube size={24} />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center ">
                    <p>&copy; {new Date().getFullYear()} Athlon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;