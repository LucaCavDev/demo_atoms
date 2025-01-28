'use client';

import Image from "next/image";


export default function Quote() {


    return (
        <div className="relative w-full h-[247px] overflow-hidden">


            <Image
                src="/assets/images/africano.png"
                alt="Essere troppo seri non è cosa molto seria"
                fill
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-end p-8 bg-black/30 text-white grid grid-cols-12 gap-2">
                <div className="col-span-2 flex items-start justify-end mt-[40px]">
                    <Image src="/assets/icons/quote.svg" alt="User Icon" width={44} height={44} />

                </div>
                <div className="col-span-10 flex flex-col justify-center">
                    <h2 className="font-bold">Essere troppo seri non è cosa molto seria</h2>
                    <small className="italic">[Detto Africano]</small>
                </div>

            </div>
        </div>
    );
}
