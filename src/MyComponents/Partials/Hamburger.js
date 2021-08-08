import React, {useState} from 'react'

export default function Hamburger() {
    return (
        <div class="flex flex-col items-center justify-around bg-gray-1 w-10 h-10 fixed top-5 right-5">
            <div class="w-8 h-1 bg-red-1 "></div>
            <div class="w-8 h-1 bg-red-1 "></div>
            <div class="w-8 h-1 bg-red-1 "></div>
        </div>
    )
}
