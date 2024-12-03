import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInput}>
          <p>▶ Delta ES 에서 제공하는 최신 제품 정보 받아보기</p>
          <form action="submit">
            <input type="email" placeholder="이메일 주소를 입력하세요." />
            <button>제출</button>
          </form>
        </div>
        <div className={styles.company}>
          <div className={styles.logo}>
            <Image
              src="/images/footer-logo.png"
              alt="logo"
              width="176"
              height="52"
            />
          </div>
          <div className={styles.locationPartner}>
            <div className={styles.location}>
              <p>
                본사 : 경기도 부천시 원미구 길주로411번길 20, (춘의 디아크원)
                7층 707호
              </p>
              <p>
                서울사무소 : 서울시 금천구 벚꽃로 254, 801호 (가산디지털 2단지,
                월드메르디앙 벤처센터 1차)
              </p>
              <p>
                충남사무소 : 충남천안시 불당로 650-3번지 충남지식산업센터 602호
              </p>
              <div className={styles.share}>
                <p>
                  <a href="https://www.deltaes.co.kr" target="_blank">
                    www.deltaes.co.kr
                  </a>
                  <span>TEL: 070-8255-6001~5 </span>
                  <a href="mailto:young@deltaes.co.kr">young@deltaes.co.kr</a>
                </p>
              </div>
              <p>DELTA ES CO., LTD. COPYRIGHT@2020 CORP. ALL RIGHTS RESERVED</p>
            </div>
            <div className={styles.partner}>
              <Image
                src="/images/partner.jpg"
                alt="partner"
                width="117"
                height="57"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
