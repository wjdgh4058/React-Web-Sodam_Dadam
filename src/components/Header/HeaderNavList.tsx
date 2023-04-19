function HeaderNavList({ listName }: { listName: string }) {
  return (
    <li className="font-semibold">
      <button>{listName}</button>
    </li>
  );
}

export default HeaderNavList;
