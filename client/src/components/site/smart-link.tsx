import type { AnchorHTMLAttributes } from "react";
import { Link } from "wouter";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Client-side navigation for internal page routes; a plain anchor for
 * hashes (e.g. "/#metodo"), mailto: and external URLs.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const isInternalRoute = href.startsWith("/") && !href.includes("#");
  if (isInternalRoute) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
