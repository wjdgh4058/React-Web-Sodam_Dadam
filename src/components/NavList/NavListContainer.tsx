import NavListContent from './NavListContent';
import NavListItemMenu from './NavListItemMenu';

function NavListContainer({ listData }: { listData: object }) {
  return (
    <div className="flex flex-col">
      <img src={listData.listImg} alt={listData.listImgAlt} />
      <div className="flex gap-[5%] ml-[12%] mr-[12%] mt-[5%]">
        <NavListItemMenu menuTitle={listData.listName} menuList={listData.listItem} />
        <NavListContent itemData={listData.listItem} />
      </div>
    </div>
  );
}

export default NavListContainer;
