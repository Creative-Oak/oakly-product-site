import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slowest': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-up-delayed': 'fadeInUp 1s ease-out 0.5s both',
        'float-1': 'float1 15s ease-in-out infinite',
        'float-2': 'float2 18s ease-in-out infinite',
        'float-3': 'float3 20s ease-in-out infinite',
        'float-4': 'float4 22s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -40px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-40px, 40px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(60px, 30px)' },
        },
        float4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, -20px)' },
        },
      },
    },
  },
} satisfies Config;
