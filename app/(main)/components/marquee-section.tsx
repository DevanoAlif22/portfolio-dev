// app/(main)/components/marquee-section.tsx
import React from "react";

interface MarqueeProps {
  text?: string;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  variant?: "primary" | "secondary" | "accent";
}

const MarqueeSection: React.FC<MarqueeProps> = ({
  text = "Web Developer • UI/UX Designer • Frontend Specialist • React Expert • Next.js Developer",
  speed = "normal",
  direction = "left",
  variant = "primary",
}) => {
  const getAnimationClass = () => {
    if (direction === "right") {
      switch (speed) {
        case "slow":
          return "animate-marquee-reverse-slow";
        case "fast":
          return "animate-marquee-reverse-fast";
        default:
          return "animate-marquee-reverse";
      }
    } else {
      switch (speed) {
        case "slow":
          return "animate-marquee-slow";
        case "fast":
          return "animate-marquee-fast";
        default:
          return "animate-marquee";
      }
    }
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200",
    accent: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white",
  };

  return (
    <div className={`relative overflow-hidden py-4 ${variantClasses[variant]}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className={`whitespace-nowrap ${getAnimationClass()}`}>
        <span className="text-lg md:text-xl font-medium tracking-wider">
          {Array(8).fill(text).join(" • ")}
        </span>
      </div>
    </div>
  );
};

export default MarqueeSection;
