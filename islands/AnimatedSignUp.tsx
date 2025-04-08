import { useState } from "preact/hooks";

export default function AnimatedSignUp() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe. Please try again later.");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "An unexpected error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="w-full max-w-md mx-auto">
      <div class="flex flex-col gap-3 sm:gap-4">
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            placeholder="Your email address"
            class="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-all duration-300 w-full"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            class="px-6 sm:px-8 py-3 sm:py-4 bg-white text-zinc-700 rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Join Waitlist"}
          </button>
        </div>
        
        {status === "success" && (
          <p class="text-green-400 text-sm">
            Thanks! We'll be in touch soon.
          </p>
        )}
        
        {status === "error" && (
          <p class="text-red-400 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
} 