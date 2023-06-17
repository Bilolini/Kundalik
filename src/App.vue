<script>
export default{
    components: {
    },
    data(){
    return{
        indexSubject : 0,
        subject: '',
        headerTitle: ['mathematics', 'history', 'biology'],
        subjects: {
          mathematics: [
          ],
          history: [],
          biology: [],
        },
        students: [
          {
            fullname: 'Abcde',
            marks: {
              mathematics: [],
              history: [],
              biology: [],
            },
          },
          {
            fullname: 'Fghij',
            marks: {
              mathematics: [],
              history: [],
              biology: [],
            },
          },
          {
            fullname: 'Klmnopq',
            marks: {
              mathematics: [],
              history: [],
              biology: [],
            },
          },
        ],
    }
  },
  methods:{
    subjectFind(elem){
        // console.log(elem)
        this.subject = elem;
        // console.log(this.subject)
        // console.log(this.subjects[this.subject])
        // return this.subjects[this.subject]
    },

  }
}
</script>

<template>
    <div>
        <header>
            <div class="links">
                <div 
                    class="link"
                    v-for="(item, index) in headerTitle"
                    :key="index"
                >
                    <router-link 
                        active-class="active" 
                        :to="{path: `/Klass/${item}`}"
                    >
                       {{item}} 
                    </router-link>
                </div>
            </div>
        </header>
        <main class="main">
            <router-view
                :students='students'
                :subjects='subjects'
            >
            </router-view>
        </main>
    </div>
</template>

<style>
.links{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    background-color: blue;
}
a{
    margin: 0;
    padding: 0;
    color: white;
    font-size: 1.2em;
    font-family: sans-serif;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
}
.link{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
}
.active{
    text-decoration-line: underline;
}
</style>