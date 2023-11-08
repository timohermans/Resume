import { useEffect } from "react";

type Props = {
  component: React.ReactNode;
  title: string;
};

export default function Page({ component, title }: Props) {
  useEffect(() => {
    document.title = "Timo Hermans | " + title;
  }, [title]);
  return <>{component}</>;
}
