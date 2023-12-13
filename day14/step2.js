

let output = ``;    // - 출력할 내용을 저장하는 임시변수.

/*
// 문제1
const value1 = Number( prompt('문제1 수 입력 ; ') );
for( let i = 1 ; i <= value1 ; i++ ){
    // - i는 1부터 입력받은 수까지 1씩 증가 
    output += `*`;
} // for end 
console.log( output );

// 문제2 
output = ``;        // - 문제가 변경되었기 때문에 출력할 내용 공백으로 수정
const value2 = Number( prompt('문제2 수 입력 ') );
for( let i = 1 ; i<= value2 ; i++ ){
    output += `*`
    // 만약에 i가 3배수이면 줄바꿈 처리.
    if( i % 3 == 0 ){ output +=`\n`; } //  \n : 제어(이스케이프)문자
} // for end 
console.log( output );
*/
/*
// 문제3
output = ``;
const line3 = Number( prompt('문제3 줄수 : ') );
for( let i = 1 ; i<=line3 ; i++ ){ // for1 s    [행]

    // 별찍기
    for( let s = 1 ; s<= i ; s++ ){  // for1 s   [열]
        output += `*`; 
    } // for2 end 

    // 줄바꿈
    output += `\n`

} // for1 end 
console.log( output );
*/
/*
// 문제4
output = ``;
const line4 = Number( prompt('문제4 줄수 : ') );
for( let i = 1 ; i<=line4 ; i++  ){ // 행출력 

    // 별찍기
    for( let s = 1 ; s<=line4-i+1 ; s++ ){ // 열출력
        output +=`*`
    } // for end 

    // 줄바꿈
    output += `\n`;

}; // for end 
console.log( output );
*/


/*
// 문제)5
output = ``;
const line5 = Number( prompt('문제5 줄수 : ') );

for( let i = 1 ; i<=line5 ; i++ ) {// [ 행 ]
    // [ 공백 ]
    for( let b = 1 ; b<=line5-i ; b++ ){ output +=` `;}
    // [ 별 ]
    for( let s = 1 ; s<= i ; s++ ){ output +=`*`;}
    // [줄바꿈=행바꿈]
    output += `\n`
} // foe end 
console.log( output );
*/

/*
// 문제)6
output = ``;
const line6 = Number( prompt('문제6 줄수 : ') );
// [행]
for( let i = 1 ; i<=line6 ; i++ ){
    // [공백]
    for( let b = 1 ; b<=i-1 ; b++ ){ output += ` `;}
    // [별]
    for( let s = 1 ; s<=line6-i+1; s++){ output += `*`; }
    // [줄바꿈]
    output += `\n`;
}
console.log( output );
*/
/*
// 문제)7
output = ``;
const line7 = Number( prompt('문제7 줄수 : ') );
// [행]
for( let i = 1 ; i<=line7 ; i++ ){
    // [공백]
    for( let b = 1 ; b<=line7-i ; b++ ){ output+=` `}
    // [별]
    for( let s = 1 ; s<= i*2 -1 ; s++ ){ output+=`*` }
    // [줄바꿈]
    output += `\n`
} // for end 
console.log( output );
*/
/*
// 문제)8-1
output = ``;
const line8 = Number( prompt('문제8 줄수 : ') );
// [행]
for( let i = 1 ; i<=line8 ; i++ ){
    // [공백]
    for( let b = 1 ; b<= i-1 ; b++ ){ output += ` `; }
    // [별]
    for( let s = 1 ; s<= (line8*2) - ( i*2-1 ) ; s++ ){ output += `*`}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );
*/
// 문제)8-2
output = ``;
const line8 = Number( prompt('문제8 줄수 : ') );
// [행 뒤집기. 수정]
for( let i = line8 ; i<=1 ; i-- ){
    // [공백 수정 ]
    for( let b = 1 ; b<= line8 - i ; b++ ){ output += ` `; }
    // [별 7번 동일]
    for( let s = 1 ; s<=  i*2-1  ; s++ ){ output += `*`}
    // [줄바꿈]
    output += `\n`; // 행마다 1개 이므로 반복문 안씀..
}
console.log( output );

/*
// 문제1) 입력받은 수 만큼 * 출력 
// 문제2) 입력받은 수 만큼 * 출력 [  - 3개(3배수)마다 줄바꿈 ]
// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*
**         
***      
****   
*****
// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
*****
****
***
**
*
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   **
  ***
 ****
*****
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*****
 ****
  ***
   **
    *
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   ***
  *****
 *******
*********
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*********
 *******
  *****
   ***
    *
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *

*/