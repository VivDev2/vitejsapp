import React from 'react'





export default function Home() {
  return (
    <>
      <div className="bg-gray-200 pb-6 sm:pb-8 lg:pb-12">
        <header className="mb-8 border-b">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">



            <div class="flex divide-x border-r sm:border-l">


              <button type="button" class="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>

                <span class="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
              </button>
            </div>

          </div>
        </header>

        <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-8 flex flex-wrap justify-between md:mb-16">
            <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
              
              <h1 class="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">Experiance the world<br />with us.</h1>

              <p class="max-w-md leading-relaxed text-gray-900 xl:text-lg">You are just one click away from your dream destination.</p>
            </div>

            <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div class="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                <img
                  src="/islandt.jpg" // path to the img file
                  alt='water' // alt text for accessibility
                  width={640} // width of the img
                  height={425} // height of the img
                  class="h-full w-full object-cover object-center" />
              </div>

              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="/fish.jpg" // path to the img file
                  alt='underwater' // alt text for accessibility
                  width={640} // width of the img
                  height={425} // height of the img 
                  class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>


        </section>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our most popular tourist destination abroad.</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-00 md:text-lg">These are our one of the most visited International Tourist destination outside India.</p>
          </div>


          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <a href="/australia" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img
                  src="/sydney.jpg" // path to the img file
                  alt="My img" // alt text for accessibility
                  width={640} // width of the img
                  height={360} // height of the img
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="absolute left-0 bottom-2 flex gap-2">

                </div>
              </a>

              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Australia</a>
                  <span class="text-gray-500">15 days 14 nights</span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="font-bold text-gray-600 lg:text-lg">₹ 79999</span>
                  <span class="text-sm text-red-500 line-through">₹ 99999</span>
                </div>
              </div>
            </div>

            <div>
              <a href="/usa" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img
                  src="/empire.jpg" // path to the img file
                  alt="My img" // alt text for accessibility
                  width={205} // width of the img
                  height={75} // height of the img
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">United States</a>
                  <span class="text-gray-500">18 days 17 nights</span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="font-bold text-gray-600 lg:text-lg">₹ 99999</span>
                  <span class="text-sm text-red-500 line-through">₹ 150000</span>
                </div>
              </div>
            </div>

            <div>
              <a href="/uk" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img
                  src="/uk.jpg" // path to the img file
                  alt="My img" // alt text for accessibility
                  width={427} // width of the img
                  height={640} // height of the img
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">United Kingdom</a>
                  <span class="text-gray-500">11 days 10 nights</span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="font-bold text-gray-600 lg:text-lg">₹ 80500</span>
                </div>
              </div>
            </div>

            <div>
              <a href="/brazil" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img
                  src="/brazil.jpg" // path to the img file
                  alt="My img" // alt text for accessibility
                  width={640} // width of the img
                  height={427} // height of the img
                  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Brazil</a>
                  <span class="text-gray-500">10 days 9 nights</span>
                </div>

                <div class="flex flex-col items-end">
                  <span class="font-bold text-gray-600 lg:text-lg">₹ 60000</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">

            <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Summer special<br />Up to 50% off.</h2>

              <p class="mb-8 max-w-md text-gray-400">This summer don't miss out on our special package of Lakshadweep Islands..</p>

              <div class="mt-auto">
                <a href="/lakshadweep" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Check it now</a>
              </div>
            </div>


            <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img
                src="/dive.jpg" // path to the img file
                alt='underwater' // alt text for accessibility
                width={640} // width of the img
                height={425} // height of the img
                class="h-full w-full object-cover object-center" />
            </div>

          </div>
        </div>
      </div>



      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Popular Domestic Packges.</h2>

          <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

            <div>
              <a href="/rajasthan" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="/rajasthan.jpg" // path to the img file

                  width={640} // width of the img
                  height={425} // height of the img 
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-900">Rajsthan</span>
                  <span class="text-lg font-bold text-gray-800 lg:text-xl">8 days 7 nights</span>
                </div>
              </a>
            </div>



            <div>
              <a href="/northeast" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="/northeast.jpg" // path to the img file

                  width={640} // width of the img
                  height={425} // height of the img
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-900">North East</span>
                  <span class="text-lg font-bold text-gray-900 lg:text-xl">10 days 9 nights</span>
                </div>
              </a>
            </div>


            <div>
              <a href="/andaman" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="/andaman.jpg" // path to the img file

                  width={640} // width of the img
                  height={425} // height of the img 
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-900">Andaman And Nicobar</span>
                  <span class="text-lg font-bold text-gray-900 lg:text-xl">6 days 5 nights</span>
                </div>
              </a>
            </div>


            <div>
              <a href="/ksahmir" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img
                  src="/kasmir.jpg" // path to the img file

                  width={640} // width of the img
                  height={425} // height of the img 
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                  <span class="text-gray-900">Kashmir</span>
                  <span class="text-lg font-bold text-gray-900 lg:text-xl">8 days 7 nights</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>



      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
            <div class="mb-4 sm:mb-8 lg:mb-0">
              <h2 class="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">Get the latest updates</h2>
              <p class="text-center text-gray-900 lg:text-left">Sign up for our new updates</p>
            </div>

            <div class="flex flex-col items-center lg:items-end">
              <form class="mb-3 flex w-full max-w-md gap-2">
                <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
              </form>

              <p class="text-center text-xs text-gray-400 lg:text-right">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </div>



      <div class="bg-gray-900 pt-4 sm:pt-10 lg:pt-12">
        <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div class="col-span-full lg:col-span-2">

              <div class="mb-4 lg:-mt-2">
                <a href="/" class="text-white inline-flex items-center gap-2 text-xl font-bold md:text-2xl" aria-label="logo">
                  <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                   
                  </svg>

                  Delta Travel
                </a>
              </div>





              <div class="flex gap-4">
                <a href="#" target="_blank" class="text-white transition duration-100 hover:text-white active:text-gray-600">
                  <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a href="#" target="_blank" class="text-white transition duration-100 hover:text-white active:text-gray-600">
                  <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a href="#" target="_blank" class="text-white transition duration-100 hover:text-white active:text-gray-600">
                  <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                  </svg>
                </a>
              </div>

            </div>






            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-white">Company</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Home</a>
                </div>

                <div>
                  <a href="/about" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
                </div>

                <div>
                  <a href="/contact" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
                </div>

                <div>
                  <a href="/service" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Services</a>
                </div>

                <div>
                  <a href="/login" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Login</a>
                </div>


              </nav>
            </div>



            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-white">Support</div>

              <nav class="flex flex-col gap-4">
               

                <div>
                  <a href="/documentation" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
                </div>

                

                <div>
                  <a href="/faq" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
                </div>

                <div>
                  <a href="/book" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">How to Book</a>
                </div>
              </nav>
            </div>


            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-white">Legal</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
                </div>

                <div>
                  <a href="#" class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
                </div>

             
              </nav>
            </div>

          </div>

          <div class="border-t py-8 text-center text-sm text-white">© 2023 - Present Flowrift. All rights reserved.</div>
        </footer>
      </div>

    </>
  )
}