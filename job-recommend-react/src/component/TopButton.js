import React, { useState, useEffect } from 'react';
import styles from "./TopButton.module.css"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Top으로 가는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        // 스크롤 이벤트 핸들러
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible &&
                <div className={styles.scrollToTop}>
                    <div onClick={scrollToTop}>
                        <MdKeyboardDoubleArrowUp></MdKeyboardDoubleArrowUp>
                    </div>
                </div>}
        </>
    );
}

export default TopButton;