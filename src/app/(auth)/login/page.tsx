import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <h1>로그인</h1>
        <p>
          아직 계정이 없으신가요?
          <Link href="/signup" className={styles.signup}>
            가입하기
          </Link>
        </p>
        <div className={styles.loginButtonWrapper}>
          <button className={styles.googleButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#4285f4",
                  fillOpacity: 1,
                }}
                d="M12.238 9.816v4.649h6.586c-.289 1.496-1.156 2.762-2.457 3.613l3.969 3.02c2.316-2.094 3.652-5.172 3.652-8.825 0-.851-.078-1.668-.222-2.457Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#34a853",
                  fillOpacity: 1,
                }}
                d="m5.379 14.285-.895.672-3.171 2.422A12.268 12.268 0 0 0 12.238 24c3.305 0 6.075-1.07 8.098-2.902l-3.973-3.02c-1.09.719-2.48 1.156-4.125 1.156-3.183 0-5.886-2.105-6.855-4.941Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#fbbc05",
                  fillOpacity: 1,
                }}
                d="M1.313 6.621A11.659 11.659 0 0 0 0 12c0 1.941.477 3.762 1.313 5.379 0 .012 4.074-3.098 4.074-3.098A7.047 7.047 0 0 1 4.997 12c0-.797.144-1.559.39-2.281Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#ea4335",
                  fillOpacity: 1,
                }}
                d="M12.238 4.777c1.801 0 3.403.614 4.684 1.79l3.504-3.434C18.3 1.187 15.543 0 12.238 0 7.453 0 3.328 2.695 1.313 6.621l4.07 3.098c.969-2.836 3.672-4.942 6.855-4.942Zm0 0"
              />
            </svg>
            <span>Google로 로그인</span>
          </button>
          <button className={styles.facebookButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#fff",
                  fillOpacity: 1,
                }}
                d="M25.008 12.504C25.008 5.594 19.406 0 12.504 0 5.594 0 0 5.594 0 12.504c0 6.238 4.574 11.414 10.55 12.351v-8.738H7.376v-3.613h3.176V9.75c0-3.137 1.863-4.867 4.719-4.867 1.367 0 2.8.242 2.8.242v3.082h-1.574c-1.555 0-2.039.965-2.039 1.95v2.347h3.469l-.555 3.613h-2.914v8.738c5.977-.937 10.55-6.113 10.55-12.351"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1877f2",
                  fillOpacity: 1,
                }}
                d="m17.371 16.117.555-3.613h-3.469v-2.348c0-.984.484-1.949 2.04-1.949h1.573V5.125s-1.433-.242-2.8-.242c-2.856 0-4.72 1.73-4.72 4.867v2.754H7.376v3.613h3.176v8.738c.636.098 1.289.153 1.953.153.664 0 1.316-.055 1.953-.153v-8.738h2.914"
              />
            </svg>
            <span>Facebook으로 로그인</span>
          </button>
          <div className={styles.divider}>
            <span>또는</span>
          </div>
          <button>이메일로 로그인</button>
        </div>
        <div className={styles.close}>
          <Link href="/main">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill-rule="evenodd"
                filter="url(#close_svg__a)"
                transform="translate(-421 -24)"
              >
                <path d="m439.77 28 1.23 1.23-6.77 6.77 6.77 6.77-1.23 1.23-6.77-6.77-6.77 6.77-1.23-1.23 6.769-6.77L425 29.23l1.23-1.23 6.77 6.769L439.77 28z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
