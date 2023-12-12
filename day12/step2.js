/* p.160 */
/*

    아스키코드 : 2진수와 영어/특수문자 교환하는 방식/규칙
        100 0001 <------> A
        100 0002 <------> A
        100 0003 <------> A
        100 0004 <------> A

        'A''B''C''D'
        'ABCD'  ->  100 0001 , 100 0002 , 100 0003 , 100 0004 

        - 프로그래밍 언어들 마다 문자열 처리하는 방법*

    배열 
        - 여러 자료를 묶어서 활용할수 있는 특수한 자료
        - 형태
            - let 변수/상수명 = [ ]
        - 여러 개의 변수/자료 를 한 번에 선언해 다룰 수 있는 자료형 
            - [ ] 사용
            - 내부 값을 , 쉼표로 구분 
            - 내부 값을 요소[element]
        1. 배열 선언
            - let 변수/상수명 = [ 요소 , 요소 , 요소 ]
                - 요소란 ??? 배열내 들어간 자료 ( 1.숫자 2.불 3.문자열 4.배열 5.함수 6.객체)
        
        2. 배열 요소에 접근 
            - 인덱스 란 ??? 배열내 요소들이 저장된 순서번호 
                0부터 시작   ( 주의할점 length/size 는 1부터 시작  )
            - 형태
                변수명[인덱스]

        3. 배열 요소 개수 확인 
            배열.length

        4. 배열 뒷부분에 요소 추가하기 
            - 마지막 삽입
            배열.push( 추가할요소 );    

            - 중간(특정위치) 삽입
            배열.splice( 중간삽입할 요소의 인덱스위치 , 0 , 추가할 요소의 값 )

        5. 배열 요소 제거하기
            - 인덱스 이용한 삭제 
            배열.splice( 제거할 요소의 인덱스 , 제거할 요소의 개수 )
                - 배열.splice( 0 ) : 배열 요소 전체 삭제 

            - 값 이용한 삭제 
            배열.splice( 배열.indexOf( 값 ) , 1 )
        
        6. 배열내 특정 값의 위치 찾기
            배열.indexOf( 값 ); 
                - 배열내 동일한 값이 있으면 인덱스번호 반환 없으면 -1
             
    변수 : 하나의 자료을 저장하는 메모리 공간
    상수 : 하나의 자료을 저장하는 메모리 공간 ( 수정불가능 )
    배열 : 여러개의 자료을 묶어서 하나의 자료 [ ] 로 만들어주는 문법
                            
*/
const str = '안녕하세요';
console.log( str[2] ); // 하
console.log( str[ str.length-1 ] ); // 요 // str[str.length] : 오류발생(없는 인덱스라서)

// P.161
const array = [ 273 , 'String' , true , function(){} , { } , [ 273 , 10 ] ];
        // 가장큰 쇼핑백 = [ 273 , ['s','t','r','i','n','g'] , true , 함수(){} , { 객체 } , 배열 ]
        // 배열자료형 = [ 숫자자료형 , 배열자료형 , 불자료형 , 함수 , 객체 , 배열자료형 ]
console.log( array ); console.log( array[3] ); console.log( array[5] );
console.log( array[5][0] ); // 273
        //  array[5] => [273, 10][0] => 273

// p.162
const numbers = [ 273,52,103,32 ];
console.log( numbers[0] ) ; //273
console.log( numbers[1] ) ; //52
console.log( numbers[ 1+1 ] ) ; // 103
console.log( numbers[ 1*3 ] ) ; // 32

// p.163
console.log( numbers.length ); // 4
console.log( numbers[ numbers.length-1 ] ); // 32

// p.164
const todos = ['우유 구매' , '업무 메일 확인하기' , '필라테스 수업' ]
console.log( todos ); // 배열 호출 
//todos = '저녁 식사 준비하기';       // todos변수에 새로운 값을 수정 / 기존 배열 사라짐.
todos.push('저녁 식사 준비하기');   // push( ) : 배열내 요소 추가 
console.log( todos ); // 배열 호출 

todos[7] = '사과먹기'; // 의미없는 인덱스에 자료 대입  // 
console.log( todos ); // 배열 호출 // 

// p.166
const itemsA = ['사과','배','바나나'];
console.log( itemsA ); 

itemsA.splice( 2 , 1 ); // 2번인덱스부터 1개 삭제
console.log( itemsA );

//itemsA.splice( 0 );     // 삭제 개수 생략시 삭제할인덱스 뒤로 모두 삭제 
//console.log( itemsA );

// P.167 
const itemsB = ['사과','배','바나나'];
const index = itemsB.indexOf('바나나');
console.log( index );   // 2 
itemsB.splice( index , 1 ); // 2번 인덱스부터 1개 삭제 
console.log( itemsB );  // ['사과','배']

// p.168
const itemsD = ['사과','귤','바나나','오렌지']
itemsD.splice( 1 ,  0 , '양파' ); // 1번 인덱스에 삭제를 하지 않고 '양파'를 접합(splice)
console.log( itemsD ); // 대신에 1번 인덱스뒤로 한칸씩 물러남. [p.165 그림 참고]

itemsD.splice( itemsD.length , 0 , '수박'); // vs push() 동일 .
console.log( itemsD );

/*
    p.172 확인문제.
    1. "3" , "바나나" , 32
    2.  4 ,  array.push(5) --> 5 push이후의 배열길이 반환 => 5
    3. strA => 비파괴 , strB => 파괴  , strC => 비파괴 , strD => 비파괴
*/
const str11 = "사과/배/바나나/귤";
str11.split("/");  // [ '사과','배','바나나','귤'];
