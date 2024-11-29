import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>▶ Delta ES 에서 제공하는 최신 제품 정보 받아보기</p>
        <form action="submit">
          <input type="email" placeholder="이메일 주소를 입력하세요." />
          <button>제출</button>
        </form>
      </div>
      <div>로고</div>
      <div>
        <p>본사: 경기도 부천시 원미구 길주로 411번길 20, 707호</p>
        <p>서울사무소: 서울시 강남구 테헤란로 254, 801호</p>
        <p>충남사무소: 충남 천안시 불당로 650-39, 충남지식센터 602호</p>
      </div>
      <div>
        <p>
          <a href="https://www.deltaes.co.kr" target="_blank">
            www.deltaes.co.kr
          </a>{" "}
          TEL: 070-8255-6001~5{" "}
          <a href="mailto:young@deltaes.co.kr">young@deltaes.co.kr</a>
        </p>
      </div>
      <div>페이스북, 유튜브</div>
      <div>SIEMENS</div>
    </footer>
  );
}
