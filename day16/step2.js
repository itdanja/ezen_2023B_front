
const boardArray = [ {
    name : '유재석' , 
    pw : '1234' , 
    title : '안녕하세요' , 
    content : '재미있는 자바스크립니다.\n배우고있습니다.' ,
    view : 3,
    date : '2023. 12. 20. 오전 6:05:47'
} ];

모든글출력()

function 글쓰기(){
    
    // 1. 
    const name = document.querySelector('#name').value;
    const pw = document.querySelector('#pw').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // 2.
    const board = {
        name : name , 
        pw : pw , 
        title : title , 
        content : content ,
        view : 0 ,
        date : new Date().toLocaleString()
    }; console.log( board );

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
                    <th>${ boardArray[i].name }</th>
                    <th>${ boardArray[i].title }</th>
                    <th>${ boardArray[i].view }</th>
                    <th>${ boardArray[i].date }</th>
                </tr>`
    }
    boardTableBody.innerHTML = html;
}

function 개별글출력( index ){ 
    조회수증가( index );

    const boardBox = document.querySelector('#boardBox');

    let html = ``;

    html +=`    <div>
                    작성자 : ${ boardArray[index].name } /
                    조회수 : ${ boardArray[index].view} /
                    작성일 : ${boardArray[index].date }
                </div>
                <div>제목 : ${ boardArray[index].title } </div>
                <div style="height:200px">${ boardArray[index].content.replaceAll('\n','<br/>') } </div>
                <input onclick="개별글삭제(${ index })" type="button" value="삭제" />
                <input onclick="개별글수정(${ index })" type="button" value="수정" />`

    boardBox.innerHTML = html;

}

function 개별글삭제( index ){
    
    const checkPw = prompt('비밀번호');

    if( boardArray[index].pw == checkPw ){
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
    if( boardArray[index].pw == checkPw ){
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');

        boardArray[index].title = updateTitle;
        boardArray[index].content = updateContent;
        
        alert('수정성공');
        document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('비밀번호가 다릅니다.')
    }
    모든글출력();
}

function 조회수증가(index ){
    boardArray[index].view += 1 ;
    모든글출력();
}
