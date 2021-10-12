<template>
   <h3 :class="textClasses">{{ msg }}</h3>
</template>

<script>
export default {
       data(){
            return{
                 textClasses:[
                     'text-center',
                      'text-success'
                 ],
                 msg: 'Welcome to home page.'
            }
       }
}
</script>

<style>

</style>