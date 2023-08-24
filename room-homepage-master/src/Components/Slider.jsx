import {data} from '../data.js';
import { useState } from 'react';


 const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    return (
        <>
            <section className=" w-full mx-auto p-0 min-w-min">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
                    <div>
                        <img className="w-full" src={data[current].image} alt="image1"/>
                    </div>
                    <div className="lg:p-6 p-8">
                        <h2 className={'lg:text-2xl text-base  uppercase font-semibold tracking-widest mt-4'}>
                            {data[current].title}
                        </h2>
                        <p
                            className={'text-slate-600 opacity-75 mt-6 leading-5  font-light text-base  mb-4'}
                        >
                            {data[current].description}
                        </p>
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    <button className="bg-slate-600 text-white px-4 py-2 rounded-full"
                            onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>Prev
                    </button>
                    <button className="bg-slate-600 text-white px-4 py-2 rounded-full"
                            onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>Next
                    </button>
                </div>
            </section>

            

        </>
    );
};

export default Slider;