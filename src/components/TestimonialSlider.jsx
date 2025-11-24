import React, { useRef, useState, useEffect, useCallback } from "react";
import TestimonialCard from "./TestimonialCard";
import SliderNavigation from "./SliderNavigation";
import testimonials from "./TestimonialData";

// Fungsi utilitas debounce (diletakkan di luar komponen)
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

    // =================================================================
    // LOGIC 1: Handle Tombol Navigasi (Mengubah State Index)
    // =================================================================
    // Tetap hanya mengubah state, Centering ditangani oleh Logic 2
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

    // =================================================================
    // LOGIC 2: Absolute Centering (Menggulir ke posisi tengah)
    // =================================================================
    // Logika ini yang membuat card selalu ke tengah setelah currentIndex berubah
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.querySelectorAll('.snap-start'));
        if (children.length === 0) return;

        const targetCard = children[currentIndex];
        
        const containerWidth = slider.offsetWidth;
        const targetCardWidth = targetCard.offsetWidth;
        const targetOffsetLeft = targetCard.offsetLeft;

        // Perhitungan posisi scroll untuk centering
        const scrollPosition = targetOffsetLeft - (containerWidth / 2) + (targetCardWidth / 2);

        slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
    }, [currentIndex]);

    // =================================================================
    // LOGIC 3 (BARU): Scroll Listener untuk Scroll Manual (Debounced)
    // =================================================================
    const calculateClosestCard = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        const children = Array.from(slider.querySelectorAll('.snap-start'));
        if (children.length === 0) return;

        const scrollLeft = slider.scrollLeft;
        // Hitung pusat container yang sedang terlihat
        const containerCenter = scrollLeft + slider.offsetWidth / 2;

        let closestIndex = currentIndex;
        let minDistance = Infinity;

        // Cari card yang pusatnya paling dekat dengan pusat container
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
    
    // Gunakan useCallback dengan debounce untuk membatasi frekuensi pemanggilan
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
    }, [handleManualScroll]); // Dependensi handleManualScroll memastikan listener terbaru yang digunakan

    return (
        <div className="relative overflow-hidden py-12">
            {/* Judul Bagian */}
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                Apa Kata Mereka?
            </h2>
            {/* Kontainer Slider */}
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory space-x-4 lg:space-x-8 px-4 sm:px-12 lg:px-20 pb-6"
                style={{
                    WebkitOverflowScrolling: "touch",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                }}
            >
                {/* Mapping Data ke Komponen Card */}
                {testimonials.map((t, index) => (
                    <div key={t.id} className="pt-2 pb-4 snap-start">
                        <TestimonialCard
                            {...t}
                            isActive={index === currentIndex}
                        />
                    </div>
                ))}
            </div>
            {/* Komponen Navigasi */}
            <SliderNavigation
                onPrev={() => handleScroll("prev")}
                onNext={() => handleScroll("next")}
            />
        </div>
    );
};

export default TestimonialSlider;