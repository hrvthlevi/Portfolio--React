function Home() {
  return (
    <div>
      {/* Hero szekció */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bemutatkozás */}
            <div>
              <p className="text-terracotta font-medium mb-4">
                Üdvözöllek a portfóliómban!
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-warm-white leading-tight">
                Szoftverfejlesztő
                <br />
                <span className="text-amber">és tesztelő.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg text-warm-white/70 leading-relaxed">
                Leendő szoftverfejlesztőként folyamatosan új technológiákat és
                megoldásokat fedezek fel. Szeretek önállóan és csapatban is
                dolgozni, és minden projektben új kihívásokat keresek.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="/projects"
                  className="rounded-xl bg-terracotta px-6 py-3
                    text-warm-white font-medium hover:bg-amber
                    hover:text-river transition-colors"
                >
                  Projektjeim megtekintése
                </a>

                <a
                  href="/contact"
                  className="rounded-xl border border-white/15
                    bg-carbon/40 backdrop-blur-md px-6 py-3
                    text-warm-white hover:border-amber
                    transition-colors"
                >
                  Kapcsolat
                </a>
              </div>
            </div>

            {/* Portré */}
            <div className="relative flex justify-center items-center">
              <div
                className="absolute w-72 h-72 md:w-96 md:h-96
                  rounded-full bg-terracotta/25 blur-3xl"
              />

              <div
                className="absolute w-72 h-80 md:w-96 md:h-96
                  rounded-[45%_55%_38%_62%/35%_35%_65%_65%]
                  border border-white/10 bg-carbon/20
                  backdrop-blur-sm"
              />

              <img
                src="/images/portrait.jpg"
                alt="Horváth Levente Roland"
                className="relative z-10
                  w-72 h-80 md:w-96 md:h-96
                  object-cover object-center
                  rounded-[40%_60%_45%_55%]
                  border border-white/15
                  shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technológiák szekció */}
      <section className="max-w-6xl mx-auto w-full px-6 pb-20">
        <div
          className="rounded-2xl border border-white/10
          bg-carbon/40 backdrop-blur-xl p-6 md:p-8"
        >
          <div className="mb-6">
            <p className="text-amber text-sm font-medium">TECH STACK</p>

            <h2 className="text-2xl font-bold text-warm-white mt-2">
              Technológiák, amelyekkel dolgozom
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Java",
              "C#",
              "Python",
              "PHP",
              "Laravel",
              "MySQL",
              "HTML5",
              "CSS3",
            ].map((technology) => (
              <div
                key={technology}
                className="rounded-xl border border-white/10
                  bg-river/50 p-4 text-center text-warm-white
                  hover:border-amber/50 hover:bg-carbon
                  transition-all duration-300"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Kiemelt projektek szekció */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="mb-10">
          <p className="text-amber text-sm font-medium">PORTFÓLIÓ</p>

          <h2 className="text-3xl md:text-4xl font-bold text-warm-white mt-2">
            Kiemelt projektjeim
          </h2>

          <p className="text-warm-white/60 mt-4 max-w-2xl">
            Néhány projekt, amelyen dolgoztam, és amelyek bemutatják a
            fejlesztés során megszerzett tapasztalataimat.
          </p>
        </div>

        {/* Projektkártyák helye */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ide kerülnek majd a projektkártyák */}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/projects"
            className="rounded-xl border border-white/15
        bg-carbon/40 backdrop-blur-md px-6 py-3
        text-warm-white hover:border-amber
        transition-colors"
          >
            Összes projekt megtekintése
          </a>
        </div>
      </section>
      {/* Kapcsolat szekció */}
      <section className="max-w-6xl mx-auto w-full px-6 py-20">
        <div
          className="relative overflow-hidden rounded-3xl
    border border-white/10 bg-carbon/40
    backdrop-blur-xl p-8 md:p-14"
        >
          <p className="text-amber text-sm font-medium">KAPCSOLAT</p>

          <h2
            className="text-3xl md:text-5xl font-bold
      text-warm-white mt-4 max-w-2xl"
          >
            Van egy ötleted? Dolgozzunk együtt!
          </h2>

          <p
            className="text-warm-white/60 mt-6 max-w-xl
      leading-relaxed"
          >
            Nyitott vagyok új lehetőségekre, szakmai kapcsolatokra és érdekes
            fejlesztési projektekre.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 rounded-xl
        bg-terracotta px-6 py-3 text-warm-white
        font-medium hover:bg-amber hover:text-river
        transition-colors"
          >
            Vegyük fel a kapcsolatot
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
