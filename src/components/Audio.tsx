
'use client';

export default function Audio() {


    return (
        <div className='flex justify-center items-center gap-1'>
            {Array.from({ length: 30 }).map((_, index) => (
                <div
                    key={index}
                    className="w-1 bg-black animate-wave"
                    style={{ height: `${Math.floor(Math.random() * (40 - 14 + 1)) + 14}px` }}
                ></div>
            ))}
        </div>
    );
}
