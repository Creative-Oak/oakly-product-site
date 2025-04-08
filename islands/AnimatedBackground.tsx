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
      
      {/* Floating elements - placed above the base gradient */}
      <div class="absolute w-[500px] h-[500px] rounded-full bg-blue-400/40 blur-2xl animate-float-1" />
      <div class="absolute w-[600px] h-[600px] rounded-full bg-indigo-400/40 blur-2xl animate-float-2" />
      <div class="absolute w-[550px] h-[550px] rounded-full bg-purple-400/40 blur-2xl animate-float-3" />
      <div class="absolute w-[450px] h-[450px] rounded-full bg-blue-400/40 blur-2xl animate-float-4" />
      
      {/* Overlay gradients - placed on top */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse-slow" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse-slower" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse-slowest" />
    </div>
  );
} 