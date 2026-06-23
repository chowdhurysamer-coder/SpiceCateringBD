"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const menu = [
  {
    id: "bangla",
    label: "Bangla",
    tagline: "Authentic Bengali home cooking — the heart of Bangladeshi tradition",
    sections: [
      {
        name: "Bread & Rice",
        items: ["Plain Steamed Rice", "Vegetable Pulao", "Chicken Biriyani", "Mutton Biriyani", "Beef Biriyani", "Khichuri", "Nan", "Paratha", "Roti", "Luchi (Puri)", "Chapati"],
      },
      {
        name: "Veg & Bhortas",
        items: ["Begun Bharta (Aubergine)", "Aloo Bharta (Potato)", "Mixed Seasonal Veg", "Dal Masur", "Dal Moog", "Deshi Dal", "Shorshe Bata", "Shim Bhaji", "Kanchkola Bhaji"],
      },
      {
        name: "Fish & Prawn",
        items: ["Ilish (Hilsa) Curry", "Ilish Bhapa (Steamed Hilsa)", "Chingri Malaikari", "Rui Kalia", "Katla Curry", "Boal Curry", "Prawn Masala", "Chingri Vorta"],
      },
      {
        name: "Chicken",
        items: ["Chicken Roast", "Chicken Curry", "Chicken Rezala", "Chicken Bhuna"],
      },
      {
        name: "Mutton",
        items: ["Mutton Curry", "Mutton Kalia", "Mutton Rezala", "Mutton Bhuna"],
      },
      {
        name: "Beef",
        items: ["Beef Curry", "Beef Bhuna", "Kala Bhuna (Chittagonian)", "Beef Rezala"],
      },
    ],
  },
  {
    id: "thai",
    label: "Thai",
    tagline: "Aromatic herbs, bold spices — the finest of South-East Asian cuisine",
    sections: [
      {
        name: "Appetisers",
        items: ["Spring Rolls", "Chicken Satay", "Thai Fish Cake", "Prawn Crackers"],
      },
      {
        name: "Soups",
        items: ["Tom Yum Goong", "Tom Kha Gai", "Wonton Soup"],
      },
      {
        name: "Noodles & Rice",
        items: ["Pad Thai", "Jasmine Steamed Rice", "Fried Rice", "Pineapple Fried Rice", "Glass Noodles Stir Fry"],
      },
      {
        name: "Vegetables",
        items: ["Mixed Veg Stir Fry", "Tofu with Holy Basil", "Stir Fried Morning Glory"],
      },
      {
        name: "Chicken & Duck",
        items: ["Green Curry Chicken", "Red Curry Chicken", "Basil Chicken", "Duck in Plum Sauce"],
      },
      {
        name: "Beef",
        items: ["Beef with Oyster Sauce", "Thai Beef Salad"],
      },
      {
        name: "Fish & Seafood",
        items: ["Steamed Fish with Lime & Chili", "Garlic Butter Prawn", "Crab in Curry Sauce", "Prawn in Chili Sauce"],
      },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    tagline: "Classic Cantonese and Szechuan flavours prepared in our kitchen",
    sections: [
      {
        name: "Hot Appetisers",
        items: ["Spring Rolls", "Crispy Wontons", "Dim Sum", "Fried Dumplings", "Salt & Pepper Squid"],
      },
      {
        name: "Soups",
        items: ["Hot & Sour Soup", "Sweet Corn Chicken Soup", "Wonton Soup", "Clear Vegetable Broth"],
      },
      {
        name: "Rice & Noodles",
        items: ["Steamed Rice", "Yang Chow Fried Rice", "Chow Mein", "Lo Mein", "Singapore Noodles"],
      },
      {
        name: "Chicken & Duck",
        items: ["Sweet & Sour Chicken", "Kung Pao Chicken", "Ginger & Spring Onion Chicken", "Crispy Peking Duck"],
      },
      {
        name: "Beef & Mutton",
        items: ["Beef with Broccoli", "Mongolian Beef", "Beef with Black Bean Sauce", "Mutton with Black Pepper"],
      },
      {
        name: "Vegetables",
        items: ["Mixed Seasonal Stir Fry", "Garlic Bok Choy", "Stir Fried Mushrooms", "Tofu with Oyster Sauce"],
      },
      {
        name: "Seafood & Fish",
        items: ["Steamed Sea Bass", "Prawns in Oyster Sauce", "Crispy Whole Fish", "Garlic Butter Lobster"],
      },
    ],
  },
  {
    id: "indian",
    label: "Indian",
    tagline: "Rich Mughal heritage — tandoor-fired and slow-cooked to perfection",
    sections: [
      {
        name: "Appetisers",
        items: ["Samosa", "Paneer Tikka", "Seekh Kebab", "Chicken Tikka", "Aloo Tikki"],
      },
      {
        name: "Tandoori",
        items: ["Tandoori Chicken", "Seekh Kebab", "Lamb Chops", "Prawn Tandoori", "Tandoori Paneer"],
      },
      {
        name: "Dal",
        items: ["Dal Tadka", "Dal Makhani", "Chana Dal", "Palak Dal"],
      },
      {
        name: "Handi & Karahi",
        items: ["Chicken Karahi", "Mutton Handi", "Paneer Butter Masala", "Kadai Chicken", "Rogan Josh"],
      },
      {
        name: "Rice & Breads",
        items: ["Chicken Biryani", "Mutton Biryani", "Vegetable Pulao", "Naan", "Garlic Naan", "Roti", "Paratha", "Puri"],
      },
      {
        name: "Sides",
        items: ["Mint Chutney", "Tamarind Chutney", "Boondi Raita", "Mixed Pickle", "Kachumber Salad"],
      },
    ],
  },
  {
    id: "continental",
    label: "Continental",
    tagline: "European classics — from rustic Italian to elegant French-inspired plates",
    sections: [
      {
        name: "Breads & Starters",
        items: ["French Baguette", "Garlic Bread", "Bruschetta", "Caesar Salad", "Greek Salad"],
      },
      {
        name: "Grilled",
        items: ["Grilled Chicken Breast", "Grilled Atlantic Salmon", "Char-grilled Vegetables", "Grilled Beef Tenderloin", "Herb-marinated Lamb Cutlets"],
      },
      {
        name: "Pasta",
        items: ["Spaghetti Bolognese", "Penne Arrabiata", "Pasta Carbonara", "Pesto Fusilli", "Lasagne al Forno"],
      },
      {
        name: "Pizza",
        items: ["Margherita", "Pepperoni", "BBQ Chicken", "Garden Vegetarian", "Four Cheese"],
      },
    ],
  },
];

