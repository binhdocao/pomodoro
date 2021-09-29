import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";
import Dropdown from "./Dropdown";
import GoogleLogo from "../assets/google-black.png";
import EmailLogo from "../assets/envelope-black.png";

function Button({ icon, children }) {
  return (
    <button className={classes.button}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
    </button>
  );
}

function ImageButton({ children, src }) {
  return (
    <button className={classes.imageButton}>
      <img src={src} alt="" className={classes.imageIcon} />
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <Button icon="insert_chart_outlined">Report</Button>
          </li>
          <li>
            <Button icon="settings">Setting</Button>
          </li>
          <li>
            <Button icon="account_circle">Login</Button>
            <Dropdown>
              <ImageButton src={GoogleLogo}>Login with Google</ImageButton>
              <ImageButton src={EmailLogo}>Login with Email</ImageButton>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
}
