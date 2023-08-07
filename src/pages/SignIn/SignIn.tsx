import ImageBanner from './ImageBanner';
import SignInForm from './SignInForm';

export default function SignIn() {
  return (
    <div className="flex min-h-full">
      <SignInForm />

      <ImageBanner />
    </div>
  );
}
