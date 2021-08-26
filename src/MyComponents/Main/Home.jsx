import React from "react";
import { Link } from "react-router-dom";
import section4_img1 from "./../../argus website/PNG/Video1.png";
import section4_img2 from "./../../argus website/PNG/3.Charlie.png";
import quotes from "./../../argus website/PNG/qoutes.PNG";
import signature from "./../../argus website/SVG/3. Karan Signature.svg";
import section6 from './../../argus website/PNG/sdm.png'
import section4img from "./../../argus website/PNG/raw-2_edited.png";
import section5 from "./../../argus website/PNG/0000000.png"
import image1 from "./../../argus website/PNG/raw-2_edited.png";
import empofmonth from "./../../argus website/PNG/8. Sud.png";
import testimonial from "./../../argus website/PNG/IMG_0118.png";
import sponsor1 from "./../../argus website/PNG/6. Sponsor 1.png";
import sponsor2 from "./../../argus website/PNG/7. Sponsor 2.png"
import Header from "./../Partials/Header";
import Header2 from "./../Partials/Header2";
import Stickynav from "./../Partials/Stickynav"

export default function Home() {
  return (
    <div>
      <Header />
      <Header2 />
      <Stickynav/>
      {/* Section 1 */}
      <div className="bg-cover bg-center bg-no-repeat bg-hero">
        <p className="py-24 sm:py-72"></p>
      </div>

      {/* Section 2 CAll Us */}
      <div class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 mx-auto sm:-mt-36">
        <div class="flex flex-col sm:flex-row sm:items-end mx-auto">
          <h1 class="flex-grow sm:pr-16 text-4xl font-bold title-font text-gray-2">
            Call us <br />
            <span class="text-red-1 text-5xl sm:text-6xl font-bold">
              647.289.1070
            </span>
          </h1>
          <button class="flex-shrink-0 font-bold text-white bg-red-1 py-5 px-4 md:px-12 focus:outline-none hover:bg-white border-2 border-red-1 hover:text-red-1 rounded-lg text-sm mt-10 sm:mt-0">
            DISCOVER MORE
          </button>
        </div>
      </div>

      {/* Section 3  Accountable */}
      <div class="text-gray-600 body-font overflow-hidden">
        <div class="flex flex-col sm:flex-row px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 pt-4 pb-2 mt-8 text-white justify-center">
          <div class="bg-red-1 w-full sm:w-6/12 px-3 py-5 flex flex-row items-center justify-center">
            <svg
              class="w-12 h-12 text-white p-1 mr-10"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <p>100% Accountable</p>
              <h1 class="font-bold">Know the Truth for Peace of Mind</h1>
            </div>
          </div>
          <div class="bg-gray-3 w-full sm:w-6/12 px-3 py-5 flex flex-row items-center justify-center">
            <svg
              class="w-12 h-12 text-white p-1 mr-10"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z"
                fill="currentColor"
              ></path>
            </svg>
            <div>
              <p>100% Accountable</p>
              <h1 class="font-bold">Direct Updates Regarding Incidents</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 Introducing Argus Security */}
      <div class="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-20 bg-contain bg-no-repeat bg-mapbg">
        <div class="flex flex-wrap items-start">
          <div class="items-end w-full md:w-1/2 flex flex-col lg:pr-12">
            <img
              src={section4_img1}
              alt="Argus Security Services"
              className="pb-8 border-b-8 border-red-1"
            />
            <img
              src={section4_img2}
              alt="Argus Security Services"
              class="bg-white w-9/12 pt-4 pl-4 -mt-36 md:-mt-72"
            />
          </div>
          <div class="md:pl-3 w-full md:w-1/2 flex flex-col items-start">
            <div class="flex flex-col md:flex-row items-center w-full mb-4">
              <span class="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
              <h1 class="text-4xl font-bold text-gray-3 mb-4">
                Introducing Argus Security Services
              </h1>
            </div>
            <p className="leading-relaxed text-l text-gray-2 mb-8">
              Argus Security ensures the team adherence to company rules and
              regulations. Our goal is to make our clients the direct
              beneficiaries of our policies and procedures.{" "}
            </p>
            <ul class="text-gray-3 font-bold text-l flex flex-col md:flex-row mb-8">
              <div>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Optimized Mobile Patrols
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Fool Proof Checkpoints{" "}
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> GPS Tracking{" "}
                </li>
              </div>
              <div className="md:ml-6">
                <li className="py-1">
                  <span className="text-red-1">✓</span> Reliable Fire Watch
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Tangible Proof of
                  Service
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Efficient Dispatching
                  System
                </li>
              </div>
            </ul>
            <div>
              <div class="container px-2 py-2 mx-auto">
                <div class="w-full text-left">
                  <img
                    src={quotes}
                    alt=""
                    className="inline-block text-red-1 mb-4"
                  />
                  <p class="leading-relaxed text-l font-medium text-gray-3 bg-gray-200 p-3 rounded-lg shadow-lg -mt-2">
                    Success is not result of the amount of time we put in,
                    instead its the quality of time we put in.
                  </p>
                  <div class="py-6 flex items-center">
                    <img
                      src={section4img}
                      class="w-20 h-20 p-1 border border-red-1"
                      alt=""
                    />
                    <div class="mx-auto">
                      <img src={signature} alt="" />
                      <p class="text-gray-500">CEO & CO FOUNDER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 Services */}
      <div class="bg-gray-200 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 pt-24 pb-12 ">
        <div class="flex flex-wrap">
          <div class="flex flex-wrap w-full items-baseline">
            <div class="w-full flex flex-col md:flex-row items-center">
              <div class="flex flex-col md:flex-row items-center pr-24">
                <span class="h-1 w-10 bg-red-1 mb-10 md:m-0 md:mr-4"></span>
                <h1 class="text-4xl font-bold text-gray-3 pb-10 md:pb-0 ">
                Firsthand information to our operations
                </h1>
              </div>
              <p className="leading-relaxed text-l text-gray-2 pb-10 ">
                As a client you will gain first hand access to day-today operations and daily occurrence reposts.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-evenly text-center mb-8 ">
          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  GATED COMMUNITY
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 p-2">
                  NFS marked vehicles, communication between residents &
                  security staff and efficient use of technology
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image1}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  CONSTRUCTION
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">
                  Site surveillance, road flaggers, risk assessment, loss
                  prevention and mobile patrols at your construction site.
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div class="p-8 md:w-1/3">
            <div class="h-full border-4 border-gray-2 border-opacity-60 overflow-hidden hover:border-red-1">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src={section5}
                alt="blog"
              />
              <div class=" bg-white">
                <h1 class="title-font text-lg font-medium text-white bg-gray-3 p-4 mb-3 rounded-lg">
                  PARKING
                </h1>
                <p class="leading-relaxed mb-3 text-gray-2 px-5 py-2">
                  Fire Route watch, valid permit enforcement and deterrent
                  against invalid/improper parking to ensure smoothness.
                </p>
              </div>
              <Link to="/contact">
                <button className="w-1/2 p-4 rounded-lg border text-white bg-red-1 hover:bg-white hover:text-red-1 hover:border-red-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="w-3/4 mx-auto flex py-4">
          <img src={section5} class="w-20 h-20" alt="" />
          <svg
            class="w-12 -mt-8 -ml-6 "
            xmlns="http://www.w3.org/2000/svg"
            width="85.04"
            height="85.003"
            viewBox="0 0 85.04 85.003"
          >
            <g
              id="Phone_logo"
              data-name="Phone logo"
              transform="translate(-36.779 -122.722)"
            >
              <g
                id="Group_7"
                data-name="Group 7"
                transform="translate(36.779 122.722)"
              >
                <path
                  id="Path_220"
                  data-name="Path 220"
                  d="M79.314,207.685c-9.468,0-18.936-.114-28.4.039A14.16,14.16,0,0,1,36.9,196.274a9.917,9.917,0,0,1-.072-1.8c0-19.279.081-38.557-.051-57.835a14,14,0,0,1,10.785-13.589,12.738,12.738,0,0,1,2.8-.316q28.778-.027,57.553-.012a13.774,13.774,0,0,1,13.6,11.835,25.224,25.224,0,0,1,.283,3.559q.027,27.564.012,55.131a14.357,14.357,0,0,1-11.7,14.357,8.32,8.32,0,0,1-1.646.075Q93.888,207.691,79.314,207.685ZM83,180.3c-.566-.361-1.185-.683-1.724-1.107A60.382,60.382,0,0,1,67.9,164.642c-1.1-1.685-.969-2.452.6-3.643,1.224-.927,2.44-1.871,3.664-2.8a1.574,1.574,0,0,0,.379-2.365,27.928,27.928,0,0,0-3.054-4.206,85.954,85.954,0,0,0-6.559-5.858,2.692,2.692,0,0,0-3.8.274c-3.761,3.634-5.355,8.042-4.242,13.207,2.184,10.163,7.1,18.683,15.545,24.956A37.953,37.953,0,0,0,92.9,192.191c3.288.054,7.287-2.72,8.267-5.6a3.33,3.33,0,0,0-.223-2.635,30.807,30.807,0,0,0-9.465-8.319,2.876,2.876,0,0,0-3.5.2C86.338,177.218,84.78,178.695,83,180.3Zm-4.134-37.973c2.323.3,4.407.445,6.441.848,7.867,1.552,13.24,6.2,16.384,13.5,2.5,5.794,3.18,11.932,3.264,18.159.018,1.282.692,1.938,1.781,1.91a1.6,1.6,0,0,0,1.643-1.892c-.129-2.034-.2-4.074-.3-6.11a38.941,38.941,0,0,0-3.075-13.406c-2.99-7.07-7.964-12.16-15.358-14.666a31.836,31.836,0,0,0-13.92-1.489c-1.965.22-3.923.539-5.861.939a1.577,1.577,0,0,0-1.258,1.925,1.476,1.476,0,0,0,1.622,1.4,9.98,9.98,0,0,0,1.342-.081C74.076,143.017,76.573,142.653,78.871,142.325Zm.4,8.273c-.563,0-1.462-.009-2.365.006a2.7,2.7,0,0,0-.575.15c-1.643.412-2.262,1.107-1.995,2.232.241,1.011,1.393,1.465,2.84,1.249A13.993,13.993,0,0,1,80.436,154a11.8,11.8,0,0,1,8.505,4.037c2.975,3.607,4.158,7.93,4.609,12.488a1.874,1.874,0,0,0,1.862,1.916,1.66,1.66,0,0,0,1.607-2.172,64.193,64.193,0,0,0-1.934-8.514C92.668,154.783,87.087,150.253,79.271,150.6Z"
                  transform="translate(-36.779 -122.722)"
                  fill="#ba0913"
                />
              </g>
            </g>
          </svg>
          <div class="mx-auto px-4 py-4">
            <h2 class="leading-relaxed text-l font-medium text-gray-2">
              24 HOURS SERVICE AVAILABLE
            </h2>
            <p class="text-l title-font font-bold text-gray-900">
              Have any questions? Feel free to contact our office today at{" "}
              <span class="text-red-1">647.289.1070</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 Know you partners */}
      <div class="text-white body-font overflow-hidden px-4 sm:px-8 md:px-16 lg:pl-16 lg:pr-20 xl:pl-28 xl:pr-36 pt-20 bg-cover bg-knowbg">
        <div class="px-5 py-12 mx-auto">
          <div class="flex flex-col-reverse md:flex-row -m-12 items-end ">
            <div class="w-10/12 md:w-7/12 mx-auto">
              <img src={section6} alt="Argus Security" />
            </div>
            <div class="md:w-1/2 p-4 flex flex-col items-start">
              <h2 class="text-4xl font-medium w-full lg:w-10/12 mb-12 px-4 lg:px-0">
                Know your
                <br />
                Partners-in-Protection
              </h2>
              <div class="flex items-center">
                <button class="px-4 py-2 bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">OUR TEAM</button>
                <button class="px-4 py-2 bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">ARGUS HIERARCHY</button>
                <button class="px-4 py-2 bg-red-1 border border-black bg-opacity-30 mx-2 hover:bg-opacity-100">CONTACT US</button>
              </div>
              <p class="leading-relaxed p-4 mb-8">
                At Argus Security Services we maintain a prominent level of
                training for our guards in response to our highly sensitive
                sites. We offer 24/7 fast and reliable security services.
                Qualifications of our Directors are as follows:
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                <div>
                  <img src={section4img} class="w-44 lg:w-28 xl:w-44 ml-4" alt="" />
                </div>
                <div>
                  <ul class="p-4 text-sm">
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Member of Law
                      society of Ontario
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Police Foundation
                      Certified
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> 7 Years of Security
                      Experience
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Sometimes buys me
                      Coffee
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Good Taste in Movies
                    </li>
                    <li className="py-1">
                      <span className="text-red-1 font-bold">✓</span> Good Guy Though{" "}
                    </li>
                  </ul>
                </div>
              </div>
              {/* <img src={signature} alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 Covid 19 CTA */}
        <div class="bg-red-1 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-20 flex flex-col sm:flex-row items-center">
            <h1 class="flex-grow sm:pr-16 text-4xl font-bold title-font text-white">
              Covid 19 Procedures and much more to safeguard your business.
            </h1>
            <button class="flex-shrink-0 font-bold text-red-1 bg-white py-5 px-10 focus:outline-none hover:bg-red-1 border-2 border-white hover:text-white rounded-lg text-sm mt-10 sm:mt-0">
              DISCOVER MORE
            </button>
          </div>

      {/* Section 8 Client Testimonial */}
      <div class="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-24 bg-gray-200">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-16">
        <span class="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
          <h1 class="text-4xl font-medium title-font text-gray-900">Client Testimonials</h1>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-white p-8 shadow-2xl">
            <img
                    src={quotes}
                    alt=""
                    className="inline-block text-red-1 mb-4"
                  />
              <p class="leading-relaxed mb-6">Argus helped me find my child in a crowded
                mall. I would be eternally thankful.</p>
              <a class="inline-flex items-center">
                <img alt="testimonial" src={testimonial} class="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"/>
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-red-1">Tanbir Singh</span>
                  <span class="text-black text-sm">The Sidhu Estates</span>
                </span>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/2 w-full">
            <div class="h-full bg-white p-8 shadow-2xl">
            <img
                    src={quotes}
                    alt=""
                    className="inline-block text-red-1 mb-4"
                  />
              <p class="leading-relaxed mb-6">Argus helped me find my child in a crowded
                mall. I would be eternally thankful.</p>
              <a class="inline-flex items-center">
                <img alt="testimonial" src={testimonial} class="w-20 h-20 p-1 border-2 border-red-1 flex-shrink-0 object-cover object-center"/>
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-red-1">Tanbir Singh</span>
                  <span class="text-black text-sm">The Sidhu Estates</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9 Employee of the Month */}
      <div class="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 py-40 bg-cover bg-no-repeat bg-empofmon">
        <div class="flex flex-wrap items-start">
          <div class="md:px-20 md:py-12 w-full md:w-1/2 flex flex-col items-start">
            <div class="flex flex-col md:flex-row items-center w-full mb-4">
              <span class="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
              <h1 class="text-4xl font-bold text-gray-3 mb-4">
              Employee of the <br/>Month 
              </h1>
            </div>
            <p className="leading-relaxed text-l text-gray-2 mb-8">
              <span className="text-red-1">Ramanjeet Singh Sran </span>embodies the core values of Argus
              and has repeatedly gone above and beyond the call of duty
              to provide reliable customer service.
            </p>
            <ul class="text-gray-3 font-bold text-l mb-8">
                <li className="py-1">
                  <span className="text-red-1">✓</span> Driven
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Hard Working
                </li>
                <li className="py-1">
                  <span className="text-red-1">✓</span> Reliable
                </li>
            </ul>
            <div>
              <div class="container px-2 py-2 mx-auto">
                <div class="w-full text-left">
                  <img
                    src={quotes}
                    alt=""
                    className="inline-block text-red-1 mb-4"
                  />
                  <p class="leading-relaxed text-l font-medium text-gray-3 bg-gray-200 p-3 rounded-lg shadow-lg -mt-2">
                    They say 'Devil' works hard, Raman
                    works harder. He is an inspiration to us all.
                  </p>
                  <div class="py-6 flex items-center">
                    <img
                      src={section4img}
                      class="w-20 h-20 p-1 border border-red-1"
                      alt=""
                    />
                    <div class="mx-auto">
                      <img src={signature} alt="" />
                      <p class="text-gray-500">CEO & CO FOUNDER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="items-end w-full md:w-1/2 lg:pl-12">
            <img
              src={empofmonth}
              alt="Argus Security Services"
              class="w-full"
            />
          </div>
        </div>
      </div>

      {/* Section 10 Sponsors */}
      <div class="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-48 py-24 mx-auto bg-gray-200">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center mb-16">
          <span class="h-1 w-10 bg-red-1 m-6 md:m-0 md:mr-4"></span>
          <h1 class="text-5xl font-bold text-gray-900">Sponsors</h1>
        </div>
        <div className="flex flex-wrap mx-auto items-center justify-around">
          <img src={sponsor2} alt="" className="w-60 "/>
          <img src={sponsor1} alt="" className="w-72 "/>
          <img src={sponsor1} alt="" className="w-72 "/>
        </div>
      </div>


    </div>
  );
}
