import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

export default function Home() {
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
                <div class="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-white/20">
                  <div class="flex justify-center items-center h-64 bg-[#edf5f7]/50 rounded-lg mb-4 backdrop-blur-sm border border-white/20">
                    {/* Placeholder for dashboard/product screenshot */}
                    <div class="text-center">
                      <div class="text-6xl text-[#62929E] mb-2">📊</div>
                      <p class="text-gray-500">
                        Carbon dashboard visualization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            class="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8"
          >
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="w-12 h-12 bg-[#edf5f7]/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                  <span class="text-2xl">📏</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Measure</h3>
                <p class="text-gray-600">
                  Measure and analyze the carbon footprint of digital assets,
                  starting with websites.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="w-12 h-12 bg-[#edf5f7]/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                  <span class="text-2xl">💡</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Insights</h3>
                <p class="text-gray-600">
                  Provide actionable insights to reduce emissions through smart
                  optimizations.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="w-12 h-12 bg-[#edf5f7]/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                  <span class="text-2xl">📈</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Track</h3>
                <p class="text-gray-600">
                  Track progress and validate improvements in real-time.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div class="w-12 h-12 bg-[#edf5f7]/50 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                  <span class="text-2xl">🏆</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Certify</h3>
                <p class="text-gray-600">
                  Issue verified sustainability certificates that showcase your
                  brand's environmental commitment.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section
            id="how-it-works"
            class="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white/80 rounded-xl shadow-md backdrop-blur-sm border border-white/20"
          >
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-[#edf5f7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-xl font-bold text-[#62929E]">1</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Connect & Scan</h3>
                <p class="text-gray-600">
                  Connect your digital assets and let Oakly scan their
                  environmental impact.
                </p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-[#edf5f7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-xl font-bold text-[#62929E]">2</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Optimize</h3>
                <p class="text-gray-600">
                  Implement our recommended optimizations to reduce your carbon
                  footprint.
                </p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-[#edf5f7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-xl font-bold text-[#62929E]">3</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">Certify & Share</h3>
                <p class="text-gray-600">
                  Obtain sustainability certifications and share your commitment
                  with your audience.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section
            id="benefits"
            class="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8"
          >
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Oakly
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <h3 class="text-xl font-semibold mb-2">Environmental Impact</h3>
                <p class="text-gray-600">
                  Reduce your digital carbon emissions and contribute to a more
                  sustainable future.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <h3 class="text-xl font-semibold mb-2">Brand Reputation</h3>
                <p class="text-gray-600">
                  Strengthen your brand by demonstrating your commitment to
                  sustainability.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <h3 class="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p class="text-gray-600">
                  Optimized digital assets often require less resources,
                  reducing hosting costs.
                </p>
              </div>
              <div class="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <h3 class="text-xl font-semibold mb-2">
                  Competitive Advantage
                </h3>
                <p class="text-gray-600">
                  Stand out in your industry as a leader in digital
                  sustainability.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section class="max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
            <div class="bg-gradient-to-r from-[#62929E]/90 to-[#517982]/90 text-white rounded-xl p-10 shadow-lg backdrop-blur-sm border border-white/20">
              <h2 class="text-3xl font-bold mb-4">
                Ready to make your digital presence sustainable?
              </h2>
              <p class="text-xl mb-8 max-w-2xl mx-auto">
                Join other forward-thinking companies that are reducing their
                digital carbon footprint with Oakly.
              </p>
              <Button
                variant="cta"
                btnSize="lg"
                href="/signup"
                class="font-semibold px-10 py-4 text-xl shadow-[#517982]/20"
              >
                Start Your Free Trial
              </Button>
              <p class="mt-4 text-sm text-[#edf5f7]">
                No credit card required • 14-day free trial
              </p>
            </div>
          </section>
        </main>

        <footer class="bg-gray-800 text-white py-12">
          <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
              <div>
                <div class="flex items-center mb-4">
                  <img
                    src="/oakly-logo-white.svg"
                    width="30"
                    height="30"
                    alt="Oakly logo"
                    class="mr-2"
                  />
                  <span class="text-xl font-bold font-['Playwrite_US_Modern']">
                    oakly
                  </span>
                </div>
                <p class="text-gray-400">
                  Sustainable digital solutions for a greener tomorrow.
                </p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Product</h3>
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Company</h3>
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">Blog</a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Connect</h3>
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} oakly. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
