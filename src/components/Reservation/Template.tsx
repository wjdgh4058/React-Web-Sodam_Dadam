import DatePickerComponent from './DatePickerComponent';

function Template() {
  const thStyle = 'p-4 border-b border-gray-700 border-x bg-gray-100 text-xl font-normal h-20 w-64';
  const tdStyle = 'p-4 border-b border-gray-700 border-r text-xl h-20 pl-12';
  const inputStyle = 'h-12 pl-4 border border-gray-700 rounded w-48';

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
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
      <table className="mt-12">
        <tbody>
          <tr className="border-t-4 border-slate-900 ">
            <th className={thStyle}>상담/교육</th>
            <td className={tdStyle} colSpan={3}>
              <select name="program" id="program" className={inputStyle}>
                <option value="선택">선택</option>
                <option value="개인상담">개인상담</option>
                <option value="집단상담">집단상담</option>
                <option value="심리검사">심리검사</option>
                <option value="청소년&부모상담">청소년&부모상담</option>
                <option value="부부&커플상담">부부&커플상담</option>
                <option value="특강/워크숍">특강/워크숍</option>
                <option value="상담자교육">상담자교육</option>
                <option value="북리딩세미나">북리딩세미나</option>
              </select>
            </td>
          </tr>
          <tr>
            <th className={thStyle}>이름</th>
            <td className={tdStyle} colSpan={3}>
              <input type="text" name="name" className={inputStyle} onChange={changeInput} />
            </td>
          </tr>
          <tr>
            <th className={thStyle}>성별</th>
            <td className={tdStyle}>
              <input type="radio" value="남자" title="남자" id="man" name="gender" className="w-4 h-4 peer/man" />
              <label htmlFor="man" className="ml-2 peer-checked/man:text-blue-900">
                남자
              </label>
              <input
                type="radio"
                value="여자"
                title="여자"
                id="woman"
                name="gender"
                className="w-4 h-4 ml-2 ml-8 peer/woman"
              />
              <label htmlFor="woman" className="ml-2 peer-checked/woman:text-blue-900">
                여자
              </label>
            </td>
          </tr>
          <tr>
            <th className={thStyle}>연령</th>
            <td className={tdStyle}>
              <select name="age" id="age" className={inputStyle}>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대</option>
                <option value="60대">60대</option>
                <option value="70대">70대</option>
                <option value="80대">80대</option>
                <option value="기타">기타</option>
              </select>
            </td>
          </tr>
          <tr>
            <th className={thStyle}>연락처</th>
            <td className={tdStyle} colSpan={3}>
              <select name="phoneNumber" id="phoneNumber" required className={`${inputStyle} mr-4`}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              -
              <input type="text" name="hp-first" className={`${inputStyle} mx-4`} onChange={changeInput} />
              -
              <input type="text" name="hp-last" className={`${inputStyle} ml-4 mr-8`} />
              {`(정확히 입력하여야 상담신청이 가능합니다.)`}
            </td>
          </tr>
          <tr>
            <th className={thStyle}>이메일</th>
            <td className={tdStyle}>
              <input type="text" name="email-first" className={`${inputStyle} mr-4`} />
              @
              <input type="text" name="email-last" className={`${inputStyle} mx-4`} />
              <select name="email-select" id="email-select" required className={`${inputStyle}`}>
                <option value="직접입력">직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hanmail.com">hanmail.com</option>
                <option value="yahoo.co.kr">yahoo.co.kr</option>
              </select>
            </td>
          </tr>
          <tr>
            <th className={thStyle}>상담/교육 일정 선택</th>
            <td className={`${tdStyle} flex items-center`}>
              <DatePickerComponent />
              <select name="email-select" id="hour" required className={`${inputStyle} mx-4`}>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </select>
              시
              <select name="email-select" id="minute" required className={`${inputStyle} mx-4`}>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
              분
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Template;
