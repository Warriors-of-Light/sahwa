import { SahwaUser } from "@/models/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import sahwaLogo from "../assets/sahwa.svg";

interface IHeaderProps {
  displayLogin?: boolean;
  displayPages?: boolean;
  user?: SahwaUser;
}

const navigation = [
  { name: "عن صحوة", href: "#" },
  { name: "المجتمع", href: "#" },
  { name: "الكورسات", href: "#" },
  { name: "مسارات التعلم", href: "#" },
];

export default function Header({
  user,
  displayLogin,
  displayPages = true,
}: IHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white drop-shadow-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {displayLogin && (
            <a href="/login" className="-m-1.5 p-1.5">
              <div className=" w-40 bg-red-500 text-center h-10 p-2 rounded-full">
                <span className=" text-white text-lg ">تسجيل دخول</span>
              </div>
            </a>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {displayPages && (
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ fontFamily: "Cairo" }}
                className=" font-semibold leading-6 text-gray-900 text-xl"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/landing">
            <Image
              src={sahwaLogo}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900"
              alt={"Logo"}
              width={120}
            />
          </a>
        </div>
        <div>x</div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-right">
          <div className="flex items-center justify-between text-right">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-mr-10 p-1.5">
              <Image
                src={sahwaLogo}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                alt={"Logo"}
                width={120}
              />
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 justify-start">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-red-400 w-40 ml-auto"
                >
                  تسجيل الدخول
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
