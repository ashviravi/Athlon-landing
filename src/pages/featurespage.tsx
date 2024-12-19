import React from 'react';
import {
    Calendar,
    Users,
    MapPin,
    Sun,
    CreditCard,
    MessageSquare,

} from 'lucide-react';

const featurespage = () => {
    const features = [
        {
            icon: <Calendar color="#3B82F6" size={48} />,
            title: "Real-Time Booking System",
            description: "View live court availability and make instant bookings across multiple locations. No more double bookings or scheduling conflicts.",
            image: "/src/pages/realtiime.jpg"
        },
        {
            icon: <Users color="#10B981" size={48} />,
            title: "Group Booking & Cost Splitting",
            description: "Plan group activities and split costs easily among participants. Perfect for team sports and casual games with friends.",
            image: "/src/pages/costsplit.jpg"
        },
        {
            icon: <MapPin color="#F43F5E" size={48} />,
            title: "Interactive 3D Facility Maps",
            description: "Explore sports facilities through interactive 3D maps. Check court layouts, amenities, and specific equipment before booking.",
            image: "/src/pages/3DMAP.jpg"
        },
        {
            icon: <Sun color="#8B5CF6" size={48} />,
            title: "Weather-Based Recommendations",
            description: "Get smart suggestions for indoor or outdoor activities based on real-time weather conditions.",
            image: "/src/pages/weather.jpg"
        }
    ];

    const additionalFeatures = [
        {
            icon: <Search color="#3B82F6" size={36} />,
            title: "AI-Powered Search",
            description: "Advanced search functionality that understands natural language queries for finding the perfect facility"
        },
        {
            icon: <CreditCard color="#10B981" size={36} />,
            title: "Flexible Payments",
            description: "Support for both online payments and cash options, with secure transaction processing"
        },
        {
            icon: <MessageSquare color="#F43F5E" size={36} />,
            title: "AI Chatbot Support",
            description: "Instant assistance for bookings, availability checks, and facility information"
        },
        {
            icon: <Trophy color="#8B5CF6" size={36} />,
            title: "Equipment Rentals",
            description: "Book sports equipment along with your court reservation"
        }
    ];

    return (
        <div className="bg-white text-gray-900 pt-20">
            {/* Hero Section */}
            <section className="relative bg-blue-950 text-white py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6 text-yellow-500">Transform Your Sports Experience</h1>
                    <p className="text-xl max-w-3xl mx-auto mb-12">
                        Book sports facilities instantly, connect with players, and elevate your game with Athlon.
                    </p>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="transform transition-all duration-300 hover:rotate-12">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold ml-4">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6">{feature.description}</p>
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="rounded-lg w-full h-64 object-cover transition-all duration-300 hover:opacity-90"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Smart Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="transform transition-all duration-300 hover:rotate-12">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-950 text-white py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sports Experience?</h2>
                    <p className="text-xl mb-12">
                        Join thousands of sports enthusiasts who are going toAthlon to book courts and connect with players.
                    </p>
                    <button className="bg-white text-purple-700 px-12 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default featurespage;