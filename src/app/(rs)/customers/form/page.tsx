import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    // Edit a customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customerId) {
        return (
          <>
            <h1 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h1>
            <BackButton title="Go Back" />
          </>
        );
      }
      console.log(customer);

      //   put customer form component
    } else {
      // new customer form component
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
      //   console.error(e.message);
    }
  }
}
