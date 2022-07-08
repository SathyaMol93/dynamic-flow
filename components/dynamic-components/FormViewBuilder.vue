<script>
import ViewItemColumnVue from "../form-viewer/layouts/ViewItemColumn.vue";
import ViewItemRowVue from "../form-viewer/layouts/ViewItemRow.vue";
export default {
  props: ["component"],
  emits: ["update"],
  setup(props, { emit, slots }) {
    const component = props.component.componentName;
    const children = props.component.children;
    switch (component) {
      case "Column":
        return () =>
          h(
            ViewItemColumnVue,
            {
              children,
            },
            slots
          );
      case "Row":
        return () =>
          h(
            ViewItemRowVue,
            {
              children,
            },
            slots
          );
    }
  },
};
</script>
