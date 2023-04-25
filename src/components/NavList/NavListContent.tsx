import { DirectionInfoType, ReservationInfoType, SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';

function NavListContent({ itemData }: { itemData: SodaInfoType | ReservationInfoType | DirectionInfoType }) {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="text-3xl">{itemData.title}</div>
        <NavListCurrentLocation />
      </div>
      {itemData.title === '소담다담 소개' ? <SodaIntroduction sodaData={itemData} /> : null}
    </div>
  );
}

export default NavListContent;
