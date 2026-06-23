"use client";

import { useState } from "react";

const menu = [
  {
    id: "bangla",
    label: "Bangla",
    tagline: "Authentic Bengali home cooking — the heart of Bangladeshi tradition.",
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
    tagline: "Aromatic herbs and bold spices — the finest of South-East Asian cuisine.",
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
    tagline: "A rich Mughal heritage — tandoor-fired and slow-cooked to perfection.",
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
    tagline: "European classics — from rustic Italian plates to elegant grills.",
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
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-stone-200 pb-px mb-px">
        {menu.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`relative pb-4 -mb-px text-sm tracking-[0.18em] uppercase transition-colors ${
              active === c.id
                ? "text-[#C0581A] border-b-2 border-[#C0581A]"
                : "text-stone-400 hover:text-[#1A1008] border-b-2 border-transparent"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="border border-stone-200 border-t-0 px-6 sm:px-10 lg:px-16 py-14">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h3
            className="text-2xl lg:text-3xl text-[#C0581A] uppercase tracking-[0.15em] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cuisine.label} Menu
          </h3>
          <p
            className="text-stone-500 italic text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {cuisine.tagline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {cuisine.sections.map((section) => (
            <div key={section.name} className="text-center">
              <h4 className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-5">
                {section.name}
              </h4>
              <div>
                {section.items.map((dish, i) => (
                  <div key={dish}>
                    {i > 0 && <div className="mx-auto my-3 h-px w-8 bg-stone-200" />}
                    <p className="text-stone-700 leading-snug">{dish}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm mb-6 max-w-lg mx-auto">
            Every menu is fully customisable to your event, guest count and dietary requirements.
            Contact us for detailed pricing and personalised options.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#C0581A] hover:bg-[#a84a15] text-white px-9 py-3.5 text-sm tracking-widest uppercase transition-colors"
          >
            Make an Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};
