import { Img, Section } from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Logo = () => {
  return (
    <Section className="mt-[32px]">
      <Img
        src={`${baseUrl}/static/vslogo.jpg`}
        width="40"
        height="37"
        alt="Barrett Penrod Voice Studio"
        className="mx-auto my-0"
      />
      {/* <div className="logo p-4">
        <Image src={VSLogo} alt="Barrett Penrod Voice Studio Logo" />
      </div> */}
    </Section>
  );
};
