const products = [
  // Casual Shoes
  {
    id: "casual_1",
    name: "雲朵舒適透氣小白鞋",
    englishName: "Aura Cloud Classic White Sneakers",
    category: "casual",
    categoryName: "休閒鞋子",
    price: 1980,
    originalPrice: 2880,
    image: "assets/images/casual_1.png",
    description: "經典百搭的極簡小白鞋，選用頂級超纖皮革與防撥水塗層，搭配獨家研發的雲朵減壓鞋墊。不管是日常通勤、假日約會還是輕旅行，都能提供無與倫比的舒適支撐力，是時尚與實用兼具的命定鞋款。",
    features: [
      "頂級超纖皮革，防撥水防髒易清潔",
      "三點支撐雲朵減壓鞋墊，久站久走不累腳",
      "高彈耐磨防滑橡膠大底，行走更安穩",
      "親膚透氣網布內裡，乾爽不悶熱"
    ],
    sizes: [35, 36, 37, 38, 39, 40]
  },
  {
    id: "casual_2",
    name: "復古輕量厚底老爹鞋",
    englishName: "Retro Chunky Platform Sneakers",
    category: "casual",
    categoryName: "休閒鞋子",
    price: 2480,
    originalPrice: 3280,
    image: "assets/images/casual_2.png",
    description: "風靡時尚圈的復古厚底老爹鞋，融合粉嫩蜜桃色、奶油白與優雅米色拼接。5公分完美隱形增高設計，瞬間拉長腿部線條。極輕量化的中底材質，讓您在展現街頭潮流的同時，腳步依然輕盈無負擔。",
    features: [
      "5cm 隱形增高，修飾腿型、黃金比例",
      "異材質美學拼接，層次感豐富",
      "超輕量 EVA 減震中底，釋放足底壓力",
      "加寬楦頭設計，腳寬女孩的舒適救星"
    ],
    sizes: [36, 37, 38, 39, 40]
  },
  {
    id: "casual_3",
    name: "質感柔軟真皮懶人鞋",
    englishName: "Premium Soft Leather Loafers",
    category: "casual",
    categoryName: "休閒鞋子",
    price: 2280,
    originalPrice: 3080,
    image: "assets/images/casual_3.png",
    description: "嚴選極致柔軟的頭層牛皮打造，溫潤手感與極佳的延展性，完美包覆雙腳。後跟貼心防磨腳枕設計，一秒穿脫的便利懶人鞋設計，無論休閒率性或知性優雅，皆能隨心所欲切換。",
    features: [
      "100% 天然柔軟頭層牛皮，越穿越貼合腳型",
      "可折疊軟Q鞋身，攜帶收納極便利",
      "後跟高彈力防磨腳墊，新鞋即穿不磨腳",
      "透氣真皮鞋墊，吸汗防異味"
    ],
    sizes: [35, 36, 37, 38, 39]
  },
  {
    id: "casual_4",
    name: "極輕透氣網面運動鞋",
    englishName: "Ultralight Breathable Knit Sneakers",
    category: "casual",
    categoryName: "休閒鞋子",
    price: 1880,
    originalPrice: 2680,
    image: "assets/images/casual_4.png",
    description: "為都市活力女性設計的輕運動鞋，採用一體成型飛織網面，如襪子般貼合。時尚的薰衣草灰配色，為運動休閒風注入一絲溫柔。高彈力避震鞋底，給予雙足律動時的最佳保護力。",
    features: [
      "一體飛織 3D 透氣網孔，輕盈如風",
      "高彈性避震科技中底，吸震回彈效果佳",
      "貼合腳踝防滑編織領口，穩定包覆",
      "適合健走、輕度重訓與日常久站"
    ],
    sizes: [36, 37, 38, 39, 40]
  },

  // Formal Shoes
  {
    id: "formal_1",
    name: "經典漆皮尖頭細高跟鞋",
    englishName: "Classic Patent Leather Stilettos",
    category: "formal",
    categoryName: "正式鞋子",
    price: 2980,
    originalPrice: 3980,
    image: "assets/images/formal_1.png",
    description: "每個女人都該擁有的戰鞋。經典極致的尖頭比例，配上 7.5 公分優雅細跟，展現極致張力的足部線條。頂級漆皮散發深邃迷人的奢華光澤，無論職場高光時刻或正式晚宴，都是視覺的絕對焦點。",
    features: [
      "奢華鏡面漆皮，光澤飽滿且防水耐髒",
      "7.5cm 黃金氣場細跟，展現完美身段",
      "人體工學足弓支撐，緩解前掌壓力",
      "防滑靜音耐磨鞋底，走路靜音優雅"
    ],
    sizes: [35, 36, 37, 38, 39]
  },
  {
    id: "formal_2",
    name: "復古方頭麂皮粗跟鞋",
    englishName: "Vintage Suede Block Heel Pumps",
    category: "formal",
    categoryName: "正式鞋子",
    price: 2680,
    originalPrice: 3580,
    image: "assets/images/formal_2.png",
    description: "充滿文藝氣息的莫蘭迪綠麂皮粗跟鞋，法式方頭設計流露復古知性氣質。4.5 公分寬體粗跟給予絕佳穩定感，是怕痛女孩也能輕鬆駕馭的高跟鞋，輕鬆為日常辦公穿搭增添高級感。",
    features: [
      "親膚羊麂皮，質地細緻，散發溫潤霧面質感",
      "4.5cm 復古粗跟，穩固好走如履平地",
      "舒適法式方頭楦型，不擠壓腳趾",
      "超厚乳膠減壓鞋墊，全天候舒適感受"
    ],
    sizes: [35, 36, 37, 38, 39, 40]
  },
  {
    id: "formal_3",
    name: "英倫風漆皮綁帶牛津鞋",
    englishName: "Classic Patent Leather Oxford Shoes",
    category: "formal",
    categoryName: "正式鞋子",
    price: 2580,
    originalPrice: 3480,
    image: "assets/images/formal_3.png",
    description: "傳承英倫學院精神，鏡面漆皮牛津鞋以俐落綁帶與手工雕花縫線呈現。中性幹練不失時髦細節，帶有些許英倫紳士感，是混搭裙裝或率性西裝褲的完美搭配，為您的穿搭增添專業度與層次感。",
    features: [
      "極亮澤鏡面漆皮，防刮耐磨",
      "手工精緻縫線與英倫沿條設計",
      "微厚底 3cm 設計，隱形拉高身形",
      "內襯進口軟豚皮，吸濕透氣不咬腳"
    ],
    sizes: [36, 37, 38, 39]
  },
  {
    id: "formal_4",
    name: "法式珍珠緞面穆勒鞋",
    englishName: "Chic Pearl Satin Mules",
    category: "formal",
    categoryName: "正式鞋子",
    price: 2780,
    originalPrice: 3680,
    image: "assets/images/formal_4.png",
    description: "法式優雅的經典代表，採用高貴的絲光緞面鞋面，點綴手工縫製的天然光澤大小珍珠。半包頭的穆勒鞋型，出門一踩即走，慵懶中透露出不妥協的高級品味，辦公室或婚禮穿搭皆合適。",
    features: [
      "奢華絲光緞面，觸感絲滑細緻",
      "手工排綴珍珠飾帶，華麗不落俗套",
      "平底 1.5cm 設計，自在無拘束",
      "修長尖頭剪裁，視覺延伸腿部線條"
    ],
    sizes: [35, 36, 37, 38, 39, 40]
  },

  // Accessories
  {
    id: "access_1",
    name: "真皮百搭細腰帶",
    englishName: "Genuine Leather Slim Belt",
    category: "accessories",
    categoryName: "配件",
    price: 880,
    originalPrice: 1280,
    image: "assets/images/access_1.png",
    description: "嚴選義大利頂級植鞣牛皮製作，1.5cm 的極細設計能悄悄勾勒出腰部曲線。搭配精緻亮面金屬黃銅釦，低調耐看。不論是裝飾洋裝、針織衫還是高腰牛仔褲，都是不可或缺的點睛單品。",
    features: [
      "100% 義大利進口植鞣牛皮，手感溫潤且越用越有光澤",
      "1.5cm 精緻極細版型，優雅修飾腰身",
      "手工修邊烤漆，邊緣滑順不刮衣物",
      "多孔可調節設計，附帶皮帶環"
    ],
    sizes: ["One Size"]
  },
  {
    id: "access_2",
    name: "復古印花絲光緞面絲巾",
    englishName: "Vintage Floral Satin Silk Scarf",
    category: "accessories",
    categoryName: "配件",
    price: 680,
    originalPrice: 980,
    image: "assets/images/access_2.png",
    description: "以法式復古幾何與秋日花卉為靈感，選用親膚透氣的真絲質感面料。光澤內斂高雅，可靈活作為領巾、髮帶，或繫於包包提把上。一巾多用，瞬間提升日常穿搭的精緻感與層次。",
    features: [
      "真絲般柔滑緞面，觸感細緻親膚",
      "經典手繪感復古花紋，色彩飽和飽滿",
      "70cm * 70cm 經典黃金正方形尺寸，極易造型",
      "精細手工包邊防脫線"
    ],
    sizes: ["70x70cm"]
  },
  {
    id: "access_3",
    name: "簡約星芒金屬腳鍊",
    englishName: "Minimalist Ankle Bracelet",
    category: "accessories",
    categoryName: "配件",
    price: 580,
    originalPrice: 880,
    image: "assets/images/access_3.png",
    description: "專為足部美感設計的簡約腳鍊，採用 925 銀抗敏底材鍍 18K 真金。細緻的雙層鍊身點綴著閃耀的微鑲星芒與月亮吊墜，隨步伐輕輕搖曳，在涼鞋或穆勒鞋的映襯下，散發低調迷人的足尖魅力。",
    features: [
      "925純銀底材鍍18K真金，不易褪色過敏",
      "精緻雙層層次設計，視覺顯瘦腳踝",
      "5cm 延長鏈，可自由調整鬆緊度",
      "微鑲閃耀鋯石，折射迷人光芒"
    ],
    sizes: ["可調節款 (21cm + 5cm 延長鍊)"]
  },
  {
    id: "access_4",
    name: "鞋履尊榮護理保養禮盒",
    englishName: "Premium Shoe Care Gift Kit",
    category: "accessories",
    categoryName: "配件",
    price: 1280,
    originalPrice: 1880,
    image: "assets/images/access_4.png",
    description: "給愛鞋最頂級的呵護。禮盒內含天然蜂蠟皮革滋養膏、頂級實木馬毛刷以及高活性防撥水防污噴霧。適用於各式真皮、麂皮與小白鞋，讓您的愛鞋歷久彌新，隨時保持完美狀態。",
    features: [
      "頂級實木馬毛刷：刷毛柔軟不傷皮質，輕鬆除塵",
      "天然蜂蠟皮革保養乳：深層滋養、防裂、恢復光澤",
      "防水防污奈米噴霧：長效防水、防油汙附著",
      "附贈高質感純棉擦拭布與燙金收納木盒"
    ],
    sizes: ["禮盒裝"]
  },

  // Others
  {
    id: "other_1",
    name: "極致柔軟居家毛絨拖鞋",
    englishName: "Cozy Plush Faux Fur Slippers",
    category: "others",
    categoryName: "其它類",
    price: 980,
    originalPrice: 1580,
    image: "assets/images/other_1.png",
    description: "忙碌一天回到家，給雙腳最溫暖的擁抱。嚴選超柔軟仿兔毛絨面料，觸感極致療癒。鞋底加厚並採用防滑靜音橡膠，保暖的同時兼顧居家行走的安全性與輕便感。",
    features: [
      "極致蓬鬆仿兔毛絨，親膚保暖、不掉毛",
      "3cm 加厚記憶棉中底，給予棉花般踩屎感",
      "防滑靜音 TPR 鞋底，不傷木質地板且靜音",
      "低飽和馬卡龍配色，療癒美觀"
    ],
    sizes: ["S (35-36)", "M (37-38)", "L (39-40)"]
  },
  {
    id: "other_2",
    name: "英倫時尚防水雨靴",
    englishName: "Stylish Chelsea Waterproof Rain Boots",
    category: "others",
    categoryName: "其它類",
    price: 1680,
    originalPrice: 2480,
    image: "assets/images/other_2.png",
    description: "打破「雨鞋不時尚」的刻板印象！雀爾喜鞋型融合霧面橡膠材質，防滑耐磨。一體成型完全防水，兩側彈性織帶方便穿脫。不論陰雨綿綿或晴天出門，皆能維持俐落有型的時尚態度。",
    features: [
      "經典 Chelsea 雨靴造型，晴雨兩用極百搭",
      "天然霧面防滑橡膠，一體成型滴水不漏",
      "加厚排泥大底，防滑抓地力極佳",
      "舒適吸汗內裡，不黏腳不悶腳"
    ],
    sizes: [36, 37, 38, 39]
  },
  {
    id: "other_3",
    name: "波西米亞編織厚底涼鞋",
    englishName: "Boho Woven Platform Sandals",
    category: "others",
    categoryName: "其它類",
    price: 1580,
    originalPrice: 2280,
    image: "assets/images/other_3.png",
    description: "為夏日渡假而生的編織涼鞋。手工感草編沿條搭配柔軟麻繩織帶，展現愜意的波西米亞風情。輕量厚底設計，拉長比例的同時，足底軟墊依然提供極佳的行走舒適度，是海島旅行的穿搭首選。",
    features: [
      "精緻手工編織織帶，親膚不勒腳",
      "草編感輕量防滑中底，防潮好保養",
      "4cm 舒適厚底，好走不累",
      "後跟高彈彈性帶設計，貼合腳踝"
    ],
    sizes: [35, 36, 37, 38, 39]
  },
  {
    id: "other_4",
    name: "修身顯瘦彈力過膝長靴",
    englishName: "Chic Stretch Over-the-Knee Boots",
    category: "others",
    categoryName: "其它類",
    price: 3580,
    originalPrice: 4880,
    image: "assets/images/other_4.png",
    description: "冬季修飾美腿的神器。前半部嚴選柔軟小羊皮拼接後半部高彈力潛水布料，完美貼合腿部曲線，視覺上延長小腿線條且絕不掉筒。4 公分舒適中粗跟，兼顧走路穩定度與保暖需求。",
    features: [
      "前半段細緻小羊皮，後半段高彈力防掉筒布料",
      "極致修身版型，穿上立顯美腿修長",
      "4cm 粗跟，日常行走無負擔",
      "貼心半拉鍊設計，穿脫更加方便快速"
    ],
    sizes: [35, 36, 37, 38, 39, 40]
  }
];

// Helper functions for products
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}
