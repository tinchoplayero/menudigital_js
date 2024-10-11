import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import CategoryMenu from './components/CategoryMenu';
import { fetchMenuItems } from './api';
import { MenuItem, Category } from './types';



const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  

  useEffect(() => {
    const loadMenuItems = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);

      const uniqueCategories = Array.from(new Set(items.map(item => item.categoria)));
      const categorizedItems = uniqueCategories.map(category => ({
        name: category as string,
        items: items.filter(item => item.categoria === category),
      }));
      setCategories(categorizedItems);
    };

    loadMenuItems();
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
  };

  const filteredCategories = selectedCategory
    ? categories.filter(category => category.name === selectedCategory)
    : categories;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        restaurantName="Amazonas Menu Digital"
        logo="/src/assets/img/logo.png"
        onMenuClick={() => setShowCategoryMenu(true)}
      />
      <main className="container mx-auto px-4 py-8">
        {filteredCategories.map(category => (
          <MenuSection key={category.name} title={category.name} items={category.items} />
        ))}
      </main>
      <button
        onClick={() => setShowCategoryMenu(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <Menu size={24} />
      </button>
      {showCategoryMenu && (
        <CategoryMenu
          categories={categories.map(category => category.name)}
          onSelectCategory={handleCategorySelect}
          onClose={() => setShowCategoryMenu(false)}
        />
      )}
    </div>
  );
};

export default App;