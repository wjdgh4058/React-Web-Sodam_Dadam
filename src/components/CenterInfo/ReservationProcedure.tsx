import { IReservation } from '../../pages/CenterInfoPage/CenterInfoType';

function ReservationProcedure({ procedureData }: { procedureData: IReservation }) {
  return (
    <div className="flex pb-5 mb-5 border-b-2">
      <div>
        <img
          className="w-24 h-24 mmd:w-20 mmd:h-20"
          src={procedureData.img}
          alt={`${procedureData.stepName} 절차 이미지`}
        />
      </div>
      <div className="flex flex-col justify-center ml-6">
        <p className="mb-1 text-lg font-medium mmd:text-base">STEP {procedureData.step}</p>
        <p className="mb-2 text-xl font-semibold text-blue-800 mmd:text-lg">{procedureData.stepName}</p>
        <p className="text-lg font-light mmd:text-base">{procedureData.stepInfo}</p>
      </div>
    </div>
  );
}
export default ReservationProcedure;
