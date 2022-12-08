import { useRouter } from "next/router";

const UpdateExpensePage = () => {
  const router = useRouter();

  return <div>ID: {router.query.id}</div>;
};

export default UpdateExpensePage;
