import type { IconType } from "react-icons";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { siteConfig } from "@/content/site.config";
import SocialIcon from "./SocialIcon";

/**
 * Icon and label for each key in `siteConfig.social`.
 *
 * Typed against those keys deliberately: adding a social account without an
 * icon is then a compile error here rather than an undefined destructure at
 * runtime.
 */
const socials: Record<keyof typeof siteConfig.social, { Icon: IconType; label: string }> = {
  github: { Icon: SiGithub, label: "GitHub" },
  linkedin: { Icon: BsLinkedin, label: "LinkedIn" },
  twitter: { Icon: TiSocialTwitter, label: "Twitter / X" },
};

/**
 * Renders social icons from the site config.
 *
 * @param props - Social link options.
 * @returns Social link icons.
 */
export default function SocialLinks({ iconClassName }: { iconClassName?: string }) {
  return (
    <>
      {(Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).map((key) => {
        const { Icon, label } = socials[key];

        return (
          <SocialIcon
            key={key}
            href={siteConfig.social[key]}
            externalClassName={iconClassName}
            label={label}
          >
            <Icon />
          </SocialIcon>
        );
      })}
    </>
  );
}
