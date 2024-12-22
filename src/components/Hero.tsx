import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// TypewriterEffect Component
const TypewriterEffect = ({ texts }: { texts: string[] }) => {
    const [typingText, setTypingText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (currentTextIndex >= texts.length) {
            setCurrentTextIndex(0);
            return;
        }

        let i = 0;
        setIsTyping(true);
        setTypingText('');

        const interval = setInterval(() => {
            setTypingText((prev) => prev + texts[currentTextIndex].charAt(i));
            i += 1;

            if (i === texts[currentTextIndex].length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsTyping(false);
                    setTimeout(() => {
                        setTypingText('');
                        setCurrentTextIndex((prev) => prev + 1);
                    }, 1000);
                }, 1000);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [currentTextIndex, texts]);

    return <span className="inline-block min-h-[90px] text-5xl">{typingText}</span>;
};

// HeroBackground Component
const HeroBackground = () => {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url("public/images/bgimage.png")',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
    );
};

// ScrollIndicator Component
const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
            </div>
        </div>
    );
};

// Hero Component
const Hero = () => {
    const texts = [' YOUR GAME', ' YOUR TIME', ' SEAMLESSLY BOOKED'];

    return (
        <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />

            {/* Add Google Font link in the head of your HTML */}
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <div className="text-2xl sm:text-4xl font-semibold text-white mb-4 animate-fadeInUp">
                    <TypewriterEffect texts={texts} />
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-fadeIn transition-all duration-700">
                    Welcome to <span className="text-yellow-500">Athlon</span>
                </h1>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-200 mb-2 animate-fadeInUp transition-all duration-700"
                       style={{
                           fontFamily: "'Playfair Display', serif",
                           fontWeight: 600
                       }}>
                        ----- Where Sports Meet Simplicity -----
                    </p>

                    <div className="mb-8"></div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp">
                    <button className="group px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            <ScrollIndicator />
        </div>
    );
};

export default Hero;