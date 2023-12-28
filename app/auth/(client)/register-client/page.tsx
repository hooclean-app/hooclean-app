import { userTypes } from '@/lib/constants';
import { clientFormTextInputs } from './inputFields';
import RegisterForm from '@/ui/forms/RegisterForm';

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
