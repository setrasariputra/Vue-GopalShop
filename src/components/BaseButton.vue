<template>
  <div>
    <button :class="classButton">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: "",
    label: "",
  },
  data() {
    return {
      classButton: "",
    };
  },
  created() {
    this.setVariant();
  },
  methods: {
    setVariant() {
      switch (this.variant) {
        case "danger":
          this.classButton = "bg-red-500 text-white px-8 py-2 rounded-3xl";
          break;
        case "success":
          this.classButton = "bg-teal-500 text-white px-8 py-2 rounded-3xl";
          break;
          case "primary":
          this.classButton = "bg-indigo-500 text-white px-8 py-2 rounded-3xl";
          break;
      }
    },
  },
};
</script>
