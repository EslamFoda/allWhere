import Image from "next/image";
import CardTitle from "../../ui/text/cardTitle";
import CardSubTitle from "../../ui/text/cardSubTitle";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-main-orange">
      <div className="mx-auto max-w-6xl  py-16 px-6 w-full">
        <div className="lg:hidden block mb-10">
          <Image
            className="cursor-pointer"
            alt="footer icon"
            src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9efcf27a851d_Logo.svg"
            width={142}
            height={27}
          />
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-7">
          <div className="lg:block md:hidden hidden">
            <Image
              className="cursor-pointer"
              alt="footer icon"
              src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9efcf27a851d_Logo.svg"
              width={142}
              height={27}
            />
          </div>
          <div className="space-y-3">
            <CardTitle text="Product" className="text-base" />
            <div className="flex flex-col">
              <Link
                className="inline-block w-fit"
                href="/how-remote-first-setups-work"
              >
                <CardSubTitle text="How it Works" />
              </Link>
              <Link className="inline-block w-fit" href="/teams/it-remote-work">
                <CardSubTitle text="For IT" />
              </Link>
              <Link className="inline-block w-fit" href="/teams/hr-remote-work">
                <CardSubTitle text="For Human Resources" />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <CardTitle text="Use Cases" className="text-base" />
            <div className="flex flex-col">
              <Link className="inline-block w-fit" href="/use-cases/onboarding">
                <CardSubTitle text="Onboarding & Lifecycle Management" />
              </Link>
              <Link
                className="inline-block w-fit"
                href="/use-cases/employee-experience"
              >
                <CardSubTitle text="Employee Experience" />
              </Link>
              <Link className="inline-block w-fit" href="/use-cases/retrieval">
                <CardSubTitle text="Offboarding & Retrievals" />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <CardTitle text="Resources" className="text-base" />
            <div className="flex flex-col">
              <Link
                className="inline-block w-fit"
                href="/guides/seamless-offboarding"
              >
                <CardSubTitle text="Seamless Offboarding" />
              </Link>
              <Link
                className="inline-block w-fit"
                href="/guides/remote-employee-onboarding"
              >
                <CardSubTitle text="Remote Onboarding" />
              </Link>
              <Link
                className="inline-block w-fit"
                href="/guides/lifecycle-management"
              >
                <CardSubTitle text="Lifecycle Managagement" />
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <CardTitle text="Company" className="text-base" />
            <div className="flex flex-col">
              <Link className="inline-block w-fit" href="/about">
                <CardSubTitle text="About" />
              </Link>
              <Link className="inline-block w-fit" href="/about#careers">
                <CardSubTitle text="Careers" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t  border-main-black/30 py-6 px-6 w-full">
        <div className="flex items-center gap-5 flex-wrap justify-between">
          <div className="space-x-4 text-xs">
            <span>© Copyright 2023</span>
            <span>Terms & Privacy</span>
          </div>
          <div className="flex items-center gap-4">
            <Facebook />
            <Twitter />
            <Insta />
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

