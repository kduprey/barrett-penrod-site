import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import { Logo } from "../components/Logo";
import { TailwindTheme } from "../components/TailwindTheme";

interface VercelInviteUserEmailProps {
  name?: string;
  startDate: Date;
  zoomLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  name = "Temp Name",
  startDate = new Date(),
  zoomLink = "Temp Zoom Link",
}: VercelInviteUserEmailProps) => {
  const previewText = `Barrett Penrod Voice Studio - Consultation Session Booking Confirmation`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            fontFamily: {
              sans: ["Montserrat", "Arial", "sans-serif"],
            },
            extend: {
              colors: {
                primary: "#364249",
                secondary: "#E3F2FC",
              },
              listStyleType: {
                square: "square",
              },
            },
          },
        }}
      >
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/vslogo.jpg`}
                width={200}
                alt="Barrett Penrod Voice Studio"
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Thank you for booking!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {name},
            </Text>
            <Text className="text-center text-[14px] font-bold leading-[24px] text-black">
              Thank you for booking your free consultation!
            </Text>

            <Section className="text-center">
              <Text>
                Time: {startDate.toLocaleTimeString()}
                <br />
                Date: {startDate.toLocaleDateString()}
                <br />
                Zoom Link: <Link href={zoomLink}>{zoomLink}</Link>
              </Text>
            </Section>

            <Section>
              <Text className="font-bold">
                Please fill out the Google intake form{" "}
                <Link href="https://forms.gle/bxyh17gJy6KYCUaS6">here</Link> no
                later than 24 hours prior to our appointment.
              </Text>
              <Text>
                Please come prepared to discuss the content of the intake form,
                as well any questions you have for me. Rates, policy, and
                schedule will all be covered in our consultation.
              </Text>
              <Text>Thank you and looking forward to meeting you!</Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This invitation was intended for {name}. If you were not expecting
              this invitation, you can ignore this email. If you are concerned
              about your account's safety, please reply to this email to get in
              touch with us
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;

const CustomButton = () => (
  <Section className="mb-[32px] mt-[32px] text-center">
    <Button
      pX={20}
      pY={12}
      className="bg-primary text-secondary rounded text-center font-semibold no-underline hover:cursor-pointer "
    >
      Join the team
    </Button>
  </Section>
);
