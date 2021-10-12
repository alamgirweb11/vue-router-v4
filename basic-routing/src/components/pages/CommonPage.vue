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
                 msg: 'Vue js Basic Routing.'
               }
        }
}
</script>

<style>

</style>