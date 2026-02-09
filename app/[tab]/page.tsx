import ProductList from "@/components/features/ProductList";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Topbar from "@/components/features/Topbar";
import Tabbar from "@/components/features/Tabbar";
import NotFound, { notFound } from "next/navigation";

export default async function TabPage({ params }: { params: Promise<{ tab: string }> }) {
    const { tab } = await params;
    if( tab == "Products" || tab == "Home" || tab == "Contact" ) {
    return (
      <main className="min-h-screen">
        {/* topabar */}
        <ProgressiveBlur className="fixed top-0 z-40" height="20%" position="top" />
        <div className=" fixed top-0 z-40 w-full h-[15%] bg-linear-to-b from-[#ff4040] to-[#00000000]"  ></div>
     <Topbar />
     <Tabbar currentTab={tab}/>     
    {/* topabar end */}
    { tab == "Products" ? <ProductList /> : null } 
    { tab == "Home" ? <ProductList /> : null }
    { tab == "Contact" ? <div>
        <h1>Contact</h1>
        <p>Contact us at [EMAIL_ADDRESS]</p>
        <p>Phone: 0123456789</p>
        <p>Address: 123 Main St, Anytown, USA</p>
    </div> : null }
    </main>
  );
}   else {
    return (
        notFound()
    )
}}
