import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, items }) => {
  const promoItems = items.filter(item => item.promo);
  const ofertaItems = items.filter(item => item.oferta && !item.promo);
  const destacadoItems = items.filter(item => item.destacado && !item.promo && !item.oferta);
  const regularItems = items.filter(item => !item.promo && !item.oferta && !item.destacado);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {promoItems.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-green-600">PROMOCIÓN</h3>
          <div className="flex flex-wrap">
            {promoItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      {ofertaItems.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-red-600">OFERTA</h3>
          <div className="flex flex-wrap">
            {ofertaItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      {destacadoItems.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-yellow-600">DESTACADOS</h3>
          <div className="flex flex-wrap">
            {destacadoItems.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-wrap">
        {regularItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;