<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { ref, computed, reactive } from "vue";

// const now = new Date()
// const nowStr = now.toLocaleTimeString()
// let timeStr = nowStr
// const timeStrRef = ref(nowStr)
// function changeTime():void {
//   const newTime = new Date()
//   const newTimeStr = newTime.toLocaleTimeString()
//   timeStr = newTimeStr
//   timeStrRef.value = newTimeStr
// }

// setInterval(changeTime,1000)

// const radiusInit = Math.round(Math.random() * 10)
// const PI = ref(3.14)
// const radius = ref(radiusInit)
// const data = reactive({
//   PI: 3.14,
//   radius: Math.round(Math.random() * 10),
// });
// const area = computed((): number => {
//   return data.radius * data.radius * data.PI;
// });

// setInterval((): void => {
//   data.radius = Math.round(Math.random() * 10);
// }, 1000);

// const url = ref('https://google.com')
// let activeBtn = ref(true)

// setInterval((): void => {
//      activeBtn.value = activeBtn.value ? false : true
//      console.log(activeBtn.value)
// }, 1000);

// const imgAttribute = ref({
//   src: '/images/logo.svg'
// })

//v-bindでimgのsrcに代入
// const imgSrc : {
//   src: string
// } = {
//   src: 'src/assets/logo.svg'
// }


// 色の変更
// const message = ref('こんにちは')
// let red = ref('red')
// const msgStyle = ref({
//   color: 'blue',
//   backgroundColor: 'black'
// })


//ボタンを押したら文字の色を変更してみた
// const styles = ref({
//   color: false
// })
// const clickBtn = () => {
//   styles.value.color = styles.value.color ? false : true
// }


//v-onについて
// const randValue = ref("まだです")
// const onBottunClick = ():void => {
//   const rand = Math.round(Math.random() * 10)
//   randValue.value = String(rand)
// }


//mouseイベントへの理解
// const mousePointerX = ref(0)
// const mousePointerY = ref(0)

// const onImgMouseMove = (e:MouseEvent) :void => {
//   mousePointerX.value = e.offsetX
//   mousePointerY.value = e.offsetY
//   console.log(mousePointerX.value)
//   console.log(mousePointerY.value)
// }

// const stg = ref("未送信")
// const onFormSubmit = (): void => {
//   stg.value = "送信済み"
// }


//v-modelの考え方(双方向データバインディング)
// const inputNameBind = ref("しんちゃん")
// const inputNameOn = ref("ななし")
// const onInputName = (e : Event) :void=> {
//   const ele = e.target as HTMLInputElement
//   inputNameOn.value = ele.value
// }

// const inputName2Way = ref("双方向")
// const onInputName2Way = (e:Event):void => {
//   const ele = e.target as HTMLInputElement
//   inputName2Way.value = ele.value
// }

// const isAgree = ref(false)
// const changeAgreeBtn = ():void => {
//   console.log(isAgree)
// }

</script>

<template>
  <main>
    <!-- <h3>現在時刻: {{ timeStr }}</h3>
    <h3>現在時刻(ref): {{ timeStrRef }}</h3> -->

    <!-- ディレクティブ系 -->
    <!-- <p>
      半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると{{ area }}
    </p>
    <a :href="url" target="_blank">googleへ</a>
    <button type="button" :disabled='activeBtn'>押してね</button> -->
    <!-- <img  @mousemove="onImgMouseMove" :="imgSrc"> -->
    <!-- <p :style="msgStyle">{{ message }}</p> -->
    <!-- <p :class="styles">こんにちは</p>
    <button type="button" @click="clickBtn">ボタンを押してね</button> -->
    <!-- <button type="button" @click="onBottunClick">{{randValue}}</button> -->
    <!-- <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" required>
      <button type="submit">送信</button>
    </form>
    <p>{{ stg }}</p> -->

    <!--- 双方向データバインディング　-->
    <!-- <section>
      <input type="text" :value="inputNameBind">
    </section>
    <section>
      <input type="text" v-on:input="onInputName2Way" v-bind:value="inputName2Way">
      <input type="text" v-model="inputNameOn">
      <p>{{inputName2Way}}</p>
      <p>{{inputNameOn}}</p>
    </section> -->
    <!-- <section>
      <label @change="changeAgreeBtn">
        <input type="checkbox" v-model="isAgree">同意する
      </label>
      <p>同意の結果{{ isAgree }}</p>
    </section> -->


    <!-- その他ディレクティブ系 -->
    

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.color{
  color: red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
