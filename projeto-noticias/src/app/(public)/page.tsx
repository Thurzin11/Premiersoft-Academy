import CategoryNav from "@/components/public/CategoryNav";
import NewList from "@/components/public/NewList";

export default function Page() {
  return (
    <>
      <CategoryNav />
      <NewList isAdmin={false}/>
    </>
  );
}
