import Template from './Template';

const personalData = {
  mainText: ['개인문제의 근원을 찾고', '지지와 공감 속에 함께 해결방향을 찾는 상담'],
  img_1: '../../../public/images/centerImg2.jpeg',
  subText_1: ['스트레스 완화, 적응력 향상을 위한', '1:1 성인 상담으로 다양한', '삶의 이슈와 정서를 다룹니다.'],
  subText_2: [
    '삶의 고비마다 혼자서 감당하기 어려운 문제가 있고,',
    '때로는 심리적 고통을 겪기도 합니다.',
    '소담다담은 자신의 주관적인 느낌이나 생각을',
    '스스로 탐색하고 이해해나가는 과정을 함께 하겠습니다.',
  ],
  img_2: '../../../public/images/centerImg2.jpeg',
};

function Personal() {
  return <Template data={personalData} />;
}

export default Personal;
