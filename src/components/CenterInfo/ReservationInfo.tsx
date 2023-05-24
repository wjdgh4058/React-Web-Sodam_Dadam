import { IReservationInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import CounselingTimeTableTd from './CounselingTimeTableTd';
import CounselingTimeTableTh from './CounselingTimeTableTh';
import ReservationProcedure from './ReservationProcedure';

const reservationInfoData: IReservationInfoType = {
  title: '상담예약 안내',
  reservation: [
    {
      img: '../../../public/images/Reservation.png',
      step: 1,
      stepName: '상담 예약',
      stepInfo: '홈페이지 및 전화를 통해 상담일정 예약 – 최종일정 확인 – 예약 완료',
    },
    {
      img: '../../../public/images/firstCounseling.png',
      step: 2,
      stepName: '초기 상담',
      stepInfo: '주 호소문제 확인, 심리상담/심리치료 과정 안내',
    },
    {
      img: '../../../public/images/counselingTest.png',
      step: 3,
      stepName: '심리검사(선택 사항)',
      stepInfo: '심리검사를 통한 다차원적이고 객관적인 심리분석',
    },
    {
      img: '../../../public/images/deepCounseling.png',
      step: 4,
      stepName: '심층상담/치료',
      stepInfo: '체계적이고 심층적인 심리상담/심리치료 진행',
    },
    {
      img: '../../../public/images/counselingFinish.png',
      step: 5,
      stepName: '상담/치료 종결',
      stepInfo: '심리상담/치료 종결 및 사후관리 안내',
    },
  ],
  counselingTime: [
    {
      name: '개인상담',
      time: '50분',
    },
    {
      name: '부부/커플/가족 상담',
      time: '70분',
    },
    {
      name: '심리검사',
      time: '종류에 따라 상이',
    },
    {
      name: '집단상담',
      time: '1회당 2시간',
    },
  ],
};

function ReservationInfo() {
  return (
    <div className="flex flex-col">
      <div className="mt-12 mb-12 text-2xl mmd:text-lg mmd:mt-6 mmd:mb-6">◦ 예약 절차</div>
      {reservationInfoData.reservation.map((item, index) => {
        return <ReservationProcedure procedureData={item} key={index} />;
      })}
      <div className="mt-10 mb-8 text-2xl mmd:text-xl mmd:mt-6 mmd:mb-6">◦ SODA 상담시간</div>
      <table className="mb-8 border-2">
        <thead>
          <tr className="bg-gray-50">
            {reservationInfoData.counselingTime.map((item, index) => {
              return <CounselingTimeTableTh thText={item.name} key={index} />;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {reservationInfoData.counselingTime.map((item, index) => {
              return <CounselingTimeTableTd tdText={item.time} key={index} />;
            })}
          </tr>
        </tbody>
      </table>
      <p className="pb-8 mt-12 text-lg border-b">모든 상담 및 프로그램은 사전 예약제로 운영됩니다.</p>
      <p className="pb-8 mt-8 text-lg border-b">
        예약 없는 방문은 어려우니, 미리 전화로 예약 문의를 해주시면 안내해 드립니다. 전화 연결이 안 될 때는 상담 진행
        중일 수 있으니, 문자 메시지를 남겨 주시면 상담 종료 후에 연락 드리겠습니다.
      </p>
      <p className="pb-8 mt-8 text-lg font-light border-b">
        * 상담 내용은 철저한 비밀 보장이 되며, 내담자분의 안전을 보장하기 위한 조치가 제 1순위로 이루어집니다.{' '}
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
