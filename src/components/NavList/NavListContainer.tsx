import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';

function NavListContainer({ listData, sodaInfoData }: { listData: object; sodaInfoData: object }) {
  return (
    <div className="flex flex-col">
      <img src={listData.listImg} alt="마음이 따듯해지는 이미지" />
      <div className="flex gap-[5%] ml-[12%] mr-[12%]">
        <NavListItemMenu menuTitle={listData.listName} menuList={listData.listItem} />
        <NavListContent itemData={sodaInfoData} />
      </div>
    </div>
  );
}

export default NavListContainer;
