import { userTypes } from '@/app/lib/constants';
import { userFormTextInputs } from './inputFields';
import RegisterForm from '@/app/ui/forms/RegisterForm';
import FormHeader from '@/app/ui/dashboard/formHeader';

export default function Page() {
  return (
    <>
      <FormHeader />
      <RegisterForm
        FormTextInputs={userFormTextInputs}
        userType={userTypes.user}
      />
    </>
  );
}
