import { Head } from "$fresh/runtime.ts";
import AnimatedBackground from "../islands/AnimatedBackground.tsx";
import AnimatedSignUp from "../islands/AnimatedSignUp.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oakly | Coming Soon</title>
        <meta name="description" content="Measure and reduce your digital carbon footprint with Oakly" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatedBackground />
      <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 relative">
        <div class="max-w-2xl w-full text-center space-y-6 md:space-y-8">
          <div class="space-y-3 md:space-y-4">
            <div class="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 md:mb-6 animate-fade-in">
              <img
                src="/oakly-logo-white.svg"
                alt="Oakly Logo"
                class="w-12 sm:w-14 md:w-16 h-auto"
              />
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                oakly
              </h1>
            </div>
            <div class="space-y-3 md:space-y-4 animate-fade-in-up">
              <p class="text-xl sm:text-2xl font-medium text-white/90">
                Measure and reduce your digital carbon footprint
              </p>
              <p class="text-base sm:text-lg md:text-xl text-white/80">
                We're building a powerful platform to help businesses measure, analyze, and reduce their digital carbon emissions. Get verified sustainability certifications to strengthen your brand's environmental impact.
              </p>
              <p class="text-base sm:text-lg md:text-xl text-white/80">
                Follow our development journey on LinkedIn or join our waitlist to be among the first to experience Oakly when we launch.
              </p>
            </div>
          </div>
          
          <div class="space-y-4 md:space-y-6">
            <div class="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/company/oakly-digital/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/90 hover:text-white transition-colors duration-300 hover:scale-105 transform"
              >
                LinkedIn
              </a>
            </div>
            
            <div class="animate-fade-in-up-delayed">
              <AnimatedSignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
