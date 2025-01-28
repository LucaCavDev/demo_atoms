'use client';

import { Article } from '@/interfaces/interfaces';
import Image from 'next/image';

export default function News2() {
    const articles: Article[] = [
        {
            category: "IMPRESA SOCIALE",
            title: "La Kasbah mazarese nella quale si gusta la cultura araba",
            imageBg: "/assets/images/impresa_sociale.png",
            author: "Di Giovanni Gavardi",
            date: "3 luglio 2022",
            imageAuthor: "/assets/images/gavardi.jpeg",
            featured: true,
        },
        {
            category: "SPONSORED",
            title: "Sostenibilità sociale: accordo tra Dynamo Academy e Acsi",
            bgColor: "#FFFFFF",
            author: "Di Dynamo Academy",
            imageAuthor: "/assets/images/dynamoAcademy.png",
        },
        {
            category: "PERSONE",
            title: "Uccisa ad Haiti suor Luisa, era l'angelo dei bambini",
            imageBg: "/assets/images/persone.jpeg",
            author: "Di Lucia Capuzzi",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/capuozzi.jpeg",
        },
        {
            category: "NETWORKING",
            title: "Il fundraising in rotta verso Giardini-Naxos",
            bgColor: "#FF0000",
            author: "Di Redazione",
            date: "1 luglio 2022",
            imageAuthor: "/assets/images/redazione.png",
        },
        {
            category: "SOCIETA' CIVILE",
            title: "Lisa, il modello Croce Rossa per l'inclusione lavorativa",
            imageBg: "/assets/images/società_civile.jpeg",
            author: "Di Francesco Palazzo",
            date: "22 giugno 2022",
            imageAuthor: "/assets/images/palazzo.png",
        },
    ];

    const renderAuthor = (article: Article, inline: boolean = false) => {
        return (
            <div className={`flex gap-2 mt-2 ${inline ? 'flex-row items-center' : 'flex-col items-start'}`}>
                <Image
                    src={article.imageAuthor}
                    alt="Author"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="text-sm opacity-80">
                    <p>{article.author}</p>
                    <small>{article.date}</small>
                </div>
                {!inline && <Image src="/assets/icons/arrowRight.svg" alt="Arrow Icon" width={24} height={24} />}
            </div>
        );
    };

    return (
        <>
            <section>
                <div className="hidden md:block">
                    <div className="grid grid-cols-12 h-[558px]">
                        <div className="col-span-12">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={articles[0].imageBg!}
                                    alt={articles[0].title}
                                    fill
                                    className="w-full h-full object-cover brightness-75"
                                />
                                <div className="absolute inset-0 flex justify-end items-center p-8 bg-black/30 text-white">
                                    <div className="w-1/3">
                                        <span className={`text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit`}>
                                            {articles[0].category}
                                        </span>
                                        <h2 className="font-bold mt-2 text-2xl">{articles[0].title}</h2>
                                        {renderAuthor(articles[0])}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second grid with 4 elements */}
                    <div className="h-[372px] grid grid-cols-12">
                        {articles.slice(1, 5).map((article, index) => (
                            <div key={index} className="col-span-3">
                                <div className="relative w-full h-full overflow-hidden">
                                    {article.imageBg ? (
                                        <Image
                                            src={article.imageBg}
                                            alt={article.title}
                                            fill
                                            className="w-full h-full object-cover brightness-75"
                                        />
                                    ) : (
                                        <div className="w-full h-full" style={{ backgroundColor: article.bgColor }}></div>
                                    )}

                                    <div className={`absolute inset-0 flex justify-end items-center p-8 bg-black/30 ${article.bgColor === '#FFFFFF' ? 'text-black' : 'text-white'}`} style={{ backgroundColor: article.bgColor }}>
                                        <div className="w-full">
                                            <span className={`${article.category === 'SPONSORED' ? 'text-red-600' : 'text-black border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] bg-white '}  text-xs font-bold uppercase px-3 py-1  inline-block w-fit`}>
                                                {article.category}
                                            </span>
                                            <h2 className="font-bold mt-2 text-xl">{article.title}</h2>
                                            {renderAuthor(article)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="block md:hidden">
                    {articles.map((article, index) => (
                        <div key={index} className="w-full border-b border-black p-4" style={{ backgroundColor: article.bgColor || 'transparent' }}>
                            {article.imageBg && index === 0 && (
                                <div className="relative w-full h-[200px] overflow-hidden">
                                    <Image
                                        src={article.imageBg}
                                        alt={article.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 right-0 bg-gray-200 w-[50px] h-[50px] p-3">

                                        <Image
                                            src={'assets/icons/play.svg'}
                                            alt={article.title}
                                            height={10}
                                            width={10}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="my-4">
                                <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">
                                    {article.category}
                                </span>
                                <h2 className="font-bold mt-2 text-xl">{article.title}</h2>
                                {renderAuthor(article, true)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
