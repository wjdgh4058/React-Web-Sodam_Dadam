import {
  CenterInfoListDataType,
  DirectionInfoType,
  ReservationInfoType,
  SodaInfoType,
} from '../../pages/CenterInfoPage/CenterInfoType';

function NavListItemMenu({
  listData,
  sodaInfoData,
  reservationInfoData,
  directionInfoData,
  getCurrentItem,
}: {
  listData: CenterInfoListDataType;
  sodaInfoData: SodaInfoType;
  reservationInfoData: ReservationInfoType;
  directionInfoData: DirectionInfoType;
  getCurrentItem: React.Dispatch<React.SetStateAction<SodaInfoType | ReservationInfoType | DirectionInfoType>>;
}) {
  const listItem = listData.listItem;
  const clickItem = (listName: string) => {
    if (listName === '소담다담 소개') {
      getCurrentItem(sodaInfoData);
    } else if (listName === '상담예약 안내') {
      getCurrentItem(reservationInfoData);
    } else if (listName === '오시는 길') {
      getCurrentItem(directionInfoData);
    }
  };
  return (
    <div className="w-60">
      <div className="pt-12 pb-12 text-2xl text-center text-white bg-blue-800 ">{listData.listName}</div>
      {listItem.map((list) => {
        return (
          <button
            className="pl-6 pt-4 pb-4 border-b w-[100%] text-left text-lg"
            key={list}
            onClick={() => clickItem(list)}>
            {list}
          </button>
        );
      })}
    </div>
  );
}

export default NavListItemMenu;
