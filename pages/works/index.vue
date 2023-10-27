<template>
  <div class="container">
    <div class="wrapper"></div>
    <nav>
      <div class="list-items">
        <NuxtLink to="/" class="menu-item">
          <div>
            <span style="--index: 0">h</span>
            <span style="--index: 1">o</span>
            <span style="--index: 2">m</span>
            <span style="--index: 3">e</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">h</span>
            <span style="--index: 1">o</span>
            <span style="--index: 2">m</span>
            <span style="--index: 3">e</span>
          </div>
        </NuxtLink>
      </div>
      <p>/2023&copy;</p>
    </nav>
    <div class="content">
      <div class="left">
        <h1>portfolio</h1>
        <p>
          {{ works.text1 }}
        </p>
        <p>
          {{ works.text2 }}
        </p>
      </div>
      <div class="right">
        <div
          class="projects-list"
          v-for="project in projects"
          :key="project.id"
        >
          <NuxtLink :to="'/works/' + project.id" class="project">
            <h2 class="title">{{ project.title }}</h2>
            <p v-for="technology in project.technologies" class="info">
              {{ technology }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, computed } from "vue";
import { useDataStore } from "~/store/dataStore";

const store = useDataStore();

const works = computed(() => store.texts[store.language].works);
const projects = computed(() => store.texts[store.language].projects);
console.log("projects", projects);

onMounted(() => {
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".left h1", { transform: "translateY(2em)" });
  gsap.set(".projects-list", {
    transform: "translateY(50px)",
    filter: "blur(10px)",
    opacity: 0,
  });

  const tl = gsap.timeline();

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  })
    .to(
      ".projects-list",
      {
        duration: 0.5,
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        ease: "power4.in",
      },
      "-=.4"
    )
    .to(".left h1", {
      y: 0,
      duration: 1,
      ease: "power4.out",
    });
});
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--primary);
  color: var(--secondary);
}

a,
a span,
link {
  color: var(--secondary);
}

nav {
  background: var(--primary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--secondary);
  z-index: 10;
}

.content {
  display: flex;
  gap: 4vw;
  padding-left: 10rem;
}
.content .left {
  height: 100%;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  padding-bottom: 4vw;
}

.left h1 {
  font-size: 2.5rem;
  transform: translateY(2rem);
  text-transform: uppercase;
  font-family: "kionaregular";
  letter-spacing: 0.2rem;
}
.left p {
  font-size: clamp(1.6rem, 1.8rem, 1.9rem);
  background: var(--primary);
  line-height: 2;
  z-index: 1;
}

.content .right {
  flex: 1;
  overflow-y: scroll;
}

.content .right::-webkit-scrollbar {
  display: none;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: start;
  position: relative;
  text-transform: uppercase;
  font-weight: lighter;
  filter: blur(1rem);
  transform: translateY(5rem);
  padding: 2vw;
  opacity: 0;
}

.projects-list .project:hover h2 {
  transform: skewX(-10deg) translateX(2rem);
}
.projects-list .project:hover p {
  transform: translateX(-1rem);
}

.projects-list h2 {
  font-size: clamp(2rem, 7vw, 15rem);
  transition: all 0.3s ease;

  font-family: "kionaregular";

  cursor: pointer;
}

.projects-list .info {
  font-family: Montserrat, sans-serif;
  font-size: clamp(1.3rem, 1vw, 4rem);
  padding-left: 2rem;
  position: relative;
  transition: all 1s ease-in-out;
  display: inline-flex;
}

@media screen and (max-width: 1025px) {
  .container {
    height: auto;
  }
  .content .left {
    height: auto;
    width: 80%;
  }

  .content {
    flex-direction: column;
    width: 100%;
    padding: 10rem 0 0 10rem;
    gap: 3vw;
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .content .right {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
  }

  .projects-list h2 {
    font-size: clamp(3rem, 12vw, 17rem);
  }
}

@media screen and (max-width: 768px) {
  nav {
    position: fixed;
    top: 0;
    left: 0;

    height: 60px;
    width: 100%;
  }
  .content {
    padding: 100px 3rem;
  }

  .content .left {
    width: 100%;
  }
}
</style>
