import { Link } from 'react-router-dom';
import { IHeaderType } from './HeaderType';

function HeaderNavList({ headerList }: { headerList: IHeaderType }) {
  return (
    <li className="text-2xl mxl:text-lg basis-1/5 ">
      <Link
        className="flex justify-center transition duration-500 ease-in-out pr-auto pl-auto hover:text-blue-800"
        to={`${headerList.link}/1`}>
        {headerList.name}
      </Link>
    </li>
  );
}

export default HeaderNavList;
