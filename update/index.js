// Data demo
const listData = [
  {
    id: 1,
    name: "Hoang",
    homeTown: "Da nang",
    born: "24/03/2000",
  },
];

// Status
const data = {
  title: "",
  listData: [],
  countData: 0,
  isSeen: false,
};

// Configuration
const vueConfig = {
  el: "#app",
  data: data,
  // Methods
  methods: {},
};

// Freeze configuration
Object.freeze(vueConfig);

// Component
Vue.component("list-item", {
  template: "<li> hoang </li>",
});

// Create vue
const vue = new Vue(vueConfig);
