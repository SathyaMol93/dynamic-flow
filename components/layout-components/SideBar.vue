<template>
  <div class="flex flex-col h-full w-full bg-gray-800">
    <div
      id="logo"
      class="w-full h-16 flex justify-center items-center text-white"
    >
      <LightningBoltIcon class="h-18 w-8 text-blue-700" />
      <h1 class="font-bold text-3xl">Dynamic Forms</h1>
    </div>
    <div id="menu" class="w-full h-full flex flex-col p-5 space-y-2 mt-16">
      <Disclosure v-for="(item, index) in menuItems" :key="index">
        <DisclosureButton
          @click="sidebaritemAction(index, item)"
          class="flex justify-between items-center text-white text-1xl font-semibold p-2 rounded-lg"
          :class="selected === index ? 'bg-blue-700' : ''"
        >
          <div class="flex w-full h-full space-x-2 justify-start items-center">
            <IconSelector class="w-5 h-5" :icon="item.icon" />
            <span>{{ item.name }}</span>
          </div>
          <ChevronUpIcon
            v-if="item.subMenu.length > 0"
            :class="
              selected === index
                ? 'text-white '
                : ' rotate-180 transform text-blue-700'
            "
            class="h-6 w-6"
          />
        </DisclosureButton>
        <div v-show="selected === index">
          <DisclosurePanel
            v-if="item.subMenu.length > 0"
            class="px-4 pt-4 pb-2 text-sm text-gray-500"
            static
          >
            <div class="flex flex-col w-full h-full items-start space-y-2">
              <button
                class="font-semibold text-md"
                v-for="(sub, index) in item.subMenu"
                :key="index"
                :class="checkActive(sub) ? 'text-blue-700' : 'text-white'"
                @click="redirect(sub)"
              >
                {{ sub.name }}
              </button>
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { LightningBoltIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import IconSelector from "../dynamic-components/Icon-Selector.vue";

const props = defineProps(["menuItems"]);
let selected = ref();
const route = useRoute();
const router = useRouter();
watch(route, (route, prevRout) => {
  setCurrentPage();
});
onMounted(() => {
  console.log("router", router.getRoutes());
  setCurrentPage();
});
function sidebaritemAction(index, item) {
  sidebarSubmenuSelection(index, item);
  redirect(item);
}
function sidebarSubmenuSelection(index, item) {
  selected.value === index && item.subMenu.length > 0
    ? setCurrentPage()
    : (selected.value = index);
}
function redirect(item) {
  if (!item.subMenu || item.subMenu.length === 0) {
    router.push({ name: item.to });
  }
}
function setCurrentPage() {
  const index = props.menuItems.findIndex((item) => {
    return route.name.includes(item.to);
  });
  selected.value = index;
}
function checkActive(item) {
  return route.name.includes(item.to);
}
</script>

<style scoped></style>
