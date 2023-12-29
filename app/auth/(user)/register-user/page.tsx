import { userTypes } from '@/app/lib/constants';
import { userFormTextInputs } from './inputFields';
import RegisterForm from '@/app/ui/forms/RegisterForm';

export default function Page() {
  return (
    <>
      <RegisterForm
        FormTextInputs={userFormTextInputs}
        userType={userTypes.user}
      />
    </>
  );
}
