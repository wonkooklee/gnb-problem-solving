<template>
  <nav>
    <div>
      <h2>Authorized GNB</h2>
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
      currentSubMenus: [],
      auths: ["개발자"],
      currentMenu: "",
    };
  },
  created() {
    this.menuItems = this.filterAccessibleMenus(navigation);
    if (this.menuItems.length) {
      this.currentMenu = this.menuItems[0].id;
    }
  },
  watch: {
    currentMenu: function (newVal) {
      if (!this.menuItems.length) return;
      this.currentSubMenus = this.menuItems.find(
        (item) => item.id === newVal
      ).children;
    },
  },
  methods: {
    filterAccessibleMenus(menuItems) {
      return menuItems.map((item) => {
        if (!item.allow || !this.checkAllowance(item.allow)) return false;
        let allowedSubMenus;
        if (item.children) {
          allowedSubMenus = item.children.filter((child) => {
            if (!child.allow) return true;
            return this.checkAllowance(child.allow);
          });
        }
        return { ...item, children: allowedSubMenus };
      });
    },
    checkAllowance(allowList) {
      return allowList.some((allow) => this.auths.indexOf(allow) > -1);
    },
    setCurrentMenu(selectedMenu) {
      this.currentMenu = selectedMenu;
    },
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
