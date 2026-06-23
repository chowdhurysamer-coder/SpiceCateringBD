"use client";

import { useState } from "react";

const menuCategories = [
  {
    id: "corporate",
    label: "Corporate",
    items: [
      { name: "Daily Hot Buffet", desc: "Rotating 12-dish buffet with Bangladeshi and continental choices" },
      { name: "Office Lunch Box", desc: "Freshly prepared individual boxes delivered to your office" },
      { name: "Board Meeting Setup", desc: "Premium finger food and refreshments for executive meetings" },
      { name: "Canteen Management", desc: "Full-service canteen operation for large corporate campuses" },
    ],
  },
  {
    id: "wedding",
    label: "Wedding",
    items: [
      { name: "Mezbani Feast", desc: "Traditional Chittagonian-style grand beef feast" },
      { name: "Walima Banquet", desc: "Elegant multi-course reception dinner" },
      { name: "Holud Spread", desc: "Vibrant and colourful traditional ceremony spread" },
      { name: "Wedding Cake & Sweets", desc: "Custom dessert stations with traditional mishti" },
    ],
  },
  {
    id: "house",
    label: "House Catering",
    items: [
      { name: "Dawat Package", desc: "Full home dining experience for 20–200 guests" },
      { name: "Eid Special", desc: "Authentic Eid feast with biryani, korma, and desserts" },
      { name: "Birthday Party", desc: "Fun and festive catering tailored to your theme" },
      { name: "Anniversary Dinner", desc: "Intimate fine-dining setup in the comfort of your home" },
    ],
  },
];

export const MenuTabs = () => {
  const [active, setActive] = useState("corporate");
  const category = menuCategories.find((c) => c.id === active)!;

  return (
    <div>
      <div className="flex gap-2 flex-wrap mb-10">
        {menuCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === c.id
                ? "bg-[#C0581A] text-white shadow-md shadow-[#C0581A]/30"
                : "border border-stone-200 text-stone-500 hover:border-[#C0581A] hover:text-[#C0581A]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <div key={item.name} className="border border-stone-100 rounded-xl p-6 hover:border-[#C0581A]/30 hover:bg-[#FAF7F2] transition-all">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-2 w-2 rounded-full bg-[#C0581A]" />
              <h4 className="font-semibold text-[#1A1008]">{item.name}</h4>
            </div>
            <p className="text-stone-500 text-sm pl-5">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-stone-400 text-sm mb-4">
          All menus are fully customisable. Contact us for detailed pricing and personalised options.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#C0581A] hover:bg-[#a84a15] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
        >
          Enquire About Menus
        </a>
      </div>
    </div>
  );
};
