import { Fragment } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navbar() {
  const path = useLocation().pathname;
  const menu = "/menu";
  const contact = "/contact";

  console.log(path);

  return (
    <Popover>
      {/* Desktop nav */}
      <div className="min-w-full bg-white flex justify-between items-center lg:px-32 md:px-10 px-4 py-4 drop-shadow-sm fixed z-50 top-0">
        <Link to="/">
          <LazyLoadImage
            src="/asset/logo.png"
            alt="Logo"
            width={140}
            height={30}
          />
        </Link>
        <div className="-mr-2 flex items-center lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 hover:bg-amber-100 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-700">
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6 text-amber-700" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          <Link
            to="menu"
            className={
              `${path}` === `${menu}` ? `text-amber-700` : `text-neutral-900`
            }
          >
            Menu
          </Link>
          <Link
            to="contact"
            className={
              `${path}` === `${contact}` ? `text-amber-700` : `text-neutral-900`
            }
          >
            Contact Us
          </Link>
        </div>
        <button className="hidden lg:flex lg:justify-between lg:w-[180px] lg:py-2 lg:px-4 lg:bg-amber-700 lg:text-white lg:font-title">
          Book a Table
          <ArrowRight />
        </button>
      </div>

      {/* Mobile nav */}
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-amber-700 ring-opacity-10">
            <div className="flex items-center justify-between px-5 pt-2">
              <Link to="/">
                <LazyLoadImage
                  src="/asset/logo.png"
                  alt="Logo"
                  width={140}
                  height={30}
                />
              </Link>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-amber-700 hover:bg-amber-100 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-700">
                  <span className="sr-only">Close main menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
              <Link to="menu" className="rounded p-2 hover:bg-amber-100">
                Menu
              </Link>
              <Link to="contact" className="rounded p-2 hover:bg-amber-100">
                Contact Us
              </Link>
            </div>
            <button className="flex justify-center gap-x-6 w-full bg-amber-700 px-5 py-3 text-center font-title text-white">
              Book a Table
              <ArrowRight />
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
