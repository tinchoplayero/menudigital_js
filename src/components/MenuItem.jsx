import React from 'react';

const MenuItem = ({ item }) => {
  const getBorderColor = () => {
    if (item.promo) return 'border-green-500';
    if (item.oferta) return 'border-red-500';
    if (item.destacado) return 'border-yellow-500';
    return 'border-gray-300';
  };

  const getItemSize = () => {
    switch (item.ver) {
      case 2: return 'w-1/2';
      case 3: return 'w-1/3';
      case 4: return 'w-1/4';
      case 5: return 'w-1/5';
      default: return 'w-full';
    }
  };

  const getFontSize = () => {
    if (item.promo || item.oferta || item.destacado || item.ver > 1) {
      return 'text-lg';
    }
    return 'text-base';
  };

  return (
    <div className={`${getItemSize()} p-2`}>
      <div className={`border-2 ${getBorderColor()} rounded-lg p-4 h-full flex flex-col`}>
        {item.imagen && (
          <img src={item.imagen} alt={item.nombre} className="w-full h-32 object-cover mb-2 rounded" />
        )}
        <h3 className={`${getFontSize()} font-bold mb-1`}>{item.nombre}</h3>
        <p className="text-sm mb-2">{item.descripcion}</p>
        <div className="mt-auto">
          {[item.precio1, item.precio2, item.precio3, item.precio4].filter(price => price > 0).map((price, index) => (
            <p key={index} className="text-right font-semibold">${price.toFixed(2)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;