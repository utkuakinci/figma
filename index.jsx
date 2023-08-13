import React from "react";
import { Anchor } from "./Anchor";
import { Button } from "./Button";
import { Component } from "./Component";
import { ComponentWrapper } from "./ComponentWrapper";
import { H } from "./H";
import { Input } from "./Input";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="frame">
        <Component />
      </div>
      <div className="frame-wrapper">
        <div className="frame-2">
          <div className="div-wrapper">
            <p className="p">A New Approach For Your Ideas 💡</p>
          </div>
          <div className="component-32-wrapper">
            <ComponentWrapper />
          </div>
        </div>
      </div>
      <div className="frame-3">
        <div className="frame-4">
          <div className="div-wrapper">
            <p className="text-wrapper-3">
              Welcome to the Think Thing <br />
              Waitlist!
            </p>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-4">
              Are you ready to bring big ideas to life in the digital realm? Experience the thrill of turning your
              imagination into reality with Think Thing! Think Thing offers a comprehensive solution to plan, track, and
              execute your projects. This platform empowers you to work more effectively and efficiently, guiding you
              through every step of your project journey.
            </p>
          </div>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="text-wrapper-3">What You Can Do:</div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="frame-9">
                <div className="frame-10">
                  <div className="rectangle" />
                  <img className="r" alt="R" src="r.png" />
                </div>
                <div className="project-registration-wrapper">
                  <div className="text-wrapper-5">
                    Project Registration <br />
                    and Definition
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="frame-9">
                <div className="frame-11">
                  <div className="rectangle-2" />
                  <img className="img" alt="S" src="s.png" />
                </div>
                <div className="frame-12">
                  <div className="text-wrapper-5">
                    Project Stage <br />
                    Management
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <div className="frame-9">
                <div className="frame-14">
                  <div className="rectangle-2" />
                  <img className="t" alt="T" src="t.png" />
                </div>
                <div className="frame-12">
                  <div className="text-wrapper-5">
                    Project Statistics <br />
                    and Analysis
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-15">
              <div className="frame-9">
                <div className="frame-14">
                  <div className="rectangle-2" />
                  <img className="img" alt="D" src="d.png" />
                </div>
                <div className="frame-16">
                  <div className="text-wrapper-5">Export and Sharing</div>
                </div>
              </div>
            </div>
            <H className="h-4" hasText={false} />
          </div>
        </div>
        <div className="frame-4">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Why Choose Think Thing:</div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-4">
              Think Thing empowers you to manage your projects at every step and simplifies the process of turning your
              grand visions into reality. You think, Think Thing executes! With standout features and user-friendly
              interface, await Think Thing to manage your projects more efficiently.
            </p>
          </div>
        </div>
        <div className="frame-17">
          <div className="div-wrapper">
            <div className="text-wrapper-3">How You Can Join:</div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper-4">
              If you’re eager to bring your grand ideas to life, join the Think Thing Waitlist and gain priority access.
              Be the first to know about new features, updates, and the launch date!
              <br />
              <br />
              Think, and then make things happen - shape the future with Think Thing. Don’t wait, join now!
            </p>
          </div>
        </div>
      </div>
      <div className="frame-wrapper-2">
        <div className="frame-18">
          <div className="frame-19">
            <div className="frame-6">
              <div className="text-wrapper-3">The Waitlist</div>
            </div>
            <div className="div-wrapper">
              <p className="text-wrapper-6">
                Take the first step to turn your grand visions into reality. Shape the future with Think Thing.
              </p>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-7">info@thinkthinghub.com</div>
            </div>
          </div>
          <div className="frame-20">
            <div className="frame-21">
              <div className="input-wrapper">
                <Input
                  className="input-instance"
                  placeholderClassName="design-component-instance-node"
                  text="First Name*"
                />
              </div>
              <div className="input-wrapper">
                <Input
                  className="input-instance"
                  placeholderClassName="design-component-instance-node"
                  text="Last Name*"
                />
              </div>
            </div>
            <div className="input-instance-wrapper">
              <Input className="input-instance" placeholderClassName="design-component-instance-node" text="Email*" />
            </div>
            <div className="input-instance-wrapper">
              <Input
                className="input-instance"
                placeholderClassName="design-component-instance-node"
                text="Your Price Guess*"
              />
            </div>
          </div>
          <div className="icon-default-size-wrapper">
            <Button icon="default" size="default" />
          </div>
          <div className="frame-22">
            <div className="anchor-wrapper">
              <Anchor className="anchor-instance" divClassName="anchor-2" text="Facebook" />
            </div>
            <div className="anchor-instance-wrapper">
              <Anchor className="anchor-instance" divClassName="anchor-2" text="Twitter" />
            </div>
            <div className="anchor-wrapper">
              <Anchor className="anchor-instance" divClassName="anchor-3" text="Instagram" />
            </div>
            <div className="frame-23">
              <Anchor className="anchor-instance" divClassName="anchor-2" text="Linkedin" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-24">
        <div className="frame-25">
          <div className="frame-26">
            <div className="frame-27">
              <div className="text-wrapper-8">Think Thing</div>
            </div>
            <div className="frame-27">
              <p className="text-wrapper-9">Think, and then make things happen.</p>
            </div>
            <div className="frame-27">
              <div className="text-wrapper-9">info@thinkthinghub.com</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="element-tktg-by">
              @2023, TkTg.
              <br />
              By 141Thing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


