const PLACEHOLDER = "./assets/10.png";

const CATEGORY_ICONS = {
  health: {
    hospitals: { emoji: "🏥", color: "#e74c3c" },
    pharmacies: { emoji: "💊", color: "#27ae60" },
    centers: { emoji: "🏨", color: "#2980b9" },
    points: { emoji: "➕", color: "#8e44ad" },
  },
  education: {
    universities: { emoji: "🎓", color: "#2980b9" },
    schools: { emoji: "🏫", color: "#27ae60" },
    institutes: { emoji: "📚", color: "#e67e22" },
    kindergarten: { emoji: "🌸", color: "#e91e8c" },
  },
  services: {
    post: { emoji: "✉️", color: "#f39c12" },
    electric: { emoji: "⚡", color: "#f1c40f" },
    water: { emoji: "💧", color: "#3498db" },
    telecom: { emoji: "📡", color: "#1abc9c" },
  },
  security: {
    police: { emoji: "🚔", color: "#2c3e50" },
    civil: { emoji: "🚒", color: "#e74c3c" },
    checkpoints: { emoji: "🚧", color: "#e67e22" },
    stations: { emoji: "🔒", color: "#7f8c8d" },
  },
  tourism: {
    museums: { emoji: "🏛️", color: "#9b59b6" },
    hotels: { emoji: "🏨", color: "#f39c12" },
    heritage: { emoji: "🕌", color: "#c0392b" },
    markets: { emoji: "🛍️", color: "#16a085" },
  },
};

