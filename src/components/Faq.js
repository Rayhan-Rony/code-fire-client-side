import React from 'react';

const Faq = () => {
    return (
        <div >
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ">
                <div className="collapse-title text-xl font-medium">
                    I am a high school student, can I join?


                </div>
                <div className="collapse-content">
                    <p>Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What should I do if I need to start the course late?


                </div>
                <div className="collapse-content">
                    <p>It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Can I get a refund if I am unable to attend my Online Course?


                </div>
                <div className="collapse-content">
                    <p>In order to be granted a full tuition refund, you must cancel your registration by sending an email to online@sothebysinstitute.com by 5:00 pm (your local time) 5 full business days before the course’s start date.  Please note we are unable to reimburse for any currency conversion fees charged by your credit-card issuer.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?


                </div>
                <div className="collapse-content">
                    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;