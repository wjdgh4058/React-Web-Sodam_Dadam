import { DirectionInfoType, ReservationInfoType, SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import ReservationInfo from '../CenterInfo/ReservationInfo';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';

function NavListContent({ itemData }: { itemData: SodaInfoType | ReservationInfoType | DirectionInfoType }) {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="xl:text-3xl mxl:text-2xl">{itemData.title}</div>
        <NavListCurrentLocation />
      </div>
      {itemData.title === '소담다담 소개' && <SodaIntroduction sodaData={itemData} />}
      {itemData.title === '상담예약 안내' && <ReservationInfo reservationData={itemData} />}
    </div>
  );
}

export default NavListContent;
