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
    <div className="flex flex-col mxl:flex-row mxl:mb-12 mxl:gap-6 mxl:border-b mxl:border-t mxl:border-r">
      <div className="pt-12 pb-12 text-2xl text-center text-white bg-blue-800 whitespace-nowrap w-60 mxl:text-lg mxl:pt-2 mxl:pb-2 mxl:w-40 mxl:pr-4 mxl:pl-4">
        {listData.listName}
      </div>
      <div className="flex flex-col w-60 mxl:flex-row mxl:w-[100%] mxl:justify-between ">
        {listItem.map((list) => {
          return (
            <button
              className={`${
                clickItemName === list ? 'bg-gray-100 text-blue-800' : 'bg-inherit'
              } pt-4 pb-4 pl-6 text-lg text-left transition duration-500 ease-in-out border-b w-60 mxl:pt-2 mxl:pb-2 mxl:w-28 mxl:text-center mxl:pl-0 mxl:border-b-0 xl:hover:bg-gray-100 hover:text-blue-800`}
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
