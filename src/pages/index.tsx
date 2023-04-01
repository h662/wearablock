import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Intro from "@/components/Intro";
import Explanation from "@/components/Explanation";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main>
      <Intro />
      <Explanation
        explanation1={t("explanation1")}
        explanation2={t("explanation2")}
        explanation3={t("explanation3")}
      />
    </main>
  );
}