export const Facebook = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7188 9.25C17.7188 4.43359 13.8164 0.53125 9 0.53125C4.18359 0.53125 0.28125 4.43359 0.28125 9.25C0.28125 13.6094 3.44531 17.2305 7.62891 17.8633V11.7812H5.41406V9.25H7.62891V7.35156C7.62891 5.17188 8.92969 3.94141 10.8984 3.94141C11.8828 3.94141 12.8672 4.11719 12.8672 4.11719V6.26172H11.7773C10.6875 6.26172 10.3359 6.92969 10.3359 7.63281V9.25H12.7617L12.375 11.7812H10.3359V17.8633C14.5195 17.2305 17.7188 13.6094 17.7188 9.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Twitter = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1367 4.59375C16.8398 4.06641 17.4727 3.43359 17.9648 2.69531C17.332 2.97656 16.5938 3.1875 15.8555 3.25781C16.6289 2.80078 17.1914 2.09766 17.4727 1.21875C16.7695 1.64062 15.9609 1.95703 15.1523 2.13281C14.4492 1.39453 13.5 0.972656 12.4453 0.972656C10.4062 0.972656 8.75391 2.625 8.75391 4.66406C8.75391 4.94531 8.78906 5.22656 8.85938 5.50781C5.80078 5.33203 3.05859 3.85547 1.23047 1.64062C0.914062 2.16797 0.738281 2.80078 0.738281 3.50391C0.738281 4.76953 1.37109 5.89453 2.39062 6.5625C1.79297 6.52734 1.19531 6.38672 0.703125 6.10547V6.14062C0.703125 7.93359 1.96875 9.41016 3.65625 9.76172C3.375 9.83203 3.02344 9.90234 2.70703 9.90234C2.46094 9.90234 2.25 9.86719 2.00391 9.83203C2.46094 11.3086 3.83203 12.3633 5.44922 12.3984C4.18359 13.3828 2.60156 13.9805 0.878906 13.9805C0.5625 13.9805 0.28125 13.9453 0 13.9102C1.61719 14.9648 3.55078 15.5625 5.66016 15.5625C12.4453 15.5625 16.1367 9.97266 16.1367 5.08594C16.1367 4.91016 16.1367 4.76953 16.1367 4.59375Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Insta = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.875 4.20703C6.625 4.20703 4.83203 6.03516 4.83203 8.25C4.83203 10.5 6.625 12.293 8.875 12.293C11.0898 12.293 12.918 10.5 12.918 8.25C12.918 6.03516 11.0898 4.20703 8.875 4.20703ZM8.875 10.8867C7.43359 10.8867 6.23828 9.72656 6.23828 8.25C6.23828 6.80859 7.39844 5.64844 8.875 5.64844C10.3164 5.64844 11.4766 6.80859 11.4766 8.25C11.4766 9.72656 10.3164 10.8867 8.875 10.8867ZM14.0078 4.06641C14.0078 3.53906 13.5859 3.11719 13.0586 3.11719C12.5312 3.11719 12.1094 3.53906 12.1094 4.06641C12.1094 4.59375 12.5312 5.01562 13.0586 5.01562C13.5859 5.01562 14.0078 4.59375 14.0078 4.06641ZM16.6797 5.01562C16.6094 3.75 16.3281 2.625 15.4141 1.71094C14.5 0.796875 13.375 0.515625 12.1094 0.445312C10.8086 0.375 6.90625 0.375 5.60547 0.445312C4.33984 0.515625 3.25 0.796875 2.30078 1.71094C1.38672 2.625 1.10547 3.75 1.03516 5.01562C0.964844 6.31641 0.964844 10.2188 1.03516 11.5195C1.10547 12.7852 1.38672 13.875 2.30078 14.8242C3.25 15.7383 4.33984 16.0195 5.60547 16.0898C6.90625 16.1602 10.8086 16.1602 12.1094 16.0898C13.375 16.0195 14.5 15.7383 15.4141 14.8242C16.3281 13.875 16.6094 12.7852 16.6797 11.5195C16.75 10.2188 16.75 6.31641 16.6797 5.01562ZM14.9922 12.8906C14.7461 13.5938 14.1836 14.1211 13.5156 14.4023C12.4609 14.8242 10 14.7188 8.875 14.7188C7.71484 14.7188 5.25391 14.8242 4.23438 14.4023C3.53125 14.1211 3.00391 13.5938 2.72266 12.8906C2.30078 11.8711 2.40625 9.41016 2.40625 8.25C2.40625 7.125 2.30078 4.66406 2.72266 3.60938C3.00391 2.94141 3.53125 2.41406 4.23438 2.13281C5.25391 1.71094 7.71484 1.81641 8.875 1.81641C10 1.81641 12.4609 1.71094 13.5156 2.13281C14.1836 2.37891 14.7109 2.94141 14.9922 3.60938C15.4141 4.66406 15.3086 7.125 15.3086 8.25C15.3086 9.41016 15.4141 11.8711 14.9922 12.8906Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const LinkedIn = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.625 0.375H1.08984C0.492188 0.375 0 0.902344 0 1.53516V15C0 15.6328 0.492188 16.125 1.08984 16.125H14.625C15.2227 16.125 15.75 15.6328 15.75 15V1.53516C15.75 0.902344 15.2227 0.375 14.625 0.375ZM4.74609 13.875H2.42578V6.38672H4.74609V13.875ZM3.58594 5.33203C2.8125 5.33203 2.21484 4.73438 2.21484 3.99609C2.21484 3.25781 2.8125 2.625 3.58594 2.625C4.32422 2.625 4.92188 3.25781 4.92188 3.99609C4.92188 4.73438 4.32422 5.33203 3.58594 5.33203ZM13.5 13.875H11.1445V10.2188C11.1445 9.375 11.1445 8.25 9.94922 8.25C8.71875 8.25 8.54297 9.19922 8.54297 10.1836V13.875H6.22266V6.38672H8.4375V7.40625H8.47266C8.78906 6.80859 9.5625 6.17578 10.6875 6.17578C13.043 6.17578 13.5 7.75781 13.5 9.76172V13.875Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
