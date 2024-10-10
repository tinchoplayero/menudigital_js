import React from 'react';
import { X } from 'lucide-react';

interface CategoryMenuProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  onClose: () => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories, onSelectCategory, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Categorías</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200">
            <X size={24} />
          </button>
        </div>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  onSelectCategory(category);
                  onClose();
                }}
                className="w-full text-left py-2 px-4 hover:bg-gray-100 rounded"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;