
// 1.기존에 있는 자료를 select에 넣을때.
const productList = [ 
    { pno : 1 , pname : '떡볶이' , price : 3000 } , 
    { pno : 5 , pname : '순대' , price : 4000} ,  
    { pno : 7 , pname : '튀김' , price : 2000 } , 
];
const cart = [ ];
function 담기(){
    const selectBox = document.querySelector('#selectBox');
    const value = selectBox.value;
    cart.push( value  );
}

document.addEventListener( 'DOMContentLoaded' , function(){

    // 2. 어디에 무엇을 출력
    const selectBox = document.querySelector('#selectBox');
    let html =''; 
        for( let i = 0 ; i<productList.length ; i++ ){
            html += `<option value=${ productList[i].pno} >${ productList[i].pname }</option>`
        }
    selectBox.innerHTML = html;
    // textContent : 문자열 그자체. // innerHTML : 문자열 HTML형식

    
    // [p.343]
    // 1. 각 요소 객체로 호출  
    const select = document.querySelector('select');
    const p = document.querySelector('p');

    // 2. 요소의 이벤트[ change : value 값이 바뀔때마다] 등록 
    select.addEventListener( 'change' , function(event){
        console.log( event ); // change 이벤트 결과 정보 객체 
        console.log( event.currentTarget ); // change 이벤트를 발생시킨 요소
        console.log( event.currentTarget.options ); // select 하위 요소들/배열 반환
        console.log( event.currentTarget.options.selectedIndex ); // select 요소의 선택된 인덱스

        // [ 방법1 ]
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        p.textContent = `선택 : ${ options[index].textContent }`

        // [ 방법2 ]
        p.textContent = `선택 : ${ select.value }`;
    } ); // e end 

    // [ p.345 ]
    let 현재값;         // 입력받은 값을 저장 
    let 변환상수=10;    // 변환할 단위 의 계산식
    // 1. 각 요소의 객체 호출 
    const select3 = document.querySelector('select:nth-child(6)'); // select중에서 3번째[6]
        console.log( select3 );
    const input = document.querySelector('input');
    const span = document.querySelector('span');
    // 2. 계산 출력함수 ( 실행조건 : 1.select3 값 변경[change]되었을때 , 2.input 값을 입력[keyup]했을때)
    const calculate = function(){
        span.textContent = (현재값*변환상수).toFixed(2);//toFixed() : 소수점 자르기 함수[반올림]
    }
    // 3. select3 를 값을 change 했을때.
    select3.addEventListener('change' , function(event){ 
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        변환상수 = Number( options[index].value);
        // 변환상수 = Number( select3.value );
        
        calculate(); // 계산 및 출력 함수 실행 
    }); //  e end
    
    // 4. input의 값을 keyup 했을때
    input.addEventListener( 'keyup' , function(event){
        현재값 = Number( event.currentTarget.value );
        // 현재값 = Number( input.value );

        calculate(); // 계산 및 출력 함수 실행 
    }); // e end 

}); // e end 


