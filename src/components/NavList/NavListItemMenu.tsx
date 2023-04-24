import { CenterInfoListDataType } from '../../pages/CenterInfoPage/CenterInfoType';

function NavListItemMenu({ listData }: { listData: CenterInfoListDataType }) {
  const listItem = listData.listItem;
  return (
    <div className="w-60">
      <div className="pt-12 pb-12 text-2xl text-center text-white bg-blue-800 ">{listData.listName}</div>
      {listItem.map((list) => {
        return (
          <button className="pl-6 pt-4 pb-4 border-b w-[100%] text-left text-lg" key={list}>
            {list}
          </button>
        );
      })}
    </div>
  );
}

export default NavListItemMenu;
