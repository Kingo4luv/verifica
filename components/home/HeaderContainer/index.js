import { Transition } from "@headlessui/react";
import { useState } from "react";
import MobileNav from "../MobileNav";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }
    return(
        <header className="w-full relative">
        <Transition
            show={isOpen}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
          <MobileNav toggleNav={toggleNav} />
        </Transition>
          <nav className="h-16 md:h-20 bg-white flex justify-between items-center">
            <div className="">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clipRule="evenodd" d="M18.4375 25.6852L33.2329 0.0615293V0.0400391C32.4539 1.19282 31.1346 1.95136 29.6397 1.95136H4.61869C2.22691 1.95136 0.284966 3.89331 0.284966 6.28523C0.284966 7.081 0.499851 7.8269 0.87484 8.46817L10.8167 25.6852C11.5509 27.036 12.9826 27.954 14.6271 27.954C16.2714 27.954 17.7033 27.036 18.4375 25.6852Z" fill="#007499"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M5.85081 17.0869C5.49328 16.4568 5.28911 15.7285 5.28911 14.9529C5.28911 12.561 7.23099 10.6192 9.62286 10.6192H12.125L8.42903 4.22038C7.69482 2.86945 6.26312 1.95166 4.6187 1.95166C2.22683 1.95166 0.284951 3.89354 0.284951 6.28541C0.284951 7.08114 0.499949 7.82714 0.874818 8.46841L5.85081 17.0869Z" fill="#007499"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M15.8222 17.022L12.1249 10.6182H9.61665C7.22478 10.6182 5.28904 12.56 5.28904 14.9519C5.28904 15.7508 5.50561 16.4993 5.88325 17.1423L10.8166 25.6845C10.4829 25.0704 10.2933 24.3669 10.2933 23.6194C10.2933 21.2276 12.2352 19.2857 14.6271 19.2857H19.6313C17.9869 19.2857 16.5552 18.3679 15.8209 17.0169L15.8222 17.022Z" fill="#00ACE6"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M18.4374 25.685L23.3373 17.199C22.5768 18.45 21.201 19.2863 19.6313 19.2863H14.627C12.2352 19.2863 10.2933 21.2282 10.2933 23.62C10.2933 26.0119 12.2352 27.9538 14.627 27.9538C16.2715 27.9538 17.7032 27.036 18.4374 25.685Z" fill="#66D9FF"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M23.4032 17.0875C22.6582 18.4007 21.2474 19.2873 19.6312 19.2873C17.9868 19.2873 16.5551 18.3695 15.8207 17.0186L12.1248 10.6198H24.6352C26.2049 10.6198 27.5809 9.78348 28.3412 8.53247L23.4032 17.0875Z" fill="#00BFFF"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M8.32458 4.03896C7.56413 2.78795 6.18829 1.95166 4.61863 1.95166H14.6271C16.1967 1.95166 17.5726 2.78795 18.333 4.03896L20.8542 8.40318C21.5968 9.72521 23.0125 10.6192 24.6354 10.6192H12.1249L8.32458 4.03896Z" fill="#0086B3"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M14.6271 1.95136C16.1967 1.95136 17.5726 2.78772 18.3331 4.03866L20.8543 8.40301C21.5969 9.72488 23.0126 10.619 24.6354 10.619C26.2052 10.619 27.581 9.78261 28.3415 8.53166L33.2329 0.0615293V0.0400391C32.4537 1.19282 31.1347 1.95136 29.6398 1.95136H14.6271Z" fill="#0099CC"/>
              <path fill-rule="evenodd" clipRule="evenodd" d="M101.986 23.7033C104.737 23.7033 107.045 22.1175 107.791 19.9994C107.791 19.9994 107.257 19.7279 106.676 19.431C105.962 19.0689 105.093 19.2355 104.566 19.8365C103.952 20.5498 103.057 20.977 101.986 20.977C99.8646 20.977 98.3725 19.297 98.3725 17.0378C98.3725 14.7061 99.9113 13.0949 101.963 13.0949C103.016 13.0949 103.946 13.5221 104.579 14.2462C105.1 14.8328 105.949 14.9993 106.653 14.6554C107.243 14.3657 107.791 14.0978 107.791 14.0978C106.999 11.8856 104.714 10.3468 101.986 10.3468C98.1393 10.3468 95.2743 13.2107 95.2743 17.0124C95.2743 20.8141 98.1629 23.7033 101.986 23.7033ZM116.955 14.8726C116.955 13.8407 116.016 12.9971 114.641 13.0044C113.266 13.008 112.874 13.5221 112.24 14.2462C111.719 14.8328 110.871 14.9993 110.166 14.6554C109.575 14.3657 109.028 14.0978 109.028 14.0978C109.821 11.8856 112.105 10.3468 114.833 10.3468C117.265 10.3468 119.399 11.7661 119.859 14.0399L119.864 14.0579C119.965 14.4309 119.936 14.869 119.936 15.2853C119.936 15.2853 119.936 19.1775 119.936 21.6758C119.936 22.6389 119.154 23.4246 118.188 23.4246H117.118V22.027C116.162 23.1457 114.832 23.7033 113.269 23.7033C110.402 23.7033 108.539 22.0741 108.539 19.927C108.539 18.0407 110.052 16.4766 113.036 15.9878L116.955 15.3107V14.8726ZM58.9941 16.5924C58.9941 13.1673 56.3619 10.3468 52.7243 10.3468C49.0859 10.3468 46.2908 13.189 46.2908 17.0124C46.2908 20.7453 48.9925 23.7033 52.9339 23.7033C55.5933 23.7033 57.6896 22.3999 58.4818 20.557C58.4818 20.557 57.8913 20.2674 57.2935 19.9741C56.6566 19.6627 55.8941 19.7641 55.363 20.2348C54.7667 20.7706 53.9596 21.0965 52.9574 21.0965C51.0215 21.0965 49.5754 19.8329 49.3886 17.8741H57.7142C58.0538 17.8741 58.3793 17.7401 58.6194 17.5012C58.8598 17.2586 58.9945 16.9327 58.9945 16.596C58.9941 16.5924 58.9941 16.5924 58.9941 16.5924ZM90.9846 23.4246H92.2174C93.1831 23.4246 93.9658 22.6389 93.9658 21.6758C93.9658 18.171 93.9658 10.6256 93.9658 10.6256H90.9846V23.4246ZM69.3719 23.4246H70.6048C71.5704 23.4246 72.3532 22.6389 72.3532 21.6758C72.3532 18.171 72.3532 10.6256 72.3532 10.6256H69.3719V23.4246ZM66.8046 10.488C65.1492 10.488 63.8436 11.0239 63.1441 12.4902V10.6256H62.0981C61.1321 10.6256 60.3493 11.4113 60.3493 12.3744C60.3493 15.8792 60.3493 23.4246 60.3493 23.4246H61.5821C62.5478 23.4246 63.3306 22.6389 63.3306 21.6758C63.3306 19.5577 63.3306 16.2666 63.3306 16.2666C63.3306 14.2861 64.5898 13.142 66.4548 13.142H68.0634V10.488H66.8046ZM42.9547 10.6256L39.6679 19.4382C39.6679 19.4382 37.6939 14.1449 36.8058 11.7625C36.5505 11.0782 35.8974 10.6256 35.1674 10.6256C34.2815 10.6256 33.2347 10.6256 33.2347 10.6256C33.2347 10.6256 36.6624 19.221 37.9003 22.3239C38.1653 22.9865 38.8087 23.4246 39.5245 23.4246C39.6121 23.4246 39.7005 23.4246 39.7881 23.4246C40.5039 23.4246 41.1473 22.9865 41.4123 22.3239C42.6502 19.221 46.0779 10.6256 46.0779 10.6256H42.9547ZM82.1951 13.3049H78.765C78.765 13.3049 78.765 18.7793 78.765 21.6758C78.765 22.6389 77.9818 23.4246 77.0162 23.4246H75.7834V13.3049H73.4289V10.6256H75.7834V10.068C75.7834 7.14981 77.7168 5.52051 80.6068 5.52051C80.9797 5.52051 81.5626 5.5676 81.8888 5.63639C81.8888 5.63639 81.8888 6.4981 81.8888 7.21861C81.8888 7.72188 81.4819 8.13097 80.9797 8.13097C79.6042 8.13097 78.765 8.78272 78.765 10.068V10.6256H84.9899V12.4902C85.6894 11.0239 86.995 10.488 88.6504 10.488H89.9093V13.142H88.3006C86.4353 13.142 85.1764 14.2861 85.1764 16.2666C85.1764 16.2666 85.1764 19.5577 85.1764 21.6758C85.1764 22.6389 84.3936 23.4246 83.428 23.4246H82.1951V13.3049ZM113.643 21.397C112.453 21.397 111.636 20.8611 111.636 19.8111C111.636 19.1341 112.103 18.4136 113.456 18.1565L116.955 17.5265V18.3194C116.955 20.0465 115.532 21.397 113.643 21.397ZM49.4585 15.6148C49.8086 13.819 51.0914 12.7907 52.7243 12.7907C54.3336 12.7907 55.6863 13.9602 55.8029 15.6148H49.4585ZM69.3719 8.94561H70.6048C71.0686 8.94561 71.5132 8.76099 71.8412 8.43151C72.1692 8.10565 72.3532 7.6603 72.3532 7.19686C72.3532 6.49446 72.3532 5.84637 72.3532 5.84637H69.3719V8.94561ZM90.9846 8.94561H92.2174C92.6812 8.94561 93.1258 8.76099 93.4539 8.43151C93.7815 8.10565 93.9658 7.6603 93.9658 7.19686C93.9658 6.49446 93.9658 5.84637 93.9658 5.84637H90.9846V8.94561Z" fill="#373737"/>
              </svg>
            </div>
            <ul className="space-x-2 space-x-12 text-v-gray text-sm hidden md:flex">
              <li className="flex space-x-2 items-center">
                <span>Products</span>
                <span><svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.87781 0.269164C9.70541 0.0968183 9.47162 0 9.22785 0C8.98408 0 8.75029 0.0968183 8.5779 0.269164L5.06794 3.77912L1.55798 0.269164C1.38459 0.101703 1.15237 0.00904058 0.91133 0.0111352C0.670288 0.0132298 0.439711 0.109913 0.269262 0.280362C0.0988131 0.450811 0.00212935 0.681388 3.47527e-05 0.922431C-0.00205984 1.16347 0.0906022 1.39569 0.258064 1.56908L4.41706 5.72992C4.50246 5.81553 4.6039 5.88345 4.71559 5.9298C4.82728 5.97614 4.94702 6 5.06794 6C5.18886 6 5.30859 5.97614 5.42028 5.9298C5.53197 5.88345 5.63342 5.81553 5.71881 5.72992L9.87781 1.56908C10.0502 1.39668 10.147 1.16289 10.147 0.919122C10.147 0.675352 10.0502 0.441562 9.87781 0.269164Z" fill="#373737"/>
                </svg>
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <span>Use Cases</span>
                <span><svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.87781 0.269164C9.70541 0.0968183 9.47162 0 9.22785 0C8.98408 0 8.75029 0.0968183 8.5779 0.269164L5.06794 3.77912L1.55798 0.269164C1.38459 0.101703 1.15237 0.00904058 0.91133 0.0111352C0.670288 0.0132298 0.439711 0.109913 0.269262 0.280362C0.0988131 0.450811 0.00212935 0.681388 3.47527e-05 0.922431C-0.00205984 1.16347 0.0906022 1.39569 0.258064 1.56908L4.41706 5.72992C4.50246 5.81553 4.6039 5.88345 4.71559 5.9298C4.82728 5.97614 4.94702 6 5.06794 6C5.18886 6 5.30859 5.97614 5.42028 5.9298C5.53197 5.88345 5.63342 5.81553 5.71881 5.72992L9.87781 1.56908C10.0502 1.39668 10.147 1.16289 10.147 0.919122C10.147 0.675352 10.0502 0.441562 9.87781 0.269164Z" fill="#373737"/>
                </svg>
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <span>For Developers</span>
                <span><svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.87781 0.269164C9.70541 0.0968183 9.47162 0 9.22785 0C8.98408 0 8.75029 0.0968183 8.5779 0.269164L5.06794 3.77912L1.55798 0.269164C1.38459 0.101703 1.15237 0.00904058 0.91133 0.0111352C0.670288 0.0132298 0.439711 0.109913 0.269262 0.280362C0.0988131 0.450811 0.00212935 0.681388 3.47527e-05 0.922431C-0.00205984 1.16347 0.0906022 1.39569 0.258064 1.56908L4.41706 5.72992C4.50246 5.81553 4.6039 5.88345 4.71559 5.9298C4.82728 5.97614 4.94702 6 5.06794 6C5.18886 6 5.30859 5.97614 5.42028 5.9298C5.53197 5.88345 5.63342 5.81553 5.71881 5.72992L9.87781 1.56908C10.0502 1.39668 10.147 1.16289 10.147 0.919122C10.147 0.675352 10.0502 0.441562 9.87781 0.269164Z" fill="#373737"/>
                </svg>
                </span>
              </li>
              <li className="flex space-x-2 items-center">
                <span>About Us</span>
                <span><svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.87781 0.269164C9.70541 0.0968183 9.47162 0 9.22785 0C8.98408 0 8.75029 0.0968183 8.5779 0.269164L5.06794 3.77912L1.55798 0.269164C1.38459 0.101703 1.15237 0.00904058 0.91133 0.0111352C0.670288 0.0132298 0.439711 0.109913 0.269262 0.280362C0.0988131 0.450811 0.00212935 0.681388 3.47527e-05 0.922431C-0.00205984 1.16347 0.0906022 1.39569 0.258064 1.56908L4.41706 5.72992C4.50246 5.81553 4.6039 5.88345 4.71559 5.9298C4.82728 5.97614 4.94702 6 5.06794 6C5.18886 6 5.30859 5.97614 5.42028 5.9298C5.53197 5.88345 5.63342 5.81553 5.71881 5.72992L9.87781 1.56908C10.0502 1.39668 10.147 1.16289 10.147 0.919122C10.147 0.675352 10.0502 0.441562 9.87781 0.269164Z" fill="#373737"/>
                </svg>
                </span>
              </li>
            </ul>
            <ul className = "flex space-x-4 items-center text-v-gray text-sm font-bold hidden md:flex" >
              <li>Sign in</li>
              <li><button className="bg-v-primary text-white rounded px-2 py-2">Try Demo</button></li>
            </ul>
            <button className="block md:hidden" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-v-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
          <div className="hero w-full flex flex-col md:flex-row mt-4">
            <div className="py-6 md:py-32 w-full lg:w-3/5 space-y-10 md:space-y-20 text-v-gray">
              <h1 className="text-2xl md:text-5xl font-semibold leading-tight text-v-black">
                Build the future of financial <br/>services across <span>Africa.</span>
              </h1>
              <ul className="flex mt-4 md:mt-8 space-x-12 md:space-x-28 items-center">
                <li><button className="bg-v-primary text-white rounded px-4 md:px-12 py-2">Try Demo</button></li>
                <li><a href="#" className="underline font-medium">Contact Us</a></li>
              </ul>
              <p className="text-sm">
                Verifrica helps you access a broad range of high - quality <br className="hidden md:block"/> financial data from banks across Africa through a single API.
              </p>
            </div>
            <div className="w-full lg:w-2/5 relative hidden md:block h-100 space-y-4">
              <div className="py-3 px-3 bg-white absolute top-40 -left-24 z-10 rounded text-sm text-v-gray" style={{boxShadow:'0px 0px 40px rgba(188, 188, 188, 0.25)'}}>
                <p>Name: Bolatito Ajagbe</p>
                <p>Account Balance: XXXXXX</p>
                <p>BVN: 123XXXXX</p>
              </div>
              <div className="w-full h-3/5 flex space-x-4">
                <div className="border rounded h-full w-3/5 overflow-hidden">
                  <img className="object-cover w-full h-full object-center rounded" src="https://img.freepik.com/free-photo/young-african-american-woman-isolated-yellow-studio-background-facial-expression-beautiful-female-half-length-portrait-concept-human-emotions-facial-expression-standing-crossing-hands_155003-25191.jpg?size=626&ext=jpg&ga=GA1.2.134467567.1616976000"/>
                </div>
                <div className="w-2/5 h-full space-y-2">
                  <div className="rounded h-32 w-3/5">
                    <img className="object-cover w-full h-full object-center rounded" src="https://image.freepik.com/free-photo/portrait-african-american-woman-doctor-smiling-hospital_255667-6141.jpg" style={{filter: 'blur(2px)'}} />
                  </div>
                  <div className="rounded h-3/5 w-full py-2">
                    <img className="object-cover w-full h-full object-center rounded" src="https://image.freepik.com/free-photo/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application_231208-743.jpg" />
                  </div>
                </div>
              </div>
              <div className="w-full h-3/5 flex space-x-4">
                  <div className="rounded-lg w-2/5 h-52">
                    <img className="object-cover w-full h-full object-center rounded" src="https://image.freepik.com/free-photo/kindliness-african-farmer-feeding-cows-with-grass-farm_73622-913.jpg"/>
                  </div>
                  <div className="rounded-lg w-3/5">
                    <img className="object-cover w-full h-full object-center rounded" src="https://image.freepik.com/free-photo/countryside-woman-holding-plant-leaves_23-2148761766.jpg" />
                  </div>
                  <div className="rounded-lg w-2/6 h-32">
                    <img className="object-cover w-full h-full object-center rounded" src="https://image.freepik.com/free-photo/african-american-business-man-car_1303-9853.jpg" style={{filter: 'blur(2px)'}} />
                  </div>
              </div>
            </div>

          </div>
        </header>
    )
}

export default Headers;