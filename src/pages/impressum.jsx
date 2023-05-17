import Layout from "@/components/Layout/Layout";

export default function Impressum() {
  return (
    <Layout
      title="Impressum"
      description="Verlegung neuer Böden (Parkett, Laminat, Vinyl), Professionelles Abschleifen von Parkett und Dielen Versiegelung mit umweltfreundlichem lacken auf Wasserbasis, Öl oder Hartwachsöl. Renovierung alter Holzböden (abschleifen, ölen, versiegeln), Restaurierung von Holztreppen"
    >
      <div className="flex justify-center my-10 px-2">
        <div className="w-[1000px]">
          <h2 className="font-bold text-[#0097B2]">Impressum</h2>

          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Max Mustermann
            <br />
            Musterladen
            <br />
            Musterstra&szlig;e 111
            <br />
            Geb&auml;ude 44
            <br />
            90210 Musterstadt
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 44 55 66
            <br />
            Telefax: +49 (0) 123 44 55 99
            <br />
            E-Mail: mustermann@musterfirma.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE999999999
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
