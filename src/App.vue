<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Auth from "./components/Auth.vue";
import { ref, computed, reactive, onMounted, onBeforeMount,onBeforeUpdate,onUpdated,onRenderTracked,onRenderTriggered,provide } from "vue";
import { defineComponent } from "@vue/runtime-core";
import { useStore } from "@/store/store";
import * as MutationTypes from "./store/mutationType";
import * as ActionTypes from "./store/actinonTypes"
import type { DebuggerEvent } from "vue";

const store = useStore();

// const todoItems = computed(() => store.state.todoItems);

const form = reactive({
  title: "",
  content: ""
});

const clearForm = () => {
  form.title = "";
  form.content = "";
};

const onSubmit = () => {
  store.commit(MutationTypes.ADD_TODO_ITEM, {
    id: Math.floor(Math.random() * 100000), // 仮でランダムなIDを設定
    content: form.content,
    title: form.title
  });
  // console.log(store.state)
  clearForm();
};

const todoItems = computed(() => store.state.todoItems);
// console.log(todoItems)

// onMounted(async () => {
//   await store.dispatch(ActionTypes.INITIALIZE_TODO_ITEMS)
// })

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

//連想配列のv-for
// const arr:{[key:number]: string} =  {
//   1235: "a",
//   2345: "b",
//   3455: "c",
// }

// const arr = new Map<number,string>()
// arr.set(1,"a")

// const refArr = ref(arr)

// const obj:{
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: 'tatsu'
// }

// const refObj = ref(obj)


// watch,watchEffectの学習
// interface usersTail {
//   id: number,
//   name: string
// }

// const userListInit:usersTail[] = [
//   {id: 1, name:"name1"},
//   {id: 2, name:"name2"},
//   {id: 3, name:"name3"},
//   {id: 4, name:"name4"},
//   {id: 8, name:"name5"}
// ]

// const userList = ref(userListInit)

// const idUper = computed((): usersTail[] => {
//   const newList = userList.value.filter((userTailItem: usersTail):boolean => {
//     return userTailItem.id > 1
//   })
//   return newList
// })


//　ライフサイクルの確認
// const heightInit = Math.round(Math.random() * 10)
// const widthInit = Math.round(Math.random() * 10)
// const height = ref(heightInit)
// const width = ref(widthInit)


// const area = computed(():number => {
//   return height.value * width.value
// })

// const change = ():void => {
//   height.value = Math.round(Math.random() * 10)
//   width.value = Math.round(Math.random() * 10)
// }

// onBeforeMount(():void => {
//   console.log(`beforemounted called: ${height.value} * ${width.value}`)
// })

// onMounted(():void => {
//   console.log(`mounted called: ${height.value} * ${width.value}`)
// })

// onBeforeUpdate(():void => {
//   console.log(`beforeUpdated called: ${height.value} * ${width.value}`)
// })

// onUpdated(():void => {
//   console.log(`updated called: ${height.value} * ${width.value}`)
// })

// onRenderTracked(($event:DebuggerEvent):void => {
//   console.log(`renderTracked called: ${height.value} * ${width.value}`)
//   console.log($event)
// })

// onRenderTriggered(($event:DebuggerEvent):void => {
//   console.log(`renderTriggered called: ${height.value} * ${width.value}`)
//   console.log($event)
// })


// props
// const point = computed(():number => {
//   let total = 0
//   return total
// })

// emit
// const number = ref(0)
// const onCreateNew = ():void => {
//   number.value++
// }

const memberList = [
  {
    name: "user1",
    id: 1
  },
  {
    name: "user2",
    id: 2
  }
]

// string | number型のデータ
provide<string | number>("id", 2)
// number[]型のデータ
provide<number[]>("arr", [])
provide("memberList",reactive(memberList))

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
    <!-- <h1>{{todoItems}}</h1> -->
    <!-- <form>
      <label for="title">
        title
        <input type="text" id="title" v-model="form.title" />
      </label>
      <label for="content">
        content
        <input type="text" id="content" v-model="form.content" />
      </label>
      <input type="submit" value="submit" @click.prevent="onSubmit" />
    </form> -->

    <!-- <ul>
      <li v-for="(ele,id, index) in refArr"
      :key="ele+id"
      >
      {{index+1}}は{{id}} : {{ele}}
    </li>
    </ul> -->
    <!-- <template
    v-for="(value, key) in refObj"
    :key="key"
    >
    <dt>{{ key }}</dt>
    <dd>{{ value }}</dd>
    </template> -->

    <!-- wacth,watchEffect -->
    <!-- <h1>idが1のやつ</h1>
    <ul>
      <li
      v-for="item in idUper"
      >
      <p>id: {{ item.id }}</p>
     </li>
    </ul>
    <h2>全部</h2>
    <ul>
      <li
      v-for="item in userList"
      >
      <p>id: {{ item.id }}</p>
     </li>
    </ul> -->

    <!-- ライフサイクル -->





  </main>
  <!-- <div>
    <p>たてが{{height}}横が{{width}}長方形の面積は{{area}}</p>
    <button
    @click="change"
    >
      値を変える
    </button>
  </div> -->
  <HelloWorld
    msg="aaaaaa"
    name="aaaaa"
    :number="Number(2)"
  >
  </HelloWorld>
  <!-- <h1>{{ number }}</h1> -->
  <!-- <Auth
   :points = point
   @createnew = "onCreateNew"
  /> -->
  <Auth />
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
