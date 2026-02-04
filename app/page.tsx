import ProductList from "@/components/features/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">E-Commerce Store</h1>
        </div>
      </div>
      <ProductList />
    </main>
  );
}
