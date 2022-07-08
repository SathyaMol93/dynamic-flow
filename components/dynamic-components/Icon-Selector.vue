<script>
import {
  HomeIcon,
  CubeIcon,
  MenuIcon,
  ViewBoardsIcon,
  PuzzleIcon,
  PencilIcon,
  PencilAltIcon,
} from "@heroicons/vue/solid";
export default {
  props: ["icon"],
  setup(props) {
    const icon = props.icon;

    switch (icon) {
      case "home":
        return () => h(HomeIcon);
      case "flow":
        return () => h(CubeIcon);
      case "menu":
        return () => h(MenuIcon);
      case "Column":
        return () => h(ViewBoardsIcon);
      case "Row":
        return () => h(ViewBoardsIcon, { class: "rotate-90" });
      case "Slot":
        return () => h(PuzzleIcon);
      case "Text Input":
        return () => h(PencilIcon);
      case "Text Area":
        return () => h(PencilAltIcon);
      case "Single Choice":
        return () => h(PencilIcon);
      case "Multiple Choice":
        return () => h(PencilAltIcon);
    }
  },
};
</script>
