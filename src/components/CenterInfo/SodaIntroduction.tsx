import { useEffect, useState } from 'react';
import { ISodaInfoType } from './CenterInfoType';
import { getSodaInfo } from '../../api/sodaIntroduction';

function SodaIntroduction() {
  const [sodaInfoData, setSodaInfoData] = useState<ISodaInfoType | undefined>();
  useEffect(() => {
    const sodaFn = async () => {
      const data = await getSodaInfo();
      setSodaInfoData(data);
    };
    sodaFn();
  }, []);
  return (
    <>
      {sodaInfoData && (
        <div>
          <div className="mt-12 text-3xl text-blue-900 mxl:text-2xl mmd:mt-6">{sodaInfoData.headText}</div>
          <div className="w-[100%] h-96 overflow-hidden mb-12 mmd:mb-6">
            <img src={sodaInfoData.img} alt={sodaInfoData.alt} className="mt-12 mmd:mt-6" />
          </div>
          <ul>
            {sodaInfoData.content.map((item, index) => {
              return (
                <li key={index} className="mb-12 text-2xl mxl:text-xl">
                  • {item}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-4 mb-12 mxl:flex-col mxl:items-center ">
            {sodaInfoData.detailImg.map((imgAdress, index) => {
              return (
                <img
                  src={imgAdress}
                  alt="사무실 내부 사진"
                  key={index}
                  className="max-w-[30%] mxl:max-w-4xl mxl:max-h-4xl max-h-xs w-[100%]"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
export default SodaIntroduction;
