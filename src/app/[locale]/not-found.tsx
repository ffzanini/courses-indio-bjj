import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-lg text-muted-foreground">
        Página não encontrada / Page not found
      </p>
      <Link
        href="/"
        className="font-semibold text-guard-passing-theme hover:underline"
      >
        ← Home
      </Link>
    </div>
  );
}
