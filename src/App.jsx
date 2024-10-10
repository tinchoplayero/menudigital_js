import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import CategoryMenu from './components/CategoryMenu';
import { fetchMenuItems } from './api';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const loadMenuItems = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);

      const uniqueCategories = Array.from(new Set(items.map(item => item.categoria)));
      const categorizedItems = uniqueCategories.map(category => ({
        name: category,
        items: items.filter(item => item.categoria === category),
      }));
      setCategories(categorizedItems);
    };

    loadMenuItems();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryMenu(false);
  };

  const filteredCategories = selectedCategory
    ? categories.filter(category => category.name === selectedCategory)
    : categories;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        restaurantName="Mi Restaurante"
        logo="https://example.com/logo.png"
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