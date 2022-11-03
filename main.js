const form = document.querySelector('form#formNums')
form.addEventListener('submit',function fun(e){
    e.preventDefault()
    const nums = document.querySelectorAll('input')
    alert(nums[0].value < nums[1].value ? "tudo correto" : "algo deu errado")

})