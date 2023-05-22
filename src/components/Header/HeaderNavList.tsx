import { Link } from 'react-router-dom';
import { IHeaderType } from './HeaderType';

function HeaderNavList({ headerList, menuVisible }: { headerList: IHeaderType; menuVisible: boolean }) {
  return (
    <li className="relative text-xl font-medium mxl:text-base basis-1/5 ">
      <Link
        className="flex justify-center transition duration-500 ease-in-out pr-auto pl-auto hover:text-blue-800"
        to={`${headerList.link}/1`}>
        {headerList.name}
      </Link>
      <div>
        <div className={`absolute inset-x-0 z-20 flex flex-col h-0 gap-2 mt-5 max-w-7xl ${menuVisible || 'hidden'}`}>
          {headerList.list.map((list, index) => {
            return (
              <Link
                to={`${headerList.link}/${index + 1}`}
                key={index}
                className="p-1 ml-auto mr-auto text-lg font-normal text-white transition duration-300 ease-in-out hover:text-blue-700 hover:border-b hover:text-xl mxl:hover:text-lg mxl:text-base">
                {list}
              </Link>
            );
          })}
        </div>
      </div>
    </li>
  );
}

export default HeaderNavList;
