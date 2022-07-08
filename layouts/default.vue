<template>
  <div class="flex w-full h-screen relative">
    <aside>
      <TransitionRoot
        class="h-full"
        :class="
          isMenuOpen ? 'w-4/5 md:w-80 z-50 md:z-0 absolute md:static' : ''
        "
        :show="isMenuOpen"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <SideBar :menu-items="menu" />
      </TransitionRoot>
    </aside>
    <div class="flex flex-col h-full w-full">
      <TopBar @menuClose="menuActions" />
      <HeaderSection />
      <div id="main" class="p-5 h-full overflow-y-auto">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from "~~/components/layout-components/SideBar.vue";
import TopBar from "~~/components/layout-components/TopBar.vue";
import HeaderSection from "~~/components/layout-components/HeaderSection.vue";
import { TransitionRoot } from "@headlessui/vue";

const menu = reactive([
  {
    to: "index",
    name: "Home",
    icon: "home",
    subMenu: [],
  },
  {
    to: "Forms",
    name: "Forms",
    icon: "flow",
    subMenu: [
      {
        to: "Forms-AllForms",
        name: "All Forms",
        icon: "menu",
      },
      {
        to: "Forms-DesignForm",
        name: "Design Form",
        icon: "menu",
      },
    ],
  },
]);
let isMenuOpen = ref(true);
function menuActions() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped></style>
