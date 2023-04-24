import { SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import CenterInfoSodaIntroduction from '../CenterIntroductionContent/CenterInfoSodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';

function NavListContent({ itemData }: { itemData: SodaInfoType }) {
  const clicklist = '소담다담 소개';
  const currentItem = itemData;

  console.log('curentItem = ', currentItem);
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="text-3xl">{currentItem.title}</div>
        <NavListCurrentLocation />
      </div>
      {/* clicklist => 클릭시 상태관리 변수로 변경예정, 초기값은 맨 위에 있는 리스트로 설정 */}
      {clicklist === '소담다담 소개' ? <CenterInfoSodaIntroduction sodaData={currentItem} /> : null}
    </div>
  );
}

export default NavListContent;
