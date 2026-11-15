
import { motion } from "motion/react";

function About() {
  return (
    <div className="min-h-screen">

      {/* Bemutatkozás */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="mb-14">
          <p className="text-terracotta font-medium mb-3">
            ISMERJ MEG
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-warm-white">
            Rólam<span className="text-amber">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Bemutatkozás */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-warm-white leading-snug">
              Szenvedélyem a technológia,
              <span className="text-amber"> motivál a fejlődés.</span>
            </h2>

            <div className="mt-8 space-y-5 text-warm-white/70 leading-relaxed">

              <p>
                Szoftverfejlesztő és -tesztelő tanulóként
                érdekelnek a modern technológiák, az
                alkalmazásfejlesztés és a problémamegoldás.
                Szeretek új dolgokat tanulni, különböző
                technológiákkal kísérletezni, és az ötleteimet
                működő alkalmazásokká alakítani.
              </p>

              <p>
                Jelenleg tanulmányaim utolsó évében járok
                a SZÁMALK-Szalézi Technikum és Szakgimnáziumban.
                Szakdolgozatom keretében egy gamifikációra
                épülő önfejlesztő alkalmazást fejlesztek
                React és Laravel technológiákkal.
              </p>

              <p>
                A frontend és backend fejlesztés mellett
                a szoftvertesztelés is érdekel. Fontosnak
                tartom az átgondolt munkavégzést, a
                folyamatos fejlődést és a tiszta,
                karbantartható kódot.
              </p>

            </div>

            {/* Információs kártyák */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-xl border border-white/10
                bg-carbon/40 backdrop-blur-md p-5">

                <p className="text-amber text-sm font-medium">
                  TANULMÁNYOK
                </p>

                <p className="text-warm-white font-semibold mt-2">
                  Utolsó tanév
                </p>
              </div>

              <div className="rounded-xl border border-white/10
                bg-carbon/40 backdrop-blur-md p-5">

                <p className="text-amber text-sm font-medium">
                  FŐ ÉRDEKLŐDÉS
                </p>

                <p className="text-warm-white font-semibold mt-2">
                  Full-stack fejlesztés
                </p>
              </div>

            </div>
          </div>

          {/* Portré */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-72 h-72 md:w-96 md:h-96
              rounded-full bg-terracotta/20 blur-3xl" />

            <div className="relative rounded-3xl
              border border-white/10 bg-carbon/40
              backdrop-blur-xl p-3 shadow-2xl shadow-black/30">

              <img
                src="/images/portrait.jpg"
                alt="Horváth Levente Roland"
                className="w-72 h-96 md:w-96 md:h-120
                  object-cover object-center rounded-2xl"
              />

              <div className="absolute bottom-7 left-7
                right-7 rounded-xl border border-white/15
                bg-river/70 backdrop-blur-xl p-4">

                <p className="text-warm-white font-semibold">
                  Horváth Levente Roland
                </p>

                <p className="text-amber text-sm mt-1">
                  Szoftverfejlesztő és -tesztelő tanuló
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tanulmányok */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="mb-12">
          <p className="text-terracotta font-medium mb-3">
            TANULMÁNYOK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-warm-white">
            Tanulmányi utam<span className="text-amber">.</span>
          </h2>

          <p className="mt-4 text-warm-white/60 max-w-2xl">
            Az eddigi tanulmányaim során folyamatosan
            bővítettem informatikai ismereteimet és
            szakmai tudásomat.
          </p>
        </div>

        <div className="relative ml-3 md:ml-0">

          {/* Idővonal */}
          <div className="absolute left-0 md:left-1/2
            top-2 bottom-2 w-px bg-white/15
            md:-translate-x-1/2" />

          <div className="space-y-10">

            {/* 2019–2022 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12">

              <div className="absolute left-0 top-2 w-3 h-3
                rounded-full bg-terracotta ring-4 ring-river
                md:left-1/2 md:-translate-x-1/2 z-10" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pl-8 md:pl-0 md:text-right"
              >

                <span className="text-amber font-semibold">
                  2019 – 2022
                </span>

                <div className="mt-3 rounded-2xl border
                  border-white/10 bg-carbon/40
                  backdrop-blur-xl p-6">

                  <h3 className="text-lg font-semibold text-warm-white">
                    Számítógép-szerelő, -karbantartó
                  </h3>

                  <p className="text-warm-white/60 mt-2">
                    Bocskai István Református Oktatási Központ
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 2022–2024 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12">

              <div className="absolute left-0 top-2 w-3 h-3
                rounded-full bg-terracotta ring-4 ring-river
                md:left-1/2 md:-translate-x-1/2 z-10" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="pl-8 md:col-start-2"
              >

                <span className="text-amber font-semibold">
                  2022 – 2024
                </span>

                <div className="mt-3 rounded-2xl border
                  border-white/10 bg-carbon/40
                  backdrop-blur-xl p-6">

                  <h3 className="text-lg font-semibold text-warm-white">
                    Érettségi
                  </h3>

                  <p className="text-warm-white/60 mt-2">
                    Bocskai István Református Oktatási Központ
                    Apáczai Csere János Középiskolája
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 2025–Jelenleg */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12">

              <div className="absolute left-0 top-2 w-3 h-3
                rounded-full bg-amber ring-4 ring-river
                md:left-1/2 md:-translate-x-1/2 z-10" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="pl-8 md:pl-0 md:text-right"
              >

                <span className="text-amber font-semibold">
                  2025 – Jelenleg
                </span>

                <div className="mt-3 rounded-2xl border
                  border-amber/30 bg-carbon/50
                  backdrop-blur-xl p-6">

                  <h3 className="text-lg font-semibold text-warm-white">
                    Szoftverfejlesztő és -tesztelő
                  </h3>

                  <p className="text-warm-white/60 mt-2">
                    SZÁMALK-Szalézi Technikum és Szakgimnázium
                  </p>

                  <span className="inline-block mt-4 rounded-full
                    bg-amber/10 px-3 py-1
                    text-xs font-medium text-amber">
                    Utolsó tanév
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Szakmai tapasztalat */}
      <section className="max-w-6xl mx-auto px-6 py-20">
      </section>

      {/* Készségek */}
      <section className="max-w-6xl mx-auto px-6 py-20">
      </section>

      {/* Szakdolgozati projekt */}
      <section className="max-w-6xl mx-auto px-6 py-20">
      </section>

    </div>
  );
}

export default About;
