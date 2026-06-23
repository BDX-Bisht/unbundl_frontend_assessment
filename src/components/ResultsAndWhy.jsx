import { useState, useEffect } from "react";
import resultsImg from "../assets/results.png";
import chooseImg from "../assets/choose1.webp";
import "./ResultsAndWhy.css";

export default function ResultsAndWhy() {
    const [whyData, setWhyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const resultsData = [
        {
            image: resultsImg,
            caseName: "Teeth Gaps",
            duration: "4 Months",
            age: "22 Years",
        },
        {
            image: resultsImg,
            caseName: "Crowded Teeth",
            duration: "6 Months",
            age: "24 Years",
        },
        {
            image: resultsImg,
            caseName: "Deep Bite",
            duration: "8 Months",
            age: "29 Years",
        },
        {
            image: resultsImg,
            caseName: "Crooked Teeth",
            duration: "5 Months",
            age: "26 Years",
        },
    ];

    const fetchWhyData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_start=10&_limit=4",
            );
            if (!res.ok) throw new Error("Failed to fetch Whistle benefits");
            const data = await res.json();

            // Clean titles and descriptions from API to look premium
            const mappedWhyData = data.map((post, idx) => {
                // Preset beautiful dental headings to map JSONPlaceholder posts to clean content
                const headings = [
                    "Clinic Monitoring",
                    "Zendura FLX Material",
                    "Orthodontist Led",
                    "Flexible Payments",
                ];

                // Capitalize first letter of post title or use mapped headings
                const cleanTitle =
                    headings[idx] ||
                    post.title
                        .split(" ")
                        .slice(0, 3)
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(" ");
                const cleanDesc =
                    post.body.split(".").slice(0, 2).join(".") + ".";

                return {
                    image: chooseImg,
                    title: cleanTitle,
                    description: cleanDesc,
                };
            });
            setWhyData(mappedWhyData);
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWhyData();
    }, []);

    return (
        <section className="whistle-results-why">
            {/* Results Section */}
            <div className="results-section">
                <h2 className="section-title">Real Results, Real Smiles</h2>
                <div className="results-grid">
                    {resultsData.map((item, idx) => (
                        <div key={idx} className="result-card">
                            <div className="result-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.caseName}
                                    className="result-image"
                                />
                            </div>
                            <div className="result-details">
                                <div className="detail-row">
                                    <span className="detail-label">Case:</span>
                                    <span className="detail-value font-bold">
                                        {item.caseName}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">
                                        Duration:
                                    </span>
                                    <span className="detail-value">
                                        {item.duration}
                                    </span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Age:</span>
                                    <span className="detail-value">
                                        {item.age}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Section */}
            <div className="why-section">
                <h2 className="section-title">Why Choose Whistle?</h2>

                {isLoading && (
                    <div className="why-grid">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="why-card skeleton-why-card">
                                <div className="why-image-wrapper skeleton-why-image-wrapper">
                                    <div className="skeleton-why-image animate-pulse"></div>
                                </div>
                                <div className="why-content skeleton-why-content">
                                    <div className="skeleton-why-title animate-pulse"></div>
                                    <div className="skeleton-why-desc-line animate-pulse"></div>
                                    <div className="skeleton-why-desc-line second-line animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="why-error-container">
                        <p className="why-error-text">
                            Failed to load Whistle benefits. Please try again.
                        </p>
                        <button
                            type="button"
                            onClick={fetchWhyData}
                            className="why-retry-btn"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="why-grid">
                        {whyData.map((item, idx) => (
                            <div key={idx} className="why-card">
                                <div className="why-image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="why-image"
                                    />
                                </div>
                                <div className="why-content">
                                    <h3 className="why-card-title">
                                        {item.title}
                                    </h3>
                                    <p className="why-card-description">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
