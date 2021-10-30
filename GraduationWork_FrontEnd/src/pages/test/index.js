import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/all.css';
import '../assets/styles/test.css';
import { Helmet } from "react-helmet";
import $ from "jquery";
import taxAccounting from "../assets/images/taxAccounting.png";
import health from "../assets/images/health.png";
import security from "../assets/images/security.png";
import social from "../assets/images/social.png";
import engineering from "../assets/images/engineering.png";
import fashion from "../assets/images/fashion.png";
import visualDesign from "../assets/images/visualDesign.png";
import computerScience from "../assets/images/computerScience.png";
import police from "../assets/images/police.png";
import childEdu from "../assets/images/childEdu.png";
import broadcast from "../assets/images/broadcast.png";
import marketing from "../assets/images/marketing.png";
import architecture from "../assets/images/architecture.png";
import airport from "../assets/images/airport.png";
import counseling from "../assets/images/counseling.png";
import management from "../assets/images/management.png";

// import ShareButton from "../shareButton";


const Test = (props) => {
    let num = 1;
    const tests = {
        1:{"type":"EI", "questionNum":"문제1", "title":"수능 끝나고 친구들과 연말에 약속이 있었는데 펑크가 났다 T.T 아쉽지만 어쩔 수 없지.. 요즘 시국이 시국이니 만큼 집콕이 곧 안전이다. 근데, 나 집에서 뭐하지?", "A":"집에 혼자서 있으려니까 너무 답답해서 안되겠어ㅠㅠ 친구들이랑 영상통화라도 해야지!", "B":"어차피 못 나가는데 차라리 잘됐어~ 이참에 보고싶었던 넷플릭스나 보자!"},
        2:{"type": "SN", "questionNum":"문제2", "title": "난생 처음 가보는 장소에서 친구들을 만나기로 했다. 그런데, 지도 어플을 보면서 길을 찾아봐도 그 곳이 그 곳 같아서 도저히 목적지를 찾을 수가 없다. 이럴때 나만의 해결방법은?", "A":"동네 주민으로 보이는 주변 사람들에게 물어봐서라도 목적지를 찾는다.", "B": "어차피 늦었으니 구경도 할 겸, 나의 감을 믿고 이곳 저곳 둘러본다."},
        3:{"type": "TF", "questionNum":"문제3", "title": "정말 그럴 의도는 아니였는데.. 대화하다가 상대방을 서운하게 만들었다ㅠㅠ 이럴 때 나의 행동은?",  "A": "'미안해.. 하지만 내가 말하려고 했던건..' 상대를 설득시킨다.", "B": "'내가 진짜 그런 의도는 아니였어.. 미안해.. 화났어?' 우선 상대방의 화를 풀어주려고 한다."},
        4:{"type": "JP", "questionNum":"문제4", "title": "올해를 돌아보니 계획했던 것 만큼 목표를 달성하지 못한 것 같다. 앞으로 대학교에 입학하기 전에 꼭 필요한 것들을 성취하기 위해서는 올해 세운 계획들이 반드시 모두 실현되어야 한다. 이럴 때 나의 해결책은?", "A": "우선 지금 하던 일을 멈추고 당장 해결해야 할 문제부터 빠르게 파악한 후 바로 실행에 옮긴다.", "B": "이렇게 될 줄 예상하고 있었어.. 우선 할 수 있는 것부터 해보고 차차 방법을 찾아나간다."},
        5:{"type": "EI", "questionNum":"문제5", "title": "올 한해 쉼없이 달려온 나! 수고 많았어 토닥토닥.. 새롭게 시작하게 될 대학생활을 알차게 보내기 위해서 2022년 계획을 세우려고 한다. 어떤 계획을 세울까?", "A": "적극적으로 강의, 강연을 다니며 지식을 흡수하며 인맥을 확장해간다.", "B": "독서와 명상을 통해 차분하고 깊이 있는 사람이 될 수 있도록한다."},
        6:{"type": "SN", "questionNum":"문제6", "title": "일이 너무 많아서 머리가 복잡해! 계획했던 일을 이번 주까지 끝내야하는데 할 수 있을까?ㅠㅠ", "A": "기간을 조금 늘리더라도 정확하게 처리한다.", "B": "빠르게 일을 끝내고 수정할 게 생기면 그때가서 처리한다."},
        7:{"type": "TF", "questionNum":"문제7", "title": "연말이고, 연초라 내 의지가 끌어오른다! 뭐라도 해야할 것 같은데, 어떡하지?", "A": "투두리스트를 적어 하나씩 처리할 수 있도록 계획한다.", "B": "우선 해봐야 도전하는 느낌도 난다! 당장 뭐라도 시작한다."},
        8:{"type": "JP", "questionNum":"문제8", "title": "2021년이 마무리됐다. 하지만, 내가 원하는 바를 이루지는 못했다. 이럴 때 나는 어떻게 생각하는 타입?", "A": "올해 정말 수고했지만, 내가 원하는 결과는 얻지 못했어 내년에는 더 타이트하고 체계적으로 목표와 일정을 짜서 해결해내고 말거야!", "B": "비록 내가 원하는 바는 이루지 못했지만, 오히려 좋아, 목표에 대한 변수를 파악하고 새로운 방향을 알아냈으니까!"},
        9:{"type": "EI", "questionNum":"문제9", "title": "이제 곧 있으면 졸업이다. 그동안 감사했던 마음을 담아 고마우신 분들(선생님, 친구들)에게 선물을 해주고 싶다. 이럴 때 나는 어떻게 하는 타입?", "A": "비슷한 가격대의 선물을 골라 선생님들과 반 친구들 모두에게 선물한다.", "B": "가장 고마웠던 친구들이나 선생님에게만 조용히 편지와 선물을 준비한다."},
        10:{"type": "SN", "questionNum":"문제10", "title": "연초에는 정말 새로운 사람이 되고 싶다. 그럼, 뭐부터 해야하지? 연초계획을 세울 때 내 스타일은?", "A": "현실적으로 이룰 수 있는 계획들을 세워 진행한다.", "B": "포부는 크면 클수록 좋아. 계획은 최대한 크게 세운다."},
        11:{"type": "TF", "questionNum":"문제11", "title": "친구가 수능을 망쳐서 재수에 대한 고민을 하고 있다! 다른 사람의 계획에 있어 당신의 반응은?", "A": "그럼 이렇게 해보는 건 어때? 계획들에 대한 분석적으로 살펴보고 다양한 의견을 준다", "B": "아 진짜? 그런 고민 왜 혼자 하고 있었어! 그동안 안힘들었어? 라고 위로하며 공감한다."},
        12:{"type": "JP", "questionNum":"문제12", "title": "2022년 내 목표는 자기개발, 나는 어떤식으로 자기개발하는 스타일일까?", "A": "우선 기초 이론부터 차근차근 배워서 성장해나가고 싶어! 커리큘럼을 보고 꼼꼼하게 공부 계획을 세워서 수강한다.", "B": "시도를 해봐야 내가 어떤 유형에 맞는 지 확인 가능하다고 생각하기 때문에 강의를 수강해본다"}
    };

    const result = {
            "ISTJ": {"department": "세무회계과", "explain": "시험일정이 잡혔을 때, 친구들과 약속이 잡혔을 때 먼저 나서서 계획을 세우는 타입이에요. 점심먹을 때는 디저트를, 디저트 먹을 때는 저녁을, 저녁 먹을때는 다음 날 아침을 미리미리 생각해서 결정장애가 있는 주변인에게 사랑받아요. 하지만, 주로 했던 일들 위주로 계획을 세우다보니 도전적인 거에는 서툴 수 있어요. 책임감과 추진력이 강한 당신! 올해는 도전적으로 일을 주도해봐요.", "img": taxAccounting, "seoul":"서일대학교, 명지전문대학교, 한양대학교, 배화여자대학교, 인덕대학교, 백석예술대학교, 동양미래대학교", "gyeonggi":"경민대학교, 국제대학교, 김포대학교, 동남보건대학교, 동원대학교, 두원공과대학교, 부천대학교, 수원과학대학교, 수원여자대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 웅지세무대학교, 유한대학교, 장안대학교, 경인여자대학교"},
            "ISFJ": {"department": "보건계열학과", "explain": "다른 사람과 계획을 짤 때 너의 말도, 너의 말도 옳다.는 황희정승형 마인드를 가지고 있어요. 모두를 의견을 듣고 모두가 원하는 방향으로 계획을 세우고 싶어하기 때문에 조금 스트레스를 받기도 해요. 하지만, 본인만의 계획을 세울 땐 확고하게, 완벽한 계획을 세워 달성해나가려고 하는 외유내강 타입이에요. 하지만, 주어진 계획을 잘 이뤄나가지 못할 경우에 큰 스트레스를 받아요. 남들과의 의견 조율에서는 좀 더 본인 의견을 내세우거나 본인의 계획에서는 살짝 여유를 주는게 좋아요.", "img": health, "seoul":"삼육보건대학교, 서일대학교, 서울여자간호대학교, 한양여자대학교", "gyeonggi":"경민대학교, 경복대학교, 동남보건대학교, 두원공과대학교, 부천대학교, 서정대학교, 수원과학대학교, 수원여자대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 용인송담대학교, 경인여자대학교, 인천재능대학교"},
            "INTJ": {"department": "보안학과", "explain": "연애 상담을 하다보면 결혼과 출산까지 염두해서 조언을 해주는 당신은 나무보다 숲, 아니 달에서 우주 저만리까지 보는 사람이에요. 큰틀을 우선적으로 생각하다보니 꿈꾸는 목표치가 점점 높아지고, 불어나는 계획들을 자각하지 못하다 다시 돌아가기도 해요. 하지만, 이 모든 건 내 목표를 이루어나가기 위한 것! 들어가는 시간이 곧 '투자'라고 생각하기 때문에 해결책을 찾아 실행해요. 미래를 낙관적으로 판단하는 성향이 있기 때문에 보다 더 강하게 목표를 향해 달려나가려 노력해요.", "img": security, "seoul":"서일대학교, 명지전문대학교, 한양여자대학교, 배화여자대학교", "gyeonggi":"경민대학교, 동서울대학교, 두원공과대학교, 부천대학교, 수원과학대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 한국복지대학교, 인천재능대학교, 인하공업전문대학교"},
            "INFJ": {"department": "사회복지학과", "explain": "첫 만남에 맘에 드는 상대를 발견하고 결혼까지 생각하는 당신은 일을 진행하면서 계속해서 미래를 상상하고 자극받는 걸 좋아해요. 모든 일에는 이유와 의미가 있다고 생각하는 당신! 그만큼 다 중요하다고 생각하기 때문에 허투루 일을 하는 사람이 아니에요. 그래서 더 목표를 중요하게 여겨요. 계획에는 어떠한 목표가 있는지 확인하고 맞는 계획을 세워 이뤄나가려해요. 완벽한 계획을 추구해요. 그만큼 추진력도 강해 주변에서 믿음직한 사람이라고 많이 들어요.", "img": social, "seoul":"서일대학교, 명지전문대학교, 한양여자대학교, 인덕대학교, 백석예술대학교", "gyeonggi":"경기과학기술대학교, 경민대학교, 국제대학교, 대림대학교, 동서울대학교, 동원대학교, 두원공과대학교, 부천대학교, 서정대학교, 수원과학대학교, 수원여자대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 오산대학교, 용인송담대학교, 장안대학교, 한국복지대학교, 경인여자대학교, 인천재능대학교"},
            "ISTP": {"department": "공학계열학과", "explain": "안드로이드급의 무표정으로 느긋하게 있는 것처럼 보이지만 언제든지 다른 방향으로 움직일 수 있도록 머리에서 이미 계산을 다 굴리고 있어요. 이미 세워진 계획이 있더라도 목표를 더 잘 달성하기 위해서라면 다 뒤집더라도 다시 할 수 있는 용기를 가지고 있어요. 꽂힌 일은 사막에서 바늘찾는 일을 하는 것처럼 꼼꼼하게하지만 그렇지 않으면 손에서 놓아버리는 과감함도 가지고 있어요. 하지만 때로는 생각만 과감하고 행동은 뜨뜻미지근한 경우가 있어 이상과 현실의 괴리감에 빠지기도 해요.", "img": engineering, "seoul":"서일대학교, 명지전문대학교, 인덕대학교, 동양미래대학교", "gyeonggi":"경기과학기술대학교, 국제대학교, 대림대학교, 동서울대학교, 동원대학교, 부천대학교, 서정대학교, 수원과학대학교, 신안산대학교, 오산대학교, 유한대학교, 한국복지대학교, 인하공업전문대학교"},
            "ISFP": {"department": "패션디자인과", "explain": "비행기 티켓만 끊어도 내가 할 수 있는 여행 계획은 다 한 것! 이미 목적지를 정한 것만으로도 큰 일을 생각했다고 생각해요. 때에 따라 바꿀 수 있는게 계획이고, 내가 원하는 바만 이룰 수 있다면 유연하게 생각하며 움직여요. 웬만해서는 항상 여유롭고, 재미있게 일을 진행하고 싶어해요. 그렇다보니 결정을 내려야하는 순간이 온다면 최대한 피하고 싶어해요.", "img": fashion, "seoul":"서일대학교, 숭의여자대학교, 한양여자대학교, 배화여자대학교", "gyeonggi":"국제대학교, 동서울대학교, 동아방송예술대학교, 부천대학교, 수원여자대학교, 신구대학교, 여주대학교, 연성대학교, 오산대학교, 유한대학교, 장안대학교, 청강문화산업대학교, 경인여자대학교"},
            "INFP": {"department": "시각디자인과", "explain": "나는 내가 제일 좋아.. 나만큼 나를 잘 아는 사람은 없어! 내가 세운 계획이 정말 의미있다고 믿기 때문에 강한 추진력으로 실행할 수 있어요. 평소에 자기 자신을 잘 파악하고 있고 믿고 있기 때문에 본인이 세운 계획에 있어 자신감이 넘쳐요. 일이 진행되면서 일어나는 평가에 객관적이고 냉철한 편이에요. 하지만, 실행하는 중간에 생각대로 진행되지 않는다면  그 다음 단계로 가는데 망설임을 느끼곤 해요. ", "img": visualDesign, "seoul":"숭의여자대학교, 인덕대학교, 백석예술대학교", "gyeonggi":"경복대학교, 계원예술대학교, 김포대학교, 동서울대학교, 동원대학교, 두원공과대학교, 서울예술대학교, 수원여자대학교, 신구대학교, 연성대학교, 용인송담대학교, 유한대학교, 장안대학교"},
            "INTP": {"department": "컴퓨터공학과", "explain": "계획이 틀어져? 오히려 좋아. 다른 계획들도 짜볼 수 있으니까! 라고 생각하는 당신. 계획은 많으면 많을수록 변수에 대항할 수 있다고 생각해요. 사실, 실행하는 과정보다 계획을 세울 때 더 재미를 느껴요. 그래서 계획은 a안부터 d안까지 계속해서 만들어나가지만 계획은 계획일 뿐, 즉흥적으로 행동할 때가 많아요. 반복되는 걸 좋아하지 않는 성향때문에 시행착오를 겪을 일이 많겠지만, 호기심이 가득한 당신에겐 시행착오조차 즐거움으로 다가올 거에요.", "img": computerScience, "seoul":"서일대학교, 명지전문대학교, 한양여자대학교, 배화여자대학교, 인덕대학교, 동양미래대학교", "gyeonggi":"경기과학기술대학교, 경민대학교, 국제대학교, 김포대학교, 대림대학교, 동서울대학교, 동원대학교, 두원공과대학교, 수원과학대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 용인송담대학교, 유한대학교, 장안대학교, 청강문화산업대학교, 한국복지대학교, 경인여자대학교, 인천재능대학교, 인하공업전문대학교"},
            "ESTP": {"department": "경찰학과", "explain": "월급 3일 전, 계좌 잔고 520원. 하지만 어떻게든 잘 되지 않을까?라고 생각하며 긍정적으로 세상을 바라보는 시각을 가지고 있어요. 직접적인 경험을 통해 얻는 것이 더 소중하다고 생각하기 때문에 계획을 짜서 그대로 움직이는 거에는 흥미를 느끼지 못해요. 혹시라도 계획을 진행함에 있어 어려움이 생긴다면 기가막힌 순발력으로 타협점을 찾아 진행해요. 오늘의 할 일을 내일로 미루는 게 특기이긴 하지만 순발력이 좋고 긍정적이기 때문에 모든 순간에 즐거움을 느껴요.", "img": police, "seoul":"인덕대학교, 백석예술대학교", "gyeonggi":"국제대학교, 김포대학교, 동서울대학교, 동원대학교, 수원과학대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 용인송담대학교, 장안대학교"},
            "ESFP": {"department": "유아교육과", "explain": "계획이 곧 족쇄. 계획을 세워 진행하는 일은 틀에 맞춰 사는 것 같아 답답함을 느끼는 자유로운 영혼의 소유자에요. 가끔씩 세우는 계획은 여행이나 운동같이 액티비티성이 강한 활동들을 위한 것이에요. 계획이 틀어져도 상관없어요. 내일은 내일의 해가 뜬다고 생각하기 때문이에요. 하지만 발등에 불이 떨어진 경우 빠르게 일을 처리하는 편이에요.", "img": childEdu, "seoul":"삼육보건대학교, 서일대학교, 숭의여자대학교, 명지전문대학교, 한양여자대학교, 배화여자대학교, 백석예술대학교", "gyeonggi":"경기과학기술대학교, 경민대학교, 경복대학교, 국제대학교, 김포대학교, 대림대학교, 동남보건대학교, 동서울대학교, 동원대학교, 두원공과대학교, 부천대학교, 서정대학교, 수원여자대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 유한대학교, 경인여자대학교, 인천재능대학교"},
            "ENFP": {"department": "방송연예과", "explain": "새로운 계획, 새로워, 늘 짜릿해. 도중에 계획이 틀어져도 상관없어요, 아이디어가 반짝반짝 떠오르기 때문이죠. 계획적으로 해야하나 싶으면서도 계획을 세워 시작하면 끝없는 추진력을 얻어 일을 진행하는 타입이에요. 새로운 시도를 좋아해 중간중간 새롭게 계획되는 일들이 있어도 주저하지 않아요. 집단 생활에서 계획이 잘 되어가고 있다면 좋아하는 동료들의 모습을 보고 더 힘을 얻어 일을 추진해요.", "img": broadcast, "seoul":"서일대학교, 명지전문대학교, 인덕대학교, 백석예술대학교", "gyeonggi":"경민대학교, 경복대학교, 동서울대학교, 동아방송예술대학교, 동원대학교, 두원공과대학교, 서울예술대학교, 수원여자대학교, 신안산대학교, 여주대학교, 용인송담대학교, 청강문화산업대학교, 경인여자대학교"},
            "ENTP": {"department": "마케팅과", "explain": "낯선 계획에서, 가장 재밌는 냄새가 난다..도전적인 걸 좋아하기 때문에 정해진 계획대로 움직이는 건 지양해요. 단순 반복적인 일은 지루해요. 어려워 보여도 새롭게 시도해 해결할 수 있는 일을 더 선호해요. 가끔 엄청난 계획이 떠올라서 메모를 해두지만, 그걸 다시 열어보지 않는 매력이 있어요. 아이디어가 넘치는 당신. 아이디어를 이루기 위해 조금은 계획적으로 움직이면 더 발전할 수 있을 거에요!", "img": marketing, "seoul":"숭의여자대학교, 명지전문대학교, 한양여자대학교, 동양미래대학교", "gyeonggi":"김포대학교, 수원여자대학교, 신구대학교, 신안산대학교, 오산대학교, 장안대학교, 경인여자대학교, 인천재능대학교"},
            "ESTJ": {"department": "건축학과", "explain": "여행, 시험, 약속에도 계획표를 먼저짜는 스타일인 당신! 일정 계획에 진심인 당신은 특유의 현실적인 감각으로 철저하게 계획해 주변 사람들에게 믿음직한 사람이에요. 전 유교국가였던 나라의 국민답게 살짝 보수적으로 문제에 접근을 하지만, 그만큼 책임감을 가지고 강하게 계획을 추진할 수 있어요. 책임감이 강하고 그만큼 추진력도 있어 주어진 목표를 체계적으로 달성해나가는 모습은 정말 듬직해요. 하지만 계속 달려나가다보면 언젠가는 기름이 떨어지는 법. 여유로운 느낌을 선호하지 않는 당신이지만, 때로는 휴식을 취해 미래를 도모할 줄 알아야해요.", 'img': architecture, "seoul":"서일대학교, 인덕대학교, 동양미래대학교", "gyeonggi":"경기과학기술대학교, 경민대학교, 경복대학교, 계원예술대학교, 대림대학교, 동서울대학교, 동원대학교, 두원공과대학교, 부천대학교, 수원과학대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 용인송담대학교, 유한대학교, 한국복지대학교, 인천재능대학교"},
            "ESFJ": {"department": "항공과", "explain": "숨쉬는 것도 내 계획 중 일부! 항상 최고의 아웃풋을 원하기 때문에 계획을 철저하게 세우려 노력해요. 한 번 일을 시작하면 끝까지 성공적으로 진행하려하는 진취적인 성격이에요. 여유로운 걸 불안해하기 때문에 계획이 빡빡한 편이에요. 조금은 자신을 놓는 법을 배울 필요가 있어요. 리더가 되는 경우가 많아 일을 함께 추진할 때 모두가 계획을 잘 수행할 수 있도록 이끌어나가요.", "img": airport, "seoul":"명지전문대학교, 한양여자대학교, 인덕대학교, 백석예술대학교", "gyeonggi":"경복대학교, 국제대학교, 대림대학교, 동남보건대학교, 동서울대학교, 동원대학교, 두원공과대학교, 부천대학교, 서정대학교, 수원과학대학교, 수원여자대학교, 신구대학교, 신안산대학교, 안산대학교, 여주대학교, 연성대학교, 오산대학교, 용인송담대학교, 장안대학교, 한국관광대학교, 경인여자대학교, 인천재능대학교, 인하공업전문대학교"},
            "ENFJ": {"department": "상담학과", "explain": "사실...니 계획에 맞추는게 내 계획이야. 조화와 균형을 중시여기기 때문에 남들과 계획을 세울 때 의견을 모으는 걸 중요하게 생각해요. 속해있는 집단의 업무와 목적을 개인의 일보다 우선순위를 높여 생각해요. 계획을 세울 때 뜬구름을 잡는 두루뭉실한 목표보다 현실적인 목표를 세워 진행하는 걸 선호해요. 사람들을 굉장히 좋아하고 배려하지만, 보기보다 철저하고 현실적인 당신. 가끔은 자신만을 위한 계획을 세워보는 것도 좋아요.", "img": counseling, "seoul":"명지전문대학교", "gyeonggi":"경복대학교, 국제대학교, 동남보건대학교, 동원대학교, 서정대학교, 수원과학대학교, 여주대학교, 오산대학교, 한국복지대학교, 인천재능대학교"},
            "ENTJ": {"department": "경영과", "explain": " '오늘은 김치찌개 드시죠!' 계획을 진행함에 있어 결정이 필요한 상황에서 갈팡질팡 하는 일 없이 빠르게 결정하고 진행하는 타입이에요. 혼자하는 것보다 다른 사람들과 함께 일을 진행하는 걸 선호해 함께하는 일에서 두각을 나타내요. 계획이 수립될 때 같이 협력해서 아이디어를 도출하는 과정에서 희열을 느껴요. 완벽함을 추구하기 때문에 스스로를 힘들게 할 수 있어요, 가끔은 사람들과 어울리며 여유를 즐겨봐요.", "img": management, "seoul":"서일대학교, 명지전문대학교, 한양여자대학교, 배화여자대학교, 백석예술대학교, 동양미래대학교", "gyeonggi":"경기과학기술대학교, 대림대학교, 동서울대학교, 부천대학교, 서정대학교, 수원과학대학교, 안산대학교, 연성대학교, 경인여자대학교, 인천재능대학교"}
    };

    const start = () => {
        $(".start").hide();
        $(".question").show();
        next();
    }

    const aClick = () => {
            var type = $("#type").val();
            var preValue = $("#"+type).val();
            $("#"+type).val(parseInt(preValue)+1);
            next();
    };

    const bClick = () => {
            next();
    }

    const next = () => {
        if (num == 13) {
            $(".question").hide();
            $(".result").show();
            let mbti = "";
            ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
            ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
            ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
            ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
            $("#img").attr("src", result[mbti]["img"]);
            $("#department").html(result[mbti]["department"]);
            $("#where").html(result[mbti]["department"]+"가 개설된 학교는 어딜까?");
            $("#seoul").html(result[mbti]["seoul"]);
            $("#gyeonggi").html(result[mbti]["gyeonggi"]);
            $("#explain").html(result[mbti]["explain"]);
        } else {
            $(".progress-bar").attr('style','width: calc(100/12*'+num+'%)');
            $("#questionNum").html(tests[num]["questionNum"]);
            $("#title").html(tests[num]["title"]);
            $("#type").val(tests[num]["type"]);
            $("#A").html(tests[num]["A"]);
            $("#B").html(tests[num]["B"]);
            num++;
        }
    }

    return (
        <>
            <form>
                <article className="start">
                        <h1 className="main-title mt-5 text-center">나와 어울리는 학과 TEST (수도권 전문대 ver.)</h1>
                        <article className="sub mt-5 mb-5">
                            <img src={require("../assets/images/logo.png").default} className="sub-title-img"  alt="로고"/>
                            <h2 className="sub-title mt-5 text-center">2022년 대학 새내기가 되는 나!</h2>
                            <h2 className="sub-title mt-3 text-center">나와 어울리는 학과가 있는 수도권 전문대학교는 어딜까?🤔</h2>
                            <h2 className="sub-title mt-3 text-center">나와 어울리는 학과 TEST로 알아보자!</h2>
                        </article>
                    <div class="start-cover mb-5">
                    <button onClick={()=>{start()}} type="button" class="btn-start btn btn-primary">START</button>
                    </div>
                </article>
                <article className="question">
                    <article className="question_area mt-5 mb-5">
                            <h1 id="questionNum" className="text-center mt-3"  value={tests[1].questionNum}>{tests[1].questionNum}</h1>
                            <h5 id="title" className="question_content text-center mt-3" value={tests[1].title}>{tests[1].title}</h5>
                            <input id="type" type="hidden" value={tests[1].type} />
                            <button id="A" type="button" className="btn-answer btn btn-primary pt-5 pb-5 mt-4"
                            onClick = {()=> {aClick()}}
                        >{tests[1].A}</button>
                        <button id="B" type="button" className="btn-answer btn btn-primary pt-5 pb-5 mt-4"
                            onClick = {() => {bClick()}}
                        >{tests[1].B}</button>
                    </article>         
                </article>
                <article className="result">
                    <div className="result_area mt-5 mb-5">
                        <h1 className="result_title text-center mt-4">나와 잘 어울리는 학과는?</h1>
                        <img id="img" className="result-img" src={result["ISTJ"]["img"]} alt="img"/>
                        <h2 id="department" className="result_department text-center mt-4 mb-4">{result["ISTJ"]["department"]}</h2>
                        <h5 id="explain" className="result_explain text-center mb-5">{result["ISTJ"]["explain"]}</h5>
                        <h4 id="where" className="result_where">{result["ISTJ"]["department"]}</h4>
                        <h5 className="result_where">* 서울권 : </h5>
                        <h5 id="seoul" className="result_college">{result["ISTJ"]["seoul"]}</h5>
                        <h5 className="result_where">* 경기권 : </h5>
                        <h5 id="gyeonggi" className="result_college">{result["ISTJ"]["gyeonggi"]}</h5>
                        <h4 className="result_share text-center mt-5">나와 잘 어울리는 학과 Test 결과 공유하기</h4>
                        {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                        <div id="share_button" className="addthis_inline_share_toolbox_zmjb mt-3 mb-5"></div>
                        <div className="final_button mb-5">
                            <button onClick={()=> {window.location.reload()}} type="reset" class="btn_guestbook btn btn-primary" style={{float: 'left'}}>다시하기</button>
                            <Link to={"/guestbook"} style={{textDecoration:'none'}}><button type="button" class="btn_guestbook btn btn-primary">방명록 남기기</button></Link>
                        </div>
                    </div>
                </article>
                <input type="hidden" id="EI" value="0"/>
                <input type="hidden" id="SN" value="0"/>
                <input type="hidden" id="TF" value="0"/>
                <input type="hidden" id="JP" value="0"/>
                <Helmet>
                {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61482ad7e0538b1d"></script>
                </Helmet>
            </form>
        </>
    )
}

export default Test;