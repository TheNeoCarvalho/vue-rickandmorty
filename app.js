const MyApp = {
  data() {
    return {
      name: "",
      personagens: [],
      url: "https://rickandmortyapi.com/api/character",
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => (this.personagens = data.results));
  },
  methods: {
    search() {
      fetch(`${this.url}?name=${this.name}`)
        .then((response) => response.json())
        .then((data) => (this.personagens = data.results));
    },
  },
};

Vue.createApp(MyApp).mount("#app");
