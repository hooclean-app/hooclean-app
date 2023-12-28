import { userFormTextInputs } from './inputFields';
import RegisterForm from '@/ui/forms/RegisterForm';

export default function Page() {
  return (
    <>
      <RegisterForm FormTextInputs={userFormTextInputs} />
    </>
  );
}
