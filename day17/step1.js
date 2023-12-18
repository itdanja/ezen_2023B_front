

// 0. 전역변수 [ 배열 ] 
    // - 속성[상태] 마다 배열을 하나씩 만들면 배열이 너무 많아져. 관리 힘들어..
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray  = [ ] 
            // - 단점 : 하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다.
        // 2. boardArray  = [ "작성자/비밀번호/제목/내용" ,  "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용" ]
            // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [ 구분 문자는 개발자 마음. ]
            // - 입력 데이터에는 구분 문자가 포함되면 안된다.
            // - 단점 : 분해 하고 분해후 순서번호 기억*.

// 배열을 상수에 선언. // 그 배열은 '작성자/비밀번호/제목/내용' 을 하나의 문자열로 하나씩 저장.
const boardArray  = [ '유재석/1234/제목1/내용1' , '강호동/5678/제목2/내용2'  ] 

function 글쓰기(){  // HTML에 있는 (글쓰기버튼)onclik 했을때 실행되는 함수.

    const writer = document.querySelector('#writer').value;         // (#writer)로 설정된 id에 입력된 값 JS로 가져온다.
    const passowrd = document.querySelector('#passowrd').value;     // (#passowrd)로 설정된 id에 입력된 값 JS로 가져온다.
    const title = document.querySelector('#title').value;           // (#title)로 설정된 id에 입력된 값 JS로 가져온다.
    const content = document.querySelector('#content').value;       // (#content)로 설정된 id에 입력된 값 JS로 가져온다.

    const board = `${writer}/${passowrd}/${title}/${content}`;      //  board는 '작성자/비밀번호/제목/내용' 하나의 문자열로 만들고
    boardArray.push( board );                                       //  합칩문자열(board)가 배열에 저장된다.

    모든글출력();

    document.querySelector('#writer').value = ``;                   // (#writer)로 설정된 id에 입력된 값 을 초기화한다.
    document.querySelector('#passowrd').value = ``;                 // (#passowrd)로 설정된 id에 입력된 값 을 초기화한다.
    document.querySelector('#title').value = ``;                    // (#title)로 설정된 id에 입력된 값 을 초기화한다.
    document.querySelector('#content').value = ``;                  // (#content)로 설정된 id에 입력된 값 을 초기화한다.
    return;                                                         //  함수종료.      

}

function 모든글출력(){ // [글쓰기,글수정,글삭제 할떄마다] 배열에 있는 데이터를 HTML화 해서 HTML 출력하는 함수.
    const tableBody = document.querySelector('table>tbody');        // HTML 안에 있는 tbody 마크업을 tableBody상수에 저장 
    let html = ``;  // html문법 저장할 변수 선언
    for( let i = 0 ; i<boardArray.length ; i++ ){                   // 배열에 있는 모든 요소를 처음부터 끝까지 반복.
        html += `<tr onclick="개별글출력( ${i} )" >                  // tr(행 시작) 온클릭했을때 개별글출력() 함수 실행 -> 매개변수로 인덱스(보고자하는 개별게시물의 식별번호)를 전달.
                    <th>${ i }</th>                                 // 인덱스를 게시물번호 처름 사용.
                    <th>${ boardArray[i].split("/")[2] }</th>       // 해당 인덱스 요소의 문자열을 '/' 분리후 3번째 데이터 출력 
                    <th>${ boardArray[i].split("/")[0] }</th>       // 해당 인덱스 요소의 문자열을 '/' 분리후 0번째 데이터 출력 
                </tr>`                                              // (행 종료) .
    }
    tableBody.innerHTML = html;                                     // tableBody에 마크업사이(innerHTML)에 html를 대입한다.
    return;                                                         // 함수종료.
}

function 개별글출력( index ){
    const boardBox = document.querySelector('#boardBox');
    let html = `<div> 작성자 : ${ boardArray[index].split("/")[0] } </div>
                <div> 제목 : ${ boardArray[index].split("/")[2] } </div>
                <div> 내용 : ${ boardArray[index].split("/")[3].replaceAll( '\n' , '<br/>') } </div>
                <input onclick="글수정( ${index} )" type="button" value="수정"/>
                <input onclick="글삭제( ${index} )" type="button" value="삭제"/>
                `;
    boardBox.innerHTML = html;
    return;
}

function 글수정( index ){ 
    const checkPw = prompt('비밀번호');
    if( checkPw == boardArray[index].split("/")[1] ){ 
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        boardArray[index] = `${boardArray[index].split('/')[0]}/${boardArray[index].split('/')[1] }/${updateTitle}/${updateContent}`;
        alert('수정 성공');
        모든글출력();  
        개별글출력(index);
    }else{
        alert('패스워드가 다릅니다. 수정 불가.')
    }
    return;
}

function 글삭제( index ){ 
    const checkPw = prompt('비밀번호');
    if( checkPw == boardArray[index].split("/")[1] ){
        boardArray.splice( index , 1 );
        alert('삭제 성공');
        모든글출력();
        document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('패스워드가 다릅니다. 삭제 불가.');
    }
    return;
}
