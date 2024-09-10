import styles from "./Price.module.scss";

const Price = () => {
  return (
    <div id="price" className={styles.container}>
      <h2 className="font-bold text-[#0097B2] pt-[25px] text-center pb-6">
        Preis
      </h2>
      <div className="flex justify-center">
        <div className="w-[800px] mx-3">
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th colspan="2">
                  Parkett / Dielenboden schleifen und versiegeln (inkl.
                  Material)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[60%]">Lack</td>
                <td>
                  22 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">2k Lack</td>
                <td>
                  28 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Öl</td>
                <td>
                  25 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Hartwachsöl</td>
                <td>
                  25 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Parkettfarbänderung</td>
                <td>
                  ab 35 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Parkett/ Vinyl verlegen</td>
                <td>
                  ab 15 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Fußleisten montieren</td>
                <td>
                  ab 3 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td colspan="2" className="text-center font-bold">
                  Pflege von Holzböden / Parkettböden
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Oberflächenbehandlung</td>
                <td>
                  10 &euro; pro m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className="w-[60%]">Reparaturarbeit</td>
                <td>40 &euro; pro Std.</td>
              </tr>
              <tr>
                <td colspan="2" className="text-center font-bold">
                  Ab 80 m<sup>2</sup> Rabatt 5% !!!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Price;
