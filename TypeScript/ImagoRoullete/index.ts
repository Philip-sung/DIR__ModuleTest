const getMemberBrowserScript = () => `
-----------------------------------CopyLine-----------------------------------
const basePath =
  "/html/body/div[1]/div/div/div/div/div/div/div/div/main/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/ul";
const xpathForLiCount = \`\${basePath}/li\`;
const liElements = document.evaluate(
  xpathForLiCount,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);
console.log(\`총 li 요소의 개수: \${liElements.snapshotLength}\`);
const ImagoMembersWithInfo = [];
for (let i = 1; i < liElements.snapshotLength + 1; i++) {
  const nameXPath = \`/html/body/div[1]/div/div/div/div/div/div/div/div/main/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/ul/li[\${i}]//span[contains(@class, "c-lmMdX") and contains(@class, "ikUdxvv-css")]/text()\`;
  const jobXPath = \`/html/body/div[1]/div/div/div/div/div/div/div/div/main/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/ul/li[\${i}]//span[contains(@class, "c-lmMdX") and contains(@class, "ihlcrKh-css")]/text()\`;
  const positionXPath = \`/html/body/div[1]/div/div/div/div/div/div/div/div/main/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div/ul/li[\${i}]//span[contains(@class, "c-lmMdX") and contains(@class, "iiJHmwm-css")]/text()\`;

  // XPath를 이용해 특정 요소의 텍스트를 추출하는 함수
  function extractTextByXPath(xpath) {
    const iterator = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    let item = iterator.iterateNext();
    let text = "";

    while (item) {
      text += item.textContent + " ";
      item = iterator.iterateNext();
    }

    return text.trim();
  }

  // 각 XPath에 대한 정보 추출 및 출력
  const nameText = extractTextByXPath(nameXPath);
  const jobText = extractTextByXPath(jobXPath);
  const positionText = extractTextByXPath(positionXPath);
  const member = { name: nameText, job: jobText, position: positionText };
  ImagoMembersWithInfo.push(member);
}
-----------------------------------CopyLine-----------------------------------
`;
type ImagoMember = {
  name: string;
  job: string;
  position: string;
};
const ImagoMembersWithInfo: ImagoMember[] = [
  {
    name: "Adam",
    job: "Front-end",
    position: "Biz Platform",
  },
  {
    name: "가윤지",
    job: "Front-end",
    position: "User Platform",
  },
  {
    name: "감동욱",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Solution Group",
  },
  {
    name: "강혜민",
    job: "과제 행정 및 운영 실무",
    position: "Finance",
  },
  {
    name: "곽민지",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "권은서",
    job: "데이터 관련 인공지능 기술 개발",
    position: "Data Pipeline",
  },
  {
    name: "김경래",
    job: "데이터 가공 관리 및 연구소 지원",
    position: "Data",
  },
  {
    name: "김도엽",
    job: "QA Engineer",
    position: "QA",
  },
  {
    name: "김보준",
    job: "QA Engineer",
    position: "QA",
  },
  {
    name: "김성용",
    job: "Back-end",
    position: "User Platform",
  },
  {
    name: "김성주",
    job: "디지털 덴티스트리 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "김성진",
    job: "Back-end",
    position: "Biz Platform",
  },
  {
    name: "김송주",
    job: "글로벌 시장 분석 및 전략수립/실행",
    position: "Growth",
  },
  {
    name: "김승규",
    job: "데이터 파이프라인 개발",
    position: "Data Pipeline",
  },
  {
    name: "김승희",
    job: "클라우드 데이터 엔지니어",
    position: "Cloud Infra",
  },
  {
    name: "김시온",
    job: "사업 개발",
    position: "Growth",
  },
  {
    name: "김어진",
    job: "Front-end",
    position: "User Platform · 팀리더",
  },
  {
    name: "김영준",
    job: "CEO",
    position: "CEO · 대표이사",
  },
  {
    name: "김윤주",
    job: "Back-end",
    position: "User Platform",
  },
  {
    name: "김은현",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Studio",
  },
  {
    name: "김인재",
    job: "소프트웨어 기획",
    position: "Service Operation · 팀리더",
  },
  {
    name: "김정의",
    job: "QA Engineer",
    position: "QA",
  },
  {
    name: "김정화",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Studio",
  },
  {
    name: "김주예",
    job: "재무/회계",
    position: "Finance",
  },
  {
    name: "김주형",
    job: "QA Engineer",
    position: "QA",
  },
  {
    name: "김지안",
    job: "인사 채용 담당",
    position: "People",
  },
  {
    name: "김지연",
    job: "UX/UI 디자인",
    position: "Design",
  },
  {
    name: "김진완",
    job: "Front-end",
    position: "User Platform",
  },
  {
    name: "김학완",
    job: "Business Group 총괄",
    position: "Business Group · 그룹리더",
  },
  {
    name: "김한나",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Solution Group",
  },
  {
    name: "김혜인",
    job: "QA Engineer",
    position: "QA · 팀리더",
  },
  {
    name: "남궁혜진",
    job: "Front-end",
    position: "User Platform",
  },
  {
    name: "남혁민",
    job: "Back-end",
    position: "Crown",
  },
  {
    name: "노동현",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown · 팀리더",
  },
  {
    name: "류명한",
    job: "Front-end",
    position: "User Platform",
  },
  {
    name: "명대광",
    job: "CAD 알고리즘 및 웹기반 의료용 소프트웨어 연구 개발",
    position: "Solution Group ,",
  },
  {
    name: "문희경",
    job: "솔루션 사업화 관련 성장 전략 수립 및 실행",
    position: "Growth",
  },
  {
    name: "박윤서",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "박정호",
    job: "디지털 덴탈 CAD 소프트웨어 기술 개발",
    position: "CAD",
  },
  {
    name: "박주영",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "박지은",
    job: "인사, 총무, 행정 지원",
    position: "People",
  },
  {
    name: "변현지",
    job: "사업 개발",
    position: "Growth",
  },
  {
    name: "성필",
    job: "FE/BE Engineer",
    position: "Crown",
  },
  {
    name: "손진원",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "CAD · 팀리더",
  },
  {
    name: "손진은",
    job: "재무/회계",
    position: "Finance · 팀리더",
  },
  {
    name: "손태근",
    job: "덴탈 CAD 소프트웨어 개발 총괄",
    position: "Platform Group · 그룹리더 ,",
  },
  {
    name: "송경민",
    job: "서비스 그룹 총괄",
    position: "Service Group · 그룹리더",
  },
  {
    name: "신봉주",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Denture",
  },
  {
    name: "신승길",
    job: "Back-end",
    position: "Cloud Infra",
  },
  {
    name: "신영석",
    job: "서비스 운영 및 고객 관리",
    position: "Service Operation",
  },
  {
    name: "심호성",
    job: "운영 그룹 총괄",
    position: "Operation Group · 그룹리더 ,",
  },
  {
    name: "안준성",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "오수용",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "오영진",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Denture",
  },
  {
    name: "오창만",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Studio · 팀리더",
  },
  {
    name: "왕건",
    job: "서비스 기획",
    position: "Solution Group",
  },
  {
    name: "유승현",
    job: "Front-end",
    position: "Biz Platform",
  },
  {
    name: "유재일",
    job: "Back-end",
    position: "Cloud Infra",
  },
  {
    name: "윤영호",
    job: "",
    position: "Growth",
  },
  {
    name: "윤준식",
    job: "사업 홍보",
    position: "Growth",
  },
  {
    name: "이동욱",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Denture",
  },
  {
    name: "이상인",
    job: "Back-end",
    position: "Biz Platform · 팀리더",
  },
  {
    name: "이서희",
    job: "서비스 기획",
    position: "Platform Group",
  },
  {
    name: "이성빈",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "이시형",
    job: "Front-end",
    position: "Crown",
  },
  {
    name: "이주연",
    job: "개발 기획, 기공 데이터 준비, 치과 임상 적용 실험",
    position: "Platform Group",
  },
  {
    name: "이준일",
    job: "Product Designer",
    position: "Design · 팀리더",
  },
  {
    name: "이진우",
    job: "데이터 관련 인공지능 기술 개발",
    position: "Data Pipeline",
  },
  {
    name: "이진웅",
    job: "Cloud Infra Team 총괄",
    position: "Cloud Infra · 팀리더",
  },
  {
    name: "이태석",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "이홍희",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "장재웅",
    job: "솔루션 사업화",
    position: "RA · 팀리더",
  },
  {
    name: "장희수",
    job: "데이터 가공",
    position: "Data · 팀리더",
  },
  {
    name: "정다원",
    job: "RA 담당",
    position: "RA",
  },
  {
    name: "정대일",
    job: "Back-end",
    position: "Cloud Infra",
  },
  {
    name: "정서연",
    job: "솔루션 기획",
    position: "Solution Group",
  },
  {
    name: "정송이",
    job: "Back-end",
    position: "Crown",
  },
  {
    name: "정연호",
    job: "FE/BE Engineer",
    position: "Studio",
  },
  {
    name: "정윤진",
    job: "Growth Team Leader",
    position: "Growth · 팀리더",
  },
  {
    name: "조원삼",
    job: "Data Manager",
    position: "Data",
  },
  {
    name: "조재호",
    job: "UX/UI 디자인",
    position: "Design",
  },
  {
    name: "조현철",
    job: "인공지능 기반 덴탈 소프트웨어 연구개발",
    position: "Solution Group",
  },
  {
    name: "조혜림",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "천소정",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Denture",
  },
  {
    name: "최규진",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "CAD",
  },
  {
    name: "최민우",
    job: "데이터 가공",
    position: "Data",
  },
  {
    name: "최아영",
    job: "Content Designer",
    position: "Design",
  },
  {
    name: "최준영",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Crown",
  },
  {
    name: "최준태",
    job: "Imagoworks Thailand Digital Lab 근무",
    position: "Service Group",
  },
  {
    name: "최진혁",
    job: "Solution Group 총괄",
    position: "Solution Group · 그룹리더",
  },
  {
    name: "최해림",
    job: "Front-end",
    position: "Studio",
  },
  {
    name: "탁성준",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Denture · 팀리더",
  },
  {
    name: "표소이",
    job: "서비스 운영 및 고객 관리",
    position: "Service Operation",
  },
  {
    name: "한상구",
    job: "Back-end",
    position: "Cloud Infra",
  },
  {
    name: "허진호",
    job: "Imagoworks Thailand Digital Lab 근무",
    position: "Service Group",
  },
  {
    name: "현연승",
    job: "덴탈 CAD 소프트웨어 개발",
    position: "Studio",
  },
];

