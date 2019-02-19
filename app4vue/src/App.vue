<template>
<div id="app4">
    <img src="./assets/logo.png">
    {{state}}
    <button @click="increment()">INCREMENT</button>
    <button @click="decrement()">DECREMENT</button>
    <button @click="localIncrement()">LOCAL INCREMENT</button>
    <button @click="localDecrement()">LOCAL DECREMENT</button>
    <br>
    <br>
    <br>
    {{count}}
    <button @click="add()">add</button>
    <p>content goes here</p>
    <router-link :to="{ name: 'test'}">test</router-link>
    <br>
    <router-link :to="{ name: 'test2'}">test2</router-link>
    <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app4',
    data() {
        return {
            state: {
                count: 0
            }
        }
    },
    components: {
        HelloWorld
    },
    computed: {
        count: function () {
            return this.$store.state.count
        }
    },
    mounted() {
        var self = this;

        self.state = self.props.store.getState(); //Initialization
        self.props.globalEventDistributor.subscribe( () => {
            self.state = self.props.store.getState();
        });
    },
    methods: {
        increment() {
            this.props.globalEventDistributor.dispatch({
                type: 'INCREMENT'
            });
        },
        decrement() {
            this.props.globalEventDistributor.dispatch({
                type: 'DECREMENT'
            });
        },
        localIncrement() {
            this.props.store.dispatch({
                type: 'INCREMENT'
            });
        },
        localDecrement() {
            this.props.store.dispatch({
                type: 'DECREMENT'
            });
        },
        add() {
            this.$store.commit('SET_COUNT')
        }
    }
}
</script>

<style>
#app4 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
