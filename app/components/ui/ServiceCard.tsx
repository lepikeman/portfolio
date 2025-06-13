import Link from "next/link";
import { ServiceData } from "@/types";
import { cn } from "@/lib/utils";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { trackEvent } from "../GoogleAnalytics";

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  priceRange,
  popularBadge = false,
  serviceSlug,
  color = "from-blue-500 to-blue-600",
}: ServiceData) {
  return (
    <div
      className={cn(
        "relative bg-gray-900/50 backdrop-blur-sm border rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group",
        popularBadge ? "border-blue-500/30" : "border-gray-700"
      )}
    >
      {popularBadge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            POPULAIRE
          </span>
        </div>
      )}

      <div
        className={cn(
          "text-2xl md:text-3xl mb-4 group-hover:scale-110 transition-all duration-300",
          `text-transparent bg-gradient-to-r ${color} bg-clip-text`
        )}
      >
        {icon}
      </div>

      <h3 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h3>

      <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-xs md:text-sm text-gray-400"
          >
            <FaCheck className="text-emerald-400 text-xs flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <span className="text-white font-bold text-base md:text-lg">
          {priceRange}
        </span>
        <Link
          href={`/services/${serviceSlug}`}
          onClick={() => trackEvent("service_click", "services", title)}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          En savoir plus <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
}
