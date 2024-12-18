import * as Sentry from "@sentry/nextjs";

import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    // customers/form?searchParams
    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found.
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      // put customer form component
      console.log(customer);
    } else {
      // new customer form component
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e);
      throw e;
    }
  }
}
