import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Company.module.scss";

const textAnimationOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const textAnimationV = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Company = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      id="company"
      className={styles.container}
    >
      <div className={styles.wrap}>
        <div className={`w-[50%] ${styles.block}`}></div>
        <div className="w-[50%] flex justify-center text-center">
          <div>
            <motion.h2
              variants={textAnimationV}
              custom={1}
              className="font-bold text-[#0097B2] pt-[25px]"
            >
              Über uns
            </motion.h2>
            <motion.p
              variants={textAnimationV}
              custom={1.2}
              className=" w-[100%] pl-[30%] pt-5 text-start"
            >
              TOP BODENSERVICE bietet rundum Service im Bereich Bodenverlegung
              an. Alle Arbeiten werden profisional ausgeführt! <br />
              <br />
              Diese Beinhaltet folgende Dienstleistungen:
              <br />- Verlegung neuer Böden (Parkett, Laminat, Vinyl)
              <br />- Professionelles Abschleifen von Parkett und Dielen
              Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl
              oder Hartwachsöl.
              <br />- Renovierung alter Holzböden (abschleifen, ölen,
              versiegeln)
              <br />- Restaurierung von Holztreppen • Aufmaß und Planung direkt
              vor Ort.
              <br />
              <br />• Anliefern von Ware bequem bis in die Wohnung herein
              <br />• Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              <br />• Aufbereitung vom Unterboden • Verlegung von Laminat,
              Klickvinyl, Designbeläge und Fertigparkett (Teppich und PVC auf
              Anfrage).
              <br />• Montage von Fußleisten mit Kleber/Nägeln
              <br />• Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen
              ziehen usw...
              <br />
              <br />
              Der Preis richtet sich nach der Größe der Fläche, dem Zustand und
              der Versiegelungsart. Vereinbart wird ein Festpreis.
              <br />
              Kostenlose Besichtigung möglich, meist reichen auch Bilder per
              WhatsApp.
            </motion.p>
          </div>
        </div>
        <motion.div
          custom={1.4}
          variants={textAnimationOpacity}
          className={`absolute w-[1000px] h-[900px] ${styles.foto}`}
        >
          <Image
            src="/images/company.png"
            width={1000}
            height={466}
            alt="company"
          />
        </motion.div>
        <motion.div
          custom={1.6}
          variants={textAnimationOpacity}
          className={`absolute w-[900px] h-[300px]  ${styles.fotoShadow}`}
        ></motion.div>
      </div>
      <div className={styles.wrap2}>
        <div className="w-[100%] flex justify-center text-center">
          <div>
            <motion.h2
              variants={textAnimationV}
              custom={1}
              className="font-bold text-[#0097B2] pt-[25px]"
            >
              Über uns
            </motion.h2>
            <motion.p
              variants={textAnimationV}
              custom={1.2}
              className=" w-[100%] pt-5 text-start px-7 pb-3"
            >
              TOP BODENSERVICE bietet rundum Service im Bereich Bodenverlegung
              an. Alle Arbeiten werden profisional ausgeführt! <br />
              <br />
              Diese Beinhaltet folgende Dienstleistungen:
              <br />- Verlegung neuer Böden (Parkett, Laminat, Vinyl)
              <br />- Professionelles Abschleifen von Parkett und Dielen
              Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl
              oder Hartwachsöl.
              <br />- Renovierung alter Holzböden (abschleifen, ölen,
              versiegeln)
              <br />- Restaurierung von Holztreppen • Aufmaß und Planung direkt
              vor Ort.
              <br />
              <br />• Anliefern von Ware bequem bis in die Wohnung herein
              <br />• Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              <br />• Aufbereitung vom Unterboden • Verlegung von Laminat,
              Klickvinyl, Designbeläge und Fertigparkett (Teppich und PVC auf
              Anfrage).
              <br />• Montage von Fußleisten mit Kleber/Nägeln
              <br />• Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen
              ziehen usw...
              <br />
              <br />
              Der Preis richtet sich nach der Größe der Fläche, dem Zustand und
              der Versiegelungsart. Vereinbart wird ein Festpreis.
              <br />
              Kostenlose Besichtigung möglich, meist reichen auch Bilder per
              WhatsApp.
            </motion.p>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
          className={`relative ${styles.block2}`}
        >
          <div className="w-[100%] flex justify-center">
            <motion.div
              variants={textAnimationOpacity}
              custom={1.4}
              className={`absolute  ${styles.foto2}`}
            >
              <Image
                src="/images/company.png"
                width={500}
                height={466}
                alt="company"
              />
            </motion.div>
          </div>
          <motion.div
            variants={textAnimationOpacity}
            custom={1.6}
            className={`absolute  ${styles.fotoShadow2}`}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Company;
