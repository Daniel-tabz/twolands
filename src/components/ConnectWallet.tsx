import React, { useCallback, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { signIn, signInWithGoogle, signUP } from "../firebase/backend";
import { useConnect } from "wagmi";

export default function ConnectWallet() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signups = async () => {
    await signUP(email, password);
  };
  const signins = async () => {
    await signIn(email, password);
  };

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <>
      <Button onPress={onOpen} size="lg" className="text-2xl">
        Connect Wallet
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        className="bg-zinc-900"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                      Sign in to your account
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-[#18181B] px-6 py-12 shadow sm:rounded-lg sm:px-12">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-white"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-white"
                          >
                            Password
                          </label>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-3 block text-sm leading-6 text-white"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="text-sm leading-6">
                            <a
                              href="#"
                              className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={signups}
                          >
                            Sign in
                          </button>
                        </div>
                      </form>

                      <div>
                        <div className="relative mt-10">
                          <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                          >
                            <div className="w-full border-t border-gray-200" />
                          </div>
                          <div className="relative flex justify-center text-sm font-medium leading-6">
                            <span className="bg-[#18181B] px-6 text-white">
                              Or continue with
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <button
                            className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            onClick={signInWithGoogle}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="20"
                              height="20"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                            <span className="text-sm font-semibold leading-6 text-black">
                              Google
                            </span>
                          </button>

                          <a 
                            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                          >
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/color/48/metamask-logo.png"
                              alt="metamask-logo"
                            />
                            {connectors.map((connector) => (
                              <button
                                disabled={!connector.ready}
                                key={connector.id}
                                onClick={() => connect({ connector })}
                                className="text-sm font-semibold leading-6 text-white"
                                type="button"
                              >
                                Metamask
                                {!connector.ready && " (unsupported)"}
                                {isLoading &&
                                  connector.id === pendingConnector?.id &&
                                  " (connecting)"}
                              </button>
                            ))}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
