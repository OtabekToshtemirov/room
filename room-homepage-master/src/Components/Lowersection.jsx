import darkChair from '../images/image-about-dark.jpg'
import lightChair from '../images/image-about-light.jpg'

const Lowersection = () => {
    return (


        <section className=" w-full mx-auto p-0 min-w-min">
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center ">
                <div>
                    <img className="w-full" src={darkChair} alt="image1"/>
                </div>
                <div className="lg:p-6 p-8">
                    <h2 className={'lg:text-2xl text-base  uppercase font-semibold tracking-widest mt-4'}>
                        About our furniture
                    </h2>
                    <p
                        className={'text-slate-600 opacity-75 mt-6 leading-5  font-light text-base  mb-4'}
                    >
                        Our multifunctional collection blends design and function to suit your individual taste. Make
                        each room unique, or pick a cohesive theme that best express your interests and what inspires
                        you. Find the furniture pieces you need, from traditional to contemporary styles or anything in
                        between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
                <div>
                    <img className="w-full" src={lightChair} alt="image2"/>
                </div>
            </div>
        </section>


    );
};

export default Lowersection;