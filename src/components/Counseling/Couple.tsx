import Template from './Template';

const coupleData = {
  mainText: ['관계의 근본적인', '해결책을 찾는 부부상담과 커플상담'],
  img_1: '../../../public/images/centerImg2.jpeg',
  subText_1: [
    '부부, 커플의 관계성 향상을 위한',
    '심리상담으로 관계문제, 심리적 문제를 파악하고',
    '근본적인 해결책을 찾아나가는 상담입니다.',
  ],
  subText_2: [
    '소담다담은 소중한 인연으로 만나 겪게 되는',
    '다양한 어려움을 슬기롭게 극복하고 서로에게 힘과 용기를',
    '주는 관계로 성장할 수 있도록 성찰할 시간을 제공합니다.',
  ],
  img_2: '../../../public/images/centerImg2.jpeg',
};

function Couple() {
  return <Template data={coupleData} />;
}

export default Couple;
