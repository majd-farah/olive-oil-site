// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";

// Tell TS that params is a Promise
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // ✅ Await the params promise before accessing slug
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <div className="max-w-5xl mx-auto py-20 px-6 font-serif text-gray-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded shadow"
        />
        <div>
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-500 italic mb-2">{product.subtitle}</p>
          <p className="text-lg text-gray-600 mb-4">{product.region}</p>
          <p className="text-2xl font-bold mb-6">{product.price}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b3a16c] text-black px-6 py-2 hover:bg-[#d8c48c] transition"
          >
            Buy on Amazon
          </a>
          <p className="mt-6 text-base leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
