<template>
  <div>
    <h1>Dashboard</h1>
    <vueper-slides>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Dashboard",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          title: "Slide #1",
          content: "Slide 1 content.",
          image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/5/3e76574f-abaf-4558-ab80-0b056d830b3f.jpg.webp?ect=4g'
        },
        {
          title: "Slide #2",
          content: "Slide 2 content.",
          image: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/6/87d1b9f0-614f-4c0a-92cd-d2afc233b96c.jpg.webp?ect=4g'
        },
      ],
    };
  },
};
</script>
<style scoped></style>
