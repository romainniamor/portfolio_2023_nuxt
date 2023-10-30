<template>
  <div>
    <nav>
      <div class="list-items">
        <NuxtLink to="/works/" class="menu-item">
          <div>
            <span style="--index: 0">b</span>
            <span style="--index: 1">a</span>
            <span style="--index: 2">c</span>
            <span style="--index: 3">k</span>
          </div>
          <div class="hover-clone">
            <span style="--index: 0">b</span>
            <span style="--index: 1">a</span>
            <span style="--index: 2">c</span>
            <span style="--index: 3">k</span>
          </div>
        </NuxtLink>
      </div>
    </nav>
    <div class="selected-project">
      <div class="header">
        <div class="title-wrapper">
          <h1 class="work-title">{{ project.title }}</h1>
        </div>
        <div class="work-presentation">
          <div class="subtitle">
            <h2>
              {{ project.subtitle }}
            </h2>
          </div>

          <div v-if="project && project.skills" class="skills">
            <div v-if="project.skills.front.length" class="skill-box">
              <h3>frontend</h3>
              <ul v-for="frontSkill in project.skills.front" :key="frontSkill">
                <li>
                  {{ frontSkill }}
                </li>
              </ul>
            </div>
            <div v-if="project.skills.back.length" class="skill-box">
              <h3>backend</h3>
              <ul v-for="backSkill in project.skills.back" :key="backSkill">
                <li>
                  {{ backSkill }}
                </li>
              </ul>
            </div>

            <div v-if="project.skills.server.length" class="skill-box">
              <h3>server</h3>
              <ul
                v-for="serverSkill in project.skills.server"
                :key="serverSkill"
              >
                <li>
                  {{ serverSkill }}
                </li>
              </ul>
            </div>
          </div>
          <div class="wrapper-bg">
            <img
              :src="project.image_bg"
              alt="project-picture"
              class="work-image-bg"
            />
          </div>
          <div class="description">
            <p v-for="paragraph in project.description" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <div class="wrapper-overlay">
            <img
              :src="project.image_1"
              alt="project-picture"
              class="work-image-overlay overlay-1"
            />
            <div class="overlays">
              <img
                :src="project.image_2"
                alt="project-picture"
                class="work-image-overlay overlay-2"
              />
              <img
                :src="project.image_3"
                alt="project-picture"
                class="work-image-overlay overlay-3"
              />
            </div>
          </div>
          <div class="video-wrapper">
            <video :src="project.video" autoplay loop muted playsinline></video>

            <div class="button-wrapper">
              <a
                href="https://github.com/romainniamor"
                target="_blank"
                class="menu-item"
              >
                <div>
                  <span style="--index: 0">c</span>
                  <span style="--index: 1">h</span>
                  <span style="--index: 2">e</span>
                  <span style="--index: 3">c</span>
                  <span style="--index: 4">k</span>
                  <span style="--index: 5">&nbsp;</span>
                  <span style="--index: 6">m</span>
                  <span style="--index: 7">y</span>
                  <span style="--index: 8">&nbsp;</span>
                  <span style="--index: 9">g</span>
                  <span style="--index: 10">i</span>
                  <span style="--index: 11">t</span>
                  <span style="--index: 12">h</span>
                  <span style="--index: 13">u</span>
                  <span style="--index: 14">b</span>
                </div>
                <div class="hover-clone">
                  <span style="--index: 0">c</span>
                  <span style="--index: 1">h</span>
                  <span style="--index: 2">e</span>
                  <span style="--index: 3">c</span>
                  <span style="--index: 4">k</span>
                  <span style="--index: 5">&nbsp;</span>
                  <span style="--index: 6">m</span>
                  <span style="--index: 7">y</span>
                  <span style="--index: 8">&nbsp;</span>
                  <span style="--index: 9">g</span>
                  <span style="--index: 10">i</span>
                  <span style="--index: 11">t</span>
                  <span style="--index: 12">h</span>
                  <span style="--index: 13">u</span>
                  <span style="--index: 14">b</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useDataStore } from "~/store/dataStore";
import { useRoute } from "vue-router";
import { useRouter } from "#vue-router";

const route = useRoute();
const projectId = parseInt(route.params.id, 10);
const store = useDataStore();

const project = ref("");

