import darkChair from '../../../../room/room-homepage-master/src/images/image-about-dark.jpg'
import lightChair from '../../../../room/room-homepage-master/src/images/image-about-light.jpg'

const Lowersection = () => {
    return (


        <section className="grid grid-cols-1 lg:grid-cols-3">
            <article>
                <img src={darkChair} alt="" className="w-full" />
            </article>

            <article className="p-8 lg:p-12">
                <h2 className="font-semibold text-2xl lg:text-3xl uppercase">
                    About our furniture
                </h2>
                <p className="text-slate-900 opacity-75 mt-6">
                    Our multifunctional collection blends design and function to suit
                    your individual taste. Make each room unique, or pick a cohesive
                    theme that best express your interests and what inspires you. Find
                    the furniture pieces you need, from traditional to contemporary
                    styles or anything in between. Product specialists are available to
                    help you create your dream space.
                </p>
            </article>

            <article>
                <img src={lightChair} alt="" className="w-full" />
            </article>
        </section>


    );
};

export default Lowersection;