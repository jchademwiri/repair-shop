import CustomerSerach from "@/app/(rs)/customers/CustomerSerach";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";

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

  const results = await getCustomerSearchResults(searchText);

  return (
    <>
      <CustomerSerach />
      <p>{JSON.stringify(results)}</p>
    </>
  );
}
