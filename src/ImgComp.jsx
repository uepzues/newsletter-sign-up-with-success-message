import imgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import imgMobile from "./assets/images/illustration-sign-up-mobile.svg";

export function ImgComp() {
  return (
    <>
      <picture>
        <source media="(min-width:700px )" srcSet={imgDesktop} />
        <img src={imgMobile} alt="image" />
      </picture>
    </>
  );
}
