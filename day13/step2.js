console.log('step2.js');

const carNumArray = []  // 차량번호
const carTimeArray = [] // 입차시간 

function 입차(){ // 선언부 // 실행조건 : 입차 버튼클릭[onclick=""]했을때.

    console.log("입차 함수");
    // 1.[입력]
    const carNum = document.querySelector('#carNum').value;     console.log( carNum );  // 입력 그대로
    const carTime = document.querySelector('#carTime').value;   console.log( carTime ); // 03:31 // 20:33

    // 2.[처리] 배열명.push( 새로운요소 )
        // * [유효성검사]
        // 1. 차량번호 길이에 따른 갈림길... [ 저장 , 실패 ]
        if( carNum.length != 4 ){ alert('차량번호 4자리 입력해주세요.'); return; }
        // 2. 입차시간을 입력 안했으면.
        if( carTime === ''){ alert('입차시간을 선택해주세요.'); return; }

    carNumArray.push( carNum );     console.log( carNumArray );
    carTimeArray.push( carTime );   console.log( carTimeArray );
    // 3.[출력]
    alert('입차가 완료 되었습니다.');

} // f end 

function 출차(){ console.log('출차함수'); // * 함수 실행여부 확인
    // 1.[입력]
    const carOutNum = document.querySelector('#carOutNum').value;   console.log( carOutNum );
    const carOutTime = document.querySelector('#carOutTime').value; console.log( carOutTime );
    // 2.[처리]
    let 요금 = 3000; // 임의. 
    // =============================== 입차 시간 ===================================== //
    const outIndex = carNumArray.indexOf( carOutNum );  console.log( outIndex ); // 출차 차량번호의 인덱스
    if( outIndex == -1 ){ alert(`입차한 차량이 없습니다.`); return;  } // return 함수 강제 종료 // 아래 코드 실행X

    const inIime = carTimeArray[outIndex];  console.log( inIime ); // 출차차량번호의 인덱스를 이용한 입차배열내 입차시간.
    const inMtime = ( inIime.split(":")[0]*60) + Number( inIime.split(":")[1] );  console.log( inMtime );

    // =============================== 출차 시간 ===================================== //
        // 1. 시간을 모두 분으로 변경.
    const outArray = carOutTime.split(":"); console.log(outArray);
            // "03:56".split(":") 결과는 "03" "56"  : 자료2개 => 배열1개 // [ "03", "56"]
    const outH = outArray[0];               console.log( outH );   // 시 
    const outM = outArray[1];               console.log( outM );   // 분 
    const outMtime = (outH*60) + (outM*1);  console.log( outMtime );               
                                            // (시*60) + 분   // 출차시간을 분으로 환산 한 값.
    // =============================== 시간 차이  ===================================== //
    // 3.[출력]
    const time = outMtime - inMtime; console.log( '시간 차이 : ' + time )
    if( time < 0 ){ alert(`출차시간이 더 적을수 없습니다.`); return; }
    else if( time <= 30 ){ 요금 = 0; }
    else{   요금 = ( parseInt( (time-30)/10 ) ) * 1000;   }
    alert(`출차완료 : ${요금}`);
    
} // f end 




/*  
    [ 시간 차이 구하기 ]
    입차시간 : 02:30    ---> 1시간당 60분  ---> 120분+30분 -> 150분
    출차시간 : 04:20    ---> 1시간당 60분  ---> 240분+20분 -> 260분
        260 - 150 => 110 -> 60분당 1시간 => 1시간50분
        110 에 30분 무료 차감 => 80분 * 1000원 => 8000원
*/

























