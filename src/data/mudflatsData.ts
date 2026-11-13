import { MudflatInfo } from '../types/mudflat';

export const MUDFLATS_DATA: MudflatInfo[] = [
  {
    id: 'ganghwa',
    name: '강화도 갯벌',
    badge: '천연기념물 제419호 & 저어새의 낙원',
    region: '인천광역시 강화군',
    locationDescription: '인천광역시 강화도의 남쪽 해안과 석모도, 볼음도 등 주변 섬 사이에 넓게 펼쳐져 있는 서해안 최북단의 대형 갯벌이에요.',
    coordinates: { x: 106, y: 104 },
    areaSummary: '약 453 km² (여의도 면적의 약 50배가 넘는 거대한 크기)',
    type: '펄갯벌',
    unescoStatus: false,
    designation: '천연기념물 제419호 (강화 갯벌 및 저어새 번식지)',
    features: [
      '한강, 임진강, 예성강 세 개의 큰 강이 합쳐져 서해로 흘러들면서 엄청난 양의 고운 흙(퇴적물)을 쌓아 만든 갯벌이에요.',
      '밀물과 썰물의 차이(조수간만의 차)가 최대 9m에 달해 썰물 때가 되면 끝없이 아득한 갯벌이 눈앞에 펼쳐져요.',
      '세계적으로 멸종 위기에 처한 천연기념물 제205호 "저어새"의 전 세계 최대 번식지이자 보금자리예요.'
    ],
    keyCreatures: [
      {
        id: 'spoonbill',
        name: '저어새',
        category: '조류',
        emoji: '🪶',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Platalea_minor.jpg/960px-Platalea_minor.jpg',
        imageAlt: '갯벌에서 먹이를 찾는 천연기념물 저어새 실제 사진',
        oneLiner: '주걱 모양의 긴 부리를 좌우로 저으며 먹이를 찾는 갯벌의 신사',
        description: '부리가 마치 주걱이나 숟가락처럼 둥글고 납작해요. 갯벌 물속에 부리를 넣고 좌우로 흔들며 물고기와 새우를 찾아 먹는 특별한 춤을 춰요!',
        funFact: '전 세계에 약 6,000마리밖에 남지 않은 귀한 새로, 여름철에 강화도 무인도에서 알을 낳고 새끼를 키워요.'
      },
      {
        id: 'chilg-crab',
        name: '칠게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Yamatoosagani_07h9903c.jpg',
        imageAlt: '갯벌 진흙 표면을 기어다니는 칠게 실제 사진',
        oneLiner: '긴 눈자루로 360도를 두리번거리는 갯벌 청소부',
        description: '펄갯벌에 경사진 구멍을 파고 살며, 진흙 표면의 유기물과 규조류를 숟가락 같은 집게발로 긁어먹어요.',
        funFact: '저어새와 낙지가 가장 좋아하는 영양 만점 간식이자 갯벌 바닥을 숨 쉬게 하는 고마운 친구예요.'
      },
      {
        id: 'lugworm',
        name: '갯지렁이',
        category: '환형동물',
        emoji: '🪱',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Lugworm_casts_at_Gullmarsvik_1.jpg/960px-Lugworm_casts_at_Gullmarsvik_1.jpg',
        imageAlt: '갯벌 진흙 속에서 모래를 정화하는 갯지렁이와 모래탑 실제 사진',
        oneLiner: '갯벌 흙을 삼켜 깨끗하게 만들어주는 자연 정화기',
        description: '진흙 속에 깊은 굴을 파고 살면서 모래와 진흙 속의 찌꺼기를 먹고 깨끗한 모래똥을 배출해요.',
        funFact: '갯지렁이가 흙을 통과시키며 산소를 공급해 주지 않으면 갯벌 바닥은 썩어버리고 만답니다.'
      },
      {
        id: 'bandaengi',
        name: '밴댕이',
        category: '어류',
        emoji: '🐟',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Sardinella_zunasi_Katsurahama_Aquarium1.jpg/960px-Sardinella_zunasi_Katsurahama_Aquarium1.jpg',
        imageAlt: '강화 갯벌 바다를 헤엄치는 은빛 밴댕이 실제 사진',
        oneLiner: '강화 앞바다 갯벌 조류를 타고 찾아오는 고소한 봄철 물고기',
        description: '몸이 납작하고 은빛으로 반짝이는 청어목 생선으로, 강화도 갯벌 물길에서 많이 잡혀요.',
        funFact: '"밴댕이 소갈딱지"라는 속담이 있지만 사실 성질이 급한 게 아니라 그물에 걸리면 금방 숨을 거두기 때문이에요.'
      }
    ],
    story: {
      title: '주걱 부리를 흔들며 사랑을 고백하는 저어새의 신혼여행지',
      subtitle: '왜 전 세계 저어새들은 강화도 갯벌을 가장 좋아할까요?',
      content: [
        '봄이 되면 노란색 머리 깃털을 멋지게 뽐내는 "패션왕" 저어새들이 머나먼 남쪽 나라에서 수천 킬로미터를 날아와 강화도 갯벌에 둥지를 틀어요.',
        '저어새는 눈이 보이지 않는 흙탕물 갯벌 속에서도 주걱 같은 부리 끝의 섬세한 신경세포 덕분에 톡톡 닿는 물고기와 게를 번개처럼 잡아챌 수 있어요.',
        '사람들의 발길이 닿지 않는 강화도의 무인도(각시암 등)와 풍부한 칠게가 가득한 갯벌 덕분에 강화도는 저어새에게 세계에서 가장 안전하고 풍요로운 신혼집이 되었답니다.'
      ],
      moralOrTip: '강화도 갯벌을 깨끗하게 보존하는 것은 우리나라뿐만 아니라 지구 전체의 저어새를 지켜주는 위대한 일이에요!'
    },
    observationKeyPoints: [
      '위치: 인천광역시 강화군 남부 해안 (서해안 최북단)',
      '유형: 부드러운 진흙이 두껍게 쌓인 전형적인 펄갯벌',
      '지정: 천연기념물 제419호 (강화 갯벌 및 저어새 번식지)',
      '대표 생물: 멸종위기 야생생물 1급 저어새, 칠게, 갯지렁이, 맛조개',
      '실험관찰 기록 팁: 한강·임진강 하구에서 실려온 고운 흙으로 만들어졌으며, 저어새가 주걱 부리를 저으며 먹이를 사냥함.'
    ],
    recommendedActivities: ['저어새 관찰 탐조대 방문하기', '강화 갯벌센터에서 펄 관찰하기', '망원경으로 칠게 구멍 찾아보기']
  },
  {
    id: 'seocheon',
    name: '서천 갯벌',
    badge: '유네스코 세계자연유산 & 지구 반 바퀴 철새 뷔페',
    region: '충청남도 서천군',
    locationDescription: '충남 서천군 비인면, 장항읍, 마서면 해안에 걸쳐 금강 하구와 만나는 서해안 중부의 드넓은 모래혼합갯벌이에요.',
    coordinates: { x: 116, y: 295 },
    areaSummary: '약 68 km²',
    type: '혼합갯벌',
    unescoStatus: true,
    unescoYear: 2021,
    designation: '유네스코 세계자연유산 & 람사르 습지',
    features: [
      '금강이 서해로 흘러들며 운반해 온 풍부한 모래와 미세 진흙이 섞여 단단하면서도 생명력이 넘치는 혼합갯벌이에요.',
      '동아시아-대양주 철새 이동 경로의 핵심 심장부로, 멸종위기 철새들의 필수 중간 기착지(휴게소) 역할을 해요.',
      '세계적으로 멸종 위기에 처한 귀여운 "넓적부리도요"를 비롯해 수십만 마리의 도요물떼새들이 머물며 배를 채워요.'
    ],
    keyCreatures: [
      {
        id: 'spoon-billed-sandpiper',
        name: '넓적부리도요',
        category: '조류',
        emoji: '🐦',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Spoon-billed_Sandpiper_in_Bakkhali_April_2026_by_Tisha_Mukherjee_14.jpg/960px-Spoon-billed_Sandpiper_in_Bakkhali_April_2026_by_Tisha_Mukherjee_14.jpg',
        imageAlt: '갯벌에서 먹이를 찾는 멸종위기 극복종 넓적부리도요 실제 사진',
        oneLiner: '스푼 같은 작은 부리를 가진 세계적 멸종위기 초특급 귀염둥이',
        description: '몸길이 15cm 정도로 손바닥보다 작고 주걱 모양의 작은 부리를 갯벌 진흙에 콕콕 박으며 갯지렁이와 단각류를 먹어요.',
        funFact: '전 세계에 겨우 수백 마리밖에 남지 않아 전 세계 조류학자들이 서천 갯벌에 찾아와 관찰해요.'
      },
      {
        id: 'sand-bubbler-crab',
        name: '엽낭게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Kometsukigani_06g0139v.jpg',
        imageAlt: '모래 경단을 빚어내는 모래갯벌 엽낭게 실제 사진',
        oneLiner: '모래를 굴려 동글동글 예술적인 모래 경단을 만드는 예술가',
        description: '모래갯벌에 굴을 파고 모래를 입에 넣어 규조류와 플랑크톤만 쏙 빨아먹고 남은 깨끗한 모래를 둥근 구슬 모양으로 뱉어내요.',
        funFact: '엽낭게가 지나간 자리는 동글동글한 모래 구슬들이 은하수처럼 예쁘게 수놓아져요.'
      },
      {
        id: 'razor-clam',
        name: '맛조개',
        category: '연체동물',
        emoji: '🎋',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Solen_strictus.jpg/960px-Solen_strictus.jpg',
        imageAlt: '대나무 마디 모양 껍데기를 가진 맛조개(참맛) 실제 생태 사진',
        oneLiner: '서천 갯벌 모래밭에 깊이 숨어 사는 달콤하고 쫄깃한 조개',
        description: '원통형 대나무 마디 모양으로 생겼으며, 서천 춘장대와 비인 해변의 고운 모래갯벌에 아주 많이 살아요.',
        funFact: '조개껍데기 양쪽 끝이 열려 있어 위쪽으로는 촉수를 내밀고 아래쪽으로는 강력한 발을 내밀어요.'
      },
      {
        id: 'eastern-curlew',
        name: '알락꼬리마도요',
        category: '조류',
        emoji: '🪶',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Numenius_madagascariensis_Java_1.jpg',
        imageAlt: '긴 휜 부리로 갯벌 속 먹이를 잡는 알락꼬리마도요 실제 사진',
        oneLiner: '길게 아래로 휜 부리로 깊은 구멍 속 칠게를 낚아채는 새',
        description: '몸집이 크고 부리가 아래로 길게 휘어져 있어 갯벌 깊은 곳에 숨어 있는 게의 굴속까지 부리를 쑥 집어넣어 사냥해요.',
        funFact: '호주에서 시베리아까지 왕복 2만 킬로미터가 넘는 길을 날아가는 엄청난 비행 챔피언이에요!'
      }
    ],
    story: {
      title: '지구 반 바퀴를 날아온 철새들의 무한리필 뷔페 식당!',
      subtitle: '서천 갯벌이 사라지면 왜 전 세계 철새들이 굶어 죽을까요?',
      content: [
        '시베리아와 알래스카에서 태어난 도요새들은 겨울을 따뜻한 호주와 뉴질랜드에서 보내기 위해 지구 반 바퀴(약 1만 km 이상)를 날아가요.',
        '작은 새들은 비행기처럼 중간에 연료를 넣을 수 없기 때문에 몸무게의 절반이 빠질 때까지 쉬지 않고 밤낮으로 바다 위를 날아요.',
        '그 지친 새들이 유일하게 내려앉아 배를 채우는 곳이 바로 서천 갯벌이에요! 서천 갯벌의 풍부한 조개와 게를 며칠 동안 실컷 먹어 몸무게를 원래대로 불려야만 남은 바다를 건널 수 있답니다.'
      ],
      moralOrTip: '서천 갯벌은 철새들에게 없어서는 안 될 지구상에서 가장 중요한 "생명의 주유소"예요.'
    },
    observationKeyPoints: [
      '위치: 충청남도 서천군 비인면·장항읍·마서면 (금강 하구 서해안 중부)',
      '유네스코 세계자연유산 (2021년) 및 람사르 습지',
      '특징: 금강이 운반한 모래와 펄이 조화로운 혼합갯벌',
      '대표 생물: 멸종위기 넓적부리도요, 알락꼬리마도요, 엽낭게, 맛조개',
      '실험관찰 기록 팁: 유라시아 대륙과 호주를 오가는 철새들의 중간 기착지로 에너지를 보충하는 생명의 쉼터.'
    ],
    recommendedActivities: ['서천 조류생태전시관에서 망원경 탐조', '장항 송림산림욕장 스카이워크에서 갯벌 조망', '춘장대 갯벌 모래 관찰']
  },
  {
    id: 'gochang',
    name: '고창 갯벌',
    badge: '유네스코 세계자연유산 & 조개 언덕 쉐니어',
    region: '전북특별자치도 고창군',
    locationDescription: '전북 고창군 심원면과 부안면 일대, 곰소만 남쪽에 형성된 갯벌로 바람과 계절에 따라 모래와 펄이 신비롭게 공존해요.',
    coordinates: { x: 108, y: 358 },
    areaSummary: '약 64.66 km²',
    type: '복합갯벌',
    unescoStatus: true,
    unescoYear: 2021,
    designation: '유네스코 세계자연유산 (한국의 갯벌)',
    features: [
      '계절의 변화와 조류에 따라 모래갯벌, 혼합갯벌, 펄갯벌이 모자이크처럼 아름답게 분포해 다양한 생물들이 살아요.',
      '파도와 바람에 의해 조개껍데기와 모래가 밀려와 쌓인 긴 언덕 지형인 "쉐니어(Chenier)"가 매우 잘 발달해 있어요.',
      '우리나라 바지락 생산량의 절반 가까이를 차지할 정도로 알이 꽉 차고 맛있는 조개들의 최고 산지예요.'
    ],
    keyCreatures: [
      {
        id: 'short-neck-clam',
        name: '바지락',
        category: '연체동물',
        emoji: '🐚',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Ruditapes_philippinarum.jpg/960px-Ruditapes_philippinarum.jpg',
        imageAlt: '모래펄에서 자란 신선한 바지락 조개 실제 사진',
        oneLiner: '모래와 펄이 섞인 고창 갯벌의 알짜배기 보물 조개',
        description: '껍데기에 부챗살 같은 줄무늬가 있고 모래펄 속에 숨어 출수공과 입수공을 내밀어 플랑크톤을 걸러 먹어요.',
        funFact: '바지락칼국수로 친숙한 바지락은 갯벌 1m² 안에 수백 마리가 모여 살며 물을 맑게 걸러줘요.'
      },
      {
        id: 'white-claw-crab',
        name: '흰발농게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Uca_lactea-male-600-450.jpg',
        imageAlt: '하얀 커다란 집게발을 뽐내는 멸종위기종 흰발농게 실제 사진',
        oneLiner: '하얗고 커다란 집게발로 인사하듯 손을 흔드는 귀염둥이',
        description: '멸종위기 야생생물 2급으로, 수컷은 몸집통보다 커다란 새하얀 집게발 하나를 높이 들어 올리는 "핸드웨이빙(손흔들기)" 구애 행동을 해요.',
        funFact: '집게발을 흔드는 속도와 크기가 멋진 수컷일수록 암컷의 선택을 받는답니다!'
      },
      {
        id: 'oystercatcher',
        name: '검은머리물떼새',
        category: '조류',
        emoji: '🐦',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Austernfischer_Haematopus_ostralegus_Iceland_RB.jpg/960px-Austernfischer_Haematopus_ostralegus_Iceland_RB.jpg',
        imageAlt: '빨간 부리를 가진 천연기념물 검은머리물떼새 실제 사진',
        oneLiner: '빨간 부리와 다리를 뽐내는 천연기념물 조개 사냥꾼',
        description: '몸은 턱시도를 입은 것처럼 검고 배는 하얗고, 길쭉하고 단단한 주황빛 부리로 조개껍데기를 톡 열어 속살을 쏙 빼먹어요.',
        funFact: '조개가 입을 꽉 다물기 전에 틈새로 부리를 전광석화처럼 찔러 넣어 사냥하는 달인이에요.'
      },
      {
        id: 'dongjuk-clam',
        name: '동죽',
        category: '연체동물',
        emoji: '🦪',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Mactra_quadrangularis_%28MNHN-IM-2000-30803%29.jpeg/960px-Mactra_quadrangularis_%28MNHN-IM-2000-30803%29.jpeg',
        imageAlt: '모래펄에서 물총을 쏘는 동죽 조개 실제 사진',
        oneLiner: '모래펄에서 물총을 퐁퐁 쏘아대는 물총조개',
        description: '껍데기가 도톰하고 둥근 삼각형 모양의 조개로, 발로 모래를 파고 숨는 속도가 아주 빨라요.',
        funFact: '갯벌을 걷다 보면 발밑에서 바닷물이 퐁 솟구칠 때가 있는데 바로 동죽이 숨 쉬며 물을 뿜은 것이에요.'
      }
    ],
    story: {
      title: '조개껍데기가 쌓여 섬이 된 마법의 언덕, 쉐니어(Chenier)',
      subtitle: '갯벌 한가운데에 긴 모래 언덕이 생긴 비밀은 무엇일까요?',
      content: [
        '고창 갯벌에 가면 바다 한가운데에 길게 솟아 있는 신기한 모래 언덕을 볼 수 있어요. 과학자들은 이를 "쉐니어"라고 불러요.',
        '이 언덕은 수천 년 동안 거센 태풍과 파도가 바다 밑바닥에 있던 수많은 조개껍데기와 모래를 갯벌 위로 차곡차곡 밀어 올려 만든 자연의 조각품이에요.',
        '밀물이 들어와도 물에 잠기지 않는 쉐니어는 조수간만의 차가 큰 서해안에서 철새들이 쉬어가는 안전한 쉼터이자, 생태학적으로 전 세계에서 손꼽히는 귀중한 지형이랍니다.'
      ],
      moralOrTip: '고창 갯벌의 쉐니어는 수천 년 세월 동안 파도와 조개껍질이 함께 빚어낸 소중한 세계자연유산이에요.'
    },
    observationKeyPoints: [
      '위치: 전북특별자치도 고창군 심원면·부안면 (곰소만 남쪽 연안)',
      '유네스코 세계자연유산 (2021년 등재)',
      '특징: 펄·모래·혼합갯벌이 복합적으로 공존하는 환경',
      '지형 특징: 조개껍데기가 파도에 밀려와 쌓인 독특한 모래 언덕 "쉐니어(Chenier)"',
      '대표 생물: 바지락(전국 최대 산지), 멸종위기종 흰발농게, 검은머리물떼새'
    ],
    recommendedActivities: ['만돌 갯벌체험학습장에서 바지락 캐기', '쉐니어 지형 탐방로 걷기', '흰발농게 서식지 망원경 관찰']
  },
  {
    id: 'sinan',
    name: '신안 갯벌',
    badge: '국내 최대 면적 & 1004개 섬이 품은 황금 갯벌',
    region: '전라남도 신안군',
    locationDescription: '전라남도 신안군의 수많은 섬(천사섬)들을 둘러싸고 있는 우리나라에서 가장 넓은 면적의 거대한 다도해 갯벌이에요.',
    coordinates: { x: 58, y: 435 },
    areaSummary: '약 1,100 km² (우리나라 전체 갯벌 면적의 약 15% 이상을 차지하는 초대형 갯벌)',
    type: '복합갯벌',
    unescoStatus: true,
    unescoYear: 2021,
    designation: '유네스코 세계자연유산 & 생물권보전지역',
    features: [
      '모래갯벌, 모래펄갯벌, 펄갯벌 등 모든 종류의 갯벌이 거대한 스케일로 펼쳐져 있어요.',
      '수많은 섬들이 파도를 막아주는 병풍 역할을 하여 바닥에 미네랄이 풍부한 영양염류가 차곡차곡 축적돼요.',
      '청정한 갯벌 바닷물과 풍부한 햇살을 이용한 전통 염전(천일염)의 전국 최대 생산지이자 세발낙지의 고향이에요.'
    ],
    keyCreatures: [
      {
        id: 'octopus',
        name: '세발낙지',
        category: '연체동물',
        emoji: '🐙',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Octopus_minor_by_OpenCage.jpg/960px-Octopus_minor_by_OpenCage.jpg',
        imageAlt: '갯벌 바위와 펄에 사는 싱싱한 세발낙지 실제 사진',
        oneLiner: '발이 세 개가 아니라 가늘고 부드러워서 세(細)발낙지!',
        description: '펄 깊숙한 구멍에 숨어 살며 영리하게 다리를 뻗어 게와 조개를 사냥해요. 타우린이 풍부해 피로를 풀어줘요.',
        funFact: '발이 3개(三)가 아니라 가늘 세(細) 자를 써서 발이 가늘다는 뜻이에요. 발은 당연히 8개랍니다!'
      },
      {
        id: 'fiddler-crab',
        name: '농게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Uca_arcuata_by_OpenCage.jpg/960px-Uca_arcuata_by_OpenCage.jpg',
        imageAlt: '붉은 큰 집게발을 높이 든 갯벌 농게 실제 사진',
        oneLiner: '붉은 커다란 집게발을 바이올린 켜듯 흔드는 갯벌 연주자',
        description: '수컷은 몸체보다 큰 붉은색 집게발을 하나 가지고 있으며, 영토를 지키거나 암컷에게 잘 보이려고 집게발을 위아래로 힘차게 흔들어요.',
        funFact: '큰 집게발은 너무 무거워서 먹이를 먹을 땐 작고 가벼운 반대쪽 집게발만 사용해요.'
      },
      {
        id: 'mud-clam',
        name: '가무락조개 (모시조개)',
        category: '연체동물',
        emoji: '🐚',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Cyclina_sinensis_-_Osaka_Museum_of_Natural_History_-_DSC07789.JPG/960px-Cyclina_sinensis_-_Osaka_Museum_of_Natural_History_-_DSC07789.JPG',
        imageAlt: '검은 빛깔 껍데기의 가무락조개 실제 사진',
        oneLiner: '검고 윤기 나는 껍데기를 가진 깊은 펄의 숨은 고수',
        description: '검은 빛깔 때문에 가무락이라 불리며, 미네랄이 풍부한 신안 갯벌 깊은 곳에서 깨끗하게 자라요.',
        funFact: '조개껍데기의 나이테를 세어보면 몇 살인지 알 수 있어요.'
      },
      {
        id: 'halophyte',
        name: '함초 (퉁퉁마디)',
        category: '식물',
        emoji: '🌱',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Salicornia_europaea_close-up.jpg/960px-Salicornia_europaea_close-up.jpg',
        imageAlt: '퉁퉁한 다육질 마디 줄기가 선명하게 드러난 퉁퉁마디(함초) 실제 클로즈업 사진',
        oneLiner: '바닷물의 짠맛을 머금고 자라는 신기한 갯벌 소금풀',
        description: '잎이 퉁퉁한 마디 모양으로 생겨 퉁퉁마디라고도 하며, 바닷물 속의 소금과 미네랄을 흡수해 짭조름한 맛이 나요.',
        funFact: '갯벌의 염분을 조절하고 건강한 미네랄이 많아 건강식과 소금 대용으로 인기가 높아요.'
      }
    ],
    story: {
      title: '갯벌 숨구멍을 찾아라! 전통 갯벌 낙지잡이의 비밀',
      subtitle: '발이 푹 빠지는 갯벌 밑에 숨은 낙지를 어민들은 어떻게 찾아낼까요?',
      content: [
        '신안의 넓은 갯벌에 썰물이 되면 어민들은 긴 장화와 "가래(낙지용 삽)"를 들고 갯벌로 걸어 나가요.',
        '펄 표면을 자세히 보면 연필심만 한 작은 구멍이 뽕 뚫려 있는데, 이를 "부럿(낙지 숨구멍)"이라고 불러요. 낙지가 펄 속에 숨어 바깥공기를 쐬려고 뚫어놓은 구멍이지요.',
        '구멍의 방향을 읽고 가래로 펄을 재빠르게 세 번 정도 파내면 깊은 진흙 속에 웅크리고 있던 싱싱한 세발낙지가 쏙 모습을 드러낸답니다!'
      ],
      moralOrTip: '갯벌을 손상시키지 않고 전통 도구로 생명을 존중하며 수확하는 생태 어업의 지혜예요.'
    },
    observationKeyPoints: [
      '위치: 전라남도 신안군 (1004개 섬들 사이의 다도해 서남해안)',
      '유네스코 세계자연유산 (한국 갯벌 중 가장 넓은 면적, 15% 이상 차지)',
      '특징: 수많은 섬들이 파도를 막아 미네랄이 풍부한 퇴적층 형성',
      '대표 생산물 & 생물: 신안 천일염, 세발낙지(발이 가늘어서 세발낙지), 농게, 함초',
      '실험관찰 기록 팁: 햇빛과 바람으로 만든 천일염 생산과 숨구멍을 찾아 채취하는 전통 낙지잡이가 유명함.'
    ],
    recommendedActivities: ['태평염전 소금박물관 탐방', '갯벌 낙지잡이 체험 관찰', '염생식물원 관찰 데크 탐방']
  },
  {
    id: 'jindo',
    name: '진도 갯벌',
    badge: '신비의 바닷길 & 거센 물살이 키운 청정 바다',
    region: '전라남도 진도군',
    locationDescription: '전라남도 서남쪽 끝 진도군 고군면 회동리와 의신면 모도 사이, 그리고 조도 군도 주변에 펼쳐진 물 맑고 거센 조류의 갯벌이에요.',
    coordinates: { x: 74, y: 486 },
    areaSummary: '약 35 km²',
    type: '혼합갯벌',
    unescoStatus: false,
    designation: '진도 신비의 바닷길 (명승 제9호)',
    features: [
      '명량대첩의 울돌목으로 유명한 진도는 물살이 아주 빠르고 거세어 바닥의 퇴적물이 썩지 않고 늘 맑고 신선한 산소가 공급돼요.',
      '매년 봄이 되면 조수간만의 차로 바다가 갈라져 약 2.8km의 모래펄 바닷길이 드러나는 "현대판 모세의 기적"이 일어나요.',
      '돌미역, 톳 등 청정 해조류와 속살이 꽉 찬 꽃게, 전복, 바지락 등 고급 수산물이 풍부하게 서식해요.'
    ],
    keyCreatures: [
      {
        id: 'blue-crab',
        name: '꽃게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Portunus_trituberculatus.jpg/960px-Portunus_trituberculatus.jpg',
        imageAlt: '헤엄치는 노 모양 다리를 가진 꽃게 실제 사진',
        oneLiner: '거센 파도를 헤엄치는 노 모양의 뒷다리를 가진 갯벌의 장군',
        description: '다섯 번째 다리가 노처럼 넓적하게 생겨 물속을 시원스럽게 헤엄치며, 모래펄 속에 눈만 내놓고 숨어 사냥해요.',
        funFact: '진도 앞바다의 거센 조류를 이겨내고 자라 살이 단단하고 달콤하기로 전국에서 으뜸이에요.'
      },
      {
        id: 'mud-shrimp',
        name: '쏙 (쏙붙이)',
        category: '갑각류',
        emoji: '🦐',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Upogebia_major.jpg/960px-Upogebia_major.jpg',
        imageAlt: '갯벌 굴 속에 사는 가재를 닮은 쏙 실제 사진',
        oneLiner: '가재처럼 생겨서 붓을 넣으면 쏙 올라오는 장난꾸러기',
        description: '갯벌 깊숙이 Y자 모양의 긴 굴을 파고 살며, 앞다리에 털이 빽빽하게 나 있어 물속 플랑크톤을 모아 먹어요.',
        funFact: '구멍에 붓이나 털을 살살 넣으면 침입자인 줄 알고 밀어내려고 위로 쏙 올라와 잡힌다고 해서 "쏙"이에요.'
      },
      {
        id: 'sea-tangle',
        name: '진도 돌미역과 톳',
        category: '식물',
        emoji: '🌿',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/CSIRO_ScienceImage_952_Undaria_pinnatifida_Japanese_kelp.jpg/960px-CSIRO_ScienceImage_952_Undaria_pinnatifida_Japanese_kelp.jpg',
        imageAlt: '진도 청정 바다 조간대에서 자란 자연산 미역과 해조류 실제 사진',
        oneLiner: '거센 조류와 바위가 키워낸 바다의 보약 해조류',
        description: '갯벌 가장자리 바위와 조간대에 단단히 뿌리를 내리고 자라 잎이 두껍고 쫄깃하며 미네랄이 풍부해요.',
        funFact: '조선 시대 임금님 수라상에 진상되던 귀한 해조류였어요.'
      },
      {
        id: 'clam-species',
        name: '맛조개',
        category: '연체동물',
        emoji: '🐚',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Solen_strictus.jpg/960px-Solen_strictus.jpg',
        imageAlt: '갯벌 모래밭에 깊이 숨어 사는 맛조개(참맛) 실제 생태 사진',
        oneLiner: '대나무처럼 길쭉한 껍데기를 가진 갯벌의 숨바꼭질 대장',
        description: '구멍에 소금을 솔솔 뿌리면 바닷물이 들어온 줄 알고 위로 쏙 솟아오르는 재미있는 습성이 있어요.',
        funFact: '발 힘이 엄청나게 세서 위험을 느끼면 몇 초 만에 1미터 깊이로 파고 들어갈 수 있어요.'
      }
    ],
    story: {
      title: '호랑이를 피해 열린 바닷길! 뽕할머니 전설의 비밀',
      subtitle: '진도 앞바다 2.8km 바닷길이 쩍 갈라지는 신비로운 이유는 무엇일까요?',
      content: [
        '옛날 옛적 진도 회동 마을에 호랑이가 자주 나타나 마을 사람들은 모두 바다 건너 "모도"라는 섬으로 피난을 갔어요. 그런데 깜빡 잊고 뽕할머니 한 분만 남겨졌지요.',
        '할머니는 매일 용왕님께 "가족들을 한 번만 만나게 해달라"고 간절히 기도했어요. 그러던 어느 날 꿈에 용왕님이 나타나 "내일 바다에 무지개 길을 놓아줄 테니 건너가라"고 하셨어요.',
        '다음 날 정말로 바닷물이 양쪽으로 쫙 갈라지며 바닥의 모래펄 길이 활짝 열렸답니다! 과학적으로는 달과 태양의 인력이 합쳐져 조수간만의 차가 가장 커지는 날 드러나는 경이로운 자연 현상이에요.'
      ],
      moralOrTip: '자연의 신비로운 조석 현상이 아름다운 전설과 만나 우리 문화유산이 되었어요.'
    },
    observationKeyPoints: [
      '위치: 전라남도 진도군 고군면 회동리 (남서쪽 끝 섬 지역)',
      '명승 지정: 진도 신비의 바닷길 (명승 제9호)',
      '특징: 빠른 물살과 맑은 해수로 깨끗하게 유지되는 청정 혼합갯벌',
      '대표 생물: 꽃게, 쏙, 맛조개, 청정 돌미역, 톳',
      '실험관찰 기록 팁: 달과 태양의 인력으로 인한 조수간만의 차로 바다 밑 모래펄이 2.8km 드러나는 현상.'
    ],
    recommendedActivities: ['신비의 바닷길 걷기 축제 탐방', '맛조개 구멍에 소금 뿌려 관찰하기', '진도 타워에서 울돌목 물살 관찰']
  },
  {
    id: 'boseong-suncheon',
    name: '보성·순천 갯벌',
    badge: '유네스코 세계자연유산 & 흑두루미와 뻘배의 고향',
    region: '전라남도 보성군 & 순천시',
    locationDescription: '전남 보성군 벌교읍과 순천시 순천만에 걸쳐 여자만 북쪽에 위치하며, 찰진 펄과 거대한 갈대밭이 어우러진 남해안 대표 갯벌이에요.',
    coordinates: { x: 184, y: 446 },
    areaSummary: '순천만 약 28 km², 보성 벌교 갯벌 약 10.3 km²',
    type: '펄갯벌',
    unescoStatus: true,
    unescoYear: 2021,
    designation: '유네스코 세계자연유산 & 람사르 습지',
    features: [
      '깊고 차진 미세한 진흙 입자로 이루어져 발이 푹 빠지는 우리나라 최고의 순수 펄갯벌이에요.',
      '순천만의 황금빛 갈대 군락과 가을이면 갯벌을 붉게 물들이는 칠면초 군락이 환상적인 풍경을 자아내요.',
      '천연기념물 제228호 "흑두루미" 수천 마리가 겨울을 나기 위해 찾아오고, 갯벌 널(뻘배)을 타는 전통 어업이 보존되어 있어요.'
    ],
    keyCreatures: [
      {
        id: 'mudskipper',
        name: '짱뚱어',
        category: '어류',
        emoji: '🐟',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Boleophthalmus_pectinirostris_in_Hong_Kong_Wetlands.jpg/960px-Boleophthalmus_pectinirostris_in_Hong_Kong_Wetlands.jpg',
        imageAlt: '갯벌 펄 위를 뛰어다니는 짱뚱어 실제 사진',
        oneLiner: '눈알을 굴리며 펄 위를 펄쩍펄쩍 뛰어다니는 갯벌의 귀염둥이',
        description: '물속보다 갯벌 밖에서 일광욕을 즐기는 물고기로, 가슴지느러미로 펄을 짚고 꼬리로 튕기며 점프해요.',
        funFact: '아가미뿐만 아니라 피부로도 숨을 쉴 수 있어 물 밖에 몇 시간씩 나와 있어도 끄떡없어요!'
      },
      {
        id: 'hooded-crane',
        name: '흑두루미',
        category: '조류',
        emoji: '🪿',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Grus_monacha_Phila_Zoo.jpg/960px-Grus_monacha_Phila_Zoo.jpg',
        imageAlt: '순천만 갯벌을 찾아온 천연기념물 흑두루미 실제 사진',
        oneLiner: '겨울 순천만을 찾아오는 잿빛 깃털의 평화의 사절단',
        description: '몸은 짙은 회색이고 목과 머리는 순백색인 천연기념물 철새로, 순천만 갯벌에서 게와 벼 이삭을 먹으며 겨울을 보내요.',
        funFact: '한번 짝을 맺으면 평생 함께하는 금슬 좋은 새로 유명해요.'
      },
      {
        id: 'cockle',
        name: '벌교 꼬막 (참꼬막)',
        category: '연체동물',
        emoji: '🐚',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Tegillarca_granosa_%28MNHN-IM-2012-24836%29_001.jpeg/960px-Tegillarca_granosa_%28MNHN-IM-2012-24836%29_001.jpeg',
        imageAlt: '방사상 골이 뚜렷한 벌교 참꼬막 실제 사진',
        oneLiner: '차지고 영양 많은 보성 갯벌이 빚어낸 붉은 피 조개',
        description: '껍데기에 굵고 깊은 방사상 골(주름)이 17~18개 나 있으며 헤모글로빈이 풍부해 붉은 피를 가져 영양이 듬뿍 들어있어요.',
        funFact: '사람이 직접 뻘배를 타고 펄 속을 깊숙이 뒤져 손으로 하나하나 채취해야 하는 귀한 조개예요.'
      },
      {
        id: 'reed-plant',
        name: '갈대와 칠면초',
        category: '식물',
        emoji: '🌾',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Phragmites_australis_Vikmanshyttesj%C3%B6n.jpg/960px-Phragmites_australis_Vikmanshyttesj%C3%B6n.jpg',
        imageAlt: '순천만 갯벌의 드넓은 황금빛 갈대 군락 실제 사진',
        oneLiner: '갯벌 바람을 막아주고 오염물질을 흡수하는 생명의 풀',
        description: '바닷물이 드나드는 갯벌 상부에 숲을 이루며 칠면초는 계절에 따라 초록색에서 진한 자주색·붉은색으로 변해요.',
        funFact: '갈대숲은 수많은 물고기와 게의 보육원(유치원) 역할을 하며 물을 맑게 걸러줘요.'
      }
    ],
    story: {
      title: '뻘 위를 스키 타듯 쌩쌩! 전통 뻘배와 짱뚱어의 달리기 시합',
      subtitle: '발이 푹푹 빠지는 펄갯벌에서 어민들은 어떻게 다녔을까요?',
      content: [
        '보성과 순천의 펄갯벌은 너무나 곱고 차져서 장화를 신고 들어가면 허벅지까지 푹 빠져 한 발짝도 움직이기 힘들어요.',
        '그래서 우리 조상님들은 "뻘배(널)"라는 특별한 나무 널판을 발명했어요! 한쪽 무릎을 널 위에 올리고 다른 발로 펄을 쓱 밀면 얼음판에서 썰매를 타듯 시원하게 나아간답니다.',
        '이 "보성 뻘배 어업"은 세계적으로 유일한 독창성을 인정받아 국가중요어업유산 제2호로 지정되었어요. 옆에서 짱뚱어가 폴짝거리며 따라오는 모습은 보성·순천 갯벌만의 특별한 풍경이에요!'
      ],
      moralOrTip: '자연을 훼손하지 않고 갯벌과 조화롭게 살아온 우리 어민들의 지혜가 깃들어 있어요.'
    },
    observationKeyPoints: [
      '위치: 전라남도 보성군 벌교읍 & 순천시 순천만 (남해안 여자만 북쪽)',
      '유네스코 세계자연유산 및 람사르 습지',
      '특징: 곱고 차진 순수 펄갯벌, 대규모 갈대 군락과 붉은 칠면초 군락',
      '대표 생물: 짱뚱어(피부 호흡 물고기), 벌교 참꼬막, 흑두루미, 농게',
      '실험관찰 기록 팁: 푹 빠지는 펄갯벌을 달리는 전통 뻘배(널) 어업이 국가중요어업유산으로 지정됨.'
    ],
    recommendedActivities: ['순천만 갈대밭 생태체험선 타기', '보성 꼬막 박물관 및 뻘배 체험', '용산전망대에서 갯벌 S자 수로 감상']
  },
  {
    id: 'bongam',
    name: '봉암 갯벌',
    badge: '도심 속 생명의 기적 & 붉은발말똥게의 부활',
    region: '경상남도 창원시',
    locationDescription: '경남 창원시 마산회원구 봉암동 마산만 안쪽에 위치하며, 공장과 아파트가 즐비한 대도시 한복판에 자리 잡은 독특한 생태 갯벌이에요.',
    coordinates: { x: 300, y: 408 },
    areaSummary: '약 0.1 km² (규모는 작지만 생태적 가치는 거대한 기적의 갯벌)',
    type: '혼합갯벌',
    unescoStatus: false,
    designation: '연안습지보호지역 (2011년)',
    features: [
      '우리나라에서 유일무이하게 대도시 공단과 주택가 바로 곁에 숨 쉬고 있는 "도심 속 습지보호지역"이에요.',
      '1970~1980년대 공장 오폐수와 쓰레기로 완전히 오염되어 "죽음의 바다"로 불렸던 마산만에 위치했어요.',
      '하지만 창원 시민들과 어린이, 환경단체들이 20년 넘게 갯벌 살리기 운동을 펼쳐 멸종위기 생물들이 다시 돌아온 세계적 복원 성공 사례예요!'
    ],
    keyCreatures: [
      {
        id: 'red-clawed-crab',
        name: '붉은발말똥게',
        category: '갑각류',
        emoji: '🦀',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Sesarmops_intermedius_-_National_Museum_of_Nature_and_Science%2C_Tokyo_-_DSC07541.JPG/960px-Sesarmops_intermedius_-_National_Museum_of_Nature_and_Science%2C_Tokyo_-_DSC07541.JPG',
        imageAlt: '봉암 갯벌로 기적처럼 돌아온 멸종위기종 붉은발말똥게 실제 표본/생태 사진',
        oneLiner: '말똥 냄새 풀 냄새를 풍기며 돌아온 멸종위기 귀한 게',
        description: '멸종위기 야생생물 2급으로, 집게발이 붉은색을 띠며 갈대숲과 돌 틈 사이에 굴을 파고 식물 잎을 뜯어 먹어요.',
        funFact: '위협을 느끼면 말똥(말의 배설물)과 비슷한 독특한 풀 냄새를 뿜어 "말똥게"라는 재미있는 이름이 붙었어요.'
      },
      {
        id: 'river-snail',
        name: '기수갈고둥',
        category: '연체동물',
        emoji: '🐌',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Clithon_retropictus%28Hamamatsu%2CShizuoka%2CJapan%2C2007%29.jpg/960px-Clithon_retropictus%28Hamamatsu%2CShizuoka%2CJapan%2C2007%29.jpg',
        imageAlt: '맑은 갯벌 돌 표면에 서식하는 멸종위기종 기수갈고둥 실제 생태 사진',
        oneLiner: '민물과 바닷물이 만나는 맑은 자갈밭에 사는 보호종 고둥',
        description: '멸종위기 야생생물 2급으로, 껍데기가 매끄럽고 납작한 갈고리 모양이며 깨끗한 갯벌 돌 표면의 이끼를 갉아먹어요.',
        funFact: '물이 조금만 더러워져도 살지 못해 봉암 갯벌이 얼마나 깨끗해졌는지 알려주는 환경 지표 생물이에요.'
      },
      {
        id: 'little-tern',
        name: '쇠제비갈매기',
        category: '조류',
        emoji: '🕊️',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Little_tern%28Sternula_albifrons%29.jpg/960px-Little_tern%28Sternula_albifrons%29.jpg',
        imageAlt: '노란 부리에 검은 끝, 은빛 깃털의 쇠제비갈매기 실제 자연 생태 사진',
        oneLiner: '도심 속 자갈밭에서 새끼를 키우는 꼬마 갈매기',
        description: '몸길이가 약 20cm 정도로 갈매기 중 가장 작고 귀여우며, 여름철 봉암 갯벌 모래톱에서 알을 낳아요.',
        funFact: '수컷이 갯벌에서 작은 물고기를 잡아 암컷에게 선물하며 사랑을 고백해요.'
      },
      {
        id: 'plover',
        name: '흰물떼새 & 도요새',
        category: '조류',
        emoji: '🦆',
        imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Charadrius_alexandrinus_-_Laem_Pak_Bia.jpg/960px-Charadrius_alexandrinus_-_Laem_Pak_Bia.jpg',
        imageAlt: '갯벌 모래밭을 종종걸음으로 누비는 흰물떼새 실제 사진',
        oneLiner: '도시 빌딩 숲을 배경으로 휴식을 취하는 귀여운 물새들',
        description: '도심 속 작은 갯벌이지만 매년 40종이 넘는 철새들이 찾아와 먹이를 먹고 에너지를 재충전해요.',
        funFact: '도로 위의 자동차 소리 속에서도 갯벌의 게를 쏙쏙 골라 먹는 적응력을 보여줘요.'
      }
    ],
    story: {
      title: '죽었던 바다를 살려낸 마산의 어린이들과 붉은발말똥게',
      subtitle: '검은 기름과 쓰레기로 뒤덮였던 갯벌이 어떻게 다시 푸른 생명의 보금자리가 되었을까요?',
      content: [
        '예전 마산만은 공장에서 나온 기름과 폐수로 물고기 한 마리 살지 못해 사람들도 외면하던 곳이었어요.',
        '하지만 "우리 고향의 바다를 되살리자!"며 초등학생들과 시민들이 장갑을 끼고 갯벌 쓰레기를 줍고, 하천으로 오염물질이 들어가지 못하게 감시했어요.',
        '모두의 땀방울이 모인 지 10여 년 만에 기적처럼 멸종되었던 붉은발말똥게와 기수갈고둥이 다시 봉암 갯벌로 돌아왔답니다. 이제는 전 세계 환경학자들이 감탄하는 "생태계 회복의 기적"이 되었어요!'
      ],
      moralOrTip: '우리가 갯벌을 아끼고 노력하면 아무리 망가진 자연이라도 다시 살아날 수 있다는 희망을 보여줘요.'
    },
    observationKeyPoints: [
      '위치: 경상남도 창원시 마산회원구 봉암동 (남해안 마산만 안쪽)',
      '지정: 연안습지보호지역 (전국 유일의 "도심 속 갯벌")',
      '생태 복원: 오염된 공단 바다를 시민과 학생들의 청소로 되살린 기적의 현장',
      '대표 생물: 멸종위기 야생생물 2급 붉은발말똥게, 기수갈고둥, 쇠제비갈매기',
      '실험관찰 기록 팁: 도심 속에서도 자연을 아끼고 정화하면 생물들이 다시 돌아온다는 환경 복원의 교훈.'
    ],
    recommendedActivities: ['봉암갯벌 생태학습장 관찰 데크 걷기', '돌 틈 사이에 숨은 붉은발말똥게 찾아보기', '도시 하천 정화 포스터 그리기']
  }
];

