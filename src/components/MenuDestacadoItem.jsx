import React, { useState } from 'react';
/* DESTACADO */


const MenuDestacadoItem = ({ item }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  const getBorderColor = () => {
    if (item.promo) return 'border-green-500 border-4 shadow-xl';
    if (item.oferta) return 'border-red-500 border-4 shadow-xl';
    if (item.destacado) return 'border-yellow-500 border-4 shadow-xl';
    return 'border-gray-500';
  };

  const getItemWidth = () => {
    switch (item.ver) {
      case 2: return 'w-1/2';
      case 3: return 'w-1/3';
      case 4: return 'w-1/4';
      case 5: return 'w-1/5';
      default: return 'w-full';
    }
  };

  const renderPrices = () => {
    const prices = [item.precio1, item.precio2, item.precio3, item.precio4]
  .map(price => Number(price))
  .filter(price => price !== null && price > 0);
      
    return (
      <div className="flex flex-col items-end">
        {prices.map((price, index) => (
           <span key={index} className="font-bold text-2xl">
           ${typeof price === 'number' ? new Intl.NumberFormat('es-AR').format(price) : 'N/A'}
          </span>
        ))}
      </div>
    );
  };

  

  return (
    <div className={`${getItemWidth()} p-2`}>
      <div className={`border ${getBorderColor()} rounded-lg p-4 flex flex-col`}>
        <img
          src={`src/assets/img/${item.imagen}`}
          alt={item.nombre}
          className="w-full h-24 object-cover rounded-lg cursor-pointer mb-2"
          onClick={() => setShowFullImage(true)}
        />
        <h3 className="text-2xl font-semibold mb-1">{item.nombre}</h3>
        <p className="text-lg text-gray-600 mb-2">{item.descripcion}</p>
        {renderPrices()}
        {showFullImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowFullImage(false)}>
            <img src={`src/assets/img/${item.imagen}`} alt={item.nombre} className="max-w-full max-h-full object-contain" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDestacadoItem;