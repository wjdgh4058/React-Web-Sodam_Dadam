function NavListItemMenu({ menuTitle, menuList }: { menuTitle: string; menuList: Array<string> }) {
  return (
    <div className="w-52">
      <div className="text-center text-white bg-blue-800">{menuTitle}</div>
      {menuList.map((list) => {
        return (
          <div className="ml-6" key={list}>
            {list}
          </div>
        );
      })}
    </div>
  );
}

export default NavListItemMenu;
