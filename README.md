# gnb-problem-solving

요즘 모바일 웹페이지와 웹뷰를 새로운 버전으로 리뉴얼하는 작업을 담당하고 있습니다.  
저희 프로덕트는 유저 Role에 따라 GNB, LNB에 노출되는 메뉴가 달라집니다.  
운영단(Admin) API에서 권한별로 표시되는 네비게이션을 JSON 형태로 받아온다고 가정했을때,(POC는 JS 객체입니다)  
기존 서비스에서 사용하는 스키마 그대로 어떻게 하면 효율적으로 유저 권한에 따라 표시될 메뉴를 분기시킬 수 있을지  
그 방법에 대해 고민하기 위한 리파지토리입니다.

## Problem to solve

```javascript
{
  id: "community",
  title: "커뮤니티", // 1-depth 카테고리입니다.
  route: "",
  children: [
    {
      title: "개발자일상", // 2-depth 하위 카테고리입니다.
      route: {
        name: "Boards",
        params: {
          id: "devdaily",
        },
      },
      allow: ["관리자", "운영자", "개발자"], // 네비게이션에서 본 메뉴를 볼 수 있는 유저 Role을 정의합니다.
    },
    {
      title: "디자이너일상",
      route: {
        name: "Boards",
        params: {
          id: "designerdaily",
        },
      },
      allow: ["관리자", "운영자", "디자이너"],
    },
    {
      title: "개발바닥",
      route: {
        name: "Boards",
        params: {
          id: "devfield",
        },
      },
      allow: ["관리자", "운영자", "개발자"],
```
