"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<
    Array<{ id: number; left: string; top: string; delay: string }>
  >([]);

  useEffect(() => {
    // Generate random stars for the starfield
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(newStars);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-neutral-900/50 via-background to-background" />

        {/* Starfield */}
        <div className="starfield">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Shooting Star */}
        <div className="shooting-star" style={{ top: "20%", left: "10%" }} />

        {/* Binary Stars */}
        <div className="binary-stars">
          <div className="binary-star binary-star-1" />
          <div className="binary-star binary-star-2" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 font-medium">
              Tandem Technologies
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Enabling seamless collaboration between{" "}
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                humans and AI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Tandem builds intelligent tools and infrastructure that let humans
              and AI work in tandem, streamlining workflows and enhancing
              collaboration across teams.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-background font-semibold rounded-lg
                         hover:bg-neutral-100 transition-all duration-300 ease-out
                         hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              >
                Explore our products
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Our Products Section */}
      <section id="products" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Products
          </h2>

          <div className="max-w-2xl mx-auto">
            <a
              href="https://tana.tandem.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="block card-glow rounded-2xl p-8 md:p-10 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-neutral-100 transition-colors duration-300">
                    Tana
                  </h3>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    Tana is our intelligent voice and workflow agent, designed
                    to streamline operations and enhance the way teams interact
                    with AI.
                  </p>
                  <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">View product</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-neutral-800/50 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-neutral-400">
                © {currentYear} Tandem Technologies. All rights reserved.
              </p>
              <p className="text-xs text-neutral-500">
                Building tools for humans and AI to work in tandem.
              </p>
            </div>

            <div className="flex gap-6 text-xs text-neutral-500">
              <a
                href="#"
                className="hover:text-neutral-300 transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-neutral-300 transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-neutral-300 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