export const GENERAL_MUDFLAT_INFO = {
  definition: '밀물(바닷물이 들어올 때)에는 바닷물에 잠기고, 썰물(바닷물이 빠져나갈 때)에는 바닥이 드러나는 바다와 육지 사이의 넓고 평평한 땅이에요. 한자로는 "간석지(干석地)"라고도 불러요.',
  formation: '강과 하천이 육지에서 흙과 모래를 실어 바다로 나르고, 바다의 조류와 파도가 이를 바닷가에 잔잔하게 쌓아 올리는 과정이 수천 년 동안 반복되면서 만들어져요.',
  types: [
    {
      title: '펄갯벌 (진흙갯벌)',
      badge: '발이 푹푹 빠지는 고운 진흙',
      color: 'amber',
      description: '파도가 잔잔하고 조류가 느린 서해안 깊숙한 만이나 남해안에 주로 생겨요. 고운 점토 입자로 이루어져 영양분이 풍부해요.',
      creatures: '칠게, 갯지렁이, 짱뚱어, 꼬막, 낙지',
      representative: '강화도 남부, 순천만, 벌교'
    },
    {
      title: '모래갯벌',
      badge: '단단하고 걷기 쉬운 모래',
      color: 'yellow',
      description: '파도가 비교적 세서 가벼운 진흙은 씻겨 나가고 무거운 모래가 쌓여 만들어져요. 발이 잘 빠지지 않아 걷기 편해요.',
      creatures: '엽낭게, 달랑게, 명주조개, 맛조개',
      representative: '서해 외해 섬, 동해안 일부, 춘장대'
    },
    {
      title: '혼합갯벌',
      badge: '모래와 진흙, 자갈의 조화',
      color: 'emerald',
      description: '모래와 진흙이 알맞게 섞여 있어요. 다양한 서식 환경이 공존하기 때문에 생물 종 다양성이 가장 풍부한 곳이에요.',
      creatures: '바지락, 농게, 동죽, 낙지, 고둥',
      representative: '서천 갯벌, 고창 갯벌, 진도 갯벌, 봉암 갯벌'
    }
  ],
  worldHeritage: {
    title: '유네스코 세계자연유산 등재 (Getbol, Korean Tidal Flats)',
    date: '2021년 7월',
    significance: '우리나라 서해안과 남해안 갯벌은 독일·네덜란드의 와덴해 갯벌 등과 함께 "세계 5대 갯벌"로 꼽혀요. 2021년 유네스코는 지구 생물 다양성을 보존하기 위해 세계에서 가장 중요한 갯벌로서 서천, 고창, 신안, 보성·순천 갯벌을 세계자연유산으로 등재했어요.'
  },
  fourSuperpowers: [
    {
      icon: '🏠',
      title: '생태계의 보물창고',
      desc: '1,000종이 넘는 해양 생물과 200종 이상의 철새들이 살아가는 지구상에서 가장 생명력이 넘치는 보금자리예요.'
    },
    {
      icon: '🚰',
      title: '지구의 자연 정화조',
      desc: '육지에서 흘러나오는 오염물질을 미생물과 조개, 갯지렁이가 깨끗하게 걸러주어 바다를 맑게 유지해 줘요.'
    },
    {
      icon: '🛡️',
      title: '자연의 방패 (재해 방지)',
      desc: '태풍이나 큰 파도, 해일이 밀려올 때 거센 에너지를 넓은 갯벌이 스펀지처럼 흡수하여 육지 마을을 지켜줘요.'
    },
    {
      icon: '🌍',
      title: '블루카본 (기후변화 해결사)',
      desc: '육지의 숲보다 최대 50배 빠르게 이산화탄소를 흡수하여 갯벌 진흙 깊숙이 수천 년 동안 저장해요.'
    }
  ]
};

