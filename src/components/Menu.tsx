import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

// Example menu data based on the website content
const starters: MenuItem[] = [
  {
    name: "Foie Gras Terrine",
    description: "House-made terrine, brioche, fig compote, fleur de sel",
    price: "$24"
  },
  {
    name: "Burgundy Escargots",
    description: "Garlic-herb butter, toasted sourdough",
    price: "$18"
  },
  {
    name: "Warm Goat Cheese Salad",
    description: "Mixed greens, honey vinaigrette, candied walnuts",
    price: "$16"
  },
  {
    name: "Tuna Tartare",
    description: "Avocado, citrus, radish, sesame tuile",
    price: "$22"
  }
];

const mains: MenuItem[] = [
  {
    name: "Coq au Vin",
    description: "Free-range chicken, red wine sauce, pearl onions, mushrooms, lardon",
    price: "$34"
  },
  {
    name: "Beef Bourguignon",
    description: "Slow-braised beef, red wine reduction, root vegetables, pomme purée",
    price: "$38"
  },
  {
    name: "Pan-Seared Scallops",
    description: "Cauliflower puree, brown butter, capers, preserved lemon",
    price: "$42"
  },
  {
    name: "Herb-Crusted Rack of Lamb",
    description: "Ratatouille, rosemary jus, olive tapenade",
    price: "$46"
  }
];

const desserts: MenuItem[] = [
  {
    name: "Crème Brûlée",
    description: "Tahitian vanilla bean, caramelized sugar",
    price: "$14"
  },
  {
    name: "Chocolate Soufflé",
    description: "Grand Marnier, crème anglaise (please allow 20 minutes)",
    price: "$16"
  },
  {
    name: "Apple Tarte Tatin",
    description: "Caramelized apples, puff pastry, vanilla ice cream",
    price: "$15"
  },
  {
    name: "Cheese Selection",
    description: "Artisanal French cheeses, seasonal accompaniments",
    price: "$22"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Seasonal ingredients, thoughtfully prepared</p>

        <Tabs defaultValue="starters" className="w-full max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-cream">
              <TabsTrigger value="starters" className="font-montserrat text-xs uppercase tracking-wider">Starters</TabsTrigger>
              <TabsTrigger value="mains" className="font-montserrat text-xs uppercase tracking-wider">Mains</TabsTrigger>
              <TabsTrigger value="desserts" className="font-montserrat text-xs uppercase tracking-wider">Desserts</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="starters" className="space-y-6">
            {starters.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="mains" className="space-y-6">
            {mains.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="desserts" className="space-y-6">
            {desserts.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-lightgray mt-12">
          Menu items may change based on seasonal availability.<br />
          Please inform your server of any dietary restrictions.
        </p>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex justify-between items-start border-b border-[#eaecef] pb-4">
      <div>
        <h3 className="text-lg font-playfair text-navy">{item.name}</h3>
        <p className="text-sm text-lightgray mt-1">{item.description}</p>
      </div>
      <div className="text-gold font-medium">{item.price}</div>
    </div>
  );
}
