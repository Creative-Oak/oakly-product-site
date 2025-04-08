export default function AnimatedBackground() {
  return (
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] animate-gradient-shift" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse-slow" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.1)_0%,transparent_50%)] animate-pulse-slower" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse-slowest" />
      
      {/* Floating elements */}
      <div class="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-float-1" />
      <div class="absolute w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-float-2" />
      <div class="absolute w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float-3" />
      <div class="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-float-4" />
    </div>
  );
} 