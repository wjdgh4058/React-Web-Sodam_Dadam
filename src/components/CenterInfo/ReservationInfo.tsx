import { ReservationInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import ReservationProcedure from './ReservationProcedure';

function ReservationInfo({ reservationData }: { reservationData: ReservationInfoType }) {
  return (
    <div className="flex flex-col">
      <div className="mt-12 mb-6 text-xl">◦ 예약 절차</div>
      {reservationData.reservation.map((item, index) => {
        return <ReservationProcedure procedureData={item} key={index} />;
      })}
    </div>
  );
}
export default ReservationInfo;
