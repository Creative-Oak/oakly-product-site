import { useEffect, useState } from "preact/hooks";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div class="fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      </div>
    );
  }

  return (
    <div class="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div class="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-60" />
      
      {/* Floating elements - placed above the base gradient, with responsive sizes */}
      <div class="absolute w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full bg-blue-400/40 blur-2xl animate-float-1" />
      <div class="absolute w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] rounded-full bg-indigo-400/40 blur-2xl animate-float-2" />
      <div class="absolute w-[275px] sm:w-[375px] md:w-[550px] h-[275px] sm:h-[375px] md:h-[550px] rounded-full bg-purple-400/40 blur-2xl animate-float-3" />
      <div class="absolute w-[225px] sm:w-[325px] md:w-[450px] h-[225px] sm:h-[325px] md:h-[450px] rounded-full bg-blue-400/40 blur-2xl animate-float-4" />
      
      {/* Overlay gradients - placed on top */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse-slow" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse-slower" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse-slowest" />
    </div>
  );
} 