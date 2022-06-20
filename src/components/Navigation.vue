<template>
  <nav>
    <div>
      <h2>{{ currentCategoryTitle }}</h2>
    </div>
    <ul>
      <li v-for="(menu, idx) in menuItems" :key="idx">
        <button @click="setCurrentMenu(menu.id)">{{ menu.title }}</button>
      </li>
    </ul>
    <ul v-if="currentSubMenus && currentSubMenus.length">
      <li v-for="(subMenu, idx) in currentSubMenus" :key="idx">
        <button>{{ subMenu.title }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import navigation from "../data/navigation";

export default {
  data() {
    return {
      menuItems: [],
      auths: ["운영자"],
      currentMenu: "",
      currentCategoryTitle: "",
    };
  },
  computed: {
    currentSubMenus: function () {
      if (!this.menuItems.length) return [];
      return this.menuItems.find((item) => {
        if (!item.children) return [];
        this.currentCategoryTitle = item.title;
        return item.id === this.currentMenu;
      }).children;
    },
  },
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
    setCurrentMenu(selectedMenu) {
      this.currentMenu = selectedMenu;
    },
  },
  created() {
    this.menuItems = this.filterAccessibleMenus(navigation);
    if (this.menuItems.length) {
      this.currentMenu = this.menuItems[0].id;
    }
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: dodgerblue;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0;
      padding: 40px 0;
      font-size: 36px;
      color: #fff;
    }
  }

  .unauthorized {
    color: #fff;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px 0;
    border-top: 1px solid white;

    button {
      color: #fff;
      font-size: 20px;
      border: none;
      background: none;
      cursor: pointer;
    }
  }
}
</style>
