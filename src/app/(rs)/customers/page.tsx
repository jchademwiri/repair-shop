import * as Sentry from "@sentry/nextjs";

import CustomerSerach from "@/app/(rs)/customers/CustomerSerach";
import CustomerTable from "@/app/(rs)/customers/CustomerTable";
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

  const span = Sentry.startInactiveSpan({
    name: "getCustomerSearchResults-2",
  });

  const results = await getCustomerSearchResults(searchText);
  span.end();

  return (
    <>
      <CustomerSerach />
      {results.length ? (
        <CustomerTable data={results} />
      ) : (
        <p>No results found</p>
      )}
    </>
  );
}
