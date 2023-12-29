import { userTypes } from '@/app/lib/constants';
import { clientFormTextInputs } from './inputFields';
import RegisterForm from '@/app/ui/forms/RegisterForm';

export default function Page() {
  return (
    <>
      <RegisterForm
        FormTextInputs={clientFormTextInputs}
        userType={userTypes.client}
      />
    </>
  );
}
