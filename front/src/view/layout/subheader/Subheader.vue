<template>
  <div
    class="subheader py-2 py-lg-12 subheader-transparent"
    v-bind:class="subheaderClasses"
    id="kt_subheader"
  >
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
      v-bind:class="{ 'container-fluid': widthFluid, container: !widthFluid }"
    >
      <div class="d-flex align-items-center flex-wrap mr-2">
        <!--begin::Heading-->
        <div class="d-flex flex-column">
          <!--begin::Title-->
          <h2 class="text-white font-weight-bold my-2 mr-5">
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.custom-v-dropdown {
  &.dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  &.dropdown-menu {
    margin: 0;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "KTSubheader",
  props: {
    breadcrumbs: Array,
    title: String
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    /**
     * Check if subheader width is fluid
     */
    widthFluid() {
      return this.layoutConfig("subheader.width") === "fluid";
    },

    subheaderClasses() {
      const classes = [];
      const style = this.layoutConfig("subheader.style");
      if (style) {
        classes.push(style);

        if (style === "solid") {
          classes.push("bg-white");
        }

        if (this.layoutConfig("subheader.fixed")) {
          classes.push("border-top");
        }
      }
      return classes.join(" ");
    }
  }
};
</script>
