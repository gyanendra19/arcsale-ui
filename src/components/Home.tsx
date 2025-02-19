import React from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaComments, FaQrcode, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Item = {
  id: number;
  title: string;
  contents: string[];
};

const Home = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const steps = [
    {
      icon: <FaQrcode className="text-2xl text-blue-500" />,
      title: "Scan QR Code",
      description:
        "Customers scan the in-store QR code to begin their personalized shopping experience.",
    },
    {
      icon: <FaRobot className="text-2xl text-green-500" />,
      title: "Personalized Recommendations",
      description:
        "Raya analyzes past purchases, browsing habits, and real-time interactions to offer tailored product suggestions.",
    },
    {
      icon: <FaComments className="text-2xl text-yellow-500" />,
      title: "Real-Time Assistance",
      description:
        "Customers can compare products, explore offers, and ask questions—all in real time.",
    },
    {
      icon: <FaShoppingCart className="text-2xl text-red-500" />,
      title: "Seamless Checkout",
      description:
        "Customers can proceed to self-checkout or request in-store assistance as needed.",
    },
  ];

  const items: Item[] = [
    {
      id: 1,
      title: "Fashion Retailers – Personalized Outfit Recommendations",
      contents: [
        "Raya acts like a virtual stylist, suggesting outfits based on a customer’s past purchases, wishlist, and in-store browsing.",
        "If a customer buys a dress, Raya can recommend matching shoes, bags, or accessories to complete the look.",
        "It can also suggest seasonal trends, discounts on complementary items, or notify customers of restocked sizes.",
        "Example: A shopper buying jeans might be recommended a top that matches or a belt that complements the outfit.",
      ],
    },
    {
      id: 2,
      title: "Electronics Stores – Cross-Selling Relevant Accessories",
      contents: [
        "When a customer shows interest in a smartphone, Raya suggests compatible accessories like screen protectors, wireless chargers, and phone cases.",
        "It can offer bundle discounts for buying multiple accessories together",
        "Helps customers compare models based on features, specifications, and reviews, acting as an expert sales associate.",
        "Example: If a customer is browsing for a laptop, Raya might recommend a mouse, external hard drive, or extended warranty.",
      ],
    },
    {
      id: 3,
      title: "Supermarkets – Suggests Bundle Deals & Offers",
      contents: [
        "Raya enhances grocery shopping by recommending combo deals and discounts based on what’s in a customer’s cart.",
        "If a shopper buys pasta, Raya might suggest complementary items like pasta sauce, parmesan cheese, and olive oil.",
        "It can promote weekly deals, suggest alternative brands, and even notify customers about loyalty rewards.",
        "Example: A customer purchasing coffee could receive recommendations for a discounted milk or a matching biscuit offer.",
      ],
    },
    {
      id: 4,
      title: "Furniture & Home Decor – Shows Complementary Decor Ideas",
      contents: [
        "Furniture & Home Decor – Shows Complementary Decor Ideas",
        "If a shopper looks at a sofa, Raya can suggest matching rugs, curtains, or wall art for a complete setup.",
        "Offers personalized recommendations based on a customer’s past decor purchases and preferred styles.",
        "Example: A customer buying a dining table might receive suggestions for matching chairs, placemats, and centerpiece decor.",
      ],
    },
  ];

  function StepBox() {
    return steps.map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center max-w-xs"
      >
        <div className="p-4 bg-gray-200 rounded-full mb-3">{step.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.description}</p>
      </div>
    ));
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}

        {/* Main Content */}
        <main className="container mx-auto relative md:pr-14 md:pl-28 md:py-12 py-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute hidden md:block w-80 h-80 bg-gradient-to-bl from-red-200 via-white to-blue-200 rounded-full -left-64 top-10 translate-y-1/2"></div>

          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold leading-10">
              AI-Powered Sales Associate for Brick-and-Mortar Stores
            </h1>
            <p className="text-gray-600 text-lg">
              Raya is a team member that enhances customer experience, drives
              sales, and reduces human dependency with AI-powered product
              recommendations and self-service assistance.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-bl from-red-200 via-white to-blue-200 text-black transition-colors">
                View Demo
              </button>
              <button className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="flex-1 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-bl-full opacity-20 -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-tr-full opacity-20 -z-10" />

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/6689ee39013a3dee5905bb1d/669e0e42d41779e7fce202f0_Frame%2066-p-500.png"
                  alt="Drive-thru sign"
                  className="w-full h-90 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-10">
                <img
                  src="https://cdn.prod.website-files.com/6689ee39013a3dee5905bb1d/669e0e514cf6f041aceff378_Frame%2065-p-500.png"
                  alt="Person at drive-thru"
                  className="w-full h-90 object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <section className="flex md:mx-20 md:px-14 px-4 overflow-hidden relative z-[1000] rounded-2xl py-12 flex-col items-center text-center">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <h1 className="text-4xl font-bold text-black max-w-3xl">Why Raya?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">
              End-to-End Customer Service
            </h2>
            <p className="text-gray-600 mt-2">
              Raya assists customers from product discovery to checkout,
              reducing staff workload.
            </p>
            <div className="mt-4 text-blue-500 text-2xl">📱</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">AI-Driven Personalization</h2>
            <p className="text-gray-600 mt-2">
              Understands browsing habits, past purchases, and wishlists to
              offer tailored recommendations. Creates personalized promotions
              based on real-time insights
            </p>
            <div className="mt-4 text-purple-500 text-2xl">🔊</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">
              Increase Sales & Conversions
            </h2>
            <p className="text-gray-600 mt-2">
              Boosts upselling and cross-selling to increase average order
              value. Higher conversions through personalized recommendations
            </p>
            <div className="mt-4 text-yellow-500 text-2xl">💬</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">Zero Hardware Investment</h2>
            <p className="text-gray-600 mt-2">
              Customers access Raya via QR code in retail stores, eliminating
              setup costs.
            </p>
            <div className="mt-4 text-yellow-500 text-2xl">💬</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">
              Real-Time Customer Insights
            </h2>
            <p className="text-gray-600 mt-2">
              Retailers gain valuable data on customer behavior and preferences
              which helps them make important decisions like inventory
              management, product references & marketing.
            </p>
            <div className="mt-4 text-yellow-500 text-2xl">💬</div>
          </div>
        </div>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800">
          View Demo
        </button>
      </section>

      <section className="my-14 md:mx-16 rounded-xl overflow-hidden relative">
        {/* <img
            className="absolute inset-0 -z-10 w-full h-full"
            src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
            alt=""
          /> */}
        <div className="flex flex-col items-center p-8 pt-10">
          <h2 className="text-3xl font-bold mb-6">How IT Works</h2>

          <div className="w-full flex justify-center mb-8">
            <div className="md:w-3/4 w-full h-48 bg-gray-300 flex items-center justify-center rounded-xl">
              <span className="text-lg text-gray-700">PHOTO</span>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-7 md:gap-0 items-center mt-8 space-x-4">
            {StepBox()}
          </div>
        </div>
      </section>

      <section className="my-10 rounded-xl overflow-hidden md:mx-14 relative">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <div className="flex flex-col items-center justify-center py-16 md:px-10 px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-10 text-center">
            Maximize Revenue, Minimize Costs
          </h2>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Left Image */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex items-center justify-center h-80">
              <span className="text-xl">PHOTO</span>
            </div>

            {/* Right Section - Three Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="text-sm text-center mt-2">
                  Reduce reliance on sales associates while maintaining
                  excellent customer service.
                </p>
              </div>
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="text-sm mt-2 text-center">
                  Boost AOV (Average Order Value) with AI-powered personalized
                  recommendations.
                </p>
              </div>
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 col-span-2">
                <p className="text-sm mt-2 text-center">
                  There are no expensive kiosks or tablets—just a simple
                  QR-based AI assistant.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 rounded-xl overflow-hidden md:mx-14 relative">
        <img
          className="absolute inset-0 -z-10 w-full h-full"
          src="https://firebasestorage.googleapis.com/v0/b/arcsaleai.appspot.com/o/arcsale%2Fbg-logo%2Fbg-1.webp?alt=media&token=983969d7-1341-42f9-9956-6210915cdfc6"
          alt=""
        />
        <div className="flex flex-col items-center justify-center py-16 md:px-10 px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-10 text-center">
            Zero Wait Times. Instant Answers. Smart Shopping.
          </h2>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {/* Left Image */}

            {/* Right Section - Three Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="text-sm text-center mt-2">
                  Customers get real-time product recommendations and store
                  navigation assistance.
                </p>
              </div>
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3 md:p-6">
                <p className="text-sm mt-2 text-center">
                  Reduce frustration caused by unavailable staff or long
                  checkout lines.
                </p>
              </div>
              <div className="bg-white/10 md:backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 col-span-2">
                <p className="text-sm mt-2 text-center">
                  Enable self-checkout integration for a frictionless shopping
                  experience.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex items-center justify-center h-80">
              <span className="text-xl">PHOTO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 w-full">
        <div className="flex flex-col items-center justify-center md:p-8 p-2">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Use Cases Across Retail Formats
          </h2>

          <div className="w-full max-w-2xl space-y-2">
            {items.map((item) => (
              <div key={item.id} className="p-3">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center justify-between w-full"
                >
                  {/* Left side with icon and text */}
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 hidden bg-white/20 rounded-full"></div>
                    <span className="font-medium">{item.title}</span>
                  </div>

                  {/* Plus/Minus Icon */}
                  {openItem === item.id ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {/* Dropdown Content */}
                {openItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: openItem === item.id ? 1 : 0,
                      y: openItem === item.id ? 0 : -10,
                      display: openItem === item.id ? "block" : "none",
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="mt-2 bg-white/5 p-4 rounded-lg transition-all"
                  >
                    <ul className="list-disc pl-5">
                      {item.contents.map((content, index) => (
                        <li className="py-1" key={index}>
                          {content}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
