import React from 'react'
import about_image from './../../argus website/PNG/Video.png'
import { Link } from 'react-router-dom'
import SideBar from './../Components/SideBar.jsx'

export default function HarassementPolicy() {
    return (
        <div>
        <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg">
            <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">HARASSMENT POLICY</h1>
                </div>
            </div>
        </div>

        <div className="container px-4 py-6 mx-auto sm:px-20 mb:px-1 lg:px-40 bg-no-repeat bg-mapbg">
        <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
                <img src={about_image} alt="About page Image"/>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">The Harassment/Sexual Harassment/Discrimination policy shall apply to all
                    employees, associates and Agents of Argus Security Services Corp.</p>

                <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Purpose</h2>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Argus Security is committed to providing a working environment in which all of its
                    employees and clients are treated with respect and dignity and have the right to
                    work in an environment free from discrimination and harassment. As part of this
                    commitment, this policy is aimed at preventing and resolving behaviour and
                    conduct that constitutes harassment and discrimination as defined in the Ontario
                    Human Rights Code (herein referred to as “the Code”).</p>

                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Argus Security will not tolerate any form of discrimination or harassment in its
                    employment or business dealings. This includes but is not limited to the workplace,
                    work related social events, conferences and training seminars, and refers to all
                    forms of communication. This Policy provides guidelines on the reporting,
                    investigation and resolution of complaints of discrimination and harassment. Each
                    employee has an obligation to understand this Policy and how it applies to their
                    employment at Argus Security. Every member of the Argus Security has the right
                    to file a complaint of discrimination and/or harassment.</p>

                <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Definitions</h2>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">The following will assist in the identification of harassment and discrimination. </p>
                
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Discrimination: Discrimination is unequal treatment because of race, ancestry, place of origin, color, ethnic origin, citizenship,
                    creed, age, sex, sexual orientation, gender identity, gender expression, record of offences, marital status, family status or
                    disability </p>
                
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Harassment: Harassment is a form of discrimination defined as a course of vexatious comments or conduct that is known or
                    ought reasonably to be known to be unwelcome. In some cases, a single action may be classified as harassment.</p>

                    <ul className="text-gray-2 font-medium text-l mb-8 ">
                        <li><span className="text-red-1">✓</span> Acts of harassment can include, but are not limited to:</li>
                        <li><span className="text-red-1">✓</span> Profane language and inappropriate comments or gestures;  </li>
                        <li><span className="text-red-1">✓</span> Inappropriate physical conduct; </li>
                        <li><span className="text-red-1">✓</span> Material or offensive pictures that are displayed publicly, circulated, put on someone’s work space or belongings, or on a
                            computer or fax machine</li>
                        <li><span className="text-red-1">✓</span> Any inappropriate electronic or cyber activity used for the purpose of violence, intimidation and/ or harassment </li>
                        <li><span className="text-red-1">✓</span> Creating an intimidating or offensive working environment; or</li>
                        <li><span className="text-red-1">✓</span> Creating a degrading, humiliating, or hostile work environment </li>
                        <li><span className="text-red-1">✓</span> Cyber bullying, defined as any inappropriate electronic or cyber activity used for the purpose of violence, intimidation and/or
                            harassment </li>
                    </ul>


                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">Sexual Harassment: Sexual harassment means engaging in a course of conduct of a gender related or sexual nature that is
                    known or might reasonably be known to be unwelcome or unwanted. In some cases, a single action may constitute sexual
                    harassment.</p>

                <ul className="text-gray-2 font-medium text-l mb-8 ">
                    <li><span className="text-red-1">✓</span> Acts of harassment can include, but are not limited to:</li>
                    <li><span className="text-red-1">✓</span> Profane language and inappropriate comments or gestures;  </li>
                    <li><span className="text-red-1">✓</span> Inappropriate physical conduct; </li>
                    <li><span className="text-red-1">✓</span> Material or offensive pictures that are displayed publicly, circulated, put on someone’s work space or belongings, or on a
                        computer or fax machine</li>
                    <li><span className="text-red-1">✓</span> Any inappropriate electronic or cyber activity used for the purpose of violence, intimidation and/ or harassment </li>
                    <li><span className="text-red-1">✓</span> Creating an intimidating or offensive working environment; or</li>
                    <li><span className="text-red-1">✓</span> Creating a degrading, humiliating, or hostile work environment </li>
                    <li><span className="text-red-1">✓</span> Cyber bullying, defined as any inappropriate electronic or cyber activity used for the purpose of violence, intimidation and/or
                        harassment </li>
                </ul>

                <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Area Management Department</h2>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">The Mission of the Area Management Department is to establish relationships with
                    the community, communication between our organization and the residents, and to
                    improve the neighborhood’s security level. The Area Management Department is
                    also responsible for the service delivery operations and is tasked with improved
                    service levels by providing oversight and guidance where required.</p>

                <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Accounting Department</h2>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">The Accounting Department’s mission is to record every financial transaction and
                    provide accurate, detailed, and understandable billing to our customers. The
                    Accounting Department’s systems are integrated with our scheduling system which
                    eliminates errors due to the transfer of data. Customers can expect to receive their
                    invoices with a detailed report on login and out times, the Guard who was working
                    on the shift, GPS verification, and management signature.</p>

                <h2 className="text-4xl title-font font-bold text-gray-900 mt-8 mb-8">Dispatch Department</h2>
                <p className="leading-relaxed text-l font-medium text-gray-2 mb-8">The Mission of the Area Management Department is to establish relationships with
                    the community, communication between our organization and the residents, and to
                    improve the neighborhood’s security level. The Area Management Department is
                    also responsible for the service delivery operations and is tasked with improved
                    service levels by providing oversight and guidance where required.</p>
                
                <p className="p-4 mb-2 border-2 border-gray-200 text-l text-gray-2 w-full mt-4"><span className="text-red-700 font-bold">1.</span> ORGANIZATION STRUCTURE</p>
                <p className="p-4 mb-2 border-2 border-gray-200 text-l text-gray-2 w-full"><span className="text-red-700 font-bold">2.</span> HARASSMENT POLICY</p>
                <p className="p-4 mb-2 border-2 border-gray-200 text-l text-gray-2 w-full"><span className="text-red-700 font-bold">3.</span> PERSONELL</p>
                
                <div>
                    
                </div>                   
            
            </div>
            <SideBar />
        </div>
    </div>

    </div>
    )
}
