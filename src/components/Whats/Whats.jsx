import "./whats.css";
import whats from '../../assets/whats-logo.svg';
import React from "react";

export default function Whats() {
    React.useEffect(() => {
        const inObserver2 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    { whatsapp.classList.remove("show") }
                } else {
                    { whatsapp.classList.add("show") }
                }
            })
        })
        const whatsapp = document.querySelector('.link-whats');
        const hiddenElement = document.querySelector('#footer');
        inObserver2.observe(hiddenElement);
    })
    return <a className="link-whats" href="https://api.whatsapp.com/send/?phone=%2B5561974028327&text&type=phone_number&app_absent=0"><img src={whats} alt="whats-link" /></a>
}
