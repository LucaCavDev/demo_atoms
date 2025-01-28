'use client';
import Image from 'next/image';

export default function Blog() {
    const blogItems = [
        { id: 1, type: 'title', text: 'Il Blog' },
        { id: 2, title: "Il Becco dell'oca", text: "Di Paolo dell'oca", image: '/assets/images/oca.jpeg' },
        { id: 3, title: 'Disarmato', text: 'Di Pasqualino Pugliese', image: '/assets/images/pugliese.jpeg' },
        { id: 4, title: 'Battitiperminuto', text: 'Di Lorenzo Maria Alvaro', image: '/assets/images/alvaro.jpeg' },
        { id: 5, title: 'La Zanzarella', text: 'Di Elena Zanella', image: '/assets/images/zanella.jpeg' },
        { id: 6, title: 'Impact Q&A', text: 'Di Laura Orestano', image: '/assets/images/orestano.jpeg' },
        { id: 7, type: 'footer', text: 'Tutti i blog', image: '/assets/icons/arrowRightBlack.svg' },
    ];

    return (
        <section className="w-full bg-gray-100">

            <div className="hidden md:grid grid-cols-12 h-[212px] border border-black">
                {blogItems
                    .filter((item) => item.id !== 7)
                    .map((item, index) => (
                        <div key={index} className="col-span-2 flex items-center justify-center border-r border-black last:border-r-0">
                            {item.type === 'title' ? (
                                <h2 className="text-[40px] font-bold text-red-600 text-center">{item.text}</h2>
                            ) : (
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src={item.image!}
                                        alt={item.title!}
                                        width={84}
                                        height={84}
                                        className="rounded-full object-cover"
                                    />
                                    <h3 className="font-bold mt-2 text-[18px]">{item.title}</h3>
                                    <p className="text-[14px] text-gray-600">{item.text}</p>
                                </div>
                            )}
                        </div>
                    ))}
            </div>

            <div className="grid grid-cols-12 md:hidden border border-black">
                {blogItems
                    .filter((item) => item.id !== 6)
                    .map((item, index) => (
                        <div
                            key={index}
                            className={`col-span-6 h-[188px] flex items-center justify-center border-b border-black 
                    ${index % 2 === 0 ? 'border-r' : ''}`}
                        >
                            {item.type === 'title' || item.type === 'footer' ? (<div className="flex flex-col items-center text-center">
                                <h2
                                    className={`text-[16px] font-bold text-center ${item.type === 'title' ? 'text-red-600' : 'text-black'
                                        }`}
                                >
                                    {item.text}
                                </h2>

                                {item.type === 'footer' && (
                                    <Image
                                        src={item.image!}
                                        alt={item.text!}
                                        width={24}
                                        height={24}
                                        className="rounded-full object-cover mt-2"
                                    />
                                )}
                            </div>
                            ) : (
                                <div className="flex flex-col items-center text-center">
                                    <Image
                                        src={item.image!}
                                        alt={item.text!}
                                        width={64}
                                        height={64}
                                        className="rounded-full object-cover"
                                    />
                                    <h3 className="font-bold mt-2 text-[16px]">{item.title}</h3>
                                    <p className="text-[14px] text-gray-600">{item.text}</p>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </section>
    );
}
