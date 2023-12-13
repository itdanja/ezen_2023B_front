
/*
	과제3 : 가계부 만들기 ( 과제3.HTML , 과제3.JS , 과제3.CSS )
		요구사항
			- 1.배열 3개 사용 ( 날짜배열 , 항목배열 , 금액배열 )
			- 2.함수 3개 이상 정의해서 구현 
			- 3.총합계는 계산해서 테이블 가장 하단에 출력하시오.
			- 4.해당 삭제 버튼 클릭시 해당 항목 제거 
			- 5. 출력시 숫자를 천단위 쉼표로 출력하시오. [ toLocaleString() 함수( 천단위쉼표가 있는 문자열로 변환)  ]
				- let 금액 = 1200000
				- 금액.toLocaleString( ) => '1,200,000'
			- 6. css 적절하게 적당히 꾸며서 제출해주세요.
		
		ex) 입력 예시 [ input 3개 사용 ]
			날짜 : <input type="date" />
			항목 : <input type="text" />
			금액 : <input type="text" />
		
		ex) 출력 예시 [ table 사용 ]
			날짜			항목		금액				비고
			2023-06-06	콜라		300			<button>삭제</button>
			2023-06-05	노트북	1,200,000	<button>삭제</button>
			2023-06-03	교통비	1,750		<button>삭제</button>
				-총합계-			1,202,050

	순서 (권장. 꼭 정답은 아님!)
	- 주요기능이 무엇인지 파악하기
		1. 등록
			- HTML 작성 : 입력박스 3개, 등록(추가) 버튼 생성
			- 이벤트
			  클릭이벤트 !! 버튼을 클릭했을때 입력받은 데이터를 저장하는 행동
			  구체적인 이벤트의 내용이 필요하다. -> 함수정의 ! 
				1. 등록 버튼을 클릭했을때 함수가 실행이되면서 input에 입력된 3개의 데이터를 모두 가져온다.
				2. 선택자(class, id 등)를 가져올 DOM객체 함수 작성
					document.getElementsByClassName("클래스명")
					document.querySelector(".클래스명")
				3. 입력값을 저장할 배열을 선언하고 받아온 .value를 저장
				4. 유효성 검사하기 (저장 전)
				5. 저장 후 input의 value를 초기화
		2. 출력
			- 출력 예상 HTML을 작성
			- 이벤트
				1. 언제 어디서 실행할지?
					1. 입장했을때 -> JS 열렸을때
					2. 등록했을때 -> 등록함수 안 push 밑에
					3. 삭제했을때 -> 
				2. 함수정의
					* 배열에 있는 값을 테이블에 출력 
						1. 테이블 마크업 객체로 호출	 
					 		- document.querySelector
						2. 테이블 안에 넣을 HTML 구성	
							- 반복문 FOR
						3. 테이블안에 구성된 HTML 넣기/대입 [ TABLE VALUE 없음 ]	 
							- innerHTML
		3. 삭제
			- 삭제버튼 HTML 에 만들기
			- 이벤트
				1. 언제 실행 할지 -> 삭제버튼을 클릭 했을때
				2. 함수정의
					1. 무엇을 삭제 할건지 인덱스 번호를 전달 받아야 한다.
						<button onclick="삭제(${삭제할인덱스번호})"> 삭제</button>
						function 삭제(삭제할인덱스번호){}

*/

console.log('스크립트 실행');



/* 배열 (전역으로) 선언하기. 함수 끝나고 사라지면 안되서! */
let 가계부_날짜 = [];
let 가계부_항목 = [];
let 가계부_금액 = [];

출력()

/* 추가하기 버튼을 눌렀을때 이벤트 */
function 추가(){ // 추가 버튼 함수 시작
	console.log('추가함수 실행');

	/* HTML 에서 받아오기 : 여기까지만 하면 마크업(HTML 특정태그) 전부가 변수가 되는것 */
	// document.getElementsByClassName("클래스명") < 이런 방법도 있음 ! 
	let dateInput = document.querySelector(".date")
	let itemInput = document.querySelector(".item")
	let priceInput = document.querySelector(".price")	
	
	/* 하지만 마크업 전부가 필요한게 아니라 입력값!!!만 필요함 그래서 .value만 따로 저장*/
	let date = dateInput.value; 	console.log(date); /* 입력값만 저장되는지 확인*/
	let item = itemInput.value; 	console.log(item);
	let price = priceInput.value; 	console.log(price);
	
	/* 유효성 검사 */
	if( date == '' || item == '' || price== '' ){
		alert ('미입력된 항목이 존재 합니다.');
		return; 
	}
	
	/* 배열에 저장하기 */
	가계부_날짜.push(date);	 		console.log(가계부_날짜); /* 배열에 추가 되었는지 확인하기 */
	가계부_항목.push(item); 	 		console.log(가계부_항목);
	가계부_금액.push(Number(price));	 console.log(가계부_금액);
	
	출력()
	
	/* 현재 입력된 값 초기화 */
	alert ('항목 추가가 성공되었습니다.')
	dateInput.value = ''
	itemInput.value = ''
	priceInput.value = ''
	
} // 추가 버튼 함수 끝
	
	
/* 안내 멘트 출력 */
function 출력(){ 
	console.log ('가계부 목록을 출력합니다.')
		
	/* 어디에 출력을 할건지 */
	let list_table = document.querySelector('.list_table')
	
	/* 테이블에 HTML 마크업 넣어주기 */
	// 그리고 무엇을 넣은건지 미리 선언
	let HTML = `<tr>
					<th>날짜</th>
					<th>항목</th>
					<th>금액</th>
					<th>비고</th>
				</tr>`;

				
	for ( let i = 0; i < 가계부_날짜.length ;  i++ ){
		HTML += `<tr>
					<td> ${ 가계부_날짜 [i]} </td>
					<td> ${ 가계부_항목 [i]} </td>
					<td> ${ 가계부_금액 [i].toLocaleString( )}원 </td>
					<td> <input onclick="삭제(${i})" type="button" value="삭제" /> </td>
				</tr>`;
		}
	// table 에 HTML 넣어주기 <table> </table>의 안에 !! 	
	list_table.innerHTML = HTML;
	
	/* 총합계를 계산하기! 금액배열안에 있는 값을 모두 더하기 */
	let 총합계 = 0;
	for( let i = 0 ; i < 가계부_금액.length ; i++ ){
		총합계 += 가계부_금액[i];
	}
	console.log ('총합계 : ' + 총합계); // 확인
	
	
	/* 총합계 출력하기 먼저 불러오고 해야함 !!!!*/
	let sumInput = document.querySelector(".sum")
	let HTML2 = `총합계 : ${총합계.toLocaleString( )}원`
	sumInput.innerHTML = HTML2;
	
}


function 삭제( i ){

	가계부_날짜.splice( i , 1)
	가계부_항목.splice( i , 1)
	가계부_금액.splice( i , 1)
	// 데이터를 삭제했어도 화면까지 업데이트를 자동으로 해주지 않음.
	// 화면이나 테이블 새로고침을 해야한다.
	출력()
}
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 