interface SodaInfoType {
  title: string;
  headText: string;
  img: string;
  content: Array<string>;
  detailImg: Array<string>;
}

function CenterInfoSodaIntroduction({ sodaData }: { sodaData: SodaInfoType }) {
  // console.log(sodaData);
  return <div>{sodaData.headText}</div>;
}
export default CenterInfoSodaIntroduction;
