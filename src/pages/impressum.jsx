import Layout from "@/components/Layout/Layout";

export default function Impressum() {
  return (
    <Layout
      title="Impressum | "
      description="Verlegung neuer Böden (Parkett, Laminat, Vinyl), Professionelles Abschleifen von Parkett und Dielen, Versiegelung mit umweltfreundlichen Lacken auf Wasserbasis, Öl oder Hartwachsöl. Renovierung alter Holzböden (abschleifen, ölen, versiegeln), Restaurierung von Holztreppen"
    >
      <div className="flex justify-center my-10 px-2">
        <div className="w-[1000px]">
          <h2 className="font-bold text-[#0097B2]">Impressum</h2>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Vitalii Vasylchenko
            <br />
            Martin-Luther-King-Stra&szlig;e 4<br />
            51469 Bergisch Glagbach
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +4915227465638
            <br />
            E-Mail: agentstvo.yel@gmail.com
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            Vitalii Vasylcheko
            <br />
            Martin-Luther-King-Stra&szlig;e 4<br />
            51469 Bergisch Gladbach
          </p>

          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de/impressum-generator.html">
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
