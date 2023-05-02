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
      <p className="pb-8 mt-12 border-b">모든 상담 및 프로그램은 사전 예약제로 운영됩니다.</p>
      <p className="pb-8 mt-8 border-b">
        예약 없는 방문은 어려우니, 미리 전화로 예약 문의를 해주시면 안내해 드립니다. 전화 연결이 안 될 때는 상담 진행
        중일 수 있으니, 문자 메시지를 남겨 주시면 상담 종료 후에 연락 드리겠습니다.
      </p>
      <p className="pb-8 mt-8 font-light border-b">
        * 상담 내용은 철저한 비밀 보장이 되며, 내담자분의 안전을 보장하기 위한 조치가 제1순위로 이루어집니다.{' '}
      </p>
      <div className="flex justify-center mt-12 mb-12 mxl:mt-8 mxl:mb-8">
        {/* 추후에 링크로 변경 */}
        <button className="pl-12 pr-12 leading-[3.5] text-white bg-blue-800 mxl:pl-6 mxl:pr-6 mxl:leading-[3]">
          온라인 상담예약하기 ▶︎
        </button>
      </div>
    </div>
  );
}
export default ReservationInfo;
