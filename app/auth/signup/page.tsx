import { SignupWithGoogle, Quote, LogoOnAuth, WelcomeText } from "@/components/custom-ui/reuseables";
import { SignupView } from "@/views";


export default function SingUp() {

  return (
    <div className="w-full bg-white">
      <div className="flex flex-row min-h-screen">
        <div className="w-1/2 px-12 p-8">
          <div className="w-full flex flex-col gap-8">
            <LogoOnAuth />
            <div className="flex flex-col space-y-8">

              <WelcomeText authType="Welcome" />
              <SignupWithGoogle />
            </div>

            <SignupView  />

          </div>
        </div>
        <Quote />
      </div>
    </div>
  );
}