// const categoriesData = {
//   health: {
//     filters: [
//       { label: "المشافي", value: "hospitals" },
//       { label: "الصيدليات", value: "pharmacies" },
//       { label: "المراكز الصحية", value: "centers" },
//       { label: "النقاط الطبية", value: "points" },
//     ],
//     locationSets: {
//       hospitals: [
//         [
//           36.276583,
//           33.513789,
//           "ساحة الأمويين",
//           "./assets/10.png",
//           "المزة",
//           8,
//           20,
//         ],
//         [
//           36.298094,
//           33.512644,
//           "ساحة المرجة",
//           "./assets/marga.webp",
//           "المرجة",
//           0,
//           24,
//         ],
//         [
//           36.318542,
//           33.52403,
//           "ساحة العباسيين",
//           "./assets/abassien.jpeg",
//           "العباسيين",
//           8,
//           22,
//         ],
//         [
//           36.293707,
//           33.528663,
//           "ساحة الميسات",
//           "./assets/maisat.jpeg",
//           "كفرسوسة",
//           9,
//           18,
//         ],
//         [
//           36.296037,
//           33.520569,
//           "ساحة السبع بحرات",
//           "./assets/seven_bahrat.jpeg",
//           "المالكي",
//           8,
//           20,
//         ],
//       ],
//       pharmacies: [
//         [36.29, 33.51, "صيدلية النور", PLACEHOLDER, "المرجة", 8, 22],
//         [36.296, 33.518, "صيدلية الشفاء", PLACEHOLDER, "المزة", 9, 21],
//         [36.301, 33.523, "صيدلية الأمل", PLACEHOLDER, "العباسيين", 8, 20],
//         [36.283, 33.526, "صيدلية الرازي", PLACEHOLDER, "كفرسوسة", 10, 23],
//         [36.308, 33.514, "صيدلية ابن سينا", PLACEHOLDER, "برزة", 8, 20],
//       ],
//       centers: [
//         [36.288, 33.515, "مركز صحي المرجة", PLACEHOLDER, "المرجة", 8, 16],
//         [36.302, 33.527, "مركز صحي المزة", PLACEHOLDER, "المزة", 8, 16],
//         [36.274, 33.519, "مركز صحي القصاع", PLACEHOLDER, "القصاع", 8, 16],
//         [36.31, 33.506, "مركز صحي برزة", PLACEHOLDER, "برزة", 8, 16],
//         [36.292, 33.534, "مركز صحي كفرسوسة", PLACEHOLDER, "كفرسوسة", 8, 16],
//       ],
//       points: [
//         [36.281, 33.511, "نقطة طبية الميدان", PLACEHOLDER, "الميدان", 0, 24],
//         [36.299, 33.521, "نقطة طبية التضامن", PLACEHOLDER, "التضامن", 0, 24],
//         [36.305, 33.516, "نقطة طبية الزاهرة", PLACEHOLDER, "الزاهرة", 8, 20],
//         [
//           36.287,
//           33.529,
//           "نقطة طبية ركن الدين",
//           PLACEHOLDER,
//           "ركن الدين",
//           8,
//           20,
//         ],
//         [36.312, 33.523, "نقطة طبية دمر", PLACEHOLDER, "دمر", 9, 18],
//       ],
//     },
//   },
//   education: {
//     filters: [
//       { label: "الجامعات", value: "universities" },
//       { label: "المدارس", value: "schools" },
//       { label: "المعاهد", value: "institutes" },
//       { label: "رياض الأطفال", value: "kindergarten" },
//     ],
//     locationSets: {
//       universities: [
//         [36.29, 33.52, "جامعة دمشق", PLACEHOLDER, "المزة", 8, 20],
//         [36.305, 33.51, "كلية الهندسة", PLACEHOLDER, "المرجة", 8, 18],
//         [36.275, 33.53, "كلية الآداب", PLACEHOLDER, "كفرسوسة", 8, 18],
//         [36.31, 33.525, "كلية الطب", PLACEHOLDER, "المزة", 8, 20],
//         [36.285, 33.515, "كلية العلوم", PLACEHOLDER, "العباسيين", 8, 18],
//       ],
//       schools: [
//         [36.286, 33.512, "ثانوية المأمون", PLACEHOLDER, "المرجة", 7, 14],
//         [36.303, 33.528, "ثانوية الجلاء", PLACEHOLDER, "المزة", 7, 14],
//         [36.278, 33.52, "إعدادية الفارابي", PLACEHOLDER, "القصاع", 7, 14],
//         [36.309, 33.507, "ابتدائية النور", PLACEHOLDER, "برزة", 7, 13],
//         [36.293, 33.535, "ثانوية الشهيد", PLACEHOLDER, "كفرسوسة", 7, 14],
//       ],
//       institutes: [
//         [36.282, 33.513, "معهد التقانة", PLACEHOLDER, "المرجة", 8, 16],
//         [36.3, 33.522, "معهد الفنون التطبيقية", PLACEHOLDER, "المزة", 9, 17],
//         [36.276, 33.518, "معهد الإدارة", PLACEHOLDER, "القصاع", 8, 16],
//         [36.307, 33.514, "معهد التمريض", PLACEHOLDER, "برزة", 8, 16],
//         [36.29, 33.531, "معهد الموسيقى", PLACEHOLDER, "كفرسوسة", 10, 18],
//       ],
//       kindergarten: [
//         [36.284, 33.509, "روضة الزهور", PLACEHOLDER, "المرجة", 8, 14],
//         [36.301, 33.525, "روضة الأمل", PLACEHOLDER, "المزة", 8, 14],
//         [36.28, 33.521, "روضة المستقبل", PLACEHOLDER, "ركن الدين", 8, 14],
//         [36.306, 33.511, "روضة الفرح", PLACEHOLDER, "برزة", 8, 13],
//         [36.295, 33.532, "روضة النجوم", PLACEHOLDER, "كفرسوسة", 8, 14],
//       ],
//     },
//   },
//   services: {
//     filters: [
//       { label: "البريد", value: "post" },
//       { label: "الكهرباء", value: "electric" },
//       { label: "المياه", value: "water" },
//       { label: "الاتصالات", value: "telecom" },
//     ],
//     locationSets: {
//       post: [
//         [36.28, 33.51, "مكتب البريد المركزي", PLACEHOLDER, "المرجة", 8, 18],
//         [36.301, 33.519, "فرع بريد المزة", PLACEHOLDER, "المزة", 8, 16],
//         [36.277, 33.527, "فرع بريد القصاع", PLACEHOLDER, "القصاع", 8, 16],
//         [36.308, 33.505, "فرع بريد برزة", PLACEHOLDER, "برزة", 8, 16],
//         [36.294, 33.533, "فرع بريد الميدان", PLACEHOLDER, "الميدان", 8, 16],
//       ],
//       electric: [
//         [36.289, 33.516, "محطة كهرباء الزبلطاني", PLACEHOLDER, "القصاع", 0, 24],
//         [36.304, 33.526, "محطة كهرباء المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.273, 33.508, "محطة كهرباء القابون", PLACEHOLDER, "القابون", 0, 24],
//         [36.311, 33.52, "محطة كهرباء جرمانا", PLACEHOLDER, "جرمانا", 0, 24],
//         [36.287, 33.53, "مركز توزيع كهرباء", PLACEHOLDER, "كفرسوسة", 8, 20],
//       ],
//       water: [
//         [36.283, 33.514, "مديرية المياه", PLACEHOLDER, "المرجة", 8, 16],
//         [36.3, 33.524, "محطة ضخ المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.276, 33.517, "خزان مياه القاسيون", PLACEHOLDER, "القصاع", 0, 24],
//         [36.307, 33.508, "محطة معالجة برزة", PLACEHOLDER, "برزة", 0, 24],
//         [36.296, 33.536, "مركز صيانة الشبكة", PLACEHOLDER, "كفرسوسة", 8, 16],
//       ],
//       telecom: [
//         [
//           36.287,
//           33.511,
//           "مبادل الاتصالات المركزي",
//           PLACEHOLDER,
//           "المرجة",
//           8,
//           20,
//         ],
//         [36.303, 33.523, "مبادل المزة", PLACEHOLDER, "المزة", 8, 20],
//         [36.281, 33.52, "برج ترحيل القاسيون", PLACEHOLDER, "القصاع", 0, 24],
//         [36.31, 33.513, "مركز خدمة الزبائن", PLACEHOLDER, "برزة", 9, 17],
//         [36.294, 33.529, "مبادل المالكي", PLACEHOLDER, "المالكي", 8, 20],
//       ],
//     },
//   },
//   security: {
//     filters: [
//       { label: "مراكز الشرطة", value: "police" },
//       { label: "الدفاع المدني", value: "civil" },
//       { label: "النقاط الأمنية", value: "checkpoints" },
//       { label: "المخافر", value: "stations" },
//     ],
//     locationSets: {
//       police: [
//         [36.29, 33.515, "مركز شرطة المرجة", PLACEHOLDER, "المرجة", 0, 24],
//         [36.305, 33.525, "مركز شرطة المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.275, 33.505, "مركز شرطة الميدان", PLACEHOLDER, "الميدان", 0, 24],
//         [36.31, 33.53, "مركز شرطة برزة", PLACEHOLDER, "برزة", 0, 24],
//         [36.285, 33.52, "مركز شرطة القصاع", PLACEHOLDER, "القصاع", 0, 24],
//       ],
//       civil: [
//         [36.285, 33.513, "مركز الدفاع المدني", PLACEHOLDER, "المرجة", 0, 24],
//         [36.302, 33.522, "فرع دفاع مدني المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.278, 33.517, "فرع دفاع مدني دمر", PLACEHOLDER, "دمر", 0, 24],
//         [36.309, 33.506, "فرع دفاع مدني برزة", PLACEHOLDER, "برزة", 0, 24],
//         [36.292, 33.534, "مستودع معدات الطوارئ", PLACEHOLDER, "كفرسوسة", 8, 20],
//       ],
//       checkpoints: [
//         [36.281, 33.509, "نقطة تفتيش الميدان", PLACEHOLDER, "الميدان", 0, 24],
//         [
//           36.299,
//           33.521,
//           "نقطة تفتيش العباسيين",
//           PLACEHOLDER,
//           "العباسيين",
//           0,
//           24,
//         ],
//         [36.306, 33.516, "نقطة تفتيش المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.287, 33.528, "نقطة تفتيش القدم", PLACEHOLDER, "الميدان", 0, 24],
//         [36.312, 33.523, "نقطة تفتيش دمر", PLACEHOLDER, "دمر", 0, 24],
//       ],
//       stations: [
//         [36.284, 33.51, "مخفر باب توما", PLACEHOLDER, "القصاع", 0, 24],
//         [36.301, 33.525, "مخفر المزة", PLACEHOLDER, "المزة", 0, 24],
//         [36.28, 33.521, "مخفر ركن الدين", PLACEHOLDER, "ركن الدين", 0, 24],
//         [36.306, 33.511, "مخفر كفرسوسة", PLACEHOLDER, "كفرسوسة", 0, 24],
//         [36.295, 33.532, "مخفر جرمانا", PLACEHOLDER, "جرمانا", 0, 24],
//       ],
//     },
//   },
//   tourism: {
//     filters: [
//       { label: "المتاحف", value: "museums" },
//       { label: "الفنادق", value: "hotels" },
//       { label: "الآثار", value: "heritage" },
//       { label: "الأسواق", value: "markets" },
//     ],
//     locationSets: {
//       museums: [
//         [36.2965, 33.5105, "المتحف الوطني", PLACEHOLDER, "المرجة", 9, 18],
//         [36.301, 33.518, "متحف التقاليد الشعبية", PLACEHOLDER, "المزة", 9, 17],
//         [36.288, 33.523, "متحف الخط العربي", PLACEHOLDER, "القصاع", 10, 17],
//         [36.307, 33.509, "متحف الجيش", PLACEHOLDER, "المرجة", 9, 17],
//         [36.28, 33.515, "متحف دمشق الكبير", PLACEHOLDER, "المرجة", 9, 18],
//       ],
//       hotels: [
//         [
//           36.276583,
//           33.513789,
//           "فندق الأمويين",
//           "./assets/10.png",
//           "المرجة",
//           0,
//           24,
//         ],
//         [
//           36.298094,
//           33.512644,
//           "فندق المرجة",
//           "./assets/marga.webp",
//           "المرجة",
//           0,
//           24,
//         ],
//         [
//           36.318542,
//           33.52403,
//           "فندق العباسيين",
//           "./assets/abassien.jpeg",
//           "العباسيين",
//           0,
//           24,
//         ],
//         [
//           36.293707,
//           33.528663,
//           "فندق الميسات",
//           "./assets/maisat.jpeg",
//           "كفرسوسة",
//           0,
//           24,
//         ],
//         [
//           36.296037,
//           33.520569,
//           "فندق السبع بحرات",
//           "./assets/seven_bahrat.jpeg",
//           "المالكي",
//           0,
//           24,
//         ],
//       ],
//       heritage: [
//         [36.306, 33.51, "الجامع الأموي", PLACEHOLDER, "القصاع", 5, 22],
//         [36.302, 33.514, "قلعة دمشق", PLACEHOLDER, "القصاع", 9, 18],
//         [36.299, 33.506, "سوق الحميدية", PLACEHOLDER, "القصاع", 9, 22],
//         [36.147097, 33.420736, "المحل", PLACEHOLDER, "الميدان", 8, 20],
//         [36.294, 33.52, "مئذنة العروس", PLACEHOLDER, "القصاع", 0, 24],
//       ],
//       markets: [
//         [36.295, 33.508, "سوق الحميدية", PLACEHOLDER, "القصاع", 9, 22],
//         [36.303, 33.515, "سوق البزورية", PLACEHOLDER, "القصاع", 8, 20],
//         [36.286, 33.522, "سوق مدحت باشا", PLACEHOLDER, "الميدان", 8, 20],
//         [36.309, 33.504, "سوق الخجا", PLACEHOLDER, "برزة", 9, 19],
//         [36.292, 33.53, "سوق الصالحية", PLACEHOLDER, "المالكي", 10, 22],
//       ],
//     },
//   },
// };
const categoriesData = {
  health: {
    filters: [
      { label: "المشافي", value: "hospitals" },
      { label: "الصيدليات", value: "pharmacies" },
      { label: "المراكز الصحية", value: "centers" },
      { label: "النقاط الطبية", value: "points" },
    ],
    locationSets: {
      hospitals: [
        [
          36.276583,
          33.513789,
          "ساحة الأمويين",
          "./assets/10.png",
          "المزة",
          8,
          20,
          "منطقة مركزية تضم عدة مشافي وخدمات طبية متنوعة",
        ],
        [
          36.298094,
          33.512644,
          "ساحة المرجة",
          "./assets/marga.webp",
          "المرجة",
          0,
          24,
          "منطقة حيوية تحتوي على مرافق طبية قريبة ومتاحة على مدار الساعة",
        ],
        [
          36.318542,
          33.52403,
          "ساحة العباسيين",
          "./assets/abassien.jpeg",
          "العباسيين",
          8,
          22,
          "موقع مهم قريب من عدة مستشفيات ومراكز طبية",
        ],
        [
          36.293707,
          33.528663,
          "ساحة الميسات",
          "./assets/maisat.jpeg",
          "كفرسوسة",
          9,
          18,
          "منطقة هادئة تضم خدمات طبية أساسية للسكان",
        ],
        [
          36.296037,
          33.520569,
          "ساحة السبع بحرات",
          "./assets/seven_bahrat.jpeg",
          "المالكي",
          8,
          20,
          "منطقة مركزية قريبة من عيادات ومرافق صحية متنوعة",
        ],
      ],
      pharmacies: [
        [
          36.29,
          33.51,
          "صيدلية النور",
          PLACEHOLDER,
          "المرجة",
          8,
          22,
          "صيدلية توفر أدوية وخدمات صحية أساسية",
        ],
        [
          36.296,
          33.518,
          "صيدلية الشفاء",
          PLACEHOLDER,
          "المزة",
          9,
          21,
          "صيدلية معروفة بتوفر معظم الأدوية وخدمة جيدة",
        ],
        [
          36.301,
          33.523,
          "صيدلية الأمل",
          PLACEHOLDER,
          "العباسيين",
          8,
          20,
          "صيدلية تقدم أدوية متنوعة واستشارات بسيطة",
        ],
        [
          36.283,
          33.526,
          "صيدلية الرازي",
          PLACEHOLDER,
          "كفرسوسة",
          10,
          23,
          "صيدلية تعمل لساعات طويلة وتخدم المنطقة",
        ],
        [
          36.308,
          33.514,
          "صيدلية ابن سينا",
          PLACEHOLDER,
          "برزة",
          8,
          20,
          "صيدلية توفر أدوية ومستلزمات طبية متنوعة",
        ],
      ],
      centers: [
        [
          36.288,
          33.515,
          "مركز صحي المرجة",
          PLACEHOLDER,
          "المرجة",
          8,
          16,
          "مركز صحي يقدم خدمات طبية أساسية للمواطنين",
        ],
        [
          36.302,
          33.527,
          "مركز صحي المزة",
          PLACEHOLDER,
          "المزة",
          8,
          16,
          "مركز يقدم رعاية أولية وخدمات طبية متنوعة",
        ],
        [
          36.274,
          33.519,
          "مركز صحي القصاع",
          PLACEHOLDER,
          "القصاع",
          8,
          16,
          "مركز صحي يخدم سكان المنطقة بالخدمات الأساسية",
        ],
        [
          36.31,
          33.506,
          "مركز صحي برزة",
          PLACEHOLDER,
          "برزة",
          8,
          16,
          "مركز يقدم خدمات صحية أولية وفحوصات",
        ],
        [
          36.292,
          33.534,
          "مركز صحي كفرسوسة",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          16,
          "مركز طبي يوفر رعاية صحية يومية",
        ],
      ],
      points: [
        [
          36.281,
          33.511,
          "نقطة طبية الميدان",
          PLACEHOLDER,
          "الميدان",
          0,
          24,
          "نقطة طبية تعمل على مدار الساعة للحالات الطارئة",
        ],
        [
          36.299,
          33.521,
          "نقطة طبية التضامن",
          PLACEHOLDER,
          "التضامن",
          0,
          24,
          "مركز إسعافي يقدم خدمات طبية سريعة",
        ],
        [
          36.305,
          33.516,
          "نقطة طبية الزاهرة",
          PLACEHOLDER,
          "الزاهرة",
          8,
          20,
          "نقطة طبية تقدم إسعافات أولية وخدمات بسيطة",
        ],
        [
          36.287,
          33.529,
          "نقطة طبية ركن الدين",
          PLACEHOLDER,
          "ركن الدين",
          8,
          20,
          "نقطة طبية تخدم سكان المنطقة",
        ],
        [
          36.312,
          33.523,
          "نقطة طبية دمر",
          PLACEHOLDER,
          "دمر",
          9,
          18,
          "مركز طبي صغير يقدم خدمات أساسية",
        ],
      ],
    },
  },

  education: {
    filters: [
      { label: "الجامعات", value: "universities" },
      { label: "المدارس", value: "schools" },
      { label: "المعاهد", value: "institutes" },
      { label: "رياض الأطفال", value: "kindergarten" },
    ],
    locationSets: {
      universities: [
        [
          36.29,
          33.52,
          "جامعة دمشق",
          PLACEHOLDER,
          "المزة",
          8,
          20,
          "أكبر جامعة في سوريا وتضم العديد من الكليات",
        ],
        [
          36.305,
          33.51,
          "كلية الهندسة",
          PLACEHOLDER,
          "المرجة",
          8,
          18,
          "كلية متخصصة بالعلوم الهندسية المختلفة",
        ],
        [
          36.275,
          33.53,
          "كلية الآداب",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          18,
          "كلية تدرس العلوم الإنسانية والأدبية",
        ],
        [
          36.31,
          33.525,
          "كلية الطب",
          PLACEHOLDER,
          "المزة",
          8,
          20,
          "كلية طبية تقدم برامج تعليمية متقدمة",
        ],
        [
          36.285,
          33.515,
          "كلية العلوم",
          PLACEHOLDER,
          "العباسيين",
          8,
          18,
          "كلية تركز على العلوم الأساسية والبحث العلمي",
        ],
      ],
      schools: [
        [
          36.286,
          33.512,
          "ثانوية المأمون",
          PLACEHOLDER,
          "المرجة",
          7,
          14,
          "مدرسة ثانوية تقدم تعليم عالي الجودة",
        ],
        [
          36.303,
          33.528,
          "ثانوية الجلاء",
          PLACEHOLDER,
          "المزة",
          7,
          14,
          "مدرسة معروفة بمستواها التعليمي الجيد",
        ],
        [
          36.278,
          33.52,
          "إعدادية الفارابي",
          PLACEHOLDER,
          "القصاع",
          7,
          14,
          "مدرسة إعدادية تقدم تعليم أساسي",
        ],
        [
          36.309,
          33.507,
          "ابتدائية النور",
          PLACEHOLDER,
          "برزة",
          7,
          13,
          "مدرسة ابتدائية تهتم بتعليم الأطفال",
        ],
        [
          36.293,
          33.535,
          "ثانوية الشهيد",
          PLACEHOLDER,
          "كفرسوسة",
          7,
          14,
          "مدرسة تقدم تعليم ثانوي متكامل",
        ],
      ],
      institutes: [
        [
          36.282,
          33.513,
          "معهد التقانة",
          PLACEHOLDER,
          "المرجة",
          8,
          16,
          "معهد يقدم برامج تقنية ومهنية",
        ],
        [
          36.3,
          33.522,
          "معهد الفنون التطبيقية",
          PLACEHOLDER,
          "المزة",
          9,
          17,
          "معهد متخصص بالفنون والتصميم",
        ],
        [
          36.276,
          33.518,
          "معهد الإدارة",
          PLACEHOLDER,
          "القصاع",
          8,
          16,
          "معهد يقدم دراسات إدارية وتجارية",
        ],
        [
          36.307,
          33.514,
          "معهد التمريض",
          PLACEHOLDER,
          "برزة",
          8,
          16,
          "معهد لتدريب الكوادر التمريضية",
        ],
        [
          36.29,
          33.531,
          "معهد الموسيقى",
          PLACEHOLDER,
          "كفرسوسة",
          10,
          18,
          "معهد لتعليم الموسيقى والفنون",
        ],
      ],
      kindergarten: [
        [
          36.284,
          33.509,
          "روضة الزهور",
          PLACEHOLDER,
          "المرجة",
          8,
          14,
          "روضة تقدم رعاية وتعليم مبكر للأطفال",
        ],
        [
          36.301,
          33.525,
          "روضة الأمل",
          PLACEHOLDER,
          "المزة",
          8,
          14,
          "روضة حديثة تهتم بتنمية الطفل",
        ],
        [
          36.28,
          33.521,
          "روضة المستقبل",
          PLACEHOLDER,
          "ركن الدين",
          8,
          14,
          "روضة تعليمية ببيئة آمنة",
        ],
        [
          36.306,
          33.511,
          "روضة الفرح",
          PLACEHOLDER,
          "برزة",
          8,
          13,
          "روضة تقدم نشاطات تعليمية وترفيهية",
        ],
        [
          36.295,
          33.532,
          "روضة النجوم",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          14,
          "روضة تهتم بتطوير مهارات الأطفال",
        ],
      ],
    },
  },

  services: {
    filters: [
      { label: "البريد", value: "post" },
      { label: "الكهرباء", value: "electric" },
      { label: "المياه", value: "water" },
      { label: "الاتصالات", value: "telecom" },
    ],
    locationSets: {
      post: [
        [
          36.28,
          33.51,
          "مكتب البريد المركزي",
          PLACEHOLDER,
          "المرجة",
          8,
          18,
          "المكتب الرئيسي للخدمات البريدية",
        ],
        [
          36.301,
          33.519,
          "فرع بريد المزة",
          PLACEHOLDER,
          "المزة",
          8,
          16,
          "فرع يقدم خدمات البريد والشحن",
        ],
        [
          36.277,
          33.527,
          "فرع بريد القصاع",
          PLACEHOLDER,
          "القصاع",
          8,
          16,
          "مكتب بريد يخدم سكان المنطقة",
        ],
        [
          36.308,
          33.505,
          "فرع بريد برزة",
          PLACEHOLDER,
          "برزة",
          8,
          16,
          "فرع بريد يقدم خدمات متنوعة",
        ],
        [
          36.294,
          33.533,
          "فرع بريد الميدان",
          PLACEHOLDER,
          "الميدان",
          8,
          16,
          "مكتب بريد محلي",
        ],
      ],
      electric: [
        [
          36.289,
          33.516,
          "محطة كهرباء الزبلطاني",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "محطة رئيسية لتوليد وتوزيع الكهرباء",
        ],
        [
          36.304,
          33.526,
          "محطة كهرباء المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "محطة تغذي المنطقة بالطاقة",
        ],
        [
          36.273,
          33.508,
          "محطة كهرباء القابون",
          PLACEHOLDER,
          "القابون",
          0,
          24,
          "محطة كهرباء تعمل باستمرار",
        ],
        [
          36.311,
          33.52,
          "محطة كهرباء جرمانا",
          PLACEHOLDER,
          "جرمانا",
          0,
          24,
          "محطة توزيع كهرباء رئيسية",
        ],
        [
          36.287,
          33.53,
          "مركز توزيع كهرباء",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          20,
          "مركز لإدارة شبكة الكهرباء",
        ],
      ],
      water: [
        [
          36.283,
          33.514,
          "مديرية المياه",
          PLACEHOLDER,
          "المرجة",
          8,
          16,
          "الجهة المسؤولة عن خدمات المياه",
        ],
        [
          36.3,
          33.524,
          "محطة ضخ المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "محطة لضخ المياه للمناطق المجاورة",
        ],
        [
          36.276,
          33.517,
          "خزان مياه القاسيون",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "خزان رئيسي لتخزين المياه",
        ],
        [
          36.307,
          33.508,
          "محطة معالجة برزة",
          PLACEHOLDER,
          "برزة",
          0,
          24,
          "محطة لمعالجة وتنقية المياه",
        ],
        [
          36.296,
          33.536,
          "مركز صيانة الشبكة",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          16,
          "مركز لصيانة شبكات المياه",
        ],
      ],
      telecom: [
        [
          36.287,
          33.511,
          "مبادل الاتصالات المركزي",
          PLACEHOLDER,
          "المرجة",
          8,
          20,
          "مركز رئيسي لإدارة الاتصالات",
        ],
        [
          36.303,
          33.523,
          "مبادل المزة",
          PLACEHOLDER,
          "المزة",
          8,
          20,
          "مركز اتصالات يخدم المنطقة",
        ],
        [
          36.281,
          33.52,
          "برج ترحيل القاسيون",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "برج لنقل إشارات الاتصالات",
        ],
        [
          36.31,
          33.513,
          "مركز خدمة الزبائن",
          PLACEHOLDER,
          "برزة",
          9,
          17,
          "مركز لخدمة العملاء",
        ],
        [
          36.294,
          33.529,
          "مبادل المالكي",
          PLACEHOLDER,
          "المالكي",
          8,
          20,
          "مركز اتصالات محلي",
        ],
      ],
    },
  },

  security: {
    filters: [
      { label: "مراكز الشرطة", value: "police" },
      { label: "الدفاع المدني", value: "civil" },
      { label: "النقاط الأمنية", value: "checkpoints" },
      { label: "المخافر", value: "stations" },
    ],
    locationSets: {
      police: [
        [
          36.29,
          33.515,
          "مركز شرطة المرجة",
          PLACEHOLDER,
          "المرجة",
          0,
          24,
          "مركز شرطة يعمل على مدار الساعة",
        ],
        [
          36.305,
          33.525,
          "مركز شرطة المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "مركز أمني لخدمة المنطقة",
        ],
        [
          36.275,
          33.505,
          "مركز شرطة الميدان",
          PLACEHOLDER,
          "الميدان",
          0,
          24,
          "مركز شرطة محلي",
        ],
        [
          36.31,
          33.53,
          "مركز شرطة برزة",
          PLACEHOLDER,
          "برزة",
          0,
          24,
          "مركز أمني يوفر الحماية",
        ],
        [
          36.285,
          33.52,
          "مركز شرطة القصاع",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "مركز أمني لخدمة المواطنين",
        ],
      ],
      civil: [
        [
          36.285,
          33.513,
          "مركز الدفاع المدني",
          PLACEHOLDER,
          "المرجة",
          0,
          24,
          "مركز للاستجابة للطوارئ والحرائق",
        ],
        [
          36.302,
          33.522,
          "فرع دفاع مدني المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "مركز إنقاذ وإطفاء",
        ],
        [
          36.278,
          33.517,
          "فرع دفاع مدني دمر",
          PLACEHOLDER,
          "دمر",
          0,
          24,
          "مركز خدمات طوارئ",
        ],
        [
          36.309,
          33.506,
          "فرع دفاع مدني برزة",
          PLACEHOLDER,
          "برزة",
          0,
          24,
          "مركز إنقاذ",
        ],
        [
          36.292,
          33.534,
          "مستودع معدات الطوارئ",
          PLACEHOLDER,
          "كفرسوسة",
          8,
          20,
          "مستودع تجهيزات الطوارئ",
        ],
      ],
      checkpoints: [
        [
          36.281,
          33.509,
          "نقطة تفتيش الميدان",
          PLACEHOLDER,
          "الميدان",
          0,
          24,
          "نقطة أمنية لتنظيم المرور",
        ],
        [
          36.299,
          33.521,
          "نقطة تفتيش العباسيين",
          PLACEHOLDER,
          "العباسيين",
          0,
          24,
          "نقطة مراقبة أمنية",
        ],
        [
          36.306,
          33.516,
          "نقطة تفتيش المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "نقطة تفتيش رئيسية",
        ],
        [
          36.287,
          33.528,
          "نقطة تفتيش القدم",
          PLACEHOLDER,
          "الميدان",
          0,
          24,
          "نقطة تنظيم مرور",
        ],
        [
          36.312,
          33.523,
          "نقطة تفتيش دمر",
          PLACEHOLDER,
          "دمر",
          0,
          24,
          "نقطة مراقبة أمنية",
        ],
      ],
      stations: [
        [
          36.284,
          33.51,
          "مخفر باب توما",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "مخفر يقدم خدمات أمنية",
        ],
        [
          36.301,
          33.525,
          "مخفر المزة",
          PLACEHOLDER,
          "المزة",
          0,
          24,
          "مخفر شرطة محلي",
        ],
        [
          36.28,
          33.521,
          "مخفر ركن الدين",
          PLACEHOLDER,
          "ركن الدين",
          0,
          24,
          "مخفر لخدمة المنطقة",
        ],
        [
          36.306,
          33.511,
          "مخفر كفرسوسة",
          PLACEHOLDER,
          "كفرسوسة",
          0,
          24,
          "مخفر أمني",
        ],
        [
          36.295,
          33.532,
          "مخفر جرمانا",
          PLACEHOLDER,
          "جرمانا",
          0,
          24,
          "مخفر يقدم خدمات أمنية",
        ],
      ],
    },
  },

  tourism: {
    filters: [
      { label: "المتاحف", value: "museums" },
      { label: "الفنادق", value: "hotels" },
      { label: "الآثار", value: "heritage" },
      { label: "الأسواق", value: "markets" },
    ],
    locationSets: {
      museums: [
        [
          36.2965,
          33.5105,
          "المتحف الوطني",
          PLACEHOLDER,
          "المرجة",
          9,
          18,
          "أهم متحف في دمشق يعرض آثار تاريخية",
        ],
        [
          36.301,
          33.518,
          "متحف التقاليد الشعبية",
          PLACEHOLDER,
          "المزة",
          9,
          17,
          "متحف يعرض التراث الشعبي",
        ],
        [
          36.288,
          33.523,
          "متحف الخط العربي",
          PLACEHOLDER,
          "القصاع",
          10,
          17,
          "متحف متخصص بالفن العربي",
        ],
        [
          36.307,
          33.509,
          "متحف الجيش",
          PLACEHOLDER,
          "المرجة",
          9,
          17,
          "متحف يعرض التاريخ العسكري",
        ],
        [
          36.28,
          33.515,
          "متحف دمشق الكبير",
          PLACEHOLDER,
          "المرجة",
          9,
          18,
          "متحف شامل لتاريخ المدينة",
        ],
      ],
      hotels: [
        [
          36.276583,
          33.513789,
          "فندق الأمويين",
          "./assets/10.png",
          "المرجة",
          0,
          24,
          "فندق يوفر إقامة مريحة وخدمات جيدة",
        ],
        [
          36.298094,
          33.512644,
          "فندق المرجة",
          "./assets/marga.webp",
          "المرجة",
          0,
          24,
          "فندق في موقع مركزي مناسب",
        ],
        [
          36.318542,
          33.52403,
          "فندق العباسيين",
          "./assets/abassien.jpeg",
          "العباسيين",
          0,
          24,
          "فندق قريب من مراكز مهمة",
        ],
        [
          36.293707,
          33.528663,
          "فندق الميسات",
          "./assets/maisat.jpeg",
          "كفرسوسة",
          0,
          24,
          "فندق هادئ ومناسب للإقامة",
        ],
        [
          36.296037,
          33.520569,
          "فندق السبع بحرات",
          "./assets/seven_bahrat.jpeg",
          "المالكي",
          0,
          24,
          "فندق يقدم خدمات سياحية مميزة",
        ],
      ],
      heritage: [
        [
          36.306,
          33.51,
          "الجامع الأموي",
          PLACEHOLDER,
          "القصاع",
          5,
          22,
          "أحد أهم المعالم الإسلامية والتاريخية",
        ],
        [
          36.302,
          33.514,
          "قلعة دمشق",
          PLACEHOLDER,
          "القصاع",
          9,
          18,
          "قلعة تاريخية قديمة",
        ],
        [
          36.299,
          33.506,
          "سوق الحميدية",
          PLACEHOLDER,
          "القصاع",
          9,
          22,
          "سوق تاريخي شهير",
        ],
        [
          36.147097,
          33.420736,
          "المحل",
          PLACEHOLDER,
          "الميدان",
          8,
          20,
          "موقع تراثي محلي",
        ],
        [
          36.294,
          33.52,
          "مئذنة العروس",
          PLACEHOLDER,
          "القصاع",
          0,
          24,
          "معلم أثري مميز",
        ],
      ],
      markets: [
        [
          36.295,
          33.508,
          "سوق الحميدية",
          PLACEHOLDER,
          "القصاع",
          9,
          22,
          "أشهر سوق سياحي في دمشق",
        ],
        [
          36.303,
          33.515,
          "سوق البزورية",
          PLACEHOLDER,
          "القصاع",
          8,
          20,
          "سوق التوابل والعطارة",
        ],
        [
          36.286,
          33.522,
          "سوق مدحت باشا",
          PLACEHOLDER,
          "الميدان",
          8,
          20,
          "سوق تاريخي طويل",
        ],
        [
          36.309,
          33.504,
          "سوق الخجا",
          PLACEHOLDER,
          "برزة",
          9,
          19,
          "سوق شعبي محلي",
        ],
        [
          36.292,
          33.53,
          "سوق الصالحية",
          PLACEHOLDER,
          "المالكي",
          10,
          22,
          "سوق حديث وحيوي يحتوي على محلات متنوعة",
        ],
      ],
    },
  },
};
const map = new maplibregl.Map({
  container: "map",
  // style: "https://api.maptiler.com/maps/hybrid/style.json?key=xfMFZwj0e6nYz4YSaNqu",
  // style: "https://demotiles.maplibre.org/style.json",
  // style: "https://tiles.openfreemap.org/styles/liberty",
  style: {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
      },
    },
    layers: [
      {
        id: "osm-layer",
        type: "raster",
        source: "osm",
      },
    ],
  },
  // style: "https://tiles.openfreemap.org/styles/liberty",
  center: [36.2765, 33.5138],
  zoom: 10,
});
map.addControl(new maplibregl.NavigationControl(), "top-left");
map.addControl(new maplibregl.ScaleControl(), "bottom-left");

let activeCategory = "health";
let activeFilter = "hospitals";
let activeDistrict = "all";
let activeSecondary = "all";
let userPosition = null;
let activeMarkers = [];
let activePopup = null;

function isOpenNow(openHour, closeHour) {
  const h = new Date().getHours();
  if (openHour === 0 && closeHour === 24) return true;
  if (openHour < closeHour) return h >= openHour && h < closeHour;
  return h >= openHour || h < closeHour;
}

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function applyFilters(rawLocations) {
  let locs = [...rawLocations];
  if (activeDistrict !== "all") {
    locs = locs.filter((loc) => loc[4] === activeDistrict);
  }
  if (activeSecondary === "open_now") {
    locs = locs.filter((loc) => isOpenNow(loc[5], loc[6]));
  }
  if (activeSecondary === "nearest" && userPosition) {
    locs = locs.slice().sort((a, b) => {
      const da = distanceKm(userPosition.lat, userPosition.lng, a[1], a[0]);
      const db = distanceKm(userPosition.lat, userPosition.lng, b[1], b[0]);
      return da - db;
    });
  }
  return locs;
}

function getIconStyle() {
  const icons = CATEGORY_ICONS[activeCategory];
  return (icons && icons[activeFilter]) || { emoji: "📍", color: "#3c83e7" };
}

function createMarkerEl(iconStyle, isHighlighted = false) {
  const el = document.createElement("div");
  el.className = "custom-marker" + (isHighlighted ? " highlighted" : "");
  el.style.setProperty("--marker-color", iconStyle.color);
  el.innerHTML = `<span class="marker-emoji">${iconStyle.emoji}</span>`;
  return el;
}

function clearMarkers() {
  activeMarkers.forEach(({ marker }) => marker.remove());
  activeMarkers = [];
  if (activePopup) {
    activePopup.remove();
    activePopup = null;
  }
}

function renderMarkers(locations) {
  clearMarkers();
  const filtered = applyFilters(locations);
  const iconStyle = getIconStyle();
  // filtered.forEach((loc, index) => {
  //   const [lng, lat, name, img, district, openH, closeH] = loc;
  //   console.log(loc)
  //   const el = createMarkerEl(iconStyle);
  //   el.style.animationDelay = `${index * 60}ms`;
  //   const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
  //     .setLngLat([lng, lat])
  //     .addTo(map);
  //   el.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     highlightMarker(index);
  //     // showPopup(lng, lat, name, district, openH, closeH);
  //     // scrollToCard(name);
  //   });
  //   console.log({ marker, el, loc, index })
  //   activeMarkers.push({ marker, el, loc, index });
  // });
  filtered.forEach((loc, index) => {
    const [lng, lat, name, img, district, openH, closeH] = loc;
    console.log(loc);
    const el = createMarkerEl(iconStyle);
    el.style.animationDelay = `${index * 60}ms`;
    const marker = new maplibregl.Popup({
      // element: el,
      // anchor: "bottom",
      offset: 28,
      closeButton: true,
      maxWidth: "220px",
    })
      .setLngLat([lng, lat])
      .setHTML(
        `
      <div class="pin" dir="rtl">
      O
      </div>
    `,
      )
      .addTo(map);
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      highlightMarker(index);
      // showPopup(lng, lat, name, district, openH, closeH);
      // scrollToCard(name);
    });
    console.log({ marker, el, loc, index });
    activeMarkers.push({ marker, el, loc, index });
  });
}
// function showPopup(lng, lat, name, image, district, openH, closeH) {
function showPopup(
  lng,
  lat,
  name,
  image,
  district,
  openH,
  closeH,
  description,
) {
  if (activePopup) activePopup.remove();
  const open = isOpenNow(openH, closeH);
  const hours =
    openH === 0 && closeH === 24 ? "24/7" : `${openH}:00 - ${closeH}:00`;
  activePopup = new maplibregl.Popup({
    offset: 28,
    closeButton: true,
    maxWidth: "220px",
  })
    .setLngLat([lng, lat])
    .setHTML(
      `
      <div class="card_details_container" dir="rtl">
      <div class="popup-district">📍 ${name}</div>
        <div class="popup_image_text_container">
        <p class="popup_description_para">
        ${description}
        </p>
          <img class="popup_image" src="${image}" alt=""/>
        </div>
      </div>
    `,
    )
    .addTo(map);
}

