import React, { Component } from 'react'
import logo from './../../argus website/PNG/Logo Vectors.png'

class Header extends Component {
  render() {
    return (
      <div>

<div class="text-white body-font bg-red-700">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900">Technology</a>
      <a class="mr-5 hover:text-gray-900">Get Your Security Guard License</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <img src={logo} alt="Logo of Argus Security Services"/>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <nav class="flex lg:w-full flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900">Student Portal</a>
      <a class="mr-5 hover:text-gray-900">Client Portal</a>
      <a class="mr-5 hover:text-gray-900">Employee Portal</a>
    </nav>
    </div>
  </div>
</div>
<div class="sticky top-0 z-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">About</a>
      <a class="mr-5 hover:text-gray-900">Services</a>
      <a class="mr-5 hover:text-gray-900">Jobs</a>
      <a class="mr-5 hover:text-gray-900">Training</a>
      <a class="mr-5 hover:text-gray-900">Contact</a>
    </nav>
  </div>
</div>
    )
  }
}

export default Header
