// [1] 피드/게시물 등록 함수 ( 1.피드게시버튼을 클릭했을떄 )
function 피드등록(){   console.log('피드등록()');
    // 1. 각 요소의 입력값 호출 
    const fpwd = document.querySelector('input').value; console.log( fpwd );
    const fcontent = document.querySelector('textarea').value; console.log( fcontent );
    // 3. 기존 localStorage 호출. [!! : localStorage문자열만 저장가능하므로. JSON.parse() ]
    let feedList = JSON.parse( localStorage.getItem( 'feedList' ) );  console.log( feedList );
    if( feedList == null ){ feedList = [] }; // 만약에 localStorage 아무것도 없으면 배열 선언 
    // 2. 객체화 [ 설계 ]
    const feed = {
        fno :  feedList.length >= 1 ? feedList[ feedList.length-1 ].fno + 1 : 1 , 
        // [!] 게시물번호를 자동으로 순차적으로 배정. [ 마지막게시물의 fno + 1 , 첫게시물일때는 1 ]
        fimg : '여행.webp' , // [!] input file로 등록된 사진 ()
        fdate : new Date() , // new Date() : 현재날짜/시간 호출
        fcontent : fcontent.replaceAll( '\n' , '<br/>') , // 문자열.replaceAll('교체할문자','새로운문자') : 문자 치환/교체
        fgood : 0 , // 등록시 좋아요는 0부터 시작
        fbad : 0 , // 등록시 실허요는 0부터 시작
        fpwd : fpwd ,
    };   console.log( feed );
    // 4. 피드목록에 피드 등록
    feedList.push( feed );
    // 5. localStorage 저장 [ !! : localStorage문자열만 저장가능하므로. ]
    localStorage.setItem( 'feedList' , JSON.stringify( feedList ) );
} // f end 

// [2] 이미지 등록함수 ( 1.input(file)에서 첨부파일을 등록(onchange)할때마다. )
function 이미지등록( event ){  console.log('이미지등록()');
    // [!] event : 이벤트를 발생한 결과정보객체
    console.log( event );
    console.log( event.target );
    console.log( event.target.files ); // input type file 속성 일때만 가능한 속성[files]
    console.log( event.target.files[0] ); // 등록된 첨부파일 을 파일 객체.

    // [1] 첨부파일input에 등록된 파일을 바이트 가져오기.
        // 1. 파일 읽기 클래스[객체 설계도]. new FileReader();
    let 파일읽기객체 = new FileReader(); // 파일읽기 객체 생성
        // 2. 파일을 JS로 읽어들이기. [ 내가 등록한 파일을 ]
    파일읽기객체.readAsDataURL( event.target.files[0] );  console.log( 파일읽기객체 );
        // 3. 읽어온 바이트를 img태그에 출력 
    파일읽기객체.onload = function(){ 
        document.querySelector('#fileImg').src = 파일읽기객체.result;
    }
    
}
