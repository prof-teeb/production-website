"use client"

import { motion } from 'framer-motion';
import { Brain, Lightning, Shield, Infinity } from 'phosphor-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning that understands your work patterns and optimizes your productivity automatically.',
      highlights: ['Natural language processing', 'Predictive analytics', 'Smart recommendations']
    },
    {
      icon: Lightning,
      title: 'Lightning Fast Automation',
      description: 'Execute complex workflows in milliseconds. Reduce manual work by up to 80% with intelligent automation.',
      highlights: ['Instant task creation', 'Real-time synchronization', 'Zero-latency responses']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption. Your data remains private and protected at all times.',
      highlights: ['AES-256 encryption', 'SOC 2 compliance', 'Zero-knowledge architecture']
    },
    {
      icon: Infinity,
      title: 'Unlimited Integrations',
      description: 'Connect with 500+ apps and services. Create seamless workflows across your entire digital ecosystem.',
      highlights: ['Native API connections', 'Custom webhooks', 'Real-time data sync']
    }
  ];

  return (
    <section
      className="relative py-20 px-6 overflow-hidden bg-black text-white"
      id="features"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/herosection-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Everything you need to supercharge your productivity and eliminate routine work
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-primary" weight="light" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-xl"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-premium">Explore All Features</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
