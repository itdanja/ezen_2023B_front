// 1. 등록 함수 : 실행조건 : 등록버튼을 클릭했을때
function 등록( ){ console.log('등록( )함수');
    // 1. 입력
    const mid = document.querySelector('#mid').value;
    const mpw = document.querySelector('#mpw').value;
        console.log( mid ); console.log( mpw );
    // 2. 처리   // 1. { 아이디와 비밀번호 } 회원 으로 객체화
    const member = {
        mid : mid , 
        mpw : mpw 
    }; console.log( member );
        // 2. 객체를 배열에 저장 . 전역변수가 아닌. 브라우저에 저장.
        // localStorage 에 입력받은 객체를 저장한다. [ JSON.stringify(  ) : 객체를-->JSON형식의 문자열]
    
    const memberArray = JSON.parse( localStorage.getItem('memberArray') ) ;     // 기존 배열 호출
    memberArray.push( member ); // 방금 가입된 회원객체 배열에 추가 
    localStorage.setItem( 'memberArray' , JSON.stringify( memberArray )  );    
    // 3. 출력 [x]
    alert('회원가입 성공');
} // f end 
