'use client';

export default function Footer() {
    const menu = [
        "Il Gruppo",
        "Note Legali",
        "Chi Siamo",
        "Condizioni d'uso",
        "Privacy",
        "Scrivici",
        "Pubblicità"
    ];

    return (
        <footer className="w-full bg-[#F4F4F4] min-h-[120px] flex items-center px-[24px] py-6 md:py-0">
            <div className=" flex flex-col md:flex-row justify-between w-full ">

                <ul className="flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-4 text-sm md:text-base text-gray-700">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <button className="hover:underline focus:outline-none md:font-normal font-bold text-base md:text-sm">
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Copyright Section */}
                <div className="text-sm md:text-base  text-left md:text-right mt-4 md:mt-0">
                    © 1994-2022 Vita Società Editoriale S.p.A.
                </div>
            </div>
        </footer>
    );
}
