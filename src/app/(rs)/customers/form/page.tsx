import * as Sentry from "@sentry/nextjs";

import BackButton from "@/components/BackButton";
import { getCustomer } from "@/lib/queries";

import CustomerForm from "./CustomerForm";

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
      return <CustomerForm customer={customer} />;

      // https://youtu.be/bg6KyucKd88?list=PL0Zuz27SZ-6PCLz7VMP2QQdeKa83rshe5&t=2055
    } else {
      // new customer form component
      return <CustomerForm />;
    }
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e);
      throw e;
    }
  }
}
