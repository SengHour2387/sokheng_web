export default function Topbar() {
    return (
         <div className="z-100 sticky flex flex-col w-full">
        <div className="container mx-auto px-4 py-6 flex row items-center justify-start gap-3">
          <h1 className="text-[22px] font-bold text-background">SOKHENG</h1>
          <input
            type="text"
            placeholder="Search products..."
            className="font-light text-[12px] h-8  w-full bg-background px-2 py-2 rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    )
}
    