function Template() {
  const thStyle = 'p-4 border-b border-gray-700 border-x bg-gray-100 text-xl font-normal h-20 w-64';
  const tdStyle = 'p-4 border-b border-gray-700 border-x text-xl h-20 pl-12';
  const inputStyle = 'h-12 pl-4 border border-gray-700 rounded w-48';
  return (
    <div className="ml-[15%] mr-[15%] flex flex-col">
      <p className="pb-6 mt-12 text-4xl font-medium text-blue-800 border-b-2">상담예약하기</p>
      <div className="mt-12 text-2xl">
        <span className="font-semibold ">개인정보 수집·이용</span>
        <span className="text-gray-600 "> 등에 대한 동의</span>
      </div>
      <pre className="p-10 mt-12 overflow-y-scroll text-xl border-4 h-72 ">
        ▪︎ 수집하는 개인정보 항목 &#10; &#10;회사는 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고
        있습니다.&#10;&#10;- 수집항목 : 성명, 성별, 연령, 핸드폰, E-mail&#10;- 개인정보 수집방법 : 홈페이지(신청하기)
        &#10;&#10;▪︎ 개인정보의 수집 및 이용목적 회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.&#10;&#10;-
        사이트의 온라인문의를 이용하는 고객에게 답변하기 위한 목적&#10;&#10;▪︎ 개인정보의 보유 및
        이용기간&#10;&#10;원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
        파기합니다.&#10;단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.&#10;&#10;- 보존 항목 :
        성명, 성별, 연령, 핸드폰, E-mail&#10;&#10;- 보존 기간 : 글 삭제시 까지
      </pre>
      <div className="flex items-center justify-end gap-1 mt-12 text-2xl">
        <input
          type="radio"
          value="동의"
          title="개인정보 이용,수집 등에 동의 합니다."
          id="agree"
          name="agree"
          className="w-4 h-4 peer/agree"
        />
        <label htmlFor="agree" className="peer-checked/agree:text-blue-900">
          동의함
        </label>
        <input
          type="radio"
          value="비동의"
          title="개인정보 이용,수집 등에 동의하지 않습니다."
          id="notagree"
          name="agree"
          className="w-4 h-4 ml-2 peer/notagree"
        />
        <label htmlFor="notagree" className="peer-checked/notagree:text-blue-900">
          동의안함
        </label>
      </div>
    </div>
  );
}
export default Template;
