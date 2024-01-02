import { userTypes } from '@/app/lib/constants';
import { clientFormTextInputs } from './inputFields';
import RegisterForm from '@/app/ui/forms/RegisterForm';
import FormHeader from '@/app/ui/dashboard/formHeader';

export default function Page() {
  return (
    <>
      <FormHeader />
      <RegisterForm
        FormTextInputs={clientFormTextInputs}
        userType={userTypes.client}
      />
    </>
  );
}
