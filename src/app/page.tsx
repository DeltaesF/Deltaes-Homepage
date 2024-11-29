import styles from "../app/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <p>슬라이드 이미지</p>
        </div>
        <div className={styles.article}>
          <article>제품안내</article>
          <article>적용산업</article>
          <article>엔지니어링 컨설팅 서비스</article>
          <article>교육안내</article>
        </div>
      </section>
      <section className={styles.section1}>
        <div className={styles.article1}>
          <article>
            <h3>교육 일정표</h3>
            <div></div>
            <button>더보기</button>
          </article>
          <article>
            <h3>행사소식</h3>
            <div></div>
            <button>더보기</button>
          </article>
          <article>
            <div className={styles.article1}>
              <button>공지사항</button>
              <button>제품소식</button>
              <button>자료실</button>
            </div>
          </article>
        </div>
      </section>
      <section className={styles.section2}>
        <article>
          <div>
            델타이에스 <br />
            고객사
          </div>
          <div>슬라이드로 제작</div>
        </article>
      </section>
    </main>
  );
}
