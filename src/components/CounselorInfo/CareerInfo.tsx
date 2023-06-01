import { ICareerType } from './CounselorInfoType';

function CareerInfo({ item }: { item: ICareerType }) {
  return (
    <div className="mt-12 border-2">
      <div className="flex gap-16 p-10 pl-20 pr-20">
        <div className="pr-10 border-r-2 basis-2/5 ">
          <img src="../../../public/images/centerImg1.jpeg" alt="" className="w-[90%]" />
          <p className="mt-10 text-2xl text-blue-800">{item.name}</p>
          <p className="mt-1 text-xl ">{item.role}</p>
        </div>
        <div className="basis-3/5">
          {item.careerList.map((item, index) => {
            return (
              <p className="mb-1 text-lg" key={index}>
                • {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CareerInfo;
