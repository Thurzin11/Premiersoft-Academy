import CategoryNav from "@/components/public/CategoryNav";
import NewList from "@/components/public/NewList";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <CategoryNav />
      <NewList newType="World"/>
    </>
  );
}
