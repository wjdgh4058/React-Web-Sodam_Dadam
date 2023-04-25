import { SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';

function SodaIntroduction({ sodaData }: { sodaData: SodaInfoType }) {
  // console.log(sodaData);
  return (
    <div>
      <div className="mt-12 text-3xl text-blue-900">{sodaData.headText}</div>
      <div className="w-[100%] h-96 overflow-hidden mb-12">
        <img src={sodaData.img} alt={sodaData.alt} className="mt-12" />
      </div>
      <ul>
        {sodaData.content.map((item, index) => {
          return (
            <li key={index} className="mb-12 text-xl">
              • {item}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between gap-4 mb-12 mxl:flex-col mxl:items-center ">
        <img
          src="../../../public/images/centerImg1.jpeg"
          alt=""
          className="max-w-[30%] mxl:max-w-4xl mxl:max-h-4xl max-h-xs w-[100%]"
        />
        <img
          src="../../../public/images/centerImg2.jpeg"
          alt=""
          className="max-w-[30%] mxl:max-w-4xl mxl:max-h-4xl max-h-xs w-[100%]"
        />
        <img
          src="../../../public/images/centerImg3.jpeg"
          alt=""
          className="max-w-[30%] mxl:max-w-4xl mxl:max-h-4xl max-h-xs w-[100%]"
        />
      </div>
    </div>
  );
}
export default SodaIntroduction;
