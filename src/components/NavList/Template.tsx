import { useLocation } from 'react-router-dom';
import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';
import { INavListDataType } from './NavListType';
import { useEffect, useState } from 'react';

const ListData: Array<INavListDataType> = [
  {
    url: '/CenterInfo',
    listName: '센터 안내',
    listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
    listImg: '../../../public/images/centerInfoImg.png',
    listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
  },
  {
    url: '/CounselorInfo',
    listName: '상담전문가 소개',
    listItem: ['상담심리전문가', '전임 상담원'],
    listImg: '../../../public/images/centerInfoImg.png',
    listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
  },
  {
    url: '/Counseling',
    listName: '심리상담',
    listItem: ['개인상담', '심리검사', '집단상담', '청소년 & 부모상담', '부부 & 커플상담'],
    listImg: '../../../public/images/centerInfoImg.png',
    listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
  },
  {
    url: '/Education',
    listName: '심리교육',
    listItem: ['특강 및 워크숍', '상담자 교육', '북리딩 세미나'],
    listImg: '../../../public/images/centerInfoImg.png',
    listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
  },
  {
    url: '/Notice',
    listName: '공지 ・ 문의',
    listItem: ['교육/워크숍 공지', '이벤트', '문의'],
    listImg: '../../../public/images/centerInfoImg.png',
    listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
  },
];

function Template() {
  const currentUrl = useLocation();
  const [currentList, setCurrentList] = useState<INavListDataType | null>(null);

  useEffect(() => {
    const ListUrl = ListData.map((item) => {
      return currentUrl.pathname.includes(item.url);
    });
    setCurrentList(ListData[ListUrl.indexOf(true)]);
  }, [currentUrl]);
  return (
    <>
      {currentList ? (
        <div className="flex flex-col">
          <img src={currentList.listImg} alt={currentList.listImgAlt} />
          <div className="flex gap-[5%] ml-[12%] mr-[12%] mt-[5%] mxl:flex-col">
            <NavListItemMenu listName={currentList.listName} listItem={currentList.listItem} url={currentList.url} />
            <NavListContent itemData={currentList.listItem} listName={currentList.listName} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Template;
