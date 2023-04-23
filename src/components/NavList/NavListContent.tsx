import NavListContentInfo from './NavListContentInfo';
import NavListCurrentLocation from './NavListCurrentLocation';

function NavListContent({ itemData }: { itemData: object }) {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between">
        <div>{itemData.title}</div>
        <NavListCurrentLocation />
      </div>
      <NavListContentInfo />
    </div>
  );
}

export default NavListContent;
