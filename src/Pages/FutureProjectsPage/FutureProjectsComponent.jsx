import React from 'react'
const FutureProjectsComponent = ({img, title, description, flexStyle}) => {
    return (
        <>
            <div className='mt-6 md:mb-20 mb-10 md:px-2'>
                <div className={`container mx-auto flex md:${flexStyle} flex-col xl:justify-center`}>
                    <div className='xl:w-[30%] md:w-full h-auto w-[90%] xl:mx-0 mx-auto'>
                        <img src={img} alt="" className='w-[100%] rounded-xl' />
                    </div>
                    <div className='xl:px-10 md:px-11 px-6 xl:w-[50%] w-full xl:mt-3 mt-3'>
                        <p className='font-bold md:text-2xl text-xl md:mb-5 mb-2'>{title}</p>
                        <p className='text-sm '>
                        {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FutureProjectsComponent
