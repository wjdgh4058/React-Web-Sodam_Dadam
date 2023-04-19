function Footer() {
  return (
    <footer className="border-t">
      <div className="mt-6 mb-6">
        <div className="flex justify-center gap-32">
          <section>
            <h3 className="font-bold text-lg">소담다담 심리상담센터</h3>
            <ul>
              <li className="mb-6 mt-6">
                <span className="font-bold text-xl mr-3">010-2331-4058</span>
                <span>월~토요일 오전 9시 - 오후 6시</span>
              </li>
              <li className="flex">
                <button className="border-2 w-28 h-12 mr-4 mb-4">카카오톡 문의</button>
                <div>
                  <p className="flex">
                    <span className="text-gray-500">월~토요일</span>
                    <span className="font-extralight text-gray-500">ㅣ</span>
                    <span className="text-gray-500">오전 9시 - 오후 6시</span>
                  </p>
                  <p className="flex">
                    <span className="text-gray-500">일/공휴일</span>
                    <span className="font-extralight text-gray-500">ㅣ</span>
                    <span className="text-gray-500">오전 9시 - 오후 1시</span>
                  </p>
                </div>
              </li>
              <li className="flex">
                <button className="border-2 w-28 h-12 mr-4">1:1 문의</button>
                <div>
                  <p className="text-gray-500">365일</p>
                  <p className="text-gray-500">센터 운영시간에 순차적으로 답변 드리겠습니다.</p>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li>
                <span className="text-gray-500">법인명 (상호) : 소담다담</span>
                <span className="text-gray-500">사업자등록번호 : 261-81-23567 </span>
              </li>
              <li>
                <span className="text-gray-500">주소 : 경기도 수원시 팔달구 장다리로 328 MJ아이티밸리 9층 906호</span>
                <span className="text-gray-500">ㅣ</span>
                <span className="text-gray-500">대표 : 권문희</span>
              </li>
              <li className="text-gray-500 border-b block pb-4">팩스 : 010 - 2331 - 4058</li>
              <li className="text-gray-500 mt-4">
                <span>계좌정보</span>
                <div className="mt-2">
                  <span className="mr-7">예금주</span>
                  <span>권문희</span>
                </div>
                <div>
                  <span className="mt-1 mr-4">입금은행</span>
                  <span>농협</span>
                </div>
                <div className="border-b pb-4 mt-1">
                  <span className="mr-4">계좌번호</span>
                  <span>1109-12-244394</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-50 h-14 ">
        <span>© SODA. ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}

export default Footer;
