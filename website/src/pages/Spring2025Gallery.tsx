import hackathonGallery from "../data/HackathonGallery.json";
import '../styles/Global.css'; 
import '../styles/Hackathon.css';
import { useEffect, useState } from "react";


const HackathonGallery = () => {
    return (
        <>
        <Gallery />
        </>
    );
};

type HackathonImages = {
    "hackathon_image": string
}

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === 'ArrowRight') {
            setSelectedIndex((prev) => prev !== null ? (prev + 1) % hackathonGallery.length : null);
        } else if (e.key === 'ArrowLeft') {
            setSelectedIndex((prev) => prev !== null ? (prev - 1 + hackathonGallery.length) % hackathonGallery.length : null);
        } else if (e.key === 'Escape') {
            setSelectedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <section className="hackathon-gallery-section section-purple">
            <h2 className="hackathon-gallery-h2 page-h2 color-green"> ₊˚✧ ━━━━⊱ Harmony Hackathon Gallery ⊰━━━━ ✧₊˚ </h2>

            <div className="hackathon-guide-content-div">
                <div className="hackathon-gallery-container">
                    {hackathonGallery.map((member: HackathonImages, index: number) => (
                        <div className="img-box" key={index}>
                            <img
                                className="hackathon-gallery-img"
                                src={member.hackathon_image || "/assets/temp.png"}
                                onClick={() => setSelectedIndex(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
                    <img
                        src={hackathonGallery[selectedIndex].hackathon_image || "/assets/temp.png"}
                        alt="Enlarged"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};


export default HackathonGallery;