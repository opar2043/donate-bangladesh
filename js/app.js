// common function =========

function inputIdName(id){
    let inputName = document.getElementById(id).value;
    let myInputNum = parseFloat(inputName);
    return myInputNum;
}

function showMainSection(id){
    document.getElementById('donationArea').classList.add('hidden');
    document.getElementById('historyArea').classList.add('hidden');

   let donation = document.getElementById(id).classList.remove('hidden');
   return donation;
}

function textFuntion(id){
    let textvalue = document.querySelector(id).innerText;
    let textvalueNum = parseFloat(textvalue);
    return textvalueNum;
}




// main Function =========

// for btm -1
document.querySelector('.btn1').addEventListener('click',function(){
    let input1 = inputIdName('input1');
    
    let addMoney = textFuntion('.addMoney');
    let decreaseMoney = textFuntion('.decreaseMoney');
    let date = new Date();
    console.log(date);
    // console.log(input1 , addMoney);


    // validation

    if(input1 < 0 || input1 > decreaseMoney){
        alert('Invalid Amount');
        document.getElementById('input1').value = '';
        return;
    }

    if(isNaN(input1)){
        alert('Invalid Input');
        document.getElementById('input1').value = '';
        return;
    }

    document.getElementById('modal').classList.remove('hidden');

    // document.getElementById('my_modal_1').classList.remove('hidden');

    let newDonateBalance = addMoney + input1 ;
    document.querySelector('.addMoney').innerText = newDonateBalance;


    let newDecreaseMoney = decreaseMoney - input1 ;
    document.querySelector('.decreaseMoney').innerText = newDecreaseMoney;


    // history section

    let historyArea = document.getElementById('historyArea');

    

    let mainDiv= document.createElement('div');
    console.log(mainDiv);
    mainDiv.innerHTML = `
        <h3 class="font-bold text-lg"> ${input1} Taka is Donated For Famine-2024 at Feni,Bangladesh.</h3>
        <p class="text-sm">${date}</p>
    `
    mainDiv.classList.add('w-3/4', 'mx-auto', 'mt-8', 'md:p-5','p-3' ,'rounded-lg', 'shadow-md','border')
    document.querySelector('.h2').classList.add('hidden');
    
    historyArea.appendChild(mainDiv);

    document.getElementById('input1').value = '';
})

// for btn-2
document.querySelector('#btn2').addEventListener('click',function(){
    let input2 = inputIdName('input2');
    console.log(input2);
    
    let addMoney = textFuntion('.addMoney1');
    console.log(addMoney);
    let decreaseMoney = textFuntion('.decreaseMoney');
    console.log(decreaseMoney);
    let date = new Date();
    

    // validation

    if(input2 < 0 || input2 > decreaseMoney){
        alert('Invalid Amount');
        document.getElementById('input2').value = '';
        return;
    }

    if(isNaN(input2)){
        alert('Invalid Amount');
        document.getElementById('input2').value = '';
        return;
    }

    document.getElementById('modal').classList.remove('hidden');

    // arithmeteic operation

    let newDonateBalance = addMoney + input2;
    console.log(newDonateBalance);
    document.querySelector('.addMoney1').innerText = newDonateBalance;


    let newDecreaseMoney = decreaseMoney - input2 ;
    console.log(newDecreaseMoney);


    document.querySelector('.decreaseMoney').innerText = newDecreaseMoney ;


    
    // history section

    let historyArea = document.getElementById('historyArea');

    let mainDiv= document.createElement('div');
    console.log(mainDiv);
    mainDiv.innerHTML = `
        <h3 class="font-bold text-lg"> ${input2} Taka is Donated For Relief Flood at Feni,Bangladesh.</h3>
        <p class="text-sm">${date}</p>
    `
    mainDiv.classList.add('w-3/4', 'mx-auto', 'mt-8', 'md:p-5','p-3' ,'rounded-lg', 'shadow-md','border')
    document.querySelector('.h2').classList.add('hidden');
    
    historyArea.appendChild(mainDiv);

    document.getElementById('input2').value = '';
})


// for btn-3
document.getElementById('btn3').addEventListener('click',function(){

    console.log('object');
    let input3 = inputIdName('input3');
    console.log(input3);
    
    let addMoney = textFuntion('.addMoney3');
    console.log(addMoney);
    let decreaseMoney = textFuntion('.decreaseMoney');
    console.log(decreaseMoney);
    let date = new Date();
    

    // validation

    if(input3 < 0 || input3 > decreaseMoney){
        alert('Invalid Amount');
        document.getElementById('input3').value = '';
        return;
    }

    if(isNaN(input3)){
        alert('Invalid Amount');
        document.getElementById('input3').value = '';
        return;
    }

    document.getElementById('modal').classList.remove('hidden');
    // arithmeteic operation

    let newDonateBalance = addMoney + input3;
    console.log(newDonateBalance);
    document.querySelector('.addMoney3').innerText = newDonateBalance;


    let newDecreaseMoney = decreaseMoney - input3 ;
    console.log(newDecreaseMoney);


    document.querySelector('.decreaseMoney').innerText = newDecreaseMoney ;

    
    // history section

    let historyArea = document.getElementById('historyArea');

    let mainDiv= document.createElement('div');
    console.log(mainDiv);
    mainDiv.innerHTML = `
        <h3 class="font-bold text-lg"> ${input3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p class="text-sm">${date}</p>
    `
    mainDiv.classList.add('w-3/4', 'mx-auto', 'mt-8', 'md:p-5','p-3' ,'rounded-lg', 'shadow-md','border');
    document.querySelector('.h2').classList.add('hidden');
    
    historyArea.appendChild(mainDiv);

    document.getElementById('input3').value = '';
})


// show a div area
document.getElementById('donation').addEventListener('click',function(){

    let donation = showMainSection('donationArea');

    document.getElementById('donation').classList.add('bg-indigo-600','text-white')
    document.getElementById('history').classList.remove('bg-indigo-600','text-white')
    document.getElementById('bigDiv').classList.remove('h-[100vh]')
})

document.getElementById('history').addEventListener('click',function(){

    let donation = showMainSection('historyArea');

    document.getElementById('history').classList.add('bg-indigo-600','text-white')
    document.getElementById('donation').classList.remove('bg-indigo-600','text-white')
    document.getElementById('bigDiv').classList.remove('h-[100vh]')
})

// blog section
document.getElementById('blog').addEventListener("click",function(){
    window.location.href = '/faq.html'
})
       

// close modal
document.getElementById('close').addEventListener('click',function(){
    document.getElementById('modal').classList.add('hidden');
 })
 