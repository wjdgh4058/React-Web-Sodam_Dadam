import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/start', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        start: 'start',
      }),
    );
  }),

  rest.get('http://localhost:3000/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        consulting: [
          {
            img: '/images/persnalCounselingImg.png',
            title: '개인 상담',
            content: '스트레스 완화, 적응력 향상을 위한 1:1 성인상담',
          },
          {
            img: '/images/psychologicalTestImg.png',
            title: '심리 검사',
            content: '개인 맞춤형 심리검사를 선정하여 심층적 자기 이해',
          },
          {
            img: '/images/teenagerAndParentCounselingImg.png',
            title: '청소년 & 부모상담',
            content: '청소년의 적응문제 해결 및 부모역량강화',
          },
          {
            img: '/images/coupleCounselingImg.png',
            title: '부부 & 커플상담',
            content: '부부, 커플의 관계성 향상을 위한 심리상담',
          },
          {
            img: '/images/groupCounselingImg.png',
            title: '집단 상담',
            content: '공동의 주제에 대해 나누는 성장, 교육집단',
          },
        ],
        education: [
          {
            img: '/images/workShopImg.png',
            title: '특강 및 워크샵',
            content: '주제별 강연, 참여 활동 프로그램',
          },
          {
            img: '/images/supervisionImg.png',
            title: '상담자 교육',
            content: '상담 전문가 양성을 위한 교육 프로그램',
          },
          {
            img: '/images/bookReadingImg.png',
            title: '북리딩 세미나',
            content: '책을 통해 내면의 성장을 돕는 소규모 세미나',
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/centerinfo/waytocome', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '경기도 수원시 팔달구 인계동 940-18',
        wayToComeName: '오시는 길',
        wayToComeImg: '/images/wayToCome.png',
        wayToComeFirstLocation: 'MJ아이티밸리 9층 906호',
        wayToComesecondLocation: '동수원 사거리 라마다 호텔과 은혜와 진리 교회 사이',
        callName: '전화 번호',
        callImg: '/images/call.png',
        callContent: '010-2331-4058',
        infomationUseName: '이용 안내',
        infomationImg: '/images/InformationUse.png',
        reservationImg: '/images/reserve.png',
        reservationName: '예약',
        internetImg: '/images/wifi.png',
        internetName: '무선 인터넷',
        parkinginfoName: '주차정보',
        parkinginfoContent: '지하 3층까지 가능, 주차비는 본 기관에서 부담합니다.',
      }),
    );
  }),

  rest.get('http://localhost:3000/centerinfo/sodaInfo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '소담다담 소개',
        headText: '소담다담 심리상담센터는,',
        img: '../../../public/images/sodaInfoImg.jpg',
        alt: '초록색 나뭇잎 이미지',
        content: [
          '삶을 살아가며 만나는 수많은 경험과 관계 속에서 우리가 마주하는 아픔에 대한 세심한 마음 채집활동을 통해 진짜 나를 만나기 위한 여정을 함께 하고자 합니다.',
          '소담다담은 경험적으로 검증된 다양한 상담 이론을 통합적으로 접근하여 일상적인 고민 및 학교, 직장, 가정생활 적응 등의 어려움을 나누고, 건강한 심리적 성장을 도모하는 과정을 함께 하고자 합니다.',
          '소담다담은 일상 속의 문제들에서 시작되어 혼자서는 점차 해결하기 어려워진 심리적 문제들에 귀 기울입니다. 사소하다고 무심코 지나쳐 버렸지만, 중요한 자리를 차지하고 있던 내면의 소리를 함께 함으로써 당신의 일상에 평온함과 작은 기쁨을 되찾아가는 과정을 만들어 갑니다.',
          '소담다담은 자신만을 위한 시간과 공간을 향유하실 수 있도록 예약제로만 운영됩니다. 상담실을 내방하시는 분들이 최대한 다른 내방객들과 마주치지 않도록 상담시간 사이의 간격을 적절히 유지함으로써 상담에 대한 비밀 보장을 최우선으로 제공하고자 합니다.',
          '소담다담은 국내 최고의 상담 관련 학회인 한국상담심리학회(한국심리학회 산하)의  공인 자격을 갖춘(상담심리전문가, 1급, 주수련감독자) 박사급 상담심리사가 직접 심리상담을 진행합니다. 상담 효과가 경험적으로 검증된 정신역동적 접근, 인지행동적 접근, 게슈탈트 접근, 인간중심접근 등을 통합적으로 적용하여 전문적인 심리상담을 실시합니다.',
          '소담다담은 한국상담심리학회의 상담심리사 윤리강령을 준수하며, 내담자와 상담자의 상호간 인간적이며 전문적인 신뢰관계를 중시합니다. 아울러 내담자와 상담자 모두의 인격적인 존중을 바탕으로 상담을 진행합니다.',
        ],
        detailImg: [
          '../../../public/images/centerImg1.jpeg',
          '../../../public/images/centerImg2.jpeg',
          '../../../public/images/centerImg3.jpeg',
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/centerinfo/reservationInfo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '상담예약 안내',
        reservation: [
          {
            img: '../../../public/images/Reservation.png',
            step: 1,
            stepName: '상담 예약',
            stepInfo: '홈페이지 및 전화를 통해 상담일정 예약 – 최종일정 확인 – 예약 완료',
          },
          {
            img: '../../../public/images/firstCounseling.png',
            step: 2,
            stepName: '초기 상담',
            stepInfo: '주 호소문제 확인, 심리상담/심리치료 과정 안내',
          },
          {
            img: '../../../public/images/counselingTest.png',
            step: 3,
            stepName: '심리검사(선택 사항)',
            stepInfo: '심리검사를 통한 다차원적이고 객관적인 심리분석',
          },
          {
            img: '../../../public/images/deepCounseling.png',
            step: 4,
            stepName: '심층상담/치료',
            stepInfo: '체계적이고 심층적인 심리상담/심리치료 진행',
          },
          {
            img: '../../../public/images/counselingFinish.png',
            step: 5,
            stepName: '상담/치료 종결',
            stepInfo: '심리상담/치료 종결 및 사후관리 안내',
          },
        ],
        counselingTime: [
          {
            name: '개인상담',
            time: '50분',
          },
          {
            name: '부부/커플/가족 상담',
            time: '70분',
          },
          {
            name: '심리검사',
            time: '종류에 따라 상이',
          },
          {
            name: '집단상담',
            time: '1회당 2시간',
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/navList', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          url: '/CenterInfo',
          listName: '센터 안내',
          listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/CounselorInfo',
          listName: '상담전문가 소개',
          listItem: ['상담심리전문가', '전임 상담원'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Counseling',
          listName: '심리상담',
          listItem: ['개인상담', '심리검사', '집단상담', '청소년 & 부모상담', '부부 & 커플상담'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Education',
          listName: '심리교육',
          listItem: ['특강 및 워크숍', '상담자 교육', '북리딩 세미나'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Notice',
          listName: '공지 ・ 문의',
          listItem: ['교육/워크숍 공지', '이벤트', '문의'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
      ]),
    );
  }),
];
