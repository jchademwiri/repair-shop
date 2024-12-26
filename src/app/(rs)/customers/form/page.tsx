import * as Sentry from '@sentry/nextjs';

import CustomerForm from '@/app/(rs)/customers/form/CustomerForm';
import BackButton from '@/components/BackButton';
import { getCustomer } from '@/lib/queries';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { customerId } = await searchParams;

  if (!customerId) return { title: 'New Customer' };

  return { title: `Edit Customer ID #${customerId}` };
}

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
