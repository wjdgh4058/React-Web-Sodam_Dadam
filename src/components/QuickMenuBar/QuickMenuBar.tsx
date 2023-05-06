function QuickMenuBar() {
  return (
    <div className="flex flex-col border-2 w-36 mxl:w-24">
      <p className="pt-2 pb-2 font-semibold text-center text-white bg-gray-500 mxl:text-sm">Quick Menu</p>
      <button className="flex flex-col items-center pl-6 pr-6 mt-2 mxl:pl-2 mxl:pr-2">
        <img
          src="../../../public/images/online-booking.png"
          alt="상담예약 안내 아이콘"
          className="w-20 h-20 mb-2 mxl:border-b-2 mxl:w-16 mxl:h-20 mxl:pb-4"
        />
        <p className="pb-2 font-medium border-b-2 mxl:hidden">상담예약 안내</p>
      </button>
      <button className="flex flex-col items-center pl-6 pr-6 mt-2 mxl:pl-2 mxl:pr-2">
        <img
          src="../../../public/images/reserved.png"
          alt="상담,교육 신청 아이콘"
          className="w-20 h-20 mb-2 mxl:w-16 mxl:h-16"
        />
        <p className="pb-2 font-medium mxl:hidden">상담/교육 신청</p>
      </button>
      <button className="pt-2 pb-2 font-medium text-white bg-blue-700 mxl:text-sm ">TOP ⇧</button>
    </div>
  );
}
export default QuickMenuBar;
