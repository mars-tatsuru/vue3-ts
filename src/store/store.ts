import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationType";
import * as ActionTypes from "./actinonTypes";

type TodoItem = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
};

// stateの型定義
type State = {
  todoItems: TodoItem[];
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({
  state: {
    todoItems: [
      {
        id: 1,
        title: "foo",
        content: "bar",
        completed: false,
      },
      {
        id: 2,
        title: "head",
        content: "ver",
        completed: true,
      },
    ],
  },
  mutations: {
    //関数を定義している
    [MutationTypes.ADD_TODO_ITEM](state, todoItem: TodoItem) {
      state.todoItems.push(todoItem);
    },
    [MutationTypes.INITIALIZE_TODO_ITEMS](store, todoItems: TodoItem[]) {
      store.todoItems = todoItems;
    },
  },
  // actions: {
  //   async [ActionTypes.INITIALIZE_TODO_ITEMS]({ commit }) {
  //     const todoItems = await fetchAllTodoItems(); // TodoItemsを取得するAPIコール
  //     commit(ActionTypes.INITIALIZE_TODO_ITEMS, todoItems);
  //   }
  // }
  getters: {
    completedTodoItems: (store) => {
      return store.todoItems.filter((todo) => todo.completed);
    },
  },
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
};