const router = useRouter();

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  project.value = store.getProjectById(projectId, store.language);

  if (!project.value) {
    router.push("/");
  }

  gsap.to(".work-title", {
    delay: 0.2,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });
});
</script>

<style scoped>
a,
a span,
link {
  outline: none;
  text-decoration: none;
  color: var(--primary);
}

.selected-project {
  width: 100vw;
  height: auto;

  background: var(--secondary);
}

.selected-project::-webkit-scrollbar {
  display: none;
}

nav {
  background: var(--secondary);
}

.header {
  width: 100%;
  padding: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vw;
}

.title-wrapper {
  width: 100%;
  line-height: 1;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.work-title {
  font-size: clamp(3rem, 12vw, 25rem);
  color: var(--secondary);
  transform: translateY(100%);
  font-family: "kionaregular";
}

.work-presentation {
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  z-index: 1;
  background: var(--secondary);
  width: 100%;
}

.subtitle {
  width: 100%;
  display: flex;
  justify-content: right;
  margin: 5rem 0;
}

.subtitle h2 {
  font-size: clamp(1.8rem, 2vw, 5rem);
  width: 70%;
  font-family: "kionaregular";
  line-height: 1.5;
  text-align: right;
}

.skills {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: right;
  gap: clamp(1.8rem, 10vw, 10rem);
  margin: 5rem 0;
}

.skills h3 {
  font-size: clamp(1.6rem, 1.8vw, 3rem);
  font-weight: 100;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 2rem;
  width: min-content;
}

.skills h3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--primary);
  left: 0;
  bottom: 0;
}

.skills ul {
  font-size: clamp(1.5rem, 1.6vw, 1.9rem);
  list-style: none;
}

.skills ul li {
  line-height: 1.7;
}

.wrapper-bg {
  width: 100%;
  margin: 5rem 0;
}

.work-image-bg {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 3px 5px 15px 5px rgba(141, 141, 141, 0.5);
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: 2;
  padding: 5em;
  margin: 5rem 0;
}

.description p {
  margin: 1em 0;
  width: clamp(450px, 60%, 800px);
  font-size: clamp(1.6rem, 1.8rem, 2rem);
}

.wrapper-overlay {
  width: 100%;
  position: relative;
}
.work-image-overlay {
  width: 70%;
}
.overlay-1 {
  width: 90%;
  border-radius: 1rem;
  z-index: 1;
  box-shadow: 3px 5px 15px 5px rgba(141, 141, 141, 0.5);
}

.overlay-2 {
  width: 65%;
  border: 0.5rem solid #ffffff;
  z-index: 3;
  margin: 5rem;
  bottom: 0;
  left: 5%;
  box-shadow: 3px 5px 15px 5px rgba(141, 141, 141, 0.5);
}
.overlay-3 {
  width: 45%;
  border: 0.5rem solid #ffffff;
  z-index: 2;
  position: absolute;
  bottom: 0%;
  right: 0;
}

.video-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

video {
  width: 90%;
  border-radius: 0.5rem;
  margin: 2em;
  z-index: 1;
}

.button-wrapper {
  margin-top: 8rem;
  padding: 1.8rem 6rem;
  background-color: var(--primary);
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
  font-size: 2.3rem;
  font-weight: lighter;
  margin-right: 0rem;
}

@media screen and (max-width: 768px) {
  .selected-project {
    padding-top: 6rem;
  }

  .image-section {
    width: 100%;
    padding: 5rem 0em 0 0;
  }
  .description {
    padding: 2em;
  }
  .description p {
    width: 80%;
  }
  video {
    width: 100%;
    border-radius: 0px;
  }
}

@media screen and (max-width: 530px) {
  .header {
    padding: 5vw;
  }
  .skills {
    justify-content: center;
    gap: clamp(2rem, 10vw, 10rem);
    padding: 0;
  }

  .skills ul li {
    line-height: 1.5;
  }

  .description {
    padding: 2rem;
  }

  .description p {
    width: 100%;
  }

  .button-wrapper {
    padding: 2rem 3.5rem;
  }
  .button-wrapper a span {
    font-size: 1.8rem;
    margin-right: 0.2rem;
  }
}

@media screen and (max-width: 430px) {
  .subtitle h2 {
    width: 100%;
  }
}
</style>
