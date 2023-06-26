import { useState } from 'react';
import { useGetNoticeQuery } from './query/getNoticeQuery';

function Notification() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const data = useGetNoticeQuery({ pageNumber: pageNumber });
  const changePage = (index: number) => {
    setPageNumber(index);
  };

  return (
    <div>
      <div className="w-[100%] h-96 overflow-hidden mb-12 mmd:mb-6">
        <img src="../../../public/images/sodaInfoImg.jpg" alt="초록색 나무 이미지" className="mt-12 mmd:mt-6" />
      </div>

      <table className="w-full my-10 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              번호
            </th>
            <th scope="col" className="px-6 py-3">
              제목
            </th>
            <th scope="col" className="px-6 py-3">
              글쓴이
            </th>
            <th scope="col" className="px-6 py-3">
              날짜
            </th>
            <th scope="col" className="px-6 py-3">
              조회
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data?.noticePost.map((item) => (
              <tr className="text-black bg-white border-b" key={item.noticeId}>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4 font-medium border whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 border">{item.writer}</td>
                <td className="px-6 py-4 border">{item.noticeDate}</td>
                <td className="px-6 py-4">{item.view}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex justify-center w-full gap-5 mb-10">
        {data.data &&
          Array.from({ length: data.data.totalPageCount }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => changePage(index)}
              className="flex items-center px-3 py-2 font-medium text-gray-900 transition-colors bg-white border rounded select-none hover:border-blue-600 hover:bg-black hover:text-white">
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Notification;
