'use client';

import { useEffect, useState } from "react";

export default function Audio() {
    const [heights, setHeights] = useState<number[]>([]);

    useEffect(() => {
        setHeights(Array.from({ length: 30 }, () => Math.floor(Math.random() * (40 - 14 + 1)) + 14));
    }, []);

    return (
        <div className='flex justify-center items-center gap-1'>
            {heights.length > 0 ? (
                heights.map((height, index) => (
                    <div
                        key={index}
                        className="w-1 bg-black animate-wave"
                        style={{ height: `${height}px` }}
                    ></div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
