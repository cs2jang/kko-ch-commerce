import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Message() {
  const classes = useStyles();
  const genText = `


    (광고)제일식자재마트-이천점(19일 09시 20분[1427213])
  
    ★배송안내 (이천 전지역 배송가능/배달접수 조기마감될수 있습니다.)★
    ♣ 지역(신둔/부발/모가/백사/대월/호법/마장면) : 5만원 이상 / 배달접수 마감시간 : 17시
    ♣ 그외지역(곤지암/광주/설성면) : 10만원 이상 / 배달접수 마감시간 : 15시
    ★영업시간 안내 : 오전 7시 ~ 오후 10시 ★
    ♠ 직원모집 : 계산원 (문의 : 010-5808-3324) ♠
    
    - 2021 03. 19(금) - 
    ★ 매장전화 031-631-3361/3371★
    ♠ 농산물 상담 및 대량 주문 직통전화 : 010-5771-5451 ♠
    ♣ 야채와 청과는 매일 오전 8시에 당일 가격으로 변동 됩니다. 
    ♠ 당일 기준 상품 가격이 전날 상품 가격과 등락이 있을수 있으니 참고 하셔서 주문하시기 바랍니다. 
    
    ◆ 특가세일품목 - 조기품절 될수 있음 ◆
    -감자 대/20kg/박스 9,800원
    -금귤 1팩 3,980원 / 3팩 9,900원
    -스치딸기 1kg 3,980원
    -백숙용 생닭 11호/2마리 8,900원
    -코다리 8마리/2묶음 10,000원
    -민어굴비 대/10마리 12,000원
    -오리온 에너지바 미니 5,980원
    -오리온 단백질바 미니 5,980원
    -오뚜기 김치라면 멀티 4입 1,590원
    
    <야채>
    -수입양파 15kg/망 25,800원
    -수입대파 10kg/박스 34,000원
    -깐마늘 1.8kg/봉 12,800원
    -열무/얼갈이 1단 각 1,980원
    -시금치 2단 980원
    -가지 상/박스 19,800원
    -꽃느타리버섯 2kg/박스 4,980원
    -팽이버섯 34봉/박스 9,800원
    -쪽파 대/1단 3,980원
    -국산대파 10단 42,000원
    -깐쪽파 대/1단 4,900원
    -섬초 10kg/박스 24,800원
    -쑥갓 4kg/박스 7,900원
    -시금치 4kg/박스 5,900원
    
    <야채-식자재>
    -수입김치 10kg/박스 11,800원
    -백김치 10kg/박스 14,800원
    -깍두기 10kg/박스 12,800원
    -세척당근 10kg/박스 11,800원
    -간수빠진 천일염 20kg 13,800원
    -국내산 다진마늘 2kg/봉 8,900원
    -곱슬이/일자콩나물 1박스 각 1,980원
    -반판두부 3kg/팩 2,480원
    -고사리 1kg/봉 2,480원
    -채도라지 1kg/봉 2,980원
    -미역줄기 1박스 4,980원
    -염장다시마 1박스 4,500원
    -꼬시래기 1박스 8,900원
    -염장연근 16kg/박스 39,800원
    -무말랭이 1kg/봉 9,800원
    
    <청과>
    -고당도오렌지 대/10개 8,900원
    -하우스수박 1통 6,980원
    -골드파인애플 특대/1수 3,980원
    -수입청포도 100g 690원
    -망고 3개/팩 7,900원
    -블루베리 4팩 9,800원
    
    <정육>
    -한돈 생목삼겹살(보쌈용) 600g/1근 5,980원
    -프리미엄 미국냉장소꽃등심 100g 1,800원
    -양념 소불고기 1.2kg/2근 10,000원
    -한돈 대패삼겹살 600g/1근 6,900원
    -한돈 생삼겹살 600g/1근 8,900원
    -미국 냉장소 갈비살 100g 4,000원
    -한돈 생등갈비 600g/1근 9,900원
    -한돈 양념돼지갈비찜 1.8kg/3근 10,000원
    
    <정육>_5kg이상 구매시
    -한돈 생앞다리살 1kg 8,000원
    -한돈 냉동 등뼈 5kg 10,000원
    -한돈 불고기/제육 1kg 3,500원
    -제주흑돼지불고기 1kg 4,500원
    -미국목전지제육 1kg 4,500원
    -국내산 무뼈닭발 1kg/팩 13,500원
    -한우 국물용잡뼈 4kg 10,000원
    -호주 소양지 1kg 12,000원
    -호주 소사태 1kg 13,000원
    -호주 장조림용 홍두깨살 1kg 14,000원
    -브라질 무뼈닭다리살 2kg/1팩 9,800원
    -국내산 닭가슴살 2kg/1팩 9,500원
    -국내산 닭볶음탕용 5kg/1팩 12,000원
    
    <수산>
    -벌교꼬막 2팩 10,000원
    -활전복 7마리 10,000원
    -생물쭈꾸미 100g 2,500원
    -대하새우 50마리 20,000원
    -참굴비 40마리/2두릅 10,000원
    -노르웨이대자반 4마리/2손 9,800원
    
    <회코너>
    -소라/문어/한치/과메기/병어회 2접시 각 20,000원
    -모듬회 2~3인분/1접시 15,800원
    -모듬회 3~4인분/1접시 29,800원
    -모듬회 4~5인분/1접시 39,800원
    
    <수산-식자재>
    -절단코다리 10kg/박스 48,000원
    -생선까스 100개/박스 29,800원
    -손질열기 1박스 32,000원
    -손질가자미 대/중/ 1박스 각 19,800원
    -쭈꾸미 6미*12팩/박스 29,800원
    -노르웨이자반 중/10손/20미 37,900원
    -노르웨이자반 대/10손/20미 45,000원
    -참조기 소/50미/1박스 13,900원
    -참조기 대/50미/1박스 38,000원
    -국산 대자반 20손/40마리/박스 55,000원
    -절단꽃게 L/12팩/박스 38,000원
    -낙지 4미/6팩/박스 55,000원
    -갈치 17~18미/1박스 68,000원
    -활복오징어(수입) 1박스 39,800원
    -활복오징어(국산) 1박스 45,000원
    -오징어귀채 4kg/박스 17,900원
    -해파리 5kg/박스 39,800원
    -고니 7.5kg/박스 35,000원
    -동태알 7.5kg/박스 59,800원
    -베이트오징어 10미/박스 29,800원
    
    <공산품>
    -2018년산/가을지기쌀 20kg/포 49,800원
    -착한판란 30구/1판 5,980원
    -황금들녁쌀 20kg/포 52,800원 (1인 2포 한정)
    -착한특란 30구/1판 6,980원 (1인 2판 한정)
    -남양프렌치카페믹스 50T 3,980원 (1인 2개 한정)
    -CJ햇반기획 200g*12입 9,900원 (1인 2개 한정)
    -한성 유부초밥 320g 1,980원 (1인 2봉 한정)
    -청정원 스파게티소스 600g 2,980원 (1인 2개 한정)
    -청정원 스파게티면 250g 790원 (1인 2봉 한정)
    -해태 훼미리제주감귤 2L 990원 (1인 2개 한정)
    -웰치스포도 1.5L 990원 (1인 2개 한정)
    -옥수수 꿀호떡 6입 1,980원 (1인 2봉 한정)
    -해태 사브레 4800류 1,980원 (1인 2개 한정)
    -칸쵸 파티팩 216g 1,380원 (1인 2개 한정)
    -오리온 카라멜 땅콩/밀크 120g 각 850원 (1인 2봉 한정)
    -모나리자 본키친타올 100매*2롤 990원 (1인 2개 한정)
    
    <식자재>
    -지리멸치 1.4kg/박스 16,500원
    -냉동 블루베리 1kg 5,980원
    -식자재왕 꼬치어묵 사각/봉 30g*25 각 4,180원
    -식자재왕 텍사스윙 1kg 13,900원
    -식자재왕 텍사스봉 1kg 10,900원
    -식자재왕 수제등심돈까스 130g*24 22,500원
    -마산 몽고진간장 1.5L 3,480원
    -CJ실속진한다시 2kg 5,980원
    -오뚜기 카레 매운/약간매운/순한맛 1kg 각 4,980원
    -백설 하얀설탕 15kg 13,500원
    -청마루 단무지 2.65kg 반달/온달/세절 각 2,980원
    -썬큐 베이크드빈스 2.7kg 4,900원
    -아람들 고소한맛기름 1.8L 4,980원
    -청우 멸치육수진국 1.95kg 7,980원
    -식자재왕 콩식용유 18L 29,800원
    -레스비 150ml*30입 6,980원
    -크리뉴 네프킨 80밴드 7,900원
    -야무진 락스 13kg 3,980원
    -종이컵 1박스 6,980원
    
    메세지 수신을 원치않는 고객님께서는 차단해주시기바랍니다.


    
    `;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
          {genText}
        </Typography>
      </CardContent>
    </Card>
  );
}
