'use client';

import { useState } from 'react';
import Image from 'next/image';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dropdown menu component
    const DropdownMenu = () => {
        return (<>
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-1 border-black z-50">
                <div className="grid grid-cols-12 border-black">
                    {[
                        { title: "Articoli", description: "Trend, dati e novità del Terzo Settore" },
                        { title: "Storie", description: "Letture ed approfondimenti dei fenomeni complessi." },
                        { title: "Interviste", description: "Racconti reali di persone ed organizzazioni." },
                        { title: "Opinioni", description: "Riflessioni e confronti di nostri opinionisti." },
                        { title: "Podcast", description: "Un luogo per dare voce ai protagonisti della sostenibilità." },
                        { title: "Bookazine", description: "Una rivista da leggere e un libro da conservare." },
                    ].map((item, index) => (
                        <div key={index} className='col-span-12  flex flex-col justify-end border-r border-b border-black p-[40px]'>
                            <h2 className="font-bold text-[46px]">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom menu links */}
                <div className="grid grid-cols-6  text-center border-b border-x border-black">
                    {["Chi siamo", "Comitato editoriale", "Servizi", "Agenda / Eventi", "Mappa dell'attivismo", "Inchieste crowdfunding"].map((link, index) => (
                        <div key={index} className={`p-4 col-span-6 flex items-center justify-center ${index < 5 ? 'border-b border-black' : ''}`}>
                            {link}
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-1 border-black shadow-md z-50">
                <div className="grid grid-cols-3 border-black">
                    {[
                        { title: "Articoli", description: "Trend, dati e novità del Terzo Settore" },
                        { title: "Storie", description: "Letture ed approfondimenti dei fenomeni complessi." },
                        { title: "Interviste", description: "Racconti reali di persone ed organizzazioni." },
                        { title: "Opinioni", description: "Riflessioni e confronti di nostri opinionisti." },
                        { title: "Podcast", description: "Un luogo per dare voce ai protagonisti della sostenibilità." },
                        { title: "Bookazine", description: "Una rivista da leggere e un libro da conservare." },
                    ].map((item, index) => (
                        <div key={index} className='h-[313px] flex flex-col justify-end border-r border-b border-black p-[40px]'>
                            <h2 className="font-bold text-[46px]">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom menu links */}
                <div className="grid grid-cols-6  text-center ">
                    {["Chi siamo", "Comitato editoriale", "Servizi", "Agenda / Eventi", "Mappa dell'attivismo", "Inchieste crowdfunding"].map((link, index) => (
                        <div key={index} className={`p-4 h-[130px] flex items-center justify-center ${index < 5 ? 'border-r border-black' : ''}`}>
                            {link}
                        </div>
                    ))}
                </div>
            </div>
        </>);
    };

    return (
        <header className="w-full relative">

            <div className="md:hidden">
                <div className="bg-white w-full flex justify-between items-center p-4 h-[44px]">
                    <div></div>
                    <div className="flex items-center gap-2">
                        <Image src="/assets/icons/user.svg" alt="User Icon" width={24} height={24} />
                        <span className="text-gray-600 text-lg font-medium">Accedi</span>
                    </div>
                </div>

                <div className="w-full flex border-y border-black h-[40px]">
                    <button className="w-1/2  flex justify-center items-center  border-r border-black">
                        Contribuisci
                    </button>
                    <button className="w-1/2  flex justify-center items-center ">
                        Abbonati
                    </button>
                </div>

                <div className="relative border-b border-black w-full flex items-center h-[52px]">
                    <button
                        className="p-2 flex justify-center items-center border-r border-black h-full w-[52px]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Image
                            src={isMenuOpen ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'}
                            alt="Menu Icon"
                            width={24}
                            height={24}
                        />
                    </button>

                    {!isMenuOpen && (
                        <>
                            <input
                                type="text"
                                placeholder="Cerca..."
                                className="flex-grow mx-4 p-2  focus:outline-none"
                            />
                            <button className="p-2  h-full w-[52px] flex justify-center items-center border-l border-black">
                                <Image src="/assets/icons/search.svg" alt="Search Icon" width={24} height={24} />
                            </button>
                        </>
                    )}

                    {isMenuOpen && <DropdownMenu />}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="w-full flex justify-between items-center h-[48px] px-[24px]">
                    <div className=''>
                        <button className="px-5">Contribuisci</button>
                        <button className="px-5">Abbonati</button>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/icons/user.svg" alt="User Icon" width={24} height={24} />
                        <button className="px-5">Accedi</button>
                    </div>
                </div>

                <div className="relative w-full flex items-center shadow-md border-y border-black h-[96px]">
                    <button
                        className="p-2 border-r border-black h-[96px] w-[96px] flex justify-center items-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Image
                            src={isMenuOpen ? '/assets/icons/close.svg' : '/assets/icons/menu.svg'}
                            alt="Menu Icon"
                            width={24}
                            height={24}
                        />
                    </button>

                    {!isMenuOpen && (
                        <>
                            <input
                                type="text"
                                placeholder="Cerca..."
                                className="flex-grow mx-4 p-2  focus:outline-none"
                            />
                            <button className="p-2 border-l border-black  h-[96px] w-[96px] flex justify-center items-center">
                                <Image src="/assets/icons/search.svg" alt="Search Icon" width={24} height={24} />
                            </button>
                        </>
                    )}

                    {isMenuOpen && <DropdownMenu />}
                </div>


            </div>
        </header>
    );
}
