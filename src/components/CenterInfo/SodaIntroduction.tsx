import { SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';

function SodaIntroduction({ sodaData }: { sodaData: SodaInfoType }) {
  // console.log(sodaData);
  return (
    <div>
      <div className="mt-12 text-3xl text-blue-900 mxl:text-2xl">{sodaData.headText}</div>
      <div className="w-[100%] h-96 overflow-hidden mb-12">
        <img src={sodaData.img} alt={sodaData.alt} className="mt-12" />
      </div>
      <ul>
        {sodaData.content.map((item, index) => {
          return (
            <li key={index} className="mb-12 text-xl mxl:text-lg">
              • {item}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between gap-4 mb-12 mxl:flex-col mxl:items-center ">
        {sodaData.detailImg.map((imgAdress) => {
          return (
            <img
              src={imgAdress}
              alt="사무실 내부 사진"
              className="max-w-[30%] mxl:max-w-4xl mxl:max-h-4xl max-h-xs w-[100%]"
            />
          );
        })}
      </div>
    </div>
  );
}
export default SodaIntroduction;
