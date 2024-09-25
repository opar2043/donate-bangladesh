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
    // console.log(input2);
    
    let addMoney = textFuntion('.addMoney1');
    // console.log(addMoney);
    let decreaseMoney = textFuntion('.decreaseMoney');
    // console.log(decreaseMoney);
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
    // console.log(newDonateBalance);
    document.querySelector('.addMoney1').innerText = newDonateBalance;


    let newDecreaseMoney = decreaseMoney - input2 ;
    console.log(newDecreaseMoney);


    document.querySelector('.decreaseMoney').innerText = newDecreaseMoney ;


    
    // history section

    let historyArea = document.getElementById('historyArea');

    let mainDiv= document.createElement('div');
    // console.log(mainDiv);
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

    // console.log('object');
    let input3 = inputIdName('input3');
    // console.log(input3);
    
    let addMoney = textFuntion('.addMoney3');
    // console.log(addMoney);
    let decreaseMoney = textFuntion('.decreaseMoney');
    // console.log(decreaseMoney);
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
    // console.log(mainDiv);
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
    // document.getElementById('bigDiv').classList.remove('h-[50vh]')
})

document.getElementById('history').addEventListener('click',function(){

    let donation = showMainSection('historyArea');

    document.getElementById('history').classList.add('bg-indigo-600','text-white')
    document.getElementById('donation').classList.remove('bg-indigo-600','text-white')
    // document.getElementById('bigDiv').classList.remove('h-[50vh]');
   document.getElementById('another').classList.add('hidden');

})
       

// close modal
document.getElementById('close').addEventListener('click',function(){
    document.getElementById('modal').classList.add('hidden');
 })
 


//  problems obj

const problems = [
    {
        image: "https://cdn.pixabay.com/photo/2018/02/20/12/44/traffic-3164981_1280.png",
      problemName: "Flooding",
      shortDetails: "Severe seasonal floods due to heavy monsoon rains and river overflow.",
      year: "2020",
      sideEffect: "Loss of life, destruction of homes, agricultural damage, and infrastructure collapse."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Traffic_Jam_in_Dhaka.jpg",
      problemName: "Traffic Congestion",
      shortDetails: "Massive traffic jams in urban areas, especially in Dhaka.",
      year: "2023",
      sideEffect: "Increased air pollution, reduced productivity, mental stress, and time loss."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Brick_kiln_in_Narayanganj%2C_Bangladesh.jpg",
      problemName: "Air Pollution",
      shortDetails: "High levels of air pollution due to industrial emissions and vehicular exhaust.",
      year: "2022",
      sideEffect: "Respiratory diseases, reduced life expectancy, and environmental damage."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Day_laborers_in_Bangladesh.jpg",
      problemName: "Unemployment",
      shortDetails: "Rising unemployment rates due to population growth and limited job opportunities.we should be carefull about this",
      year: "2021",
      sideEffect: "Poverty, increased crime rates, and social instability."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Arsenic_filter_2.jpg",
      problemName: "Water Contamination",
      shortDetails: "Unsafe drinking water due to arsenic contamination and poor sanitation.",
      year: "2019",
      sideEffect: "Health issues such as arsenicosis, diarrhea, and cholera outbreaks."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bangladesh_power_outage.jpg",
      problemName: "Power Shortages",
      shortDetails: "Frequent power outages, especially in rural areas.",
      year: "2023",
      sideEffect: "Disrupted daily life, reduced industrial output, and reliance on costly alternatives like diesel generators."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/4/42/School_in_Bangladesh.jpg",
      problemName: "Education Inequality",
      shortDetails: "Lack of access to quality education, particularly in rural areas.",
      year: "2021",
      sideEffect: "Limited economic mobility, perpetuation of poverty, and high dropout rates."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Corruption_graffiti_in_Bangladesh.jpg",
      problemName: "Corruption",
      shortDetails: "Widespread corruption in public and private sectors.",
      year: "2022",
      sideEffect: "Economic inefficiency, lack of trust in government, and stunted development."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Corruption_graffiti_in_Bangladesh.jpg",
      problemName: "Scam Education",
      shortDetails: "Education in now a days like a busniess for getting money in a short time",
      year: "2022",
      sideEffect: "Economic inefficiency, lack of trust in government, and stunted development."
    }
  ];
  


  function banglaProblems(){
    for(let problem of problems){
       let pblmDiv =document.getElementById('problemDiv') ;
       let div = document.createElement('div');
        
        console.log(problem);

        div.innerHTML = `
             <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-xl my-5 p-1 border-2 border-indigo-600">
                    <div class="md:flex">
                      <div class="p-2">
                        <h2 class="text-2xl font-bold text-indigo-600">${problem.problemName}</h2>
                        <h3 class="text-lg font-semibold text-gray-700">Year: ${problem.year}</h3>
                        <p class="mt-2 text-gray-600">${problem.shortDetails}</p>
                        <div class="mt-4">
                            <h3 class="text-sm font-bold">Side Effect</h3>
                          <p class="text-gray-600 text-sm">${problem.sideEffect}</p>
                          <button class="read mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
        `
      pblmDiv.append(div);

      }
  }
  banglaProblems()

  let count = 0;
  function calling(){
      let read = document.querySelector('.read');
      
  }