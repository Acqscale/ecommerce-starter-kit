import { useState, useCallback, ChangeEvent } from 'react';

import CheckoutForm from './form';

export default function CheckoutPage() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [saveCheckoutData, setSaveCheckoutData] = useState<boolean>(true);

  const handleChanges = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      func: (val: string) => void
    ) => {
      func(e.target.value);
    },
    []
  );

  return (
    <div className="container p-12 mx-auto bg-background">
      <div className="flex flex-col px-0 mx-auto w-full md:flex-row">
        <CheckoutForm
          handleChanges={handleChanges}
          firstName={firstName}
          lastName={lastName}
          email={email}
          city={city}
          postcode={postcode}
          address={address}
          notes={notes}
          saveCheckoutData={saveCheckoutData}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setCity={setCity}
          setPostcode={setPostcode}
          setAddress={setAddress}
          setNotes={setNotes}
          setSaveCheckoutData={setSaveCheckoutData}
        />
        <div className="flex flex-col ml-0 w-full lg:ml-12 lg:w-2/5">
          <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-xl font-bold text-on-background">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/user/erondu/1600x900"
                      alt="image"
                      className="w-60"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-background">
                      Title
                    </h2>
                    <p className="text-sm text-on-background">
                      Lorem ipsum dolor sit amet, tet
                    </p>
                    <span className="font-medium text-primary">Price $20</span>
                  </div>
                  <div className="text-on-background">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/collection/190727/1600x900"
                      alt="image"
                      className="w-60"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-background">
                      Title
                    </h2>
                    <p className="text-sm text-on-background">
                      Lorem ipsum dolor sit amet, tet
                    </p>
                    <span className="font-medium text-primary">Price $20</span>
                  </div>
                  <div className="text-on-background">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-4 mt-4">
              <h2 className="text-xl font-bold text-on-background">ITEMS 2</h2>
            </div>
            <div className="flex items-center py-4 last:pb-0 w-full text-sm last:text-base font-semibold border-b last:border-b-0 lg:py-5 lg:px-3 border-border-color text-on-background">
              Subtotal<span className="ml-2 text-primary">$20.00</span>
            </div>
            <div className="flex items-center py-4 last:pb-0 w-full text-sm last:text-base font-semibold border-b last:border-b-0 lg:py-5 lg:px-3 border-border-color text-on-background">
              Shipping Tax<span className="ml-2 text-primary">$10</span>
            </div>
            <div className="flex items-center py-4 last:pb-0 w-full text-sm last:text-base font-semibold border-b last:border-b-0 lg:py-5 lg:px-3 border-border-color text-on-background">
              Total<span className="ml-2 text-primary">$30.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
