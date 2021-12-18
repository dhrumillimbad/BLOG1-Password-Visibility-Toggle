import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/login.module.css";
import { PasswordField } from "../components/PasswordField";

const Login: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.container}>
      <section className={styles.form_wrap}>
        <div className={styles.the_form}>
          <h1 className={styles.title_h1}>Login</h1>
          <hr className={styles.hr_divider} />
          <form>
            <div className={styles.form_fields}>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Username
                </label>
                <input
                  value={username}
                  type="text"
                  className={styles.input_area}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Password
                  <Link href="#">
                    <a className={styles.link}>Forgot Password?</a>
                  </Link>
                </label>
                <PasswordField password={password} setPassword={setPassword} />
              </fieldset>
            </div>
            <input className={styles.input_btn} type="submit" value="Login" />
            <div className={styles.asker}>
              <span className={styles.span_member}>
                Not a member?
                <Link href="/signup">
                  <a className={styles.link_primary} href="/signup">
                    Join now
                  </a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;