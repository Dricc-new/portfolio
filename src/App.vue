<script setup lang="ts">
import { ref } from 'vue';
import History from './components/History.vue';
import HistoryItem from './components/HistoryItem.vue';
import ProyectItem from './components/ProyectItem.vue';
import Section from './components/Section.vue';
import Skill from './components/Skill.vue';

const proyects = [
  { name: "IDommerce" },
  { name: "DevCunt" },
  { name: "Contratarte" },
  { name: "Dengi" },
  { name: "PhotoIA" },
  { name: "SD Project" }
]

const menu = ref('')
window.onclick = (e: any) => {
  const { id } = e.target
  menu.value = id
}
</script>

<template>
  <div class="fixed top-2 right-2 md:right-4 p-1 z-50 rounded bg-[#202020a0]">
    <i id="toggle" v-if="menu != 'toggle'" class="fas fa-bars md:hidden text-xl p-1 px-3"></i>
    <menu :class="(menu == 'toggle') ? '' : 'max-md:hidden'"
      class="min-h-[36px] p-1 flex max-md:flex-col text-lg max-md:w-32 gap-2 md:gap-4">
      <a href="#Home">
        <li>Home</li>
      </a>
      <a href="#Experiense">
        <li>Experiense</li>
      </a>
      <a href="#Proyects">
        <li>Proyects</li>
      </a>
      <a href="#Skills">
        <li>Skills</li>
      </a>
      <a href="#ContactMe">
        <li>Contact Me</li>
      </a>
    </menu>
  </div>
  <div class="min-h-screen p-4" id="Home">
    <Section>
      <template #title></template>
      <div
        class="flex max-md:flex-col-reverse justify-center md:justify-between items-center h-screen relative before:absolute before:right-24 before:p-32 before:rounded-full before:bg-gradient-to-br before:from-sky-600 before:to-violet-600 before:blur-3xl after:absolute after:top-8 after:p-24 after:rounded-full after:bg-gradient-to-br after:from-emerald-400 after:to-sky-500 after:via-emerald-500 after:blur-3xl after:z-0">
        <div class="text-dark-50 z-10">
          <h1 class="text-6xl">Welcome</h1>
          <h2 class="text-lg">On this page I present my work, my dreams and my life.</h2>
          <div class="text-3xl flex py-4 gap-4">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-telegram"></i></a>
            <!-- <a href="#"><i class="fab fa-youtube"></i></a> -->
          </div>
        </div>
        <div
          class="relative md:grow flex justify-center after:p-16 after:bg-gradient-to-br after:blur-3xl after:from-fuchsia-600 after:to-white after:absolute">
          <img src="/profile.png" class="z-10 w-64 md:w-96 shadow-lg shadow-dark-800 rounded-full h-auto" alt="">
        </div>
      </div>
    </Section>
  </div>
  <div class="mb-24 p-2" id="Experiense">

    <Section>
      <template #title>Experiense</template>
      <History>
        <HistoryItem>
          <h1 class="text-xl italic mb-2">2020-2022: <strong class="bg-clip-text text-transparent bg-gradient-to-tr from-sky-400 to-green-500">Statistical</strong> in Artemisa Agricultural Company</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis soluta illum ab vero non! Dolor magni placeat, beatae aperiam pariatur optio exercitationem voluptatem fugiat eveniet sunt obcaecati libero! Reiciendis.</p>
        </HistoryItem>
        <HistoryItem>
          <h1 class="text-xl italic  mb-2">2022-Present: <strong class="bg-clip-text text-transparent bg-gradient-to-tr from-sky-400 to-green-500">IT Specialist</strong> in ARTRA</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quisquam magnam libero aperiam, itaque doloremque odit, dolorem optio dolore dolores rem quaerat error quod excepturi voluptates iste eos expedita necessitatibus.</p>
        </HistoryItem>
      </History>
    </Section>
  </div>
  <div class="mb-24 p-2" id="Proyects">
    <Section>
      <template #title>Proyects</template>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        <li v-for="item in proyects" :key="item.name" class="flex justify-center">
          <ProyectItem :name="item.name"></ProyectItem>
        </li>
      </ul>
      <div class="flex justify-center">
        <a href="#" class="btn-rounded-full">
          See more proyects
        </a>
      </div>
    </Section>
  </div>
  <div class="p-2 mb-48" id="Skills">
    <Section>
      <template #title>Skills</template>
      <div
        class="flex p-4 relative before:absolute before:p-2 before:w-full before:h-full before:-z-10 before:blur-3xl before:bg-gradient-to-br before:via-blue-500 before:from-emerald-400 before:to-violet-800">
        <ul class="flex justify-center flex-wrap gap-4">
          <Skill name="NestJS" icon="nestjs" />
          <Skill name="Laravel" icon="laravel" />
          <Skill name="Express" icon="express" />

          <Skill name="Vue" icon="vuejs" />
          <Skill name="React" icon="react" />
          <Skill name="Bootstrap" icon="bootstrap" />
          <Skill name="Tailwind" icon="tailwind" />

          <Skill name="MySQL" icon="mysql" />
          <Skill name="PostgreSQL" icon="postgresql" />
          <Skill name="Redis" icon="redis" />
          <Skill name="MongoDB" icon="mongodb" />
        </ul>
      </div>
    </Section>
  </div>

  <div class="w-full mb-9 relative p-2 " id="ContactMe">
    <Section>
      <template #title>Contact Me</template>
      <div class="flex justify-center items-center h-full">
        <form class="flex flex-col gap-4 max-w-[384px] w-full">
          <div class="flex flex-col gap-1">
            <label for="email">Email</label>
            <input class="rounded p-2 w-full bg-dark-700" id="email" name="email" type="text">
          </div>
          <div class="flex flex-col gap-1">
            <label for="name">Name</label>
            <input class="rounded p-2 w-full bg-dark-700" id="name" type="text">
          </div>
          <div class="flex flex-col gap-1">
            <label for="content">Message</label>
            <textarea class="rounded p-2 w-full h-52 bg-dark-700" id="content" type="text"></textarea>
          </div>
          <div class="flex justify-end rounded">
            <button class="btn-rounded-full-sm" type="submit">Send</button>
          </div>
        </form>
      </div>
    </Section>
  </div>
  <footer class="w-full p-2 bg-dark-950">
    <div class="container">
      <div class="flex justify-between">
        <div class="text-3xl flex gap-4">
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-telegram"></i></a>
          <!-- <a href="#"><i class="fab fa-youtube"></i></a> -->
        </div>
        <div class="flex items-center">
          <a href="#" class="bg-clip-text text-xl text-transparent bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500">Download CV <i class="fas fa-file-download"></i></a>
        </div>
      </div>
      <h1 class="text-center mt-4">Copyright 2023 by Dricc-new.</h1>
    </div>
  </footer>
</template>

