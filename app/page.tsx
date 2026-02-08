import ProductList from "@/components/features/ProductList";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className=" z-50 w-full fixed bg-linear-to-b from-[#ff4040] to-[#00000000]">
        <div className="container mx-auto px-4 py-6 flex row items-center justify-start gap-3">
          <h1 className="text-[22px] font-bold text-background">SOKHENG</h1>
          <input
            type="text"
            placeholder="Search products..."
            className="font-light text-[12px] h-7.5  w-full bg-background px-2 py-2 rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
      <ProgressiveBlur className="z-40 fixed " height="18%" position="top" />
      <ProductList />
    </main>
  );
}
