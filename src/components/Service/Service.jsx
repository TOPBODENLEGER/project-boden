import { motion } from "framer-motion";
import styles from "./Service.module.scss";

const textAnimation = {
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

const Service = () => {
  return (
    <div className={styles.container} id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className={styles.screen1}
      >
        <motion.h2
          variants={textAnimation}
          custom={5}
          className="font-bold text-[#0097B2] pt-[25px] text-center"
        >
          Services
        </motion.h2>

        <motion.div
          variants={textAnimation}
          custom={6}
          className="flex justify-center h-[300px] mt-10"
        >
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Verlegung neuer Böden (Parkett, Laminat, Vinyl)
            </div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Professionelles Abschleifen von Parkett und Dielen Versiegelung
              mit umweltfreundlichem lacken auf Wasserbasis, Öl oder
              Hartwachsöl.
            </div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Renovierung alter Holzböden (abschleifen, ölen, versiegeln)
            </div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.item}>Restaurierung von Holztreppen</div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={7}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Aufmaß und Planung direkt vor Ort.
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Anliefern von Ware bequem bis in die Wohnung herein
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={8}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>Aufbereitung vom Unterboden</div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Verlegung von Laminat, Klickvinyl, Designbeläge und
                Fertigparkett (Teppich und PVC auf Anfrage).
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Montage von Fußleisten mit Kleber/Nägeln
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen ziehen
                usw...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className={styles.screen2}
      >
        <motion.h2
          variants={textAnimation}
          custom={5}
          className="font-bold text-[#0097B2] pt-[25px] text-center"
        >
          Services
        </motion.h2>
        <motion.div
          variants={textAnimation}
          custom={6}
          className="flex justify-center h-[300px] mt-10"
        >
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Verlegung neuer Böden (Parkett, Laminat, Vinyl)
            </div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Professionelles Abschleifen von Parkett und Dielen Versiegelung
              mit umweltfreundlichem lacken auf Wasserbasis, Öl oder
              Hartwachsöl.
            </div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.item}>
              Renovierung alter Holzböden (abschleifen, ölen, versiegeln)
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={7}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>Restaurierung von Holztreppen</div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Aufmaß und Planung direkt vor Ort.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={8}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Anliefern von Ware bequem bis in die Wohnung herein
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>Aufbereitung vom Unterboden</div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={9}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Verlegung von Laminat, Klickvinyl, Designbeläge und
                Fertigparkett (Teppich und PVC auf Anfrage).
              </div>
            </div>
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Montage von Fußleisten mit Kleber/Nägeln
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={10}
            className="flex justify-center h-[300px] mt-[-68px]"
          >
            <div className={styles.hexagon}>
              <div className={styles.item}>
                Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen ziehen
                usw...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className={styles.mobileScreen}
      >
        <motion.h2
          variants={textAnimation}
          custom={5}
          className="font-bold text-[#0097B2] pt-[25px] text-center"
        >
          Services
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={6}
            className="flex justify-center h-[267px] mt-10"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Verlegung neuer Böden (Parkett, Laminat, Vinyl)
              </div>
            </div>
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Professionelles Abschleifen von Parkett und Dielen Versiegelung
                mit umweltfreundlichem lacken auf Wasserbasis, Öl oder
                Hartwachsöl.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={7}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Renovierung alter Holzböden (abschleifen, ölen, versiegeln)
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={8}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Restaurierung von Holztreppen
              </div>
            </div>
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Aufmaß und Planung direkt vor Ort.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={9}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Anliefern von Ware bequem bis in die Wohnung herein
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={10}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              </div>
            </div>
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Aufbereitung vom Unterboden
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={11}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Verlegung von Laminat, Klickvinyl, Designbeläge und
                Fertigparkett (Teppich und PVC auf Anfrage).
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={12}
            className="flex justify-center h-[267px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Montage von Fußleisten mit Kleber/Nägeln
              </div>
            </div>
            <div className={styles.hexagonMobile}>
              <div className={styles.itemMobile}>
                Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen ziehen
                usw...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className={styles.mobileScreen2}
      >
        <motion.h2
          variants={textAnimation}
          custom={5}
          className="font-bold text-[#0097B2] pt-[25px] text-center"
        >
          Services
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={6}
            className="flex justify-center h-[200px] mt-10"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Verlegung neuer Böden (Parkett, Laminat, Vinyl)
              </div>
            </div>
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Professionelles Abschleifen von Parkett und Dielen Versiegelung
                mit umweltfreundlichem lacken auf Wasserbasis, Öl oder
                Hartwachsöl.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={7}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Renovierung alter Holzböden (abschleifen, ölen, versiegeln)
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={8}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Restaurierung von Holztreppen
              </div>
            </div>
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Aufmaß und Planung direkt vor Ort.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={9}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Anliefern von Ware bequem bis in die Wohnung herein
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={10}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Fachgerechte Entfernung mit Umweltgerechter Entsorgung.
              </div>
            </div>
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Aufbereitung vom Unterboden
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={11}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Verlegung von Laminat, Klickvinyl, Designbeläge und
                Fertigparkett (Teppich und PVC auf Anfrage).
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
        >
          <motion.div
            variants={textAnimation}
            custom={12}
            className="flex justify-center h-[200px] mt-[-68px]"
          >
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Montage von Fußleisten mit Kleber/Nägeln
              </div>
            </div>
            <div className={styles.hexagonMobile2}>
              <div className={styles.itemMobile2}>
                Sonstige Nebenarbeiten wie Türen kürzen, Silikonfugen ziehen
                usw...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Service;
