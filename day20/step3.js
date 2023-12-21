// 예1
console.log( localStorage.getItem('이름') ) 
//console.log( _object.이름 ); // js는 html 새로고침/바뀌면 초기화 되므로 호출X
    //  _object is not defined

// 예2
const 회원정보목록 = localStorage.getItem('회원정보목록') ;
console.log( 회원정보목록 );            // [object Object],[object Object]
console.log( 회원정보목록[0].이름 );    // undefined

const 회원정보목록2 = JSON.parse( localStorage.getItem('회원정보목록2') ) ;
console.log( 회원정보목록2 );           // (2) [{…}, {…}]
console.log( 회원정보목록2[0].이름 );    // 유재석

/*

    웹 브라우저가 추가로 제공하는 API : 누군가가 미리 만든 객체/함수

    객체지향언어.
        문자열,객체,배열                                                                            문자열만 저장이 가능.[객체저장불가능]
        JS  --------------------  localStorage.setItem( 키 , JSON.stringify( 값 ) )---------------- > 브라우저(저장)
                                                                                                        "1"  vs  1
                페이지 전환[JS초기화]                                                                     "{이름:'강호동'}" vs {이름:'강호동'}
            2.
            <-------------------- JSON.parse( localStorage.getItem( 키  ) ) ----------------------- 

*/

