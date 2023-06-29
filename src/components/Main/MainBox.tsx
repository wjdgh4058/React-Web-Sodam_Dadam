import { IMainCardType, IMainBoxType } from './MainType';
import MainCard from './MainCard';

function MainBox({ data, name }: IMainBoxType) {
  return (
    <div className={`w-[80%] mb-10 h-full mt-10 mlg:mt-4`}>
      <div className="text-3xl font-semibold text-center mlg:text-xl">
        <span className="pb-4 border-b-2 border-gray-400">{name}</span>
      </div>
      <div className={`flex w-full mt-20 flex-nowrap mlg:mt-12 ${name === '심리 상담' ? 'gap-2' : 'gap-8'}`}>
        {data.map((item: IMainCardType) => (
          <MainCard title={item.title} content={item.content} img={item.img} name={name} />
        ))}
      </div>
    </div>
  );
}

export default MainBox;
