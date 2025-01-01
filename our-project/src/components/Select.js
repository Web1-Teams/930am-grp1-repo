import React from "react";
import Option from "./Option";

const Selection = () => {
    return(
        <select required className=" rounded-lg h-10 lg:w-80 md:w-1/2  shadow-sky-900 shadow-lg border border-sky-900   hover:border-transparent focus:outline-none focus:ring-2 focus:ring-sky-950 ">

            <Option />
            <Option OptionName="Jerusalem"/>
            <Option OptionName="Hebron"/>
            <Option OptionName="Nablus"/>
            <Option OptionName="Jenin"/>
            <Option OptionName="Ramallah"/>
            <Option OptionName="Bethlehem"/>
            <Option OptionName="Jericho"/>
            <Option OptionName="Tulkarm"/>
            <Option OptionName="Haifa"/>
            <Option OptionName="Yafa"/>
            <Option OptionName="Akko"/>
            <Option OptionName="Gaza"/>
        </select>

    );
 

   };

export default Selection;