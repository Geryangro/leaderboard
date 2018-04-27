<template>
  <div class="test">
    <input type="text" v-model="title"><br/>
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p>{{user.lastName}}</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button v-on:click="change">CHANGE</button>
    <br/>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <br/>
    <label>first Name:</label><input type="text" v-model="user.firstName">
    <br/>
    <label>Last Name:</label><input type="text" v-model="user.lastName">
    <h3>{{fullName}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        title: 'Hello World',
        user: {
          firstName: 'John',
          lastName: 'Doe',
        },
        showName: true,
        items: [
          {title:'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'}
        ]
      }
    },
    methods: {
      change: function(){
        alert('WHATSSSS UP');
      },
      pressKey: function(e){
        console.log(e.target.value);
      },
      enterHit: function(){
        console.log('you press enter');
      }
    },
    computed: {
      fullName: function(){
        return this.user.firstName+' '+this.user.lastName;
      }
    }
  }
</script>

<style scope>

</style>
