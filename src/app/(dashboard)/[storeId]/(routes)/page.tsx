import { UserButton } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

interface Props {
  params: {
    storeId: string;
  };
}

const DashBoardPage = async ({ params }: Props) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <div>This is a dashboard</div>
      <p>Store name: {store?.name}</p>
      <UserButton />
    </>
  );
};

export default DashBoardPage;
