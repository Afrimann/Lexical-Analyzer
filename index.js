// declare all variables
const contactBtn = document.getElementById('navBtn')
const analyzeBtn = document.getElementById('analyzeBtn')
const backToHome = document.getElementById('goHomebtn')
const fInput = document.getElementById('input1')
const lInput = document.getElementById('input2')
const form = document.getElementById('form')

let basket = []
analyzeBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const lexicalAnalyzer = () =>{
        let searchDb = basket.find((y)=> y.name === fInput.value)
        if (fInput.value.length != 0 && searchDb === undefined) {
            basket.push({
                name: fInput.value,
                matricNo: lInput.value
            })
            alert(`Success ${fInput.value} ${lInput.value}` )
            console.log('Data stored');
        }
        
        else{
            alert('You cannot fill the same data twice and likewise cannot leave this field blank')
        }
        console.log(basket);
        localStorage.setItem('loginData',JSON.stringify(basket))
    }
    lexicalAnalyzer()
})


// const 