import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function MainSite() {
  return (
    <>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossorigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+US+Modern:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div class="min-h-screen bg-gradient-to-b from-[#edf5f7] to-white">
        {/* Hero Section */}
        <header class="max-w-[1400px] mx-auto pt-8 px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img
                src="/oakly-logo-bluegreen.svg"
                width="40"
                height="40"
                alt="Oakly logo"
                class="mr-3"
              />
              <span class="text-2xl font-bold text-[#62929E] font-['Playwrite_US_Modern']">
                oakly
              </span>
            </div>
            <nav class="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                class="flex items-center text-gray-600 hover:text-[#62929E] hover:underline decoration-2 underline-offset-4 transition-all"
              >
                <img src="/eco-icon.svg" class="w-4 h-4 mr-1" />
                <span>Features</span>
              </a>
              <a
                href="#how-it-works"
                class="flex items-center text-gray-600 hover:text-[#62929E] hover:underline decoration-2 underline-offset-4 transition-all"
              >
                <img src="/eco-icon.svg" class="w-4 h-4 mr-1" />
                <span>How It Works</span>
              </a>
              <a
                href="#benefits"
                class="flex items-center text-gray-600 hover:text-[#62929E] hover:underline decoration-2 underline-offset-4 transition-all"
              >
                <img src="/eco-icon.svg" class="w-4 h-4 mr-1" />
                <span>Benefits</span>
              </a>
            </nav>
            <Button
              variant="primary"
              btnSize="sm"
              href="/signup"
              class="hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section class="max-w-[1400px] mx-auto px-4 py-20 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
              <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Measure, Reduce, and Report Your Digital Carbon Footprint
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Oakly helps businesses strengthen brand value through verified
                  sustainability certifications.
                </p>
                <div class="flex space-x-4">
                  <Button
                    variant="primary"
                    btnSize="lg"
                    href="/signup"
                    class="hover:scale-105 shadow-[#62929E]/10 font-medium"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="secondary"
                    btnSize="lg"
                    href="#how-it-works"
                    class="hover:scale-105 font-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div class="md:w-1/2">
                <img
                  src="/hero-image.svg"
                  alt="Digital carbon footprint visualization"
                  class="w-full h-auto"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 