export const MenuTabs = () => {
  const [activeCuisine, setActiveCuisine] = useState("bangla");
  const [openSection, setOpenSection] = useState<string | null>(null);

  const cuisine = menu.find((c) => c.id === activeCuisine)!;

  const toggleSection = (name: string) => {
    setOpenSection((prev) => (prev === name ? null : name));
  };

  return (
    <div>
      {/* Cuisine tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {menu.map((c) => (
          <button
            key={c.id}
            onClick={() => { setActiveCuisine(c.id); setOpenSection(null); }}
            className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
              activeCuisine === c.id
                ? "bg-[#C0581A] text-white shadow-md shadow-[#C0581A]/30"
                : "border border-stone-200 text-stone-500 hover:border-[#C0581A] hover:text-[#C0581A]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Cuisine tagline */}
      <p className="text-stone-400 text-sm italic mb-8 border-l-2 border-[#C0581A]/40 pl-4">
        {cuisine.tagline}
      </p>

      {/* Accordion sections */}
      <div className="divide-y divide-stone-100 border-t border-stone-100">
        {cuisine.sections.map((section) => {
          const isOpen = openSection === section.name;
          return (
            <div key={section.name}>
              <button
                onClick={() => toggleSection(section.name)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span
                  className="text-base font-semibold text-[#1A1008] group-hover:text-[#C0581A] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.04em" }}
                >
                  {section.name}
                </span>
                <span className="text-stone-400 text-xs mr-1 flex items-center gap-1">
                  <span className="hidden sm:inline">{section.items.length} dishes</span>
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
              {isOpen && (
                <div className="pb-6 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                  {section.items.map((dish) => (
                    <div key={dish} className="flex items-center gap-2.5 text-sm text-stone-600">
                      <span className="h-1 w-1 rounded-full bg-[#C0581A] shrink-0" />
                      {dish}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-stone-400 text-sm mb-5">
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
