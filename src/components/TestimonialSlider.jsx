import React, { useRef, useState, useEffect, useCallback } from "react";
import testimonials from "../data/TestimonialData";
import { SliderNavigation, TestimonialCard } from "./index";

const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

const TestimonialSlider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (direction) => {
        let newIndex = currentIndex;

        if (direction === "next") {
            newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
        } else {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
        }

        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.querySelectorAll('.snap-start'));
        if (children.length === 0) return;

        const targetCard = children[currentIndex];
        
        const containerWidth = slider.offsetWidth;
        const targetCardWidth = targetCard.offsetWidth;
        const targetOffsetLeft = targetCard.offsetLeft;

        const scrollPosition = targetOffsetLeft - (containerWidth / 2) + (targetCardWidth / 2);

        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
    }, [currentIndex]);

    const calculateClosestCard = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.querySelectorAll('.snap-start'));
        if (children.length === 0) return;

        const scrollLeft = slider.scrollLeft;
        const containerCenter = scrollLeft + slider.offsetWidth / 2;
        let closestIndex = currentIndex;
        let minDistance = Infinity;

        children.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        
        // Update state HANYA jika indeks yang terdeteksi berbeda
        if (closestIndex !== currentIndex) {
            setCurrentIndex(closestIndex);
        }
    };
    
    const handleManualScroll = useCallback(debounce(calculateClosestCard, 100), [currentIndex]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', handleManualScroll);
        }

        return () => {
            if (slider) {
                slider.removeEventListener('scroll', handleManualScroll);
            }
        };
    }, [handleManualScroll]); 

    return (
        <div className="relative overflow-hidden py-12">
            <h2 className="text-3xl font-poppinsmedium text-center mb-10 text-gray-900">
                Apa Kata Mereka?
            </h2>
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory space-x-4 lg:space-x-8 px-4 sm:px-12 lg:px-20 pb-6"
                style={{
                    WebkitOverflowScrolling: "touch",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {testimonials.map((t, index) => (
                    <div key={t.id} className="pt-2 pb-4 snap-start">
                        <TestimonialCard
                            {...t}
                            isActive={index === currentIndex}
                        />
                    </div>
                ))}
            </div>
            <SliderNavigation
                onPrev={() => handleScroll("prev")}
                onNext={() => handleScroll("next")}
            />
        </div>
    );
};

export default TestimonialSlider;