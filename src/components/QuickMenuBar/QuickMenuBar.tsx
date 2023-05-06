function QuickMenuBar() {
  return (
    <div className="flex flex-col border-2 w-36">
      <p className="pt-2 pb-2 font-semibold text-center text-white bg-gray-500 ">Quick Menu</p>
      <button className="flex flex-col items-center pl-6 pr-6 mt-4 ">
        <img src="../../../public/images/online-booking.png" alt="상담예약 안내 아이콘" className="w-20 h-20 mb-2 " />
        <p className="pb-2 font-medium border-b-2">상담예약 안내</p>
      </button>
      <button className="flex flex-col items-center pl-6 pr-6 mt-2 ">
        <img src="../../../public/images/reserved.png" alt="상담,교육 신청 아이콘" className="w-20 h-20 mb-2 " />
        <p className="pb-2 font-medium">상담/교육 신청</p>
      </button>
      <button className="pt-2 pb-2 font-medium text-white bg-blue-700">TOP ⇧</button>
    </div>
  );
}
export default QuickMenuBar;