const args = process.argv.slice(2); // 첫 두 개의 매개변수(node 경로와 파일 경로)를 제외
if (args[0] === "help") {
  console.log(`
-Get browser script for flex : script
-Check all member : allMember
-Check all team name : allTeam
-Check member number : memberLength
-Update Info : updateInfo
-Run roullete : npm start -- [winnerNum] [TeamName] [exact]:exact match of Teamname(Exclude Team leader)
  `);
}
if (args[0] === "script") {
  console.log(getMemberBrowserScript());
}

if (args[0] === "allMember") {
  console.log(ImagoMembersWithInfo);
}

if (args[0] === "allTeam") {
  const uniqueTeamName = Array.from(
    new Set(ImagoMembersWithInfo.map((member) => member.position))
  );
  console.log("Teams of Imagoworks");
  for (const team of uniqueTeamName) {
    console.log(`-${team}`);
  }
}

if (args[0] === "memberLength") {
  console.log(ImagoMembersWithInfo.length);
}

if (args[0] === "updateInfo") {
  console.log("2024.04.09");
}

if (!Number.isNaN(Number(args[0]))) {
  let candidate: ImagoMember[] = [];
  if (args[1] === undefined) {
    candidate = ImagoMembersWithInfo;
  } else if (args[2] === "exact") {
    candidate = ImagoMembersWithInfo.filter(
      (member) => member.position === args[1]
    );
  } else {
    candidate = ImagoMembersWithInfo.filter((member) =>
      member.position.includes(args[1])
    );
  }

  for (let i = 0; i < Number(args[0]); i++) {
    const randomNumber = Math.trunc(Math.random() * candidate.length);
    const randomMember = candidate.at(randomNumber);
    console.log(randomMember);
  }
}
