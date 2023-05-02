import { ReservationInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import CounselingTimeTableTd from './CounselingTimeTableTd';
import CounselingTimeTableTh from './CounselingTimeTableTh';
import ReservationProcedure from './ReservationProcedure';

function ReservationInfo({ reservationData }: { reservationData: ReservationInfoType }) {
  return (
    <div className="flex flex-col">
      <div className="mt-12 mb-12 text-xl mmd:text-lg mmd:mt-6 mmd:mb-6">◦ 예약 절차</div>
      {reservationData.reservation.map((item, index) => {
        return <ReservationProcedure procedureData={item} key={index} />;
      })}
      <div className="mt-10 mb-8 text-xl mmd:text-lg mmd:mt-6 mmd:mb-6">◦ SODA 상담시간</div>
      <table className="mb-8 border-2">
        <thead>
          <tr className="bg-gray-50">
            <CounselingTimeTableTh thText="개인상담" />
            <CounselingTimeTableTh thText="부부/커플/가족 상담" />
            <CounselingTimeTableTh thText="심리검사" />
            <CounselingTimeTableTh thText="집단상담" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <CounselingTimeTableTd tdText="50분" />
            <CounselingTimeTableTd tdText="70분" />
            <CounselingTimeTableTd tdText="종류에 따라 상이" />
            <CounselingTimeTableTd tdText="1회당 2시간" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ReservationInfo;
