import React, { useState } from 'react';

const InnovativePropertyCard = ({
  mainImage = "/api/placeholder/600/400",
  virtualTour = "/api/placeholder/300/200",
  title = "The Floating Gardens Residence",
  price = "$2,850,000",
  location = "Silicon Valley, CA",
  specs = {
    area: "3,200",
    beds: 4,
    baths: 3,
    eco: "A+",
    smart: 95
  },
  sustainability = 85,
  energy = 92,
  tags = ["Zero Carbon", "Smart Home", "Vertical Garden"]
}) => {
  const [activeSection, setActiveSection] = useState('main');

  return (
    <div className="relative h-[600px] w-full max-w-4xl perspective-1000">
      <div className={`relative h-full w-full transition-all duration-700 ${activeSection === 'specs' ? 'rotate-y-180' : ''
        }`}>
        {/* Front Face */}
        <div className="absolute h-full w-full">
          {/* Main Content Container with Split Design */}
          <div className="group grid h-full grid-cols-12 gap-0 overflow-hidden rounded-2xl bg-white shadow-Custom">
            {/* Left Column - 7 columns */}
            <div className="relative col-span-7 overflow-hidden">
              {/* Main Image with Parallax Effect */}
              <div className="h-full w-full transform transition-transform duration-700 group-hover:scale-105">
                <img
                  src={mainImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
                {/* Floating Price Tag */}
                <div className="absolute bottom-8 -right-12 rotate-90 transform">
                  <div className="flex items-center gap-2 rounded-lg bg-dark px-6 py-3">
                    <span className="font-heading text-2xl text-white">{price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 5 columns */}
            <div className="relative col-span-5 p-6">
              {/* Virtual Tour Preview */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={virtualTour}
                  alt="Virtual Tour"
                  className="h-40 w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <button className="rounded-full bg-white px-4 py-2 font-primary text-sm font-medium text-dark">
                    Start Virtual Tour
                  </button>
                </div>
              </div>

              {/* Title and Location */}
              <h2 className="mb-4 font-heading text-2xl text-dark">{title}</h2>
              <div className="mb-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-secondary p-2">
                  <svg className="text-dark" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="font-description text-gray-600">{location}</span>
              </div>

              {/* Circular Progress Indicators */}
              <div className="mb-6 flex justify-around">
                <div className="relative h-20 w-20">
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#17191b"
                      strokeWidth="3"
                      strokeDasharray={`${sustainability}, 100`}
                    />
                    <text x="18" y="20.35" className="font-primary text-3xl" textAnchor="middle">
                      {sustainability}%
                    </text>
                  </svg>
                  <span className="mt-2 block text-center font-primary text-xs">Sustainability</span>
                </div>
                <div className="relative h-20 w-20">
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#17191b"
                      strokeWidth="3"
                      strokeDasharray={`${energy}, 100`}
                    />
                    <text x="18" y="20.35" className="font-primary text-3xl" textAnchor="middle">
                      {energy}%
                    </text>
                  </svg>
                  <span className="mt-2 block text-center font-primary text-xs">Energy Score</span>
                </div>
              </div>

              {/* Tags with Animated Borders */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-full bg-secondary p-[1px]"
                  >
                    <div className="relative z-10 rounded-full bg-white px-4 py-1">
                      <span className="font-primary text-sm text-dark">{tag}</span>
                    </div>
                    <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-dark via-secondary to-dark" />
                  </div>
                ))}
              </div>

              {/* Flip Button */}
              <button
                onClick={() => setActiveSection('specs')}
                className="absolute bottom-6 right-6 rounded-full bg-dark p-3 text-white transition-transform hover:scale-110"
              >
                <svg className="h-6 w-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back Face (Specs) */}
        <div className="absolute h-full w-full rotate-y-180 transform">
          <div className="h-full w-full rounded-2xl bg-white p-8 shadow-Custom">
            <div className="grid h-full grid-cols-2 gap-8">
              {/* Property Specifications */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl text-dark">Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between rounded-lg bg-secondary p-4">
                      <span className="font-primary text-sm capitalize text-gray-600">{key}</span>
                      <span className="font-primary text-lg font-bold text-dark">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive 3D Model Placeholder */}
              <div className="relative rounded-lg bg-grid-pattern bg-grid-size">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-primary text-gray-500">3D Model Viewer</span>
                </div>
              </div>
            </div>

            {/* Flip Back Button */}
            <button
              onClick={() => setActiveSection('main')}
              className="absolute bottom-6 right-6 rounded-full bg-dark p-3 text-white transition-transform hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativePropertyCard;