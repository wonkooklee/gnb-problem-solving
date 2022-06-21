export default [
  {
    id: "community",
    title: "커뮤니티",
    route: "",
    children: [
      {
        title: "개발자일상",
        route: {
          name: "Boards",
          params: {
            id: "KMDForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "디자이너일상",
        route: {
          name: "Boards",
          params: {
            id: "KMUForest",
          },
        },
        allow: ["관리자", "운영자", "디자이너"],
      },
      {
        title: "개발바닥",
        route: {
          name: "Boards",
          params: {
            id: "KMSForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "자유게시판",
        route: {
          name: "Boards",
          params: {
            id: "AndroMedi",
          },
        },
      },
      {
        title: "정치",
        route: {
          name: "Boards",
          params: {
            id: "PEForest",
          },
        },
      },
      {
        title: "이벤트",
        route: {
          name: "Boards",
          params: {
            id: "AlarmForest",
          },
        },
      },
      {
        title: "취준생",
        route: {
          name: "Boards",
          params: {
            id: "KMJForest",
          },
        },
        allow: ["관리자", "운영자", "개발자", "디자이너", "기획자"],
      },
    ],
    allow: ["관리자", "운영자", "개발자", "디자이너", "기획자"],
  },
  {
    id: "contents",
    title: "컨텐츠",
    route: "",
    children: [
      {
        title: "강의",
        route: {
          name: "Boards",
          params: {
            id: "KMDForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "코드리뷰",
        route: {
          name: "Boards",
          params: {
            id: "KMUForest",
          },
        },
        allow: ["관리자", "운영자", "디자이너"],
      },
      {
        title: "디자인리뷰",
        route: {
          name: "Boards",
          params: {
            id: "KMSForest",
          },
        },
        allow: ["관리자", "운영자", "개발자", "디자이너"],
      },
    ],
    allow: ["관리자", "운영자", "개발자", "디자이너", "기획자"],
  },
  {
    id: "market",
    title: "마켓",
    route: "",
    allow: ["관리자", "운영자", "개발자", "디자이너", "기획자"],
  },
  {
    id: "admin",
    title: "어드민",
    route: "",
    allow: ["관리자", "운영자"],
  },
];
