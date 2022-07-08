<script>
import ItemColumnVue from "../form-builder/layouts/ItemColumn.vue";
import ItemRowVue from "../form-builder/layouts/ItemRow.vue";
import TextFieldVue from "../form-builder/inputs/TextField.vue";
import TextAreaVue from "../form-builder/inputs/TextArea.vue";

export default {
  props: ["component"],
  setup(props, { slots }) {
    const component = props.component.componentName;
    const children = props.component.children;
    switch (component) {
      case "Column":
        return () =>
          h(
            ItemColumnVue,
            {
              children,
            },
            slots
          );
      case "Row":
        return () =>
          h(
            ItemRowVue,
            {
              children,
            },
            slots
          );
      case "Text Input":
        return () =>
          h(
            TextFieldVue,
            {
              question: props.component,
            },
            slots
          );
      case "Text Area":
        return () =>
          h(
            TextAreaVue,
            {
              question: props.component,
            },
            slots
          );
    }
  },
};
</script>
