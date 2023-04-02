import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Intro from "@/components/Intro";
import Explanation from "@/components/Explanation";
import Solution from "@/components/Solution";

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
      <Solution
        solution={t("solution")}
        solution1Title={t("solution1Title")}
        solution1Desc={t("solution1Desc")}
        solution2Title={t("solution2Title")}
        solution2Desc={t("solution2Desc")}
        solution3Title={t("solution3Title")}
        solution3Desc={t("solution3Desc")}
        solution4Title={t("solution4Title")}
        solution4Desc={t("solution4Desc")}
        solution5Title={t("solution5Title")}
        solution5Desc={t("solution5Desc")}
      />
    </main>
  );
}
