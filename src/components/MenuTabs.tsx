"use client";

import { useState } from "react";

const menu = [
  {
    id: "bangla",
    label: "Bangla",
    tagline: "Authentic Bengali home cooking, the heart of Bangladeshi tradition.",
    sections: [
      { name: "Bread & Rice", items: ["Plain Steamed Rice", "Vegetable Pulao", "Chicken Biriyani", "Mutton Biriyani", "Beef Biriyani", "Khichuri", "Nan", "Paratha", "Roti", "Luchi", "Chapati"] },
      { name: "Veg & Bhortas", items: ["Begun Bharta", "Aloo Bharta", "Mixed Seasonal Veg", "Dal Masur", "Dal Moog", "Deshi Dal", "Shorshe Bata", "Shim Bhaji", "Kanchkola Bhaji"] },
      { name: "Fish & Prawn", items: ["Ilish Curry", "Ilish Bhapa", "Chingri Malaikari", "Rui Kalia", "Katla Curry", "Boal Curry", "Prawn Masala", "Chingri Vorta"] },
      { name: "Chicken & Mutton", items: ["Chicken Roast", "Chicken Rezala", "Chicken Bhuna", "Mutton Curry", "Mutton Kalia", "Mutton Rezala"] },
      { name: "Beef", items: ["Beef Curry", "Beef Bhuna", "Kala Bhuna", "Beef Rezala"] },
    ],
  },
  {
    id: "thai",
    label: "Thai",
    tagline: "Aromatic herbs and bold spices: the finest of South-East Asian cuisine.",
    sections: [
      { name: "Appetisers", items: ["Spring Rolls", "Chicken Satay", "Thai Fish Cake", "Prawn Crackers"] },
      { name: "Soups", items: ["Tom Yum Goong", "Tom Kha Gai", "Wonton Soup"] },
      { name: "Noodles & Rice", items: ["Pad Thai", "Jasmine Steamed Rice", "Fried Rice", "Pineapple Fried Rice", "Glass Noodles Stir Fry"] },
      { name: "Chicken & Duck", items: ["Green Curry Chicken", "Red Curry Chicken", "Basil Chicken", "Duck in Plum Sauce"] },
      { name: "Beef & Vegetables", items: ["Beef with Oyster Sauce", "Thai Beef Salad", "Mixed Veg Stir Fry", "Tofu with Holy Basil"] },
      { name: "Fish & Seafood", items: ["Steamed Fish with Lime & Chilli", "Garlic Butter Prawn", "Crab in Curry Sauce", "Prawn in Chilli Sauce"] },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    tagline: "Classic Cantonese and Szechuan flavours, prepared fresh in our kitchen.",
    sections: [
      { name: "Hot Appetisers", items: ["Spring Rolls", "Crispy Wontons", "Dim Sum", "Fried Dumplings", "Salt & Pepper Squid"] },
      { name: "Soups", items: ["Hot & Sour Soup", "Sweet Corn Chicken Soup", "Wonton Soup", "Clear Vegetable Broth"] },
      { name: "Rice & Noodles", items: ["Steamed Rice", "Yang Chow Fried Rice", "Chow Mein", "Lo Mein", "Singapore Noodles"] },
      { name: "Chicken & Duck", items: ["Sweet & Sour Chicken", "Kung Pao Chicken", "Ginger & Spring Onion Chicken", "Crispy Peking Duck"] },
      { name: "Beef & Mutton", items: ["Beef with Broccoli", "Mongolian Beef", "Beef in Black Bean Sauce", "Mutton with Black Pepper"] },
      { name: "Seafood & Vegetables", items: ["Steamed Sea Bass", "Prawns in Oyster Sauce", "Crispy Whole Fish", "Garlic Bok Choy", "Stir Fried Mushrooms"] },
    ],
  },
  {
    id: "indian",
    label: "Indian",
    tagline: "A rich Mughal heritage, tandoor-fired and slow-cooked to perfection.",
    sections: [
      { name: "Appetisers", items: ["Samosa", "Paneer Tikka", "Seekh Kebab", "Chicken Tikka", "Aloo Tikki"] },
      { name: "Tandoori", items: ["Tandoori Chicken", "Lamb Chops", "Prawn Tandoori", "Tandoori Paneer"] },
      { name: "Handi & Karahi", items: ["Chicken Karahi", "Mutton Handi", "Paneer Butter Masala", "Kadai Chicken", "Rogan Josh"] },
      { name: "Daal", items: ["Dal Tadka", "Dal Makhani", "Chana Dal", "Palak Dal"] },
      { name: "Rice & Breads", items: ["Chicken Biryani", "Mutton Biryani", "Vegetable Pulao", "Naan", "Garlic Naan", "Roti", "Paratha"] },
      { name: "Sides", items: ["Mint Chutney", "Tamarind Chutney", "Boondi Raita", "Mixed Pickle", "Kachumber Salad"] },
    ],
  },
  {
    id: "continental",
    label: "Continental",
    tagline: "European classics, from rustic Italian plates to elegant grills.",
    sections: [
      { name: "Breads & Starters", items: ["French Baguette", "Garlic Bread", "Bruschetta", "Caesar Salad", "Greek Salad"] },
      { name: "Grilled", items: ["Grilled Chicken Breast", "Grilled Atlantic Salmon", "Char-grilled Vegetables", "Beef Tenderloin", "Herb Lamb Cutlets"] },
      { name: "Pasta", items: ["Spaghetti Bolognese", "Penne Arrabiata", "Pasta Carbonara", "Pesto Fusilli", "Lasagne al Forno"] },
      { name: "Pizza", items: ["Margherita", "Pepperoni", "BBQ Chicken", "Garden Vegetarian", "Four Cheese"] },
    ],
  },
];

export const MenuTabs = () => {
  const [active, setActive] = useState("bangla");
  const cuisine = menu.find((c) => c.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 lg:gap-x-10 lg:gap-y-3 border-b-0 lg:border-b border-stone-200 pb-3 lg:pb-0 mb-4 lg:mb-0">
        {menu.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`relative text-xs tracking-[0.22em] uppercase transition-all duration-300
              ${active === c.id
                ? "lg:text-[#1A1008] lg:pb-5 lg:-mb-px text-[#C0581A] border border-[#C0581A] rounded-full px-4 py-1.5 bg-[#C0581A]/5 lg:border-0 lg:rounded-none lg:px-0 lg:bg-transparent"
                : "lg:text-stone-400 lg:hover:text-stone-600 lg:pb-5 lg:-mb-px text-stone-500 border border-stone-300 rounded-full px-4 py-1.5 hover:border-[#C0581A]/40 hover:text-[#C0581A]/70 lg:border-0 lg:rounded-none lg:px-0 lg:bg-transparent"
              }`}
          >
            {c.label}
            {active === c.id && (
              <span className="hidden lg:block absolute bottom-0 left-0 right-0 h-px bg-[#D4A843]" />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="px-6 sm:px-10 lg:px-16 py-14">
        {/* Cuisine heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h3
            className="text-2xl lg:text-3xl text-[#C0581A] uppercase tracking-[0.2em] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cuisine.label} Menu
          </h3>
          {/* Gold ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-14 bg-[#D4A843]/50" />
            <span className="text-[#D4A843]/80 text-xs">✦</span>
            <div className="h-px w-14 bg-[#D4A843]/50" />
          </div>
          <p
            className="text-stone-500 italic text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cuisine.tagline}
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {cuisine.sections.map((section) => (
            <div key={section.name} className="text-center">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-5 pb-3 border-b border-[#D4A843]/20">
                {section.name}
              </h4>
              <div>
                {section.items.map((dish, i) => (
                  <div key={dish}>
                    {i > 0 && (
                      <div className="flex justify-center my-2.5 text-stone-300 text-xs leading-none">·</div>
                    )}
                    <p className="text-stone-600 leading-snug text-sm">{dish}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-stone-100 text-center">
          <p className="text-stone-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Every menu is fully customisable to your event, guest count and dietary requirements.
            Contact us for detailed pricing and personalised options.
          </p>
          <a
            href="#contact"
            className="inline-block border border-[#C0581A] text-[#C0581A] hover:bg-[#C0581A] hover:text-white px-10 py-3.5 text-xs tracking-[0.25em] uppercase transition-all duration-300"
          >
            Make an Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};
