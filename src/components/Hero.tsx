import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/main.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-cream px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Hotel Label */}
          <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-cream-100">
            LUXURY HOSPITALITY
          </div>

          {/* Main Brand Name */}
          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight tracking-wider">
              VELOURA
            </h1>
          </div>

          {/* Decorative Cross */}
          <div className="flex justify-center py-4 sm:py-6">
            <div className="relative">
              <div className="w-4 sm:w-6 h-[1px] bg-cream/70"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 sm:h-6 bg-cream/70"></div>
            </div>
          </div>

          {/* Tagline */}
          <div className="font-synonym text-xs sm:text-sm tracking-[0.3em] text-cream-100">
            EXCEPTIONAL EXPERIENCES
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-cream"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
