export default defineEventHandler (async (event) => {

    // handle query params
// const { name } = getQuery   (event)

//     // Handle post data
//     const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Ma1AhHvtAXYNIXW8wNcA2RFdg1o2KD85igDtCcuj')

    return data
    
})