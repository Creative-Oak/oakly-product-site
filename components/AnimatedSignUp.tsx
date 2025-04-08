
import { useState } from "preact/hooks";

export default function AnimatedSignUp() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div class="relative flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          placeholder="Enter your email"
          class="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          class="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isSubmitting ? (
            <span class="flex items-center gap-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Join the Waitlist"
          )}
        </button>
      </div>
    </form>
  );
} 