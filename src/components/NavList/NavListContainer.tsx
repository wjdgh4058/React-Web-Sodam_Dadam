import { useState } from 'react';
import { CenterInfoListDataType, SodaInfoType } from '../../pages/CenterInfoPage/CenterInfoType';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';

function NavListContainer({
  listData,
  sodaInfoData,
}: {
  listData: CenterInfoListDataType;
  sodaInfoData: SodaInfoType;
}) {
  const [currentItem, getCurrentItem] = useState(sodaInfoData);

  return (
    <div className="flex flex-col">
      <img src={listData.listImg} alt={listData.listImgAlt} className="mt-14" />
      <div className="flex gap-[5%] ml-[12%] mr-[12%] mt-[5%]">
        <NavListItemMenu listData={listData} />
        <NavListContent itemData={currentItem} />
      </div>
    </div>
  );
}

export default NavListContainer;
