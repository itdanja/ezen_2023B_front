
/*
    변수/상수 : 자료를 저장해서 호출을 여러번 가능[재활용].
    함수 : 코드를 저장해서 호출을 여러번 가능[재활용].
*/
console.log()
/* if문 연습문제 */
    /* prompt 대신에 input value 으로 입력받기 */
    /* 풀이 결과를 console.log 대신에 innerHTML 에 출력 */

    // 참고
    // 1. HTML 마크업 정보를 JS변수로 가져오는 함수.
        // document.querySelector( '마크업 또는 #id명 또는 .class명')
    // 2. .value 속성 값 가져오기
        // document.querySelector( '마크업 또는 #id명 또는 .class명').value 
    // 3. .innerHTML 속성 이용한 HTML에 출력 
        // document.querySelector( '마크업 또는 #id명 또는 .class명').innerHTML = '출력하고싶은 문자열'
// 문제1 : 3개 점수를 각input으로 입력받아 총점과 평균 span에 출력하시오.
    // - 함수선언
function 연습버튼을클릭했을때실행되는코드모음상자(){
    // 1.[입력]  // input에 입력받은 값 가져오기 [ ]
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;
    // 2.[처리]
    let sumValue =  Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;
    // 3.[출력]
    document.querySelector('#result').innerHTML 
                = ` 총점 : ${sumValue}점 평균:${ avgValue }점`;
} // f end [ 1번문제 함수 끝 ]

// 문제2 : 2개 정수를 입력받아 더 큰 수를 출력 
function 문제2함수(){
    // [입력]
    let value1 = Number( document.querySelector('#input1').value);
    let value2 = Number( document.querySelector('#input2').value );
    // [처리]
    let result = ""; // 결과변수[ if조건에 따른 실행코드 결과를 저장하는 변수]
        // 처음에는 빈문자열.
        // 1. 만약에 첫번째 수가 더 크면 결과변수에 첫번째 수를 저장 
    if( value1 > value2 ){ result = value1+"가 큽니다."; }
        // 2. 만약에 첫번째 수가 더 작으면 결과변수에 두번째 수를 저장 
    else if( value1 < value2 ){ result = value2+"가 큽니다."; }
        // 3. 그외는 결과변수에 같다는 의미를 저장 
    else{ result ="두수는 같다." }
    // [출력]
    document.querySelector('#result').innerHTML = `${ result }`
} // f end  [ 2번문제 함수 끝 ]


// console.log('안녕'); // 코드!! .js가 실행되면서 1번 실행 --> 이 코드를 여러번 실행?? --> 식별자 만들어서 식별자 호출
/*
function 안녕함수(){ // f start 
    console.log('안녕'); // .js가 실행되면서 0번 실행[??? ]식별자를 호출할때 실행[매번]
} // f end 
*/

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    // [입력]
    let value1 = Number(document.querySelector('#input1').value);   console.log(value1);
    let value2 = Number(document.querySelector('#input2').value);   console.log(value2);
    let value3 = Number(document.querySelector('#input3').value);   console.log(value3);
    // [처리]
    let max = value1; // 첫번째 값을 가장 크다고 가정.
    // 만약에 max의 값보다 value2의 값이 더 크면 max에 value2 값을 대입/수정
    if( max < value2 ){ max = value2; }
    if( max < value3 ){ max = value3; } // 위에 조건을 충족해도 현재 조건도 검사를 해야 하므로 else if 안씀.
    // [출력]
    document.querySelector('#result').innerHTML = `${ max }`
} // f end  [ 3번문제 함수 끝 ]

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){ // f start 
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);  
    //[처리]
    let result = '';
    if( value1 >= 90 ){ result = '합격'; }  // 만약에 입력받은 값이 90보다 이상이면 
    else{ result ="불합격";  }              // 90보다 미만이면
    //[출력]
    document.querySelector('#result').innerHTML = `${ result }`;
} // f end 

/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){ // f s     
    //[입력]
    let value1 = Number(document.querySelector('#input1').value);  
    //[처리]
    let result = '';
        // 처리 로직 
        if( value1 >= 90 ){ result = 'A등급'; }
        else if( value1 >= 80 ){ result = 'B등급';}
        else if( value1 >= 70 ){ result = 'C등급';}
        else{ result = '재시험'; }
    //[출력]
    document.querySelector('#result').innerHTML = `${ result }`;
} // f e 

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
             		회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/

//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 