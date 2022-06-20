export default [
  {
    id: "community",
    title: "커뮤니티",
    route: "",
    children: [
      {
        title: "일상",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMDForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "일상",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMUForest",
          },
        },
        allow: ["관리자", "운영자", "디자이너"],
      },
      {
        title: "개발바닥",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMSForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "자유게시판",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "AndroMedi",
          },
        },
      },
      {
        title: "정치",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "PEForest",
          },
        },
      },
      {
        title: "이벤트",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "AlarmForest",
          },
        },
      },
      {
        title: "취준생",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMJForest",
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
          name: "BoardsBoard",
          params: {
            boardId: "KMDForest",
          },
        },
        allow: ["관리자", "운영자", "개발자"],
      },
      {
        title: "코드리뷰",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMUForest",
          },
        },
        allow: ["관리자", "운영자", "디자이너"],
      },
      {
        title: "디자인리뷰",
        route: {
          name: "BoardsBoard",
          params: {
            boardId: "KMSForest",
          },
        },
        allow: ["관리자", "운영자", "개발자", "디자이너"],
      },
    ],
    allow: ["관리자", "운영자", "개발자", "디자이너", "기획자"],
  },
];
