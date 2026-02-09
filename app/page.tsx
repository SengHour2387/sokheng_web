import ProductList from "@/components/features/ProductList";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Topbar from "@/components/features/Topbar";
import Tabbar from "@/components/features/Tabbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* topabar */}
      <ProgressiveBlur className="fixed top-0 z-40" height="15%" position="top" />
      <div className=" fixed top-0 z-40 w-full h-[15%] bg-linear-to-b from-[#ff4040] to-[#00000000]"  ></div>
     <Topbar />
     <Tabbar currentTab="Home" />  
    {/* topabar end */}
      <ProductList />
    </main>
  );
}
