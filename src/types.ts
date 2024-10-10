export interface MenuItem {
  id: number;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio1: number;
  precio2: number;
  precio3: number;
  precio4: number;
  promo: boolean;
  destacado: boolean;
  oferta: boolean;
  ver: number;
  imagen: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}