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
      <div class="about-me-title">
        <h1>About</h1>
      </div>

      <div class="about-me-content">
        <h2><i>Hey !</i> {{ about.title }}</h2>
        <div class="about-me-columns">
          <div class="left">
            <p>
              {{ about.text1 }}
            </p>
            <p>
              {{ about.text2 }}
            </p>
            <p>
              {{ about.text31 }}
              <a href="https://coder-pour-changer-de-vie.com/" target="_blank"
                ><i>Nicolas Georgemel </i></a
              >
              {{ about.text32 }}
            </p>
          </div>
          <div class="right">
            <img src="~/assets/images/img.jpeg" alt="picture romain navoret" />
          </div>
        </div>

        <div class="skills">
          <h3>skills</h3>

          <div class="main-skills">
            <i class="devicon-vuejs-plain"></i>
            <i class="devicon-nuxtjs-plain"></i>
            <i class="devicon-django-plain colored"></i>
            <i class="devicon-postgresql-plain"></i>
          </div>
          <div class="secondary-skills">
            <h4>FRAMEWORKS CSS</h4>
            <p>SCSS / Bulma / Tailwind / Bootstrap</p>
            <h4>UNIT TESTING</h4>
            <p>Jest / Unittest</p>
            <h4>KNOWLEDGES</h4>
            <p>POO / Design Patterns / Virtual Box / Agile</p>
            <h4>DEVOPS</h4>
            <p>Docker Compose / Kubernetes</p>
            <h4>TOOLS</h4>
            <p>
              Pycharm / VsCode / Git / PgAdmin / PgModeler / Visual Paradigm /
              Docker Desktop / Postman
            </p>
          </div>
        </div>

        <div class="link-index">
          <div class="button-wrapper">
            <NuxtLink to="/works" class="menu-item">
              <div>
                <span style="--index: 0">m</span>
                <span style="--index: 1">y</span>
                <span style="--index: 2">&nbsp;</span>
                <span style="--index: 3">w</span>
                <span style="--index: 4">o</span>
                <span style="--index: 5">r</span>
                <span style="--index: 6">k</span>
              </div>
              <div class="hover-clone">
                <span style="--index: 0">m</span>
                <span style="--index: 1">y</span>
                <span style="--index: 2">&nbsp;</span>
                <span style="--index: 3">w</span>
                <span style="--index: 4">o</span>
                <span style="--index: 5">r</span>
                <span style="--index: 6">k</span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <p>
          {{ about.text4 }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import { useDataStore } from "~/store/dataStore";

const store = useDataStore();

const about = computed(() => store.texts[store.language].about);

onMounted(() => {
  gsap.set(".wrapper", { height: "100%" });
  gsap.set(".content h1", { transform: "translateY(250px)" });

  const tl = gsap.timeline();

  tl.to(".wrapper", {
    delay: 0.2,
    height: 0,
    duration: 0.5,
    ease: "Power2.easeIn",
  }).to(".content h1", {
    y: 0,
    duration: 1,
    ease: "power4.out",
  });
});
</script>

<style scoped>
@import "~/assets/css/main.css";

.container {
  background-color: var(--secondary);
  color: var(--primary);
  overflow: scroll;
}

.container::-webkit-scrollbar {
  display: none;
}

nav {
  background: var(--secondary);
}

a,
a span,
link {
  color: var(--primary);
}

.wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary);
  z-index: 10;
}

.content {
  display: flex;
  width: clamp(200px, 90%, 1450px);
  flex-direction: column;
  padding: 10% 0 10% 15%;
}

.about-me-title-wrapper {
  display: flex;
  position: relative;
}

.about-me-title {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 100%);
}

.content h1 {
  font-size: clamp(13em, 15vw, 20em);
  font-family: "kionaregular";
  position: relative;
  z-index: 1;
  line-height: 1;
  width: max-content;
}

.about-me-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 90%;
  padding-bottom: 4vw;
  z-index: 1;
}

.about-me-content h2 {
  font-size: clamp(4rem, 3vw, 6rem);
  font-weight: lighter;
  z-index: 1;
  margin-bottom: 3rem;
}

.about-me-columns {
  display: flex;
  gap: 5rem;
}

.about-me-columns .left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
.about-me-columns .right {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: clamp(7rem, 100%, 40rem);
  object-fit: cover;
}

.skills {
  margin-top: 5rem;
}

.about-me-content p,
.skills p {
  font-size: clamp(1.6rem, 1.8rem, 2.2rem);
  line-height: 2;
}

.link-index {
  display: flex;
  justify-content: center;
}

.skills h3 {
  font-size: clamp(1.9rem, 2.7rem, 3.2rem);
  font-weight: 100;
  text-transform: uppercase;
  position: relative;
  width: min-content;
}

.skills h3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.2rem;
  background: var(--primary);
  left: 0;
  bottom: 0;
}

.skills .main-skills {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: 6rem 0;
}
.skills .main-skills i {
  color: var(--primary);
  font-size: 8rem;
}

.secondary-skills {
  display: flex;
  flex-direction: column;
}

.skills h4 {
  font-size: 1.9rem;
  margin-top: 2rem;
  font-weight: 500;
}

.button-wrapper {
  width: min-content;
  max-width: 70%;
  padding: 1.8rem 6rem;
  background-color: var(--primary);
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.button-wrapper:hover {
  padding: 1.8rem 12rem;
  border-radius: 3rem;
}

.button-wrapper a span {
  color: var(--secondary);
  font-size: 2rem;
  font-weight: lighter;
  margin-right: 0.3rem;
}

@media screen and (max-width: 1025px) {
  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10% 0 10% 15%;
  }
  .about-me-columns {
    flex-direction: column;
    gap: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .about-me-content {
    padding-right: 0;
  }

  .about-me-content h2 {
    width: 80%;
  }

  .content {
    padding: 10rem 2rem;
  }

  .content h1 {
    font-size: clamp(4rem, 19vw, 15rem);
    padding: 3rem 0;
  }

  .about-me-content h2 {
    font-size: 5.9vw;
    font-size: clamp(2.3rem, 5.9vw, 5rem);
  }
}

@media screen and (max-width: 530px) {
  .content {
    width: 100%;
  }

  .about-me-content {
    width: 100%;
  }

  .skills .main-skills i {
    font-size: 6rem;
    gap: 2rem;
  }
}

@media screen and (max-width: 430px) {
  .skills .main-skills i {
    font-size: 5.5rem;
  }

  .about-me-content h2 {
    width: 100%;
  }
}
</style>
