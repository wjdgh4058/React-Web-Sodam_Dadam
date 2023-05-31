import ReservationInfo from '../CenterInfo/ReservationInfo';
import SodaIntroduction from '../CenterInfo/SodaIntroduction';
import NavListCurrentLocation from './NavListCurrentLocation';
import SodaWayToCome from '../CenterInfo/SodaWayToCome';
import { useParams } from 'react-router-dom';

function NavListContent({ itemData, listName }: { itemData: Array<string>; listName: string }) {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="xl:text-3xl mxl:text-2xl">{itemData[Number(id) - 1]}</div>
        <NavListCurrentLocation />
      </div>
      {listName === '센터 안내' && id === '1' && <SodaIntroduction />}
      {listName === '센터 안내' && id === '2' && <ReservationInfo />}
      {listName === '센터 안내' && id === '3' && <SodaWayToCome />}
    </div>
  );
}

export default NavListContent;
