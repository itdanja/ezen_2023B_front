const boardArray  = [  ] 

function 글쓰기(){ 
    const writer = document.querySelector('#writer').value;        
    const passowrd = document.querySelector('#passowrd').value;    
    const title = document.querySelector('#title').value;         
    const content = document.querySelector('#content').value;       

    // **!!!! 직접 / 구분해서 하나로 만들었는데 이제는 객체로 하나로 만들기.
    const board = {  작성자 : writer , 비밀번호 : passowrd , 제목 : title , 내용 : content   };      
    // 객체내 속성 추가 
    board.조회수 = 0; // 객체내 없는 key 호출할때.. key 생성.   // 이제 등록했으니까 조회수는 0부터 시작하자.
    boardArray.push( board );                                   

    모든글출력();

    document.querySelector('#writer').value = ``;                
    document.querySelector('#passowrd').value = ``;                
    document.querySelector('#title').value = ``;                   
    document.querySelector('#content').value = ``;                 
    return;          
}

function 모든글출력(){ 
    const tableBody = document.querySelector('table>tbody');      
    let html = ``; 
    for( let i = 0 ; i<boardArray.length ; i++ ){                
        html += `<tr onclick="개별글출력( ${i} )" >                  
                    <th>${ i }</th>                                
                    <th>${ boardArray[i].제목 }</th>     
                    <th>${ boardArray[i].작성자 }</th>   
                    <th>${ boardArray[i].조회수 }</th>         
                </tr>`                                             
    }
    tableBody.innerHTML = html;                                     
    return;                                                       
}

function 번호선택( index ){ return index; }



function 개별글출력( index ){

    // * 조회수 증가.
    boardArray[index].조회수 += 1 ; 모든글출력();  

    const boardBox = document.querySelector('#boardBox');

    let html = `<div> 작성자 : ${ boardArray[index].작성자 } 조회수 : ${ boardArray[index].조회수 }  </div>
                <div> 제목 : ${ boardArray[index].제목 } </div>
                <div> 내용 : ${ boardArray[index].내용.replaceAll( '\n' , '<br/>') } </div>
                <input onclick="글수정( ${index} )" type="button" value="수정"/>
                <input onclick="글삭제( ${index} )" type="button" value="삭제"/>
                `;
    boardBox.innerHTML = html;

    return;
}

function 글수정( index ){ 
    const checkPw = prompt('비밀번호');
    if( checkPw == boardArray[index].비밀번호 ){ 
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');

        boardArray[index].제목 = updateTitle;
        boardArray[index].내용 = updateContent;
        
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
    if( checkPw == boardArray[index].비밀번호 ){
        boardArray.splice( index , 1 );
        alert('삭제 성공');
        모든글출력();
        document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('패스워드가 다릅니다. 삭제 불가.');
    }
    return;
}
// ctrl+f(검색) split 검색해서 다 지우고 객체형식으로 호출