// <div class="popup-name">${name}</div>
//     <div class="popup-district">📍 ${district}</div>
//     <div class="popup-status ${open ? "open" : "closed"}">
//       ${open ? "● مفتوح الآن" : "● مغلق"}
//     </div>
//     <div class="popup-hours">🕐 ${hours}</div>

function highlightMarker(targetIndex) {
  activeMarkers.forEach(({ el, index }) => {
    if (index === targetIndex) {
      el.classList.add("highlighted");
    } else {
      el.classList.remove("highlighted");
    }
  });
}

// function scrollToCard(name) {
//   const cards = document.querySelectorAll(".image_card");
//   cards.forEach((card) => {
//     if (card.title === name) {
//       card.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center",
//       });
//       highlightCard(card);
//     }
//   });
// }

function highlightCard(activeCard) {
  document.querySelectorAll(".image_card").forEach((c) => {
    c.style.borderColor = "";
    c.style.boxShadow = "";
  });
  activeCard.style.borderColor = "var(--accent)";
  activeCard.style.boxShadow = "0 0 0 2px var(--accent)";
}

function renderImageCards(locations) {
  const container = document.getElementById("imageCardsContainer");
  container.innerHTML = "";
  const filtered = applyFilters(locations);
  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.style.cssText = "color:#aaa;padding:1rem;text-align:center;";
    empty.innerText = "لا توجد نتائج";
    container.appendChild(empty);
    renderMarkers([]);
    return;
  }

  filtered.forEach((loc, index) => {
    const [lng, lat, name, img, district, openH, closeH, description] = loc;
    const card = document.createElement("div");
    card.className = "image_card";
    card.title = name;
    const image = document.createElement("img");
    image.src = img;
    image.alt = name;
    image.onerror = () => {
      image.src = PLACEHOLDER;
    };
    const label = document.createElement("p");
    label.innerText = name;
    card.style.position = "relative";
    card.appendChild(image);
    card.appendChild(label);
    if (activeSecondary === "nearest" && userPosition) {
      const km = distanceKm(userPosition.lat, userPosition.lng, lat, lng);
      const distEl = document.createElement("span");
      distEl.style.cssText = "font-size:.65rem;color:#aaa;";
      distEl.innerText =
        km < 1 ? `${Math.round(km * 1000)} م` : `${km.toFixed(1)} كم`;
      label.appendChild(document.createElement("br"));
      label.appendChild(distEl);
    }
    card.addEventListener("click", () => {
      // window.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo({ top: 0, behavior: "smooth" });
      map.flyTo({
        center: [lng, lat],
        zoom: 17,
        duration: 1800,
      });
      // function scrollingToTopSPA() {
      //   map.flyTo({
      //     center: [lng, lat],
      //     zoom: 17,
      //     duration: 1800,
      //   });
      // }
      // setTimeout(scrollingToTopSPA, 1000);
      // map.flyTo({
      //   center: [lng, lat],
      //   zoom: 17,
      //   duration: 1800,
      // });
      function DoOtherFunctions() {
        highlightCard(card);
        highlightMarker(index);
        showPopup(lng, lat, name, img, district, openH, closeH, description);
      }
      setTimeout(DoOtherFunctions, 500);
    });
    container.appendChild(card);
  });
  console.log(locations);
  renderMarkers(locations);
}

