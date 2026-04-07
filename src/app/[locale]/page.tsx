import { HomePage } from "@/components/HomePage";
import { bundleCheckoutUrl } from "@/constants/site";

export default function Page() {
  return <HomePage bundleCheckoutHref={bundleCheckoutUrl()} />;
}
