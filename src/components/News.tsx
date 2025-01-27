'use client';

import { useState } from 'react';
import Image from 'next/image';


export default function News() {
    const [activeCategory, setActiveCategory] = useState("Tutti i temi");
    const categories = [
        "Tutti i temi",
        "Ambiente",
        "Economia",
        "Mondo",
        "Non Profit",
        "Politica",
        "Società",
        "Welfare"
    ];

    const articles = [
        {
            category: "MIGRANTI",
            title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
            imageBg: "/assets/images/migranti.jpeg",
            author: "Di Alessandro Puglia",
            date: "29 giugno 2022",
            imageAuthor: "/assets/images/puglia.jpeg",
            featured: true,
        },
        {
            category: "ALLARMI",
            title: "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
            imageBg: "/assets/images/allarmi.png",
            author: "Di Ugo Lombi",
            date: "14 Luglio 2022",
            imageAuthor: "/assets/images/lombi.png",
        },
        {
            category: "ESPERIMENTI",
            title: "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
            imageBg: "/assets/images/esperimenti.jpeg",
            author: "Di Diletta Grella",
            date: "14 luglio 2022",
            imageAuthor: "/assets/images/grella.jpeg",
            audio: true
        },
        {
            category: "UCRAINA",
            title: "Nelle città italiane tutti in piazza per e con Kiev",
            imageBg: "/assets/images/ucraina.png",
            author: "Di Anna Spena",
            date: "14 luglio 2022",
            imageAuthor: "/assets/images/spena.jpeg",
        },
        {
            category: "PROGETTO ARCA",
            title: "“Qui Odessa”, fotografie, progetti e solidarietà",
            imageBg: null,
            bgColor: "#FF0000",
            author: "Di Redazione",
            date: "13 luglio 2022",
            imageAuthor: "/assets/images/redazione.png",
            support: true,
        },
        {
            category: "ADOLESCENTI",
            title: "Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne",
            imageBg: "/assets/images/adolescenti.jpeg",
            author: "Di Luca Cereda",
            date: "13 luglio 2022",
            imageAuthor: "/assets/images/cereda.jpeg",
            support: true,
        },
        {
            category: "ECONOMIA CIVILE",
            title: "“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento",
            imageBg: "/assets/images/economia_civile.jpeg",
            author: "Di Emiliano Moccia",
            date: "11 luglio 2022",
            imageAuthor: "/assets/images/moccia.jpeg",
            support: true,
        },
        {
            category: "SPORT",
            title: "Troppi abusi nello sport minorile, il governo interviene",
            imageBg: "/assets/images/sport.jpeg",
            author: "Di Diletta Grella",
            date: "7 luglio 2022",
            imageAuthor: "/assets/images/grella.jpeg",
            audio: true,
            support: true,
        },
        {
            category: "SOCIETÀ",
            title: "Donne e nuove generazioni: con loro riparte l'Italia",
            imageBg: "/assets/images/società.jpeg",
            author: "Di Anna Spena",
            date: "7 luglio 2022",
            imageAuthor: "/assets/images/spena.jpeg",
            support: true,
        }
    ];


    const renderAuthor = (article: any, inline: boolean = false) => {
        return (
            <div className={`flex text-white gap-2 mt-2 ${inline ? 'flex-row items-center' : 'flex-col items-start'}`}>
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
                {
                    inline === false ?
                        <Image src="/assets/icons/arrowRight.svg" alt="User Icon" width={24} height={24} /> : null
                }

            </div>
        );
    }

    return (
        <>
            <nav className="w-full border-b border-black bg-white hidden md:block h-[96px]  px-[24px]">
                <div className=" h-full flex items-center justify-between ">

                    <ul className="flex space-x-6 h-full">
                        {categories.map((item) => (
                            <li
                                key={item}
                                className={` cursor-pointer flex items-center relative font-bold`}
                                onClick={() => setActiveCategory(item)}
                            >
                                {item}
                                {activeCategory === item && (
                                    <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600"></span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-lg">
                            <span className="mr-1">Aa</span>
                        </button>
                        <button className="p-2 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)]">
                            <img src="/assets/icons/image.svg" alt="Icon" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>
            <section className="w-full">
                {/* Category Header */}
                <div className="flex justify-between items-center bg-[#F4F4F4] h-[174px] py-[64px] px-[24px]">
                    <h1 className="text-3xl font-bold">Tutti i temi</h1>
                    <div className="flex flex-wrap gap-2 ">
                        {categories.filter((category) => category !== "Tutti i temi").map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] uppercase 
                                    ${activeCategory === category
                                        ? 'bg-red-600 text-white' // Prioritize active state
                                        : category === 'Ambiente'
                                            ? 'bg-[#E2F1E8]'
                                            : category === 'Mondo'
                                                ? 'bg-[#F1DADA]'
                                                : category === 'Politica'
                                                    ? 'bg-[#F4F1DE]'
                                                    : 'bg-white'
                                    }
                                `}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="">
                    {/* First article (full width) */}
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 relative">
                            <div className="relative w-full h-[506px]  overflow-hidden">

                                <Image
                                    src={articles[0].imageBg!}
                                    alt={articles[0].title}
                                    fill
                                    className="w-full h-full object-cover brightness-75"
                                /> : null

                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30 space-y-6">
                                    <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 rounded inline-block w-fit border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)]">
                                        {articles[0].category}
                                    </span>
                                    <h3 className="text-3xl text-white font-bold leading-tight w-1/2">{articles[0].title}</h3>
                                    {renderAuthor(articles[0], true)}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second and nested third and fourth articles */}
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-6 relative">
                            <div className="relative w-full h-[845px] overflow-hidden">
                                <Image
                                    src={articles[1].imageBg!}
                                    alt={articles[1].title}
                                    fill
                                    className="w-full h-full object-cover brightness-75"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30 text-white space-y-6">
                                    <span className="text-black text-xs font-bold uppercase bg-[#E2F1E8] px-3 py-1 rounded inline-block w-fit border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)]">
                                        {articles[1].category}
                                    </span>
                                    <h3 className="font-bold mt-2">{articles[1].title}</h3>
                                    {renderAuthor(articles[1])}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 relative w-full h-[423px] overflow-hidden">
                                    <Image
                                        src={articles[2].imageBg!}
                                        alt={articles[2].title}
                                        fill
                                        className="w-full h-full object-cover brightness-75"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30 text-white space-y-6">
                                        <span className="text-black text-xs font-bold uppercase bg-[#E2F1E8] px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">
                                            {articles[2].category}
                                        </span>

                                        {
                                            articles[2].audio ? <div className='rounded bg-white flex justify-between items-center h-[64px] text-black'>

                                                <div className='px-6 flex'>
                                                    <div className='border-l-2 border-black pr-1 h-[24px]'></div>
                                                    <div className='border-l-2 border-black pr-1 h-[24px]'></div>
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    {/* {Array.from({ length: 50 }).map((_, index) => (
                                                        <div
                                                            key={index}
                                                            className='border-l-2 border-black pr-1'
                                                            style={{ height: `${Math.floor(Math.random() * (40 - 14 + 1)) + 14}px` }}
                                                        ></div>
                                                    ))} */}
                                                </div>
                                                <div className='px-6'>
                                                    -0:34
                                                </div>
                                            </div> : null
                                        }
                                        <h3 className="text-lg font-bold mt-2">{articles[2].title}</h3>
                                        {renderAuthor(articles[2])}
                                    </div>
                                </div>

                                <div className="col-span-12 relative w-full h-[422px] overflow-hidden">
                                    <Image
                                        src={articles[3].imageBg!}
                                        alt={articles[3].title}
                                        fill
                                        className="w-full h-full object-cover brightness-75"
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-black/30 text-white space-y-6">
                                        <span className="text-black text-xs font-bold uppercase bg-[#F1DADA] px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">
                                            {articles[3].category}
                                        </span>
                                        <h3 className="text-lg font-bold mt-2">{articles[3].title}</h3>
                                        {renderAuthor(articles[3])}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Support section (full width) */}
                    <div className="grid grid-cols-12 gap-4 bg-[#F4F1DE] px-8 h-[214px] border-b border-black">
                        <div className="col-span-12 flex justify-between items-center">
                            <h2 className="text-4xl font-bold">Il tuo supporto è fondamentale</h2>
                            <a href="#" className="font-semibold text-black hover:underline flex justify-center items-center mt-4">
                                Dai il tuo contributo →
                            </a>
                        </div>
                    </div>

                    {/* Fifth, Sixth, and Seventh articles */}
                    <div className="grid grid-cols-12 ">
                        {[4, 5, 6].map((index) => (

                            <div key={index} className="col-span-4 relative h-[436px] w-full overflow-hidden">
                                {
                                    !articles[index].imageBg ?
                                        (<div className="w-full h-full"
                                            style={{ backgroundColor: articles[index].bgColor }}></div>) : (<Image
                                                src={articles[index].imageBg!}
                                                alt={articles[index].title}
                                                fill
                                                className="w-full h-full object-cover brightness-75"
                                            />)
                                }

                                <div className="absolute inset-0 flex flex-col justify-between p-8 bg-black/30 text-white">
                                    <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">

                                        {articles[index].category}
                                    </span>
                                    <h3 className="font-bold mt-2 w-2/3">{articles[index].title}</h3>
                                    {renderAuthor(articles[index])}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Eight and Ninth articles */}
                    <div className="grid grid-cols-12 h-[482px]">
                        <div className="col-span-4 relative">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={articles[7].imageBg!}
                                    alt={articles[7].title}
                                    fill
                                    className="w-full h-full object-cover brightness-75"
                                />
                                <div className="absolute inset-0 flex flex-col justify-between p-8 bg-black/30 text-white">
                                    <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">

                                        {articles[7].category}
                                    </span>
                                    {
                                        articles[2].audio ? <div className='rounded bg-white flex justify-between items-center h-[64px] text-black'>

                                            <div className='px-6 flex'>
                                                <div className='border-l-2 border-black pr-1 h-[24px]'></div>
                                                <div className='border-l-2 border-black pr-1 h-[24px]'></div>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                {/* {Array.from({ length: 50 }).map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className='border-l-2 border-black pr-1'
                                                        style={{ height: `${Math.floor(Math.random() * (40 - 14 + 1)) + 14}px` }}
                                                    ></div>
                                                ))} */}
                                            </div>
                                            <div className='px-6'>
                                                -03:34
                                            </div>
                                        </div> : null
                                    }
                                    <h3 className="font-bold mt-2">{articles[7].title}</h3>
                                    {renderAuthor(articles[7])}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 relative">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={articles[8].imageBg!}
                                    alt={articles[8].title}
                                    fill
                                    className="w-full h-full object-cover brightness-75"
                                />
                                <div className="absolute inset-0 flex justify-end p-8 bg-black/30 text-white">


                                    <div className='w-1/2'>
                                        <span className="text-black text-xs font-bold uppercase bg-white px-3 py-1 border border-black rounded shadow-[-3px_3px_0px_0px_rgb(0,0,0)] inline-block w-fit">

                                            {articles[8].category}
                                        </span>
                                        <h2 className="font-bold mt-2">{articles[8].title}</h2>
                                        {renderAuthor(articles[8])}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    );
}