export const MUDFLAT_USES = [
  {
    category: '풍성한 수산물 생산 (어업)',
    icon: '🐟',
    desc: '바지락, 꼬막, 굴, 낙지, 꽃게, 김, 파래 등 우리 식탁을 건강하고 풍성하게 채워주는 싱싱한 해산물을 제공해요.',
    detail: '갯벌에서 생산되는 어패류는 미네랄이 풍부하고 영양이 듬뿍 담겨 있어요. 어민들의 소중한 삶의 터전이기도 해요.',
    examples: ['벌교 꼬막', '고창 바지락', '신안 세발낙지', '지주식 김 양식']
  },
  {
    category: '생태 체험과 관광 학습',
    icon: '🎒',
    desc: '학생들과 가족들이 직접 장화를 신고 조개를 캐고, 짱뚱어와 게를 관찰하며 자연의 신비를 배우는 살아있는 교실이에요.',
    detail: '뻘배 타기, 조개잡이 체험, 철새 탐조 등 자연을 해치지 않고 즐기는 생태 관광지로 각광받고 있어요.',
    examples: ['갯벌 조개잡이 축제', '순천만 갈대 축제', '철새 탐조 교실', '갯벌 생태 박물관']
  },
  {
    category: '천일염 (하얀 보석 소금) 생산',
    icon: '🧂',
    desc: '깨끗한 갯벌 바닷물을 끌어들여 햇볕과 바람만으로 증발시켜 만드는 건강한 자연 소금(천일염)을 생산해요.',
    detail: '우리나라 서해안 갯벌 염전에서 생산되는 천일염은 마그네슘, 칼륨, 칼슘 등 미네랄 함량이 전 세계에서 가장 높기로 유명해요.',
    examples: ['신안 태평염전', '전통 토판염', '소금 박물관 체험']
  },
  {
    category: '기후위기를 막는 블루카본 (Blue Carbon)',
    icon: '🌱',
    desc: '갯벌 진흙과 염생식물(갈대, 칠면초 등)이 온실가스인 이산화탄소를 흡수해 지구 온난화를 막아줘요.',
    detail: '우리나라 갯벌은 자동차 약 11만 대가 1년 동안 내뿜는 탄소를 매년 흡수하고 있어요. 지구 온난화를 막는 최고의 기후 수호자예요!',
    examples: ['연간 약 26만 톤의 탄소 흡수', '염생식물 복원 사업', '국제 블루카본 인증']
  },
  {
    category: '갯벌 보전과 복원 (역간척 사업)',
    icon: '🤝',
    desc: '과거에 땅을 넓히려고 막았던 둑을 허물어 다시 바닷물이 드나들게 하는 "역간척"과 갯벌 보호 운동이 활발해요.',
    detail: '한때 개발 대상이었던 갯벌을 다시 본래의 생태계로 되돌려 생물들이 돌아오게 만드는 노력이 전 세계적인 모범이 되고 있어요.',
    examples: ['연안습지보호지역 확대', '마산만 봉암갯벌 생태 복원', '갯벌 쓰레기 줍기 정화 활동']
  }
];
