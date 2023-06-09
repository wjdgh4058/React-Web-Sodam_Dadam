import Template from './Template';

const adolescentsParentsData = {
  mainText: ['개인문제의 근원을 찾고', '지지와 공감 속에 함께 해결방향을 찾는 상담'],
  img_1: '../../../public/images/centerImg2.jpeg',
  subText_1: ['청소년의 적응문제', '해결 및 부모역량강화를 도와드립니다.'],
  subText_2: [
    '소담다담은 자녀의 특성을 이해하고,',
    '문제행동을 하는 자녀의 마음을 돌봐주고,',
    '문제 행동의 원인을 찾아 부모와 자녀가 함께',
    '성장통을 극복하도록 도와드립니다.',
  ],
  img_2: '../../../public/images/centerImg2.jpeg',
};

function AdolescentsParents() {
  return <Template data={adolescentsParentsData} />;
}

export default AdolescentsParents;
