import React from "react";

const Steps = () => {
    return (
        <div class="container-fluid steps gradient__bg" id="Steps">
            <div class="row">
                <div class="col-lg-4 feature">
                    <h1 class="gradient__text">1</h1>
                    <h3 class="gradient__text">Fill the Form</h3>
                    <p>
                        First you have to fill our opportunity form. You can fill it by simply clicking on the heading.
                    </p>
                </div>
                <div class="col-lg-4 feature">
                    <h1 class="gradient__text">2</h1>
                    <h3 class="gradient__text">Shortlisting and Interview</h3>
                    <p>
                        Scheduling After receiving the form we go through the resume and shortlist the worthy candidate,
                        and then that candidate has to go through an interview process.
                    </p>
                </div>
                <div class="col-lg-4 feature">
                    <h1 class="gradient__text">3</h1>
                    <h3 class="gradient__text">Welcome to the Community</h3>
                    <p>After the interview process, selected candidate becomes a part of our community.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
