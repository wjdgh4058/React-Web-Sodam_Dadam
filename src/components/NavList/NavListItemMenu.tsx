import { useState } from 'react';
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
  const [clickItemName, getClickItemName] = useState('소담다담 소개');
  const clickItem = (listName: string) => {
    if (listName === '소담다담 소개') {
      getCurrentItem(sodaInfoData);
      getClickItemName(listName);
    } else if (listName === '상담예약 안내') {
      getCurrentItem(reservationInfoData);
      getClickItemName(listName);
    } else if (listName === '오시는 길') {
      getCurrentItem(directionInfoData);
      getClickItemName(listName);
    }
  };
  return (
    <div className="flex flex-col mxl:flex-row mxl:mb-10">
      <div className="pt-12 pb-12 text-2xl text-center text-white bg-blue-800 whitespace-nowrap mxl:text-base mxl:pt-2 mxl:pb-2 mxl:pr-4 mxl:pl-4 xl:w-60">
        {listData.listName}
      </div>
      <div className="flex flex-col mxl:flex-row mxl:w-[100%] mxl:justify-around mxl:border-r mxl:border-t mxl:border-b">
        {listItem.map((list) => {
          return (
            <button
              className={`${
                clickItemName === list ? 'xl:bg-gray-100 text-blue-800' : 'bg-inherit'
              } pt-4 pb-4 pl-6 text-lg text-left transition duration-500 ease-in-out border-b mxl:pt-2 mxl:pb-2 mxl:text-center mxl:pl-0 mxl:border-b-0 xl:hover:bg-gray-100 hover:text-blue-800 mmd:text-base`}
              key={list}
              onClick={() => clickItem(list)}>
              {list}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default NavListItemMenu;
