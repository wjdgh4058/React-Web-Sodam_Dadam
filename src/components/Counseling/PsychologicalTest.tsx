import Template from './Template';

const psychologicalTestData = {
  mainText: ['개인문제의 근원을 찾고', '지지와 공감 속에 함께 해결방향을 찾는 상담'],
  img_1: '../../../public/images/centerImg2.jpeg',
  subText_1: ['개인 맞춤형 심리검사를', '선정하여 심층적인 자기 이해를 돕습니다.'],
  subText_2: [
    '소담다담은 검사를 통해 다양한 심리적',
    '특성에 대해 파악하고 이를 통해 자신의 스토리를 찾아드립니다.',
    '이를 통해 개인의 성향이나 향후 행동을 예측하는데',
    '도움을 얻을 수 있어 일상생활의 다양한 부분에서',
    '사용되고 있습니다.',
  ],
  img_2: '../../../public/images/centerImg2.jpeg',
};

function PsychologicalTest() {
  return <Template data={psychologicalTestData} />;
}

export default PsychologicalTest;
