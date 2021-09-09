// Author @Manas

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Alert() {
    return (
    
    <div className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 hover:bg-green-100  hover:border-green-500 hover:text-green-700" role="alert" > {/*If Success Green Use Green Items Otherwise Red Items*/}
            <div className="w-full flex flex-row items-center justify-between">    
                <div>
                    <p className="font-bold">Success or Failure Here</p>
                    <p>Message Here</p>
                </div>
                <button> {/*Close Button*/}
                    <FontAwesomeIcon
                    icon="window-close"
                    className="text-2xl " />
                </button>
            </div>
        </div>
    </div>
    )
}
