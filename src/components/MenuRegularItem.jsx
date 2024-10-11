import React, { useState } from 'react';



const MenuRegularItem = ({ item }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  const renderPrices = () => {
    const prices = [item.precio1, item.precio2, item.precio3, item.precio4]
      .map(price => Number(price))
      .filter(price => price !== null && price > 0);

    return (
      <div className="flex flex-col items-end">
        {prices.map((price, index) => (
          <span key={index} className="font-bold">
            ${typeof price === 'number' ? new Intl.NumberFormat('es-AR').format(price) : 'N/A'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center w-full">
      <div className="w-2/12 p-2">
        <img
          src={`src/assets/img/${item.imagen}`}
          alt={item.nombre}
          className="w-full h-12 object-cover rounded-lg cursor-pointer mb-2"
          onClick={() => setShowFullImage(true)}
        />
      </div>
      <div className="w-12/12 p-2">
        <h3 className="text-lg font-semibold mb-1">{item.nombre}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.descripcion}</p>
      </div>
      <div className="w-4/12 p-2">
        {renderPrices()}
      </div>
      {showFullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowFullImage(false)}>
          <img src={`src/assets/img/${item.imagen}`} alt={item.nombre} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default MenuRegularItem;