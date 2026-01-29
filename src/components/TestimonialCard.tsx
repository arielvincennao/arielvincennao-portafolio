import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-black/80 border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-400/60">
          <Image 
            src={testimonial.avatar} 
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="relative">
        <FaQuoteLeft className="text-red-400/30 text-4xl absolute -top-2 -left-2 -z-10" />
        <p className="text-gray-300 italic relative z-10">{testimonial.content}</p>
      </div>
      <p className="text-sm text-gray-500 mt-4">{testimonial.date}</p>
    </div>
  );
}
