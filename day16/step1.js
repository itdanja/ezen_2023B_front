// const nameArray = []
// const pwArray = []
// const titleArray = []
// const contentArray = []
const boardArray = [];

function 글쓰기(){
    
    // 1. 
    const name = document.querySelector('#name').value;
    const pw = document.querySelector('#pw').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // 2.
    // nameArray.push( name );         console.log( nameArray );
    // pwArray.push( pw );             console.log( pwArray );
    // titleArray.push( title );       console.log( titleArray );
    // contentArray.push( content );   console.log( contentArray );
    
    const board = `${name}/${pw}/${title}/${content}`; console.log( board );

    boardArray.push( board ); console.log( boardArray );

    // 3.
    모든글출력();
}

function 모든글출력(){
    const boardTableBody = document.querySelector('#boardTable>tbody');

    let html = '';

    for( let i = 0 ; i<boardArray.length; i++ ){

        html += `<tr onclick="개별글출력(${ i })">
                    <th>${ i }</th>
                    <th>${ boardArray[i].split("/")[0] }</th>
                    <th>${ boardArray[i].split("/")[2] }</th>
                </tr>`
    }
    boardTableBody.innerHTML = html;
}

function 개별글출력( index ){ 
    const boardBox = document.querySelector('#boardBox');

    let html = ``;

    html +=`    <div>작성자 : ${ boardArray[index].split("/")[0]}</div>
                <div>제목 : ${ boardArray[index].split("/")[2]} </div>
                <div>${ boardArray[index].split("/")[3].replaceAll('\n','<br/>') } </div>
                <input onclick="개별글삭제(${ index })" type="button" value="삭제" />
                <input onclick="개별글수정(${ index })" type="button" value="수정" />`

    boardBox.innerHTML = html;
}

function 개별글삭제( index ){
    
    const checkPw = prompt('비밀번호');

    if( boardArray[index].split('/')[1] == checkPw ){
        boardArray.splice( index , 1 );
        alert('삭제성공');
        document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('비밀번호가 다릅니다.')
    }
    모든글출력();
}

function 개별글수정( index ){
    const checkPw = prompt('비밀번호');
    if( boardArray[index].split('/')[1] == checkPw ){
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');

        boardArray[index] = `${ boardArray[index].split('/')[0] }/
                            ${boardArray[index].split('/')[1]}/
                            ${updateTitle}/
                            ${updateContent}`;
        alert('수정성공');
        document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('비밀번호가 다릅니다.')
    }
    모든글출력();
}
