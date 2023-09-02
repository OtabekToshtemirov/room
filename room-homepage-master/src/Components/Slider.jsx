import {data} from '../data.js';
import {useState} from 'react';


import left from '../../images/icon-angle-left.svg'
import right from '../../images/icon-angle-right.svg'
import arrow from '../../images/icon-arrow.svg'


const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    return (
        <>
            <section className=" w-full mx-auto p-0 min-w-min">
                <div className="grid lg:grid-cols-2 grid-cols-1 r ">
                    <div className={'relative'}>
                        <img className="w-full" src={data[current].image} alt="image1"/>
                        <div className="lg:hidden md:block absolute bottom-0 right-0 flex justify-center border-white b-4">
                            <button
                                className="hover:bg-slate-500 bg-slate-900 text-white px-6 py-4  justify-between items-center"
                                onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}><img src={left}
                                                                                                          alt=""/>
                            </button>
                            <button
                                className="hover:bg-slate-500  bg-slate-900 text-white px-6 py-4 justify-between items-center"
                                onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}><img src={right}
                                                                                                          alt=""/>
                            </button>
                        </div>

                    </div>
                    <div className="relative p-8 lg:p-12">
                        <h1 className="text-slate-900 text-3xl lg:text-5xl">
                            {data[current].title}
                        </h1>
                        <p className="text-slate-900 opacity-75 my-6">{data[current].description}</p>
                        <button
                            className="flex items-center gap-4 uppercase hover:opacity-75"
                            style={{
                                letterSpacing: "0.7rem",
                            }}
                        >
                            Shop Now <img src={arrow} alt="" />
                        </button>

                        <div className="lg:block hidden absolute bottom-0 left-0 flex justify-center border-white b-4">
                            <button
                                className="hover:bg-slate-500 bg-slate-900 text-white px-6 py-4  justify-between items-center"
                                onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}><img src={left}
                                                                                                          alt=""/>
                            </button>
                            <button
                                className="hover:bg-slate-500  bg-slate-900 text-white px-6 py-4 justify-between items-center"
                                onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}><img src={right}
                                                                                                          alt=""/>
                            </button>
                        </div>

                    </div>

                </div>

            </section>


        </>
    );
};

export default Slider;