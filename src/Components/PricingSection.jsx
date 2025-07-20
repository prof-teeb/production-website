'use client'
import { motion } from 'framer-motion';
import { Check, Crown } from 'phosphor-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 100 automated tasks/month',
        'Basic AI workflow suggestions',
        '5 app integrations',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '29',
      description: 'Ideal for professionals and small teams',
      features: [
        'Unlimited automated tasks',
        'Advanced AI workflow optimization',
        'Unlimited app integrations',
        'Priority support',
        'Advanced analytics & insights',
        'Custom automation rules',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Recommended',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large teams and organizations',
      features: [
        'Everything in Pro',
        'Custom AI model training',
        'Dedicated success manager',
        'SSO & advanced security',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-black text-white" id="pricing">
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
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.highlighted ? 'scale-105 z-10' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium">
                    <Crown size={16} className="mr-2" weight="fill" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`glass-card p-8 h-full transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-white/10 border-primary/30 shadow-2xl'
                    : 'hover:bg-white/5'
                }`}
              >
                <h3 className="text-2xl font-light tracking-tight mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-light text-primary">Custom</div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-primary">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8">{plan.description}</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check
                        size={20}
                        className="text-primary mr-3 mt-0.5 flex-shrink-0"
                        weight="bold"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-premium'
                      : 'bg-white/5 text-foreground border border-white/10 hover:bg-white/10 hover:border-primary/30'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Highlight Glow */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-2xl opacity-50">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-xl"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card">
            <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
            <span className="text-muted-foreground">30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
