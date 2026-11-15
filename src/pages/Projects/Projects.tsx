import ProjectList from '../../components/Projects/ProjectList'

function Projects(){
    return(
        <div className="min-h-screen">
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber">
                        MUNKÁIM
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Projektjeim<span className="text-amber">.</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-warm-white/70">
                        Az eddigi projektjeim és fejlesztéseim, amelyeken keresztül bemutatom a megszerzett tudásomat és a használt technológiákat.
                    </p>
                </div>
                <ProjectList />

            </section>
        </div>
    )
}
export default Projects