import Template from './Template';

const groupData = {
  mainText: ['개인문제의 근원을 찾고', '지지와 공감 속에 함께 해결방향을 찾는 상담'],
  img_1: '../../../public/images/centerImg2.jpeg',
  subText_1: ['공동의 주제에 대해 나누는 성장,', '교육집단으로 서로의 경험과 지혜를', '나누는 시간을 갖습니다.'],
  subText_2: [
    '소담다담은 집단의 역동을 활용하여 자기 이해를 돕고,',
    '대인관계에서의 불편함이나 소외감,',
    '갈등 요소들을 다루고 해결해감으로써',
    '개인의 성장을 이끌고 있습니다.',
  ],
  img_2: '../../../public/images/centerImg2.jpeg',
};

function Group() {
  return <Template data={groupData} />;
}

export default Group;
