'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PlugsConnected, Gear, RocketLaunch } from 'phosphor-react';

const HowItWorksSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const steps = [
    {
      icon: PlugsConnected,
      title: 'Connect Your Account',
      description: 'Seamlessly integrate with your existing tools and platforms. Our AI learns from your current workflow patterns.',
      details: 'Connect Slack, Calendar, Email, Notion, and 50+ other tools in seconds.'
    },
    {
      icon: Gear,
      title: 'Set Your AI Workflow',
      description: 'Define your productivity goals and preferences. The AI creates personalized automation rules that evolve with you.',
      details: 'Custom automation rules, smart scheduling, and intelligent task prioritization.'
    },
    {
      icon: RocketLaunch,
      title: 'Automate Your Tasks',
      description: 'Watch as mundane tasks disappear. Focus on what matters while AI handles the routine work in the background.',
      details: 'Automatic scheduling, smart notifications, and predictive task management.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white" id="how-it-works">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            How It <span className="text-white">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get started in minutes and transform your productivity forever
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveCard(index)}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                {/* Card */}
                <div className={`p-8 h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 ${
                  isActive ? 'bg-white/10 border-white/20' : ''
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 transition-all duration-500 ${
                    isActive ? 'scale-110 from-primary/30 to-accent/30' : ''
                  }`}>
                    <Icon size={32} className="text-white" weight="light" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light tracking-tight mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-sm text-primary font-medium">
                        {step.details}
                      </p>
                    </div>
                  </motion.div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-2xl"></div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/40 to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
