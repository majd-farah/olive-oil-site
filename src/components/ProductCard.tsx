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
  tag?: ProductTag | null;
  href: string;
}

export default function ProductCard({
  image,
  name,
  region,
  subtitle,
  tag,
  href
}: ProductCardProps) {
  return (
    <a
      href={href}
      className="flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 w-full h-[370px]"
    >
      <span className="h-44 flex items-center justify-center bg-white">
        {image
          ? <img src={image} alt={name} className="max-h-40 object-contain" />
          : <span className="text-gray-400 text-lg">No image</span>
        }
      </span>
      <div className="px-6 pb-6 pt-4 flex flex-col gap-1 flex-1">
        <span className="block text-xs tracking-widest text-gray-500 mb-1 uppercase">{region}</span>
        <p className="font-serif text-xl font-semibold text-gray-900 mb-1 leading-snug">{name}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{subtitle}</p>
      </div>
    </a>
  );
}
