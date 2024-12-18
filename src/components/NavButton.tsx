import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { Button } from "./ui/button";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

const NavButton = ({ icon: Icon, label, href }: Props) => {
  return (
    <div>
      <Button
        variant={"ghost"}
        size={"icon"}
        aria-label={label}
        title={label}
        className="rounded-full"
        asChild
      >
        {href ? (
          <Link href={href}>
            <Icon />
          </Link>
        ) : (
          <Icon />
        )}
      </Button>
    </div>
  );
};
export default NavButton;
