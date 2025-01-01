import CustomerSerach from "@/app/(rs)/customers/CustomerSerach";

export const metadata = {
  title: "Customer Serach",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;
  if (!searchText) return <CustomerSerach />;

  // query the database

  // return the results

}
