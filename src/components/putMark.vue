<template>
        <form action="" @submit.prevent="putMark(student)">
            <input 
                type="number" 
                max="5" 
                min="0" 
                v-model="mark" 
                class="markInput"
            >
            <button type="submit">Put</button>
        </form>
</template>

<script>
    export default {
        data(){
            return{
                mark: ''
            }
        },
        props: ['student', 'lesson_id', 'subject'],
        methods: {
            putMark(student){
                if(this.mark){
                    student.marks[this.subject][this.lesson_id] 
                    ? 
                    student.marks[this.subject][this.lesson_id].push(this.mark)
                    :   
                    student.marks[this.subject].push([this.mark])  
                    this.mark = '';
                }
            }
        }
    }
</script>

<style>
.mark-input{
    border: 1px solid black;
    outline: none;
    padding: 10px;
    font-size: 1.05em;
    border-radius: 2px;
    margin-right: 10px;
}
</style>