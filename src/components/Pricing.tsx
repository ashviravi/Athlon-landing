import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Basic workout tracking',
      'Standard exercise library',
      'Basic progress metrics',
      'Community access'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    features: [
      'AI-powered coaching',
      'Personalized workout plans',
      'Advanced progress tracking',
      'Nutrition guidance',
      'Premium exercise library',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Elite',
    price: '$19.99',
    period: '/month',
    features: [
      'Everything in Pro',
      '1-on-1 coaching sessions',
      'Custom meal plans',
      'Advanced analytics',
      'Group training features',
      'White-glove support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-opacity-50'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span className={`ml-1 text-xl ${plan.highlighted ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 ${plan.highlighted ? 'text-indigo-200' : 'text-indigo-600'}`} />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-full text-center font-medium ${
                  plan.highlighted
                    ? 'bg-white text-indigo-600 hover:bg-gray-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;