<template>
    <div>
        <div class="head">
            <h2>{{ showWhichClass(this.$route.params.id) }}</h2>
            <h1>Welcome to the world of {{ this.$route.params.id }}</h1>
            <router-link :to="{path: `/`}">Back</router-link>
        </div>
        <div class="">
            <form action="" @submit.prevent="addLesson(klas)">
                <div class="labelInput">
                    <div>
                        <label for="newLesson">New Lesson</label> <br>
                        <input type="text" id="newLesson" v-model="newLesson.name">
                    </div>
                    <div>
                        <label for="newDate">Date</label> <br>
                        <input type="date"  id="newDate" v-model="newLesson.date">
                    </div>
                    <button class="addLesson">Add</button>
                </div> 
            </form>
            <div class="lessonAndStudents">
                <div class="listOfLessons">
                    <h3>Lessons</h3>
                    <div
                        v-for="(lesson, index) in klas"
                        class="lesson"
                        @click="open(index)"
                        >
                        <p>{{ index+1 }}. {{lesson.lessonName}}</p>
                    </div>
                </div>  
                <div 
                class="marks"
                >
                    <div class="mark-big">
                        <p v-if="klas[lesson_id]">
                            Date: {{ klas[lesson_id].lessonDate }}
                        </p>
                        <div 
                            class="student"
                            v-for="(student, ind) in studentlar"
                            :key="ind"
                        >
                            <p class='studentName'>
                                <router-link 
                                    @click="sendToCabinet(student)"
                                    :to="{
                                        path: `/Cabinet/${student.fullname}`}"
                                >
                                    {{ind+1}}. 
                                    {{student.fullname}}
                                </router-link>
                            </p>
                            <p class="mark">
                                <p 
                                v-if="student.marks[subject][lesson_id]"
                                v-for="mark in student.marks[subject][lesson_id]">
                                    {{mark}}
                                </p>
                            </p>
                            <p class="putMark">
                                <put-mark
                                    :student="student"
                                    :lesson_id="lesson_id"
                                    :subject="subject"
                                >
                                </put-mark>
                            </p>
                        </div>
                        <button 
                            @click="save()"
                            class="save-btn"
                        >
                        Save to localStorage</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import putMark from './putMark.vue'
    export default {
        props: ['students', 'subjects'],
        components:{
            putMark
        },
        data(){
            return{
                newLesson: {
                    name: '',
                    date: '',
                },
                klas: '',
                studentlar:JSON.parse(localStorage.getItem('students')) ?? this.students,
                lesson_id: '',
                newMark: '',
                subject: '',
            }
        },
        methods:{
            addLesson(elem){ 
                if(this.newLesson.name != '' && this.newLesson.date != ''){
                    elem.push({
                        lessonName: this.newLesson.name, 
                        lessonDate: this.newLesson.date
                    })
                    this.newLesson = {};
                }
                else alert('Please, fill in the inputs')      
            },
            open(index){
                document.querySelector('.marks').classList.toggle('show');
                this.lesson_id = index;
            },
            showWhichClass(elem){
                if(elem == 'mathematics') {
                    this.subject = 'mathematics';
                    this.klas = JSON.parse(localStorage.getItem('mathematics')) ?? this.subjects.mathematics;
                }
                else if(elem == 'history'){
                    this.subject = 'history';
                    this.klas = JSON.parse(localStorage.getItem('history')) ?? this.subjects.history ;
                }
                else {
                    this.subject = 'biology';
                    this.klas = JSON.parse(localStorage.getItem('biology')) ?? this.subjects.biology;
                }
            },
            save(){
                localStorage.setItem(this.subject, JSON.stringify(this.klas))
                localStorage.setItem('students', JSON.stringify(this.studentlar))
            },
            sendToCabinet(student){
                localStorage.setItem('studentData', JSON.stringify(student))
            }
        },
    }
</script>
<style>
p{
    margin: 0;
    padding: 0;
}
.head{
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.head a, .addLesson{
    background: rgb(112, 131, 218);
    color: white;
    padding: 10px;
    border-radius: 1ch;
    font-size: 1.03em;
}
.labelInput{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    gap: 10px;
}
.labelInput input{
    padding: 7px;
    font-size: 1.05em;
    border: 3px solid rgb(112, 131, 218);
    width: 100%;
}
.listOfLessons{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.lesson{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    border: 2px solid white;
    border-radius: .5ch;
    font-size: 1.2em;
    cursor: pointer;
    color: black;
    background-color: white;
}
.marks{
    display: none;
    margin-block: 40px;
    padding-inline: 45px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.05em;
}
.show{
    display: block;
}
.student{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    border: 2px solid black;
    padding: 10px;
    margin: 5px;
}
.studentName{
    padding-block: 5px;
    margin-block: 5px;
}
.studentName a{
    font-size: 1.05em;
    color: black;
}
.mark{
    display: flex;
    gap: 3px;
    flex-wrap: wrap;
    width: 250px;
}
.lessonAndStudents{
    display: flex;
    align-items: flex-start;
}
.save-btn{
    background-color: rgb(127, 127, 236);
    color: white;
    font-size: 1.2em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 10px;
}
</style>