function renderSecondaryFilters(rawLocations) {
  const bar = document.getElementById("leftSideMenuFilter");
  bar.innerHTML = "";
  const districts = ["all", ...new Set(rawLocations.map((l) => l[4]))];
  const distWrap = document.createElement("div");
  distWrap.className = "filter_select_wrap";
  const distLabel = document.createElement("label");
  distLabel.innerText = "المنطقة";
  const distSel = document.createElement("select");
  distSel.className = "filter_select";
  districts.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.innerText = d === "all" ? "الكل" : d;
    if (d === activeDistrict) opt.selected = true;
    distSel.appendChild(opt);
  });
  distSel.addEventListener("change", () => {
    activeDistrict = distSel.value;
    renderImageCards(rawLocations);
  });
  distWrap.appendChild(distLabel);
  distWrap.appendChild(distSel);
  bar.appendChild(distWrap);
  const secWrap = document.createElement("div");
  secWrap.className = "filter_select_wrap";
  const secLabel = document.createElement("label");
  secLabel.innerText = "ترتيب / حالة";
  const secSel = document.createElement("select");
  secSel.className = "filter_select";
  const secOptions = [
    { value: "all", label: "الكل" },
    { value: "open_now", label: "مفتوح الآن" },
    { value: "nearest", label: "الأقرب أولاً" },
  ];
  secOptions.forEach((o) => {
    const opt = document.createElement("option");
    opt.value = o.value;
    opt.innerText = o.label;
    if (o.value === activeSecondary) opt.selected = true;
    secSel.appendChild(opt);
  });
  secSel.addEventListener("change", () => {
    activeSecondary = secSel.value;
    if (activeSecondary === "nearest" && !userPosition) {
      requestLocation(() => renderImageCards(rawLocations));
    } else {
      renderImageCards(rawLocations);
    }
  });
  secWrap.appendChild(secLabel);
  secWrap.appendChild(secSel);
  bar.appendChild(secWrap);
}

