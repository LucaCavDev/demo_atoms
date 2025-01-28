'use client';

import Image from 'next/image';

export default function NewsJustDesktop() {
    const articles = [
        {
            category: "INNOVAZIONE",
            title: "Gli anziani del Sicomoro spopolano su TikTok",
            imageBg: "/assets/images/innovazione.jpeg",
            author: "Di Luigi Alfonso",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/alfonso.jpeg",
            featured: true,
        },
        {
            category: "DISABILITÀ",
            title: "'Emergenza sordi': quando un'app ti salva la vita",
            imageBg: "/assets/images/disabilità.jpeg",
            author: "Di Sara Bellingeri",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/bellingeri.jpeg",
        },
        {
            category: "TRAIETTORIE",
            title: "Diego, il fruttivendolo che ha scelto la cooperazione sociale",
            imageBg: "/assets/images/traiettorie.jpeg",
            author: "Di Giampaolo Cerri",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/cerri.jpeg",
        },
        {
            category: "SOCIALE",
            title: "Pedalare 'Sicily Coast to Coast' per essere più inclusivi",
            imageBg: "/assets/images/sociale.jpeg",
            author: "Di Giovanni Gamba",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/gamba.jpeg",
        },
        {
            category: "UCRAINA",
            title: "Leopoli, andata + ritorno",
            imageBg: "/assets/images/ucraina1.png",
            author: "Di Gilda Sciortino",
            date: "14 luglio 2022",
            imageAuthor: "/assets/images/sciortino.jpeg",
        },
    ];

    const renderAuthor = (article: any, inline: boolean = true) => {
        return (
            <div className="flex gap-2 mt-2 text-white">
                <Image
                    src={article.imageAuthor}
                    alt="Author"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="text-sm opacity-80">
                    <p>{article.author}</p>
                    <small>{article.date}</small>
                </div>

            </div>
        );
    };

    return (
        <>
            <section className="hidden md:block">
                <div className="grid grid-cols-12 min-h-[746px]">
                    <div className="col-span-6">
                        <div className="grid grid-rows-4 h-full">
                            {articles.slice(0, 4).map((article, index) => (
                                <div key={index} className="relative w-full h-full overflow-hidden border-b border-black">
                                    <Image
                                        src={article.imageBg}
                                        alt={article.title}
                                        fill
                                        className="w-full h-full object-cover brightness-50"
                                    />

                                    <div className="absolute inset-0 flex items-end p-4 bg-black/50 text-white">


                                        <div className='grid grid-cols-12 w-full h-full'>
                                            <div className='col-span-9 h-full flex flex-col justify-between'>


                                                <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">
                                                    {article.category}
                                                </span>
                                                <h4 className="font-bold mt-2 text-md leading-tight">{article.title}</h4>
                                                {renderAuthor(article)}

                                            </div>
                                            <div className='col-span-3 flex justify-end items-center'>
                                                <Image src="/assets/icons/arrowRight.svg" alt="Arrow Icon" width={24} height={24} />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={articles[4].imageBg!}
                                alt={articles[4].title}
                                fill
                                className="w-full h-full object-cover brightness-50"
                            />
                            <div className="absolute inset-0 flex items-end p-8 bg-black/50 text-white">
                                <div className="w-full">
                                    <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">
                                        {articles[4].category}
                                    </span>
                                    <h2 className="font-bold mt-2 text-2xl leading-tight">{articles[4].title}</h2>
                                    {renderAuthor(articles[4], false)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
