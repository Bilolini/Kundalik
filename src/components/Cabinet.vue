<template>
    <div>
        <div class="cabinet">
            <h2>{{ this.$route.params.studentId }}</h2>
            <div 
                class="student"
                v-for="(value, key) in studentData.marks"
            >
                <div class="studentName">{{key}}</div>
                <div class="mark">
                    <p v-for="marks of value">
                        <p v-for="mark of marks">{{mark}}</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                studentData: JSON.parse(localStorage.getItem('studentData')) ?? [],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>