function requestLocation(cb) {
  if (!navigator.geolocation) {
    alert("المتصفح لا يدعم تحديد الموقع");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      cb();
    },
    () => {
      alert("لم يتم السماح بالوصول للموقع");
      activeSecondary = "all";
      cb();
    },
  );
}

function renderLeftMenu(categoryKey) {
  const leftMenu = document.getElementById("leftSideMenu");
  const cat = categoriesData[categoryKey];
  if (!cat) return;
  leftMenu.innerHTML = "";
  cat.filters.forEach((filter, index) => {
    const btn = document.createElement("button");
    btn.className = "map_btn" + (index === 0 ? " active" : "");
    btn.dataset.filter = filter.value;
    btn.innerText = filter.label;
    btn.style.animationDelay = `${index * 50}ms`;
    btn.addEventListener("click", () => {
      leftMenu
        .querySelectorAll(".map_btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = filter.value;
      activeDistrict = "all";
      activeSecondary = "all";
      map.flyTo({
        center: [36.2765, 33.5138],
        zoom: 12,
        duration: 1800,
      });
      const locs =
        categoriesData[activeCategory].locationSets[activeFilter] || [];
      renderSecondaryFilters(locs);
      renderImageCards(locs);
    });
    leftMenu.appendChild(btn);
  });
}

function switchCategory(categoryKey) {
  activeCategory = categoryKey;
  activeDistrict = "all";
  activeSecondary = "all";
  const cat = categoriesData[categoryKey];
  if (!cat) return;
  activeFilter = cat.filters[0].value;
  renderLeftMenu(categoryKey);
  const locs = cat.locationSets[activeFilter] || [];
  renderSecondaryFilters(locs);
  renderImageCards(locs);
}

const categoryButtons = document.querySelectorAll(
  ".map_left_side_menu .map_btn",
);
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    switchCategory(btn.dataset.category);
  });
});

const go_up = document.getElementById("Go_Up");
go_up.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

map.on("load", () => {
  switchCategory("health");
});
