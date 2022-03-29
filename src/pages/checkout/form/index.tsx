import {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  SetStateAction,
} from 'react';

import Checkbox from '@/components/ui/checkbox';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';

type CheckoutFormProps = {
  handleChanges: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    func: (val: string) => void
  ) => void;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  postcode: string;
  setPostcode: Dispatch<SetStateAction<string>>;
  notes: string;
  setNotes: Dispatch<SetStateAction<string>>;
  saveCheckoutData: boolean;
  setSaveCheckoutData: Dispatch<SetStateAction<boolean>>;
};

const CheckoutForm: FunctionComponent<CheckoutFormProps> = ({
  handleChanges,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  address,
  setAddress,
  city,
  setCity,
  postcode,
  setPostcode,
  notes,
  setNotes,
  saveCheckoutData,
  setSaveCheckoutData,
}) => {
  return (
    <div className="flex flex-col md:w-full">
      <h2 className="mb-4 font-bold md:text-xl text-on-background ">
        Shipping Address
      </h2>
      <form className="justify-center mx-auto w-full">
        <div>
          <div className="space-x-0 lg:flex lg:space-x-4">
            <div className="w-full lg:w-1/2">
              <Input
                name="firsName"
                type="text"
                placeholder="First Name"
                label="First Name"
                value={firstName}
                onChange={(e) => handleChanges(e, setFirstName)}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                label="Last Name"
                value={lastName}
                onChange={(e) => handleChanges(e, setLastName)}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <Input
                name="email"
                type="text"
                placeholder="Email"
                label="Email"
                value={email}
                onChange={(e) => handleChanges(e, setEmail)}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <Textarea
                name="address"
                rows={4}
                cols={20}
                placeholder="Address"
                value={address}
                onChange={(e) => handleChanges(e, setAddress)}
                label="Arddress"
              />
            </div>
          </div>
          <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
            <div className="w-full lg:w-1/2">
              <Input
                name="city"
                type="text"
                placeholder="City"
                label="City"
                value={city}
                onChange={(e) => handleChanges(e, setCity)}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Input
                name="postcode"
                type="text"
                placeholder="Postcode"
                label="Postcode"
                value={postcode}
                onChange={(e) => handleChanges(e, setPostcode)}
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <Checkbox
              checked={saveCheckoutData}
              onChange={setSaveCheckoutData}
              label="Save this information for next time"
            />
          </div>
          <div className="relative pt-3 xl:pt-6">
            <Textarea
              name="note"
              rows={4}
              cols={20}
              placeholder="Notes for delivery"
              value={notes}
              onChange={(e) => handleChanges(e, setNotes)}
              label="Notes (Optional)"
            />
          </div>
          <div className="mt-4">
            <button className="py-2 px-6 w-full rounded-sm hover:opacity-80 text-on-secondary bg-secondary">
              Process
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
