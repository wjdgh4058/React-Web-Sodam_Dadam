import { useState } from 'react';
import { ICenterInfoListDataType } from '../../pages/CenterInfoPage/CenterInfoType';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';

const centerInfoListData: ICenterInfoListDataType = {
  listName: '센터 안내',
  listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
  listImg: '../../../public/images/centerInfoImg.png',
  listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
};

// 추후에 헤더에서 클릭시 상태 변화 이벤트에 의해 변하게 수정해야함
const currentList = centerInfoListData;

function Template() {
  const [currentItem, setCurrentItem] = useState(currentList.listItem[0]);

  return (
    <div className="flex flex-col">
      <img src={currentList.listImg} alt={currentList.listImgAlt} className="mt-14" />
      <div className="flex gap-[5%] ml-[12%] mr-[12%] mt-[5%] mxl:flex-col">
        <NavListItemMenu
          listName={currentList.listName}
          listItem={currentList.listItem}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
        <NavListContent itemData={currentItem} />
      </div>
    </div>
  );
}

export default Template;
