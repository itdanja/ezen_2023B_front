/* 
    설계..
        1. 경험
        2. 기능 실행 순서
            [키오스크 = 사용자입장]
                - 카테고리선택 -> 제품 선택 -> 장바구니 담기 -> 결제
            [포스기 = 관리자입장 ]
                - 결제 내역 ( 주문상태 )
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능 
                
        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리 = [ 
                    { cno : 1 ,  cname : '신제품(NEW)'} , 
                    { cno : 2 ,  cname : '프리미엄'} ,
                    { cno : 3 ,  cname : '와퍼&주니어'} ,
                    { cno : 4 ,  cname : '치킨&슈림프버거'} ,
                    { cno : 5 ,  cname : '올데이킹&킹모닝'} 
                ]
                - 관리자가 해당 배열을 추가/삭제 

            *카테고리 문서화 제출
            카테고리 표 [ 행 여러개 --> 객체 여러개 ]
                    카테고리번호    카테고리명
                    cno             cname               
               1행  1               신제품(NEW)         ----> 하나의 행이 하나의 객체
               2행  2               프리미엄            ----> 하나의 행이 하나의 객체
               3행  3               와퍼&주니어         ----> 하나의 행이 하나의 객체
               4행  4               치킨&슈림프버거     ----> 하나의 행이 하나의 객체
               5행  5               올데이킹&킹모닝     ----> 하나의 행이 하나의 객체

            * 배열[테이블] 간 관계

        4. 배열 안에 있는 데이터를 식별할때 기준점.
            사람 = { 이름 : '유재석' , 나이 : 40세 , 직업 : 강사 } - 이름으로 식별시 동명이인 존재 하면 문제점 발생. [ 중복이 절대로 없어야함.]
            사람 = { 주민등록번호 : '840420-1' 이름 : '유재석' , 나이 : 40세 , 직업 : 강사 } - 주민등록은 절대로 중복이 없다.
            
            - 인덱스 VS *식별코드생성 VS 이름
                '신제품(NEW)' ----> { cno : 1 ,  cname : '신제품(NEW)'}

*/

/* 백엔드로 데이터를 받았다고 치고 */
/* 전역변수 */
/* 1.카테고리 목록 */
let categoryArray =  [ 
                { cno : 1 ,  cname : '신제품(NEW)'} , 
                { cno : 2 ,  cname : '프리미엄'} ,
                { cno : 3 ,  cname : '와퍼&주니어'} ,
                { cno : 4 ,  cname : '치킨&슈림프버거'} ,
                { cno : 5 ,  cname : '올데이킹&킹모닝'} 
            ]
/* 2.제품목록 *( 제품이미지명은 사진파일명이랑 동일하게. ) */
let productArray = [
        { pno : 1 , pname : '큐브 스테이크 와퍼' , pprice : 19000 , pimg : '큐브스테이크와퍼.png' , cno : 1  } ,
        { pno : 2 , pname : '더블비프불고기버거' , pprice : 25000 , pimg : '더블비프불고기버거.png', cno : 4  } ,
        { pno : 3 , pname : '블양양 맥시멈3' , pprice : 170000 , pimg : '블양양맥시멈3.png', cno : 5 } ,
]
