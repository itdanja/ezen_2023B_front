/*
	함수형태
		1. 인수x 반환x 함수
			<선언>
			function 함수1(){ console.log('함수1 실행'); }
			<호출>
			함수1()
			<button onclick="함수1()" type="button">함수1실행</button>
		
		2. 인수O 반환X 함수 정의
		3. 인수O 반환O 함수 정의
		4. 인수X 반환O 함수 정의 
		
*/
// 1. 인수x 반환x 함수 정의  
function 함수1(){ console.log('함수1 실행'); }
함수1() // * JS에서의 함수 호출 [ JS실행시 최초 1번 함수실행 ]

// 2. 인수O =2개 , 반환X 함수 정의
function 함수2( x , y ){ console.log( x + y ) }
함수2( 3 , 5 );
함수2( '코카콜라 : ' , 3)

// 3. 인수o =2개 , 반환O 함수 정의
function 함수3( x , y ){ console.log( x + y ); return x+y }
let 결과 = 함수3( 3 , 5 ); console.log( '함수3 결과/리턴 : ' + 결과 )

// 4. 인수X , 반환O 함수 정의 
function 함수4( ){ return 3+8 ; } // 함수 강제 종료할경우 return [ 아래 코드 있더라도 ]
let 결과2 = 함수4(); console.log( '함수4 결과/리턴 : '+결과2);

// 5. 함수 정의시 기존 함수 호출  가능 
function 함수5(){ console.log('함수5실행시 함수1 실행'); 함수1(); }
함수5()














