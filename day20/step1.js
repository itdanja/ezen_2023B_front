/*

    객체 : 속성과 메소드를 가질 수 있는 모든 것 
        형태
            객체 선언 : const object = { }
            객체내 속성(key와value)추가 : object.새로운속성명 = 값;
            객체내 속성의 값 호출 : object.속성명       vs          object['속성명']
            객체내 속성의 값 변경 : object.기존속성명 = 값;
        -배열도 객체 
        -함수도 객체 
        -  ( 숫자 , 불 , 문자열 ) 객체 아니다.
            1. 기본자료형 ---> 객체로 변환 (  객체 자료형 , 래핑 클래스 )
                - 왜?? 객체로 활용할려고 ( 속성/메소드를 사용하니까.--부가자료--부가기능 첨부 )
                
            2. 
                - new : 인스턴스(객체) 만들때 사용하는 키워드
                new Number( 숫자자료형 )
                new String( 문자자료형 )
                new Boolean( 불 자료형 )

            3. 문자열 타입[ 일시적 승급 ]
                - 속성을 추가는 할수 없지만. js만든 사람이 제공하는 속성은 사용이 가능하다.
                - Number.prototype.새로운속성명 = 값
*/

// p.257
const a = [ ] // [ ] 대괄호 사용 했으므로 배열 ( a상수에 배열 자료 저장 )
a.sample = 10; //  객체.새로운속성명 = 값;      // 객체에 속성추가
console.log( a.sample );
console.log( typeof a );    // typeof 상수/변수 ; 해당 상수/변수 저장된 자료의 타입 확인
console.log( Array.isArray(a) ) // Array.isArray( 상수/변수 ) : 해당 상수/변수에 자료가 배열 자료형인지 확인 

function b(){ }
b.sample = 10;
console.log( b.sample );
console.log( typeof b ); // *함수는 객체의 특성을 완벽하게 가지고 있음. [ js ]

// p.258
const c = 273
c.smaple = 10;              
console.log( c.sample );    // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할수 없다. 

const d = '안녕하세요'
d.sample = 10;
console.log( d.smaple );    // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할수 없다. 

const e = true;
e.sample = 10;
console.log( e.sample );    // undefined : 기본자료형[객체가 아니므로]은 속성을 추가할수 없다. 

// p.260
const f = new Number( 273 );
    console.log( f );       // 273[x]--->  { 273 }
f.sample = 10;
    console.log( f );       //  { 273 , sample: 10} // 객체는 키와값=속성
console.log( f.valueOf() ); //  273   객체명.valueOf();    // 속성이 아닌 값 추출.

const g = Number(273);
    console.log( g );       // [ 객체X ]

// p.261
console.log(  '안녕하세요'.length  );
console.log(  '안녕하세요'.anchor('aaa')  );    // 문자열 기본자료형도 .온점 메소드 사용가능하다.
console.log(  '안녕하세요'.bold('aaa')  );      

// p.263
Number.prototype.sample = 10;               
const i = 273;  // 숫자      => 숫자타입    
console.log( i.sample ); // 가능.????  10

const j = 100;  // 숫자     => 숫자타입 
console.log( j.sample ); // 가능.????  10

const i2 = new Number( 273 );
i2.sample2 = 10;            
console.log( i2.sample2 );               // 10

const j2 = new Number( 273 );       
console.log( j2.sample2 );               // undefined

// p.264
// Number.prototype.power = function ( n  ){ 
    // n 매개변수 함수호출시 ( ) 넣어주는 값
Number.prototype.power = function ( n = 2 ){  
    // n=2 매개변수 함수호출시 ( ) 넣어주는 값 (+만약에 매개변수가 없으면 초기값)
    console.log( `n : ${n}` );  //
    console.log( `this : ${ this.valueOf() }` );
    return this.valueOf() ** n
}
const a2 = 12;
console.log( a2.power() );      // n = 2 , this : 12 , return : 144 
console.log( a2.power(3) );     // n = 3 , this : 12 , return : 1728
console.log( a2.power(4) );     // n = 4 , this : 12 , return : 20736

// p.265
const h = '안녕하세요';
console.log( h.indexOf('안녕') );   // 0 :문자열내 '안녕'이 존재하면 앞문자의 인덱스로 추출.
console.log( h.indexOf('하세') );   // 2 :
console.log( h.indexOf('자바') );   // -1 
    // vs 
//console.log( h.contain('안녕') );   // contain is not a function [ contain() 메소드 없다 ]

// js가 편의성으로 제공하면 좋은데 없으니까 내가 만들자.
String.prototype.contain = function( data ){
    return this.indexOf( data ) >= 0;   // 0이상이면 true , 아니면 false
                                        // 인덱스가 존재하면 true 존재하지 않으면 false 
}; 
console.log( h.contain('안녕') );










