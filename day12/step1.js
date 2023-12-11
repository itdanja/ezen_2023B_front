/*
    p.142   switch조건문
        - break : switch이거나 반복문(for/while) 에서 { } 나가기/탈출 
        - 논리(범위논리X)판단X / 경우의수가 값으로 정해져있는 경우

        1. 형태
            switch( 자료 ){
                case 조건A : 실행코드; break;
                case 조건B : 실행코드; break;
                case 조건C : 실행코드; break;
                default : break;
            }

    p.145   삼항연산자 
        - 간단한(조건 1개또는 2개) 조건에 따른 결과 실행
        - 조건부 렌더링[화면표현] ( JS많이씀-짝수이면 파랑색, 홀수이면 빨강색 )
        1. 형태
            불 표현식 ? 참일때 결과 : 거짓일떄 결과 

*/
// 1. 홀수/짝수 구분 예제 [ (짝수) 수%2 == 0  , (홀수) 수%2 == 1 ]
const input = Number( prompt('숫자를 입력하세요') ); // 자료를 입력받아 숫자 자료형 변환후 상수에 저장
// 1-1. 예) if
if( input % 2 == 0 ){ console.log("if짝수입니다."); } 
else if( input % 2 == 1 ){ console.log("if홀수입니다."); }
else{ console.log("if숫자가아닙니다.");}

// 1-2. 예) switch
switch( input % 2 ){
    case 0 : console.log('case짝수입니다.'); break;
    case 1 : console.log('case홀수입니다.'); break;
    default : console.log('case숫자가아닙니다.'); break;
}

// 2. 
const date = new Date();    // new Date(); 현재날짜/시간 알려주는 코드(객체)
const hour = date.getHours()    // ..getHours() 현재날짜/시간에서 '시' 만 추출 함수 

// 2-1
if( hour < 11 ){  console.log("아침 먹을 시간입니다."); }
else if( hour < 15 ){console.log("점심 먹을 시간입니다."); }
else{  console.log("저녁 먹을 시간입니다."); }

// 2-2
switch( true ){
    case hour < 11 : console.log("아침 먹을 시간입니다."); break;
    case hour < 15 : console.log("점심 먹을 시간입니다."); break;
    default : console.log("저녁 먹을 시간입니다."); break;
}

// 3. 
const input2 = prompt('숫자를 입력해주세요');
const number = Number(input2);

// 3-2 if
if( number >= 0 ){ console.log('0이상의 숫자입니다.'); }
else{  console.log('0보다 작은 숫자입니다.'); }

// 3-2 삼항연산자 
const result = number >= 0 ? '0이상의 숫자입니다.' : '0보다 작은 숫자입니다.';
console.log( result );

// 148p. 홀수 짝수 구하기 
    // - 홀짝 계산식 : 수 % 2 == 0 또는 1 
    // - 문자인경우 : Number(문자열[문자열.length-1]) % 2

// 150p. 
const score = Number( prompt('학점을 입력해주세요') );
// 비효율적인 방법.
if( score === 4.5 ){ console.log('신'); }
else if( 4.2 <= score && score < 4.5 ){ console.log('교수님의 사랑');}
else if( 3.5 <= score && score < 4.2 ){ console.log('현 체제의 수호자');}
else if( 2.8 <= score && score < 3.5 ){ console.log('일반인');}
else if( 2.3 <= score && score < 2.8 ){ console.log('일탈을 꿈꾸는 소시민');}
else if( 1.75 <= score && score < 2.3 ){ console.log('오락문화의 선구자');}
else if( 1.0 <= score && score < 7.75 ){ console.log('불가촉천민');}
else if( 0.5 <= score && score < 1.0 ){ console.log('자벌레');}
else if( 0 <= score && score < 0.5 ){ console.log('플랑크톤');}
else { console.log('시대를 앞서가는 혁명의 씨앗');}
// 효율적인 방법 
if( score === 4.5 ){ console.log('신'); }
else if( 4.2 <= score  ){ console.log('교수님의 사랑');}
else if( 3.5 <= score ){ console.log('현 체제의 수호자');}
else if( 2.8 <= score ){ console.log('일반인');}
else if( 2.3 <= score  ){ console.log('일탈을 꿈꾸는 소시민');}
else if( 1.75 <= score ){ console.log('오락문화의 선구자');}
else if( 1.0 <= score ){ console.log('불가촉천민');}
else if( 0.5 <= score  ){ console.log('자벌레');}
else if( 0 < score  ){ console.log('플랑크톤');}
else { console.log('시대를 앞서가는 혁명의 씨앗');}

// p.153
    // 문자열.split('기준문자') : 문자열내 특정문자 기준으로 문자열 분리 함수 / 반환 : 배열
    // '유재석,강호동,신동엽'.split(',') : 3조각 쪼개짐. 유재석 강호동 신동엽
        // 여러 조각/자료 을 모아두는 곳 == 배열 [ 여러 자료을 저장하는 곳 ]
const rawInput = prompt('태어난 해를 입력해주세요');
const year = Number( rawInput );
const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');
        // tti상태 :    tti = [ 원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양 ]
        //            인덱스 :    0    1  2  3   4  5   6     7   8  9  10 11
            /* 
                "문자열/자료".split('분리할기준문자');
                    - 분리할기준문자는 사라지고 자료를 분리.
                    - 분리전 자료 수 1개 : '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'
                    - 분리후 자료 수 12개 : 원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양 
                        - 생각?? 변수는 1개 밖에 저장을 못하는데... 여러개를 저장하고 싶은데. --> 배열
            */
console.log( tti[0] ); // 원숭이
console.log( tti[8] ); // 용
// console.log( tti[ 태어난연도/12 ] );
console.log( `${year}년에 태어났다면 ${ tti[ year%12 ] } 띠입니다. `);


// 154p. 확인문제
    // 1. 100>200 이면 false 이므로 confirm() 실행되고  확인 클릭하면 true 취소 클릭하면 false 가 alert 출력됨. 
    // 2. 각자 집에서 풀이. 
    // 3. 각자 집에서 풀이. 
    // 4. switch default(생략가능) break(생략가능)  /  else(if)     4
    // 5. P.146~147
        // 1 : 출력A  2 : 출력A  3: true || alert(출력A)   4:true&&alert(출력A)      3
        // alert 확인버튼
        // 짧은 조건문    || 논리합 일때 좌변이 참이면 우변은 실행X     거짓이며 우변 실행O
        //               && 논리곱 일때 좌변이 거짓이면 우변은 실행X 
         