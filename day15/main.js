const contents = [ ];
const isState = [ ];
const todo_bottom = document.querySelector('.todo_bottom');

doPrint();

function doSave(){ 
    
    const content = document.querySelector('.tcontent').value;

    contents.push( content );
    isState.push( false );
    
    doPrint();
}

function doDelete( deleteIndex ){
    contents.splice( deleteIndex , 1 );
    isState.splice( deleteIndex , 1 );
    doPrint();
}

function doUpdate( updateIndex ){
    isState[updateIndex] = !isState[updateIndex];
    doPrint();
}

function doPrint(){
    let html = ``;
    for( let i = 0 ; i< contents.length ; i++ ){
        
        const content = contents[i];
        html += `<div class="todo ${ isState[i] ? 'successTodo' : '' } ">
                    <div class="tcontent"> ${ content } </div>
                    <div class="etcbtns">
                        <button onclick="doUpdate( ${ i } )" type="button">상태변경</button>
                        <button onclick="doDelete( ${ i } )" type="button">제거하기</button>
                    </div>
                </div>`;
    }
    todo_bottom.innerHTML = html; 
}