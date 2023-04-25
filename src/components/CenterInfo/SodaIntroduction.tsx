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
      <div className="flex justify-between mb-12">
        <div className="bg-gray-400 w-80 h-80">이미지1</div>
        <div className="bg-gray-400 w-80 h-80">이미지2</div>
        <div className="bg-gray-400 w-80 h-80">이미지3</div>
      </div>
    </div>
  );
}
export default SodaIntroduction;
