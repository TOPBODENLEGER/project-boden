import Image from "next/image";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={`w-[50%] ${styles.block}`}></div>
        <div className="w-[50%] flex justify-center text-center">
          <div>
            <h2 className="font-bold text-[#0097B2] pt-[25px]">Über uns</h2>
            <p className=" w-[100%] pl-[30%] pt-5 text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              deleniti recusandae facilis explicabo rem illum, modi, eos, saepe
              repellat natus laborum! Maxime praesentium est animi accusamus ex
              eaque error. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Fuga in deleniti recusandae facilis explicabo rem illum,
              modi, eos, saepe repellat natus laborum! Maxime praesentium est
              animi accusamus ex eaque error. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Fuga in deleniti recusandae facilis
              explicabo rem illum, modi, eos, saepe repellat natus laborum!
              Maxime praesentium est animi accusamus ex eaque error. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Fuga in
              deleniti recusandae facilis explicabo rem illum, modi, eos, saepe
              repellat natus laborum! Maxime praesentium est animi accusamus ex
              eaque error.
            </p>
          </div>
        </div>
        <div className={`absolute w-[1000px] h-[900px] ${styles.foto}`}>
          <Image src="/images/company.png" width={1000} height={500} />
        </div>
        <div
          className={`absolute w-[900px] h-[300px]  ${styles.fotoShadow}`}
        ></div>
      </div>
    </div>
    // <div className="relative">
    //   <div className="w-[50%] h-[500px] bg-[#81AFC3]"></div>
    //   <div className="">sdfsdf</div>
    // </div>
  );
};
export default Company;
