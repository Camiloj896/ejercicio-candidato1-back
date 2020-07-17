<template>
  <div class="row user">
      <div class="col-xxl-4">
        <MixedWidget1></MixedWidget1>
      </div>
  </div>
</template>

<script>

    import MixedWidget1 from "@/view/content/widgets/mixed/Widget1.vue";

    export default {
        name: "User",
        components: { MixedWidget1 },        
        methods: {}
    };
</script>