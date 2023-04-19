import { Link } from 'react-router-dom';
import HeaderNavList from './HeaderNavList';

function Header() {
  return (
    <header>
      <div className="mt-4 mb-4 flex justify-center">
        <Link to={'/'} className="inline-flex flex-row flex-nowrap">
          <img src="../../public/images/sodaLogo.jpeg" alt="소담다담 로고" className="w-14 h-14  mr-1.5" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <p className="text-xl font-bold text-blue-900 mr-2">소담다담</p>
              <p className="text-xl font-semibold text-gray-500">심리상담센터</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">SODA COUNSELING CENTER</p>
            </div>
          </div>
        </Link>
      </div>
      <ul className="border-t border-b border-stone-950 pt-2 pb-2">
        <div className="max-w-7xl flex justify-around mr-auto ml-auto">
          <HeaderNavList listName="센터 안내" />
          <HeaderNavList listName="상담전문가 소개" />
          <HeaderNavList listName="프로그램 소개" />
          <HeaderNavList listName="공지사항" />
        </div>
      </ul>
    </header>
  );
}

export default Header;
