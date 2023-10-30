<template>
  <div class="container">
    <p class="made-it">*Made with Nuxt</p>
    <div class="wrapper"></div>
    <nav>
      <div class="list-items">
        <a
          class="menu-item"
          href="https://github.com/romainniamor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span style="--index: 0">g</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">t</span>
            <span style="--index: 3">h</span>
            <span style="--index: 4">u</span>
            <span style="--index: 5">b</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">g</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">t</span>
            <span style="--index: 3">h</span>
            <span style="--index: 4">u</span>
            <span style="--index: 5">b</span>
          </div>
        </a>
        <a
          class="menu-item"
          href="https://www.linkedin.com/in/romain-navoret-559480274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <span style="--index: 0">l</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">n</span>
            <span style="--index: 3">k</span>
            <span style="--index: 4">e</span>
            <span style="--index: 5">d</span>
            <span style="--index: 6">i</span>
            <span style="--index: 7">n</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">l</span>
            <span style="--index: 1">i</span>
            <span style="--index: 2">n</span>
            <span style="--index: 3">k</span>
            <span style="--index: 4">e</span>
            <span style="--index: 5">d</span>
            <span style="--index: 6">i</span>
            <span style="--index: 7">n</span>
          </div>
        </a>
      </div>
      <div class="langages">
        <button
          @click="switchLanguage('french')"
          :class="{ active: activeLang === 'french' }"
        >
          FR
        </button>
        <button
          @click="switchLanguage('english')"
          :class="{ active: activeLang === 'english' }"
        >
          EN
        </button>
      </div>
      <p>/2023&copy;</p>
    </nav>
    <div class="content">
      <div class="left">
        <h1>romain navoret</h1>
        <div class="header-mask"></div>

        <div class="content-mask">
          <p>{{ title }}</p>
        </div>
      </div>
      <div class="right">
        <div class="index-list">
          <h2><NuxtLink to="/about/">about</NuxtLink></h2>
          <h2><NuxtLink to="/works/">works</NuxtLink></h2>
          <h2><NuxtLink to="/contact/">contact</NuxtLink></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import { ref, computed } from "vue";
import { useDataStore } from "~/store/dataStore";

const store = useDataStore();

const activeLang = ref(store.language);

const title = computed(() => store.texts[store.language].title);

//modif de l etat du bouton et appel setLanguage pour maj du localStorage
function switchLanguage(choice) {
  activeLang.value = choice;
  store.setLanguage(choice);
}

onMounted(() => {
  const tl = gsap.timeline();
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".left h1", { transform: "translateY(75px)" });

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  })
    .to(
      ".index-list",
      {
        duration: 0.3,
        y: 0,
        filter: "blur(0px)",
        ease: "Power4.easeOut",
      },
      "-=.2"
    )
    .to(
      ".left h1",
      {
        y: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "-=.1"
    );
});

// watcher pour maj de l'état du bouton
watch(
  () => store.language,
  (newLanguage) => {
    activeLang.value = newLanguage;
  }
);
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--secondary);
  color: var(--primary);
}

nav {
  background: var(--secondary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 10;
}

a,
a span,
link {
  color: var(--primary);
}

.content {
  display: flex;
  gap: 4vw;
  padding: 10rem;
  width: 100%;
  height: 100%;
}
.content .left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.content-mask {
  z-index: 3;
  padding: 3rem 0;
}

.left h1 {
  font-size: clamp(2.5rem, 2.7rem, 3.2rem);
  transform: translateY(7.5em);
  text-transform: uppercase;
  font-family: "kionaregular";
  font-weight: 800;
}
.left p {
  font-size: clamp(1.6rem, 1.8rem, 2rem);
  background: var(--secondary);
  line-height: 2;
  padding: 0 1vw 2rem 0;
  z-index: 1;
}

.content .right {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "kionaregular";
}

.index-list {
  transform: translateY(5rem);
  filter: blur(1rem);
}

.index-list h2 {
  margin-bottom: -2rem; /* Ajustez cette valeur selon vos besoins */
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 12vw;
}

.index-list h2:hover {
  transform: skewX(-10deg) translateX(20px);
}

.made-it {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0.3rem;
  font-size: 1.3rem;
  font-family: "kionaregular", sans-serif;
}

@media screen and (max-width: 1025px) {
  .content {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    padding: 5rem 5rem 5rem 10rem;
  }

  .content-mask {
    width: 70vw;
  }

  .content .right {
    justify-content: flex-start;
    flex: 0;
  }

  .content .left {
    flex: 1;
  }
}

@media screen and (max-width: 768px) {
  .content {
    padding: 3rem;
  }
  .left h1 {
    transform: translateY(7em);
  }

  .content .right {
    justify-content: flex-start;
    flex: 1;
  }

  .index-list h2 {
    margin-bottom: 0;
    font-size: 16vw;
  }
}

@media screen and (max-width: 900px) and (orientation: landscape) {
  .container {
    overflow-y: scroll;
    height: auto;
    padding: 15rem 0 8rem 0;
  }
}
</style>
