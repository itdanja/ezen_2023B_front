/*
    -게시물(상위)
    -댓글(하위)
        1. 관계파악.
        2. 데이터
            게시물 : 대표이미지 , 등록날짜 , 내용 , 좋아요수, 싫어요수 , 비밀번호(삭제/수정시 사용)
            댓글 : 내용 , 등록날짜 , 비밀번호(삭제시 사용)

        3. 식별자
            1. 인덱스[ 인덱스 변화 있을경우 절대적인 식별자 역할 힘듬. 임시용은 가능]
            2. 식별자만들기[ 1.자동번호(1씩증가) 2.데이터조합 등등 ] 중복이없어야한다!!.

        4. 관계데이터 대입[ 하위에서 상위의 식별을 가지고 있어야한다. ]
            게시물 : +게시물번호[식별]
            댓글 : +댓글번호[식별] +게시물번호[참조]
*/

let feedList = [
    {
        fno : 1 ,
        fimg : '여행.webp' ,
        fdate : '2023-12-28' ,
        fcontent : `방탄소년단이 'BTS 2019 SUMMER PACKAGE in KOREA' 촬영으로 다녀온✨ <br/>
        전라북도 완주에 위치한 이곳은 작은 비밀공간을 지나면 볼 수 있는 갤러리부터 주변에 특색 있는 
        산책길까지 한 편의 수채화 같은 곳이기도 합니다. 주말 데이트로 #아원고택 어때요?` ,
        fgood : 3 , 
        fbad : 1 ,
        fpwd : '1234',
    },
    {
        fno : 2 ,
        fimg : '여행.webp' ,
        fdate : '2023-12-29' ,
        fcontent : `하하하하 샘플` ,
        fgood : 4 , 
        fbad : 10 ,
        fpwd : '12345',
    },
    {
        fno : 3 ,
        fimg : '여행.webp' ,
        fdate : '2023-12-30' ,
        fcontent : `안녕하세요.<br/>` ,
        fgood : 4 , 
        fbad : 10 ,
        fpwd : 'qwe1234',
    }
];

let replyList = [
    {
        rno : 1 , 
        fno : 1 , /* 참조할 게시물 번호 = 상위의 식별번호 - 1번 게시물의 댓글 */
        rdate : '2023-12-30',
        rcontent : '댓글 입니다. ㅎㅎ' ,
        rpwd : '1234'
    } , 
    {
        rno : 2 , 
        fno : 2 , /* 참조할 게시물 번호 = 상위의 식별번호 - 2번 게시물의 댓글 */
        rdate : '2023-12-31',
        rcontent : '두번쨰 게시물 댓글내용' ,
        rpwd : '12345'
    } , 
    {
        rno : 3 , 
        fno : 1 , /* 참조할 게시물 번호 = 상위의 식별번호 - 1번 게시물의 댓글 */
        rdate : '2023-12-31',
        rcontent : '1번게시물 두번째 댓글인가요?' ,
        rpwd : '123456'
    } , 
];

// ----------------------------------------------------------------------------- //

// [*] HTML 모두 로드 되었을때.
document.addEventListener('DOMContentLoaded' , function(){
    모든피드호출();
})

// [1] 모든 피드(게시물) 출력함수 정의 ( 1.js열렸을때 2.등록,삭제,댓글등록/삭제 )
function 모든피드호출(){
    // 1. [어디에]
    const feedBox = document.querySelector('#feedBox');
    // 2. [무엇을]
    let html = '';
        // 2-1 모든 피드 출력[ 피드 목록/배열 에 있는 객체를 하나씩 호출  ]
        for( let i = 0 ; i<feedList.length ; i++  ){

            // 2-2 배열내 하나의 게시물/피드 추출 
            const feed = feedList[i];
            // 2-3 각 객체 정보를 HTML에 대입
            html += `<div class="feed"> 
                        <div> <img src="img/${ feed.fimg }" /> </div>
                        <div class="contentBox"> 
                            <div class="date"> ${ feed.fdate } </div>
                            <div class="content"> ${ feed.fcontent }  </div>
                        </div>
                        <div class="btnBox">
                            <div> <!-- 왼쪽 버튼들-->
                                <button type="button">수정</button>
                                <button type="button">삭제</button>
                                <button type="button">답글</button>
                            </div>
                        <div>
                            <span> 👍 ${ feed.fgood } </span>  <span> 👎 ${ feed.fbad } </span>
                        </div>
                        </div> 
                        <div class="replyBox"> 
                            ${ 댓글출력( feed.fno ) }
                        </div>
                    </div>`
        }; // f end 
    // 3. [출력]
    feedBox.innerHTML = html;
} // f end 

// [2] 피드/게시물의 해당하는 댓글 모두출력하는 함수 정의 ( 1. 피드/게시물 출력시 같이 )
function 댓글출력( fno ){ // 매개변수 : 출력할 게시물번호.
    let html = ``;
    // 모든 댓글목록에서 fno를 찾아서 일치하면 댓글HTML 구성.
    for( let i = 0 ; i<replyList.length ; i++ ){ 
        if( fno == replyList[i].fno ){ // 댓글목록에서 동일한 fno 찾기.
            const reply = replyList[i];
            html += `<div class="reply">
                        <div> ${ reply.rcontent } </div>
                        <div>
                            <span class="date"> ${ reply.rdate } </span>
                            <button type="button">X</button>
                        </div>
                    </div>`
        } // if end 
    } // for end 
    return html; // 
} 
    