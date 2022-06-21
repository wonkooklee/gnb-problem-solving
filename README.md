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
<br>

## 권한별 View

### 개발자 Role
![스크린샷 2022-06-22 오전 12 36 55](https://user-images.githubusercontent.com/61101022/174840448-0d1452d1-afe3-4799-805d-ec179102dc88.png)

### 디자이너 Role
![스크린샷 2022-06-22 오전 12 37 04](https://user-images.githubusercontent.com/61101022/174840558-cd38e201-f0da-48cc-9ca8-543d91d4511d.png)

### 운영자 Role
![스크린샷 2022-06-22 오전 12 37 10](https://user-images.githubusercontent.com/61101022/174840589-fd97fd3c-587f-4929-8062-a055fb966828.png)  

<br>

## 접근

API에 요청할때 권한 정보를 함께 보내서 권한에 맞는 스키마를 내려받는것이 이상적이라고 생각합니다.  
만약 그럴 수 없다는 가정하에 reduce 함수를 사용해서 유저 권한으로 볼 수 있는 메뉴만 담은 새로운 데이터 컬렉션을 반환하는 방법을 생각해보았습니다.  
권한이 있는 하위 카테고리를 filter로 가려냅니다. 두 카테고리 계층이 권한을 확인하기 위해서 `checkAuthority` 메서드에 의존합니다.  
반복문이 중첩되지만 처리하는 양이 고작 메뉴이기 때문에 가독성이 더 중요하다고 생각했습니다. 그래서 더 좋은 방법을 고민중입니다.  

```javascript
methods: {
  filterAccessibleMenus(menuItems) {
    return menuItems.reduce((acc, item) => {
      if (!item.allow || !this.checkAuthority(item.allow)) return acc;
      let allowedSubMenus;
      if (item.children) {
        allowedSubMenus = item.children.filter((child) => {
          if (!child.allow) return true;
          return this.checkAuthority(child.allow);
        });
      }
      acc.push({ ...item, children: allowedSubMenus || [] });
      return acc;
    }, []);
  },
  checkAuthority(allowList) {
    return allowList.some((allow) => this.auths.indexOf(allow) > -1);
  },
```

