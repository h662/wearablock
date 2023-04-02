import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="max-w-screen-xl mx-auto border-t flex flex-col text-xs md:text-sm text-main gap-1 p-1 md:p-2">
      <div>
        주식회사 웨어러블록 | 대표 홍성현 | E-Mail : h662hong@wearablock.com
      </div>
      <div>
        사업자 번호 597-86-02879 | 주소 경기도 김포시 김포한강9로 75번길 66,
        505호
      </div>
      <div>2023, Designed by Dulgi.</div>
    </footer>
  );
};

export default Footer;
