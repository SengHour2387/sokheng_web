import { Product } from "@/types";
import Image from "next/image";
import { ProgressiveBlur } from "./progressive-blur";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div key={product.id} className=" relative bg-black-100 h-fit rounded-2xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            
                                <div className=" relative h-[168px] w-full" >
                                    <Image
                                        src={product.images && product.images.length > 0 ? product.images[0].image : '/placeholder.png'}
                                        alt={product.name}
                                        fill
                                        objectFit="cover"
                                        className="rounded-2xl p-2" 
                                    />
                                </div>
                                <div className=" z-10  m-2 relative bottom-0 pt-2">
                                    <p className="text-sm truncate" title={product.name}>
                                        {product.name}
                                    </p>
                                    <p className="text-gray-500 text-xscapitalize">{product.mainCategory}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold">${product.price}</span>
                                    </div>
                                </div>
                            </div>
    )
}