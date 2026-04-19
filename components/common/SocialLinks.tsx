import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { siteConfig } from "@/site.config";
import SocialIcon from "./SocialIcon";

const icons = {
  github: SiGithub,
  linkedin: BsLinkedin,
  twitter: TiSocialTwitter,
} as const;

/** Social icons driven by `siteConfig.social`. The caller owns the flex container. */
export default function SocialLinks({ iconClassName }: { iconClassName?: string }) {
  return (
    <>
      {(Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).map((key) => {
        const Icon = icons[key];

        return (
          <SocialIcon key={key} href={siteConfig.social[key]} externalClassName={iconClassName}>
            <Icon />
          </SocialIcon>
        );
      })}
    </>
  );
}
