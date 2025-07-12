'use client';

import React from 'react';

interface ProductTag {
  label: string;
}

interface ProductCardProps {
  image: string;
  name: string;
  region: string;
  subtitle: string;
  price: string;
  tag?: ProductTag | null;
  href: string;
}

export default function ProductCard({
  image,
  name,
  region,
  subtitle,
  price,
  tag,
  href
}: ProductCardProps) {
  return (
    <a
      href={href}
      className="h-[500px] flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-full"
    >
      {/* Product Image */}
      <span className="h-56 flex items-center justify-center bg-white">
        {image
          ? <img src={image} alt={name} className="max-h-48 object-contain" />
          : <span className="text-gray-400 text-lg">No image</span>
        }
      </span>

      {/* Product Info */}
      <span className="px-6 pb-6 pt-4 flex flex-col justify-between flex-1">
        <span>
          <span className="block text-xs tracking-widest text-gray-500 mb-1 uppercase">{region}</span>
          <p className="font-serif text-xl font-semibold text-gray-900 mb-1 leading-snug">{name}</p>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{subtitle}</p>
        </span>
        <div className="flex items-center gap-2 text-sm text-gray-700 mt-auto">
          <span className="font-bold text-lg text-gray-900">{price}</span>
        </div>
      </span>
    </a>
  );
}
