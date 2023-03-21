import Image from "next/image";
import Link from "next/link";

export default function Header({ photo }: { photo?: string }) {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/bed.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          RoomAI
        </h1>
      </Link>
      {/* TODO: Eventually add a dropdown where folks can click to logout and buy credits */}
      {/* TODO: Maybe add another link to purchase credits next to dashboard */}
      {/* TODO: Also add "see previous generations in our new dashboard" note */}
      {photo ? (
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
          >
            <div>Rooms</div>
            <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-semibold">
              New
            </div>
          </Link>
          <Image
            alt="Profile picture"
            src={photo}
            className="w-10 rounded-full"
            width={32}
            height={28}
          />
        </div>
      ) : (
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
          href="https://www.roomai.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p></p>
        </a>
      )}
    </header>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <clipPath id="g">
    <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
  </clipPath>
  <g class="colors" clip-path="url(#g)">
    <path fill="#FBBC05" d="M0 37V11l17 13z"/>
    <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
    <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
    <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
  </g>
</svg>
  );
}

