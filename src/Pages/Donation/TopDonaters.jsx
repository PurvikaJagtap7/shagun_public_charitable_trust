import React from 'react';
const TopDonators = () => {
    const imgSrc = "https://static.vecteezy.com/system/resources/previews/000/546/107/original/businessman-in-suit-head-vector-icon.jpg";
    return (
        <>
            <div className="px-4 pt-6 pb-10 md:px-14 md:pt-8 md:pb-14">
                <div className="md:mb-6 mb-4">
                    <p className="font-normal md:text-3xl text-xl md:mb-2 mb-1">Let others smile big with your small contributions</p>
                    <p className="font-normal md:text-xl text-sm">Meet our top donaters</p>
                </div>
                <div className="relative flex justify-end items-start left-0">
                    {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                        <div
                            key={index}
                            style={{
                                left: `${index === 1 ? 0 : index * 30}px`, // Reduce left space for the first image
                                marginLeft: index === 1 ? '3px' : '-27px',
                                backgroundImage: `url('${imgSrc}')`,
                                backgroundSize: 'cover'
                            }}
                            className="absolute w-16 h-16 rounded-full border border-black z-10 mr-4 shadow-lg"
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TopDonators;