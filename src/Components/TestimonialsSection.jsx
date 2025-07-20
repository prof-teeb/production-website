'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star } from 'phosphor-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechFlow",
      avatar: "SC",
      quote: "Nlovable transformed how our team approaches project management. The AI insights are incredibly accurate.",
      result: "40% faster project delivery"
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      avatar: "MR",
      quote: "The automation features saved me 15 hours per week. It's like having a personal productivity assistant.",
      result: "15 hours saved weekly"
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      avatar: "EW",
      quote: "Finally, a tool that understands creative workflows. The AI adapts to my chaotic schedule perfectly.",
      result: "3x better work-life balance"
    },
    {
      name: "David Kim",
      role: "Engineering Lead",
      avatar: "DK",
      quote: "The integration capabilities are outstanding. Everything connects seamlessly with our existing tools.",
      result: "90% reduction in context switching"
    },
    {
      name: "Lisa Thompson",
      role: "Consultant",
      avatar: "LT",
      quote: "Client work became so much more organized. The AI predicts bottlenecks before they happen.",
      result: "25% increase in client satisfaction"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-black text-white" id="testimonials">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Loved by <span className="text-white font-semibold">Thousands</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how professionals worldwide are transforming their productivity
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl text-center max-w-2xl mx-auto border border-white/10 shadow-md"
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} weight="fill" className="text-primary mx-1" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm">
                    <span className="text-white font-medium">{testimonial.result}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
