import { Check, X } from "lucide-react";
import { plans } from "../static-data/PricingPlans";
import { useState } from "react";

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState('$399')
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-12">
      <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.price)}
            className={`rounded-xl border ${
              selectedPlan === plan.price
                ? "border-blue-500 shadow-lg shadow-blue-100"
                : "border-gray-200"
            } p-6 relative cursor-pointer flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500">/{plan.period}</span>
                )}
              </div>
              {plan.subtitle && (
                <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  Conversations with Raya
                </p>
                <p className="text-sm text-gray-600">
                  {plan.features.conversations}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  SKUs Supported
                </p>
                <p className="text-sm text-gray-600">{plan.features.skus}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  Recommendations
                </p>
                <p className="text-sm text-gray-600">
                  {plan.features.recommendations}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  Insights & Reports
                </p>
                <p className="text-sm text-gray-600">
                  {plan.features.insights}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">Support</p>
                <p className="text-sm text-gray-600">{plan.features.support}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-900">
                  Store Access
                </p>
                <p className="text-sm text-gray-600">{plan.features.stores}</p>
              </div>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900">
                  Custom Branding
                </p>
                {typeof plan.features.branding === "string" ? (
                  <p className="text-sm text-gray-600">
                    {plan.features.branding}
                  </p>
                ) : plan.features.branding ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900">
                  Custom Integrations
                </p>
                {plan.features.integrations ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900">
                  AI Customization
                </p>
                {plan.features.aiCustomization ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium text-gray-900 mb-4">
                  Employee Access & Training
                </p>
                {plan.features.employeeAccess ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>
            </div>

            <button
              className={`mt-auto w-full py-2 px-4 rounded-lg font-medium ${
                selectedPlan === plan.price
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
