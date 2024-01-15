import testimonial1 from "../assets/image-daniel.jpg";
import testimonial2 from "../assets/image-jonathan.jpg";
import testimonial3 from "../assets/image-kira.jpg";
import testimonial4 from "../assets/image-jeanette.jpg";
import testimonial5 from "../assets/image-patrick.jpg";
import quotes from "../assets/bg-pattern-quotation.svg";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="card bg-[#733fc8] text-white flow-content--m relative p-8 rounded-2xl col-span-2">
            <img
              src={quotes}
              alt="quotations in the background for decoration"
              className="absolute top-0 right-6 md:right-24 w-[100px] h-[100px] md:w-[125px] md:h-[125px]"
            />
            <div className="relative flex items-center gap-4 card__author-info z-1">
              <img
                src={testimonial1}
                alt="Daniel's avatar"
                className="w-[40px] h-[40px] rounded-full border-2 border-[#a273e7]"
              />
              <div className="flex flex-col card__author-description">
                <span className="text-sm">Daniel Clifford</span>
                <span className="text-sm text-[#c195ff]">
                  Verified Graduate
                </span>
              </div>
            </div>
            <p className="text-xl font-bold relative z-[1]">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </p>
            <p className="text-[#c195ff] text-sm">
              {" "}
              "I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup."
            </p>
          </div>
          <div className="card bg-[#49556b] text-white flow-content--m p-8 rounded-2xl  col-span-2 lg:col-span-1 shadow">
            <div className="flex items-center gap-4 card__author-info">
              <img
                src={testimonial2}
                alt="Johnathan's avatar"
                className="w-[40px] h-[40px] rounded-full border-2 border-[#b8bdca]"
              />
              <div className="flex flex-col card__author-description">
                <span className="text-sm">Daniel Clifford</span>
                <span className="text-sm text-[#c195ff]">
                  Verified Graduate
                </span>
              </div>
            </div>
            <p className="text-xl font-bold ">
              {" "}
              The team was very supportive and kept me motivated
            </p>
            <p className="text-[#c195ff] text-sm">
              "I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself."
            </p>
          </div>
          <div className="card bg-white text-[#94969b] flow-content--m p-8 rounded-2xl row-span-2 font-bold order-3 md:order-3 shadow col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 card__author-info">
              <img
                src={testimonial3}
                alt="Johnathan's avatar"
                className="w-[40px] h-[40px] rounded-full border-2 border-[#b8bdca]"
              />
              <div className="flex flex-col card__author-description">
                <span className="text-sm text-[#7b7d88]">Kira Whittle</span>
                <span className="text-sm text-[#c195ff]">
                  Verified Graduate
                </span>
              </div>
            </div>
            <p className="text-xl font-bold text-[#686a75]">
              {" "}
              Such a life-changing experience. Highly recommended!{" "}
            </p>
            <p className="text-[#c195ff] text-sm font-bold">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”{" "}
            </p>
          </div>
          <div className="card bg-white text-[#94969b] flow-content--m p-8 rounded-2xl font-extrabold md:order-4 shadow col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 card__author-info">
              <img
                src={testimonial4}
                alt="Johnathan's avatar"
                className="w-[40px] h-[40px] rounded-full border-2 border-[#b8bdca]"
              />
              <div className="flex flex-col card__author-description">
                <span className="text-sm text-[#7b7d88]">Jeanette Harmon</span>
                <span className="text-sm text-[#c195ff]">
                  Verified Graduate
                </span>
              </div>
            </div>
            <p className="text-xl font-bold text-[#686a75]">
              An overall wonderful and rewarding experience{" "}
            </p>
            <p className="text-[#c195ff] text-sm">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
          <div className="card bg-[#18202d] text-[#94969b] flow-content--m p-8 rounded-2xl font-extrabold col-span-2 order-2 md:order-5 shadow">
            <div className="flex items-center gap-4 card__author-info">
              <img
                src={testimonial5}
                alt="Johnathan's avatar"
                className="w-[40px] h-[40px] rounded-full border-2 border-[#6c458c]"
              />
              <div className="flex flex-col card__author-description">
                <span className="text-sm">Patrick Abrams</span>
                <span className="text-sm text-[#c195ff]">
                  Verified Graduate
                </span>
              </div>
            </div>
            <p className="text-xl font-bold text-white">
              {" "}
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </p>
            <p className="text-[#8d919c] text-sm">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
