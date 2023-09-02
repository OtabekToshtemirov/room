import left from '../images/icon-angle-left.svg'
import right from '../images/icon-angle-right.svg'


const Slider = ({rightClick, leftClick, data, current}) => {

    


    

    return (
        <>
            <section className=" w-full mx-auto p-0 min-w-min">
                <div className="grid lg:grid-cols-2 grid-cols-1  ">
                    <div className={'relative'}>
                        <img className="w-full" src={data[current].image} alt="image1"/>
                        <ul className=" absolute -bottom-1.5 right-0 flex z-20  lg:hidden">
                            <li>
                                <button
                                    onClick={leftClick}
                                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                >
                                    <img src={left} alt="" className="p-6" />
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={rightClick}
                                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                >
                                    <img src={right} alt="" className="p-6" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative mt-8">
                        <h2 className={'lg:text-3xl text-2xl   uppercase font-semibold tracking-widest  p-10 lg:pb-0 pb-8'}>
                            {data[current].title}
                        </h2>
                        <p
                            className={'text-slate-600 opacity-75  leading-5  font-light text-base lg:mb-0 mb-20  p-10'}
                        >
                            {data[current].description}
                        </p>
                        <div className={'lg:block  hidden'}>
                            <ul className="absolute -bottom-1.5 left-0 flex ">
                                <li>
                                    <button
                                        onClick={leftClick}
                                        className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                    >
                                        <img src={left} alt="" className="p-6" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={rightClick}
                                        className="bg-black hover:bg-neutral-700 transition-all duration-200"
                                    >
                                        <img src={right} alt="" className="p-6" />
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            


        </>
    );
};




export default Slider;